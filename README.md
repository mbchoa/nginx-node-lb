# Background
This is a sample repo I created for the express purpose of learning and becoming familiar with how to setup NGINX service in front of Node.js servers.  Specifically in this particular case, I've configured NGINX as a reverse proxy and load balancer, load balancing 2 Node.js servers behind it.

# Setup
1. Install `nginx` on system by running `brew install nginx`
2. Copy `nginx.conf` file in this repo to `/usr/local/etc/nginx`
3. Run `npm install` in repo to install npm modules, mainly express
4. Run `npm start` to start up Node server instances (server #1 on localhost:8080 and #2 on localhost:8081)
5. Run `brew services start nginx` to startup the NGINX service at `http://localhost:8080`
6. Open browser to `http://localhost:8080` and refresh page a few times.  

You should see a page with the message "Hello World from Node Server #1" or "Hello World from Node Server #2".  This is effectively NGINX handling the request and proxying to the 2 Node servers using round-robin load balancing.

# Resources
- Installing NGINX on MacOSX: [http://learnaholic.me/2012/10/10/installing-nginx-in-mac-os-x-mountain-lion/](http://learnaholic.me/2012/10/10/installing-nginx-in-mac-os-x-mountain-lion/)
