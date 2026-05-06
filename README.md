## Logistic Fire & Rescue — sitio institucional

Stack: Next.js (App Router) + React + TypeScript + Tailwind CSS, optimizado para Vercel.

### Desarrollo local

1. Instala [Node.js LTS](https://nodejs.org) (incluye `npm`).
2. `npm install`
3. `npm run dev` y abre `http://localhost:3000`.

Variables opcionales: copiar `.env.example` a `.env.local` si defines un dominio definitivo (`NEXT_PUBLIC_SITE_URL`).

### Fotos públicas

Coloca JPG/WebP en `public/galeria/` y enlázalas con [`next/image`](https://nextjs.org/docs/app/building-your-application/optimizing/images) para mejorar LCP.

### Producción (`main`)

1. Repo en GitHub con ramas `main` y `develop`.
2. En Vercel, importar el proyecto: build `npm run build`, output estándar de Next.js.
3. Rama `develop` crea previews automáticos en Vercel; `main` despliega producción cuando se fusiona/manda push según configuración por defecto.

Los archivos de referencia en `_archive/` quedan solo en tu equipo (ignorados en Git).
