FROM php:7.4-fpm

RUN apt-get update && apt-get install -y libpq-dev libpng-dev
RUN docker-php-ext-install pgsql pdo_pgsql gd \
&& docker-php-ext-enable opcache

# install composer
RUN curl -sS https://getcomposer.org/installer | \
  php -- --install-dir=/usr/bin/ --filename=composer