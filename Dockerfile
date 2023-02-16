FROM node:19-alpine3.16

RUN apk update && \
    apk add git && \
    npm i -g vite@latest

WORKDIR /app

EXPOSE 5173
