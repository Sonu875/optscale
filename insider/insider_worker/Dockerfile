FROM python:3.12.3-slim
WORKDIR /usr/src/app/
ENV PYTHONPATH=/usr/src/app/

COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client

COPY insider/insider_worker/requirements.txt insider/insider_worker/requirements.txt
RUN pip install --no-cache-dir -r insider/insider_worker/requirements.txt
COPY insider/insider_worker/*.py ./insider/insider_worker/
COPY insider/insider_worker/migrations insider/insider_worker/migrations
COPY insider/insider_worker/processors insider/insider_worker/processors
COPY insider/insider_worker/http_client insider/insider_worker/http_client

CMD ["python", "-u","/usr/src/app/insider/insider_worker/main.py"]
