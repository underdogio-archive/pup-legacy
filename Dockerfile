FROM node:8.3.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json yarn.lock /usr/src/app/
RUN yarn install --non-interactive --production false
COPY . .
RUN yarn build

EXPOSE 9008
CMD [ "npm", "start" ]
