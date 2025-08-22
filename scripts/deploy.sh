#!/bin/bash

# Script de despliegue para SoftDev Nexus
# Para usar con cPanel y servidores Linux

# Configuración
SITE_NAME="softdevnexus"
PUBLIC_HTML="/home/username/public_html"
TEMP_DIR="/tmp/deploy_${SITE_NAME}"
BUILD_DIR="dist"

# Función de logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "Iniciando proceso de despliegue..."

# Verificar que existe el directorio de build
if [ ! -d "$BUILD_DIR" ]; then
    log "ERROR: No se encontró el directorio de build: $BUILD_DIR"
    exit 1
fi

# Crear backup antes del despliegue
log "Creando backup pre-despliegue..."
BACKUP_FILE="${PUBLIC_HTML}_backup_$(date +%Y%m%d_%H%M%S).tar.gz"
tar -czf /home/username/backups/$BACKUP_FILE -C /home/username public_html/

if [ $? -eq 0 ]; then
    log "Backup pre-despliegue creado exitosamente"
else
    log "WARNING: Falló la creación del backup pre-despliegue"
fi

# Crear directorio temporal
mkdir -p $TEMP_DIR

# Copiar archivos de build al directorio temporal
log "Copiando archivos de build..."
cp -r $BUILD_DIR/* $TEMP_DIR/

# Copiar archivos específicos del servidor
log "Copiando archivos de configuración del servidor..."
cp contact-form.php $TEMP_DIR/
cp .htaccess $TEMP_DIR/

# Crear directorios necesarios
mkdir -p $TEMP_DIR/logs
mkdir -p $TEMP_DIR/backups
mkdir -p $TEMP_DIR/tmp

# Copiar archivos de configuración
cp logs/.htaccess $TEMP_DIR/logs/
cp backups/.htaccess $TEMP_DIR/backups/

# Establecer permisos correctos
log "Estableciendo permisos..."
find $TEMP_DIR -type f -exec chmod 644 {} \;
find $TEMP_DIR -type d -exec chmod 755 {} \;
chmod 755 $TEMP_DIR/contact-form.php

# Sincronizar con el directorio público
log "Sincronizando archivos con public_html..."
rsync -av --delete $TEMP_DIR/ $PUBLIC_HTML/

if [ $? -eq 0 ]; then
    log "Sincronización completada exitosamente"
else
    log "ERROR: Falló la sincronización"
    exit 1
fi

# Limpiar directorio temporal
rm -rf $TEMP_DIR

# Verificar que el sitio esté funcionando
log "Verificando funcionamiento del sitio..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://softdevnexus.com)

if [ "$HTTP_STATUS" = "200" ]; then
    log "✅ Sitio web funcionando correctamente (HTTP $HTTP_STATUS)"
else
    log "⚠️  WARNING: El sitio web retornó HTTP $HTTP_STATUS"
fi

# Limpiar cache si existe
if [ -f "$PUBLIC_HTML/.htaccess" ]; then
    log "Limpiando cache del servidor..."
    # Aquí puedes agregar comandos específicos para limpiar cache
fi

log "🚀 Despliegue completado exitosamente!"

# Opcional: Enviar notificación
# echo "Despliegue completado para $SITE_NAME en $(date)" | mail -s "Despliegue Exitoso" admin@softdevnexus.com