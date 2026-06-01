import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Star, CheckCircle, ArrowRight, Droplets, Home, Building2, Leaf, Wind, Eye } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "es" ? "es" : "en") as Lang;
  const d = await getDictionary(lang);
  return {
    title: d.meta.home.title,
    description: d.meta.home.description,
    alternates: {
      canonical: `https://altitudess.net/${lang}`,
      languages: { en: "https://altitudess.net/en", es: "https://altitudess.net/es" },
    },
  };
}

const resIcons = [Droplets, Wind, Home, Leaf, CheckCircle, CheckCircle, Eye];
const comIcons = [Building2, Droplets, Eye, Shield];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "es" ? "es" : "en") as Lang;
  const d = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://altitudess.net",
    name: "Altitude Service Solutions",
    description: d.meta.home.description,
    url: "https://altitudess.net",
    telephone: "+16787395229",
    email: "info@altitudeservicesolutions.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lawrenceville",
      addressRegion: "GA",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.9526, longitude: -83.9877 },
    areaServed: [
      { "@type": "City", name: "Atlanta" },
      { "@type": "City", name: "Lawrenceville" },
      { "@type": "City", name: "Duluth" },
      { "@type": "City", name: "Norcross" },
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47" },
    sameAs: ["https://www.facebook.com/altitudeservicesolutions", "https://www.instagram.com/altitudeservicesolutions"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1F3D] to-[#0A1628]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-300 text-sm font-medium mb-8">
            <Star size={14} className="fill-blue-400 text-blue-400" />
            {d.hero.badge}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            {d.hero.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              {d.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">{d.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
              {d.hero.cta} <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-blue-700/50 text-white font-semibold text-lg hover:bg-blue-900/30 transition-all">
              <Phone size={20} className="text-blue-400" /> {d.nav.phone}
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {d.stats.map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <div className="text-3xl font-black text-blue-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-[#0F1F3D]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">{d.whyUs.badge}</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                {d.whyUs.title}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">{d.whyUs.titleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{d.whyUs.desc}</p>
              <ul className="space-y-4 mb-10">
                {d.whyUs.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-400 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:-translate-y-1">
                {d.whyUs.cta} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, color: "text-blue-400", bg: "bg-blue-900/40" },
                { icon: Star, color: "text-yellow-400", bg: "bg-yellow-900/20" },
                { icon: Droplets, color: "text-sky-400", bg: "bg-sky-900/20" },
                { icon: CheckCircle, color: "text-green-400", bg: "bg-green-900/20" },
              ].map((card, i) => (
                <div key={i} className={`bg-[#0A1628] border border-blue-900/30 rounded-2xl p-6 text-center card-hover ${i % 2 !== 0 ? "mt-8" : ""}`}>
                  <div className={`w-14 h-14 ${card.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <card.icon size={28} className={card.color} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{d.whyUs.cards[i].title}</h3>
                  <p className="text-gray-400 text-sm">{d.whyUs.cards[i].desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">{d.residentialSection.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{d.residentialSection.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{d.residentialSection.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.residential.services.map((s, i) => {
              const Icon = resIcons[i] ?? CheckCircle;
              return (
                <div key={s.id} className="group bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-7 card-hover hover:border-blue-600/50">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                    <Icon size={24} className="text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/residential`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-600/50 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all">
              {d.residentialSection.viewAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="py-20 bg-[#060E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">{d.commercialSection.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{d.commercialSection.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{d.commercialSection.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.commercial.services.slice(0, 4).map((s, i) => {
              const Icon = comIcons[i];
              return (
                <div key={s.id} className="group bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-7 card-hover hover:border-blue-600/50">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                    <Icon size={24} className="text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/commercial`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-600/50 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all">
              {d.commercialSection.viewAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">{d.testimonials.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{d.testimonials.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.testimonials.items.map((t) => (
              <div key={t.name} className="bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-7 card-hover">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/40 to-[#0F1F3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">{d.cta.title}</h2>
          <p className="text-gray-300 text-lg mb-10">{d.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
              {d.cta.primary} <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <Phone size={20} /> {d.cta.secondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
