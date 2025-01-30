export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to the project directory
cd ~/profile-page

# Pull the latest changes from the repo
git reset --hard HEAD
git pull origin main

# Install dependencies (if needed)
npm install --legacy-peer-deps

# Build the production Next.js app
npm run build

# Restart the application with PM2
pm2 restart ferdinand-profile
