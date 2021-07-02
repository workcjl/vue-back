FROM node

LABEL name="back"

LABEL version="1.0"

COPY . /app

WORKDIR /app

RUN cnpm install

CMD cnpm start

EXPOSE 3000