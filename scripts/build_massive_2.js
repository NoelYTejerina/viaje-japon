const fs = require('fs');
const file = 'C:/Users/noely/Desktop/Japon/scripts/data.js';

let content = fs.readFileSync(file, 'utf8');
const prefix = 'window.appData = ';
const jsonString = content.replace(prefix, '').replace(/;[\s]*$/, '');
let data = JSON.parse(jsonString);

// 4. KANAZAWA Expandido
data.kanazawa.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Conocida a menudo como 'la pequeña Kioto', Kanazawa es una de las joyas mejor conservadas del periodo Edo en Japón. Al igual que Kioto, escapó a los bombardeos de la IIGM, lo que ha permitido preservar distritos enteros de samuráis, barrios de geishas intactos y callejuelas laberínticas diseñadas originalmente para confundir a los enemigos del poderoso clan Maeda, quienes gobernaron la ciudad y la llenaron de arte, pan de oro y refinamiento de altísimo nivel.</p><p>Dado que aquí comienza vuestra ruta en coche (2 de Julio), esta ciudad marca la transición del ajetreo en tren al turismo rural.</p>"
    },
    {
        title: "Qué Ver (Samuráis y Geishas)",
        items: [
            {
                name: "Jardín Kenroku-en",
                description: "Clasificado oficialmente como uno de los Tres Grandes Jardines de Japón. Es la obra maestra del paisajismo nipón, diseñado para ser perfecto en las cuatro estaciones. Sus senderos serpentean entre pinos espectaculares y estanques inmaculados.",
                image: "assets/imagen/kanazawa/kenrokuen.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kenrokuen+Garden+Kanazawa"
            },
            {
                name: "Distrito Samurai de Nagamachi",
                description: "Calles empedradas flanqueadas por altos muros de adobe amarillo detrás de los cuales se esconden las antiguas residencias de los samuráis. La casa Nomura-ke, abierta al público, tiene uno de los jardines interiores más exquisitos del país.",
                image: "assets/imagen/kanazawa/nagamachi.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Nagamachi+Samurai+District"
            },
            {
                name: "Distrito Higashi Chaya (Geishas)",
                description: "El barrio de casas de té (chaya) de madera más famoso. Las celosías de madera tradicionales (kimusuko) en las fachadas son preciosas. Aún hoy resuenan los shamisen (instrumentos de cuerda) de las geishas por la noche.",
                image: "assets/imagen/kanazawa/higashi_chaya.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Higashi+Chaya+Kanazawa"
            },
            {
                name: "Castillo de Kanazawa",
                description: "Ubicado frente a los jardines Kenrokuen, este gigantesco castillo blanco, reconstruido con las técnicas tradicionales (sin un solo clavo), muestra el poderío del clan Maeda. Las murallas y sus espectaculares puertas son fascinantes.",
                image: "assets/imagen/kanazawa/castillo.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Kanazawa+Castle"
            },
            {
                name: "Museo del Siglo XXI de Arte Contemporáneo",
                description: "Una maravilla arquitectónica de cristal circular. Su exhibición más famosa es 'The Swimming Pool', una piscina falsa en la que puedes entrar por debajo y hacerte fotos que parecen hechas bajo el agua completamente vestido.",
                image: "assets/imagen/kanazawa/museo21.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=21st+Century+Museum+Kanazawa"
            }
        ]
    },
    {
        title: "Dónde Comer: Marisco y Curry Negro",
        content: `<p>El Mar de Japón baña Kanazawa y provee el marisco más dulce del país. Además tienen un curry que es legendario.</p><ul class='text-list'>
<li><strong>El Mercado Omicho:</strong> Lleva 300 años siendo la cocina local. Está lleno de marisco y pescado hiper-fresco.<br><em>Recomendación Local:</em> <strong>Yamate (Omicho)</strong> o cualquier local de donburis (cuencos de arroz cubiertos de montañas de marisco crudo/Kaisendon).<br><a href='https://www.google.com/maps/search/?api=1&query=Omicho+Market+Kanazawa' target='_blank' style='color:#63b3ed;'>📍 Ver Mercado Omicho</a></li>
<li><strong>Ramen Local Auténtico:</strong><br><em>Recomendación Local:</em> <strong>Miso Senmon Menya Taiga</strong>. Uno de los caldos Miso más brutales que comeréis en la vida. Al lado de la estación, el local huele a gloria. Cierran cuando se les acaba el caldo.<br><a href='https://www.google.com/maps/search/?api=1&query=Menya+Taiga+Kanazawa' target='_blank' style='color:#63b3ed;'>📍 Ver Menya Taiga</a></li>
<li><strong>Kaiten Sushi Espectacular:</strong><br><em>Recomendación Local:</em> <strong>Mori Mori Sushi</strong>. Es una cadena pero originaria de Ishikawa. La calidad del atún graso (Toro) y las gambas dulces de esta zona superan con creces al sushi de Tokio.<br><a href='https://www.google.com/maps/search/?api=1&query=Mori+Mori+Sushi+Kanazawa' target='_blank' style='color:#63b3ed;'>📍 Ver Mori Mori Sushi</a></li>
<li><strong>Curry Estilo Kanazawa:</strong> A diferencia de Tokio, aquí el curry es espeso como el alquitrán, muy oscuro y con un sabor hiperintenso. Se sirve en plato de acero con tenedor/cuchara. Tened en cuenta las franquicias locales **Champion's Curry** o **Go! Go! Curry!**.</li>
<li><strong>Oro Comestible:</strong> En Higashi Chaya, comprad los emblemáticos conos de helado envueltos en una lámina gigante de oro de 24 quilates.</li>
</ul>`
    },
    {
        title: "ALERTA: Normas de Conducción en Japón",
        content: `<ul class='text-list'>
<li><strong>El Volante y el Lado:</strong> ¡El volante está a la derecha y se conduce por la izquierda! Cuidado en las primeras rotondas y giros. Usaréis los limpiaparabrisas en vez de los intermitentes más de una vez (están invertidos).</li>
<li><strong>Tasa de Alcohol:</strong> Es estricta y rotundamente **0.0**. Si bebes una sola gota y conduces (o si vas de pasajero y sabías que el conductor bebió), la pena de cárcel es inmediata. Las multas superan los 8.000€.</li>
<li><strong>Señales Rojas Invertidas:</strong> Las señales de stop en Japón son un triángulo ROJO invertido (con la punta hacia abajo), no un octágono rojo como en occidente. Se debe hacer un alto COMPLETO, especialmente en cruces de tren aunque la barrera esté subida (es obligatorio parar 3 segundos y mirar a ambos lados antes de cruzar las vías del tren).</li>
<li><strong>Aparcamiento:</strong> No se puede dejar el coche tirado en cualquier arcén. Hay que usar siempre 'Coin Parkings' (aparcamientos de pago automatizados). Un cepo subirá bajo el coche al aparcarlo. Para salir, vas a la máquina, metes tu número de plaza, pagas, el cepo baja y sacas el coche en menos de 3 minutos.</li>
<li><strong>Límites de Velocidad Ridículos:</strong> Autopistas (80-100 km/h) y zonas urbanas (30-40 km/h). Parecen tortugas comparado con Europa, pero se respetan a rajatabla por las duras multas. Usad una tarjeta **ETC (Electronic Toll Collection)** en vuestro coche de alquiler para pasar los peajes sin tener que parar a echar monedas.</li>
</ul>`
    }
];

// 5. SHIRAKAWA-GO Expandido
data.shirakawago.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Ubicada en el recóndito valle del río Shogawa, la aldea de Ogimachi en Shirakawa-go es un Patrimonio de la Humanidad de la UNESCO. El aislamiento brutal de esta región rodeada de cumbres nevadas de 3000 metros (los Alpes japoneses) forjó un estilo de vida de supervivencia comunitaria extrema ('Yui'). Su arquitectura fue ideada para soportar más de 4 metros de nieve pesada en invierno. Si llegáis aquí con el coche en julio, el paisaje pasará del blanco gélido al verde esmeralda deslumbrante de los arrozales en flor.</p>"
    },
    {
        title: "Monumentos y Puntos Clave",
        items: [
            {
                name: "Casas Gassho-Zukuri",
                description: "Las inconfundibles casas con techos de paja hiperinclinados. 'Gassho' significa 'manos rezando', ya que la forma del tejado recuerda a dos manos unidas en oración para que la nieve y las fuertes lluvias del Tsuyu resbalen. Están hechas de madera encajada sin clavos de metal.",
                image: "assets/imagen/shirakawago/gassho.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Shirakawa-go+Village"
            },
            {
                name: "Mirador de Shiroyama",
                description: "El punto fotográfico por excelencia. Ubicado en la cima de una colina (se llega a pie subiendo 15-20 minutos por el sendero). Desde aquí se divisa toda la aldea encajada entre las montañas y salpicada por los campos de arroz.",
                image: "assets/imagen/shirakawago/shiroyama.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Shiroyama+Viewpoint+Shirakawago"
            },
            {
                name: "Casa Museo Wada-ke o Kanda-ke",
                description: "Es obligatorio entrar al menos a una casa. Las mejores conservadas permiten subir al inmenso ático. Entenderéis cómo la hoguera (Irori) encendida en la planta baja permitía calentar todo el aire que subía y secaba los capullos de gusanos de seda arriba en la penumbra.",
                image: "assets/imagen/shirakawago/wada.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Wada-ke+House"
            }
        ]
    },
    {
        title: "Dónde Comer y Especialidades Locales",
        content: `<p>Shirakawa-go es puramente rural, olvidaros de restaurantes con neones. Aquí se viene a comer comida de supervivencia refinada (caliente y grasienta).</p><ul class='text-list'>
<li><strong>La Exquisita Ternera de Hida (Hida Beef):</strong><br>A la par con Kobe y Matsusaka en calidad y marmoleo de grasa. Veréis pequeños puestos en las calles principales vendiendo croquetas de ternera (Korokke) y palitos asados al carbón (Kushiyaki) por la calle.<br><em>Recomendación Local (Comer de plato):</em> <strong>Irori (Shirakawa-go)</strong>. Una auténtica joya antigua donde comeréis ternera de Hida de altísima calidad asada sobre hojas de magnolia secas (Hoba Miso) junto a una hoguera central.<br><a href='https://www.google.com/maps/search/?api=1&query=Irori+Shirakawago' target='_blank' style='color:#63b3ed;'>📍 Ver Irori Shirakawago</a></li>
<li><strong>Ramen Local Auténtico:</strong><br><em>Recomendación Local:</em> <strong>Shokudo y Teishoku en Bunsui</strong> o <strong>Soba Dojo</strong>. Shirakawa-go es más famosa por los fideos Soba fríos y rústicos, cortados a mano y hechos del trigo sarraceno de la montaña.<br><a href='https://www.google.com/maps/search/?api=1&query=Soba+Dojo+Shirakawago' target='_blank' style='color:#63b3ed;'>📍 Ver Soba Dojo</a></li>
<li><strong>El Gohei Mochi:</strong> Para la merienda, comprad en los puestecillos estos dulces de arroz en forma ovalada bañados en salsa dulce de miso y nueces y pegados a un palo de madera tostado al fuego. Súper contundente.</li>
</ul>`
    },
    {
        title: "Normas de Estacionamiento y Ocio",
        content: `<ul class='text-list'>
<li><strong>Ocio - Paseo por los Arrozales:</strong> Al estar en verano, el entorno será un vergel. Pasear por los caminos entre las casas es el mejor ocio. No hay bares ni vida nocturna en la aldea. Al caer el sol, los comercios bajan la persiana de forma estricta.</li>
<li><strong>Estacionamiento con coche de alquiler:</strong> Está tajantemente PROHIBIDO aparcar en el interior de la aldea histórica. Todo el mundo debe aparcar en el inmenso Parking Público (Seseragi Park Parking) al otro lado del río y cruzar el largo puente colgante peatonal para entrar en el pueblo. Os costará unos 1000 yenes.</li>
</ul>`
    }
];

// 6. TAKAYAMA Expandido
data.takayama.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Hida-Takayama es un santuario maderero protegido por las imponentes crestas de los Alpes Japoneses. Antaño fue famosa en todo el Japón medieval por proveer de la mejor madera y de los artesanos y ebanistas más hábiles de todo el imperio (se dice que eximían a la ciudad de impuestos a cambio de llevar a sus carpinteros a edificar Kioto). Su aislamiento la preservó perfectamente, y pasear por sus calles te traslada a los tiempos prósperos de los mercaderes y artesanos del shogunato.</p>"
    },
    {
        title: "Monumentos y Calles Históricas",
        items: [
            {
                name: "Barrio Histórico de Sanmachi Suji",
                description: "La joya visual del pueblo. Tres calles paralelas formadas íntegramente por casas oscuras de madera pulida del periodo Edo, con entramados rústicos, techos bajos y riachuelos artificiales a los lados. Está repleta de cafés, tiendecitas de artesanía, puestos de carne y bodegas centenarias.",
                image: "assets/imagen/takayama/sanmachi.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Sanmachi+Suji+Takayama"
            },
            {
                name: "Takayama Jinya",
                description: "Una auténtica rareza nacional. Es la última oficina del gobierno (y corte de magistrados) del periodo Edo que queda intacta en Japón. Una enorme mansión donde podéis ver las salas de recepción, los almacenes de arroz gigantes para los impuestos, ¡y la lúgubre sala de interrogatorios de prisioneros!",
                image: "assets/imagen/takayama/jinya.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Takayama+Jinya"
            },
            {
                name: "Mercados Matutinos (Miyagawa y Jinya-mae)",
                description: "Una tradición desde el siglo XIX. Todos los días a las 6 o 7 am, a orillas del río Miyagawa y frente a la Jinya, las granjeras (muchas de ellas mujeres muy mayores) montan decenas de carpas para vender productos, flores, encurtidos exóticos y artesanía (especialmente los Sarubobo).",
                image: "assets/imagen/takayama/miyagawa.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Miyagawa+Morning+Market"
            },
            {
                name: "Paseo de los Templos (Higashiyama)",
                description: "Una ruta por la colina este (lejos de los turistas) que conecta cerca de una docena de templos y santuarios escondidos en el bosque, pasando cerca de las ruinas del antiguo castillo.",
                image: "assets/imagen/takayama/higashiyama.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Higashiyama+Walking+Course+Takayama"
            }
        ]
    },
    {
        title: "Dónde Comer y Beber: Ternera Premium y Sake",
        content: `<ul class='text-list'>
<li><strong>Sushi de Hida Beef (¡No Pescado!):</strong><br>En Takayama, las vacas reinan. A lo largo de la calle de Sanmachi hay puestos (como el mítico *Hida Kotte Ushi*) donde venden, literalmente, piezas de Sushi crudo o semi-abrasado con soplete hechas de finas lonchas de carne de ternera Wagyu servidas sobre una galleta comestible que hace las veces de plato.<br><a href='https://www.google.com/maps/search/?api=1&query=Hida+Kotte+Ushi+Takayama' target='_blank' style='color:#63b3ed;'>📍 Ver Kotte Ushi</a></li>
<li><strong>Ramen Local Auténtico (Takayama Ramen):</strong><br><em>Recomendación Local:</em> <strong>Menya Shirakawa</strong>. El ramen aquí es distinto al resto del país. El caldo a base de huesos de pollo, verduras crujientes y escamas secas de bonito se hierve JUNTO con la base oscura de salsa de soja en la misma marmita y se sirve con fideos muy finos y rizados.<br><a href='https://www.google.com/maps/search/?api=1&query=Menya+Shirakawa+Takayama' target='_blank' style='color:#63b3ed;'>📍 Ver Menya Shirakawa</a></li>
<li><strong>Cena Épica (Izakaya Auténtica):</strong><br><em>Recomendación Local:</em> <strong>Heianraku</strong>. Un local ínfimo e íntimo regentado por una pareja de abuelitos adorables. Comida casera, opciones vegetarianas y ambiente insuperable. (¡Reservad sí o sí!)<br><a href='https://www.google.com/maps/search/?api=1&query=Heianraku+Takayama' target='_blank' style='color:#63b3ed;'>📍 Ver Heianraku</a></li>
<li><strong>El Paraíso de las Destilerías de Sake:</strong><br>El agua helada de los Alpes crea el mejor sake. Caminad por el casco viejo y buscad las bolas gigantes de ramas de cedro marrón colgando en la puerta (se llaman <em>Sugidama</em> y avisan de que ahí elaboran licor). Entrad, pagad 3€, comprad un vasito tradicional (Ochoko) y probad diferentes sakes crudos y nublados que solo venden allí. (Bodegas míticas: <strong>Funasaka</strong> o <strong>Harada</strong>).</li>
</ul>`
    }
];

// 7. NAKASENDO Expandido
data.nakasendo.sections = [
    {
        title: "Información General e Historia",
        content: "<p>La histórica <strong>Ruta Nakasendo</strong> ('El camino a través de las montañas centrales') era una de las cinco rutas troncales que el Shogunato estableció en 1600 para conectar Edo (Tokio) con Kioto. Transcurría por el duro interior montañoso de Japón. En esta ruta, los Daimyos (señores feudales) y samuráis marchaban con sus vastas caravanas hacia la capital.</p><p>Para dar descanso a estos cortejos, se crearon decenas de Estaciones Postales (Juku). Hoy día recorreremos el tramo que une <strong>Magome y Tsumago</strong> (unos 8km). Es un viaje al pasado literal, un esfuerzo inmenso de preservación ha prohibido incluso las antenas, los cables de luz exteriores y la construcción de edificios modernos para dejar estos pueblos tal y como eran en el 1700.</p>"
    },
    {
        title: "La Ruta (Qué Ver y Senderismo)",
        items: [
            {
                name: "Magome-juku (El punto de partida)",
                description: "Magome es espectacularmente fotogénico porque se asienta en la falda empinada de la montaña. Sus molinos de agua siguen moliendo y los canalones de agua descienden a toda prisa por la cuesta empedrada principal que debéis recorrer.",
                image: "assets/imagen/nakasendo/magome.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Magome-juku"
            },
            {
                name: "El Sendero a través del Bosque",
                description: "La joya de la corona. Transcurriréis caminando durante 2-3 horas por frondosos bosques de cipreses (Hinoki) y senderos estrechos. Veréis estatuillas de Kannon enterradas en maleza y cruzaréis históricos puentes de madera.",
                image: "assets/imagen/nakasendo/sendero.webp",
                mapLink: ""
            },
            {
                name: "Las Campanas Anti-Osos (Kuma-yoke)",
                description: "A lo largo de todo el sendero, clavadas en los árboles, veréis campanas de bronce. ¡Tenéis la obligación de hacerlas sonar con fuerza al pasar! El objetivo es avisar a los osos negros asiáticos (autóctonos de esta zona) de que los humanos están cruzando su bosque.",
                image: "assets/imagen/nakasendo/campanas.webp",
                mapLink: ""
            },
            {
                name: "Cascadas Odaki y Medaki",
                description: "A mitad de camino os encontraréis las cascadas gemelas 'Macho y Hembra'. Famosas porque aquí la novela histórica relata que el invencible samurái Miyamoto Musashi se detuvo bajo la cascada helada a meditar y buscar revelación.",
                image: "assets/imagen/nakasendo/cascadas.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Odaki+Medaki+Falls+Nakasendo"
            },
            {
                name: "Tsumago-juku (El destino samurái)",
                description: "Al llegar, cruzareis la frontera de la provincia sintiendo haber llegado al siglo XVII real. Casas de madera oscurísima de baja altura cerradas con celosías. Entrad sin duda a visitar la posada central, o Honjin, reservada en exclusiva a señores feudales de la época.",
                image: "assets/imagen/nakasendo/tsumago.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Tsumago-juku"
            }
        ]
    },
    {
        title: "Logística Clave y Avituallamiento",
        content: `<ul class='text-list'>
<li><strong>Servicio de Equipaje:</strong> Caminar 8km cuesta arriba y por el bosque arrastrando maletas es una tortura mortal. Dejad vuestro coche alquilado en el parking en Magome, o entregad las maletas antes de las 11:00 am a la oficina de turismo de Magome. Ellos las enviarán por furgoneta directamente a Tsumago por unos pocos euros. Haréis la ruta solo con agua y cámara.</li>
<li><strong>Alimentación y Fideos Locales (Dónde Comer):</strong><br><em>Recomendación Local:</em> A lo largo del camino hay pocas casas de descanso (Tateba). Una de ellas es gratuita; sentaos alrededor del pozo de fuego interior y el encargado os ofrecerá té verde caliente. Aceptad y dejad un pequeño donativo.<br>Al llegar a Tsumago, id directos a restaurantes de <strong>Shinshu Soba</strong> (los gruesos fideos oscuros típicos de las montañas de Nagano).<br><a href='https://www.google.com/maps/search/?api=1&query=Soba+Tsumago-juku' target='_blank' style='color:#63b3ed;'>📍 Buscar Soba en Tsumago</a></li>
<li><strong>Gohei Mochi y Oyaki:</strong> Compradlos calientes por las ventanas de madera al cruzar los pueblos. Energizan rápidamente para poder seguir con la caminata.</li>
</ul>`
    }
];

// 8. HAKONE Expandido
data.hakone.sections = [
    {
        title: "Información General e Historia",
        content: "<p>Hakone es la 'playa de interior' para el relax de los acaudalados tokiotas, y el mejor lugar del país para el turismo termal. Situado dentro de la caldera de un antiguo pero gigantesco volcán apagado, las aguas hirvientes de azufre siguen moldeando su paisaje. Sirvió también históricamente como el mayor y más temido punto de control militar (Hakone Sekisho) en la ruta Nakasendo/Tokaido hacia Edo, donde los guardias del Shogun confiscaban armas secretas y vigilaban a las mujeres de los señores que intentaban escapar. Todo aquí huele a naturaleza boscosa y agua caliente... y si la suerte y las nubes acompañan, a la silueta colosal del sagrado <strong>Monte Fuji</strong>.</p>"
    },
    {
        title: "El Círculo de Hakone (Qué Ver)",
        items: [
            {
                name: "El Torii Flotante de Hakone Jinja",
                description: "Rodeado del misticismo del bosque virgen junto al lago, las largas escaleras con cientos de faroles enmarcan una de las postales más buscadas: un gigantesco arco Torii rojo anclado profundamente en el lecho del Lago Ashi. Llegad muy temprano, al atardecer las colas son inmensas.",
                image: "assets/imagen/hakone/jinja.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hakone+Shrine+Torii"
            },
            {
                name: "Lago Ashi y el Barco Pirata",
                description: "Una de las atracciones más rocambolescas de Japón. Tras salir de las estancias samuráis, acabarás cruzando la caldera volcánica anegada por el Lago Ashi montado en inmensas réplicas detalladas al milímetro de los grandes galeones europeos y barcos piratas. ¡Muy divertido, y con vistas al Fuji!",
                image: "assets/imagen/hakone/barco.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Lake+Ashi+Sightseeing+Cruise"
            },
            {
                name: "Teleférico al 'Infierno' de Owakudani",
                description: "Surcareis el cielo hasta Owakudani ('El Gran Valle de la Ebullición'). Un paisaje postapocalíptico teñido de azufre amarillo desde donde la montaña expulsa espesas nubes de vapor, resultado directo de la última erupción hace 3000 años. El olor a huevo podrido es notable.",
                image: "assets/imagen/hakone/owakudani.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Owakudani+Hakone"
            },
            {
                name: "Hakone Open-Air Museum",
                description: "Arte mundial mezclado con paisaje japonés. Docenas de esculturas monumentales en bronce, acero o aluminio instaladas en un inmenso jardín de colinas verdes. Tienen una colección tremenda de Picasso, así como intrincados laberintos de madera tejida y piscinas termales para los pies.",
                image: "assets/imagen/hakone/museo.webp",
                mapLink: "https://www.google.com/maps/search/?api=1&query=Hakone+Open+Air+Museum"
            }
        ]
    },
    {
        title: "Gastronomía: Huevos Negros y Alta Cocina",
        content: `<ul class='text-list'>
<li><strong>El Secreto Volcánico (Kuro-Tamago):</strong><br>En la cima de Owakudani el único manjar posible son los Huevos Negros. Son huevos de gallina cocidos in situ en los hirvientes charcos termales sulfurados. La cáscara se vuelve negra cual tizón. La leyenda y superstición dictan que comerse uno de estos huevos prorrogará la vida del que lo ingiere por exactamente siete años. (Se venden en packs de 5, ¡no comáis más de 2 u os dará algo en el estómago!).</li>
<li><strong>Ramen en las Estribaciones:</strong><br><em>Recomendación Local:</em> <strong>Ramen Hakone Yumoto Kurama</strong>. Para recuperar fuerzas y temperatura corporal, un ramen súper denso de Miso o un buen Shio si venís de estar sudando mucho en los baños.<br><a href='https://www.google.com/maps/search/?api=1&query=Hakone+Ramen+Kurama' target='_blank' style='color:#63b3ed;'>📍 Ver Ramen Kurama</a></li>
<li><strong>La Cena Kaiseki del Ryokan:</strong> Hakone es la meca de las posadas típicas japonesas (Ryokan). Estaréis rodeados de madera y puertas de papel correderas (shoji). La cena suele ir incluida; y es una brutalidad llamada *Kaiseki*: alta cocina estética basada en decenas de micromanjales de temporada (Sashimi al corte fino, estofados minúsculos, arroces sazonados). Todo os lo servirán directamente mientras vestís vuestros Yukatas sobre tatami.</li>
</ul>`
    },
    {
        title: "Onsens: Las Aguas Hirvientes y Tatuajes",
        content: `<ul class='text-list'>
<li><strong>El Ritual del Onsen:</strong> La actividad número 1. Son termas colectivas de agua ardiendo divididas estrictamente por géneros. <strong>Normas estrictas:</strong> Debéis ir completamente desnudos, nada de bañadores ni bikinis. Antes de siquiera rozar el agua os debéis lavar escrupulosamente todo el cuerpo con jabón sentados en los taburetes junto a la poza. Nunca hundiréis la minitoalla que os dan al llegar; ésta se dobla y se coloca sobre vuestra frente para regular la temperatura.</li>
<li><strong>El Problema con los Tatuajes:</strong> La gran mayoría de los baños de hoteles, piscinas y onsens públicos en Japón prohíben categóricamente la entrada a clientes tatuados, asumiendo su vínculo con los clanes y sindicatos *Yakuza* u organizaciones criminales. Como aquí alquiláis vehículo privado, tened la prudencia de preguntar si los baños del hotel admiten tatuajes (*Tattoo friendly*), o reservad aquellos que ofrecen la opción de 'Baños Privados' o familiares (Kashikiri-buro), los cuales podréis cerrar con pestillo y bañaros toda la familia tranquilamente y al amparo de las miradas.</li>
</ul>`
    }
];

fs.writeFileSync(file, prefix + JSON.stringify(data, null, 4) + ';', 'utf8');
console.log("¡Script Masivo 2 completado!");
