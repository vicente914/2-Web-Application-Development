FROM php:8.5-apache

# --- Paquetes del sistema ---
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zlib1g-dev \
    default-mysql-client \
    curl \
    && rm -rf /var/lib/apt/lists/*

# --- Extensiones PHP ---
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo_mysql mysqli zip mbstring exif

# --- Xdebug ---
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

# --- Módulos de Apache ---
RUN a2enmod rewrite ssl headers vhost_alias

# --- Composer ---
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# --- Configuración de Apache ---
COPY apache/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY apache/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf
RUN a2ensite default-ssl

# --- Página de aviso ---
COPY apache/default-index.html /var/www/default/index.html

# --- Configuración de PHP ---
COPY apache/php.ini-development-overrides.ini /usr/local/etc/php/conf.d/zz-devoverrides.ini
COPY apache/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

# --- PHPUnit ---
RUN composer global require phpunit/phpunit --no-interaction \
    && ln -s /root/.composer/vendor/bin/phpunit /usr/local/bin/phpunit

WORKDIR /var/www/projects
EXPOSE 80 443   