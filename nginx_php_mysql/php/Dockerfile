FROM php:7.2.10-fpm-alpine3.8

RUN apk add --update libpng libpng-dev && \
  docker-php-ext-install pdo pdo_mysql gd