SHELL = $(PWD)/scripts/SHELL

check:
	node -v
	npm -v

create:
	./scripts/create.sh

start:
	./scripts/start.sh

install:
	./scripts/install.sh

deploy:
	./scripts/deploy.sh