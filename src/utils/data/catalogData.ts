import { TypeProduct, type CatalogData, ProductFathersTypes, TexturesTypes } from "../types/types";

export const windowsData: CatalogData[] = [
  {
    name: 'Banderola',
    img: 'banderola',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'banderola'],  
    description: 'La abertura tipo banderola es una elección adecuada para espacios donde se busca la entrada de luz y ventilación controlada, son perfectas para habitaciones pequeñas o áreas donde el espacio es limitado. Su diseño permite una apertura parcial de la hoja hacia adentro, lo que permite una regulación precisa del flujo de aire y admite colocar tela mosquitera en el exterior del vano. Son ideales para baños, despensas y ventanas en altura.',
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Banderola de Aluminio."
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad."
        },
        {
          title: "Durabilidad",
          text: "Fabricada con aluminio resistente a la corrosión, garantiza una larga vida útil."
        },
        {
          title: "Diseño",
          text: "Ideal para espacios con limitaciones de espacio, ocupando poco espacio. Aporta un toque tradicional y elegante a cualquier espacio."
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios."
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz."
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una mayor comodidad."
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad."
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores."
        },
      ],
      maxMeasures: '1200x1800 mm',
      minMeasures: '550x550 mm',
      features: [
        'Aportan un toque tradicional y elegante.',
        'Ventilación suave y regulada.',
        'Ideales para lugares con espacio limitado.',
        'Requieren poco mantenimiento.',
      ]
    }
  },
  {
    name: 'Corrediza',
    img: 'corrediza',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'corrediza'],
    description: 'La abertura de hojas corredizas es una opción clásica para maximizar la entrada de luz natural sin comprometer el espacio, ya que se deslizan sobre el mismo plano del muro donde están colocadas. Perfectas para áreas donde el espacio es limitado, como balcones y terrazas, o también para grandes luces en quinchos y galerías agregando mas cantidad de hojas donde crean una transición suave entre el interior y el exterior. Admite colocar hojas con tela mosquitera corredizas en el exterior.',  
    specs: {
      description: [
        {
            "title": "Tipo de Producto",
            "text": "Abertura Corrediza de Aluminio."
        },
        {
            "title": "Material",
            "text": "Aluminio de alta calidad."
        },
        {
            "title": "Diseño",
            "text": "Permite maximizar la entrada de luz natural sin ocupar espacio adicional."
        },
        {
            "title": "Ahorro de Espacio",
            "text": "Ideal para áreas con limitaciones de espacio, como balcones y terrazas."
        },
        {
            "title": "Personalización",
            "text": "Disponible en una variedad de tamaños y diseños para adaptarse a las necesidades de diseño de cualquier proyecto."
        },
        {
            "title": "Durabilidad",
            "text": "Construcción resistente y duradera."
        },
        {
            "title": "Opcionales",
            "text": "Admite la instalación de hojas con tela mosquitera corrediza."
        }
    ],
      minMeasures: '1200x600 mm',
      maxMeasures: '5750x3000 mm',
      features: [
        'Maximiza la entrada de luz',
        'No requiere espacio adicional para abrirse.',
        'Transición suave entre interiores y exteriores',
        'Disponible en una variedad de tamaños y diseños'
      ]
    }
  },
  {
    name: 'Rebatible',
    img: 'deabrirpracticable',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'practica'], 
    description: 'La abertura rebatible es la elección perfecta cuando se busca una apertura amplia y despejada para una gran ventilación o de acceso. Es ideal para áreas que conectan el interior con patios, jardines o terrazas. Gracias a su apertura total hacia el interior, las aberturas rebatibles de acuerdo a su ubicación y tamaño brindan una sensación de espacio y continuidad entre ambas áreas.', 
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Rebatible de Aluminio."
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad."
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente, diseñada para resistir el paso del tiempo."
        },
        {
          title: "Diseño",
          text: "Aporta un estilo tradicional y elegante que se adapta a una variedad de ambientes y estilos arquitectónicos."
        },
        {
          title: "Tipo Apertura",
          text: "Proporciona una entrada espaciosa y luminosa."
        },
        {
          title: "Ventilación",
          text: "Ofrece una ventilación suave y regulada, ideal para mantener un ambiente cómodo."
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil."
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad."
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para satisfacer las preferencias estéticas de cada espacio."
        },
      ],
      minMeasures: '550x550 mm',
      maxMeasures: '1200x1800 mm',
      features: [
        'Diseño Clásico que aporta un estilo tradicional y elegante.',
        'Apertura Amplia para ambientes espaciosos y luminosos',
        'Ofrece una ventilación suave y regulada',
        'Adaptabilidad, se integra fácilmente en diversos ambientes',
      ]
    }
  },
  {
    name: 'Oscilobatiente',
    img: 'oscilobatiente',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'oscilobatiente'],  
    description: 'La abertura oscilobatiente combina la funcionalidad de la apertura batiente tradicional con la versatilidad de la apertura oscilante. Puede abrirse hacia adentro como una hoja batiente o inclinarse desde la parte superior tipo banderola para permitir la ventilación controlada sin comprometer la seguridad. Esta tipología es especialmente adecuada para habitaciones que requieren un flujo de aire constante, y que cuando esté cerrada ofrezca gran hermeticidad y seguridad. Admite colocar tela mosquitera en el exterior.',
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Oscilobatiente de Aluminio."
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad."
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera, diseñada para soportar condiciones adversas."
        },
        {
          title: "Diseño",
          text: "Combina estética contemporánea con versatilidad funcional. "
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios."
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada, ideal para mantener un ambiente cómodo."
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento, lo que garantiza una larga vida útil."
        },
        {
          title: "Seguridad",
          text: "Dispone de opciones de cierre multipunto para una mayor seguridad y tranquilidad."
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para adaptarse a la estética de cualquier espacio."
        },
      ],
      minMeasures: '550x550 mm',
      maxMeasures: '1200x1800 mm',
      features: [
        'Modos de apertura, oscilante y batiente.',
        'Ventilación suave y regulada.',
        'Estética moderna con funcionalidad.',
        'Ofrece opciones de cierre multipunto.',
      ]
    }
  },
  {
    name: 'Desplazable Proyectante',
    img: 'desplazableproyectante',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'proyectante'],
    description: 'La abertura proyectante es ideal donde se busca un equilibrio entre ventilación y claridad sin invadir el interior de la habitación. Su diseño permite que la hoja se abra hacia afuera, lo que facilita la ventilación sin comprometer el espacio. Es una excelente opción para áreas donde se requiere una buena circulación de aire, como cocinas y baños.',
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Proyectante de Aluminio."
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad."
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente a la corrosión."
        },
        {
          title: "Diseño",
          text: "Estilo contemporáneo que agrega sofisticación. Ideal para lugares con limitaciones de espacio."
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios."
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada."
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil."
        },
        {
          title: "Seguridad",
          text: "Opciones de cerraduras avanzadas para mayor seguridad."
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores."
        },
      ],
      minMeasures: '550x550 mm',
      maxMeasures: '1200x1800 mm',
      features: [
        'Ventilación suave y regulada.',
        'Estilo contemporáneo.',
        'No requiere espacio adicional para abrirse.',
        'Opciones con cerraduras y pestillos avanzados.',
      ]
    }
  },
  {
    name: 'Desplazable',
    img: 'paralela',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'paralela'],  
    description: 'La abertura desplazable es una solución eficiente para ventilación controlada sobre muros o fachadas vidriadas. La hoja se desplaza hacia al exterior mediante brazos a fricción que le permite controlar de manera precisa la ventilación con un excelente control y seguridad. Son ideales para ventanas en altura, edificios de oficinas. Admite colocar tela mosquitera en el exterior.',
    specs: {
      description: [
        {
            "title": "Tipo de Producto",
            "text": "Ventanas Desplazables de Aluminio."
        },
        {
            "title": "Material",
            "text": "Aluminio de alta calidad."
        },
        {
            "title": "Ventilación",
            "text": "Permite una ventilación controlada y precisa."
        },
        {
            "title": "Seguridad",
            "text": "Diseñada para ofrecer un control seguro, especialmente en edificios en altura."
        },
        {
            "title": "Flexibilidad",
            "text": "Admite la instalación de tela mosquitera en el exterior."
        },
        {
            "title": "Diseño",
            "text": "Solución eficiente para muros y fachadas vidriadas."
        },
        {
            "title": "Durabilidad",
            "text": "Construcción resistente y duradera."
        },
        {
            "title": "Mantenimiento",
            "text": "Requiere poco mantenimiento para una larga vida útil."
        },
        {
            "title": "Personalización",
            "text": "Disponible en varios acabados y colores para adaptarse a las preferencias estéticas de cada espacio."
        }
    ],
      minMeasures: '1500x1000 mm',
      maxMeasures: '3000x2350 mm',
      features: [
        'Permiten una ventilación precisa y regulada.',
        'Ideal para edificios en altura.',
        'Admite la instalación de una tela mosquitera.',
        'Eficiente para muros y fachadas vidriadas.',
      ]
    }
  },
  {
    name: 'Paño Fijo',
    img: 'plegadiza',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.WINDOW_PRODUCT, 'plegadiza'],
    description: 'El paño fijo es una solución eficaz para maximizar las vistas panorámicas y la entrada de luz. Aunque no tiene opción de ventilar, este tipo de abertura se utiliza en combinación con otras tipologías para crear diseños personalizados. Los paños fijos son ideales para enmarcar vistas pintorescas y añadir un toque arquitectónico a tu espacio.',
    specs: {
      description: [
        {
            "title": "Tipo de Producto",
            "text": "Paño Fijo de Aluminio."
        },
        {
            "title": "Material",
            "text": "Aluminio de alta calidad."
        },
        {
            "title": "Maximización de Vistas",
            "text": "Ofrece vistas panorámicas sin obstáculos para disfrutar del entorno."
        },
        {
            "title": "Abundante Luz Natural",
            "text": "Permite una entrada generosa de luz, mejorando la luminosidad del espacio."
        },
        {
            "title": "Diseño Personalizado",
            "text": "Se combina fácilmente con otras tipologías de aberturas para adaptarse a necesidades específicas de diseño."
        },
        {
            "title": "Estilo Arquitectónico",
            "text": "Agrega un toque distintivo y elegante a cualquier espacio, mejorando la estética del lugar."
        },
        {
            "title": "Durabilidad",
            "text": "Construcción resistente y duradera."
        },
        {
            "title": "Bajo Mantenimiento",
            "text": "Requiere poco mantenimiento para una larga vida útil."
        },
        {
            "title": "Uso Estratégico",
            "text": "Se utiliza para enmarcar vistas y maximizar la belleza del entorno."
        }
    ],
      features: [
        'Ofrece vistas panorámicas sin obstáculos.',
        'Permite una entrada generosa de luz.',
        'Se combina fácilmente con otras tipologías',
        'Añade Estilo Arquitectónico elegante.',
      ]
    }
  },
];

export const doorsData: CatalogData[] = [
  {
    name: 'Puerta de rebatir',
    img: 'puertarebatir',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.DOOR_PRODUCT, 'puertarebatir'],
    description: 'La puerta de rebatir combina un diseño clásico con facilidad de uso. Su apertura hacia el interior o exterior brinda un acceso conveniente, y sus hojas sólidas proporciona una sensación de seguridad. Esta tipología es ideal para crear una transición funcional entre el interior y el exterior. Pueden tener una o varias hojas según el vano que se desea cubrir.',
    specs: {
      minMeasures: '1000x2300 mm',
      maxMeasures: '1800x2300 mm',
      description: [
        {
          title: "Tipo",
          text: "Puertas de rebatir de aluminio."
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad."
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente para una vida útil prolongada."
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos."
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios."
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz."
        },
        {
          title: "Mantenimiento",
          text: "Diseño simple que facilita la limpieza y el cuidado."
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad."
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores."
        },
      ],
      features: [
        'Amplia apertura',
        'Estilo Versátil',
        'Control de Ventilación',
        'Mantenimiento Sencillo'
      ]
    }
  },
  {
    name: 'Puerta Pivotante',
    img: 'puertamachimbre',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.DOOR_PRODUCT, 'puertapivotante'],
    description: 'La puerta pivotante es una opción audaz que agrega un toque contemporáneo a las fachadas. Su eje de pivote desplazado permite un giro suave y un estilo distintivo. Esta tipología es perfecta para quienes buscan un diseño único y con la opción de hojas de gran tamaño.',
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas pivotantes de aluminio."
        },
        {
          title: "Material",
          text: "Material de Fabricación: Aluminio de alta calidad."
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y duradera."
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos."
        },
        {
          title: "Tipo Apertura",
          text: "Entrada espaciosa y luminosa."
        },
        {
          title: "Ventilación",
          text: "Regula la entrada de aire fresco."
        },
        {
          title: "Mantenimiento",
          text: "Diseño que facilita la limpieza y el cuidado."
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para mayor seguridad."
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores."
        },
      ],
      features: [
        'Estilo contemporáneo y elegante.',
        'Entrada espaciosa y luminosa.',
        'Regula la entrada de aire fresco.',
        'Construcción robusta y duradera.',
      ]
    }
  },
  {
    name: 'Puerta Corrediza Colgante',
    img: 'puertamachimbre',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.DOOR_PRODUCT, 'puertacorredizacolgante'],
    description: 'La puerta corrediza colgante es una solución práctica para espacios reducidos. Su deslizamiento suave y sin obstáculos ahorra espacio y agrega un toque moderno. Esta tipología es especialmente adecuada para áreas donde el espacio es una consideración importante. La Hoja se desplaza de forma lateral sobre un riel superior fijado al muro logrando la apertura sin trazar un barrido de apertura tradicional. Se pueden hacer hojas de tamaño considerable y múltiples diseños.',
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas corredizas colgantes de aluminio."
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad."
        },
        {
          title: "Diseño",
          text: "Ideal para lugares con limitaciones de espacio. Crea una transición suave entre espacios interiores y exteriores."
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente."
        },
        {
          title: "Entrada de Luz",
          text: "Maximiza la entrada de luz natural en el interior."
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad."
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores."
        },
      ],
      features: [
        'Estilo contemporáneo y elegante.',
        'Ideal para lugares con limitaciones de espacio.',
        'Crean una transición suave entre espacios interiores y exteriores.',
        'Maximizan la entrada de luz natural en el interior.',
      ]
    }
  },
  {
    name: 'Puerta Plegadiza',
    img: 'puertamachimbre',
    filters: [ProductFathersTypes.OPENERS_TYPES, TypeProduct.DOOR_PRODUCT, 'puertaplegadiza'],
    description: 'La puerta Plegadiza es una solución práctica para cerrar grandes luces. Su forma de plegarse permite una cantidad de hojas variables según la longitud del vano a cubrir y agrega un toque moderno a la obra. Esta tipología permite el casi 100% de la apertura, ideal para quinchos, galerías.',
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas plegadizas de aluminio."
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad."
        },
        {
          title: "Diseño",
          text: "Estilo contemporáneo y elegante, Ideal para maximizar el espacio en áreas con limitaciones."
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera."
        },
        {
          title: "Entrada de Luz",
          text: "Maximiza la entrada de luz natural, creando ambientes luminosos."
        },
        {
          title: "Transición sin Barreras",
          text: "Facilita la conexión entre espacios interiores y exteriores."
        },
        {
          title: "Mantenimiento",
          text: "Requieren poco mantenimiento para una vida útil prolongada."
        },
        {
          title: "Personalización",
          text: "Disponibles en diversos acabados y colores."
        },
      ],
      features: [
        'Amplían galerías y quinchos al conectar espacios.',
        'Facilitan la transición suave entre interiores y exteriores.',
        'Ofrecen ventilación natural al abrir parcialmente.',
        'Aumentan la entrada de luz para un ambiente acogedor.'
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

export const closersData:CatalogData[] = [
  {
    name: 'Courtain Wall',
    img: 'courtainwall',
    filters: [ProductFathersTypes.CLOSERS_TYPES, 'courtainwall'],
    specs: {
      description: `
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
      description: `
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
      description: `
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
      description: `
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
