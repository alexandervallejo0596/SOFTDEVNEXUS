#!/bin/bash

# Script de backup automático para SoftDev Nexus
# Compatible con servidores Linux/cPanel

# Configuración
SITE_NAME="softdevnexus"
BACKUP_DIR="/home/username/backups"
PUBLIC_HTML="/home/username/public_html"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="${SITE_NAME}_backup_${DATE}.tar.gz"

# Crear directorio de backup si no existe
mkdir -p $BACKUP_DIR

# Función de logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> $BACKUP_DIR/backup.log
}

log "Iniciando backup del sitio web..."

# Crear backup del sitio completo
cd /home/username
tar -czf $BACKUP_DIR/$BACKUP_FILE public_html/ --exclude='public_html/logs/*' --exclude='public_html/tmp/*'

if [ $? -eq 0 ]; then
    log "Backup creado exitosamente: $BACKUP_FILE"
    
    # Obtener tamaño del archivo
    SIZE=$(du -h $BACKUP_DIR/$BACKUP_FILE | cut -f1)
    log "Tamaño del backup: $SIZE"
    
    # Limpiar backups antiguos (mantener solo los últimos 7 días)
    find $BACKUP_DIR -name "${SITE_NAME}_backup_*.tar.gz" -mtime +7 -delete
    log "Backups antiguos eliminados"
    
else
    log "ERROR: Falló la creación del backup"
    exit 1
fi

# Backup de configuraciones importantes
CONFIG_BACKUP="${SITE_NAME}_config_${DATE}.tar.gz"
tar -czf $BACKUP_DIR/$CONFIG_BACKUP public_html/.htaccess public_html/contact-form.php cgi-bin/php.ini

if [ $? -eq 0 ]; then
    log "Backup de configuraciones creado: $CONFIG_BACKUP"
else
    log "ERROR: Falló el backup de configuraciones"
fi

log "Proceso de backup completado"

# Opcional: Enviar notificación por email
# echo "Backup completado para $SITE_NAME en $(date)" | mail -s "Backup Exitoso" admin@softdevnexus.com