# Background
This is a sample repo I created for the express purpose of learning and becoming familiar with how to setup NGINX service in front of Node.js servers.  Specifically in this particular case, I've configured NGINX as a reverse proxy and load balancer, load balancing 2 Node.js servers behind it.

# Branch Overview
This branch is focused on dockerizing the existing app.  It should be seen as an extension of the master branch, basically enhancing it and leveraging Docker to containerize pieces of the app into isolated parts.  Since this is a simple Node app, the parts that were isolated into containers were the Node apps themselves and the NGINX service which is responsible for the load balancing

# Setup
1. Install the latest Docker version on your system (see below)
2. Build Docker images from Dockerfiles:
    - Run `docker build -t username/node .` to create Node image
    - Run `docker build -t username/nginx -f Dockerfile_nginx .` to create NGINX image
    - Replace username with your own username.  This is just a convention you can tag the image with any name you want
3. Run `docker-compose up` and you're done!  You've effectively brought up 4 containers: 3 identical Node.js containers and 1 NGINX container which handles load balancing the 3 Node.js servers.

# Resources
- Install Docker [https://www.docker.com/products/docker#/mac](https://www.docker.com/products/docker#/mac)
- A Sample Docker workflow with Nginx, Node.js and Redis [http://anandmanisankar.com/posts/docker-container-nginx-node-redis-example/](http://anandmanisankar.com/posts/docker-container-nginx-node-redis-example/)