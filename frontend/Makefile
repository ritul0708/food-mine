build-dev:
	docker build -t frontend-dev -f Dockerfile.dev .

###################

build-local:
	docker build \
		-t frontend-production:local \
		--build-arg CADDYFILE=Caddyfile.local \
		--build-arg BASE_URL=http://localhost:5000/api \
		-f Dockerfile.production .

###################

build-production:
	docker build \
		-t frontend-production:production \
		--build-arg CADDYFILE=Caddyfile.production \
		--build-arg BASE_URL=https://mern.mysuperawesomesite.com/api \
		-f Dockerfile.production .