module.exports = {
	apps: [
	  {
	    name: "NextApp",
	    script: "dist/main.js",
	    instances: 1,
	    autorestart: true,
	    watch: false,
	    max_memory_restart: "1G",
	  }
	],
	deploy: {
	  development: {
	    key: "~/.ssh/id_rsa",
	    user: "webadm",
	    host: "18.191.167.19",
	    ref: "origin/master",
	    ssh_options: "ForwardAgent=yes",
	    repo: "git@github.com:nerdyfactory/ID-admin-API.git",
	    path: "/var/www/next-app",
	    env: {
	      NODE_ENV: "development",
	    },
	    "post-deploy":
	      "yarn install && yarn typeorm migration:run && yarn build && yarn serve",
	  },
	},
      };
      