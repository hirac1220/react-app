SHELL = $(PWD)/SHELL

check:
	node -v
	npm -v

create-app:
	./create-app.sh

start:
	./start.sh