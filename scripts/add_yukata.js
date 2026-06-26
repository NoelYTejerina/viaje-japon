const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

if (!data.hakone.sections.find(s => s.title === 'Vestimenta Tradicional: El Yukata y el Ryokan')) {
    // Insertarlo antes de la sección de Rutas o al final
    data.hakone.sections.push({
        title: "Vestimenta Tradicional: El Yukata y el Ryokan",
        content: `
        <p>Una de las experiencias más mágicas de Hakone es alojarse en un <strong>Ryokan</strong> (posada tradicional). Aquí el tiempo se detiene y la etiqueta manda que os desprendáis de vuestra ropa occidental para vestir la indumentaria clásica japonesa durante toda vuestra estancia, incluso para salir a pasear por el pueblo o cenar.</p>
        
        <div style="text-align: center; margin: 2rem 0;">
            <img src="assets/imagen/hakone/hakone_yukata.png" alt="Pareja vistiendo Yukata en un Ryokan" style="max-width: 100%; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.5); border: 2px solid var(--accent-gold);">
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 10px;"><em>Inmersión total en la cultura nipona.</em></p>
        </div>

        <p>Las prendas principales que encontraréis cuidadosamente dobladas en vuestro tatami son:</p>
        <ul class='text-list'>
            <li><strong>El Yukata:</strong> Es un kimono ligero de algodón (su nombre significa literalmente "ropa de baño"). Es fresco, comodísimo y suele llevar patrones geométricos o florales preciosos. ¡Ojo al ponerlo! El lado izquierdo debe cruzar SIEMPRE por encima del derecho (al revés solo se viste a los difuntos en los funerales).</li>
            <li><strong>El Obi:</strong> La faja o cinturón que mantiene cerrado el Yukata. Se ata con un nudo sencillo a la altura de la cintura o cadera.</li>
            <li><strong>El Haori o Hanten:</strong> Si refresca por la noche en la montaña, encima del Yukata os pondréis esta chaqueta tradicional gruesa que le da un toque aún más elegante al conjunto.</li>
            <li><strong>Geta y Tabi:</strong> Para salir a la calle usaréis las <em>Geta</em> (sandalias de madera que hacen un característico sonido "clack-clack" al caminar) junto con los <em>Tabi</em> (calcetines con el dedo gordo separado).</li>
        </ul>
        <p>Degustar la elaborada cena Kaiseki o salir a pasear bajo las farolas del pueblo vistiendo estas prendas os hará sentir como si hubierais viajado atrás en el tiempo.</p>
        `
    });
}

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("Sección de Yukata en Hakone inyectada correctamente.");
