// PM2 config for Hostinger VPS deployment.
// The TanStack Start build outputs a Node-compatible server at .output/server/index.mjs
// when built outside of Cloudflare. On Hostinger we run that file directly.
module.exports = {
  apps: [
    {
      name: "lovable-app",
      script: ".output/server/index.mjs",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
        HOST: "0.0.0.0",
      },
      max_restarts: 10,
      restart_delay: 2000,
    },
  ],
};