FROM node:8.10-alpine

RUN mkdir -p /backend/app

WORKDIR /backend/app

COPY . /backend/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]