#!/usr/bin/env bash
set -euo pipefail
# Uso: ./new-project.sh nombre-del-proyecto
if [ $# -ne 1 ]; then
    echo "Uso: $0 <nombre-del-proyecto>"
    exit 1
fi

NOMBRE="$1"
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RUTA="$BASE_DIR/projects/$NOMBRE"

if [ -d "$RUTA" ]; then
    echo -e "\e[31mEl proyecto '$NOMBRE' ya existe en $RUTA\e[0m"
    exit 1
fi

# --- Estructura de carpetas (separando lo público de lo privado) ---
mkdir -p "$RUTA/public"
mkdir -p "$RUTA/src"
mkdir -p "$RUTA/tests"

# --- index.php de entrada en public/ ---
cat > "$RUTA/public/index.php" <<PHP
<?php
require_once __DIR__ . '/../vendor/autoload.php';

echo '<h1>Proyecto: $NOMBRE</h1>';
echo '<p>PHP ' . phpversion() . '</p>';
PHP

# --- .htaccess en public/ con mod_rewrite activo (front controller) ---
cat > "$RUTA/public/.htaccess" <<'HTACCESS'
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.php [QSA,L]
HTACCESS

# --- composer.json en la raíz del proyecto ---
cat > "$RUTA/composer.json" <<JSON
{
    "name": "clase/$NOMBRE",
    "type": "project",
    "autoload": {
        "psr-4": {
            "App\\\\": "src/"
        }
    },
    "require": {},
    "require-dev": {
        "phpunit/phpunit": "^11.0"
    }
}
JSON

# --- Instala dependencias con Composer dentro del contenedor ---
docker compose exec -w "/var/www/projects/$NOMBRE" web composer install -q

# --- Regenera el certificado SSL wildcard incluyendo el nuevo proyecto ---
cd "$BASE_DIR/docker/certs"

DOMINIOS=("*.localhost" "localhost" "127.0.0.1" "::1")

for d in "$BASE_DIR/projects"/*; do
    if [ -d "$d" ]; then
        DOMINIOS+=("$(basename "$d").localhost")
    fi
done

mkcert \
    -key-file wildcard-localhost-key.pem \
    -cert-file wildcard-localhost.pem \
    "${DOMINIOS[@]}" > /dev/null 2>&1
cd "$BASE_DIR"

# Reinicia Apache en Docker para cargar el certificado actualizado
docker compose restart web > /dev/null 2>&1

echo -e "\e[32mProyecto '$NOMBRE' creado correctamente.\e[0m"
echo "HTTP: http://$NOMBRE.localhost/"
echo "HTTPS: https://$NOMBRE.localhost/"