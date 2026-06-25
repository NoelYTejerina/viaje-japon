const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

if (data.japon && data.japon.sections) {
    if (!data.japon.sections.find(s => s.title === 'Las Cadenas Más Famosas (Fast Food Japonés)')) {
        data.japon.sections.push({
            title: "Las Cadenas Más Famosas (Fast Food Japonés)",
            content: "<p>Comer rápido y barato en Japón es un placer. Estas cadenas os salvarán la vida más de una vez. Buscad sus logos (están en todas partes). No requieren interacción, se pide en una máquina en la entrada.</p><ul class='text-list'><li>🍛 <strong>CoCo Ichibanya:</strong> El rey del curry japonés. Podéis elegir la cantidad de arroz, el nivel de picante y los 'toppings' (el cerdo empanado Tonkatsu es obligatorio).</li><li>🥩 <strong>Sukiya / Yoshinoya / Matsuya:</strong> Los tres titanes del <em>Gyudon</em> (bol de arroz con tiras de ternera y cebolla cocidas en un caldo dulzón). Un menú completo os costará unos 4€. Servido en 30 segundos.</li><li>🍣 <strong>Sushiro / Kura Sushi (Kaiten Sushi):</strong> Sushi giratorio. Muy barato, ruidoso y divertido. Pedís en una pantalla y un tren bala de juguete os trae los platos a la mesa. Los platos vacíos se tiran por un tobogán en la mesa.</li><li>🍕 <strong>Saizeriya:</strong> 'Restaurante Italiano' al estilo japonés. Famoso entre los estudiantes por tener los precios más bajos del país y barra libre de bebidas (Drink Bar) por 2€.</li></ul>"
        });
    }
    if (!data.japon.sections.find(s => s.title === 'Guía de Tipos de Ramen')) {
        data.japon.sections.push({
            title: "Guía de Tipos de Ramen",
            content: "<p>Cada local se especializa en un tipo específico. No existe el 'Ramen' genérico, tenéis que elegir el estilo del caldo:</p><ul class='text-list'><li>🍜 <strong>Shoyu (Soja):</strong> El clásico de Tokio. Caldo ligero de pollo o pescado mezclado con salsa de soja oscura. Transparente, salado y muy umami.</li><li>🍜 <strong>Shio (Sal):</strong> El más ligero y claro. Suele hacerse con pollo y es más delicado. Perfecto si no queréis una comida excesivamente pesada.</li><li>🍜 <strong>Miso (Pasta de soja fermentada):</strong> Originario de la gélida Hokkaido. Caldo denso, opaco y a menudo coronado con maíz dulce y un trocito de mantequilla.</li><li>🍜 <strong>Tonkotsu (Hueso de cerdo):</strong> Originario de Fukuoka. Se hierve hueso de cerdo durante días hasta que el caldo se vuelve blanco, hiper-cremoso y espeso. Es el más contundente e intenso.</li><li>🍜 <strong>Tsukemen (Fideos mojados):</strong> ¡Los fideos se sirven aparte! El caldo es un concentrado denso y muy salado. Coges los fideos gruesos, los mojas en el caldo caliente y los sorbes. Al terminar, pides <em>Soup Wari</em> (agua caliente) para rebajar el caldo sobrante y bebértelo.</li></ul>"
        });
    }
}

if (data.tokio && data.tokio.sections) {
    const foodSection = data.tokio.sections.find(s => s.title && s.title.includes('Dónde Comer'));
    if (foodSection) {
        foodSection.content = `<p>Olvidaos de las cadenas de turistas. Probad el auténtico localismo nipón.</p><ul class='text-list'>
<li><strong>Especialidad - Mercado de Toyosu (El mercado de pescado):</strong><br><em>Recomendación Local:</em> <strong>Daiwa Sushi</strong> (en el propio mercado). Al nivel de restaurantes de lujo pero en ambiente de mercado. Las colas empiezan a las 5:00 am.<br><a href='https://www.google.com/maps/search/?api=1&query=Daiwa+Sushi+Toyosu+Tokyo' target='_blank' style='color:#63b3ed;'>📍 Ver Daiwa Sushi</a></li>
<li><strong>Ramen (Alta Gastronomía Asequible):</strong><br><em>Recomendación Local:</em> <strong>Ramen Nagi (Golden Gai Shinjuku)</strong>. Caldo brutal a base de sardinas secas (Niboshi). Subirás unas escaleras minúsculas a un piso que huele intensamente a océano. 24 horas.<br><a href='https://www.google.com/maps/search/?api=1&query=Ramen+Nagi+Golden+Gai' target='_blank' style='color:#63b3ed;'>📍 Ver Ramen Nagi</a><br><em>Ramen de Lujo:</em> <strong>Ginza Hachigou</strong>. Estrella Michelin, caldo tipo consomé francés. Exquisito.<br><a href='https://www.google.com/maps/search/?api=1&query=Ginza+Hachigou' target='_blank' style='color:#63b3ed;'>📍 Ver Ginza Hachigou</a></li>
<li><strong>Sushi Giratorio (Kaiten Sushi):</strong><br><em>Recomendación Local:</em> <strong>Kura Sushi Global Flagship Harajuku</strong>. No es cualquier local, es su tienda insignia moderna. Pedirás por tablet y jugarás gachapones metiendo los platos sucios.<br><a href='https://www.google.com/maps/search/?api=1&query=Kura+Sushi+Harajuku' target='_blank' style='color:#63b3ed;'>📍 Ver Kura Sushi Harajuku</a></li>
<li><strong>Carne Wagyu / Yakiniku:</strong><br><em>Recomendación Local:</em> <strong>Yoroniku (Minami-Aoyama)</strong>. Wagyu A5 asado a la perfección.<br><a href='https://www.google.com/maps/search/?api=1&query=Yoroniku+Minami-Aoyama' target='_blank' style='color:#63b3ed;'>📍 Ver Yoroniku</a></li>
<li><strong>Curry Japonés (El auténtico Katsu-Curry):</strong><br><em>Recomendación Local:</em> <strong>Bondy (Jimbocho)</strong>. Escondido en un callejón lleno de librerías antiguas, este lugar sirve un curry de estilo europeo espeso, con patatas asadas con mantequilla como aperitivo.<br><a href='https://www.google.com/maps/search/?api=1&query=Bondy+Jimbocho' target='_blank' style='color:#63b3ed;'>📍 Ver Bondy</a></li>
<li><strong>Okonomiyaki:</strong><br><em>Recomendación Local:</em> <strong>Sometaro (Asakusa)</strong>. Un local con más de 80 años de historia. Suelo de tatami frente a la plancha.<br><a href='https://www.google.com/maps/search/?api=1&query=Sometaro+Asakusa' target='_blank' style='color:#63b3ed;'>📍 Ver Sometaro</a></li>
<li><strong>Sukiyaki / Shabu-Shabu:</strong><br><em>Recomendación Local:</em> <strong>Ningyocho Imahan</strong>. Tradición pura, histórico.<br><a href='https://www.google.com/maps/search/?api=1&query=Ningyocho+Imahan' target='_blank' style='color:#63b3ed;'>📍 Ver Imahan</a></li>
<li><strong>IZAKAYA DESTACADA:</strong><br><em>Recomendación Local:</em> <strong>Shirubee (Shimokitazawa)</strong> y el increíble <strong>Omoide Yokocho (Shinjuku)</strong>.<br><a href='https://www.google.com/maps/search/?api=1&query=Omoide+Yokocho' target='_blank' style='color:#63b3ed;'>📍 Ver Omoide Yokocho</a></li>
</ul>`;
    }
}

data.nikko.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Nikko significa literalmente 'luz del sol'. Hay un famoso proverbio japonés que dice: <em>'No digas kekko (espléndido) hasta que hayas visto Nikko'</em>. A diferencia del minimalismo sintoísta del resto de Japón, Nikko es una explosión de lujo, colores, tallas de madera intrincadas y toneladas de pan de oro.</p><p>Aquí descansa Tokugawa Ieyasu, el Shogun más poderoso de la historia de Japón, el hombre que unificó el país y cerró las fronteras al mundo. Su nieto construyó este mausoleo ostentoso para divinizar a su abuelo. La zona está enclavada en un espeso bosque de cedros milenarios gigantescos, lo que le da un aura mágica insuperable, especialmente con lluvia o niebla.</p>"
    },
    {
        title: "Templos y Naturaleza",
        items: [
            {
                name: "Santuario Toshogu",
                description: "La joya de la corona. El mausoleo de Ieyasu Tokugawa. Está recubierto de pan de oro y cuenta con la famosa talla original de madera de los 'Tres Monos Sabios' (no ver el mal, no oír el mal, no hablar el mal) y el 'Gato Durmiente' (Nemuri Neko).",
                image: "assets/imagen/nikko/toshogu.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Toshogu+Shrine+Nikko"
            },
            {
                name: "Puente Shinkyo",
                description: "Uno de los tres puentes más hermosos de Japón. Pintado de un rojo bermellón brillante, cruza las aguas turquesas del río Daiya, marcando la entrada al recinto sagrado de los templos de Nikko.",
                image: "assets/imagen/nikko/shinkyo.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Shinkyo+Bridge+Nikko"
            },
            {
                name: "Templo Rinno-ji",
                description: "El templo budista más importante de Nikko. Su sala principal, el Sanbutsudo, alberga tres estatuas gigantes de Buda talladas en madera y recubiertas de pan de oro que representan las deidades de las tres montañas de Nikko.",
                image: "assets/imagen/nikko/rinnoji.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Rinnoji+Temple+Nikko"
            },
            {
                name: "Abismo Kanmangafuchi",
                description: "Una de las joyas ocultas. Un sendero paralelo al río flanqueado por casi 70 estatuas de piedra de Jizo (el protector de los viajeros y los niños). Están cubiertas de musgo y llevan gorros rojos. Dice la leyenda que el número de estatuas cambia cada vez que las cuentas.",
                image: "assets/imagen/nikko/kanmangafuchi.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kanmangafuchi+Abyss+Nikko"
            },
            {
                name: "Cascadas Kegon y Lago Chuzenji",
                description: "Ubicadas en la zona alta de Nikko (se sube por la revirada carretera Irohazaka). Kegon tiene casi 100 metros de caída libre. El inmenso lago Chuzenji está a los pies del volcán inactivo Monte Nantai.",
                image: "assets/imagen/nikko/kegon.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kegon+Falls+Nikko"
            }
        ]
    },
    {
        title: "Especialidades y Restaurantes",
        content: `<p>Nikko es tierra de montañas, no busquéis pescado aquí. Su especialidad es el <strong>Yuba</strong> (la piel que se forma al hervir la leche de soja). Es un manjar budista.</p><ul class='text-list'><li><strong>Yuba Ramen y Soba:</strong><br><em>Recomendación Local:</em> <strong>Bell (Café y restaurante)</strong> o lugares locales cerca de la estación de Nikko sirven fideos soba con láminas gruesas de Yuba enrollado que absorben todo el caldo.<br><a href='https://www.google.com/maps/search/?api=1&query=Yuba+Soba+Nikko' target='_blank' style='color:#63b3ed;'>📍 Buscar Yuba en Nikko</a></li><li><strong>Street Food: Yuba Frito:</strong> Cerca de Toshogu venden rollos de Yuba fritos y rebozados en azúcar o sal. Increíble snack caliente para el frío de la montaña.</li></ul>`
    },
    {
        title: "Transporte y Ocio",
        content: `<ul class='text-list'><li><strong>Transporte:</strong> Moverse entre los templos principales y la estación se hace caminando (unos 30 mins) o en los autobuses Tobu Bus (si tenéis un pase de día). Para subir al Lago Chuzenji hay que tomar un autobús de unos 50 minutos.</li><li><strong>Ocio: Edo Wonderland (Edo Mura):</strong> A las afueras de Nikko se encuentra este gigantesco parque temático que recrea un pueblo del periodo Edo. Actores vestidos de ninjas, samuráis y ciudadanos de la época. Podéis disfrazaros y vivir un día en el siglo XVII.</li></ul>`
    }
];

data.hiroshima_miyajima.sections = [
    {
        title: "Información General e Historia",
        content: `<p>Hiroshima es una ciudad de renacimiento y resiliencia. El 6 de agosto de 1945 fue arrasada por la primera bomba atómica, pero la ciudad se ha reconstruido como un faro mundial por la paz, llena de amplios bulevares y tranvías antiguos. Es una ciudad acogedora y con una gastronomía potente.</p><p>A un corto viaje en tren y ferry se encuentra Miyajima, la Isla Sagrada, donde supuestamente habitan los dioses. Es uno de los lugares más bellos de Japón, famoso por sus ciervos salvajes deambulando por las calles y su gigantesco torii rojo que parece flotar sobre el mar cuando sube la marea.</p>`
    },
    {
        title: "Monumentos y Templos",
        items: [
            {
                name: "Parque Conmemorativo de la Paz (Hiroshima)",
                description: "El epicentro de la bomba. Aquí encontraréis el sobrecogedor 'A-Bomb Dome' (la Cúpula de la Bomba, el único edificio que quedó en pie), la Llama de la Paz (que no se apagará hasta que no haya armas nucleares) y el Monumento a los Niños.",
                image: "assets/imagen/hiroshima_miyajima/hiroshima_peace.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Peace+Memorial+Park+Hiroshima"
            },
            {
                name: "Museo Conmemorativo de la Paz (Hiroshima)",
                description: "Visita dura pero absolutamente imprescindible. Explica detalladamente la historia antes, durante y las consecuencias de la bomba, desde un punto de vista puramente humano e histórico. Te cambiará la perspectiva.",
                image: "assets/imagen/hiroshima_miyajima/hiroshima_museum.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial+Museum"
            },
            {
                name: "El Torii Flotante e Itsukushima (Miyajima)",
                description: "El icónico Torii rojo en el agua. Con la marea alta, el santuario principal de Itsukushima y el torii parecen flotar. Con la marea baja, puedes caminar por la arena mojada y ponerte justo debajo de él.",
                image: "assets/imagen/hiroshima_miyajima/miyajima_torii.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Itsukushima+Shrine+Torii"
            },
            {
                name: "Templo Daisho-in (Miyajima)",
                description: "Ubicado a los pies de la montaña, menos concurrido que Itsukushima pero infinitamente más interesante. Cuenta con cientos de estatuas de Buda con gorros de lana tejidos por los locales, molinillos de oración giratorios y una cueva oscura espectacular.",
                image: "assets/imagen/hiroshima_miyajima/daishoin.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Daishoin+Temple+Miyajima"
            },
            {
                name: "Monte Misen (Miyajima)",
                description: "El pico más alto de la isla. Puedes subir en teleférico y hacer el último tramo a pie. En la cima te esperan vistas panorámicas del Mar Interior de Seto y un templo con un fuego eterno que lleva encendido 1200 años (el fuego con el que se encendió la Llama de la Paz de Hiroshima).",
                image: "assets/imagen/hiroshima_miyajima/misen.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Mount+Misen+Miyajima"
            }
        ]
    },
    {
        title: "Especialidades Gastronómicas",
        content: `<p>Hiroshima tiene una cultura culinaria fuertemente arraigada en el mar (Miyajima) y en las planchas de hierro (Teppan).</p><ul class='text-list'>
<li><strong>Okonomiyaki estilo Hiroshima:</strong> A diferencia del de Osaka, aquí los ingredientes no se mezclan, se cocinan por capas sobre una montaña de fideos yakisoba y col. Se hace una montaña inmensa prensada.<br><em>Recomendación Local:</em> <strong>Okonomimura (El Pueblo del Okonomiyaki)</strong> en Hiroshima. Es un edificio entero lleno de minipuestos de Okonomiyaki, súper auténtico.<br><a href='https://www.google.com/maps/search/?api=1&query=Okonomimura+Hiroshima' target='_blank' style='color:#63b3ed;'>📍 Ver Okonomimura</a></li>
<li><strong>Ostras a la Parrilla (Miyajima):</strong> Las ostras del mar de Seto son inmensas. Las encontraréis en cualquier calle de Miyajima asadas a la brasa con salsa de soja por menos de 4€ la unidad.</li>
<li><strong>Momiji Manju (Miyajima):</strong> Pastelitos con forma de hoja de arce, tradicionalmente rellenos de pasta de judía roja, pero hoy día los encontraréis rellenos de chocolate, matcha o crema pastelera. Comprad los que se fríen en aceite allí mismo (Age-momiji), están increíbles calientes.</li>
</ul>`
    }
];

data.kioto.sections = [
    {
        title: "Información General e Historia",
        content: `<p>Si Tokio es el futuro, Kioto es la cápsula del tiempo de Japón. Fue la capital imperial durante más de 1000 años (hasta 1868). Milagrosamente, no fue bombardeada durante la Segunda Guerra Mundial, por lo que conserva intactos miles de templos de madera, santuarios, jardines zen, callejones empedrados y casas de té.</p><p>Kioto representa la esencia de la estética y la filosofía japonesas. Aquí nacieron la ceremonia del té, el teatro Noh, el arreglo floral (Ikebana) y el mundo de las Geishas (que en Kioto se llaman <em>Geikos</em>, y sus aprendizas <em>Maikos</em>). La ciudad es inmensa y los monumentos están muy dispersos, por lo que requiere paciencia y madrugar mucho para esquivar a las multitudes de turistas.</p>`
    },
    {
        title: "Los 10 Templos y Santuarios Mágicos",
        items: [
            {
                name: "Fushimi Inari Taisha",
                description: "El icónico túnel de más de 10.000 puertas torii rojas que ascienden por la montaña Inari. Dedicado al dios del arroz y la prosperidad, cuyos mensajeros son los zorros (Kitsune). Id antes de las 7:00 am si queréis la famosa foto sin gente, y subid al menos hasta la mitad de la montaña.",
                image: "assets/imagen/kioto/fushimi.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha+Kyoto"
            },
            {
                name: "Kiyomizu-dera",
                description: "El Templo del Agua Pura. Famoso por su gigantesca terraza de madera que sobresale por el acantilado sin usar un solo clavo en su construcción. Las vistas de Kioto desde aquí son impresionantes. Bajar desde este templo por las antiguas callejuelas Ninenzaka y Sannenzaka es obligatorio.",
                image: "assets/imagen/kioto/kiyomizu.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera+Kyoto"
            },
            {
                name: "Kinkaku-ji (Pabellón Dorado)",
                description: "Probablemente el edificio más famoso de Japón. Las dos plantas superiores están recubiertas de hojas de oro puro que brillan sobre el estanque, reflejándose perfectamente en el agua. Es un templo budista zen que invita a la contemplación (aunque la cantidad de turistas suele impedir el silencio).",
                image: "assets/imagen/kioto/kinkakuji.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kinkakuji+Kyoto"
            },
            {
                name: "Ginkaku-ji (Pabellón de Plata)",
                description: "Contrario a su nombre, nunca llegó a cubrirse de plata debido a la guerra. Sin embargo, su estética Wabi-Sabi (la belleza de la imperfección y la madera al natural) lo hace el favorito de muchos intelectuales nipones, sumado a uno de los mejores jardines de arena zen seca del mundo.",
                image: "assets/imagen/kioto/ginkakuji.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Ginkakuji+Kyoto"
            },
            {
                name: "Bosque de Bambú de Arashiyama",
                description: "Un sendero que atraviesa un denso bosque de altísimos tallos de bambú. El sonido del viento chocando contra las cañas es parte del inventario oficial de los '100 Paisajes Sonoros de Japón'. Si queréis fotos solos, debéis estar allí literalmente al amanecer.",
                image: "assets/imagen/kioto/arashiyama.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove+Kyoto"
            },
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
        ]
    },
    {
        title: "Especialidades y Restaurantes Locales",
        content: `<ul class='text-list'>
<li><strong>Mercado Nishiki (El estómago de Kioto):</strong> Una calle techada larguísima llena de puestos que venden takotamago (pequeños pulpos rojos con un huevo de codorniz en la cabeza), mochis, encurtidos y matcha. Se debe comer pegado al puesto, sin caminar.<br><a href='https://www.google.com/maps/search/?api=1&query=Nishiki+Market+Kyoto' target='_blank' style='color:#63b3ed;'>📍 Ver Mercado Nishiki</a></li>
<li><strong>Ramen Estilo Kioto:</strong><br>A diferencia de Tokio, el ramen tradicional de Kioto es denso, oscuro y a base de pollo y cerdo muy pesado (Tenka Ippin nació aquí).<br><em>Recomendación Local:</em> <strong>Ramen Sen no Kaze (Kawaramachi)</strong>. Exquisito caldo tonkotsu/marisco en un local impecable. A menudo entre los mejores de Japón.<br><a href='https://www.google.com/maps/search/?api=1&query=Sen+no+Kaze+Ramen+Kyoto' target='_blank' style='color:#63b3ed;'>📍 Ver Sen no Kaze</a></li>
<li><strong>Matcha y Udon Local:</strong><br><em>Recomendación Local:</em> <strong>Omen Ginkakuji</strong>. Famosísimos por su udon (fideos gruesos) que sirven con verduras frescas de Kioto y semillas de sésamo para que las muelas tú mismo.<br><a href='https://www.google.com/maps/search/?api=1&query=Omen+Ginkakuji+Kyoto' target='_blank' style='color:#63b3ed;'>📍 Ver Udon Omen</a></li>
<li><strong>Kushikatsu (Fritura en palitos) y ambiente de callejón:</strong><br><em>Recomendación Local:</em> El callejón <strong>Pontocho</strong>. Es estrechísimo, paralelo al río Kamo, lleno de linternas, faroles y locales a ambos lados. Elegid cualquiera que ofrezca Yakitori o Kushikatsu y disfrutad de la magia de Kioto de noche.<br><a href='https://www.google.com/maps/search/?api=1&query=Pontocho+Kyoto' target='_blank' style='color:#63b3ed;'>📍 Ver Pontocho</a></li>
</ul>`
    },
    {
        title: "Ocio, Gion y Transporte",
        content: `<ul class='text-list'>
<li><strong>El Barrio de Gion y las Geishas:</strong> Pasear por las calles Shirakawa-minami dori o Hanamikoji al anochecer. Las Geikos y Maikos caminan rapidísimo para ir a sus citas en las casas de té (Ochaya). <strong>¡Nunca las persigáis ni bloqueéis su camino para hacerles fotos!</strong> Ahora hay multas severas por acosarlas. Disfrutad del momento.</li>
<li><strong>El Río Kamo:</strong> Si vais en primavera o verano, haced como los locales: comprad comida en un Konbini o Takoyakis y sentaos en la hierba a orillas del río al atardecer. Es la mejor forma de descansar los pies tras 25.000 pasos. (¡Cuidado con los cuervos japoneses, bajan en picado a robar la comida!).</li>
<li><strong>El Transporte Infernal (Autobuses):</strong> En Kioto la red de metro es muy pequeña (solo dos líneas en forma de cruz). Por tanto, la inmensa mayoría del turismo se mueve en autobuses, que van llenos hasta los topes. Recordad: se sube por la puerta trasera, se baja por la delantera y se paga AL BAJAR (230 yenes exactos en monedas en la máquina junto al conductor o pasando vuestra tarjeta Suica/Pasmo). Si podéis caminar 20 minutos en lugar de coger un bus de 4 paradas, hacedlo, llegaréis antes y con menos estrés.</li>
</ul>`
    }
];

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("¡Parte 1 actualizada correctamente!");
