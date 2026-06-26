const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

// 1. Arreglar rutas de Takoyaki, Okonomiyaki y Tonkatsu (Case sensitive para Cloudflare)
const japonFoodSection = data.japon.sections.find(s => s.title && s.title.includes('10 Comidas que debes probar'));
if (japonFoodSection) {
    japonFoodSection.items.forEach(item => {
        if (item.image.includes('takoyaki.webp')) item.image = 'assets/imagen/japon/Takoyaki.webp';
        if (item.image.includes('okonomiyaki.webp')) item.image = 'assets/imagen/japon/Okonomiyaki.webp';
        if (item.image.includes('tonkatsu.webp')) item.image = 'assets/imagen/japon/Tonkatsu.webp';
    });

    // 2. Añadir Sukiyaki y Soba a la sección
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

// 3. Añadir la sección de Samuráis y Ninjas a Japón
if (!data.japon.sections.find(s => s.title === 'El Camino del Guerrero: Samuráis y Ninjas')) {
    data.japon.sections.push({
        title: "El Camino del Guerrero: Samuráis y Ninjas",
        content: `
        <p>Japón no se entiende sin la figura del <strong>Samurái</strong>, los honorables guerreros de élite que gobernaron el país durante más de 700 años (desde el siglo XII hasta 1868), y los temidos <strong>Ninjas o Shinobi</strong>, agentes encubiertos especializados en espionaje, infiltración y asesinato.</p>
        
        <p>Durante el período Edo (1603-1868), una época de paz impuesta por el poderoso clan Tokugawa, los samuráis pasaron de ser máquinas de guerra a eruditos, burócratas y artistas. Por su parte, los clanes ninja como Iga y Koka se disolvieron gradualmente, convirtiendo sus artes en mitos que la cultura pop ha engrandecido. A lo largo de nuestro viaje, visitaremos barrios samuráis intactos (como Nagamachi en Kanazawa) y castillos que sirvieron como fortalezas inexpugnables de sus señores feudales (Daimyos).</p>
        
        <div style="text-align: center; margin: 2rem 0;">
            <img src="assets/imagen/japon/ninja_samurai.png" alt="Retrato Samurai y Ninja" style="max-width: 100%; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.5); border: 2px solid var(--accent-gold);">
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 10px;"><em>Inmortalizados en el Japón Feudal.</em></p>
        </div>

        <p><em>¿Sabíais que...</em> los samuráis tenían el privilegio legal de llevar dos espadas (la larga <em>Katana</em> y la corta <em>Wakizashi</em>) y poseían el derecho de <em>Kiri-sute gomen</em>, que les permitía abatir en el acto a cualquier plebeyo que les faltara al respeto o comprometiera su honor? Afortunadamente para vosotros, ese derecho fue abolido durante la Restauración Meiji cuando Japón decidió abrir sus puertas al resto del mundo.</p>
        `
    });
}

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("Rutas de comida arregladas, Soba y Sukiyaki añadidos, y sección Samurai/Ninja creada.");
