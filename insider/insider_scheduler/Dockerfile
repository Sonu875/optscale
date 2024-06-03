FROM python:3.12.3-slim
WORKDIR /usr/src/app/
ENV PYTHONPATH=/usr/src/app/

COPY opticloud_client/config_client opticloud_client/config_client

COPY insider/insider_scheduler/requirements.txt insider/insider_scheduler/requirements.txt
RUN pip install --no-cache-dir -r insider/insider_scheduler/requirements.txt
COPY insider/insider_scheduler/*.py ./insider/insider_scheduler/

CMD ["python", "-u","/usr/src/app/insider/insider_scheduler/main.py"]
