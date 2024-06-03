FROM python:3.12.3-slim
ENV PYTHONPATH /usr/src/app/
WORKDIR /usr/src/app/

COPY opticloud_client/config_client opticloud_client/config_client
COPY tools/cloud_adapter tools/cloud_adapter
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client
COPY docker_images/power_schedule/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY docker_images/power_schedule/*.py docker_images/power_schedule/

CMD ["python3", "docker_images/power_schedule/worker.py"]
