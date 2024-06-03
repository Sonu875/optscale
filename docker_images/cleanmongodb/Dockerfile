FROM python:3.12.3-slim
WORKDIR /src
RUN mkdir -p /src/archive

COPY opticloud_client/config_client opticloud_client/config_client
COPY docker_images/cleanmongodb/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY docker_images/cleanmongodb/clean-mongo-db.py .

CMD ["python", "/src/clean-mongo-db.py"]
