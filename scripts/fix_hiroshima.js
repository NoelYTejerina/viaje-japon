const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

const hiroshimaItems = data.hiroshima_miyajima.sections.find(s => s.title && s.title.includes('Monumentos y Templos')).items;

if (!hiroshimaItems.find(i => i.image === 'assets/imagen/hiroshima_miyajima/hiroshima_museum.webp')) {
    // Insertar el museo después del parque (índice 1)
    hiroshimaItems.splice(1, 0, {
        name: "Museo Conmemorativo de la Paz (Hiroshima)",
        description: "Visita dura pero absolutamente imprescindible. Explica detalladamente la historia antes, durante y las consecuencias de la bomba, desde un punto de vista puramente humano e histórico. Te cambiará la perspectiva.",
        image: "assets/imagen/hiroshima_miyajima/hiroshima_museum.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial+Museum"
    });
}

if (!hiroshimaItems.find(i => i.image === 'assets/imagen/hiroshima_miyajima/daishoin.webp')) {
    // Insertar las estatuas al final
    hiroshimaItems.push({
        name: "Las Estatuas de Daisho-in",
        description: "En los exteriores del templo Daisho-in, subiendo la montaña, os encontraréis con cientos de estatuillas de piedra de Buda (Rakan). Lo entrañable es que los lugareños les tejen y ponen gorritos de lana de colores para que no pasen frío.",
        image: "assets/imagen/hiroshima_miyajima/daishoin.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Daisho-in+Temple+Miyajima"
    });
}

// Actualizar la descripción del Parque para quitar lo del museo, ya que lo hemos separado
const parque = hiroshimaItems.find(i => i.image === 'assets/imagen/hiroshima_miyajima/hiroshima_peace.webp');
if (parque) {
    parque.name = "Parque Conmemorativo de la Paz";
    parque.description = "El epicentro de la explosión. Aquí encontraréis el sobrecogedor 'A-Bomb Dome' (la Cúpula de la Bomba, el único edificio que quedó en pie), la Llama de la Paz y el Monumento a los Niños.";
}

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("Restaurados Museo y Estatuas con éxito.");
