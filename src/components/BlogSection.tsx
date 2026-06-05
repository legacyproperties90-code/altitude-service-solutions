import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = {
  en: [
    { tag: "Maintenance Tips", title: "How Often Should You Pressure Wash Your Home in Atlanta?", excerpt: "Atlanta's humid climate makes exterior cleaning a year-round necessity. Learn the recommended frequency for each surface type.", readTime: "4 min read", img: "/foto10.jpg", imgPos: "50% 100%" },
    { tag: "Soft Wash vs Pressure", title: "Soft Wash vs Pressure Wash: Which Is Right for Your Home?", excerpt: "Not all surfaces are equal. Discover when to use soft washing vs. pressure washing and why the wrong method can damage your property.", readTime: "5 min read", img: "/svc_soft_washing.jpg", imgPos: "75% 50%" },
    { tag: "Commercial", title: "Why Regular Parking Lot Cleaning Boosts Your Business Value", excerpt: "First impressions count. A clean parking deck and building exterior directly impacts customer perception and property value in Atlanta.", readTime: "3 min read", img: "/foto2.jpg", imgPos: "center 40%" },
  ],
  es: [
    { tag: "Mantenimiento", title: "¿Con Qué Frecuencia Lavar a Presión tu Casa en Atlanta?", excerpt: "El clima húmedo de Atlanta hace que la limpieza exterior sea necesaria todo el año. Aprende la frecuencia recomendada para cada superficie.", readTime: "4 min lectura", img: "/foto10.jpg", imgPos: "50% 100%" },
    { tag: "Soft Wash vs Presión", title: "Soft Wash vs Lavado a Presión: ¿Cuál Es el Correcto?", excerpt: "No todas las superficies son iguales. Descubre cuándo usar cada método y por qué elegir el incorrecto puede dañar tu propiedad.", readTime: "5 min lectura", img: "/svc_soft_washing.jpg", imgPos: "75% 50%" },
    { tag: "Comercial", title: "Por Qué la Limpieza Regular Aumenta el Valor de tu Negocio", excerpt: "La primera impresión cuenta. Un estacionamiento limpio impacta la percepción del cliente y el valor de tu propiedad en Atlanta.", readTime: "3 min lectura", img: "/foto2.jpg", imgPos: "center 40%" },
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
            <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">{isEs ? "Blog & Consejos" : "Blog & Tips"}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              {isEs ? "Aprende Sobre " : "Learn About "}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                {isEs ? "Limpieza Exterior" : "Exterior Cleaning"}
              </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((post, i) => (
            <article key={i} className="card-glow group bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.img} alt={post.title} fill unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: post.imgPos }}
                  sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-blue-700/85 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Tag size={11} className="text-white/70" />
                  <span className="text-white text-xs font-semibold">{post.tag}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-blue-700 transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs"><Clock size={13} />{post.readTime}</div>
                  <span className="text-blue-700 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isEs ? "Leer más" : "Read more"} <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
