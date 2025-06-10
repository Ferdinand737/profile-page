export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd ~/profile-page
git reset --hard HEAD
git pull origin master
npm install
npm run build
pm2 delete ferdinand-profile || true
pm2 start npm --name ferdinand-profile --env PORT=3001 --cwd build
pm2 save
pm2 restart ferdinand-profile
