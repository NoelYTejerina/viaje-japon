const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');

let data;
try {
    data = JSON.parse(jsonString);
} catch (e) {
    console.error("Error parsing JSON:", e);
    process.exit(1);
}

if (data.japon && data.japon.sections) {
    const phrasesSection = data.japon.sections.find(s => s.title && s.title.includes('Frases Útiles'));
    if (phrasesSection) {
        if (!phrasesSection.content.includes("Una cerveza más")) {
            phrasesSection.content = phrasesSection.content.replace('</ul>', "<li><strong>Una cerveza más, por favor:</strong> Mo ippai biru onegaishimasu -> <em>Moo ippái biiru onegaishimás</em></li><li><strong>Agua gratis, por favor:</strong> O-hiya onegaishimasu -> <em>O-jiya onegaishimás</em> (En Japón el agua de grifo con hielo es siempre gratis)</li><li><strong>Picante / No picante:</strong> Karai / Karakunai -> <em>Karái / Karakunái</em></li><li><strong>Caliente / Frío (para fideos o bebidas):</strong> Atatakai / Tsumetai -> <em>Atatakái / Tsumetái</em></li><li><strong>¿Tienen menú en inglés?:</strong> Eigo no menyu wa arimasu ka? -> <em>Éigo no meniú ua arimás ka?</em></li><li><strong>Sin hielo, por favor:</strong> Kori nashi de onegaishimasu -> <em>Koorí nashi de onegaishimás</em></li></ul>");
        }
    }
}

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("¡Frases de bares y restaurantes añadidas con éxito!");
