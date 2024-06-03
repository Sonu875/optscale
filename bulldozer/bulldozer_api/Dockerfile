FROM python:3.12.3-slim
WORKDIR /usr/src/app
ENV PYTHONPATH /usr/src/app/

COPY bulldozer/bulldozer_api/requirements.txt bulldozer/requirements.txt
COPY bulldozer/bulldozer_api/migrations ./migrations

COPY opticloud_client/aconfig_cl opticloud_client/aconfig_cl
COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/insider_client opticloud_client/insider_client

RUN pip install --no-cache-dir -r /usr/src/app/bulldozer/requirements.txt

COPY bulldozer/bulldozer_api/* bulldozer/bulldozer_api/

CMD ["python", "-u","/usr/src/app/bulldozer/bulldozer_api/server.py"]
EXPOSE 8896
