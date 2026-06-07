export interface ServiceData {
  slug: string;
  name: string;
  nameEs: string;
  photo: string;
  photoPosition: string;
  tagline: string;
  taglineEs: string;
  description: string;
  descriptionEs: string;
  benefits: string[];
  benefitsEs: string[];
  surfaces: string[];
  surfacesEs: string[];
  faqs: { q: string; a: string }[];
  faqsEs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    nameEs: "Lavado a Presión",
    photo: "/svc_pressure_washing.jpg",
    photoPosition: "center 60%",
    tagline: "High-Powered Cleaning for Driveways, Patios & Concrete",
    taglineEs: "Limpieza de Alta Potencia para Entradas, Patios y Concreto",
    description: "Our professional pressure washing service blasts away years of dirt, grime, oil stains, and biological growth from driveways, patios, sidewalks, and concrete surfaces — restoring them to like-new condition.",
    descriptionEs: "Nuestro servicio profesional de lavado a presión elimina años de suciedad, mugre, manchas de aceite y crecimiento biológico de entradas, patios, aceras y superficies de concreto, restaurándolas a su estado original.",
    benefits: [
      "Removes oil, grease, and tire marks from driveways",
      "Eliminates slippery algae and mold from walkways",
      "Restores concrete and brick to original color",
      "Increases curb appeal and property value",
      "Prevents long-term surface damage",
      "Commercial-grade equipment, professional results",
    ],
    benefitsEs: [
      "Elimina aceite, grasa y marcas de neumáticos de las entradas",
      "Elimina algas y moho resbaladizos de las aceras",
      "Restaura el concreto y el ladrillo a su color original",
      "Aumenta el atractivo visual y el valor de la propiedad",
      "Previene daños a largo plazo en las superficies",
      "Equipo profesional, resultados garantizados",
    ],
    surfaces: ["Driveways", "Patios & Decks", "Sidewalks", "Pool Decks", "Parking Lots", "Concrete Surfaces"],
    surfacesEs: ["Entradas", "Patios y Decks", "Aceras", "Decks de Piscina", "Estacionamientos", "Superficies de Concreto"],
    faqs: [
      { q: "How often should I pressure wash my driveway?", a: "We recommend pressure washing driveways once a year, or every 6 months in areas with heavy tree coverage or high traffic." },
      { q: "Can pressure washing damage my concrete?", a: "In the hands of professionals, pressure washing is completely safe. We use the correct PSI and techniques for each surface type." },
      { q: "How long does a pressure washing job take?", a: "A typical driveway takes 1–2 hours. Patios, pool decks, and larger areas may take 3–4 hours depending on size and condition." },
      { q: "Do I need to be home during the service?", a: "No — we just need access to an outdoor water spigot. We'll send before & after photos and notify you when the job is complete." },
    ],
    faqsEs: [
      { q: "¿Con qué frecuencia debo lavar la entrada a presión?", a: "Recomendamos lavar la entrada una vez al año, o cada 6 meses si hay mucho tráfico o cobertura de árboles." },
      { q: "¿El lavado a presión puede dañar el concreto?", a: "En manos de profesionales es completamente seguro. Usamos el PSI y técnicas adecuadas para cada tipo de superficie." },
      { q: "¿Cuánto tiempo tarda el servicio?", a: "Una entrada típica tarda 1–2 horas. Patios y áreas más grandes pueden tardar 3–4 horas según el tamaño y estado." },
      { q: "¿Necesito estar en casa?", a: "No — solo necesitamos acceso a un grifo exterior. Le enviaremos fotos de antes y después al terminar." },
    ],
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    nameEs: "Soft Washing",
    photo: "/svc_soft_washing.jpg",
    photoPosition: "center 50%",
    tagline: "The Safe Alternative for Roofs, Siding & Delicate Surfaces",
    taglineEs: "La Alternativa Segura para Techos, Revestimientos y Superficies Delicadas",
    description: "Soft washing uses low pressure and professional-grade biodegradable solutions to safely clean and sanitize roofs, siding, stucco, brick, and other delicate surfaces — killing mold and algae at the root without causing damage.",
    descriptionEs: "El soft washing utiliza baja presión y soluciones biodegradables de grado profesional para limpiar y desinfectar de forma segura techos, revestimientos, estuco, ladrillo y otras superficies delicadas, eliminando el moho y las algas desde la raíz sin causar daños.",
    benefits: [
      "Safe for all roofing materials — won't void warranties",
      "Kills algae, mold, and mildew at the root",
      "Longer-lasting results than pressure washing alone",
      "Biodegradable, eco-friendly cleaning solutions",
      "Safe for siding, stucco, brick, and wood",
      "Prevents regrowth for up to 18–24 months",
    ],
    benefitsEs: [
      "Seguro para todos los materiales de techo, no anula garantías",
      "Elimina algas, moho y hongos desde la raíz",
      "Resultados más duraderos que el lavado a presión solo",
      "Soluciones de limpieza biodegradables y eco-amigables",
      "Seguro para revestimientos, estuco, ladrillo y madera",
      "Previene el recrecimiento por hasta 18–24 meses",
    ],
    surfaces: ["Roof Shingles", "Vinyl Siding", "Stucco", "Brick Walls", "Wood Siding", "EIFS / Dryvit"],
    surfacesEs: ["Tejas de Techo", "Revestimiento de Vinilo", "Estuco", "Paredes de Ladrillo", "Revestimiento de Madera", "EIFS / Dryvit"],
    faqs: [
      { q: "What is the difference between soft washing and pressure washing?", a: "Soft washing uses low pressure (like a garden hose) combined with professional cleaning solutions to kill and remove organic growth. Pressure washing uses high-pressure water for hard surfaces like concrete." },
      { q: "Is soft washing safe for my roof?", a: "Yes — soft washing is actually the industry-recommended method for roof cleaning. High-pressure washing can crack or displace shingles and void manufacturer warranties. Soft washing is gentle and effective." },
      { q: "How long do soft washing results last?", a: "Soft washing kills organic growth at the root, so results typically last 18–24 months, compared to just a few months with pressure washing alone." },
      { q: "Will the cleaning solutions harm my plants or lawn?", a: "We use biodegradable, plant-safe solutions and pre-wet your landscaping before and after treatment to neutralize any runoff. Your plants are safe with us." },
    ],
    faqsEs: [
      { q: "¿Cuál es la diferencia entre soft washing y lavado a presión?", a: "El soft washing usa baja presión combinada con soluciones de limpieza profesionales para eliminar el crecimiento orgánico. El lavado a presión usa agua a alta presión para superficies duras como el concreto." },
      { q: "¿Es el soft washing seguro para mi techo?", a: "Sí, es el método recomendado por la industria. El lavado a alta presión puede dañar las tejas y anular las garantías. El soft washing es suave y efectivo." },
      { q: "¿Cuánto duran los resultados del soft washing?", a: "El soft washing elimina el crecimiento orgánico desde la raíz, por lo que los resultados duran típicamente 18–24 meses." },
      { q: "¿Las soluciones de limpieza dañarán mis plantas?", a: "Usamos soluciones biodegradables y pre-mojamos su jardín antes y después del tratamiento para neutralizar cualquier escurrimiento. Sus plantas están seguras." },
    ],
  },
  {
    slug: "house-washing",
    name: "House Washing",
    nameEs: "Lavado Exterior de Casa",
    photo: "/svc_house_washing.jpg",
    photoPosition: "50% 100%",
    tagline: "Complete Exterior Cleaning from Top to Bottom",
    taglineEs: "Limpieza Exterior Completa de Arriba a Abajo",
    description: "Our whole-house washing service delivers a complete exterior cleaning covering siding, eaves, trim, fascia, and all exterior surfaces. We use soft washing techniques to safely restore your home's curb appeal without risking damage.",
    descriptionEs: "Nuestro servicio de lavado completo de casa ofrece una limpieza exterior que cubre el revestimiento, los aleros, las molduras, la fascia y todas las superficies exteriores. Usamos técnicas de soft washing para restaurar el atractivo de su hogar de forma segura.",
    benefits: [
      "Complete exterior coverage — no surface missed",
      "Removes years of dirt, pollen, algae, and mold",
      "Safe for vinyl, wood, brick, and stucco siding",
      "Dramatically improves curb appeal instantly",
      "Protects paint and siding from premature aging",
      "Ideal before painting, selling, or listing",
    ],
    benefitsEs: [
      "Cobertura exterior completa, ninguna superficie omitida",
      "Elimina años de suciedad, polen, algas y moho",
      "Seguro para revestimientos de vinilo, madera, ladrillo y estuco",
      "Mejora dramáticamente el atractivo visual de inmediato",
      "Protege la pintura y el revestimiento del envejecimiento prematuro",
      "Ideal antes de pintar, vender o poner en el mercado",
    ],
    surfaces: ["Vinyl Siding", "Brick Exterior", "Stucco", "Wood Siding", "Eaves & Soffits", "Fascia & Trim"],
    surfacesEs: ["Revestimiento de Vinilo", "Exterior de Ladrillo", "Estuco", "Revestimiento de Madera", "Aleros y Soffits", "Fascia y Molduras"],
    faqs: [
      { q: "How often should I wash the exterior of my house?", a: "We recommend a full house wash once a year in Georgia due to the heavy pollen seasons, humidity, and biological growth that accumulates on all exterior surfaces." },
      { q: "Will house washing damage my paint or siding?", a: "No — we use soft washing techniques specifically designed to be safe on all exterior surfaces. We adjust pressure and solution strength based on your home's materials." },
      { q: "Can I get my house washed before putting it on the market?", a: "Absolutely — a clean exterior is one of the highest-ROI improvements you can make before listing. Many realtors recommend it as a first step." },
      { q: "How long does a whole house wash take?", a: "Most homes take 2–4 hours depending on size. Larger homes or those with significant buildup may take longer. We'll give you a time estimate with your quote." },
    ],
    faqsEs: [
      { q: "¿Con qué frecuencia debo lavar el exterior de mi casa?", a: "Recomendamos un lavado completo una vez al año en Georgia debido a las fuertes temporadas de polen, la humedad y el crecimiento biológico que se acumula en todas las superficies exteriores." },
      { q: "¿El lavado dañará mi pintura o revestimiento?", a: "No, usamos técnicas de soft washing diseñadas específicamente para ser seguras en todas las superficies exteriores. Ajustamos la presión según los materiales de su hogar." },
      { q: "¿Puedo lavar la casa antes de ponerla en venta?", a: "Por supuesto, una fachada limpia es una de las mejoras con mayor retorno de inversión antes de listar. Muchos agentes inmobiliarios lo recomiendan como primer paso." },
      { q: "¿Cuánto tiempo tarda el lavado completo?", a: "La mayoría de las casas tarda 2–4 horas según el tamaño. Le daremos un estimado de tiempo con su cotización." },
    ],
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    nameEs: "Limpieza de Techo",
    photo: "/svc_roof_cleaning.jpg",
    photoPosition: "center 40%",
    tagline: "Remove Black Streaks, Moss & Algae — Without Voiding Your Warranty",
    taglineEs: "Elimina Rayas Negras, Musgo y Algas — Sin Anular Tu Garantía",
    description: "Those black streaks on your roof are Gloeocapsa Magma — a bacteria that eats away at shingles and reduces your roof's lifespan. Our professional soft wash roof cleaning removes them safely, restoring your roof's appearance and extending its life.",
    descriptionEs: "Esas rayas negras en su techo son Gloeocapsa Magma, una bacteria que destruye las tejas y reduce la vida útil de su techo. Nuestra limpieza profesional de techo las elimina de forma segura, restaurando la apariencia de su techo y extendiendo su vida útil.",
    benefits: [
      "Removes black streaks, moss, lichen, and algae",
      "Soft wash method — safe for all shingle types",
      "Won't void your roofing manufacturer warranty",
      "Extends roof lifespan by years",
      "ARMA-recommended cleaning method",
      "Results last 2–3 years with our treatment",
    ],
    benefitsEs: [
      "Elimina rayas negras, musgo, liquen y algas",
      "Método soft wash, seguro para todos los tipos de tejas",
      "No anula la garantía del fabricante de su techo",
      "Extiende la vida útil del techo por años",
      "Método de limpieza recomendado por ARMA",
      "Los resultados duran 2–3 años con nuestro tratamiento",
    ],
    surfaces: ["Asphalt Shingles", "Metal Roofs", "Tile Roofs", "Wood Shake", "Flat Roofs", "Gutters & Fascia"],
    surfacesEs: ["Tejas de Asfalto", "Techos de Metal", "Techos de Teja", "Madera Shake", "Techos Planos", "Canaletas y Fascia"],
    faqs: [
      { q: "What causes black streaks on my roof?", a: "Black streaks are caused by Gloeocapsa Magma, an airborne algae that feeds on the limestone filler in asphalt shingles. It spreads across your roof and causes premature aging if left untreated." },
      { q: "Is roof cleaning safe for my shingles?", a: "Yes — when done correctly using the soft wash method. We never use high-pressure washing on roofs, which can crack shingles and void warranties. Our method is endorsed by the Asphalt Roofing Manufacturers Association (ARMA)." },
      { q: "Will roof cleaning prevent regrowth?", a: "Our treatment includes a protective solution that inhibits regrowth. Results typically last 2–3 years depending on your roof's exposure to shade and moisture." },
      { q: "How do I know if my roof needs cleaning?", a: "Dark streaks, black patches, green moss, or white lichen are all signs that your roof needs professional cleaning. Ignoring these can reduce your roof's lifespan by 5–10 years." },
    ],
    faqsEs: [
      { q: "¿Qué causa las rayas negras en mi techo?", a: "Las rayas negras son causadas por Gloeocapsa Magma, un alga aérea que se alimenta del relleno de caliza en las tejas de asfalto. Se extiende por el techo y causa envejecimiento prematuro si no se trata." },
      { q: "¿La limpieza del techo es segura para mis tejas?", a: "Sí, cuando se realiza correctamente con el método soft wash. Nunca usamos lavado a alta presión en techos, lo que puede dañar las tejas. Nuestro método está respaldado por la Asociación de Fabricantes de Techos de Asfalto (ARMA)." },
      { q: "¿La limpieza del techo prevendrá el recrecimiento?", a: "Nuestro tratamiento incluye una solución protectora que inhibe el recrecimiento. Los resultados duran típicamente 2–3 años dependiendo de la exposición a la sombra y la humedad." },
      { q: "¿Cómo sé si mi techo necesita limpieza?", a: "Las rayas oscuras, manchas negras, musgo verde o liquen blanco son señales de que su techo necesita limpieza profesional. Ignorarlos puede reducir la vida útil del techo en 5–10 años." },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    nameEs: "Limpieza de Canaletas",
    photo: "/svc_gutter_cleaning.jpg",
    photoPosition: "center 50%",
    tagline: "Protect Your Foundation — Keep Gutters Clear Year-Round",
    taglineEs: "Protege tu Fundación — Mantén las Canaletas Limpias Todo el Año",
    description: "Clogged gutters lead to water damage, foundation problems, and pest infestations. Our professional gutter cleaning service removes all debris, flushes downspouts, and leaves your drainage system flowing freely — protecting your biggest investment.",
    descriptionEs: "Las canaletas tapadas llevan a daños por agua, problemas de cimentación e infestaciones de plagas. Nuestro servicio profesional de limpieza de canaletas elimina todos los escombros, limpia los bajantes y deja su sistema de drenaje funcionando libremente.",
    benefits: [
      "Prevents water damage to fascia and foundation",
      "Full debris removal and downspout flushing",
      "Eliminates pest nesting conditions",
      "Protects landscaping from overflow erosion",
      "Extends gutter lifespan significantly",
      "Before & after photos provided with every job",
    ],
    benefitsEs: [
      "Previene daños por agua a la fascia y la cimentación",
      "Eliminación completa de escombros y limpieza de bajantes",
      "Elimina las condiciones de anidación de plagas",
      "Protege el jardín de la erosión por desbordamiento",
      "Extiende significativamente la vida útil de las canaletas",
      "Fotos de antes y después incluidas en cada trabajo",
    ],
    surfaces: ["Gutters", "Downspouts", "Gutter Guards", "Fascia Boards", "Soffit Vents", "Splash Blocks"],
    surfacesEs: ["Canaletas", "Bajantes", "Protectores de Canaleta", "Tablas de Fascia", "Ventilaciones de Soffit", "Bloques de Salpicadura"],
    faqs: [
      { q: "How often should I clean my gutters?", a: "In Georgia, we recommend twice a year — once in late spring after pollen season and once in late fall after the leaves have dropped. Homes with many trees may need quarterly cleaning." },
      { q: "What happens if I don't clean my gutters?", a: "Clogged gutters can cause water to overflow and damage your fascia, foundation, and landscaping. They also create ideal nesting conditions for birds, mosquitoes, and other pests." },
      { q: "Do you clean gutter guards?", a: "Yes — we clean gutters with and without gutter guards. We'll remove guards if needed, clean the gutters, and reinstall them properly." },
      { q: "How do I know my gutters are clogged?", a: "Signs include water overflowing during rain, sagging gutters, plant growth inside gutters, or water stains on your siding. If you haven't cleaned them in over a year, they likely need it." },
    ],
    faqsEs: [
      { q: "¿Con qué frecuencia debo limpiar mis canaletas?", a: "En Georgia, recomendamos dos veces al año: una a finales de primavera después de la temporada de polen y otra a finales de otoño después de que caigan las hojas. Las casas con muchos árboles pueden necesitar limpieza trimestral." },
      { q: "¿Qué pasa si no limpio mis canaletas?", a: "Las canaletas tapadas pueden causar desbordamiento de agua y dañar la fascia, la cimentación y el jardín. También crean condiciones ideales para pájaros, mosquitos y otras plagas." },
      { q: "¿Limpian las canaletas con protectores?", a: "Sí, limpiamos canaletas con y sin protectores. Retiraremos los protectores si es necesario, limpiaremos las canaletas y los reinstalaremos correctamente." },
      { q: "¿Cómo sé si mis canaletas están tapadas?", a: "Las señales incluyen agua desbordándose durante la lluvia, canaletas hundidas, crecimiento de plantas dentro de las canaletas o manchas de agua en el revestimiento." },
    ],
  },
  {
    slug: "fence-deck-cleaning",
    name: "Fence & Deck Cleaning",
    nameEs: "Limpieza de Cercas y Decks",
    photo: "/svc_fence_deck.jpg",
    photoPosition: "50% 100%",
    tagline: "Restore & Protect Your Outdoor Living Spaces",
    taglineEs: "Restaura y Protege tus Espacios al Aire Libre",
    description: "Decks and fences take a beating from Georgia's weather — UV exposure, humidity, mold, and mildew all cause rapid deterioration. Our wood and composite surface cleaning restores color, removes biological growth, and prepares surfaces for sealing or staining.",
    descriptionEs: "Los decks y cercas sufren el impacto del clima de Georgia: exposición UV, humedad, moho y hongos causan deterioro rápido. Nuestra limpieza de superficies de madera y composite restaura el color, elimina el crecimiento biológico y prepara las superficies para sellado o tintura.",
    benefits: [
      "Removes green algae, mold, and mildew from wood",
      "Restores natural wood color and grain",
      "Safe for wood, composite, and vinyl surfaces",
      "Prepares surface for staining or sealing",
      "Prevents rot and premature structural failure",
      "Dramatically extends deck and fence lifespan",
    ],
    benefitsEs: [
      "Elimina algas verdes, moho y hongos de la madera",
      "Restaura el color natural y la veta de la madera",
      "Seguro para superficies de madera, composite y vinilo",
      "Prepara la superficie para tintura o sellado",
      "Previene la podredumbre y el deterioro estructural prematuro",
      "Extiende dramáticamente la vida útil del deck y la cerca",
    ],
    surfaces: ["Wood Decks", "Composite Decks", "Wood Fences", "Vinyl Fences", "Pergolas", "Outdoor Furniture"],
    surfacesEs: ["Decks de Madera", "Decks de Composite", "Cercas de Madera", "Cercas de Vinilo", "Pérgolas", "Muebles de Exterior"],
    faqs: [
      { q: "Can you clean both wood and composite decks?", a: "Yes — we have specialized equipment and solutions for both wood and composite decking materials. We adjust our technique based on the material to ensure no damage occurs." },
      { q: "Should I clean my deck before staining or sealing?", a: "Absolutely — cleaning is essential before any staining or sealing project. Applying stain or sealer over dirty, moldy wood results in poor adhesion and a shorter lifespan for your finish." },
      { q: "How often should I clean my deck?", a: "We recommend cleaning wood decks annually and resealing every 2–3 years. Composite decks typically need cleaning once a year to maintain their appearance." },
      { q: "Will pressure washing damage my wood deck?", a: "Improper pressure washing can raise wood grain and cause damage. We use low-pressure soft washing techniques combined with wood-safe solutions that clean thoroughly without harming the wood fibers." },
    ],
    faqsEs: [
      { q: "¿Pueden limpiar decks de madera y composite?", a: "Sí, tenemos equipos y soluciones especializadas para materiales de madera y composite. Ajustamos nuestra técnica según el material para garantizar que no ocurra ningún daño." },
      { q: "¿Debo limpiar mi deck antes de teñirlo o sellarlo?", a: "Absolutamente. La limpieza es esencial antes de cualquier proyecto de tintura o sellado. Aplicar sellador sobre madera sucia o con moho resulta en mala adhesión y una vida útil más corta para el acabado." },
      { q: "¿Con qué frecuencia debo limpiar mi deck?", a: "Recomendamos limpiar los decks de madera anualmente y volver a sellarlos cada 2–3 años. Los decks de composite generalmente necesitan limpieza una vez al año." },
      { q: "¿El lavado a presión dañará mi deck de madera?", a: "El lavado a presión incorrecto puede levantar la veta de la madera y causar daños. Usamos técnicas de baja presión combinadas con soluciones seguras para madera que limpian a fondo sin dañar las fibras de la madera." },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
