FROM node:15.4

WORKDIR /app
COPY . .
RUN yarn build && yarn install