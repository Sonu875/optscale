FROM python:3.12.3-slim
WORKDIR /usr/src/app/
ENV PYTHONPATH /usr/src/app/

COPY opticloud_client/herald_client opticloud_client/herald_client
COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/metroculus_client opticloud_client/metroculus_client
COPY opticloud_client/insider_client opticloud_client/insider_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client
COPY tools/cloud_adapter tools/cloud_adapter

COPY bumiworker/requirements.txt ./bumiworker/requirements.txt
RUN pip install --no-cache-dir -r bumiworker/requirements.txt
COPY bumiworker/bumiworker/modules ./bumiworker/bumiworker/modules
COPY bumiworker/bumiworker/*.py ./bumiworker/bumiworker/
COPY bumiworker/*.py ./bumiworker/

CMD ["python", "-u","/usr/src/app/bumiworker/bumiworker/main.py"]
