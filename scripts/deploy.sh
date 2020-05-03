#!/bin/bash -ex

heroku login

cd $APP
yarn install
git add .
git commit -m "update"
heroku git:remote -a $HEROKU_APP
git push heroku master