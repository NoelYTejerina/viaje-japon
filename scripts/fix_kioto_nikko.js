const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

// 1. Restaurar Kioto
const kiotoItems = data.kioto.sections.find(s => s.title && s.title.includes('Templos')).items;

const missingKioto = [
    {
        name: "Tenryu-ji",
        description: "Justo al salir del bosque de bambú. Es el templo zen más importante del oeste de Kioto. Su jardín paisajístico Sogenchi ha mantenido su diseño original durante siglos, enmarcando las montañas lejanas (técnica de Shakkei o paisaje prestado).",
        image: "assets/imagen/kioto/tenryuji.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Tenryuji+Temple+Kyoto"
    },
    {
        name: "Nanzen-ji",
        description: "Un inmenso templo zen en las colinas del este. Lo más surrealista de este lugar es que dentro de sus recintos cruza un imponente acueducto de ladrillo rojo de estilo europeo del siglo XIX, creando un choque arquitectónico fascinante e ideal para fotografiar.",
        image: "assets/imagen/kioto/nanzenji.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Nanzenji+Temple+Kyoto"
    },
    {
        name: "Santuario Yasaka (Gion Shrine)",
        description: "El corazón del famoso barrio de las Geishas, Gion. Su inmensa linterna y recinto están abiertos 24 horas y se vuelve mágico de noche. Conecta directamente con la avenida comercial de Shijo y con las tradicionales casas de madera de Gion Shirakawa.",
        image: "assets/imagen/kioto/yasaka.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Yasaka+Shrine+Kyoto"
    },
    {
        name: "Templo Sanjusangendo",
        description: "Impresionante. Una sola sala de madera de 120 metros de largo que alberga 1.001 estatuas de Kannon, la diosa de la misericordia, talladas en ciprés y cubiertas de oro. Es como el 'ejército de terracota' pero dorado. No dejan tomar fotos dentro, la atmósfera es sobrecogedora.",
        image: "assets/imagen/kioto/sanjusangendo.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Sanjusangendo+Kyoto"
    },
    {
        name: "Joyas Menores y Secretas",
        description: "Si os sobra tiempo en Kioto, escapad de las masas en: <br>- <strong>Otagi Nenbutsu-ji:</strong> 1200 estatuas de piedra cubiertas de musgo, y cada una tiene una cara diferente y cómica.<br>- <strong>Eikan-do:</strong> Famoso por sus hojas de arce en otoño (Momiji).<br>- <strong>Ryoan-ji:</strong> El jardín de rocas zen más famoso de Japón, pura meditación.",
        image: "assets/imagen/kioto/otros_templos.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Otagi+Nenbutsu-ji+Kyoto"
    }
];

missingKioto.forEach(item => {
    if (!kiotoItems.find(i => i.image === item.image)) {
        kiotoItems.push(item);
    }
});

// 2. Restaurar Nikko
const nikkoItems = data.nikko.sections.find(s => s.title && s.title.includes('Templos')).items;

const missingNikko = [
    {
        name: "Abismo Kanmangafuchi",
        description: "Una de las joyas ocultas. Un sendero paralelo al río flanqueado por casi 70 estatuas de piedra de Jizo (el protector de los viajeros y los niños). Están cubiertas de musgo y llevan gorros rojos. Dice la leyenda que el número de estatuas cambia cada vez que las cuentas.",
        image: "assets/imagen/nikko/kanmangafuchi.webp",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kanmangafuchi+Abyss+Nikko"
    }
];

missingNikko.forEach(item => {
    if (!nikkoItems.find(i => i.image === item.image)) {
        nikkoItems.push(item);
    }
});

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("Restaurados con éxito.");
