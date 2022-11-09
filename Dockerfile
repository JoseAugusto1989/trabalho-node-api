FROM node:alpine

WORKDIR /usr/src

COPY package*.json ./

EXPOSE 8084

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node", "app/index.js"]