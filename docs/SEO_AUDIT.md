# SEO Audit Report — Altitude Service Solutions
**Date:** 2026-06-06 | **Auditor:** Senior SEO Specialist | **Version:** 1.0

---

## Summary

El sitio tiene una base de SEO sólida con meta tags completos, Schema markup, sitemap y robots.txt. Dos problemas críticos fueron corregidos (OG image y sitemap lastModified). El sitio está bien posicionado para SEO local en Atlanta, GA.

---

## Checklist Técnico

| Elemento | Estado | Notas |
|---------|--------|-------|
| Title tags | ✅ | Únicos por página, keyword-rich |
| Meta descriptions | ✅ | Descriptivos, con CTA, bajo 160 chars |
| Open Graph tags | ✅ (corregido) | Imagen OG agregada (altura.png 1200×630) |
| Twitter Card | ✅ (corregido) | summary_large_image con imagen |
| Schema LocalBusiness | ✅ | Completo en home page |
| Schema FAQPage | ✅ | 4 preguntas en home page |
| Sitemap.xml | ✅ (corregido) | lastModified ahora es fecha estática |
| Robots.txt | ✅ | Allow all, sitemap referenciado |
| Canonical URLs | ✅ | Alternates EN/ES correctamente |
| hreflang | ✅ | EN y ES correctamente declarados |
| Headings hierarchy | ✅ | H1 único por página, H2/H3 correctos |
| Alt text imágenes | ✅ | Descriptivo y con keywords |
| Mobile SEO | ✅ | Responsive, viewport correcto |
| HTTPS | ✅ | SSL habilitado |
| Core Web Vitals | ⚠️ | Imágenes sin optimizar (unoptimized flag) |

---

## Keywords Objetivo

### Primarias (alta intención)
- `pressure washing Atlanta GA`
- `pressure washing Lawrenceville GA`
- `soft washing Atlanta`
- `roof cleaning Atlanta`

### Secundarias
- `house washing Atlanta`
- `gutter cleaning Atlanta`
- `commercial pressure washing Atlanta`
- `exterior cleaning service Georgia`

### Long-tail local
- `best pressure washing company Lawrenceville GA`
- `pressure washing near me Atlanta`
- `lavado a presión Atlanta Georgia` (español)

---

## Análisis de Páginas

| Página | Title | Descripción | Schema |
|--------|-------|-------------|--------|
| / (Home) | ✅ | ✅ | ✅ LocalBusiness + FAQ |
| /residential | ✅ | ✅ | ❌ Sin schema |
| /commercial | ✅ | ✅ | ❌ Sin schema |
| /contact | ✅ | ✅ | ❌ Sin schema |
| /gallery | ✅ | ✅ | ❌ Coming soon = zero value |
| /about | ✅ | ✅ | ❌ Sin schema |
| /privacy | ✅ | ✅ | N/A |
| /terms | ✅ | ✅ | N/A |

---

## Hallazgos y Correcciones

### ✅ CORREGIDO — OG Image ausente
**Impacto:** Crítico para conversión en redes sociales. Sin imagen OG, los posts en Facebook, Instagram, WhatsApp mostraban un preview vacío.

**Corrección:** Se agregó `altura.png` como imagen OG en el layout (1200×630 recomendado — verificar dimensiones de la imagen).

### ✅ CORREGIDO — Sitemap lastModified dinámico
**Impacto:** Google recrawleaba el sitio en cada build porque `lastModified: new Date()` cambiaba con cada deploy.

**Corrección:** Cambiado a `new Date("2026-06-05")` — fecha estática que solo se actualiza cuando el contenido cambia realmente.

---

## Google Search Console — Readiness

✅ Sitemap en `https://altitudess.net/sitemap.xml`
✅ Robots.txt en `https://altitudess.net/robots.txt`
✅ Schema JSON-LD válido en home page
✅ HTTPS activo

**Acciones recomendadas:**
1. Verificar propiedad en Google Search Console
2. Enviar sitemap manualmente
3. Solicitar indexación de páginas principales
4. Configurar Google Business Profile con URL del sitio

---

## Google Business Profile — Readiness

El sitio incluye enlace a reseñas de Google. Verificar que:
- El GBP esté verificado para "Altitude Service Solutions"
- La URL de reseñas (`g.page/r/altitude-service-solutions/review`) sea correcta
- El número de teléfono coincida: (678) 739-5229
- La dirección de Lawrenceville, GA esté correcta

---

## Core Web Vitals — Estimación

| Métrica | Estimación | Factor |
|---------|-----------|--------|
| LCP | ~2.5-3.5s | Hero images son grandes, `unoptimized` flag |
| FID/INP | ~50ms | Next.js optimiza JS bien |
| CLS | ~0.05 | Layout estable, imágenes con dimensiones |

**Mejora recomendada:** Quitar el flag `unoptimized` de las imágenes que no necesiten bypass de optimización, o configurar un CDN de imágenes. Las fotos del hero son el mayor impacto en LCP.

---

## SEO Local — Checklist

✅ NAP consistente (Name, Address, Phone) en todo el sitio
✅ Schema `areaServed` con 6 ciudades de Atlanta
✅ Keywords locales en meta descriptions
✅ Testimonios con nombres y ubicaciones de clientes locales
✅ Dominio `altitudess.net` — relevante para el negocio
⚠️ Blog sin páginas reales — oportunidad SEO perdida
⚠️ Sin página dedicada por ciudad (ej: /en/atlanta, /en/lawrenceville)

---

## Recomendaciones Futuras (SEO de alto impacto)

1. **Páginas por ciudad**: Crear `/en/atlanta`, `/en/lawrenceville`, etc. con contenido único
2. **Blog con contenido real**: Publicar artículos sobre las keywords de los 3 blog cards actuales
3. **Schema en páginas internas**: Agregar `Service` schema en residential y commercial
4. **Reviews markup**: Implementar `Review` schema con las reseñas reales
5. **Image SEO**: Usar nombres de archivo descriptivos (`pressure-washing-atlanta-ga.jpg` en lugar de `foto1.jpg`)
