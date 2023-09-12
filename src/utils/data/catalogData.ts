import {
  TypeProduct,
  type CatalogData,
  ProductFathersTypes,
  TexturesTypes,
} from "../types/types";

export const windowsData: CatalogData[] = [
  {
    name: "Banderola",
    // img: 'banderola',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "banderola",
    ],
    description:
      "La abertura tipo banderola es una elección adecuada para espacios donde se busca la entrada de luz y ventilación controlada, son perfectas para habitaciones pequeñas o áreas donde el espacio es limitado. Su diseño permite una apertura parcial de la hoja hacia adentro, lo que permite una regulación precisa del flujo de aire y admite colocar tela mosquitera en el exterior del vano. Son ideales para baños, despensas y ventanas en altura.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Banderola de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Fabricada con aluminio resistente a la corrosión, garantiza una larga vida útil.",
        },
        {
          title: "Diseño",
          text: "Ideal para espacios con limitaciones de espacio, ocupando poco espacio. Aporta un toque tradicional y elegante a cualquier espacio.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una mayor comodidad.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores.",
        },
      ],
      maxMeasures: "1200x1800 mm",
      minMeasures: "550x550 mm",
      features: [
        "Aportan un toque tradicional y elegante.",
        "Ventilación suave y regulada.",
        "Ideales para lugares con espacio limitado.",
        "Requieren poco mantenimiento.",
      ],
    },
  },
  {
    name: "Corrediza",
    // img: 'corrediza',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "corrediza",
    ],
    description:
      "La abertura de hojas corredizas es una opción clásica para maximizar la entrada de luz natural sin comprometer el espacio, ya que se deslizan sobre el mismo plano del muro donde están colocadas. Perfectas para áreas donde el espacio es limitado, como balcones y terrazas, o también para grandes luces en quinchos y galerías agregando mas cantidad de hojas donde crean una transición suave entre el interior y el exterior. Admite colocar hojas con tela mosquitera corredizas en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Abertura Corrediza de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Permite maximizar la entrada de luz natural sin ocupar espacio adicional.",
        },
        {
          title: "Ahorro de Espacio",
          text: "Ideal para áreas con limitaciones de espacio, como balcones y terrazas.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de tamaños y diseños para adaptarse a las necesidades de diseño de cualquier proyecto.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Opcionales",
          text: "Admite la instalación de hojas con tela mosquitera corrediza.",
        },
      ],
      minMeasures: "1200x600 mm",
      maxMeasures: "5750x3000 mm",
      features: [
        "Maximiza la entrada de luz",
        "No requiere espacio adicional para abrirse.",
        "Transición suave entre interiores y exteriores",
        "Disponible en una variedad de tamaños y diseños",
      ],
    },
  },
  {
    name: "Rebatible",
    // img: 'deabrirpracticable',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "practica",
    ],
    description:
      "La abertura rebatible es la elección perfecta cuando se busca una apertura amplia y despejada para una gran ventilación o de acceso. Es ideal para áreas que conectan el interior con patios, jardines o terrazas. Gracias a su apertura total hacia el interior, las aberturas rebatibles de acuerdo a su ubicación y tamaño brindan una sensación de espacio y continuidad entre ambas áreas.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Rebatible de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente, diseñada para resistir el paso del tiempo.",
        },
        {
          title: "Diseño",
          text: "Aporta un estilo tradicional y elegante que se adapta a una variedad de ambientes y estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Proporciona una entrada espaciosa y luminosa.",
        },
        {
          title: "Ventilación",
          text: "Ofrece una ventilación suave y regulada, ideal para mantener un ambiente cómodo.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para satisfacer las preferencias estéticas de cada espacio.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Diseño Clásico que aporta un estilo tradicional y elegante.",
        "Apertura Amplia para ambientes espaciosos y luminosos",
        "Ofrece una ventilación suave y regulada",
        "Adaptabilidad, se integra fácilmente en diversos ambientes",
      ],
    },
  },
  {
    name: "Oscilobatiente",
    // img: 'oscilobatiente',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "oscilobatiente",
    ],
    description:
      "La abertura oscilobatiente combina la funcionalidad de la apertura batiente tradicional con la versatilidad de la apertura oscilante. Puede abrirse hacia adentro como una hoja batiente o inclinarse desde la parte superior tipo banderola para permitir la ventilación controlada sin comprometer la seguridad. Esta tipología es especialmente adecuada para habitaciones que requieren un flujo de aire constante, y que cuando esté cerrada ofrezca gran hermeticidad y seguridad. Admite colocar tela mosquitera en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Oscilobatiente de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera, diseñada para soportar condiciones adversas.",
        },
        {
          title: "Diseño",
          text: "Combina estética contemporánea con versatilidad funcional. ",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada, ideal para mantener un ambiente cómodo.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento, lo que garantiza una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Dispone de opciones de cierre multipunto para una mayor seguridad y tranquilidad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para adaptarse a la estética de cualquier espacio.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Modos de apertura, oscilante y batiente.",
        "Ventilación suave y regulada.",
        "Estética moderna con funcionalidad.",
        "Ofrece opciones de cierre multipunto.",
      ],
    },
  },
  {
    name: "Proyectante",
    // img: 'desplazableproyectante',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "proyectante",
    ],
    description:
      "La abertura proyectante es ideal donde se busca un equilibrio entre ventilación y claridad sin invadir el interior de la habitación. Su diseño permite que la hoja se abra hacia afuera, lo que facilita la ventilación sin comprometer el espacio. Es una excelente opción para áreas donde se requiere una buena circulación de aire, como cocinas y baños.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Proyectante de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente a la corrosión.",
        },
        {
          title: "Diseño",
          text: "Estilo contemporáneo que agrega sofisticación. Ideal para lugares con limitaciones de espacio.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Opciones de cerraduras avanzadas para mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Ventilación suave y regulada.",
        "Estilo contemporáneo.",
        "No requiere espacio adicional para abrirse.",
        "Opciones con cerraduras y pestillos avanzados.",
      ],
    },
  },
  {
    name: "Desplazable",
    // img: 'paralela',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "paralela",
    ],
    description:
      "La abertura desplazable es una solución eficiente para ventilación controlada sobre muros o fachadas vidriadas. La hoja se desplaza hacia al exterior mediante brazos a fricción que le permite controlar de manera precisa la ventilación con un excelente control y seguridad. Son ideales para ventanas en altura, edificios de oficinas. Admite colocar tela mosquitera en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Ventanas Desplazables de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación controlada y precisa.",
        },
        {
          title: "Seguridad",
          text: "Diseñada para ofrecer un control seguro, especialmente en edificios en altura.",
        },
        {
          title: "Flexibilidad",
          text: "Admite la instalación de tela mosquitera en el exterior.",
        },
        {
          title: "Diseño",
          text: "Solución eficiente para muros y fachadas vidriadas.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para adaptarse a las preferencias estéticas de cada espacio.",
        },
      ],
      minMeasures: "1500x1000 mm",
      maxMeasures: "3000x2350 mm",
      features: [
        "Permiten una ventilación precisa y regulada.",
        "Ideal para edificios en altura.",
        "Admite la instalación de una tela mosquitera.",
        "Eficiente para muros y fachadas vidriadas.",
      ],
    },
  },
  {
    name: "Paño Fijo",
    // img: 'plegadiza',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "plegadiza",
    ],
    description:
      "El paño fijo es una solución eficaz para maximizar las vistas panorámicas y la entrada de luz. Aunque no tiene opción de ventilar, este tipo de abertura se utiliza en combinación con otras tipologías para crear diseños personalizados. Los paños fijos son ideales para enmarcar vistas pintorescas y añadir un toque arquitectónico a tu espacio.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Paño Fijo de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Maximización de Vistas",
          text: "Ofrece vistas panorámicas sin obstáculos para disfrutar del entorno.",
        },
        {
          title: "Abundante Luz Natural",
          text: "Permite una entrada generosa de luz, mejorando la luminosidad del espacio.",
        },
        {
          title: "Diseño Personalizado",
          text: "Se combina fácilmente con otras tipologías de aberturas para adaptarse a necesidades específicas de diseño.",
        },
        {
          title: "Estilo Arquitectónico",
          text: "Agrega un toque distintivo y elegante a cualquier espacio, mejorando la estética del lugar.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Bajo Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Uso Estratégico",
          text: "Se utiliza para enmarcar vistas y maximizar la belleza del entorno.",
        },
      ],
      features: [
        "Ofrece vistas panorámicas sin obstáculos.",
        "Permite una entrada generosa de luz.",
        "Se combina fácilmente con otras tipologías",
        "Añade Estilo Arquitectónico elegante.",
      ],
    },
  },
];

export const doorsData: CatalogData[] = [
  {
    name: "Puerta de rebatir",
    // img: 'puertarebatir',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertarebatir",
    ],
    description:
      "La puerta de rebatir combina un diseño clásico con facilidad de uso. Su apertura hacia el interior o exterior brinda un acceso conveniente, y sus hojas sólidas proporciona una sensación de seguridad. Esta tipología es ideal para crear una transición funcional entre el interior y el exterior. Pueden tener una o varias hojas según el vano que se desea cubrir.",
    specs: {
      minMeasures: "1000x2300 mm",
      maxMeasures: "1800x2300 mm",
      description: [
        {
          title: "Tipo",
          text: "Puertas de rebatir de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente para una vida útil prolongada.",
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz.",
        },
        {
          title: "Mantenimiento",
          text: "Diseño simple que facilita la limpieza y el cuidado.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores.",
        },
      ],
      features: [
        "Amplia apertura",
        "Estilo Versátil",
        "Control de Ventilación",
        "Mantenimiento Sencillo",
      ],
    },
  },
  {
    name: "Puerta Pivotante",
    // img: 'puertamachimbre',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertapivotante",
    ],
    description:
      "La puerta pivotante es una opción audaz que agrega un toque contemporáneo a las fachadas. Su eje de pivote desplazado permite un giro suave y un estilo distintivo. Esta tipología es perfecta para quienes buscan un diseño único y con la opción de hojas de gran tamaño.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas pivotantes de aluminio.",
        },
        {
          title: "Material",
          text: "Material de Fabricación: Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y duradera.",
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Entrada espaciosa y luminosa.",
        },
        {
          title: "Ventilación",
          text: "Regula la entrada de aire fresco.",
        },
        {
          title: "Mantenimiento",
          text: "Diseño que facilita la limpieza y el cuidado.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores.",
        },
      ],
      features: [
        "Estilo contemporáneo y elegante.",
        "Entrada espaciosa y luminosa.",
        "Regula la entrada de aire fresco.",
        "Construcción robusta y duradera.",
      ],
    },
  },
  {
    name: "Puerta Corrediza Colgante",
    // img: 'puertamachimbre',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertacorredizacolgante",
    ],
    description:
      "La puerta corrediza colgante es una solución práctica para espacios reducidos. Su deslizamiento suave y sin obstáculos ahorra espacio y agrega un toque moderno. Esta tipología es especialmente adecuada para áreas donde el espacio es una consideración importante. La Hoja se desplaza de forma lateral sobre un riel superior fijado al muro logrando la apertura sin trazar un barrido de apertura tradicional. Se pueden hacer hojas de tamaño considerable y múltiples diseños.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas corredizas colgantes de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Ideal para lugares con limitaciones de espacio. Crea una transición suave entre espacios interiores y exteriores.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente.",
        },
        {
          title: "Entrada de Luz",
          text: "Maximiza la entrada de luz natural en el interior.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores.",
        },
      ],
      features: [
        "Estilo contemporáneo y elegante.",
        "Ideal para lugares con limitaciones de espacio.",
        "Crean una transición suave entre espacios interiores y exteriores.",
        "Maximizan la entrada de luz natural en el interior.",
      ],
    },
  },
  {
    name: "Puerta Plegadiza",
    // img: 'puertamachimbre',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertaplegadiza",
    ],
    description:
      "La puerta Plegadiza es una solución práctica para cerrar grandes luces. Su forma de plegarse permite una cantidad de hojas variables según la longitud del vano a cubrir y agrega un toque moderno a la obra. Esta tipología permite el casi 100% de la apertura, ideal para quinchos, galerías.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas plegadizas de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Estilo contemporáneo y elegante, Ideal para maximizar el espacio en áreas con limitaciones.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Entrada de Luz",
          text: "Maximiza la entrada de luz natural, creando ambientes luminosos.",
        },
        {
          title: "Transición sin Barreras",
          text: "Facilita la conexión entre espacios interiores y exteriores.",
        },
        {
          title: "Mantenimiento",
          text: "Requieren poco mantenimiento para una vida útil prolongada.",
        },
        {
          title: "Personalización",
          text: "Disponibles en diversos acabados y colores.",
        },
      ],
      features: [
        "Amplían galerías y quinchos al conectar espacios.",
        "Facilitan la transición suave entre interiores y exteriores.",
        "Ofrecen ventilación natural al abrir parcialmente.",
        "Aumentan la entrada de luz para un ambiente acogedor.",
      ],
    },
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
      description: 'Dos líneas disponibles: <br> Baranda Clásica: pasamanos redondo o recto con gran presencia de vidrio. <br> Baranda BBA: de reciente lanzamiento, con pasamanos de diseño elíptico de agradable imagen y tacto, permite una gran presencia del vidrio dado que el mismo nace dentro del pasamanos.'
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
      description: 'Dos modelos disponibles: <br> Línea Alcemar, con bordes redondeados y terminación de columna mediante tapa de aluminio. <br> Línea Tradicional, bordes rectos y terminación de columna mediante burlete'
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

export const closersData: CatalogData[] = [
  {
    name: "Piel de vidrio",
    filters: [ProductFathersTypes.CLOSERS_TYPES, "pieldevidrio"],
    description: `
    Nuestro sistema de piel de vidrio es la respuesta ideal para optimizar las envolventes vidriadas de edificios de gran altura, pero su versatilidad lo hace perfecto para proyectos de menor escala e incluso viviendas. Esta estructura innovadora utiliza columnas de aluminio precisamente fijadas en la obra, junto con cuadros de aluminio que albergan vidrios de alta calidad (DVH). Los cuadros pueden instalarse desde el interior o exterior, ofreciendo una vista exterior de vidrio puro sin aluminio visible. Nuestro sistema de piel de vidrio es adaptable para diferentes tipologías de aberturas, ya sea para paños fijos o proyectantes.

    Aluplast es una empresa con amplia experiencia y conocimientos en sistemas de vidriados envolventes, brindando soluciones tanto para edificios comerciales como residenciales. Nuestro equipo de ingenieros altamente capacitado se encarga de dimensionar perfiles, anclajes, tamaños de paños y las características de vidrios que mejor se ajusten a las condiciones climáticas y de viento de la zona.
    `,
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Sistema de Piel de Vidrio de Aluplast.",
        },
        {
          title: "Composición",
          text: "Paneles de vidrio de alta calidad, columnas de aluminio.",
        },
        {
          title: "Diseño Estético",
          text: "Ofrece una estética moderna y elegante, maximizando la entrada de luz natural.",
        },
        {
          title: "Eficiencia Energética",
          text: "Vidrios de alto rendimiento que brindan un aislamiento térmico y acústico excepcional.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente que garantiza una larga vida útil con mantenimiento mínimo.",
        },
        {
          title: "Versatilidad de Uso",
          text: "Adecuado para aplicaciones comerciales y residenciales, adaptándose a proyectos de diferentes escalas.",
        },
        {
          title: "Instalación Profesional",
          text: "Se recomienda la instalación por expertos para un rendimiento óptimo.",
        },
      ],
      features: [
        "Ofrece una vista sin obstáculos.",
        "Se adapta a las necesidades del cliente.",
        "Valor Estético Superior.",
        "Eficiencia a Largo Plazo",
      ],
    },
  },
  {
    name: "Frente Integral",
    // img: 'frenteintegral',
    filters: [ProductFathersTypes.CLOSERS_TYPES, "frenteintegral"],
    description:
      "Esta solución es la elección definitiva para aquellos que desean transformar sus espacios de manera elegante y funcional. Representa la combinación perfecta de diseño moderno y versatilidad, ofreciendo una experiencia única en la integración de espacios interiores y exteriores.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Solución de Cerramiento con Frente Integral de Aluminio.",
        },
        {
          title: "Material de Fabricación",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño Vanguardista",
          text: "Aporta un toque moderno y sofisticado a cualquier espacio.",
        },
        {
          title: "Integración de Espacios",
          text: "Permite la integración perfecta de espacios interiores y exteriores.",
        },
        {
          title: "Amplia Entrada de Luz Natural",
          text: "Maximiza la entrada de luz, creando espacios luminosos y agradables.",
        },
        {
          title: "Eficiencia Energética",
          text: "Ofrece un excelente aislamiento térmico, reduciendo los costos energéticos.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Bajo Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios tamaños y diseños para adaptarse a las necesidades de diseño de cada proyecto.",
        },
        {
          title: "Fácil Instalación",
          text: "Se puede instalar de manera eficiente y rápida por profesionales capacitados.",
        },
        {
          title: "Versatilidad de Uso",
          text: "Adecuado para aplicaciones residenciales y comerciales.",
        },
        {
          title: "Mejora la Conexión Interior-Exterior",
          text: "Crea una transición fluida y mejora la conectividad de los espacios.",
        },
      ],
      features: [
        "Diseño Versátil y elegante",
        "Eficiencia Energética",
        "Amplia Entrada de Luz Natural",
        "Solución resistente y estructural",
      ],
    },
  },
  {
    name: "Sistema Frame",
    // img: 'courtainwall',
    description: `
      En la clasificación de muros cortina, presentamos nuestro sistema frame, que consiste en la fabricación previa de módulos en nuestra fábrica y su posterior instalación directa en el sitio de construcción, entre las losas.

      Estos módulos se conectan entre sí mediante columnas o travesaños "semicompletos" que se ensamblan cuando un módulo se coloca junto a otro. El propósito inicial del sistema de muro cortina fue reducir al mínimo el tiempo requerido para la instalación en el lugar de construcción.
    `,
    filters: [ProductFathersTypes.CLOSERS_TYPES, "courtainwall"],
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Sistema Frame de Aluplast.",
        },
        {
          title: "Composición",
          text: "Módulos prefabricados en nuestra fábrica que se instalan directamente en el sitio de la obra entre las losas.",
        },
        {
          title: "Conexión entre Módulos",
          text: 'Columnas o travesaños "semicompletos" que se ensamblan al unir módulos.',
        },
        {
          title: "Eficiencia en el Montaje",
          text: "Reducción significativa del tiempo de montaje en comparación con otros sistemas.",
        },
        {
          title: "Estética Elegante",
          text: "Agrega una apariencia moderna y elegante al edificio.",
        },
        {
          title: "Flexibilidad de Diseño",
          text: "Adaptable a diferentes estilos arquitectónicos y necesidades específicas.",
        },
        {
          title: "Control de Calidad",
          text: "Mayor control de calidad debido a la prefabricación en nuestra fábrica.",
        },
        {
          title: "Aplicaciones Versátiles",
          text: "Adecuado para una variedad de proyectos arquitectónicos.",
        },
        {
          title: "Practicidad",
          text: "Simplifica la instalación en obra, lo que se traduce en un proceso más rápido y eficiente.",
        },
      ],
      features: [
        "Rápida Instalación.",
        "Diseño Elegante excelente",
        "Se adapta a diversas necesidades.",
        "La prefabricación garantiza  calidad.",
      ],
    },
  },
  {
    name: "Frente Vidriado",
    // img: 'courtainwall',
    filters: [ProductFathersTypes.CLOSERS_TYPES, "courtainwall"],
    description:
      "El sistema de frente vidriado optimiza envolventes vidriadas en edificios de gran altura y también en construcciones más pequeñas, incluso viviendas. Este sistema utiliza columnas de aluminio y cuadros de aluminio con vidrios (o DVH) para crear una envolvente de vidrio puro sin aluminio visible. Ofrece ventanas fijas o proyectantes. En Aluplast somos expertos en sistemas de vidriados envolventes para edificios comerciales, residenciales y viviendas. Nuestro equipo de ingenieros dimensiona perfiles, anclajes y vidrios según las condiciones climáticas y de viento de la zona.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Frente Vidriado de Aluplast.",
        },
        {
          title: "Composición",
          text: "Paneles de vidrio templado y estructura de aluminio de alta calidad.",
        },
        {
          title: "Diseño Estético",
          text: "Ofrece una apariencia moderna y elegante, maximizando la entrada de luz natural.",
        },
        {
          title: "Eficiencia Energética",
          text: "Vidrios de alta eficiencia que proporcionan aislamiento térmico y acústico de alto rendimiento.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente que garantiza una larga vida útil y requiere bajo mantenimiento.",
        },
        {
          title: "Versatilidad de Uso",
          text: "Adecuado para aplicaciones comerciales y residenciales.",
        },
        {
          title: "Montaje Profesional",
          text: "Instalación por profesionales capacitados para un rendimiento óptimo.",
        },
      ],
      features: [
        "Máxima Transparencia, vista exterior de vidrio puro sin obstrucciones.",
        "Resistencia, soporta condiciones climáticas y de viento de manera eficiente.",
        "Construcción de alta calidad para una larga vida útil.",
        "Excelente aislamiento térmico y acústico.",
      ],
    },
  },
];

// export const controlSolar: CatalogData[] = [
//   {
//     name: 'Parasol',
// img: 'parasol',
//     filters: [ProductFathersTypes.CLOSERS_TYPES, 'parasol'],
//     specs: {
//       description:[],

//     },
//   },
// ]

export const texturesData: TexturesTypes[] = [
  {
    name: "White",
    img: "white",
  },
  {
    name: "Ivory",
    img: "ivory",
  },
  {
    name: "White",
    img: "white",
  },
  {
    name: "Pewter",
    img: "pewter",
  },
  {
    name: "Metallic Grey",
    img: "metallicgrey",
  },
  {
    name: "Natural Oak",
    img: "naturaloak",
  },
  {
    name: "Grey Oak",
    img: "greyoak",
  },
  {
    name: "Turner Oak",
    img: "turneroak",
  },
  {
    name: "Golden Oak",
    img: "goldenoak",
  },
  {
    name: "Sipo",
    img: "sipo",
  },
  {
    name: "Cherry",
    img: "cherry",
  },
  {
    name: "Lenga",
    img: "lenga",
  },
  {
    name: "Walnut",
    img: "walnut",
  },
  {
    name: "Wengue",
    img: "wengue",
  },
  {
    name: "Sapelli",
    img: "sapelli",
  },
  {
    name: "Green",
    img: "green",
  },
  {
    name: "Graphite Grey",
    img: "graphitegrey",
  },
  {
    name: "Brown Mat",
    img: "brownmat",
  },
  {
    name: "Jet Black",
    img: "jetblack",
  },
];

export const allCatalogData: CatalogData[] = [
  ...windowsData,
  ...doorsData,
  ...complementarySystemData,
  ...closersData,
];
