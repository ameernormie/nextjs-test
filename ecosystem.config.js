module.exports = {
  apps: [
    {
      name: "NextApp",
      script: "yarn",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
  deploy: {
    development: {
      key: "~/.ssh/id_rsa",
      user: "webadm",
      host: "143.198.130.53",
      ref: "origin/main",
      ssh_options: "ForwardAgent=yes",
      repo: "git@github.com:ameernormie/nextjs-test.git",
      path: "/var/www/next-app",
      env: {
        NODE_ENV: "development",
      },
      "post-deploy": "yarn install && yarn build && yarn serve",
    },
  },
};
