export interface CityData {
  slug: string;
  name: string;
  county: string;
  state: string;
  population: string;
  description: string;
  descriptionEs: string;
  localDetail: string;
  localDetailEs: string;
  nearbyCity: string;
  nearbyCityEs: string;
  landmark: string;
  landmarkEs: string;
}

export const cities: CityData[] = [
  {
    slug: "atlanta",
    name: "Atlanta",
    county: "Fulton & DeKalb County",
    state: "GA",
    population: "500,000+",
    description: "Atlanta's urban canopy, heavy rainfall, and high humidity make exterior cleaning a necessity for homeowners and businesses alike. From Buckhead estates to Midtown condos, we keep Atlanta looking its best.",
    descriptionEs: "El dosel urbano de Atlanta, las lluvias frecuentes y la alta humedad hacen que la limpieza exterior sea una necesidad para propietarios y negocios. Desde las mansiones de Buckhead hasta los condominios de Midtown, mantenemos Atlanta en su mejor estado.",
    localDetail: "From Grant Park bungalows to Sandy Springs estates, Atlanta's diverse housing stock faces constant challenges from pollen, humidity, and Georgia clay. Our team knows every neighborhood.",
    localDetailEs: "Desde los bungalows de Grant Park hasta las mansiones de Sandy Springs, las casas de Atlanta enfrentan desafíos constantes del polen, la humedad y la arcilla de Georgia.",
    nearbyCity: "Lawrenceville & Decatur",
    nearbyCityEs: "Lawrenceville y Decatur",
    landmark: "Buckhead, Midtown, Inman Park",
    landmarkEs: "Buckhead, Midtown, Inman Park",
  },
  {
    slug: "lawrenceville",
    name: "Lawrenceville",
    county: "Gwinnett County",
    state: "GA",
    population: "30,000+",
    description: "As Gwinnett County's seat, Lawrenceville is home to beautiful subdivisions and growing commercial areas. We're your local pressure washing experts — based right here in Lawrenceville.",
    descriptionEs: "Como sede del Condado de Gwinnett, Lawrenceville alberga hermosas subdivisiones y áreas comerciales en crecimiento. Somos tus expertos locales en lavado a presión, con base aquí mismo en Lawrenceville.",
    localDetail: "Lawrenceville neighborhoods like Sugarloaf Country Club, Hamilton Mill, and Flowers Crossing trust Altitude Service Solutions for their exterior cleaning needs. We're your neighbors.",
    localDetailEs: "Los vecindarios de Lawrenceville como Sugarloaf Country Club, Hamilton Mill y Flowers Crossing confían en Altitude Service Solutions para sus necesidades de limpieza exterior. Somos tus vecinos.",
    nearbyCity: "Duluth & Buford",
    nearbyCityEs: "Duluth y Buford",
    landmark: "Sugarloaf Pkwy, Hwy 316",
    landmarkEs: "Sugarloaf Pkwy, Hwy 316",
  },
  {
    slug: "duluth",
    name: "Duluth",
    county: "Gwinnett County",
    state: "GA",
    population: "28,000+",
    description: "Duluth's upscale neighborhoods and thriving business district demand the best in exterior maintenance. Our pressure washing and soft washing services keep Duluth properties looking like new.",
    descriptionEs: "Los elegantes vecindarios de Duluth y su próspero distrito comercial exigen lo mejor en mantenimiento exterior. Nuestros servicios mantienen las propiedades de Duluth luciendo como nuevas.",
    localDetail: "From the prestigious communities near Sugarloaf Country Club to the commercial corridors along Pleasant Hill Road, Duluth properties benefit from regular exterior cleaning in Georgia's climate.",
    localDetailEs: "Desde las prestigiosas comunidades cerca de Sugarloaf Country Club hasta los corredores comerciales a lo largo de Pleasant Hill Road, las propiedades de Duluth se benefician de la limpieza exterior regular.",
    nearbyCity: "Norcross & Lawrenceville",
    nearbyCityEs: "Norcross y Lawrenceville",
    landmark: "Sugarloaf Country Club, Pleasant Hill Rd",
    landmarkEs: "Sugarloaf Country Club, Pleasant Hill Rd",
  },
  {
    slug: "norcross",
    name: "Norcross",
    county: "Gwinnett County",
    state: "GA",
    population: "16,000+",
    description: "Norcross blends historic charm with modern growth. Our exterior cleaning services serve Norcross homeowners and businesses throughout this vibrant Gwinnett community.",
    descriptionEs: "Norcross combina el encanto histórico con el crecimiento moderno. Nuestros servicios de limpieza exterior sirven a propietarios y negocios de Norcross en toda esta vibrante comunidad de Gwinnett.",
    localDetail: "Norcross's historic district and newer residential developments both benefit from regular soft washing and pressure washing to combat Georgia's humidity and pollen.",
    localDetailEs: "El distrito histórico de Norcross y los nuevos desarrollos residenciales se benefician del lavado regular para combatir la humedad y el polen de Georgia.",
    nearbyCity: "Duluth & Peachtree Corners",
    nearbyCityEs: "Duluth y Peachtree Corners",
    landmark: "Historic Downtown Norcross, I-85",
    landmarkEs: "Centro Histórico de Norcross, I-85",
  },
  {
    slug: "buford",
    name: "Buford",
    county: "Gwinnett & Hall County",
    state: "GA",
    population: "16,000+",
    description: "Buford's rapid growth and beautiful Lake Lanier area properties make exterior maintenance essential. We serve Buford's residential and commercial properties with professional pressure washing and soft washing.",
    descriptionEs: "El rápido crecimiento de Buford y las hermosas propiedades del área del lago Lanier hacen que el mantenimiento exterior sea esencial. Servimos a las propiedades residenciales y comerciales de Buford.",
    localDetail: "Lake Lanier's proximity means Buford homes face extra challenges from moisture and algae. Our soft washing service is especially effective at eliminating lake-area biological growth.",
    localDetailEs: "La proximidad al lago Lanier significa que las casas de Buford enfrentan desafíos adicionales de humedad y algas. Nuestro servicio de soft washing es especialmente efectivo para eliminar el crecimiento biológico del área del lago.",
    nearbyCity: "Suwanee & Gainesville",
    nearbyCityEs: "Suwanee y Gainesville",
    landmark: "Lake Lanier, Mall of Georgia",
    landmarkEs: "Lago Lanier, Mall of Georgia",
  },
  {
    slug: "suwanee",
    name: "Suwanee",
    county: "Gwinnett County",
    state: "GA",
    population: "20,000+",
    description: "Consistently ranked among the best places to live in Georgia, Suwanee homeowners take pride in their properties. Our exterior cleaning services help Suwanee homes maintain their award-winning appearance.",
    descriptionEs: "Constantemente clasificada entre los mejores lugares para vivir en Georgia, los propietarios de Suwanee se enorgullecen de sus propiedades. Nuestros servicios de limpieza exterior ayudan a mantener la apariencia de primer nivel de las casas de Suwanee.",
    localDetail: "Suwanee's highly-rated neighborhoods like Olde Atlanta Club, Roberts' Landing, and Seven Seas trust Altitude Service Solutions to maintain their homes' pristine appearance.",
    localDetailEs: "Los vecindarios de alto nivel de Suwanee como Olde Atlanta Club, Roberts' Landing y Seven Seas confían en Altitude Service Solutions para mantener la apariencia impecable de sus hogares.",
    nearbyCity: "Duluth & Buford",
    nearbyCityEs: "Duluth y Buford",
    landmark: "Suwanee Town Center, Olde Atlanta Club",
    landmarkEs: "Suwanee Town Center, Olde Atlanta Club",
  },
];

export function getCity(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
