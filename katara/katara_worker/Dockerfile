FROM python:3.12.3-slim
ENV PYTHONPATH /usr/src/app/
WORKDIR /usr/src/app/
COPY katara/katara_worker/requirements.txt .


COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/auth_client opticloud_client/auth_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client
COPY opticloud_client/katara_client opticloud_client/katara_client

RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /usr/src/app/katara/katara_worker

COPY katara/katara_worker/reports_generators ./reports_generators
COPY katara/katara_worker/*.py ./

CMD ["python", "-u","/usr/src/app/katara/katara_worker/main.py"]
