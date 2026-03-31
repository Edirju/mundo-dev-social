# 🌐 Mundo Dev Social

> Blog personal y portafolio de desarrollo web — construido con Astro, Content Island, Tailwind - y desplegado en Vercel.

**Live:** [edinson-mundo-blog.vercel.app](https://edinson-mundo-blog.vercel.app)

---

## ✨ Sobre el proyecto

Mundo Dev Social es un sitio personal que combina un portafolio de proyectos, un CV interactivo y un sistema de blog dual: posts estáticos escritos en Markdown/MDX y posts dinámicos gestionados desde un CMS headless (Content Island), que se actualizan en tiempo real sin necesidad de redeploy.

---

## 🗂 Secciones

| Ruta | Descripción |
|---|---|
| `/` | Página principal con presentación |
| `/blog` | Blog local — posts en Markdown y MDX |
| `/posts` | Blog CMS — posts dinámicos desde Content Island |
| `/projects` | Portafolio de proyectos |
| `/resume` | CV interactivo con opción de impresión |
| `/about` | Información de contacto y redes sociales |
| `/rss.xml` | Feed RSS del blog local |

---

## 🏗 Arquitectura

El proyecto usa una arquitectura de **rutas duales** con renderizado híbrido:

```
/blog/[...slug]   →  SSG estático   →  src/content/blog/ (archivos .md/.mdx)
/posts/[slug]     →  SSR dinámico   →  Content Island API (CMS externo)
```

- Las rutas `/blog/*` se prerenderizan en build-time — máxima velocidad.
- Las rutas `/posts/*` se sirven en tiempo real — los posts del CMS aparecen sin redeploy.

---

## 🛠 Stack técnico

| Tecnología | Versión | Uso |
|---|---|---|
| [Astro](https://astro.build) | ^6.0 | Framework principal |
| [React](https://react.dev) | ^19.0 | Content Islands (componentes interactivos) |
| [Tailwind CSS](https://tailwindcss.com) | ^4.0 | Estilos |
| [Content Island](https://contentisland.io) | ^0.17 | CMS headless para posts dinámicos |
| [Vercel](https://vercel.com) | — | Hosting y funciones serverless |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | ^5.0 | Soporte MDX en blog local |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | ^3.7 | Generación automática de sitemap |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | ^4.0 | Feed RSS |
| [ninja-keys](https://github.com/ssleptsov/ninja-keys) | ^1.2 | Buscador de atajos de teclado |

---

## 🚀 Instalación y desarrollo local

### Requisitos previos

- Node.js `>=22.12.0`
- Una cuenta en [Content Island](https://contentisland.io) con un token de acceso

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Edirju/mundo-dev-social.git
cd mundo-dev-social
 
# 2. Instalar dependencias
npm install
 
# 3. Crear el archivo de variables de entorno
cp .env.example .env.local
# Edita .env.local y agrega tu token de Content Island
 
# 4. Iniciar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build de producción en local |

---

## 🔑 Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto basándote en `.env.example`:

```bash
# Token secreto de acceso a Content Island CMS
CONTENT_ISLAND_SECRET_TOKEN=tu_token_aqui
```

En Vercel, configura esta variable en **Settings → Environment Variables**.

> ⚠️ Nunca subas `.env.local` al repositorio. Está incluido en `.gitignore`.

---

## 📁 Estructura del proyecto

```
mundo-dev-social/
├── src/
│   ├── assets/          # Imágenes, iconos SVG y shapes
│   ├── components/      # Componentes compartidos (Header, Footer, etc.)
│   ├── content/
│   │   └── blog/        # Posts del blog local (.md / .mdx)
│   ├── data/            # Datos estáticos (cv.json, projects.js, info.json)
│   ├── layouts/         # Layouts base (Layout, BlogPost, CV, Frame)
│   ├── lib/
│   │   └── client.ts    # Cliente de Content Island API
│   ├── pages/
│   │   ├── blog/        # Rutas estáticas del blog local
│   │   ├── posts/       # Rutas SSR del blog CMS
│   │   └── ...          # Resto de páginas
│   ├── pods/            # Módulos de UI por dominio (feature-based)
│   │   ├── post/
│   │   ├── post-collection/
│   │   ├── projects/
│   │   ├── resume/
│   │   └── ...
│   ├── styles/
│   │   └── global.css   # Estilos globales
│   └── content.config.ts # Definición de colecciones de contenido
├── .env.example         # Plantilla de variables de entorno
├── astro.config.mjs     # Configuración de Astro
├── tsconfig.json        # Configuración de TypeScript
└── vercel.json          # Configuración de Vercel
```

---

## 🔄 Flujo de trabajo

```
Contenido nuevo  →  Content Island CMS  →  visible al instante (SSR)
Cambios de código →  git push a main    →  Vercel redeploya automáticamente
```

---

## 👤 Autor

**Edinson R.** — [@Edirju](https://github.com/Edirju)

---

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

