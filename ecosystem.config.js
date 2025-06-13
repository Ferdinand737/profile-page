module.exports = {
  apps: [{
    name: "ferdinand-profile",
    script: "npx",
    args: "serve -s build -p 3001",
    interpreter: "none",
    env: {
      NODE_ENV: "production",
    }
  }]
}