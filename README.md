# Japón: La Aventura 🎌

![CI Status](https://github.com/NoelYTejerina/viaje-japon/actions/workflows/ci.yml/badge.svg)

Una aplicación web progresiva y de alto rendimiento diseñada a medida para un viaje de luna de miel por Japón. La plataforma sirve como un itinerario digital interactivo, guía cultural y base de datos offline (mediante caché inmutable) para 8 de las ciudades y regiones más espectaculares del país.

## 🌟 Características Principales

- **Arquitectura "Zero-Bundle":** Construido en Vanilla JavaScript, HTML5 y CSS3 sin dependencias frontend (ni React, Vue o bundlers pesados) para garantizar tiempos de carga sub-segundo en conexiones móviles inestables en Japón.
- **Inyección Dinámica de Datos:** Toda la información (historia, templos, restaurantes, rutas de senderismo) está centralizada en una base de datos JSON inyectada en el DOM en tiempo real mediante `app.js`.
- **Modo Oscuro / Claro Nativo:** Sistema de tematización basado en variables CSS que se adapta a las condiciones de iluminación (Modo Oscuro con tonos Carmesí japonés; Modo Claro con tonos Ola azul y Bambú).
- **Rutas de Senderismo Integradas:** Fichas técnicas automatizadas con distancia, desnivel y dificultad para rutas por los Alpes Japoneses (Hakone, Nakasendo, Takayama).

## 🏙️ Destinos Cubiertos
1. **Tokio** (La metrópolis infinita)
2. **Nikko** (No digas espléndido hasta que no lo veas)
3. **Hiroshima y Miyajima** (Paz y resiliencia)
4. **Kioto** (El corazón tradicional)
5. **Kanazawa** (La pequeña Kioto)
6. **Shirakawa-go** (Casas de cuento bajo la nieve)
7. **Takayama** (Madera y sake)
8. **Nakasendo - Valle de Kiso** (El camino del Samurái)
9. **Hakone** (Aguas termales y el Monte Fuji)

## 🛠️ Tecnologías y Stack

- **Frontend:** Vanilla HTML5, CSS3 (Custom Properties), JavaScript (ES6+).
- **Testing & QA:**
  - `vitest`: Pruebas unitarias de integridad estructural de datos (`data.js`).
  - `@playwright/test`: Pruebas End-to-End simulando flujos de usuario (navegación y UI).
- **CI/CD:** GitHub Actions (Bloqueo de despliegues si fallan los tests).
- **Hosting & Caché:** Cloudflare Pages (Edge network mundial, Headers estrictos y caché inmutable de 1 año para assets).

## 🚀 Instalación y Desarrollo Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/NoelYTejerina/viaje-japon.git
   cd viaje-japon
   ```
2. Instala las dependencias (Vitest y Playwright):
   ```bash
   npm install
   npx playwright install
   ```
3. Levanta un servidor local:
   ```bash
   npx serve -p 3000 .
   ```
4. Abre `http://localhost:3000` en tu navegador.

## 🧪 Ejecutar Tests

**Tests Unitarios (Validación de Datos)**
```bash
npm run test:unit  # O usar: npx vitest run
```

**Tests End-to-End (UI y Navegación)**
```bash
npm run test:e2e   # O usar: npx playwright test
```

## 🔒 Seguridad y Privacidad
El repositorio contiene un `robots.txt` explícito y cabeceras de Cloudflare Pages para disuadir la indexación de bots web, dado que es una guía de uso privado y personal.

---
*Diseñado y programado a medida por encargo.*
