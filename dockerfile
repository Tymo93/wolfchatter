# Pull node image from docker hub
FROM node:10-alpine

RUN apk update && apk add bash

# Set working directory
RUN mkdir -p /var/www/wolfchatter
WORKDIR /var/www/wolfchatter

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /var/www/wolfchatter/node_modules/.bin:$PATH
# create user with no password
RUN adduser --disabled-password chat

# Copy existing application directory contents
COPY . /var/www/wolfchatter
# install and cache app dependencies
COPY package.json /var/www/wolfchatter/package.json
COPY yarn.lock /var/www/wolfchatter/yarn.lock

# grant a permission to the application
RUN chown -R chat:chat /var/www/wolfchatter
USER chat

# clear application caching
RUN npm cache clean --force
# install all dependencies
RUN yarn

EXPOSE 3000
CMD [ "yarn", "start:dev" ]