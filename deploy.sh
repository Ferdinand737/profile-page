export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to the project directory
cd ~/profile-page

# Pull the latest changes from the repo
git reset --hard HEAD
git pull origin master

# Install dependencies (if needed)
npm install --legacy-peer-deps

# Build the production Next.js app
npm run build

# --- PM2 Restart Logic ---
# 1. Delete any existing process with the name 'ferdinand-profile'
pm2 delete ferdinand-profile || true

# 2. Start the application with the PORT environment variable
pm2 start npm --name ferdinand-profile --output /dev/null --error /dev/null --env PORT=3001

# 3. Save the updated process list.
pm2 save

# 4. Restart (optional, but good practice)
pm2 restart ferdinand-profile
