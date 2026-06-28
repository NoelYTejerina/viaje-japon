# Documentación Técnica del Proyecto (SDLC)
**Proyecto:** Viaje a Japón a Medida
**Versión:** 1.0.0
**Fecha:** Junio 2026

---

## 1. Resumen Ejecutivo (Contexto del Cliente)
El cliente solicitó el diseño e implementación de una guía digital inmersiva y totalmente personalizada para su luna de miel en Japón (Julio 2026). El requisito principal era contar con una aplicación rápida, capaz de consultarse en condiciones de red móvil deficiente, que condensara itinerarios, historia, costumbres, recomendaciones gastronómicas y logística para 8 localizaciones diferentes.

## 2. Arquitectura y Stack Tecnológico
Para garantizar tiempos de carga "cero" y máxima compatibilidad móvil, se optó por una arquitectura **Zero-Bundle** basada íntegramente en lenguajes nativos del navegador:
- **Frontend Core:** HTML5 Semántico, CSS3 (con Custom Properties para Theming) y Vanilla JavaScript (ES6+).
- **Gestión de Datos:** Inyección dinámica de DOM basada en un objeto JSON (`window.appData`) cargado en el arranque, que evita llamadas asíncronas lentas (Fetch/XHR) durante la navegación por los menús.
- **Hosting:** Despliegue en **Cloudflare Pages**, aprovechando la red perimetral mundial (Edge Network) para servir los estáticos desde el nodo de Tokio directamente a los dispositivos móviles de los clientes.

## 3. UI/UX y Sistema de Diseño (Design System)
- **Tematización Dinámica:** Se implementó un modo claro/oscuro que el usuario puede alternar manualmente, orquestado mediante el toggle de una clase CSS en el `<body>` que sobreescribe las variables maestras.
  - *Dark Mode:* Basado en paletas gris antracita (`#121418`) contrastadas con "Carmesí Japonés" (`#D2232A`) y detalles en oro viejo (`#D4AF37`).
  - *Light Mode:* Basado en blancos espuma (`#F4F9F9`), contrastados con "Azul Ola" (`#006B8F`) y acentos en marrón "Bambú Oscuro" (`#9C6B30`) para garantizar máxima legibilidad a la luz del sol diurna.
- **Tipografía:** Combinación de fuentes Serif elegantes para los encabezados y Sans-Serif nítidas para la lectura continua en pantallas pequeñas.
- **Responsive Design:** La barra de navegación lateral y el grid de tarjetas (CSS Grid) colapsan automáticamente en dispositivos móviles utilizando Media Queries a los 900px, convirtiendo el menú en un carrusel táctil de *scroll horizontal* con "Snap-align".

## 4. Estrategia de Testing (QA)
Para garantizar la profesionalidad del código y evitar regresiones futuras en un proyecto con un volumen masivo de datos estáticos, se implementó un flujo de testing moderno:
- **Pruebas Unitarias (Vitest):** Garantizan la integridad estructural de `data.js`. Los tests comprueban:
  - Presencia obligatoria de todas las claves maestras de las ciudades.
  - Que toda sección contenga un título.
  - Que los elementos multimedia tengan rutas válidas hacia la carpeta estática (`assets/imagen/`).
- **Pruebas End-to-End (Playwright):** Simulan el comportamiento humano en el navegador (Desktop Chromium).
  - Verifican que la carga inicial muestre correctamente los datos de la portada ('Japón').
  - Testean el *toggle* del modo claro/oscuro comprobando las mutaciones de las clases CSS en el DOM.
  - Aseguran que la navegación por el menú principal inyecta los datos correctos de otras ciudades sin romper la UI.

## 5. Integración y Despliegue Continuo (CI/CD)
El repositorio de GitHub está enlazado directamente a Cloudflare Pages y a GitHub Actions.
1. **GitHub Actions (CI):** El archivo `.github/workflows/ci.yml` levanta un contenedor Ubuntu en cada Push a la rama `main`. Ejecuta Vitest y Playwright en paralelo. Si las aserciones fallan, el *Build* se reporta como fallido y se guarda un reporte en los Artefactos de GitHub.
2. **Cloudflare Pages (CD):** Si el código es válido, Cloudflare captura el repositorio y lo expone mundialmente en cuestión de segundos, respetando las reglas de caché inmutables definidas en el fichero `_headers` para reducir el ancho de banda y garantizar el acceso cuasi-offline.
