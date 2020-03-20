FROM node:12.16.1

RUN mkdir -p /usr/src/app

RUN npm install -g nodemon
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/
RUN chmod +x /usr/src/app/wait-for-it.sh

EXPOSE 3000
CMD ["./wait-for-it.sh", "db:3306", "--timeout=0", "--", "npm", "start"]