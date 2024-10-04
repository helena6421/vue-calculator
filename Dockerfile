FROM node:20.10-alpine

WORKDIR /src

ARG NODE_ENV=production
COPY ./package*.json ./
RUN npm install -g nodemon
COPY package*.json ./

RUN npm install
COPY ./src src/

EXPOSE 8080
CMD ["npm", "run", "server"]