# Next.js Migration Guide

## Migration completed:

✅ `next.config.js` created
✅ `app/layout.tsx` (root layout with metadata)
✅ `app/page.jsx` (home page - replaces src/App.jsx)
✅ `app/globals.css` (global styles)
✅ `package.json` updated (Vite → Next.js dependencies)
✅ `components/SmoothScroll.jsx` updated for client-side context

## Remaining manual steps:

### 1. Install dependencies

```bash
npm install
```

### 2. Move components from `src/components/` to `components/`

All your existing component files should be moved:

- `src/components/Home/` → `components/Home/`
- `src/components/Projects/` → `components/Projects/`
- `src/components/Skills/` → `components/Skills/`
- `src/components/Footer/` → `components/Footer/`
- `src/components/BubbleText/` → `components/BubbleText/`
- `src/components/Navbar/` → `components/Navbar/`
- `src/components/Hamburger/` → `components/Hamburger/`
- etc.

### 3. Move hooks and utilities

- `src/hooks/` → `hooks/`
- `src/util/` → `utils/` (or `lib/`)
- `src/data/` → `data/`

### 4. Move assets

- `src/assets/` → `public/` (for images used in pages)

### 5. Update imports in all components

Replace import paths like:

```javascript
// OLD (Vite/React)
import { useScreenSize } from "../../hooks/useScreenSize";

// NEW (Next.js)
import { useScreenSize } from "@/hooks/useScreenSize";
```

### 6. Remove/migrate old files

- Delete `src/` directory (after confirming all content is moved)
- Delete `vite.config.js`
- Delete `index.html`
- Delete `main.jsx`

### 7. Add 'use client' directive

All interactive components that use hooks, state, or event listeners need:

```javascript
"use client";
```

at the top of the file.

### 8. Start dev server

```bash
npm run dev
```

## Known compatibility notes:

- Framer Motion works great with Next.js
- EmailJS works without changes
- React hooks work as-is with 'use client' directive
- Tailwind classes work the same

## Key differences from Vite:

1. **Import aliases**: Use `@/` instead of relative paths
2. **Client vs Server**: Mark interactive components with 'use client'
3. **File structure**: App router uses `app/` directory, components stay in `components/`
4. **No `index.html`**: Next.js handles the HTML structure
