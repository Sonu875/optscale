FROM python:3.12.3-slim

WORKDIR /usr/src/app/
ENV PYTHONPATH /usr/src/app/

COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client

COPY docker_images/organization_violations/requirements.txt docker_images/organization_violations/
RUN pip install --no-cache-dir -r docker_images/organization_violations/requirements.txt

COPY docker_images/organization_violations/scheduler.py docker_images/organization_violations/worker.py docker_images/organization_violations/

CMD ["python3", "docker_images/organization_violations/worker.py"]
