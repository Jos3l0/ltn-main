export type Category =
  | "Proyectos Vitivinícolas"
  | "Proyectos Comerciales"
  | "Proyectos Industriales"
  | "Proyectos Residenciales"
  | "Proyectos Públicos"
  | "Proyectos a medida";

export const proyectCategories: Category[] = [
  "Proyectos Vitivinícolas",
  "Proyectos Comerciales",
  "Proyectos Industriales",
  "Proyectos Residenciales",
  "Proyectos Públicos",
  "Proyectos a medida",
];

export interface Project {
  id: number;
  title: string;
  category: Category;
  location: string;
  imagePath: string;
  description: string;
  relatedProducts: number[] | string;
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Proyectos Vitivinícolas",
    title: "Bodega Casa de Uco",
    location: "Tunuyán, Mendoza",
    imagePath: "/images/projects/Bodega_casa_de_uco/BODEGA CASA DE UCO.jpg",
    description:
      'Fuimos parte de la creación de una propuesta enoturística innovadora que fusiona el vino, la gastronomía y la región. La bodega, con arquitectura vanguardista, se completó en 2016, marcando una redefinición profunda de la vitivinicultura. El edificio, un "granero telescópico", se destaca por su diseño, utilizando recursos estéticos mínimos. La estructura incluye una extensa piscina de hormigón de 100 metros de longitud, con una superestructura de hierro y revestimiento de paneles compuestos metálicos de alta aislación térmica.',
    relatedProducts: [6, 7, 4],
  },
  {
    id: 2,
    category: "Proyectos Vitivinícolas",
    title: "Bodega Navarro Correas",
    location: "Agrelo, Mendoza",
    imagePath: "/images/projects/Bodega_navarro_correa/Navarro correas 02.jpg",
    description:
      "Desarrollada sobre una superficie de 1100m2. La totalidad de su estructura fue ideada con el objetivo de generar el menor impacto ambiental y tecológico dentro del entorno que la rodea.",
    relatedProducts: [4, 6],
  },
  {
    id: 3,
    category: "Proyectos Vitivinícolas",
    title: "Bodega O Fournier",
    location: "San Carlos, Mendoza",
    imagePath: "/images/projects/Bodega_Fournier/_DSC0122.jpg",
    description:
      "Intervenimos en la concreción de una de las bodegas de mayor prestigio en el segmento de vinos de alta calidad de Mendoza. Grupo Bodegas y Viñedos O´Fournier, fundada en el año 2000, cuenta con tecnología de vanguardia y tiene capacidad para albergar hasta 2800 barricas de roble a temperatura y humedad constante. Su obsesión por la continua mejora de los vinos, convierten a la bodega en un espacio productivo reconocido a nivel internacional.",
    relatedProducts: [1],
  },
  {
    id: 4,
    category: "Proyectos Industriales",
    title: "Congelados Centro Córdoba",
    location: "Córdoba",
    imagePath: "/images/projects/Congelados_centro_cordoba/DJI_0245.jpg",
    description:
      "Nuestros paneles aislantes térmicos – acústicos fueron partícipes de la edificación del predio de Congelados Centro, empresa con más de 30 años de experiencia, se especializa en el almacenamiento, distribución y logística de productos congelados y refrigerados. Participamos en la instalación de tres cámaras frigoríficas de distintas medidas, incluyendo equipamiento, puertas y accesorios, con un total de 18.700 metros cuadrados.",
    relatedProducts: [7, 12, 15],
  },
  {
    id: 5,
    category: "Proyectos Industriales",
    title: "Nini Mayorista",
    location: "Moreno, Buenos Aires",
    imagePath: "/images/projects/Nini_mayorista/DJI_0011.jpg",
    description:
      "Intervinimos sus 8100m2 de cerramiento con paneles aislantes arquitectónicos Classwall de alta resistencia estructural. El montaje se realizó con una estructura secundaria para la colocación de revestimiento de altura (entre 12 m2 y 33 m2) cumpliendo con las normas de seguridad existentes. Este complejo de distribución será la segunda boca de ventas de la firma en sus 49 años.",
    relatedProducts: [6],
  },
  {
    id: 6,
    category: "Proyectos Industriales",
    title: "Mc Cain",
    location: "Balcarce, Buenos Aires",
    imagePath: "/images/projects/Mccain/09.jpg",
    description:
      "La construcción de un mega Almacén de Ultracongelados significó un gran desafío. Con una capacidad de producción de 27 toneladas por hora logra abastecer a los mercados de Sudamérica y exportar a algunos países como Sudáfrica. La obra demandó una inversión de U$S 140 millones y significó para Balcarce una nueva instancia de crecimiento productivo a escala internacional.",
    relatedProducts: [7],
  },
  {
    id: 7,
    category: "Proyectos Industriales",
    title: "Grido Helacor",
    location: "Córdoba",
    imagePath: "/images/projects/Grido_helacor/DJI_0216.jpg",
    description:
      "Participamos de la construcción de la cámara de frío más grande del país, totalmente robotizada y de una producción aprox. de 75 millones de kilogramos anuales. La misma, contempla 30m. de ancho, 36m. de alto y 90m. de largo. Nuestros paneles equiparon: almacén (revestimiento y cerramiento) y sala de máquinas. Almacén automático autoportante de baja temperatura para 8500 posiciones de mercadería congelada. Panel utilizado - Megacold 180 mm para muros y cielorraso, y aislación de piso en dos capas de 100 mm. 23.0000 m2 de panel en total.",
    relatedProducts: [7],
  },
  {
    id: 8,
    category: "Proyectos Industriales",
    title: "Frigorífico Río Platense",
    location: "Buenos Aires",
    imagePath: "/images/projects/Frigorifico_rioplatense/Frigorifico.jpg",
    description:
      "Nos sumamos a la edificación del Frigorífico Rioplatense, una de las empresas empacadoras de carne vacuna más grandes del país, su actual planta de producción se encuentra ubicada en la provincia de Buenos Aires y cuenta con 23.900m2 de paneles aislantes. Orientamos nuestros esfuerzos al desarrollo de una cámara frigorífica innovadora y tecnológica con una infraestructura acorde a las necesidades con equipos modernos que permiten un seguimiento continuo del proceso de producción y distribución de los productos terminados.",
    relatedProducts: [7, 4, 1],
  },
  {
    id: 9,
    category: "Proyectos Comerciales",
    title: "Concesionario oficial Automotores",
    location: "San Martín, Mendoza",
    imagePath: "/images/projects/Concesionario/concesionario.jpg",
    description:
      "Participamos del desarrollo de un significativo punto de venta y servicio. La obra comprendió la ejecución de 3400 m2 cubiertos, más de 6000 m2 para estacionamiento de clientes y un extenso depósito para unidades cero km y usadas. Su realización implicó una inversión de 9 millones de pesos.",
    relatedProducts: [4, 6],
  },
  {
    id: 10,
    category: "Proyectos Comerciales",
    title: "Mercedes Benz",
    location: "Victoria, Buenos Aires",
    imagePath: "/images/projects/Mercedes_benz/Besten Mercedes Benz.jpg",
    description:
      "Nos sumamos a la edificación de una exclusiva, competitiva e integral concesionaria automotriz en la ciudad de Victoria, Buenos Aires. Al ser convocados a la realización de esta llamativa y exclusiva obra, orientamos nuestros esfuerzos al desarrollo de una innovadora y tecnológica infraestructura acorde a las necesidades y exigencias de sus clientes.",
    relatedProducts: [6, 9],
  },
  {
    id: 11,
    category: "Proyectos Comerciales",
    title: "Cofarmen",
    location: "Mendoza",
    imagePath: "/images/projects/Cofarmen/cofarmen.jpg",
    description:
      "Participamos de la construcción de la nueva planta de Cofarmen la cual cuenta con 7800 m2 construidos con paneles aislantes de Grupo LTN y tres cámaras frigoríficas de alta tecnología que les permitirá disfrutar de una amplia eficiencia energética y un aislamiento térmico excepcional.",
    relatedProducts: [1, 7, 12],
  },
  {
    id: 12,
    category: "Proyectos Residenciales",
    title: "Vivienda en Country",
    location: "Zona Sur, Córdoba",
    imagePath: "/images/projects/Country/DSC04015.jpg",
    description:
      "Para su ejecución, se aplicaron paneles aislantes LTN con el máximo aislamiento térmico y acústico. La elección de nuestros productos aceleró su construcción hasta en 10 veces.",
    relatedProducts: [6, 1],
  },
  {
    id: 13,
    category: "Proyectos Residenciales",
    title: "Vivienda en El Nacional",
    location: "Gral. Rodriguez, Buenos Aires",
    imagePath: "/images/projects/Nacional_general/casa.jpeg",
    description:
      "Esta obra se caracterizó por emplear Tejatech en sus techos. Hablamos de un producto innovador que combina el estilo de la teja tradicional con la alta resistencia del acero y las propiedades térmicas del poliuretano. Sus ventajas en construcción son infinitas.",
    relatedProducts: [3],
  },
  {
    id: 14,
    category: "Proyectos Residenciales",
    title: "Vines & Lodges",
    location: "Villa Yacanto, Córdoba",
    imagePath: "/images/projects/Cabana_yacanto/yacanto.jpg",
    description:
      "Combinación perfecta de minimalismo y naturaleza. Dos lodges de lujo construidos con paneles Classwall, un revestimiento que equilibra estética y eficiencia energética. En pocas semanas, transformamos 520m² de paneles y cuidada perfilería, en una obra arquitectónica de líneas limpias, integrada en armonía con viñedos y montañas.",
    relatedProducts: [7],
  },
  {
    id: 15,
    category: "Proyectos Residenciales",
    title: "Vivienda en Tierra del Sol",
    location: "San Martín de los Andes",
    imagePath: "/images/projects/San_martin_andes/_DSC8594.jpg",
    description:
      "Brindamos soluciones constructivas adaptables a todo tipo de edificación: tradicional o en seco. Nuestros paneles con el máximo aislamiento térmico-acústico permiten: edificar en su totalidad, ampliar espacios o reemplazar sus techos.",
    relatedProducts: [1],
  },
  {
    id: 16,
    category: "Proyectos Públicos",
    title: "Facultad de Medicina UNCuyo",
    location: "Mendoza",
    imagePath: "/images/projects/Uncuyo/facultad.jpg",
    description:
      "La construcción del Instituto de Histología y Embriología de Mendoza en el año 2014 implicó la edificación de una obra de gran relevancia para la comunidad médica. Su característica distintiva fue la utilización de elementos de aislamiento sísmico de base. La calidad de nuestros paneles permitirá la preservación de la inversión total realizada.",
    relatedProducts: [6],
  },
  {
    id: 17,
    category: "Proyectos a medida",
    title: "Simplot",
    location: "Mendoza",
    imagePath: "/images/projects/Simplot/simplot.jpeg",
    description:
      "Fuimos parte de a la puesta en marcha de una significativa planta dedicada a la producción de papas congeladas precocinadas. La misma es completamente automatizada y cuenta con dos transelevadores que almacenan los productos de manera ágil y eficiente manteniendolos a -21°C. Esto la convierte en una de las plantas más innovadoras de la provincia de Mendoza representando un gran desafío para los ingenieros encargados de su instalación, en la que se utilizaron 12500 m2 de panel Megacold. Almacen de congelados inteligente para baja temperatura. Panel Megacold de 180 mm y 150 mm.",
    relatedProducts: [7],
  },
];
