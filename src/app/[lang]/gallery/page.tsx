import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Upload } from "lucide-react";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return {
    title: d.meta.gallery.title,
    description: d.meta.gallery.description,
    alternates: {
      canonical: `https://altitudess.net/${lang}/gallery`,
      languages: { en: "https://altitudess.net/en/gallery", es: "https://altitudess.net/es/gallery" },
    },
  };
}

const photos = [
  { src: "/altura.png",  alt: "High-rise cleaning — Atlanta GA",               tag: { en: "High-Rise Cleaning",  es: "Limpieza en Altura" },     pos: "center 30%" },
  { src: "/foto4.jpg",   alt: "House siding transformation — Atlanta GA",       tag: { en: "House Washing",       es: "Lavado de Casa" },          pos: "50% 75%" },
  { src: "/foto1.jpg",   alt: "Driveway pressure washing — Atlanta GA",         tag: { en: "Pressure Washing",    es: "Lavado a Presión" },        pos: "50% 72%" },
  { src: "/foto3.jpg",   alt: "House soft washing — Lawrenceville GA",          tag: { en: "Soft Washing",        es: "Soft Washing" },            pos: "50% 75%" },
  { src: "/foto5.jpg",   alt: "Brick house cleaning — Atlanta GA",              tag: { en: "House Washing",       es: "Lavado de Casa" },          pos: "50% 75%" },
  { src: "/foto6.jpg",   alt: "Home exterior cleaning — Atlanta GA",            tag: { en: "Soft Washing",        es: "Soft Washing" },            pos: "50% 75%" },
  { src: "/foto2.jpg",   alt: "Commercial parking deck cleaning — Atlanta GA",  tag: { en: "Commercial",          es: "Comercial" },               pos: "center 40%" },
  { src: "/hero2.jpg",   alt: "House washing results — Lawrenceville GA",       tag: { en: "House Washing",       es: "Lavado de Casa" },          pos: "50% 78%" },
  { src: "/hero1.jpg",   alt: "Gutter cleaning — Atlanta GA",                   tag: { en: "Gutter Cleaning",     es: "Limpieza de Canaletas" },   pos: "70% 50%" },
];

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);
  const isEs = lang === "es";

  const cats = isEs
    ? ["Todos", "Lavado de Casa", "Canaletas", "Techos", "Comercial"]
    : ["All", "House Washing", "Gutters", "Roofing", "Commercial"];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">{d.gallery.badge}</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">{d.gallery.title}</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">{d.gallery.desc}</p>
        </div>
      </section>

      {/* Category tabs */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {cats.map((c, i) => (
              <button key={c}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  i === 0
                    ? "bg-blue-700 text-white shadow-md shadow-blue-700/20"
                    : "bg-gray-100 text-gray-600 hover:bg-sky-50 hover:text-sky-700 border border-gray-200"
                }`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photos grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Real photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {photos.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-video shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: p.pos }}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-700/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {isEs ? p.tag.es : p.tag.en}
                  </span>
                </div>
                {/* Location on hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <p className="text-white font-semibold text-sm">Altitude Service Solutions</p>
                  <p className="text-gray-300 text-xs">Atlanta, GA</p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder grid for more photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i}
                className="aspect-square bg-white border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-sky-300 hover:bg-sky-50 transition-all">
                <Upload size={22} className="text-gray-300" />
                <p className="text-gray-300 text-xs text-center font-medium px-3">
                  {isEs ? "Foto próximamente" : "Photo coming soon"}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-black text-white mb-2">
              {isEs ? "¿Quieres ver más resultados?" : "Want to See More Results?"}
            </h3>
            <p className="text-blue-200 text-lg mb-7 max-w-xl mx-auto">
              {isEs
                ? "Llámanos o solicita una cotización. Podemos visitar tu propiedad y mostrarte exactamente qué podemos hacer."
                : "Give us a call or request a quote. We can visit your property and show you exactly what we can do."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-800 font-bold hover:bg-blue-50 transition-all">
                {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={18} />
              </Link>
              <a href="tel:+16787395229"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-all">
                (678) 739-5229
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
