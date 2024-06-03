FROM python:3.12.3-slim

WORKDIR /usr/src/app/
ENV PYTHONPATH /usr/src/app/

COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client
COPY docker_images/bi_scheduler/requirements.txt docker_images/bi_scheduler/
RUN pip install --no-cache-dir -r docker_images/bi_scheduler/requirements.txt

COPY docker_images/bi_scheduler/scheduler.py docker_images/bi_scheduler/scheduler.py

CMD ["python3", "docker_images/bi_scheduler/scheduler.py"]
