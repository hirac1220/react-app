SHELL = $(PWD)/SHELL

check:
	node -v
	npm -v

create:
	./create.sh

start:
	./start.sh

install:
	./install.sh

deploy:
	./deploy.sh