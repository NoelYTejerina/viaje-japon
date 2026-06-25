const fs = require('fs');

// 1. Modificar CSS para añadir estilos de naturaleza
const cssFile = 'C:/Users/noely/Desktop/Japon/styles/index.css';
let cssContent = fs.readFileSync(cssFile, 'utf8');

const natureStyles = `
/* Estilos para las Rutas de Naturaleza */
.nature-route {
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.1), rgba(0, 100, 0, 0.2));
    border-left: 5px solid #4ade80;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.nature-route h4 {
    color: #4ade80;
    margin-top: 0;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.nature-route ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
}

.nature-route ul li {
    margin-bottom: 5px;
    font-size: 0.95rem;
}

.nature-route .tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-right: 8px;
}

.tag.distance { background-color: rgba(99, 179, 237, 0.2); color: #63b3ed; }
.tag.elevation { background-color: rgba(246, 173, 85, 0.2); color: #f6ad55; }
.tag.difficulty-easy { background-color: rgba(74, 222, 128, 0.2); color: #4ade80; }
.tag.difficulty-mod { background-color: rgba(250, 204, 21, 0.2); color: #facc15; }
.tag.difficulty-hard { background-color: rgba(248, 113, 113, 0.2); color: #f87171; }
`;

if (!cssContent.includes('.nature-route')) {
    fs.writeFileSync(cssFile, cssContent + "\n" + natureStyles, 'utf8');
}

// 2. Modificar data.js para añadir las rutas
const dataFile = 'C:/Users/noely/Desktop/Japon/scripts/data.js';
let dataContent = fs.readFileSync(dataFile, 'utf8');
const prefix = 'window.appData = ';
const jsonString = dataContent.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

// Takayama
if (!data.takayama.sections.find(s => s.title === 'Rutas de Senderismo y Naturaleza')) {
    data.takayama.sections.push({
        title: "Rutas de Senderismo y Naturaleza",
        content: `
        <p>Los Alpes Japoneses son un paraíso para caminar. Alejaos del centro y respirad aire puro.</p>
        <div class="nature-route">
            <h4>s🥾 Ruta de los Templos (Higashiyama)</h4>
            <ul>
                <li><span class="tag distance">Distancia: 3.5 km</span> <span class="tag difficulty-easy">Dificultad: Muy Fácil</span> <span class="tag elevation">Desnivel: +50m</span></li>
                <li><strong>Puntos de Interés:</strong> Paseo por el bosque del este de la ciudad visitando las ruinas del antiguo castillo y una docena de pequeños santuarios cubiertos de musgo.</li>
            </ul>
        </div>
        <div class="nature-route">
            <h4>⛰️ Ruta del Monte Norikura</h4>
            <ul>
                <li><span class="tag distance">Distancia: 4.0 km</span> <span class="tag difficulty-mod">Dificultad: Moderada</span> <span class="tag elevation">Desnivel: +300m</span></li>
                <li><strong>Puntos de Interés:</strong> Llegaréis en bus a la cota 2700m. Caminaréis "sobre las nubes" viendo lagos glaciares y campos de flores alpinas.</li>
            </ul>
        </div>`
    });
}

// Shirakawago
if (!data.shirakawago.sections.find(s => s.title === 'Rutas de Senderismo y Naturaleza')) {
    data.shirakawago.sections.push({
        title: "Rutas de Senderismo y Naturaleza",
        content: `
        <p>Explorad el salvaje valle de Shogawa a pie.</p>
        <div class="nature-route">
            <h4>🥾 Ascenso al Mirador de Shiroyama</h4>
            <ul>
                <li><span class="tag distance">Distancia: 1.5 km</span> <span class="tag difficulty-easy">Dificultad: Fácil (Empinada)</span> <span class="tag elevation">Desnivel: +120m</span></li>
                <li><strong>Puntos de Interés:</strong> En vez de subir por asfalto, cruzad el bosque serpenteando la colina. Las vistas panorámicas de la aldea encajada en el valle asoman entre los árboles.</li>
            </ul>
        </div>
        <div class="nature-route">
            <h4>🌲 Ruta del Valle de Shogawa</h4>
            <ul>
                <li><span class="tag distance">Distancia: 4.0 km</span> <span class="tag difficulty-easy">Dificultad: Plana</span> <span class="tag elevation">Desnivel: Llano</span></li>
                <li><strong>Puntos de Interés:</strong> Alejados del núcleo turístico, seguiréis la ribera del caudaloso río turquesa cruzando pequeños puentes colgantes rodeados de verde esmeralda.</li>
            </ul>
        </div>`
    });
}

// Nakasendo
const nakasendoSection = data.nakasendo.sections.find(s => s.title === 'La Ruta (Qué Ver y Senderismo)');
if (nakasendoSection && !nakasendoSection.content) {
    // Si era un array de items, lo vamos a complementar con una sección de info técnica
    data.nakasendo.sections.push({
        title: "Ficha Técnica de Senderismo",
        content: `
        <div class="nature-route">
            <h4>🥾 Tramo Clásico: Magome a Tsumago</h4>
            <ul>
                <li><span class="tag distance">Distancia: 8.0 km</span> <span class="tag difficulty-mod">Dificultad: Moderada</span> <span class="tag elevation">Desnivel: +320m / -430m</span></li>
                <li><strong>Puntos de Interés:</strong> El Paso de Magome, cascadas Odaki y Medaki, paradas de té con hogueras y bosques de cipreses con campanas anti-osos.</li>
            </ul>
        </div>
        <div class="nature-route">
            <h4>🍃 Extensión: Tsumago a Nagiso</h4>
            <ul>
                <li><span class="tag distance">Distancia: 3.5 km</span> <span class="tag difficulty-easy">Dificultad: Fácil</span> <span class="tag elevation">Desnivel: Llano</span></li>
                <li><strong>Puntos de Interés:</strong> Una salida del circuito turístico que os lleva cruzando campos de cultivo y casitas locales hasta la remota estación de tren.</li>
            </ul>
        </div>`
    });
}

// Hakone
if (!data.hakone.sections.find(s => s.title === 'Rutas de Senderismo y Naturaleza')) {
    data.hakone.sections.push({
        title: "Rutas de Senderismo y Naturaleza",
        content: `
        <p>Hakone no son solo aguas termales, sus montañas volcánicas ofrecen trekkings épicos.</p>
        <div class="nature-route">
            <h4>🥾 El Antiguo Camino de Tokaido</h4>
            <ul>
                <li><span class="tag distance">Distancia: 3.0 km</span> <span class="tag difficulty-mod">Dificultad: Moderada</span> <span class="tag elevation">Desnivel: -200m (Bajada)</span></li>
                <li><strong>Puntos de Interés:</strong> Caminaréis sobre las inmensas piedras originales colocadas en 1600 y bajo la "Avenida de los Cedros" (árboles de 400 años).</li>
            </ul>
        </div>
        <div class="nature-route">
            <h4>🌋 Ascenso al Monte Kintoki</h4>
            <ul>
                <li><span class="tag distance">Distancia: 5.0 km</span> <span class="tag difficulty-hard">Dificultad: Exigente</span> <span class="tag elevation">Desnivel: +500m</span></li>
                <li><strong>Puntos de Interés:</strong> La caminata más dura, pero la recompensa al llegar a la cima es la mejor vista panorámica, ininterrumpida y frontal de todo el Monte Fuji.</li>
            </ul>
        </div>`
    });
}

// Kanazawa
if (!data.kanazawa.sections.find(s => s.title === 'Rutas de Naturaleza Urbana')) {
    data.kanazawa.sections.push({
        title: "Rutas de Naturaleza Urbana",
        content: `
        <div class="nature-route">
            <h4>⛩️ Ruta Sagrada Utatsuyama</h4>
            <ul>
                <li><span class="tag distance">Distancia: 4.5 km</span> <span class="tag difficulty-easy">Dificultad: Fácil</span> <span class="tag elevation">Desnivel: +140m</span></li>
                <li><strong>Puntos de Interés:</strong> Justo tras el barrio de Geishas, esta montaña esconde decenas de templos secretos engullidos por el espeso bosque húmedo. Al final hay un mirador hacia el Mar de Japón.</li>
            </ul>
        </div>`
    });
}

fs.writeFileSync(dataFile, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("Rutas de senderismo y estilos añadidos con éxito.");
