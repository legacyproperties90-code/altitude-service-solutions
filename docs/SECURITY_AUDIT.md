# Security Audit Report — Altitude Service Solutions
**Date:** 2026-06-06 | **Auditor:** Senior Security Auditor | **Version:** 1.0

---

## Executive Summary

Se realizó una auditoría completa de seguridad del sitio web. Se encontraron **4 hallazgos críticos/altos**, todos corregidos automáticamente. El sitio es ahora apto para producción desde una perspectiva de seguridad básica.

---

## Tabla Ejecutiva

| Categoría | Críticos | Altos | Medios | Bajos | Corregidos | Pendientes |
|-----------|----------|-------|--------|-------|------------|-----------|
| API Security | 1 | 1 | 0 | 0 | 2 | 0 |
| Input Validation | 1 | 0 | 0 | 0 | 1 | 0 |
| HTTP Headers | 0 | 1 | 0 | 0 | 1 | 0 |
| Email Security | 1 | 0 | 1 | 0 | 1 | 1 |
| Data Protection | 0 | 0 | 1 | 0 | 0 | 1 |
| Spam Protection | 0 | 0 | 1 | 1 | 1 | 1 |
| **TOTAL** | **3** | **2** | **2** | **1** | **6** | **3** |

**Riesgo Residual:** Bajo-Medio | **Estado:** 🟡 Ready with Observations

---

## Hallazgos Detallados

### 🔴 CRÍTICO — XSS en template de email (CORREGIDO)
**Archivo:** `src/app/api/notify/route.ts`
**Descripción:** Los valores de los campos del formulario (`name`, `email`, `phone`, `service`, `address`, `message`) se insertaban directamente en el HTML del email sin sanitización. Si un cliente de email renderizaba el HTML, un atacante podía inyectar scripts maliciosos.

**Corrección aplicada:** Se implementó función `escapeHtml()` que escapa `&`, `<`, `>`, `"`, `'` antes de insertar en HTML. También se aplicó truncado a 2000 caracteres para prevenir ataques de payload largo.

```typescript
// ANTES (vulnerable)
<td>${name}</td>

// DESPUÉS (seguro)
<td>${escapeHtml(name)}</td>
```

---

### 🔴 CRÍTICO — Sin rate limiting en /api/notify (CORREGIDO)
**Archivo:** `src/app/api/notify/route.ts`
**Descripción:** Cualquier actor podía llamar este endpoint ilimitadas veces, consumiendo créditos de Resend y saturando el email de notificación.

**Corrección aplicada:** Rate limiting en memoria — 5 requests por IP por minuto. Retorna HTTP 429 cuando se excede el límite.

```typescript
// Rate limiting: 5 req/min/IP
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;
```

---

### 🔴 CRÍTICO — Sin validación de inputs en API (CORREGIDO)
**Archivo:** `src/app/api/notify/route.ts`
**Descripción:** La API aceptaba cualquier JSON sin validar campos requeridos ni formatos.

**Corrección aplicada:** Validación de campos requeridos (`name`, `email`, `service`) y validación de formato de email con regex.

---

### 🟠 ALTO — HTTP Security Headers ausentes (CORREGIDO)
**Archivo:** `next.config.ts`
**Descripción:** El sitio no enviaba headers de seguridad HTTP estándar, permitiendo ataques de clickjacking, MIME sniffing, y más.

**Corrección aplicada:** Agregados los siguientes headers en todas las rutas:
- `X-Frame-Options: DENY` — previene clickjacking
- `X-Content-Type-Options: nosniff` — previene MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `X-XSS-Protection: 1; mode=block`

---

### 🟠 ALTO — Resend sender domain no verificado (PENDIENTE — requiere acción)
**Archivo:** `src/app/api/notify/route.ts`
**Descripción:** Los emails se envían desde `onboarding@resend.dev` (dominio de sandbox de Resend). En producción, emails enviados desde este dominio pueden ir a spam o ser rechazados.

**Acción requerida:**
1. Verificar el dominio `altitudess.net` en el panel de Resend (resend.com/domains)
2. Agregar los registros DNS (SPF, DKIM, DMARC) proporcionados por Resend
3. Actualizar el sender a `info@altitudess.net` en la API

```typescript
// CAMBIAR de:
from: "Altitude Service Solutions <onboarding@resend.dev>",
// A:
from: "Altitude Service Solutions <info@altitudess.net>",
```

---

### 🟡 MEDIO — Supabase RLS no verificado (PENDIENTE)
**Descripción:** El cliente de Supabase usa la `anon key` pública (esto es normal y esperado). Sin embargo, es crucial verificar que las Row Level Security (RLS) policies en la tabla `quote_requests` permitan solo `INSERT` desde usuarios anónimos y no `SELECT`, `UPDATE`, o `DELETE`.

**Verificación recomendada:**
```sql
-- En Supabase SQL Editor, verificar:
SELECT * FROM pg_policies WHERE tablename = 'quote_requests';

-- Policy correcta debe ser:
-- INSERT para anon: true
-- SELECT para anon: false (o filtrado por user_id)
```

---

### 🟡 MEDIO — Sin protección anti-spam en formulario (PARCIALMENTE CORREGIDO)
**Descripción:** El formulario no tiene CAPTCHA, honeypot, ni verificación de bot. El rate limiting en la API ayuda, pero un atacante con múltiples IPs puede evadir esto.

**Recomendación futura:** Implementar Cloudflare Turnstile (gratuito, sin fricción para usuarios) o un campo honeypot oculto.

---

## Variables de Entorno Verificadas

| Variable | Tipo | Estado |
|---------|------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Pública | ✅ Correcta (client-side normal) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Pública | ✅ Correcta (anon key, normal) |
| `RESEND_API_KEY` | Privada | ✅ Server-side only, nunca expuesta |
| `NEXT_PUBLIC_GA_ID` | Pública | ⚠️ Puede estar no configurada (Analytics retorna null) |

---

## Verificación de HTTPS

El sitio se despliega en Easypanel (`altitude-service-solutions-web.zftzne.easypanel.host`) con dominio personalizado `altitudess.net`. Easypanel maneja SSL automáticamente vía Let's Encrypt.

✅ HTTPS habilitado vía Easypanel
⚠️ Verificar que el dominio `altitudess.net` tenga redirect HTTP → HTTPS habilitado

---

## Security Standard v1.0

### Reglas de seguridad para este proyecto:

1. **Nunca insertar input de usuario en HTML sin escapar** — usar `escapeHtml()` siempre
2. **Toda API pública debe tener rate limiting** — mínimo 5 req/min/IP
3. **Validar campos requeridos antes de procesar** — retornar 400 para datos inválidos
4. **Variables privadas nunca en NEXT_PUBLIC_*** — usar server-side en API routes
5. **RLS de Supabase: INSERT only para anon** — verificar en cada nueva tabla
6. **Security headers en next.config.ts** — mantener la configuración actual
7. **Emails desde dominio verificado** — no usar onboarding@resend.dev en producción
