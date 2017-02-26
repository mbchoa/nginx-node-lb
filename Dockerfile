FROM node:alpine

MAINTAINER Michael-Bryant Choa

COPY package.json /usr/server/
COPY index.js /usr/server/

WORKDIR /usr/server/

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]