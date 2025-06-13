module.exports = {
  apps: [{
    name: "ferdinand-profile",
    script: "./server.js",
    env: {
      NODE_ENV: "production",
    },
    error_file: "logs/err.log",
    out_file: "logs/out.log",
    max_restarts: 10,
    restart_delay: 4000,
    watch: false
  }]
}