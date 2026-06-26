const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

// 1. Arreglar rutas y añadir Sukiyaki y Soba en la sección correcta
const japonFoodSection = data.japon.sections.find(s => s.title === 'Comidas Famosas y Especialidades');
if (japonFoodSection) {
    japonFoodSection.items.forEach(item => {
        if (item.image.includes('takoyaki.webp')) item.image = 'assets/imagen/japon/Takoyaki.webp';
        if (item.image.includes('okonomiyaki.webp')) item.image = 'assets/imagen/japon/Okonomiyaki.webp';
        if (item.image.includes('tonkatsu.webp')) item.image = 'assets/imagen/japon/Tonkatsu.webp';
    });

    if (!japonFoodSection.items.find(i => i.name === 'Sukiyaki')) {
        japonFoodSection.items.push({
            name: "Sukiyaki",
            description: "Un estofado tradicional que preparáis vosotros mismos en la mesa. Consiste en cocinar carne de ternera en finas lonchas junto a vegetales y tofu en una olla de hierro plana con un caldo dulce de soja. ¡El truco es mojar la carne en huevo crudo batido antes de comerla!",
            image: "assets/imagen/japon/sukiyaki.webp",
            mapLink: ""
        });
    }

    if (!japonFoodSection.items.find(i => i.name === 'Fideos Soba')) {
        japonFoodSection.items.push({
            name: "Fideos Soba",
            description: "Fideos muy finos y oscuros hechos de trigo sarraceno. Son ligeros y muy sanos. Se pueden comer calientes en caldo o, como es muy popular en verano, servidos fríos sobre una esterilla de bambú (Zaru Soba) para mojarlos en una salsa a base de soja fresca (Tsuyu).",
            image: "assets/imagen/japon/soba.webp",
            mapLink: ""
        });
    }
}

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("Sukiyaki, Soba añadidos y mayúsculas arregladas correctamente.");
