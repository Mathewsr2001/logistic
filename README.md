# Logistic — sitio institucional (Fire & Rescue)

Repositorio: [github.com/Mathewsr2001/logistic](https://github.com/Mathewsr2001/logistic)

Sitio público profesional para **Logistic Fire & Rescue** (uniformes, gorras, insignias para instituciones en Ecuador).

## Stack

- [Next.js](https://nextjs.org/) (App Router) + React 19  
- TypeScript  
- Tailwind CSS  
- Imágenes con [`next/image`](https://nextjs.org/docs/app/building-your-application/optimizing/images) (lista en `src/content/gallery.ts`, archivos en `public/galeria/`)

## Desarrollo local

1. Instala [Node.js LTS](https://nodejs.org) (incluye `npm`).
2. En la raíz del proyecto:
   ```bash
   npm install
   npm run dev
   ```
3. Abre `http://localhost:3000`.

Opcional: copia `.env.example` a `.env.local` y define `NEXT_PUBLIC_SITE_URL=https://TU-DOMINIO.vercel.app` para metadatos y Open Graph cuando pruebas fuera de Vercel.

## Galería y PDF

- **Fotos:** `public/galeria/logistic-01.jpeg` … `logistic-08.jpeg` (añade más JPEG/WebP aquí y entradas nuevas en `src/content/gallery.ts`).
- **Brochure:** `public/docs/logistic-catalogo.pdf` enlazado desde la web.

Los ZIP/WhatsApp sin versionar siguen en `_archive/` solo en tu máquina (ignorados en Git).

## Ramas y despliegue (Vercel gratis)

| Rama       | Rol típico        |
|-----------|-------------------|
| `main`    | Producción        |
| `develop` | Previews por PR/commit |

Pasos rápidos en [Vercel](https://vercel.com):

1. Cuenta gratis → **Add New Project** → importar `Mathewsr2001/logistic`.
2. **Framework preset:** Next.js (auto). **Build:** `npm run build`. **Install:** default.
3. Tras el primer deploy, opcionalmente asignas dominio `.vercel.app` o dominio propio en el plan Hobby (sin costo hasta los límites del plan gratis).

Las integraciones gratuitas incluyen previews en cada push a `develop` y producción cuando integras merges a `main` (según la rama que marques como *Production Branch* en el proyecto).

### Flujo diario recomendado

```bash
# Trabajar siempre desde develop para pruebas y previews gratuitas
git checkout develop
git pull origin develop

# tras cambiar código
git add -A && git commit -m "mensaje breve"
git push origin develop
```

Cuando apruebas en la preview generada por Vercel (`develop`):

```bash
git checkout main
git pull origin main
git merge develop
git push origin main          # Actualiza logistic-*.vercel.app en producción
git checkout develop          # Sigues desarrollando
```

## Subir código a GitHub (si aún no)

```bash
git remote add origin https://github.com/Mathewsr2001/logistic.git
git push -u origin main
git push -u origin develop
```

Primera vez: GitHub suele pedir [Personal Access Token](https://github.com/settings/tokens) o GitHub CLI en lugar de contraseña.
