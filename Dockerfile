FROM node:6
RUN mkdir -p /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=4000
ENV PORT $PORT
EXPOSE $PORT 5858 9229

WORKDIR /usr/src
COPY package.json /usr/src/
RUN npm install -g hexo
RUN npm install && npm cache clean
ENV PATH /data/node_modules/.bin:$PATH

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN hexo generate
CMD hexo server -s

