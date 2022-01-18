FROM node:lts AS development

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 8000

RUN npm install
