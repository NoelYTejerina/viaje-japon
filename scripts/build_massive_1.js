const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

// Añadir info del clima y festivales en Japón General
if (data.japon && data.japon.sections) {
    if (!data.japon.sections.find(s => s.title === 'Clima y Festivales (Junio - Julio)')) {
        data.japon.sections.push({
            title: "Clima y Festivales (Junio - Julio)",
            content: "<p>Vais a viajar en una época de transición fascinante. Esto es lo que debéis saber para sobrevivir y disfrutar:</p><ul class='text-list'><li>🌧️ <strong>Tsuyu (Temporada de Lluvias):</strong> Junio y principios de Julio son época de lluvias. Hará calor y la humedad será extrema (rondando el 80-90%). Llevad ropa de lino o algodón transpirable. Si llueve fuerte, haced lo que hacen los locales: entrad a cualquier Konbini (7-Eleven/Lawson) y comprad un <strong>paraguas transparente</strong> por unos 3€. Son los mejores del mundo, súper resistentes y no os quitan visibilidad.</li><li>🎋 <strong>Festival Tanabata (7 de Julio):</strong> La fiesta de las estrellas cruzadas. Los amantes Orihime y Hikoboshi se reencuentran en el cielo. Lo veréis en <strong>Tokio</strong>. Las calles y centros comerciales se llenan de ramas de bambú colgando cintas de colores (Tanzaku) donde podéis escribir vuestros deseos de luna de miel.</li><li>🏮 <strong>Gion Matsuri (Kioto, finales de Junio):</strong> Aunque el clímax es en Julio, a finales de Junio veréis a Kioto transformarse. Las linternas gigantes empiezan a colgarse por las calles y el ambiente festivo se apodera del barrio tradicional. ¡Imperdible!</li></ul>"
        });
    }
}

// 1. NIKKO Expandido
data.nikko.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Nikko significa literalmente 'luz del sol'. Hay un famoso proverbio japonés que dice: <em>'No digas kekko (espléndido) hasta que hayas visto Nikko'</em>. A diferencia del minimalismo sintoísta del resto de Japón, Nikko es una explosión de lujo, colores, tallas de madera intrincadas y toneladas de pan de oro.</p><p>Aquí descansa Tokugawa Ieyasu, el Shogun más poderoso de la historia de Japón, el hombre que unificó el país y cerró las fronteras al mundo. Su nieto construyó este mausoleo ostentoso para divinizar a su abuelo. La zona está enclavada en un espeso bosque de cedros milenarios gigantescos, lo que le da un aura mágica insuperable, especialmente con la ligera neblina del Tsuyu (temporada de lluvias).</p>"
    },
    {
        title: "Templos y Santuarios (Qué Ver)",
        items: [
            {
                name: "Santuario Toshogu",
                description: "La joya de la corona. El mausoleo de Ieyasu Tokugawa. Está recubierto de pan de oro y cuenta con la famosa talla original de madera de los 'Tres Monos Sabios' (no ver el mal, no oír el mal, no hablar el mal) y el 'Gato Durmiente' (Nemuri Neko).",
                image: "assets/imagen/nikko/toshogu.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Toshogu+Shrine+Nikko"
            },
            {
                name: "Puente Shinkyo",
                description: "Uno de los tres puentes más hermosos de Japón. Pintado de un rojo bermellón brillante, cruza las aguas turquesas del río Daiya, marcando la entrada al recinto sagrado de los templos de Nikko. No hace falta pagar para cruzarlo, las mejores fotos se hacen desde el puente paralelo moderno.",
                image: "assets/imagen/nikko/shinkyo.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Shinkyo+Bridge+Nikko"
            },
            {
                name: "Templo Rinno-ji",
                description: "El templo budista más importante de Nikko. Su inmensa sala principal, el Sanbutsudo, alberga tres estatuas gigantes de Buda talladas en madera y recubiertas de pan de oro que representan las deidades de las tres montañas de Nikko.",
                image: "assets/imagen/nikko/rinnoji.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Rinnoji+Temple+Nikko"
            },
            {
                name: "Mausoleo Taiyuin",
                description: "Menos abarrotado que el Toshogu, este es el lugar de descanso del tercer Shogun, Iemitsu. Es espectacular, integrado perfectamente en el bosque y usando el color negro y dorado para evocar un sentimiento más solemne y misterioso.",
                image: "assets/imagen/nikko/taiyuin.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Taiyuinbyo+Nikko"
            },
            {
                name: "Cascadas Kegon y Lago Chuzenji",
                description: "Ubicadas en la zona alta de Nikko. Kegon tiene casi 100 metros de caída libre. Podéis coger un ascensor que os baja a la base de la cascada para sentir la fuerza del agua, especialmente brutal en junio con las lluvias.",
                image: "assets/imagen/nikko/kegon.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kegon+Falls+Nikko"
            }
        ]
    },
    {
        title: "Dónde Comer: Auténtico Yuba, Ramen y Sushi",
        content: `<p>Al estar en la montaña, Nikko no es tierra de marisco, sino del manjar budista llamado Yuba (piel de tofu), pero hay opciones geniales.</p><ul class='text-list'>
<li><strong>Especialidad (Yuba Soba/Ramen):</strong> <strong>Bell (Nikko)</strong>. Sirven tazones de fideos calientes con rollos de Yuba frita que absorbe todo el caldo. Delicioso y reconfortante.<br><a href='https://www.google.com/maps/search/?api=1&query=Bell+Restaurant+Nikko' target='_blank' style='color:#63b3ed;'>📍 Ver Bell</a></li>
<li><strong>Ramen Local Auténtico:</strong> <strong>Bonten (Cerca de la Estación Tobu-Nikko)</strong>. Caldo tonkotsu súper sabroso, ideal tras horas caminando por el bosque.<br><a href='https://www.google.com/maps/search/?api=1&query=Bonten+Nikko+Ramen' target='_blank' style='color:#63b3ed;'>📍 Ver Bonten Ramen</a></li>
<li><strong>Kaiten Sushi (Sushi Giratorio):</strong> <strong>Kura Sushi (Imaichi)</strong>. A unas pocas paradas de tren de Nikko (en Imaichi) tenéis esta enorme cadena local con platos a 100 yenes. Perfecto si el bolsillo aprieta y queréis fiesta de sushi.<br><a href='https://www.google.com/maps/search/?api=1&query=Kura+Sushi+Imaichi' target='_blank' style='color:#63b3ed;'>📍 Ver Kura Sushi Imaichi</a></li>
</ul>`
    },
    {
        title: "Ocio, Bebida y Transporte",
        content: `<ul class='text-list'>
<li><strong>Ocio - Abismo Kanmangafuchi:</strong> Un paseo paralelo al río lleno de 70 estatuas místicas de Jizo con gorros rojos. Dicen que si las cuentas a la ida y a la vuelta, el número cambia.</li>
<li><strong>Bebida - Nikko Brewing:</strong> En el área encontraréis cervezas locales elaboradas con el agua pura de la montaña. En la estación venden latas preciosas de Nikko Beer, comprad un par para el tren de vuelta.</li>
<li><strong>Transporte y Normas:</strong> Moverse entre la estación y la zona de templos requiere el autobús de Tobu Bus. Comprad el "World Heritage Pass" en la estación para subidas ilimitadas. <strong>Norma vital:</strong> Los templos cierran a las 16:30 o 17:00 en punto. Madrugad mucho en vuestra excursión desde Tokio o lo encontraréis todo cerrado.</li>
</ul>`
    }
];

// 2. HIROSHIMA / MIYAJIMA Expandido
data.hiroshima_miyajima.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Hiroshima es una ciudad de renacimiento y resiliencia. El 6 de agosto de 1945 fue arrasada por la primera bomba atómica, pero la ciudad se ha reconstruido como un faro mundial por la paz, llena de amplios bulevares y tranvías antiguos (Hiroden). Es vibrante, muy amigable con el extranjero y famosa por su brutal cultura de planchas de hierro (Teppanyaki).</p><p>A un corto viaje en tren y ferry se encuentra Miyajima (Isla de Itsukushima), la Isla Sagrada, donde supuestamente habitan los dioses. Históricamente, no se permitían ni nacimientos ni muertes en la isla para mantener su pureza. Es uno de los lugares más bellos de Japón, con ciervos en libertad y una atmósfera profundamente mística.</p>"
    },
    {
        title: "Monumentos y Templos (Qué Ver)",
        items: [
            {
                name: "Parque y Museo Conmemorativo de la Paz (Hiroshima)",
                description: "El epicentro. El 'A-Bomb Dome' es el único edificio en ruinas conservado tal cual tras la explosión. El Museo es una visita muy dura pero imprescindible que cuenta la historia desde un enfoque profundamente humano y pacifista. Cambiará vuestra forma de ver el mundo.",
                image: "assets/imagen/hiroshima_miyajima/hiroshima_peace.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial+Park"
            },
            {
                name: "Castillo de Hiroshima",
                description: "Conocido como el Castillo de la Carpa. Reconstruido fielmente tras la guerra, rodeado de un precioso foso y de jardines. A diferencia de otros castillos, su exterior está revestido de madera oscura, dándole un aspecto espectacular.",
                image: "assets/imagen/hiroshima_miyajima/castillo.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hiroshima+Castle"
            },
            {
                name: "Torii Flotante e Itsukushima (Miyajima)",
                description: "El icono de Japón. El inmenso arco torii rojo anclado en el lecho marino por su propio peso (no tiene cimientos). Con marea alta, el santuario principal de pilares rojos parece flotar sobre el mar.",
                image: "assets/imagen/hiroshima_miyajima/miyajima_torii.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Itsukushima+Shrine"
            },
            {
                name: "La Cueva de las Linternas (Daisho-in, Miyajima)",
                description: "Espectacular y escondido en la montaña. Este templo alberga la impresionante <strong>Cueva Henjokutsu</strong>, un santuario subterráneo tenuemente iluminado por cientos de lámparas doradas colgantes en el techo. Una atmósfera mística abrumadora. Además, tiene cientos de estatuillas de piedra de Buda con gorritos.",
                image: "assets/imagen/hiroshima_miyajima/daishoin_linternas.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Daisho-in+Temple+Miyajima"
            },
            {
                name: "Santuario Senjokaku (Miyajima)",
                description: "El 'Salón de las Mil Esteras de Tatami'. Fue construido por el poderoso Toyotomi Hideyoshi, pero quedó inacabado tras su muerte. Es un gigantesco pabellón de madera de pino a la vista, increíblemente fresco en verano. Justo al lado está la preciosa Pagoda de 5 pisos roja.",
                image: "assets/imagen/hiroshima_miyajima/senjokaku.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Senjokaku+Hall+Miyajima"
            }
        ]
    },
    {
        title: "Dónde Comer: Okonomiyaki, Ostras y Sushi",
        content: `<p>Hiroshima tiene una cultura gastronómica brutal, mucho más allá del típico arroz de la capital.</p><ul class='text-list'>
<li><strong>El Sagrado Okonomiyaki de Hiroshima:</strong> Aquí no se mezclan los ingredientes (como en Osaka). Se hacen montañas en capas: crepe, toneladas de col, yakisoba (fideos), cerdo, huevo y salsa dulce.<br><em>Recomendación Local:</em> <strong>Okonomimura</strong> (un edificio de varias plantas hiper-denso, sudoroso y lleno de decenas de mini-puestos humeantes) o <strong>Hassho</strong> (local legendario).<br><a href='https://www.google.com/maps/search/?api=1&query=Okonomimura+Hiroshima' target='_blank' style='color:#63b3ed;'>📍 Ver Okonomimura</a></li>
<li><strong>Ramen Local Picante (Tsukemen):</strong><br><em>Recomendación Local:</em> <strong>Bakudan-ya</strong>. Famoso por su Tsukemen (fideos mojados) súper picante que se sirve frío. ¡Ideal para el calor sofocante del verano!<br><a href='https://www.google.com/maps/search/?api=1&query=Bakudanya+Ramen+Hiroshima' target='_blank' style='color:#63b3ed;'>📍 Ver Bakudanya</a></li>
<li><strong>Sushi Fresco (Kaiten Sushi):</strong><br><em>Recomendación Local:</em> <strong>Sushitei (Hondori)</strong>. Excelente pescado local a precio de risa, podéis sentaros en la cinta giratoria y pedir por pantalla.<br><a href='https://www.google.com/maps/search/?api=1&query=Sushitei+Hondori+Hiroshima' target='_blank' style='color:#63b3ed;'>📍 Ver Sushitei</a></li>
<li><strong>Ostras a la Parrilla (En Miyajima):</strong> Paseando por las calles de Miyajima veréis enormes ostras cocinándose a la brasa al aire libre. <strong>Kakiya</strong> es el local más respetado para comerlas.</li>
</ul>`
    },
    {
        title: "Ocio, Cerveza y Transporte",
        content: `<ul class='text-list'>
<li><strong>Ocio y Compras: Calle Hondori:</strong> Una kilométrica galería comercial techada (ideal si os sorprende el Tsuyu) en pleno centro de Hiroshima. Llena de recreativas, tiendas de moda, Don Quijote y cafeterías escondidas.</li>
<li><strong>Bebida: Miyajima Brewery:</strong> Tienen una micro-destilería de cerveza artesanal en Miyajima. Degustar una de sus Ales pálidas bien fría mientras el sol se pone tras el Torii rojo no tiene precio.</li>
<li><strong>Transporte y Normas Locales:</strong> En Hiroshima el transporte clave son los Tranvías ('Hiroden'). <strong>Importante:</strong> Se entra por el medio/atrás y se paga AL BAJAR por la puerta del conductor usando efectivo exacto o vuestra Suica. Para Miyajima, usad el ferry de JR (que os sale gratis si habéis activado el JR Pass) y cuidado con los ciervos, son salvajes y os intentarán comer mapas y papeles, no los alimentéis con cosas raras.</li>
</ul>`
    }
];

// 3. KIOTO Expandido
data.kioto.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Si Tokio es el futuro y el progreso, Kioto es el alma intocable de Japón. Capital imperial ininterrumpida durante mil años (de 794 a 1868). La Segunda Guerra Mundial perdonó a esta ciudad por su inconmensurable valor cultural, dejándonos intactos sus más de 2000 templos, callejuelas de piedra que huelen a madera de ciprés e incienso, jardines zen de meditación y los herméticos distritos de flores (Hanamachi) donde aún operan cientos de Geikos (Geishas) y Maikos (aprendizas).</p><p>Estaréis allí justo cuando comiencen los preparativos del monumental <strong>Gion Matsuri</strong>. Las calles principales de Kioto se llenarán del sonido ensordecedor de los tambores japoneses y veréis a los vecinos preparándose en yukatas (kimonos de verano). Es el epicentro de la belleza estética japonesa.</p>"
    },
    {
        title: "Templos y Santuarios (Qué Ver)",
        items: [
            {
                name: "Fushimi Inari Taisha",
                description: "El inconfundible túnel de más de 10.000 puertas torii rojas que trepa por la montaña Inari. Dedicado a los zorros (Kitsune) mensajeros de Inari. Truco de oro: id a las 6:30 am. Es el único momento para tomar fotos sin la masa asfixiante de turistas.",
                image: "assets/imagen/kioto/fushimi.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha+Kyoto"
            },
            {
                name: "Kiyomizu-dera y las calles Ninen/Sannenzaka",
                description: "El imponente templo voladizo sobre un acantilado sostenido por pilares de madera gigantes sin usar un solo clavo. Las vistas de Kioto son sublimes. Al salir, perdeos cuesta abajo por las fotogénicas calles antiguas de piedra Ninenzaka y Sannenzaka.",
                image: "assets/imagen/kioto/kiyomizu.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera+Kyoto"
            },
            {
                name: "Kinkaku-ji (Pabellón Dorado)",
                description: "El famoso pabellón cuyas dos últimas plantas están completamente recubiertas de hojas de oro puro y coronadas con un fénix brillante. Reflejado en su estanque ('Kyoko-chi') en un día soleado, es una de las visiones más perfectas de Japón.",
                image: "assets/imagen/kioto/kinkakuji.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kinkakuji+Kyoto"
            },
            {
                name: "Bosque de Bambú de Arashiyama y Tenryu-ji",
                description: "Un sendero donde miles de altísimos bambúes bloquean el cielo. El sonido del viento entre las cañas es legendario. Justo al lado está el Tenryu-ji, cuyo jardín del periodo Muromachi ha permanecido inalterado durante siglos.",
                image: "assets/imagen/kioto/arashiyama.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove+Kyoto"
            },
            {
                name: "Ginkaku-ji y el Paseo del Filósofo",
                description: "El Pabellón de Plata (que es de madera rústica bellísima) posee uno de los jardines de arena blanca más asombrosos. Desde aquí parte el Tetsugaku no Michi (Paseo del Filósofo), un sendero de piedra paralelo a un canal bordeado de cerezos y pequeños cafés escondidos.",
                image: "assets/imagen/kioto/ginkakuji.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Ginkakuji+Kyoto"
            }
        ]
    },
    {
        title: "Dónde Comer: Callejones y Ramen Denso",
        content: `<p>A diferencia de la ligereza de su arquitectura, a Kioto le gusta la comida contundente (Kushikatsu frito, Ramen híper espeso) y el refinamiento extremo del té Matcha.</p><ul class='text-list'>
<li><strong>El Callejón Pontocho y Kushikatsu:</strong><br>Una estrechísima calle paralela al río, iluminada con farolillos rojos de papel, llena de locales minúsculos.<br><em>Recomendación Local:</em> <strong>Kushikatsu Daruma</strong> (Kushikatsu son brochetas fritas variadas) o sentaos en las terrazas con vistas al río (Kawadoko) al anochecer.<br><a href='https://www.google.com/maps/search/?api=1&query=Pontocho+Kyoto' target='_blank' style='color:#63b3ed;'>📍 Ver Pontocho</a></li>
<li><strong>Ramen Tradicional de Kioto:</strong><br><em>Recomendación Local:</em> <strong>Musoshin (Gion)</strong>. A dos pasos de los lugares de geishas, sirven un ramen de pollo increíblemente rico y espeso con fideos caseros.<br><a href='https://www.google.com/maps/search/?api=1&query=Musoshin+Ramen+Kyoto' target='_blank' style='color:#63b3ed;'>📍 Ver Ramen Musoshin</a></li>
<li><strong>Kaiten Sushi:</strong><br><em>Recomendación Local:</em> <strong>Musashi Sushi (Kawaramachi)</strong>. Es una institución en el centro de Kioto. Súper céntrico, bullicioso, auténtico y muy buen pescado en cinta giratoria por poco dinero.<br><a href='https://www.google.com/maps/search/?api=1&query=Musashi+Sushi+Kawaramachi' target='_blank' style='color:#63b3ed;'>📍 Ver Musashi Sushi</a></li>
<li><strong>El Mercado Nishiki:</strong> El "estómago" de Kioto. Una calle techada brutal llena de encurtidos exóticos, Takotamago (pulpos con huevo en la cabeza) y dulces tradicionales. Está prohibido caminar mientras comes, así que pegaos al puesto del vendedor a degustarlo.</li>
</ul>`
    },
    {
        title: "Ocio, Geishas y Normas Locales",
        content: `<ul class='text-list'>
<li><strong>El Barrio de Gion (Geishas):</strong> El mayor atractivo nocturno es intentar atisbar a una auténtica Maiko caminando por las antiguas calles de Shijo o Hanami-koji. <strong>Norma de Hierro:</strong> Las Geishas no son un espectáculo público. Son mujeres yendo a trabajar. No debéis perseguirlas, no podéis tocar sus kimonos y está totalmente <strong>prohibido y penalizado con multas (de 10.000 a 100.000 yenes)</strong> bloquear la calle o asediarlas para sacar fotos en calles privadas.</li>
<li><strong>Ocio Local: Atardecer en el Río Kamo:</strong> Si hay buen tiempo, el mejor plan barato es comprar cervezas o sakes en el Konbini y sentarse en la orilla del césped del inmenso Río Kamo a ver cómo cae la tarde junto a estudiantes locales y parejas. </li>
<li><strong>Normas de Transporte (Los Infernales Autobuses):</strong> Kioto es un desastre en metro, por lo que todo se hace en Autobús. Van siempre abarrotados hasta lo irreal. <strong>Norma vital:</strong> Se entra SIEMPRE por la puerta trasera del bus, NO por la de delante. Y cuando llegáis a vuestra parada, camináis hacia el conductor, metéis 230 yenes en monedas en su máquina (o pasáis la Suica/Pasmo) y salís por delante.</li>
</ul>`
    }
];

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("¡Script Masivo 1 completado!");
