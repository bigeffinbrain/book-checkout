FROM node:8.10-alpine

RUN mkdir -p /backend/app

WORKDIR /backend/app

COPY . /backend/app

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]