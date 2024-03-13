FROM php:8.1-apache  

ARG RENDER_DB_USERNAME
ARG RENDER_DB_PASSWORD

ENV DB_USERNAME=$RENDER_DB_USERNAME
ENV DB_PASSWORD=$RENDER_DB_PASSWORD

RUN apt-get update && apt-get install -y \
    pdo-mysql \
    mysqli \
    curl \
    zip  

WORKDIR /var/www/html

COPY composer.json ./
RUN composer install --ignore-platform-reqs

COPY . .

EXPOSE 80  
