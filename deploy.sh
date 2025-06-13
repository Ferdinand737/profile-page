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
npm install express

# Build the project
npm run build

# Ensure build directory exists and has correct permissions
if [ ! -d "build" ]; then
  echo "Build directory not found!"
  exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs

# Stop existing PM2 process if it exists
pm2 delete ferdinand-profile 2>/dev/null || true

# Start/Restart the PM2 process using the ecosystem file
pm2 start ecosystem.config.js

# Save PM2 process list to ensure it persists after reboot
pm2 save

# Display status
pm2 status