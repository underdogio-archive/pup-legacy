FROM node:8.3.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN NODE_ENV=development npm install
COPY . /usr/src/app
RUN npm run build

EXPOSE 9008
CMD [ "npm", "start" ]
