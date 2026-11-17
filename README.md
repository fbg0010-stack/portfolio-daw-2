# Portfolio de Francis

Portfolio profesional para el ciclo de Desarrollo de Aplicaciones Web.

## Enlaces

- GitHub Pages: https://fbg0010-stack.github.io/portfolio-daw-2/
- Repositorio: https://github.com/fbg0010-stack/portfolio-daw-2

La página se publica desde la rama `main` y la carpeta `(root)` con GitHub Pages.

## Qué he usado

- HTML y CSS
- Bootstrap 5.3
- Bootstrap Icons
- JavaScript
- Git y GitHub

## Proyectos

El portfolio incluye dos proyectos: la práctica Docker/PHP y Forja de Héroes.
Las demos de PHP se ejecutan en local; no funcionan directamente en GitHub Pages.

## Paleta y contraste

- Azul principal: `#3566A8`
- Azul oscuro para enlaces: `#24558E`
- Azul más oscuro al pasar el cursor: `#183E6C`
- Gris neutro: `#6B7280`
- Fondo alternativo: `#F3F6F9`
- Blanco de tarjetas y texto sobre azul: `#FFFFFF`

Comprobaciones previstas con WebAIM Contrast Checker:

| Combinación | Uso | Ratio |
|---|---|---:|
| `#3566A8` sobre `#FFFFFF` | Botones primarios e indicadores | 5.82:1 |
| `#24558E` sobre `#FFFFFF` | Enlaces | 7.04:1 |
| `#183E6C` sobre `#FFFFFF` | Enlaces al pasar el cursor | 10.10:1 |
| `#6B7280` sobre `#FFFFFF` | Bordes de campos | 4.83:1 |
| `#3566A8` sobre `#CFE2FF` | Badges principales | 4.90:1 |
| Texto secundario Bootstrap sobre blanco | Descripciones | 4.70:1 |

Los ratios deben verificarse de nuevo con WebAIM antes de la entrega si se modifica la paleta.

## Informe de calidad

Capturas obligatorias disponibles o pendientes de completar en `docs/evidencias/`:

- `lighthouse.png`: Lighthouse móvil, objetivos Accesibilidad, Buenas prácticas y SEO ≥ 90.
- `wave.png`: WAVE con 0 errores y 0 errores de contraste.
- `validador-html.png`: validador HTML del W3C sin errores.
- `validador-css.png`: validador CSS del W3C sin errores.
- `responsive-375px.png`, `responsive-768px.png` y `responsive-1200px.png`.

## Accesibilidad e interactividad

- Enlace para saltar al contenido principal.
- Navegación semántica y formulario con etiquetas, tipos, `autocomplete` y mensajes de error.
- Modal de Bootstrap con el detalle de los proyectos y cierre accesible.
- Foco visible, `aria-label`, iconos decorativos ocultos y soporte de movimiento reducido.

## Optimización

Las imágenes están comprimidas y son inferiores a 300 KB. El CV descargable está en
`docs/cv.pdf`. Todos los enlaces externos usan `target="_blank"` y `rel="noopener noreferrer"`.

## Declaración de uso de IA

Se ha utilizado asistencia de inteligencia artificial puntual para completar la estructura,
los componentes Bootstrap y la documentación técnica de esta entrega final. El contenido
académico y la selección de proyectos han sido revisados y adaptados para este portfolio.
