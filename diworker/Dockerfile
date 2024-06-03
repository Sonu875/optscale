FROM python:3.12.3-slim
WORKDIR /src
ENV PYTHONPATH=/src

COPY opticloud_client/herald_client opticloud_client/herald_client
COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/insider_client opticloud_client/insider_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client
COPY tools/cloud_adapter tools/cloud_adapter

COPY diworker/*.py diworker/
COPY diworker/requirements.txt diworker/requirements.txt
RUN pip install --no-cache-dir -r diworker/requirements.txt
COPY diworker/diworker diworker/diworker

# used to store the report being processed. Automatically deleted
VOLUME ["/src/reports"]

CMD ["/src/diworker/diworker/main.py"]
