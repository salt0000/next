FROM node:16.20.1

WORKDIR /app

COPY ./client /app
RUN npm install

RUN npm run build
CMD [ "npm", "run", "start" ]