SHELL = $(PWD)/SHELL

check:
	node -v
	npm -v

create-app:
	./create-app.sh

start:
	./start.sh

install:
	./install.sh

express:
	yarn add express express-favicon path

deploy:
	./deploy.sh