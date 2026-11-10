# Yoruu AI Studio — Contexto del proyecto

Este repositorio es la web de Yoruu AI Studio y el blog SEO asociado.

**Lee SIEMPRE estos dos archivos antes de cualquier tarea de contenido o diseño:**
- `.claude/product-marketing.md` — contexto maestro (empresa, buyer persona, posicionamiento, tono, precios)
- `.claude/blog-design-system.md` — sistema de diseño obligatorio para blogs (paleta, componentes, reglas de contraste)

Las skills `programmatic-seo` y `lead-magnets` cargan el primero automáticamente.

## Resumen ejecutivo

Yoruu AI Studio es un **sistema de generación de leads inmobiliarios premium**, no una productora de vídeo. Transforma fotos y renders en vídeo IA (voz, avatar, virtual staging) para agencias inmobiliarias de **lujo en toda España**, con foco en el comprador internacional (nórdicos, alemanes, ingleses, holandeses, franceses).

## Buyer persona

Director / CEO / Director de Marketing de agencia inmobiliaria de **lujo**, promotora de alta gama o estudio de arquitectura, en cualquier punto de España (Madrid, Marbella, Baleares, Costa Blanca, Barcelona, etc.). Ya invierte en marketing, tiene fotos profesionales, busca mejor ROI y diferenciación frente a grandes agencias internacionales.

## Cliente ancla

Deluxe Sweet Homes (promotora). Prospectos activos: Baes Real Estate, BoCasa.

## Tono y estética

**"Lujo silencioso"** — Ralph Lauren Purple Label. Sobrio, premium, directo. Datos > opiniones. Sin exclamaciones, sin amarillismo, sin hype. El lujo se transmite en la sobriedad.

- Navy `#0B1929` + dorado `#B8972E` + crema/blanco
- Serif (Cormorant Garamond) en titulares, sans (Inter) en cuerpo
- Tagline: **"Transformamos espacios. Generamos negocio."**

## Reglas inviolables para contenido

1. **Posicionar como SISTEMA**, no como "productora de vídeo"
2. **Lujo en toda España**, nunca limitar a una región
3. **Multilingüe e internacional** como diferenciador recurrente
4. Hablar siempre al dolor o deseo concreto del agente de lujo
5. Datos y hechos > opiniones; sin tecnicismos innecesarios
6. Cada pieza debe dejar al lector pensando: *"esto es exactamente lo que necesito"*

## Estructura del repo

- `index.html` — landing principal
- `blog/` — artículos SEO (calendario editorial: 2 posts/semana)
- `legal/` — privacidad y cookies (RGPD/LSSI-CE)
- `assets/` — imágenes y vídeos
- `sitemap.xml`, `robots.txt` — SEO técnico
- `.claude/skills/` — skills de programmatic-seo y lead-magnets
- `.claude/product-marketing.md` — contexto maestro de marketing

## Stack

Vanilla HTML/CSS/JS estático, desplegado en Vercel desde rama `main`.  
Dominio: `yoruuia.com`. GA4: `G-0FBJLGEZS4`. GSC: verificado.

## Notas de trabajo

- Branch de desarrollo: `claude/peaceful-fermi-vng28`
- Para que los cambios lleguen a producción: PR a `main` + merge

## Pendientes — RECORDATORIO OBLIGATORIO

**Antes de lanzar o preparar cualquier campaña de Meta Ads para leads**, recuérdale a Mario (al inicio de la conversación, antes de nada) que está pendiente montar el tracking por lead. Sin esto no se sabe de qué anuncio viene cada lead:

1. **Captura de UTM** en `/meta-landing` y `/guiones`: leer `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `ad_id` y `fbclid` al cargar, guardarlos en `sessionStorage` (first-touch) y enviarlos como campos ocultos con el formulario (Formspree).
2. **CRM en Google Sheets**: `/api/lead` reenvía cada lead a un Apps Script (web app) cuya URL va en la env var de Vercel `SHEETS_WEBHOOK_URL`. Columnas: Fecha · Origen · Nombre · Teléfono · Inmobiliaria · Rol · Fuente · Medio · Campaña · Conjunto · Anuncio · ad_id · Estado · Notas (Estado con desplegable: Nuevo / Contactado / Reunión / Propuesta / Cliente / Descartado).
3. **Parámetros de URL en cada anuncio** (Ads Manager → Seguimiento):
   `utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}&ad_id={{ad.id}}`
4. **Política de privacidad** (`legal/privacidad.html`): añadir Google Sheets como encargado y los campos teléfono / inmobiliaria / rol del formulario de `/guiones`.

Mario pospuso esta tarea (nov 2026). Elimina esta sección cuando esté hecha.
