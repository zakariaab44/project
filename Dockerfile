FROM node:latest

COPY package.json .

RUN npm instal

COPY . .

CMD ["node", "./src/index.js"]

