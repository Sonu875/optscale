# Define variables
DOCKER_IMAGE_REST_API=rest_api-app
DOCKER_IMAGE_ETCD=etcd:local
DOCKER_IMAGE_MARIADB=mariadb:local
HELM_REPO_NGINX_STABLE=https://helm.nginx.com/stable
NGINX_RELEASE_NAME=nginx-ingress
OPTSCALE_RELEASE_NAME=optscale

# Targets
.PHONY: all clean build docker helm kubectl

all: clean build docker helm kubectl

clean:
	helm delete optscale

build:
	./build.sh

docker:
	docker build rest_api -t $(DOCKER_IMAGE_REST_API)
	docker pull hystax/etcd:2023110701-public 
	docker tag hystax/etcd:2023110701-public $(DOCKER_IMAGE_ETCD)
	docker pull mariadb
	docker tag mariadb $(DOCKER_IMAGE_MARIADB)

helm:
	helm repo add nginx-stable $(HELM_REPO_NGINX_STABLE)
	helm install $(NGINX_RELEASE_NAME) nginx-stable/nginx-ingress --set rbac.create=true
	helm install $(OPTSCALE_RELEASE_NAME) ./optscale-deploy/optscale

kubectl:
	kubectl port-forward svc/nginx-ingress-controller 8002:80
