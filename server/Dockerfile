FROM php:8.0-apache

WORKDIR /var/www/html

RUN apt-get update && \
    apt-get install -y \
        git \
        unzip \
        libzip-dev \
        libonig-dev \
        libxml2-dev \
        mariadb-client

RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath

RUN a2enmod rewrite

COPY composer.lock composer.json /var/www/html/

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install --no-interaction --no-scripts

COPY . /var/www/html/

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

RUN php artisan migrate --force

COPY docker/apache/default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80

CMD ["apache2-foreground"]
