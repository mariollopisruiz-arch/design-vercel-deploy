# Sistema de diseño de blogs Yoruu AI Studio

Reglas de diseño para los artículos del blog. Aplican a todos los posts del calendario editorial. Estética: **lujo silencioso** (Ralph Lauren Purple Label) — sobrio, premium, sin estridencias.

---

## Paleta de colores

| Variable | Hex | Uso |
|---|---|---|
| `--navy-deep` | `#0B1929` | Fondos oscuros (header, hero, CTA, footer). Texto sobre fondo claro. |
| `--navy-medium` | `#1A2F45` | Subtitulares H3 sobre claro |
| `--gold` | `#B8972E` | Acentos, bordes, enlaces, labels |
| `--gold-hover` | `#D4AE3A` | Hover de elementos dorados |
| `--white` | `#FFFFFF` | Fondo principal del cuerpo, texto sobre navy |
| `--off-white` | `#F5F5F0` | **Recuadros destacados, TOC, sección related** |
| `--grey-medium` | `#6B6B6B` | Texto meta, footer |
| `#2a2a2a` | gris oscuro | Color de cuerpo de texto sobre fondo claro |

---

## 🚨 Regla inviolable: contraste

**NUNCA poner texto color navy o gris oscuro sobre fondo navy.** Cualquier elemento (`<strong>`, `<em>`, `<h3>`, `<p>`, `<li>`) dentro de un contenedor con fondo navy debe usar **blanco o tonos claros** explícitamente.

Para evitarlo de raíz: **prefiere recuadros con fondo `--off-white` (crema) o `--white`**. Solo el hero, el CTA y el footer usan fondo navy — y en esos casos todos los textos son explícitamente blancos.

---

## Componentes y sus fondos

| Componente | Fondo | Texto principal | Acentos |
|---|---|---|---|
| `.hdr` (header) | `--navy-deep` | blanco / dorado | borde inferior dorado |
| `.blog-hero` | `--navy-deep` | blanco / dorado | label superior dorado |
| `.article` (cuerpo) | blanco | `#2a2a2a` | strong en navy, em en serif itálico |
| `.toc` (índice) | `--off-white` | navy | borde izquierdo dorado, números en serif dorado |
| `.insight` (recuadro destacado) | **`--off-white`** | `#2a2a2a` | label en dorado, strong en navy, borde izquierdo dorado |
| `.quote` (pull-quote) | transparente | navy | serif itálico, borde izquierdo dorado |
| `.cta-box` (CTA final) | `--navy-deep` | blanco / dorado | botón outline dorado |
| `.related` (relacionados) | `--off-white` | navy | tarjetas con borde dorado |
| `.ftr` (footer) | `--navy-deep` | gris claro / dorado | — |

---

## Tipografía

- **Titulares (H1, H2):** Cormorant Garamond serif, `font-weight: 500-600`
- **Cuerpo:** Inter sans, `font-weight: 300` (light) para línea principal
- **Strong:** Inter `font-weight: 500` (medium), color navy sobre fondo claro
- **Em:** Cormorant serif itálico, `font-size: 1.05em`
- **Labels (uppercase):** Inter `font-weight: 300-500`, `letter-spacing: .25-.3em`
- **Pull-quote / hero subtitle:** Cormorant serif itálico

---

## Patrones de composición

### Hero del artículo

- Fondo navy, texto centrado
- Label dorado superior (categoría/sección)
- H1 grande en serif (`clamp(34px, 4.5vw, 60px)`)
- Subtítulo en serif itálico
- Meta line: autor · fecha · tiempo lectura

### Cuerpo del artículo

- Max-width `760px`
- Párrafo `lead` primero (font-size 20px, navy)
- H2 con línea dorada decorativa encima (`::before`)
- H3 en uppercase con tracking
- Listas con bullet `::before` dorado horizontal (sin discos)

### Recuadro destacado (insight)

- Siempre fondo `--off-white`
- Borde izquierdo dorado 3px
- Label superior dorado (uppercase, tracking)
- H3 en uppercase navy
- Texto en gris oscuro, strong en navy

### Pull-quote

- Fondo transparente
- Borde izquierdo dorado 2px
- Serif itálico, navy
- `font-size: clamp(22px, 2.6vw, 30px)`

### CTA final

- Fondo navy completo
- Label dorado, H2 serif blanco grande, subcopy en serif itálico gris claro
- Botón outline dorado: transparente con borde, hover invierte a dorado sólido

---

## Estructura HTML estándar de un artículo

```html
<header class="hdr">...</header>

<section class="blog-hero">
  <span class="blog-hero__lbl">Categoría</span>
  <h1 class="blog-hero__h1">Título principal</h1>
  <p class="blog-hero__sub">Subtítulo en serif itálico</p>
  <p class="blog-hero__meta">Yoruu AI Studio · DD Mes YYYY · X min de lectura</p>
</section>

<article class="article">
  <nav class="toc">
    <p class="toc__title">En este artículo</p>
    <ol>
      <li><a href="#id1">Sección 1</a></li>
      ...
    </ol>
  </nav>

  <p class="lead">Párrafo de entrada potente.</p>
  <p>Cuerpo normal...</p>

  <h2 id="id1">H2 de sección</h2>
  <p>...</p>

  <p class="quote">"Pull-quote en serif itálico"</p>

  <div class="insight">
    <span class="insight__lbl">Label dorado</span>
    <h3>Título del recuadro</h3>
    <p>Contenido del recuadro...</p>
  </div>
</article>

<div class="cta-box">
  <p class="cta-box__lbl">El siguiente paso</p>
  <h2 class="cta-box__h">CTA principal</h2>
  <p class="cta-box__p">Subcopy en serif itálico</p>
  <a href="../index.html#contacto" class="cta-box__btn">Agenda tu llamada estratégica</a>
</div>

<section class="related">
  <p class="related__lbl">Continúa leyendo</p>
  <div class="related__grid">
    <a class="related__card">...</a>
    <a class="related__card">...</a>
  </div>
</section>

<footer class="ftr">...</footer>
```

---

## Checklist obligatorio antes de publicar un blog

- [ ] Ningún `<strong>`, `<em>`, `<p>`, `<li>` con color navy/oscuro sobre fondo navy
- [ ] Recuadros `.insight` con fondo off-white
- [ ] CTA final en navy con botón dorado outline
- [ ] H1 único, jerarquía H2/H3 correcta
- [ ] TOC con anclas funcionando
- [ ] Schema.org Article + BreadcrumbList incluidos
- [ ] Meta title ≤60 chars, meta description ≤155 chars
- [ ] Canonical URL correcta
- [ ] OG y Twitter Cards
- [ ] GA4 con consent-gate (`G-0FBJLGEZS4`)
- [ ] Footer con enlaces a /, /legal/privacidad.html, /legal/cookies.html
- [ ] URL añadida a `sitemap.xml`
- [ ] Links a artículos relacionados
- [ ] Verificar en navegador (modo incógnito) tras desplegar
