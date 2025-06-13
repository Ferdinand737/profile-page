#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to project directory
cd ~/profile-page

# Pull latest changes
git reset --hard HEAD
git pull origin master

# Install dependencies
npm install

# Build the project
npm run build

# Install serve globally if not already installed
npm install -g serve

# Stop existing PM2 process if it exists
pm2 delete ferdinand-profile 2>/dev/null || true

# Start/Restart the PM2 process using the ecosystem file
pm2 start ecosystem.config.js

# Save PM2 process list to ensure it persists after reboot
pm2 save