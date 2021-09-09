module.exports = {
  apps: [
    {
      name: "NextApp",
      script: "/usr/bin/yarn",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
  deploy: {
    production: {
      key: "~/.ssh/id_rsa",
      user: "webadm",
      host: "143.198.140.113",
      ref: "origin/main",
      ssh_options: "ForwardAgent=yes",
      repo: "git@github.com:ameernormie/nextjs-test.git",
      path: "/var/www/next-app",
      env: {
        NODE_ENV: "production",
      },
      "post-deploy": "yarn install && yarn build && yarn serve",
    },
  },
};
