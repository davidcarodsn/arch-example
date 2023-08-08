import { TypeProduct, type CatalogData, ProductFathersTypes, TexturesTypes } from "../types/types";

export const windowsData: CatalogData[] = [
  {
    name: 'Banderola',
    img: 'banderola',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'banderola'],  
    specs: {
      descirption: 'De apertura superior, se proyecta verticalmente hacia adentro, admitiendo limpieza desde el interior. Se utilizan con frecuencia en oficinas, baños y cocheras.',
      maxMeasures: '1200x1800 mm',
      minMeasures: '550x550 mm',
      features: ['100% Hermético']
    }
  },
  {
    name: 'Corrediza',
    img: 'corrediza',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'corrediza'],  
    specs: {
      descirption: 'Grandes dimensiones: Permiten recibir mucha luz natural y disfrutar de grandes vistas.',
      minMeasures: '1200x600 mm',
      maxMeasures: '5750x3000 mm',
      features: [
        'En 3 vías se pueden combinar hasta 6 hojas, móviles y/o fijas. Permiten acristalar paños simples y dobles de hasta 3 metros de altura, con vidrios de hasta 34 mm de espesor.',
        'Permiten el uso de mosquiteros y son perfectas si la abertura tiene reja externa.',
        'Ideales para optimizar ambientes, al no ocupar espacio adicional al abrirse.',
      ]
    }
  },
  {
    name: 'De Abrir Practicable',
    img: 'deabrirpracticable',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'practica'],  
    specs: {
      descirption: 'Los herrajes multipunto de cierre las convierten en aberturas con máxima aislación térmica y acústica. Son ideales para zonas con alto tránsito y ruido del exterior y para obtener un mayor ahorro en climatización.',
      minMeasures: '550x550 mm',
      maxMeasures: '1200x1800 mm',
      features: [
        '100% Herméticas',
        'Permiten su total apertura',
        'Permiten el uso de mosquiteros y son perfectas si la abertura tiene una reja externa.'
      ]
    }
  },
  {
    name: 'Oscilobatiente',
    img: 'oscilobatiente',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'oscilobatiente'],  
    specs: {
      descirption: 'Son ideales para el exterior porque reducen el ruido en zonas con alto tránsito y para obtener un mayor ahorro en climatización.',
      minMeasures: '550x550 mm',
      maxMeasures: '1200x1800 mm',
      features: [
        'Máxima versatilidad: Ventilación adaptable a las condiciones climáticas. - REDUCIDA: ideal para no enfriar la habitación. - COMPLETA: circulación de aire fresco.',
        '100% Herméticas',
        'Doble opción de apertura por sistema de herrajes combinados permiten tanto la lateral de la ventana de abrir, cómo la inclinada superior de la banderola.',
        'Cuenta con seguro contra falsa maniobra y con seguro contra corrientes de aire, que evita un cierre inesperado de la ventana.'
      ]
    }
  },
  {
    name: 'Desplazable Proyectante',
    img: 'desplazableproyectante',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'proyectante'],
    specs: {
      descirption: 'Una pareja de compases en los laterales, desplazan la hoja hacia fuera y hacia abajo simultáneamente, lo que permite una ventilación desde la base.',
      minMeasures: '550x550 mm',
      maxMeasures: '1200x1800 mm',
      features: ['No ocupan espacio interior. Al abrir hacia afuera, mantienen el interior utilizable para muebles o cortinas.']
    }
  },
  {
    name: 'Paralela',
    img: 'paralela',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'paralela'],  
    specs: {
      descirption: 'Combina la funcionalidad de una corrediza con la estanqueidad y hermeticidad de una abertura doble contacto.',
      minMeasures: '1500x1000 mm',
      maxMeasures: '3000x2350 mm',
      features: [
        'En el primer punto de apertura la hoja de la ventana se separa paralela al marco, se crean 6 mm de separación permitiendo una ventilación natural y segura ante cualquier condición climatológica, en el segundo se desplaza paralela al marco como una corrediza convencional.',
        'En la posición de apertura reducida se da la misma seguridad frente a robos que con la ventana cerrada.'
      ]
    }
  },
  {
    name: 'Plegadiza',
    img: 'plegadiza',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT,],
    specs: {
      minMeasures: '1500x1000 mm',
      maxMeasures: '5750x2600 mm',
      features: [
        'Permite liberar 100% del paso, lo que las hace ideales para galerías y garages, ya que el umbral es transitable con vehículo.',
        'Integran ambientes, ya que todos los elementos se pueden plegar y deslizar sobre el marco, lo que es ideal para optimizar balcones y terrazas.'
      ]
    }
  },
];

export const doorsData: CatalogData[] = [
  {
    name: 'Puerta Frente',
    img: 'puertafrente',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.DOOR_PRODUCT, 'puertafrente'],
    specs: {
      minMeasures: '1000x2300 mm',
      maxMeasures: '1800x2300 mm',
      features: [
        'De apertura interior y exterior, con bisagras en el marco del lateral elegido.',
        'Poseen el marco y las hojas con refuerzo de hierro galvanizado.',
        'Con burlete de estanqueidad de EPDM exterior e interior, dejan la hoja y marco sellados perimetralmente.'
      ]
    }
  },
  {
    name: 'Puerta Machimbre',
    img: 'puertamachimbre',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.DOOR_PRODUCT, 'puertamachimbre'],
    specs: {
      minMeasures: '1000x2300 mm',
      maxMeasures:'1800x2300 mm',
      features: [
        'De apertura interior y exterior, con bisagras en el marco del lateral elegido.',
        'Poseen el marco y las hojas con refuerzo de hierro galvanizado.',
        'Con burlete de estanqueidad de EPDM exterior e interior, dejan la hoja y marco sellados perimetralmente.'
      ]
    }
  },
  {
    name: 'Puerta Vidriada',
    img: 'puertavidriada',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.DOOR_PRODUCT, 'puertavidreada'],
    specs: {
      minMeasures: '1000x2300 mm',
      maxMeasures: '1800x2300 mm',
      features: [
        'Paneles con foliados de origen Alemán, para la elaboracion de aberturas y cerramientos termoconformados.',
        'Contamos con las líneas Pampa, Lanín y Ranurada, con detalles opcionales en sus diseños (Molduras en bajo relieve y embellecedores de PVC Símil Acero).',
        'Diseñados para construcciones modernas o clásicas, por sus líneas simples y puras.',
        'Los foliados disponibles son: Golden Oak, Blanco y Nogal.'
      ]
    }
  },
];

export const complementarySystemData: CatalogData[] = [
  {
    name: 'Baranda Balcon',
    img: 'barandabalcon',
    filters: [ProductFathersTypes.CS_TYPES, 'barandabalcon'],
    specs: {
      features: [
        'Pasamanos redondos, elípticos o rectos dan variables de diseño e imagen del balcón.',
        'Opciones de distintas presencias de vidrio-aluminio.',
      ],
      descirption: 'Dos líneas disponibles: <br> Baranda Clásica: pasamanos redondo o recto con gran presencia de vidrio. <br> Baranda BBA: de reciente lanzamiento, con pasamanos de diseño elíptico de agradable imagen y tacto, permite una gran presencia del vidrio dado que el mismo nace dentro del pasamanos.'
    }
  },
  {
    name: 'Frente Placard',
    img: 'frenteplacard',
    filters: [ProductFathersTypes.CS_TYPES, 'frenteplacard'],
    specs: {
      features: [
        'Admite Placas de Madera (Fibrofácil), Espejo y Vidrio.',
        'Dos modelos disponibles de Tirador: normal y reforzado.',
        'El sistema de apertura corredizo evita la necesidad de mantener despejada el área frontal del Placard para la apertura de las hojas.'
      ]
    }
  },
  {
    name: 'Tabiques Divisorios',
    img: 'tabiquesdivisorios',
    filters: [ProductFathersTypes.CS_TYPES, 'tabiquesdivisorios'],
    specs: {
      features: [
        'Ideal para dividir oficinas',
        'Admite Placas de Madera (Fibrofácil) y Vidrio'
      ],
      descirption: 'Dos modelos disponibles: <br> Línea Alcemar, con bordes redondeados y terminación de columna mediante tapa de aluminio. <br> Línea Tradicional, bordes rectos y terminación de columna mediante burlete'
    }
  },
  {
    name: 'Techo Vidriado',
    img: 'techovidriado',
    filters: [ProductFathersTypes.CS_TYPES, 'techovidriado'],
    specs: {
      features: [
        'Acabado anodizado o pintado.',
        'Admite vidrio Simple y DVH.',
        'Libre escurrimiento en sentido de la pendiente.',
        'Sistema compuesto por perfiles de larguero, travesaño y prensa vidrio.',
        'Montado sobre estructura portante independiente.'
      ],
    }
  },
];

export const closersData:CatalogData[] = [
  {
    name: 'Courtain Wall',
    img: 'courtainwall',
    filters: [ProductFathersTypes.CLOSERS_TYPES, 'courtainwall'],
    specs: {
      descirption: `
        <strong>Estética</strong>
        <br>
        La línea permite generar superficies vidriadas a partir de las cuales se posible revestir la edificación. En la actualidad, es habitual su uso no solo en Edificios de gran altura, sino también en otros de menor tamaño, e incluso en viviendas.
        <br>
        <br>
        <strong>Prestación</strong>
        <br>
        Tres alternativas de sujeción para los cristales: vidrio pegado, mediante contravidrios y vidrio contenido. 
        <br>
        Para la primera alternativa, hay dos opciones: pegado mediante cinta VHB o Silicona.
        <br>
        Admite vidrios laminados, templados y DVH.
        <br>
        Diversos tipos de columnas, de acuerdo a la exigencia específicas de la obra
        <br>
        Tijeras de Acero para la Ventana Desplazable.
        <br>
        <br>
        <strong>Hermeticidad</strong>
        <br>
        Tres alternativas de sujeción para los cristales: vidrio pegado, mediante contravidrios y vidrio contenido. 
        <br>
        Para la primera alternativa, hay dos opciones: pegado mediante cinta VHB o Silicona.
        <br>
        Admite vidrios laminados, templados y DVH.
        <br>
        Diversos tipos de columnas, de acuerdo a la exigencia específicas de la obra
        <br>
        Tijeras de Acero para la Ventana Desplazable..
      `
    }
  },
  {
    name: 'Frente Integral',
    img: 'frenteintegral',
    filters: [ProductFathersTypes.CLOSERS_TYPES, 'frenteintegral'],
    specs: {
      descirption: `
      <strong>Prestación</strong>
      <br>
      Adaptable a diversos espesores de vidrio, mediante perfil prensa con fijación mediante bulones.
      <br>
      Corte a 90º
      <br>
      Admite vidrios laminado, templados y DVH.
      <br>
      <br>
      <strong>Hermeticidad</strong>
      <br>
      Los paños fijos generados a partir de este sistema son aptos para responder a las más altas exigencias de Hermeticidad y Estanqueidad
      <br>
      La colocación se realiza mediante la fijación al muro de las columnas perimetrales, a partir de las cuales se toman los divisores horizontales y verticales (formados por perfiles del mismo tipo que los perimetrales ) mediante escuadras tipo “U”.`,
      features: [
        'Diseñada en base a una vista frontal de 60 milímetros, con diversas profundidades de columna',
        'Permite generar Paños Vidriados, a los que puede añadirse Ventanas Desplazable, Puertas de Rebatir y otras Tipologías.',
        'Adaptable a diversos espesores de vidrio'
      ]
    }
  },
  {
    name: 'Frame Junta Cerrada',
    img: 'framejuntacerrada',
    filters: [ProductFathersTypes.CLOSERS_TYPES, 'framejuntacerrada'],
    specs: {
      features: [
        'Junta de unión sellada.',
        'Burletes de silicona.',
        'Alta prestación ante cargas de viento.',
        'Sistema de alta eficiencia para edificios en altura.'
      ],
      descirption: `
      <strong>Estética</strong>
      <br>
      Diseño actual e imagen continua de vidrio (sin presencia de aluminio visto desde el exterior).
      <br>
      Admite, si el proyecto lo contempla, el montaje de perfiles cosméticos de aluminio en el exterior.
      <br>
      Vidrio pegado con silicona estructural.
      <br>
      Interior de líneas y bordes rectos
      <br>
      <br>
      <strong>Características</strong>
      <br>
      Sistema modular acoplable de montaje rápido.
      <br>
      Armado de paneles en taller.
      <br>
      Sistema de fijación con regulación en 3 dimensiones.
      `
    }
  },
  {
    name: 'Parasol',
    img: 'parasol',
    filters: [ProductFathersTypes.CLOSERS_TYPES, 'parasol'],
    specs: {
      descirption: `
        En zonas donde prevalece el clima cálido, más allá del uso de sistema con RPT, se hace necesario mejorar el coeficiente de Factor Solar (FS) de forma tal de disminuir la irradiación solar incidente que entra al local a través de elementos vidriados. ALCEMAR S.A.,en su constante compromiso con la ecología, el medio ambiente y el ahorro energético, desarrolló y desarrolla sistemas de control solar aplicables en fachadas y aberturas, tanto fijos como móviles según las necesidades de proyecto adecuados a la ubicación geográfica de la obra y la altura de emplazamiento.
        <br>
        <br>
        Los dispositivos de control solar tienen como objetivo:
        – Regular la radiación solar limitando los efectos de la radiación infrarroja y permitiendo los efectos de la radiación visible.
        – Evitar que se generen ganancias de calor en verano.
        –Generación controlada de ganancias de calor en invierno.
        <br>
        <br>
        La combinación de Muro Cortina y una pantalla de tubos extruidos de aluminio, posicionada a cierta distancia de la estructura, actúa como protección solar.
        <br>
        <br>
        <strong>Flexibilidad</strong>
        <br>
        El sistema permite diferentes opciones de diseño en cuanto a forma y tamaño con la combinación de una variedad de perfiles, logrando lamas que van desde 240mm a 600mm.
        <br>
        <br>
        Parasol vertical móvil sección de 600mm, nos permite un buen campo visual desde el interior del edificio con una apertura de 400.
      `
    }
  },
]

export const texturesData: TexturesTypes[] = [
  {
    name: 'White',
    img: 'white'
  },
  {
    name: 'Ivory',
    img: 'ivory'
  },
  {
    name: 'White',
    img: 'white'
  },
  {
    name: 'Pewter',
    img: 'pewter'
  },
  {
    name: 'Metallic Grey',
    img: 'metallicgrey'
  },
  {
    name: 'Natural Oak',
    img: 'naturaloak'
  },
  {
    name: 'Grey Oak',
    img: 'greyoak'
  },
  {
    name: 'Turner Oak',
    img: 'turneroak'
  },
  {
    name: 'Golden Oak',
    img: 'goldenoak'
  },
  {
    name: 'Sipo',
    img: 'sipo'
  },
  {
    name: 'Cherry',
    img: 'cherry'
  },
  {
    name: 'Lenga',
    img: 'lenga'
  },
  {
    name: 'Walnut',
    img: 'walnut'
  },
  {
    name: 'Wengue',
    img: 'wengue'
  },
  {
    name: 'Sapelli',
    img: 'sapelli'
  },
  {
    name: 'Green',
    img: 'green'
  },
  {
    name: 'Graphite Grey',
    img: 'graphitegrey'
  },
  {
    name: 'Brown Mat',
    img: 'brownmat'
  },
  {
    name: 'Jet Black',
    img: 'jetblack'
  },
];

export const allCatalogData:CatalogData[] = [
  ...windowsData,
  ...doorsData,
  ...complementarySystemData,
  ...closersData
]
