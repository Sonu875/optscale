FROM python:3.12.3-slim

WORKDIR /usr/src/app/
ENV PYTHONPATH /usr/src/app/

COPY opticloud_client/auth_client opticloud_client/auth_client
COPY opticloud_client/herald_client opticloud_client/herald_client
COPY opticloud_client/report_client opticloud_client/report_client
COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client

COPY docker_images/keeper_executor/requirements.txt docker_images/keeper_executor/
RUN pip install --no-cache-dir -r docker_images/keeper_executor/requirements.txt

COPY docker_images/keeper_executor/worker.py docker_images/keeper_executor/

CMD ["python3", "docker_images/keeper_executor/worker.py"]
