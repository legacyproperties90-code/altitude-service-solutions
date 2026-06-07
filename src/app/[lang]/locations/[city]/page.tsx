import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, CheckCircle, ArrowRight, Shield, Star, Droplets, Wind, Home, Leaf, Eye, Building2 } from "lucide-react";
import { getCity, cities } from "@/lib/cities";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}): Promise<Metadata> {
  const { lang, city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};

  const isEs = lang === "es";
  const title = isEs
    ? `Lavado a Presión en ${city.name}, GA`
    : `Pressure Washing in ${city.name}, GA`;
  const description = isEs
    ? `Servicios profesionales de lavado a presión y soft washing en ${city.name}, Georgia. Totalmente asegurados, licenciados y con 100% de satisfacción garantizada. ¡Cotización gratis!`
    : `Professional pressure washing & soft washing services in ${city.name}, Georgia. Fully insured, licensed, and 100% satisfaction guaranteed. Free quotes!`;

  const baseUrl = "https://altitudess.net";
  const canonical = `${baseUrl}/${lang}/locations/${citySlug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/locations/${citySlug}`,
        es: `${baseUrl}/es/locations/${citySlug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: `${baseUrl}/altura.png`, width: 1200, height: 630, alt: title }],
    },
  };
}

const services = {
  en: [
    { icon: Droplets, title: "Soft Washing", desc: "Safe for siding, brick, stucco, and roof shingles. Kills algae and mold at the root." },
    { icon: Wind,     title: "Pressure Washing", desc: "Driveways, patios, sidewalks, pool decks, and concrete surfaces." },
    { icon: Home,     title: "House Washing", desc: "Complete exterior wash — siding, eaves, trim, and fascia." },
    { icon: Leaf,     title: "Roof Cleaning", desc: "Safe soft wash removes black streaks, moss, and algae without voiding warranties." },
    { icon: Eye,      title: "Gutter Cleaning", desc: "Debris removal, downspout flushing, and gutter brightening." },
    { icon: Building2,title: "Commercial Services", desc: "Storefronts, parking decks, and commercial buildings." },
  ],
  es: [
    { icon: Droplets, title: "Soft Washing", desc: "Seguro para revestimientos, ladrillo, estuco y tejas. Elimina algas y moho desde la raíz." },
    { icon: Wind,     title: "Lavado a Presión", desc: "Entradas, patios, aceras, decks de piscina y superficies de concreto." },
    { icon: Home,     title: "Lavado de Casa", desc: "Lavado exterior completo — revestimiento, aleros, molduras y fascia." },
    { icon: Leaf,     title: "Limpieza de Techo", desc: "Soft wash elimina rayas negras, musgo y algas sin anular garantías." },
    { icon: Eye,      title: "Limpieza de Canaletas", desc: "Remoción de escombros, limpieza de bajantes y brillo de canaletas." },
    { icon: Building2,title: "Servicios Comerciales", desc: "Fachadas, estacionamientos y edificios comerciales." },
  ],
};

export default async function CityPage({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}) {
  const { lang, city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const isEs = lang === "es";
  const svcs = isEs ? services.es : services.en;
  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://altitudess.net",
    name: "Altitude Service Solutions",
    url: "https://altitudess.net",
    telephone: "+16787395229",
    areaServed: { "@type": "City", name: city.name, addressRegion: "GA" },
    description: isEs ? city.descriptionEs : city.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "GA",
      addressCountry: "US",
    },
    priceRange: "$$",
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image src="/altura.png" alt={`Pressure washing ${city.name} GA`} fill unoptimized priority
          className="object-cover" style={{ objectPosition: "center 25%" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/92 via-blue-900/75 to-blue-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 mb-5">
              <MapPin size={12} className="text-sky-300" />
              <span className="text-sky-300 font-semibold text-xs tracking-widest uppercase">
                {city.name}, {city.state}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              {isEs ? "Lavado a Presión" : "Pressure Washing"}{" "}
              <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
                {city.name}, GA
              </span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              {isEs ? city.descriptionEs : city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${lang}/contact#quote-form`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-lg hover:from-blue-500 hover:to-sky-400 transition-all hover:-translate-y-1 shadow-xl shadow-blue-700/40">
                {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={20} />
              </Link>
              <a href="tel:+16787395229"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all">
                <Phone size={20} /> (678) 739-5229
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {[
              { icon: Shield, text: isEs ? "Totalmente Asegurados" : "Fully Insured" },
              { icon: Star,   text: isEs ? "⭐ 5.0 Google Rating" : "⭐ 5.0 Google Rating" },
              { icon: CheckCircle, text: isEs ? "100% Garantizado" : "100% Guaranteed" },
              { icon: MapPin, text: isEs ? `Servicio Local en ${city.name}` : `Local ${city.name} Service` },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white text-sm font-semibold">
                <item.icon size={16} className="text-sky-300 shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
                {isEs ? `Expertos Locales en ${city.name}` : `Local ${city.name} Experts`}
              </p>
              <h2 className="text-4xl font-black text-gray-900 mb-5 leading-tight">
                {isEs
                  ? `Tu Empresa de Limpieza Exterior en ${city.name}, GA`
                  : `Your Exterior Cleaning Company in ${city.name}, GA`}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {isEs ? city.localDetailEs : city.localDetail}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {isEs
                  ? `Servimos a toda el área de ${city.name} y el ${city.county}. Cotizaciones gratuitas, sin compromiso.`
                  : `We serve all of ${city.name} and ${city.county}. Free quotes, no obligation.`}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  isEs ? "Servicio rápido y puntual" : "Fast & punctual service",
                  isEs ? "Equipos profesionales" : "Professional equipment",
                  isEs ? "Soluciones eco-friendly" : "Eco-friendly solutions",
                  isEs ? "Garantía del 100%" : "100% satisfaction guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/nueva3.jpg" alt={`Pressure washing service ${city.name} Georgia`}
                width={600} height={400} unoptimized className="object-cover w-full h-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="font-bold text-gray-900 text-sm">5.0</span>
                  <span className="text-gray-500 text-xs">
                    {isEs ? "9 reseñas Google" : "9 Google reviews"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
              {isEs ? "Nuestros Servicios" : "Our Services"}
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {isEs
                ? `Servicios de Limpieza Exterior en ${city.name}`
                : `Exterior Cleaning Services in ${city.name}`}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {isEs
                ? "Ofrecemos una gama completa de servicios de limpieza exterior para propiedades residenciales y comerciales."
                : "We offer a full range of exterior cleaning services for residential and commercial properties."}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {svcs.map((s) => (
              <div key={s.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <s.icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/contact#quote-form`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold text-lg hover:from-blue-600 hover:to-sky-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/25">
              {isEs ? `Cotización Gratis en ${city.name}` : `Free Quote in ${city.name}`} <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900">
              {isEs ? "También Servimos a:" : "We Also Serve:"}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link key={c.slug} href={`/${lang}/locations/${c.slug}`}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all">
                {isEs ? "Lavado a Presión" : "Pressure Washing"} {c.name}, GA
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">
            {isEs
              ? `¿Listo para Transformar tu Propiedad en ${city.name}?`
              : `Ready to Transform Your ${city.name} Property?`}
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            {isEs
              ? "Cotización gratuita sin compromiso. Respondemos en menos de 24 horas. Servicio garantizado al 100%."
              : "Free no-obligation quote. We respond within 24 hours. 100% satisfaction guaranteed."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact#quote-form`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-all hover:-translate-y-1">
              {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <Phone size={20} /> (678) 739-5229
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
