FROM node:18
LABEL authors="stepandemchenko"
WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev" ]
