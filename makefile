# Define a target for building the source
.PHONY: build
build:
	@echo "Running build script..."
	source build.sh

# Define a target for applying the Kubernetes deployment
.PHONY: apply
apply:
	@echo "Applying Kubernetes deployment..."
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml

# Define a target for installing Helm chart
.PHONY: install
install:
	@echo "Installing Helm chart..."
	helm install optscale optscale-deploy/optscale

# Define a target that runs all commands in sequence
.PHONY: all
all: build apply install
	@echo "All commands executed successfully."

