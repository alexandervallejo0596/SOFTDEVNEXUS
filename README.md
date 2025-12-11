# SoftDev Nexus - Sitio Web Corporativo

Este es el repositorio oficial del sitio web de SoftDev Nexus, una aplicación web moderna construida para mostrar los servicios, el portafolio y la información de contacto de la empresa. El sitio está diseñado para ser rápido, responsive y escalable.

## Características Principales

- **Stack Moderno**: Construido con React, TypeScript y Vite para un rendimiento y experiencia de desarrollo de primer nivel.
- **Diseño Responsive**: Totalmente adaptado para una visualización perfecta en computadoras, tablets y dispositivos móviles.
- **Rendimiento Optimizado**: Implementa técnicas avanzadas como carga asíncrona de CSS, caching del navegador y optimización de imágenes para tiempos de carga ultrarrápidos.
- **Estilizado con Tailwind CSS**: Emplea un enfoque "utility-first" para un diseño rápido, consistente y personalizable.
- **Formulario de Contacto con EmailJS**: El formulario envía notificaciones por correo electrónico y respuestas automáticas al cliente sin necesidad de un backend, gracias a la integración con EmailJS.

---

## Stack Tecnológico

- **Frontend**: React 18, TypeScript, Vite, React Router.
- **Estilos**: Tailwind CSS.
- **Servicios de Correo**: EmailJS.
- **Iconos**: Lucide React.
- **Hosting**: Desplegado en un entorno de hosting compartido (cPanel).

---

## Estructura del Proyecto

```
.
├── dist/             # Archivos de producción del frontend (generados por `npm run build`)
├── public/           # Archivos estáticos (imágenes, favicons, etc.)
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

## Instalación y Desarrollo Local

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

¡Listo! Ahora tienes el frontend corriendo en `http://localhost:5173`.

---

## Compilación y Despliegue (Producción)

El despliegue consiste en subir los archivos estáticos del frontend a tu hosting cPanel.

### 1. Compilar el Frontend

Este comando crea la carpeta `dist/` con todos los archivos optimizados para producción.

```bash
npm run build
```

### 2. Desplegar en cPanel

1.  Accede a tu cPanel y ve al **Administrador de Archivos**.
2.  Navega a la carpeta `public_html`.
3.  Sube y descomprime el contenido de la carpeta `dist/` dentro de `public_html`.
4.  Sube el archivo `.htaccess` a la carpeta `public_html` para asegurar que el enrutamiento de React y las políticas de caché funcionen correctamente.

---

## Optimización de Rendimiento

Se han aplicado varias técnicas para maximizar el rendimiento del sitio:

- **Política de Caché**: El archivo `.htaccess` instruye a los navegadores a cachear recursos estáticos (CSS, JS, imágenes) para acelerar las visitas recurrentes.
- **Carga Asíncrona de CSS**: El CSS principal se carga de forma asíncrona para evitar el bloqueo del renderizado, mejorando el First Contentful Paint (FCP).
- **Optimización de Imágenes**: Las imágenes se deben comprimir y servir en formatos modernos (como WebP) y con dimensiones adecuadas.
- **Minificación y Code Splitting**: Vite se encarga automáticamente de minificar el código y dividirlo en "chunks" que se cargan solo cuando son necesarios.

---

## Licencia

© 2024 SoftDev Nexus. Todos los derechos reservados.
