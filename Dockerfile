FROM mhart/alpine-node:6.9.1

RUN apk add --no-cache python g++ make
RUN mkdir -p /usr/src/app && \
    mkdir -p /usr/share/unicode
COPY third_party/UnicodeData.txt /usr/share/unicode/

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build

EXPOSE 9008
CMD [ "npm", "start" ]
