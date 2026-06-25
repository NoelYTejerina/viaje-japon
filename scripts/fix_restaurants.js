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

// 1. Añadir el tip de las 2 caras de Japón
if (data.japon && data.japon.sections) {
    const tipsSection = data.japon.sections.find(s => s.title && s.title.includes('Tips de Supervivencia'));
    if (tipsSection) {
        if (!tipsSection.content.includes("Las 2 caras de Japón")) {
            // Añadir el nuevo tip a la lista
            tipsSection.content = tipsSection.content.replace('</ul>', "<li><strong>Las 2 caras de Japón (Día y Noche):</strong> Un mismo monumento cambia drásticamente cuando cae el sol. Los japoneses se toman la iluminación nocturna muy en serio (el llamado <em>Light-up</em>). Un ejemplo claro es el Templo Senso-ji en Tokio o Fushimi Inari en Kioto: de día son hermosos pero están abarrotados de turistas; de noche, con las linternas encendidas, las sombras y la ausencia de gente, la atmósfera es absolutamente mística y sobrecogedora. Visitad los lugares clave dos veces si podéis.</li></ul>");
        }
    }
}

// 2. Mejorar restaurantes en Tokio para hacerlos auténticos locales
if (data.tokio && data.tokio.sections) {
    const foodSection = data.tokio.sections.find(s => s.title && s.title.includes('Dónde Comer'));
    if (foodSection) {
        // Reemplazar el contenido HTML con recomendaciones mucho más locales
        foodSection.content = `<p>Tokio es la ciudad con más estrellas Michelin del mundo. Hemos descartado las cadenas turísticas genéricas para recomendaros los auténticos lugares donde comen los locales japoneses con paladares exigentes.</p><ul class='text-list'>
<li><strong>Especialidad - Mercado de Toyosu (El mercado de pescado):</strong><br>Sustituto del mítico Tsukiji. Aquí llega el pescado más fresco del océano.<br><em>Recomendación Local:</em> <strong>Daiwa Sushi</strong> (en el propio mercado). Al nivel de restaurantes de lujo pero en ambiente de mercado. Las colas empiezan a las 5:00 am. Calidad suprema a precios moderados (unos 30-40€ menú omakase).<br><a href='https://www.google.com/maps/search/?api=1&query=Daiwa+Sushi+Toyosu+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Daiwa Sushi en Maps</a></li>
<li><strong>Ramen (Alta Gastronomía Asequible):</strong><br>Olvidaos de las cadenas de turistas. Probad el auténtico ramen artesanal.<br><em>Recomendación Local:</em> <strong>Fuunji (Shinjuku)</strong>. Famosísimo entre los oficinistas locales por su 'Tsukemen' (los fideos se sirven fríos aparte y se mojan en un caldo hiperdenso de pollo y pescado). Es un local pequeño, se come codo con codo en la barra y es alucinante.<br><a href='https://www.google.com/maps/search/?api=1&query=Fuunji+Shinjuku+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Fuunji en Maps</a><br><em>Otra joya:</em> <strong>Konjiki Hototogisu (Shinjuku)</strong>. Tiene Estrella Michelin pero cuesta unos 8€. Su caldo de ramen está hecho a base de almejas, trufa y setas porcini. Impresionante.</li>
<li><strong>Carne Wagyu / Yakiniku (Escondido y de altísima calidad):</strong><br><em>Recomendación Local:</em> <strong>Yoroniku (Minami-Aoyama)</strong>. Uno de los secretos mejor guardados para los amantes de la carne. A diferencia de lugares turísticos, aquí el personal (o tú mismo) asa cortes raros de Wagyu de grado A5 a la perfección. Es de alta gama (requiere reserva), pero la experiencia es celestial.<br><a href='https://www.google.com/maps/search/?api=1&query=Yoroniku+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Yoroniku en Maps</a></li>
<li><strong>Curry Japonés (El auténtico Katsu-Curry):</strong><br>Para evitar cadenas de comida rápida como CoCoIchi, id donde van los locales por el mejor curry oscuro.<br><em>Recomendación Local:</em> <strong>Bondy (Jimbocho)</strong>. Escondido en un callejón lleno de librerías antiguas, este lugar sirve un curry de estilo europeo increíblemente rico, espeso y suave, servido siempre con patatas asadas con mantequilla como aperitivo. Siempre hay cola de japoneses.<br><a href='https://www.google.com/maps/search/?api=1&query=Bondy+Jimbocho+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Bondy en Maps</a></li>
<li><strong>Okonomiyaki:</strong><br><em>Recomendación Local:</em> <strong>Sometaro (Asakusa)</strong>. Un local con más de 80 años de historia. Os quitaréis los zapatos al entrar y os sentaréis en el suelo de tatami frente a la plancha. Es de la vieja escuela y el ambiente parece sacado de la era Showa.<br><a href='https://www.google.com/maps/search/?api=1&query=Sometaro+Asakusa+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Sometaro en Maps</a></li>
<li><strong>Sukiyaki y Shabu-Shabu (Tradición Pura):</strong><br><em>Recomendación Local:</em> <strong>Ningyocho Imahan</strong>. Si queréis probar la auténtica carne cocinada a fuego lento en un ambiente hiper tradicional, este es el sitio histórico de Tokio por excelencia. Es caro, pero el almuerzo (lunch menu) ofrece una calidad idéntica a un precio mucho más accesible.<br><a href='https://www.google.com/maps/search/?api=1&query=Ningyocho+Imahan+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Imahan en Maps</a></li>
<li><strong>IZAKAYA DESTACADA - Shirubee (Shimokitazawa):</strong><br>Un izakaya que no aparece en las guías de turistas. Escondida tras una pequeñísima puerta en el barrio bohemio de Shimokitazawa. Su plato estrella es la caballa (saba) que el chef quema con un soplete en tu propia mesa.<br><a href='https://www.google.com/maps/search/?api=1&query=Shirubee+Shimokitazawa+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Shirubee en Maps</a></li>
<li><strong>Callejón de Izakayas - Omoide Yokocho (Shinjuku):</strong><br>El 'Callejón del Recuerdo' es una callejuela increíblemente estrecha paralela a las vías del tren, iluminada por farolillos rojos y llena de humo. Docenas de puestos enanos de Yakitori (brochetas de pollo). Súper auténtico y muy fotogénico.<br><a href='https://www.google.com/maps/search/?api=1&query=Omoide+Yokocho+Shinjuku+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Omoide Yokocho en Maps</a></li>
</ul>`;
    }
}

// Escribir el archivo de vuelta
const newContent = prefix + JSON.stringify(data, null, 4) + ';';
fs.writeFileSync(file, newContent, 'utf8');
console.log("¡Archivo data.js actualizado con restaurantes top y tips!");
