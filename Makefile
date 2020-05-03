SHELL = $(PWD)/SHELL

check:
	node -v
	npm -v

create-app:
	./create-app.sh

start:
	./start.sh

router:
	npm install react-router-dom

axios:
	npm install axios

express:
	yarn add express express-favicon path