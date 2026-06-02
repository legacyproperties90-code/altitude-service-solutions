import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = {
  en: [
    {
      tag: "Maintenance Tips",
      title: "How Often Should You Pressure Wash Your Home in Atlanta?",
      excerpt: "Atlanta's humid climate makes exterior cleaning a year-round necessity. Learn the recommended frequency for each surface type and why timing matters.",
      readTime: "4 min read",
      bg: "from-blue-800 to-blue-600",
    },
    {
      tag: "Soft Wash vs Pressure Wash",
      title: "Soft Wash vs Pressure Wash: Which Is Right for Your Georgia Home?",
      excerpt: "Not all exterior surfaces are created equal. Discover when to use soft washing vs. pressure washing and why choosing the wrong method can damage your property.",
      readTime: "5 min read",
      bg: "from-blue-700 to-sky-600",
    },
    {
      tag: "Commercial",
      title: "Why Regular Parking Lot Cleaning Boosts Your Business Value",
      excerpt: "First impressions count. Find out how a clean parking deck and building exterior directly impacts customer perception, safety, and property value in the Atlanta market.",
      readTime: "3 min read",
      bg: "from-blue-900 to-blue-700",
    },
  ],
  es: [
    {
      tag: "Mantenimiento",
      title: "¿Con Qué Frecuencia Debes Lavar a Presión tu Casa en Atlanta?",
      excerpt: "El clima húmedo de Atlanta hace que la limpieza exterior sea necesaria todo el año. Aprende la frecuencia recomendada para cada superficie y por qué el momento importa.",
      readTime: "4 min lectura",
      bg: "from-blue-800 to-blue-600",
    },
    {
      tag: "Soft Wash vs Presión",
      title: "Soft Wash vs Lavado a Presión: ¿Cuál Es el Correcto para tu Casa?",
      excerpt: "No todas las superficies exteriores son iguales. Descubre cuándo usar soft washing vs. lavado a presión y por qué elegir el método incorrecto puede dañar tu propiedad.",
      readTime: "5 min lectura",
      bg: "from-blue-700 to-sky-600",
    },
    {
      tag: "Comercial",
      title: "Por Qué la Limpieza Regular del Estacionamiento Aumenta el Valor de tu Negocio",
      excerpt: "La primera impresión cuenta. Descubre cómo un estacionamiento limpio impacta directamente la percepción del cliente, la seguridad y el valor de tu propiedad en Atlanta.",
      readTime: "3 min lectura",
      bg: "from-blue-900 to-blue-700",
    },
  ],
};

export default function BlogSection({ lang }: { lang: string }) {
  const isEs = lang === "es";
  const items = isEs ? posts.es : posts.en;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
              {isEs ? "Blog & Consejos" : "Blog & Tips"}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              {isEs ? "Aprende Sobre " : "Learn About "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                {isEs ? "Limpieza Exterior" : "Exterior Cleaning"}
              </span>
            </h2>
          </div>
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors shrink-0">
            {isEs ? "Ver todos los artículos" : "View all articles"} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((post, i) => (
            <article key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              {/* Colored header */}
              <div className={`bg-gradient-to-br ${post.bg} h-40 flex items-end p-5`}>
                <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <Tag size={11} className="text-white/70" />
                  <span className="text-white text-xs font-medium">{post.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Clock size={13} />
                    {post.readTime}
                  </div>
                  <span className="text-blue-600 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isEs ? "Leer más" : "Read more"} <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-2xl text-center">
          <p className="text-blue-700 text-sm font-medium">
            📝 {isEs
              ? "Artículos completos próximamente — ¡suscríbete para ser el primero en leerlos!"
              : "Full articles coming soon — subscribe to be the first to read them!"}
          </p>
        </div>
      </div>
    </section>
  );
}
