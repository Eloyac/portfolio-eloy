# Portfolio — Eloy Angulo Cánovas

Portfolio personal de AI Engineer. Sitio estático sin dependencias ni build: HTML + CSS + JavaScript puro.

## Estructura

```
index.html          # contenido (español por defecto en el markup)
assets/styles.css   # sistema de diseño: temas, layout, animaciones
assets/script.js    # tema claro/oscuro, i18n ES/EN, terminal animada, reveals
```

## Ver en local

```bash
python -m http.server 4173
# → http://localhost:4173
```

(o `npx serve`, o abrir `index.html` directamente — no hay build.)

## Características

- **Tema oscuro/claro** — oscuro por defecto, persistido en `localStorage`.
- **Bilingüe ES/EN** — toggle en la nav; idioma inicial según el navegador, persistido.
- **Terminal animada** en el hero simulando un pipeline de extracción documental.
- **Animaciones de scroll** con `IntersectionObserver`; respeta `prefers-reduced-motion`.
- **Responsive** — breakpoints en 960px y 640px.
- Accesibilidad: skip link, landmarks semánticos, `focus-visible`, contraste alto.

## Editar contenido

Los textos viven en **dos sitios** que deben mantenerse sincronizados:

1. `index.html` — texto español inline (SEO / fallback sin JS).
2. `assets/script.js` — diccionarios `I18N.es` e `I18N.en` (lo que se renderiza al cambiar idioma).

Cada texto traducible lleva un atributo `data-i18n="clave"` en el HTML que apunta a su clave en los diccionarios.

## Desplegar

Cualquier hosting estático sirve tal cual — no hay build, la carpeta raíz es el sitio.

### Subir el repo a GitHub

```bash
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git branch -M main
git push -u origin main
```

(sustituye `<tu-usuario>/<tu-repo>` por el repositorio que hayas creado en GitHub — vacío, sin README ni licencia, para no chocar con el commit local).

### GitHub Pages

1. En GitHub, entra al repo → **Settings → Pages**.
2. En "Build and deployment" → Source: **Deploy from a branch**.
3. Branch: **main**, carpeta **/ (root)** → Save.
4. El sitio queda publicado en `https://<tu-usuario>.github.io/<tu-repo>/` en 1-2 minutos.

El archivo `.nojekyll` en la raíz ya está incluido para que GitHub Pages sirva los archivos tal cual, sin pasarlos por Jekyll.

### Netlify

1. En [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
2. Conecta GitHub y selecciona el repo.
3. Build command: **vacío**. Publish directory: **`.`** (ya viene preconfigurado en `netlify.toml`, Netlify lo detecta solo).
4. **Deploy site** — listo, con una URL `*.netlify.app` (se puede añadir dominio propio después en Site settings → Domain management).

Alternativa sin conectar Git: arrastrar la carpeta del proyecto directamente a la web de Netlify ("Deploy manually").
