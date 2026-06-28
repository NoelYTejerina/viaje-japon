const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'data.js');
let content = fs.readFileSync(file, 'utf8');

const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

const emergenciasTitle = "Teléfonos de Emergencia y Asistencia Consular";

if (!data.japon.sections.find(s => s.title === emergenciasTitle)) {
    data.japon.sections.push({
        title: emergenciasTitle,
        content: `
        <p>Japón es uno de los países más seguros del mundo, pero ante una pérdida de pasaporte, problema de salud o imprevisto legal, es vital saber a quién acudir.</p>
        
        <ul class='text-list'>
            <li><strong>Policía (Emergencias): <span style="color: var(--accent-red); font-size: 1.2rem;">110</span></strong><br>
            <em>Nota Local:</em> En cada barrio encontraréis pequeñas comisarías llamadas <strong>Koban (交番)</strong>. Son la forma más rápida de pedir ayuda en persona, preguntar direcciones o reportar objetos perdidos. La mayoría tienen agentes dispuestos a ayudar, usando traductores si es necesario. Hay una línea especial en inglés en Tokio: 03-3501-0110.</li>
            
            <li><strong>Ambulancia y Bomberos: <span style="color: var(--accent-red); font-size: 1.2rem;">119</span></strong><br>
            A diferencia de otros países, la ambulancia en Japón es gratuita, pero los costes médicos derivados no lo son (¡siempre viajad con seguro!).</li>
            
            <li><strong>Embajada de España en Tokio</strong><br>
            Cubre emergencias a nivel nacional. Si perdéis el pasaporte, este es vuestro salvavidas.<br>
            📍 <em>Dirección:</em> 1-3-29 Roppongi, Minato-ku, Tokyo 106-0032.<br>
            📞 <em>Teléfono General:</em> +81 (0)3 3583 8531<br>
            🚨 <strong>Teléfono de Emergencia Consular:</strong> +81 (0)80 3469 2297 <em>(Solo para urgencias graves 24h: accidentes, robos, detenciones).</em></li>
            
            <li><strong>Asistencia en Kansai (Kioto / Osaka)</strong><br>
            En la región de Kansai, la Embajada de Tokio sigue siendo el centro neurálgico para pasaportes, pero ante un apuro enorme, España cuenta con un Consulado Honorario en Osaka para asistencia inicial de urgencia. Aún así, llamad siempre al Teléfono de Emergencia Consular 24h indicado arriba para recibir instrucciones inmediatas en español.</li>
            
            <li><strong>Línea Nacional de Ayuda al Turista (Japan Visitor Hotline)</strong><br>
            📞 050-3816-2787 (Asistencia en inglés las 24h para dudas generales de turismo o ayuda ante emergencias menores).</li>
        </ul>
        <p><em>Tip:</em> Guardad el teléfono de urgencia consular en vuestros contactos antes de subir al avión.</p>
        `
    });
}

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("Sección de Emergencias inyectada correctamente.");
