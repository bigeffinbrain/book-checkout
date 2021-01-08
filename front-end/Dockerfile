FROM node:13.12.0-alpine

RUN mkdir -p /front-end/src/app

WORKDIR /front-end/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json ./
# COPY package-lock.json ./
COPY . /front-end/src

RUN npm install 
RUN npm install react-scripts@3.4.1 -g 

EXPOSE 3000

CMD ["npm", "start"]