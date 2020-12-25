FROM php:7.4-fpm
RUN apt-get update && apt-get install -y libpq-dev libpng-dev libzip-dev zip
RUN docker-php-ext-install pgsql pdo_pgsql gd zip\
&& docker-php-ext-enable opcache

# install composer Latest

RUN curl -sS https://getcomposer.org/installer | \
  php -- --install-dir=/usr/bin/ --filename=composer