# Yoruu AI Studio — Contexto del proyecto

Este repositorio es la web de Yoruu AI Studio y el blog SEO asociado.

**Contexto maestro completo:** ver `.claude/product-marketing.md`. Las skills `programmatic-seo` y `lead-magnets` lo leen automáticamente antes de cualquier tarea de contenido.

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
