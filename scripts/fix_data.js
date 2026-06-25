const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');

// Extraer el objeto JSON
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');

let data;
try {
    data = JSON.parse(jsonString);
} catch (e) {
    console.error("Error parsing JSON:", e);
    process.exit(1);
}

// 1. Añadir la sección de Frases a Japón
if (data.japon && data.japon.sections) {
    data.japon.sections.push({
        title: "Frases Útiles (Supervivencia Básica)",
        content: "<p>Los japoneses aprecian enormemente que un extranjero intente hablar un poco su idioma. Aquí tenéis las frases más esenciales que usaréis todos los días:</p><ul class='text-list'><li><strong>Gracias (informal):</strong> Arigato -> <em>Arigató</em></li><li><strong>Muchas gracias (formal):</strong> Arigato gozaimasu -> <em>Arigató gozaimás</em> (La 'u' final casi no suena)</li><li><strong>Por favor (al pedir algo):</strong> Onegaishimasu -> <em>Onegaishimás</em></li><li><strong>Disculpe / Perdón (para llamar al camarero o pedir paso):</strong> Sumimasen -> <em>Sumimasén</em></li><li><strong>Buenos días:</strong> Ohayo gozaimasu -> <em>Ohayó gozaimás</em></li><li><strong>Buenas tardes:</strong> Konnichiwa -> <em>Konnichiwá</em></li><li><strong>Sí / No:</strong> Hai / Iie -> <em>Jai / Íie</em></li><li><strong>¡Que aproveche! (Antes de comer):</strong> Itadakimasu -> <em>Itadakimás</em></li><li><strong>Estaba delicioso (Al terminar de comer):</strong> Gochisosama deshita -> <em>Gochisosama deshta</em></li><li><strong>¿Dónde está el baño?:</strong> Toire wa doko desu ka? -> <em>Toire uá doko deska?</em></li><li><strong>La cuenta, por favor:</strong> Okaikei onegaishimasu -> <em>Okaikéi onegaishimás</em></li><li><strong>Adelante / Pase usted:</strong> Dozo -> <em>Dóozo</em></li></ul>"
    });
}

// 2. Arreglar todos los enlaces de Google Maps en todas las ciudades
for (let cityKey in data) {
    let city = data[cityKey];
    if (city.sections) {
        city.sections.forEach(section => {
            if (section.items) {
                section.items.forEach(item => {
                    if (item.mapLink) {
                        // Generar un link de búsqueda universal que siempre funciona
                        let query = encodeURIComponent(item.name + ' ' + city.name + ' Japan');
                        item.mapLink = 'https://www.google.com/maps/search/?api=1&query=' + query;
                    }
                });
            }
            // También arreglar enlaces incrustados en contenido HTML si los hay
            if (section.content && section.content.includes("maps.app.goo.gl")) {
                section.content = section.content.replace(/href='https:\/\/maps\.app\.goo\.gl\/[^']*'/g, (match) => {
                    // Si encontramos un enlace en HTML, intentamos reemplazarlo por uno de búsqueda general para esa ciudad
                    let query = encodeURIComponent(city.name + ' Japan restaurants temples');
                    return "href='https://www.google.com/maps/search/?api=1&query=" + query + "'";
                });
            }
        });
    }
}

// Escribir el archivo de vuelta
const newContent = prefix + JSON.stringify(data, null, 4) + ';';
fs.writeFileSync(file, newContent, 'utf8');
console.log("¡Archivo data.js actualizado con éxito!");
