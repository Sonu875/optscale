FROM python:3.12.3-slim
ENV PYTHONPATH /usr/src/app/
WORKDIR /usr/src/app/
COPY katara/katara_service/requirements.txt .

COPY tools/opticloud_exceptions tools/opticloud_exceptions
COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/auth_client opticloud_client/auth_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client


RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /usr/src/app/katara/katara_service

COPY katara/katara_service/alembic ./alembic
COPY katara/katara_service/controllers ./controllers
COPY katara/katara_service/handlers ./handlers
COPY katara/katara_service/models ./models
COPY katara/katara_service/*.py ./
COPY katara/katara_service/alembic.template .
COPY katara/katara_service/swagger ./swagger
WORKDIR /usr/src/app/
RUN python -u katara/katara_service/write_spec.py


CMD ["python", "-u","/usr/src/app/katara/katara_service/main.py"]
EXPOSE 8935
