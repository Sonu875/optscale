FROM python:3.12.3-slim
WORKDIR /usr/src/app/
ENV PYTHONPATH=/usr/src/app/

COPY opticloud_client/config_client opticloud_client/config_client
COPY opticloud_client/rest_api_client opticloud_client/rest_api_client
COPY trapper/trapper_scheduler/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY trapper/trapper_scheduler/*.py ./trapper/trapper_scheduler/

CMD ["python", "-u","/usr/src/app/trapper/trapper_scheduler/main.py"]
