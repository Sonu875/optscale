import json
import logging
from auth.auth_server.controllers.user import UserAsyncController
from auth.auth_server.exceptions import Err
from auth.auth_server.handlers.v1.base import (
    BaseAsyncAuthItemHandler, BaseAsyncAuthCollectionHandler)
from auth.auth_server.utils import ModelEncoder
from tools.opticloud_exceptions.common_exc import (ForbiddenException,
                                                  WrongArgumentsException,
                                                  NotFoundException)
from tools.opticloud_exceptions.http_exc import OptHTTPError


LOG = logging.getLogger(__name__)


class UserAsyncItemHandler(BaseAsyncAuthItemHandler):
    def _get_controller_class(self):
        return UserAsyncController

    async def _get_item(self, item_id, fetch_resource_info=False, **kwargs):
        try:
            item, resource_info = await self.controller.get(item_id, **kwargs)
            type_name = self.controller.model_type.__name__
            if item is None:
                raise OptHTTPError(404, Err.OA0003, [type_name, item_id])
            # TODO: think about how to do it better
            if fetch_resource_info:
                return item, resource_info
            return item
        except WrongArgumentsException as ex:
            raise OptHTTPError.from_opt_exception(400, ex)
        except NotFoundException as ex:
            raise OptHTTPError.from_opt_exception(404, ex)
        except ForbiddenException as ex:
            raise OptHTTPError.from_opt_exception(403, ex)

    async def get(self, user_id, **kwargs):
        if not kwargs.get('ignore_permissions', False):
            kwargs.update(self.token)
        item, resource_info = await self._get_item(user_id, True, **kwargs)
        self._validate_params(item, **kwargs)
        response = self.merge_resource_info(item, resource_info)
        self.write(json.dumps(response, cls=ModelEncoder))

    async def patch(self, user_id, **kwargs):
        await super().patch(user_id, **kwargs)

    async def delete(self, user_id, **kwargs):
        await super().delete(user_id, **kwargs)


class UserAsyncCollectionHandler(BaseAsyncAuthCollectionHandler):
    def _get_controller_class(self):
        return UserAsyncController

    async def get(self, **kwargs):
        kwargs.update(self.token)

        users, resources_info = await self.controller.list(**kwargs)
        user_dict = {'users': [dict(list(user.to_dict().items()) + [
            ('scope_name', resources_info.get(user.scope_id, {}).get(
                'name'))]) for user in users]}
        self.write(json.dumps(user_dict, cls=ModelEncoder))

    async def post(self, **url_params):
        request_body = self._request_body()
        for param in ['self_registration', 'is_password_autogenerated']:
            if request_body.get(param) is not None:
                raise OptHTTPError(400, Err.OA0021, [param])
        await super().post(**url_params)
