FROM node

LABEL name="back"

LABEL version="1.0"

COPY . /app

WORKDIR /app

RUN npm install

CMD npm start

EXPOSE 3000