# SoftDev Nexus - Sitio Web Profesional

Sitio web corporativo para SoftDev Nexus, empresa especializada en desarrollo web profesional.

## 🚀 Características

- **Diseño Moderno**: Interfaz atractiva con animaciones y efectos visuales
- **Responsive**: Optimizado para todos los dispositivos
- **Rendimiento**: Carga rápida y optimización SEO
- **Formulario de Contacto**: Sistema PHP integrado
- **Seguridad**: Configuraciones de seguridad avanzadas

## 📁 Estructura del Proyecto

```
├── src/                    # Código fuente React/TypeScript
│   ├── components/         # Componentes reutilizables
│   ├── pages/             # Páginas principales
│   └── index.css          # Estilos globales
├── public_html/           # Archivos para servidor de producción
│   ├── .htaccess          # Configuración Apache
│   ├── contact-form.php   # Formulario de contacto
│   └── index.html         # HTML principal
├── cgi-bin/               # Configuraciones PHP
│   └── php.ini            # Configuración PHP 8.4
├── logs/                  # Directorio de logs
├── backups/               # Directorio de backups
├── scripts/               # Scripts de automatización
│   ├── backup.sh          # Script de backup
│   └── deploy.sh          # Script de despliegue
└── dist/                  # Build de producción
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: PHP 8.4
- **Build Tool**: Vite
- **Iconos**: Lucide React
- **Servidor**: Apache con cPanel

## 📋 Requisitos del Servidor

- **PHP**: 8.4 o superior
- **Apache**: Con mod_rewrite habilitado
- **SSL**: Certificado SSL configurado
- **Email**: Servicio de correo configurado
- **Permisos**: Escritura en directorios logs/ y backups/

## 🚀 Instalación y Despliegue

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build:production
```

### Despliegue en Servidor cPanel

1. **Subir archivos**:
   ```bash
   # Copiar contenido de dist/ a public_html/
   cp -r dist/* /home/username/public_html/
   ```

2. **Configurar permisos**:
   ```bash
   chmod 755 public_html/contact-form.php
   chmod 755 public_html/logs/
   chmod 755 public_html/backups/
   ```

3. **Configurar PHP**:
   - Subir `cgi-bin/php.ini` al directorio cgi-bin
   - Verificar que PHP 8.4 esté activo

4. **Configurar email**:
   - Actualizar `contact-form.php` con el email correcto
   - Verificar configuración de correo en cPanel

### Automatización con Scripts

```bash
# Hacer backup
chmod +x scripts/backup.sh
./scripts/backup.sh

# Desplegar automáticamente
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## 📧 Configuración del Formulario de Contacto

El formulario envía emails a: `contacto@softdevnexus.com`

### Características:
- Validación de datos
- Protección anti-spam
- Rate limiting
- Logs de actividad
- Respuestas automáticas

### Configuración:
1. Editar `contact-form.php`
2. Actualizar email de destino
3. Configurar servidor SMTP en cPanel

## 🔒 Seguridad

### Medidas Implementadas:
- Headers de seguridad en .htaccess
- Validación y sanitización de inputs
- Rate limiting en formularios
- Protección de directorios sensibles
- Logs de seguridad

### Configuraciones:
- SSL forzado (HTTPS)
- Protección XSS
- Prevención de clickjacking
- Ocultación de información del servidor

## 📊 Monitoreo y Logs

### Archivos de Log:
- `logs/error.log` - Errores PHP y servidor
- `logs/access.log` - Accesos al sitio
- `logs/contact.log` - Envíos de formulario
- `logs/security.log` - Eventos de seguridad

### Monitoreo:
```bash
# Ver logs en tiempo real
tail -f logs/error.log

# Verificar formulario de contacto
tail -f logs/contact.log
```

## 🔄 Backup y Mantenimiento

### Backup Automático:
```bash
# Configurar cron job para backup diario
0 2 * * * /home/username/scripts/backup.sh
```

### Mantenimiento:
- Backup diario automático
- Limpieza de logs antiguos
- Actualización de dependencias
- Monitoreo de rendimiento

## 🌐 Optimización SEO

### Implementado:
- Meta tags optimizados
- Structured data (JSON-LD)
- Sitemap XML
- Robots.txt
- Open Graph tags
- Twitter Cards

### Rendimiento:
- Compresión GZIP
- Cache del navegador
- Optimización de imágenes
- Minificación de CSS/JS

## 📱 Responsive Design

### Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Características:
- Mobile-first approach
- Touch-friendly interfaces
- Optimización para pantallas retina
- Carga adaptativa de imágenes

## 🎨 Personalización

### Colores Principales:
- Verde: #22c55e
- Cian: #06b6d4
- Azul: #3b82f6

### Fuentes:
- Principal: Inter (Google Fonts)
- Código: Courier New

## 📞 Soporte

Para soporte técnico o consultas:
- **Email**: contacto@softdevnexus.com
- **Teléfono**: +57 312 454 9040

## 📄 Licencia

© 2024 SoftDev Nexus. Todos los derechos reservados.