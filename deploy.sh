#!/bin/bash

# Navigate to project directory
cd ~/profile-page

# Pull latest changes
git reset --hard HEAD
git pull origin master

# Rebuild and restart the Docker container
docker compose up -d --build

# Display status
docker compose ps
