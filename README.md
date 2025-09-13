# SoftDev Nexus - Sitio Web Corporativo

Este es el repositorio oficial del sitio web de SoftDev Nexus, una aplicación web moderna construida para mostrar los servicios, el portafolio y la información de contacto de la empresa. El sitio está diseñado para ser rápido, responsive y escalable.

## ✨ Características Principales

- **Stack Moderno**: Construido con React, TypeScript y Vite para un rendimiento y experiencia de desarrollo de primer nivel.
- **Diseño Responsive**: Totalmente adaptado para una visualización perfecta en computadoras, tablets y dispositivos móviles.
- **Rendimiento Optimizado**: Implementa técnicas avanzadas como carga asíncrona de CSS, caching del navegador y optimización de imágenes para tiempos de carga ultrarrápidos.
- **Backend Integrado**: Utiliza un servidor Node.js con Express para gestionar el formulario de contacto de manera segura.
- **Estilizado con Tailwind CSS**: Emplea un enfoque "utility-first" para un diseño rápido, consistente y personalizable.

---

## 🛠️ Stack Tecnológico

- **Frontend**: React 18, TypeScript, Vite, React Router.
- **Backend**: Node.js, Express.js, Nodemailer.
- **Estilos**: Tailwind CSS.
- **Iconos**: Lucide React.
- **Hosting**: Desplegado en un entorno de hosting compartido (cPanel) para el frontend y un servidor Node.js para el backend.

---

## 📁 Estructura del Proyecto

```
.
├── dist/             # Archivos de producción del frontend (generados por `npm run build`)
├── public/           # Archivos estáticos (imágenes, favicons, etc.)
├── server/           # Código fuente del servidor backend (Node.js/Express)
│   ├── .env          # (¡No versionado!) Credenciales y variables de entorno
│   ├── index.js      # Lógica principal del servidor
│   └── package.json  # Dependencias del backend
├── src/              # Código fuente del frontend (React/TypeScript)
│   ├── components/   # Componentes reutilizables de React
│   ├── pages/        # Componentes que representan las páginas del sitio
│   ├── App.tsx       # Componente raíz y configuración de rutas
│   └── main.tsx      # Punto de entrada de la aplicación React
├── .htaccess         # Reglas de configuración para el servidor Apache (cache, redirecciones)
├── package.json      # Dependencias y scripts del frontend
├── tailwind.config.js # Configuración de Tailwind CSS
└── vite.config.ts    # Configuración de Vite
```

---

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para levantar un entorno de desarrollo en tu máquina local.

### Requisitos

- Node.js (versión 18 o superior)
- npm (generalmente se instala con Node.js)

### 1. Clonar el Repositorio

```bash
# HTTPS
git clone https://tudominio.com/tu-repo.git

# SSH
git clone git@tudominio.com:tu-repo.git

cd nombre-del-proyecto
```

### 2. Configurar el Frontend

Instala las dependencias y ejecuta el servidor de desarrollo de Vite.

```bash
# Instalar dependencias del frontend
npm install

# Levantar el servidor de desarrollo en http://localhost:5173
npm run dev
```

### 3. Configurar el Backend

El backend es necesario para que el formulario de contacto funcione. Abre una nueva terminal para este paso.

```bash
# Navegar al directorio del servidor
cd server

# Instalar dependencias del backend
npm install
```

Crea un archivo `.env` dentro de la carpeta `server/` y añade las siguientes variables con tus credenciales de correo. **Este archivo es crucial y no debe ser compartido ni subido al repositorio.**

```env
# Credenciales del servidor de correo
EMAIL_HOST=smtp.tudominio.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=tu-correo@tudominio.com
EMAIL_PASS=tu-contraseña

# Puerto para el servidor backend
PORT=3000
```

### 4. Ejecutar el Backend

Una vez configurado el archivo `.env`, puedes iniciar el servidor de Node.js.

```bash
# Iniciar el servidor backend
node index.js

# O si tienes nodemon instalado para desarrollo
nodemon index.js
```

¡Listo! Ahora tienes el frontend corriendo en `http://localhost:5173` y el backend en `http://localhost:3000`.

---

## 📦 Compilación y Despliegue (Producción)

El despliegue consta de dos partes: subir los archivos estáticos del frontend al hosting y ejecutar el servidor backend.

### 1. Compilar el Frontend

Este comando crea la carpeta `dist/` con todos los archivos optimizados para producción.

```bash
npm run build
```

### 2. Desplegar el Frontend en cPanel

1.  Accede a tu cPanel y ve al **Administrador de Archivos**.
2.  Navega a la carpeta `public_html`.
3.  Sube y descomprime el contenido de la carpeta `dist/` dentro de `public_html`.
4.  Sube el archivo `.htaccess` a la carpeta `public_html` para asegurar que el enrutamiento de React y las políticas de caché funcionen correctamente.

### 3. Desplegar el Backend

1.  Sube la carpeta `server/` completa a tu hosting, fuera de `public_html` (por ejemplo, en el directorio raíz del hosting).
2.  Crea el archivo `server/.env` con las credenciales de producción.
3.  Accede a tu terminal de hosting o a la herramienta "Setup Node.js App" en cPanel.
4.  Configura una nueva aplicación de Node.js apuntando a la carpeta `server/` y al archivo de inicio `index.js`.
5.  Instala las dependencias (`npm install`) desde la interfaz de cPanel o la terminal.
6.  Inicia la aplicación. Asegúrate de que se reinicie automáticamente si se detiene (puedes usar `pm2` si tienes acceso a la terminal).

---

## ⚡️ Optimización de Rendimiento

Se han aplicado varias técnicas para maximizar el rendimiento del sitio:

- **Política de Caché**: El archivo `.htaccess` instruye a los navegadores a cachear recursos estáticos (CSS, JS, imágenes) para acelerar las visitas recurrentes.
- **Carga Asíncrona de CSS**: El CSS principal se carga de forma asíncrona para evitar el bloqueo del renderizado, mejorando el First Contentful Paint (FCP).
- **Optimización de Imágenes**: Las imágenes se deben comprimir y servir en formatos modernos (como WebP) y con dimensiones adecuadas.
- **Minificación y Code Splitting**: Vite se encarga automáticamente de minificar el código y dividirlo en "chunks" que se cargan solo cuando son necesarios.

---

## 📄 Licencia

© 2024 SoftDev Nexus. Todos los derechos reservados.
