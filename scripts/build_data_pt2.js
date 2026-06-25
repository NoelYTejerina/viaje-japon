const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

data.kanazawa.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Conocida a menudo como 'la pequeña Kioto', Kanazawa es una de las joyas mejor conservadas del periodo Edo en Japón. Al igual que Kioto, escapó a los bombardeos de la Segunda Guerra Mundial, lo que ha permitido preservar distritos enteros de samuráis, barrios de geishas intactos y callejuelas laberínticas diseñadas originalmente para confundir a los enemigos del poderoso clan Maeda, quienes gobernaron la ciudad y la llenaron de arte, pan de oro y refinamiento.</p>"
    },
    {
        title: "Qué Ver (Jardines, Geishas y Samuráis)",
        items: [
            {
                name: "Jardín Kenroku-en",
                description: "Clasificado oficialmente como uno de los Tres Grandes Jardines de Japón. Es la obra maestra del paisajismo nipón, diseñado para ser perfecto en las cuatro estaciones. En invierno, los árboles están protegidos por cuerdas cónicas (Yukitsuri) para que no se rompan con la pesada nieve.",
                image: "assets/imagen/kanazawa/kenrokuen.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kenrokuen+Garden+Kanazawa"
            },
            {
                name: "Distrito Samurai de Nagamachi",
                description: "Calles empedradas flanqueadas por muros de adobe amarillo (protegidos con esteras de paja en invierno) detrás de los cuales se esconden las antiguas residencias de los samuráis de rango alto y medio. La casa Nomura-ke, abierta al público, tiene uno de los jardines interiores más exquisitos del país.",
                image: "assets/imagen/kanazawa/nagamachi.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Nagamachi+Samurai+District"
            },
            {
                name: "Distrito Higashi Chaya (Geishas)",
                description: "El barrio de casas de té (chaya) de madera más famoso y grande de Kanazawa. Las celosías de madera tradicionales (kimusuko) en las fachadas son preciosas. Aún hoy resuenan los shamisen (instrumentos de cuerda) de las geishas por la noche. Podéis entrar a la casa Shima para ver el interior.",
                image: "assets/imagen/kanazawa/higashi_chaya.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Higashi+Chaya+Kanazawa"
            },
            {
                name: "Templo Ninja (Myoryu-ji)",
                description: "Aunque no tiene relación real con los ninjas, se ganó el apodo por ser un auténtico edificio trampa diseñado por los samuráis: está repleto de pasadizos secretos, escaleras ocultas tras armarios, trampas en el suelo y salas para hacer seppuku. Requiere reserva previa por teléfono.",
                image: "assets/imagen/kanazawa/ninjadera.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Myoryuji+Ninja+Temple"
            },
            {
                name: "Castillo de Kanazawa",
                description: "Ubicado frente a los jardines Kenrokuen, este gigantesco castillo, reconstruido con las técnicas tradicionales en madera y piedra blanca (sin un solo clavo de acero), muestra el poderío del clan Maeda. Las vistas desde lo alto de los muros son excelentes.",
                image: "assets/imagen/kanazawa/castillo.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kanazawa+Castle"
            }
        ]
    },
    {
        title: "Especialidades Gastronómicas (El Mar del Japón)",
        content: `<ul class='text-list'>
<li><strong>Mercado Omicho (La cocina de Kanazawa):</strong> Lleva activo 300 años. Aquí llega el marisco directamente del helado Mar del Japón, que le otorga una calidad y dulzor inigualables. Probad el <em>Kaisendon</em> (bol de arroz cubierto de montañas de sashimi brutalmente fresco y erizo de mar/Uni).<br><a href='https://www.google.com/maps/search/?api=1&query=Omicho+Market+Kanazawa' target='_blank' style='color:#63b3ed;'>📍 Ver Mercado Omicho</a></li>
<li><strong>Pan de Oro (Kinpaku):</strong> Kanazawa produce el 99% de todo el pan de oro de Japón. No solo decoran templos con él, ¡se lo comen! En las calles de Higashi Chaya os venderán conos de helado envueltos en una lámina gigante de oro de 24 quilates.</li>
<li><strong>Curry estilo Kanazawa:</strong> A diferencia del curry tradicional, aquí es negro como la brea, extremadamente espeso (como una salsa) e intenso, servido en plato de acero inoxidable con el Tonkatsu encima. La cadena <strong>Champion's Curry</strong> o <strong>Go! Go! Curry!</strong> son originarias de aquí y de visita obligada.</li>
</ul>`
    }
];

data.shirakawago.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Ubicada en el recóndito valle del río Shogawa, la aldea de Ogimachi en Shirakawa-go es un Patrimonio de la Humanidad que parece sacado de un cuento de los Hermanos Grimm. El aislamiento geográfico de esta región (montañas de 3000 metros) forjó un estilo de vida, cultura y arquitectura únicos para sobrevivir a nevadas que superan los 4 metros de altura en invierno.</p>"
    },
    {
        title: "Monumentos y Miradores",
        items: [
            {
                name: "Casas Gassho-Zukuri",
                description: "Las inconfundibles casas con techos de paja hiperinclinados. 'Gassho' significa 'manos rezando', ya que la forma del tejado recuerda a dos manos unidas en oración (para que la nieve resbale y no hunda la casa). Se construyen sin usar un solo clavo metálico.",
                image: "assets/imagen/shirakawago/gassho.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Shirakawa-go+Village"
            },
            {
                name: "Mirador de Shiroyama",
                description: "Ubicado en la cima de una colina (se llega a pie en 15 mins o en bus lanzadera). Es EL lugar para la foto de postal donde se ve toda la aldea encajada en el valle. Si vais en invierno y engancháis el evento de iluminación nocturna ('Light-up'), veréis una de las escenas más bellas de vuestra vida.",
                image: "assets/imagen/shirakawago/shiroyama.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Shiroyama+Viewpoint+Shirakawago"
            },
            {
                name: "Casa Museo Wada-ke",
                description: "La casa más grande de la aldea, abierta al público. Podéis subir al ático para ver la impresionante estructura de vigas de madera atadas solo con cuerdas y entender cómo cultivaban gusanos de seda bajo el techo gracias al calor que subía desde la hoguera (Irori) del primer piso.",
                image: "assets/imagen/shirakawago/wada.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Wada-ke+House"
            }
        ]
    },
    {
        title: "Especialidades: Ternera de Hida y Gohei Mochi",
        content: `<ul class='text-list'>
<li><strong>Ternera de Hida (Hida Beef):</strong> Junto al Wagyu de Kobe o Matsusaka, es una de las mejores carnes de Japón. En Shirakawa-go la venden en los puestos callejeros ensartada en pinchos (Kushiyaki) asada a la brasa, o rellenando unas empanadas fritas de masa crujiente (Croquetas de Hida Beef) que quitan el sentido.</li>
<li><strong>Gohei Mochi:</strong> Un dulce tradicional y rústico de esta zona montañosa. Es un pastel de arroz prensado en forma ovalada, insertado en un palo de madera, bañado en una salsa dulce de miso, nueces y sésamo, y asado a la parrilla de carbón. Exquisito para el frío.</li>
</ul>`
    }
];

data.takayama.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Hida-Takayama es un reducto de tradición ubicado en los 'Alpes Japoneses'. Antaño fue famosa en todo Japón por producir los mejores carpinteros y talladores de madera del país, a quienes se les perdonaban los impuestos a cambio de ir a construir los templos imperiales de Kioto y Nara. Su casco histórico de mercaderes del periodo Edo es uno de los mejores conservados del mundo.</p>"
    },
    {
        title: "Calles y Mercados",
        items: [
            {
                name: "Barrio Histórico de Sanmachi Suji",
                description: "El corazón del pueblo. Tres calles paralelas formadas íntegramente por casas oscuras de madera del periodo Edo, con entramados preciosos por donde canalizan pequeños riachuelos. Aquí encontraréis destilerías de sake, cafeterías y tiendas de artesanía de madera.",
                image: "assets/imagen/takayama/sanmachi.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Sanmachi+Suji+Takayama"
            },
            {
                name: "Takayama Jinya",
                description: "Un edificio rarísimo e histórico. Es la única oficina del gobierno provincial (del shogunato Tokugawa) que sobrevive en todo Japón. Podéis recorrer sus salas de tatami para ver dónde los magistrados interrogaban, torturaban y gobernaban la región.",
                image: "assets/imagen/takayama/jinya.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Takayama+Jinya"
            },
            {
                name: "Mercados Matutinos (Miyagawa y Jinya-mae)",
                description: "Todos los días, desde el alba hasta el mediodía, a lo largo de la ribera del río Miyagawa y frente a la Jinya, las granjeras locales (muchas ancianas) montan carpas blancas para vender verduras de la montaña, encurtidos exóticos, manzanas espectaculares y figuritas Sarubobo de la suerte.",
                image: "assets/imagen/takayama/miyagawa.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Miyagawa+Morning+Market"
            }
        ]
    },
    {
        title: "Gastronomía: Carne y Sake",
        content: `<ul class='text-list'>
<li><strong>El Sake de Takayama:</strong> La altitud, el frío glacial y el agua pura de los Alpes hacen que Takayama sea famosa por su sake de alta gama. Paseando por Sanmachi veréis grandes bolas de cedro colgando de los aleros (<em>Sugidama</em>), que indican que dentro hay una destilería. Entrad, pagad 3€ por un pequeño vaso tradicional (Ochoko) y catad distintos sakes allí mismo.</li>
<li><strong>Takayama Ramen:</strong> Es único en Japón. El caldo (una mezcla de soja hiper oscura con huesos de pollo y escamas de pescado secas) se hierve directamente todo junto en la misma olla (a diferencia de Tokio, donde la pasta base se mezcla en el bol individual). Los fideos son finísimos y rizados.<br><em>Recomendación Local:</em> <strong>Menya Shirakawa</strong> o <strong>Masugo</strong>.</li>
<li><strong>IZAKAYA DESTACADA: Heianraku.</strong> Regentado por una pareja de abuelitos adorables, es legendaria por su calidez y su comida chino-japonesa casera (con un montón de opciones vegetarianas, algo inusual aquí). Hay que reservar sí o sí.</li>
</ul>`
    }
];

data.nakasendo.sections = [
    {
        title: "Información General e Historia",
        content: "<p>La Ruta Nakasendo ('El camino a través de las montañas centrales') era la principal carretera peatonal que conectaba Edo (Tokio) con Kioto en la época de los samuráis. Estaba jalonada de 'Estaciones Postales' (Juku) para que los viajeros, señores feudales y comerciantes descansaran por la noche. Hoy en día, el tramo de 8 kilómetros que une Magome y Tsumago ha sido meticulosamente restaurado sin cables de luz a la vista, permitiendo a los senderistas viajar en el tiempo a hace 300 años.</p>"
    },
    {
        title: "Puntos Clave del Senderismo",
        items: [
            {
                name: "Estación Postal de Magome (Magome-juku)",
                description: "Suele ser el punto de partida (al estar en cuesta, es mejor subirla al principio y luego bajar hacia Tsumago). La calle empedrada asciende por la ladera ofreciendo vistas espectaculares del valle. Las muelas de agua y el entramado de madera están perfectamente reconstruidos.",
                image: "assets/imagen/nakasendo/magome.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Magome-juku"
            },
            {
                name: "El Sendero por el Bosque",
                description: "La ruta a pie dura unas 2.5 - 3 horas. Transcurre por bosques espesos de cipreses, santuarios abandonados cubiertos de musgo, y cruzando la frontera histórica entre las provincias feudales. ¡Es vital tocar las campanas espantosos (Kuma-yoke) instaladas cada cierto tramo en el camino para avisar a los osos salvajes de que estáis allí!",
                image: "assets/imagen/nakasendo/sendero.webp",
                mapLink: ""
            },
            {
                name: "Cascadas Odaki y Medaki",
                description: "Las 'Cascadas Macho y Hembra'. Un desvío precioso en medio de la ruta. Miyamoto Musashi (el espadachín más legendario de la historia de Japón, el samurai invencible) se menciona en famosas novelas deteniéndose aquí junto a una posada local (que ya no existe) para meditar bajo la cascada.",
                image: "assets/imagen/nakasendo/cascadas.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Odaki+Medaki+Falls+Nakasendo"
            },
            {
                name: "Estación Postal de Tsumago (Tsumago-juku)",
                description: "Al llegar, parece que has entrado en el decorado de una película de Kurosawa. Fue el primer pueblo de Japón en prohibir los cables de la luz y las antenas para mantener la atmósfera original de madera oscura, faroles y tranquilidad sepulcral. Entrad a visitar la Honjin (la antigua posada principal reservada solo para los señores feudales).",
                image: "assets/imagen/nakasendo/tsumago.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Tsumago-juku"
            }
        ]
    },
    {
        title: "Sobrevivir a la Ruta y Comer",
        content: `<ul class='text-list'>
<li><strong>Comida: Gohei Mochi y Oyaki.</strong> Durante el trayecto pasaréis por un par de casas de descanso que ofrecen té gratis alrededor de una hoguera a cambio de que charléis o dejéis un donativo. Comprad los Oyaki (bollos de masa cocidos al vapor rellenos de verduras o pasta de judía) y los densos fideos Soba de la zona montañosa.</li>
<li><strong>Logística del Equipaje:</strong> ¡No caminéis con maletas! Desde la oficina de turismo de Magome ofrecen un servicio baratísimo por las mañanas (hasta las 11:30 aprox) que lleva vuestras maletas a Tsumago para que recojáis el equipaje fresco como una rosa al llegar a la meta.</li>
</ul>`
    }
];

data.hakone.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Hakone es la escapada de fin de semana por excelencia de los tokiotas, y con razón. Se asienta dentro del cráter inmenso de un volcán apagado, creando un valle termal repleto de Onsens, fumarolas sulfurosas, el lago Ashi de aguas cristalinas y museos de arte integrados en la naturaleza. Además, en los días claros, ofrece una de las panorámicas más icónicas de Japón: el majestuoso Monte Fuji coronado de nieve reflejado en el lago.</p>"
    },
    {
        title: "Qué Hacer: El Circuito de Hakone",
        items: [
            {
                name: "Teleférico a Owakudani",
                description: "El Gran Valle de la Ebullición. Llegaréis sobrevolando el azufre en un teleférico. El suelo es un infierno volcánico activo de fumarolas blancas de gas sulfuroso que huelen a huevo podrido. Es imprescindible comprar los 'Kuro-tamago' (huevos hervidos en las aguas termales que se vuelven negros por el azufre). ¡Dicen que comer uno añade 7 años de vida!",
                image: "assets/imagen/hakone/owakudani.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Owakudani+Hakone"
            },
            {
                name: "El Torii de la Paz y Hakone Jinja",
                description: "En las orillas del Lago Ashi, escondido entre cipreses colosales, se encuentra el Santuario Hakone Jinja. Su elemento más fotografiado es el 'Torii de la Paz' (Heiwa no Torii), un inmenso arco rojo que descansa sobre el agua del lago. Preparad paciencia, suele haber fila india de turistas para hacerse la foto.",
                image: "assets/imagen/hakone/jinja.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hakone+Shrine+Torii"
            },
            {
                name: "Crucero Pirata por el Lago Ashi",
                description: "Suena increíblemente hortera, y en cierto modo lo es, pero la forma tradicional de cruzar el inmenso lago Ashi desde el valle termal es a bordo de inmensas réplicas de barcos piratas del siglo XVII. Desde la cubierta, con suerte y el cielo despejado, veréis asomar al sagrado Monte Fuji.",
                image: "assets/imagen/hakone/barco.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hakone+Sightseeing+Cruise"
            },
            {
                name: "Hakone Open-Air Museum",
                description: "Uno de los museos más mágicos de Japón. Enormes esculturas modernas (Picasso, Henry Moore, Taro Okamoto) esparcidas al aire libre en un inmenso parque enclavado en las montañas. Tienen incluso piscinas de aguas termales para que metáis los pies cansados mientras miráis las esculturas.",
                image: "assets/imagen/hakone/museo.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hakone+Open+Air+Museum"
            }
        ]
    },
    {
        title: "Relajación y Cultura de los Ryokan",
        content: `<ul class='text-list'>
<li><strong>Los Ryokan (Posadas Tradicionales):</strong> Hakone es EL lugar para tirar la casa por la ventana y dormir en un Ryokan. Os vestiréis con kimonos de algodón (Yukatas), os servirán una cena Keiseki (alta cocina japonesa de 15 platos servida en vuestro tatami) y dormiréis sobre colchones futones esponjosos colocados en el suelo.</li>
<li><strong>Onsen (Baños Termales):</strong> Las aguas de Hakone son ricas en minerales. Usar un onsen implica bañarse completamente desnudo junto a otras personas (separado por sexos). Recordad ducharos y enjabonaros meticulosamente fuera del agua ANTES de sumergiros, y nunca metáis la toalla pequeña dentro de la piscina termal (los japoneses se la ponen doblada en la cabeza).</li>
</ul>`
    }
];

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("¡Parte 2 completada! Expansión terminada con éxito masivo.");
