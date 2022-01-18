FROM node:lts AS development

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm install
