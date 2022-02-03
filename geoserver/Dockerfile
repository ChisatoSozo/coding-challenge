FROM node:16

# TODO: This dockerfile is not optimized for layer caching

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build

WORKDIR /usr/src/app
RUN npm install

CMD [ "node", "index.js" ]