import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, Phone, CheckCircle, ArrowRight, Shield, Star,
  Droplets, Wind, Home, Leaf, Eye, Hammer, HelpCircle,
} from "lucide-react";
import { getService, services } from "@/lib/services";
import { cities } from "@/lib/cities";

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}): Promise<Metadata> {
  const { lang, service: serviceSlug } = await params;
  const svc = getService(serviceSlug);
  if (!svc) return {};

  const isEs = lang === "es";
  const name = isEs ? svc.nameEs : svc.name;
  const title = isEs
    ? 
    : ;
  const description = isEs ? svc.descriptionEs : svc.description;
  const baseUrl = "https://altitudess.net";
  const canonical = ;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: ,
        es: ,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: , width: 1200, height: 630, alt: title }],
    },
  };
}

const iconMap: Record<string, React.ElementType> = {
  Droplets, Wind, Home, Leaf, Eye, Hammer,
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}) {
  const { lang, service: serviceSlug } = await params;
  const svc = getService(serviceSlug);
  if (!svc) notFound();

  const isEs = lang === "es";
  const name = isEs ? svc.nameEs : svc.name;
  const tagline = isEs ? svc.taglineEs : svc.tagline;
  const description = isEs ? svc.descriptionEs : svc.description;
  const benefits = isEs ? svc.benefitsEs : svc.benefits;
  const surfaces = isEs ? svc.surfacesEs : svc.surfaces;
  const faqs = isEs ? svc.faqsEs : svc.faqs;

  const serviceCities = cities.slice(0, 12);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Service"],
    "@id": "https://altitudess.net",
    name: "Altitude Service Solutions",
    url: "https://altitudess.net",
    telephone: "+16787395229",
    serviceType: name,
    description,
    areaServed: { "@type": "State", name: "Georgia" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lawrenceville",
      addressRegion: "GA",
      addressCountry: "US",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "9" },
    priceRange: "3396",
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
    mainEntityOfPage: {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <Image
          src={svc.photo}
          alt={}
          fill
          unoptimized
          priority
          className="object-cover"
          style={{ objectPosition: svc.photoPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-800/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 mb-5">
              <Star size={12} className="text-sky-300" />
              <span className="text-sky-300 font-semibold text-xs tracking-widest uppercase">
                {isEs ? "Servicio Profesional · Atlanta, GA" : "Professional Service · Atlanta, GA"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}>
              {isEs ? "Servicio de" : "Professional"}{" "}
              <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
            <p className="text-blue-100/90 text-xl font-medium mb-3" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              {tagline}
            </p>
            <p className="text-blue-200/80 text-base leading-relaxed mb-8" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-lg hover:from-blue-500 hover:to-sky-400 transition-all hover:-translate-y-1 shadow-xl shadow-blue-700/40">
                {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+16787395229"
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
              { icon: Star, text: "⭐ 5.0 Google Rating" },
              { icon: CheckCircle, text: isEs ? "100% Garantizado" : "100% Guaranteed" },
              { icon: MapPin, text: isEs ? "Área de Atlanta, GA" : "Atlanta Area, GA" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white text-sm font-semibold">
                <item.icon size={16} className="text-sky-300 shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
                {isEs ? "¿Por Qué Elegirnos?" : "Why Choose Us"}
              </p>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                {isEs
                  ? 
                  : }
              </h2>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-sky-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/25">
                  {isEs ? "Obtener Cotización Gratis" : "Get Free Quote"} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={svc.photo}
                alt={}
                fill
                unoptimized
                className="object-cover"
                style={{ objectPosition: svc.photoPosition }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
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

      {/* Surfaces */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
              {isEs ? "Superficies que Limpiamos" : "Surfaces We Clean"}
            </p>
            <h2 className="text-4xl font-black text-gray-900">
              {isEs
                ? 
                : }
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {surfaces.map((surface, i) => (
              <div
                key={surface}
                className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <Droplets size={20} className="text-blue-500" />
                </div>
                <p className="text-gray-800 font-semibold text-sm leading-tight">{surface}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
              {isEs ? "Área de Servicio" : "Service Area"}
            </p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {isEs
                ? 
                : }
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {isEs
                ? "Servimos a comunidades en los condados de Gwinnett, Fulton, Forsyth y Hall."
                : "Serving communities across Gwinnett, Fulton, Forsyth, and Hall counties."}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCities.map((city) => (
              <Link
                key={city.slug}
                href={}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-medium text-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all">
                {isEs ? svc.nameEs : svc.name} — {city.name}, GA
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-4xl font-black text-gray-900">
              {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">
            {isEs
              ? 
              : }
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            {isEs
              ? "Cotización gratuita sin compromiso. Respondemos en menos de 24 horas. Servicio garantizado al 100%."
              : "Free no-obligation quote. We respond within 24 hours. 100% satisfaction guaranteed."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-all hover:-translate-y-1">
              {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <Phone size={20} /> (678) 739-5229
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
