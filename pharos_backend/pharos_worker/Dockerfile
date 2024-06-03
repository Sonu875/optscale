FROM python:3.12.3-slim
WORKDIR /usr/src/app/
ENV PYTHONPATH=/usr/src/app/

COPY pharos_backend/pharos_worker/requirements.txt ./requirements.txt
COPY opticloud_client/config_client opticloud_client/config_client

RUN pip install --no-cache-dir -r requirements.txt


WORKDIR /usr/src/app/pharos_backend/pharos_worker
COPY pharos_backend/pharos_worker/*.py ./

CMD ["python", "-u","/usr/src/app/pharos_backend/pharos_worker/worker.py"]
