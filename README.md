# Las Nubes Hostal — Sitio Web

Tu refugio en la montaña, al pie del Volcán Barú. Cerro Punta, Chiriquí, Panamá.

## Stack

- React 18 + TypeScript
- Vite (bundler)
- Tailwind CSS
- Componentes propios (sin dependencias de UI externas)

## Estructura

```
src/
├── components/
│   └── sections/
│       ├── Navbar.tsx        # Navegación + drawer mobile
│       ├── Hero.tsx          # Sección portada
│       ├── Badges.tsx        # Barra de puntuaciones
│       ├── Nosotros.tsx      # Historia familiar García
│       ├── Servicios.tsx     # Grid de servicios
│       ├── Habitaciones.tsx  # 3 habitaciones
│       ├── Galeria.tsx       # Galería de fotos
│       ├── Resenas.tsx       # Carrusel de reseñas
│       ├── Mapa.tsx          # Google Maps + ubicación
│       ├── Contacto.tsx      # Formulario de reserva
│       └── Footer.tsx        # Footer en columnas
├── data/
│   └── images.ts             # Imágenes en base64
├── hooks/
│   └── useReveal.ts          # Hook animaciones scroll
└── index.css                 # Variables de marca + animaciones
```

## Desarrollo local

```bash
pnpm install
pnpm run dev
```

## Deploy en Vercel

1. Sube esta carpeta a GitHub (o arrastra a Vercel directamente)
2. Vercel detecta automáticamente Vite
3. Build command: `pnpm run build`
4. Output directory: `dist`

O simplemente conecta tu repo de GitHub a Vercel y cada push hace deploy automático.

## Contacto

- WhatsApp: +507 6810 9090
- Instagram: @lasnubeshostal
- Ubicación: El alto de Las Nubes, Cerro Punta, Chiriquí, Panamá
