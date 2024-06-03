FROM python:3.12.3-slim
WORKDIR /usr/src/app/
ENV PYTHONPATH /usr/src/app/

COPY opticloud_client/config_client opticloud_client/config_client

COPY docker_images/configurator/requirements.txt docker_images/configurator/
RUN pip install --no-cache-dir -r docker_images/configurator/requirements.txt

COPY docker_images/configurator/configurator.py docker_images/configurator/

CMD ["python", "docker_images/configurator/configurator.py", "/config/config"]
