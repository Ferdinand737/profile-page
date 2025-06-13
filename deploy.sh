#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd ~/profile-page

git reset --hard HEAD
git pull origin master

npm install

npm run build

npm install -g serve

if pm2 list | grep -q "profile-page"; then
    pm2 restart profile-page
else
    pm2 start serve --name "profile-page" -- -s build -p 3001
fi

pm2 save
