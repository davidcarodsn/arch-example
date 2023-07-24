import { TypeProduct, type CatalogData, ProductFathersTypes } from "../types/types";

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
    filters: ['door', 'closers'],
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
    filters: ['door', 'closers'],
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
    filters: ['door', 'closers'],
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

export const allCatalogData:CatalogData[] = [
  ...windowsData,
  ...doorsData
]
