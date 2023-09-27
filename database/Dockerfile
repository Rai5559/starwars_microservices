FROM node:18

WORKDIR /app

ENV PORT=8000
ENV MONGO_URI=uri_mongo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]


