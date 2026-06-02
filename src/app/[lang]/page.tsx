import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Star, CheckCircle, ArrowRight, Droplets, Home, Building2, Leaf, Wind, Eye } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/getDictionary";
import HeroSlider from "@/components/HeroSlider";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
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

/* Card base + hover: azul profundo → se ilumina y sube al hacer hover */
const CARD = "group relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-7 shadow-md shadow-blue-900/20 transition-all duration-300 hover:from-blue-700 hover:to-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-700/35 cursor-default";
const CARD_ICON = "w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors duration-300";

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
    address: { "@type": "PostalAddress", addressLocality: "Lawrenceville", addressRegion: "GA", addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: 33.9526, longitude: -83.9877 },
    areaServed: [
      { "@type": "City", name: "Atlanta" }, { "@type": "City", name: "Lawrenceville" },
      { "@type": "City", name: "Duluth" }, { "@type": "City", name: "Norcross" },
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO — Photo Slider */}
      <HeroSlider
        lang={lang}
        headline={d.hero.title}
        highlight={d.hero.titleHighlight}
        subtitle={d.hero.subtitle}
        cta={d.hero.cta}
        phone={d.nav.phone}
        stats={d.stats}
        slides={[
          {
            src: "/hero2.jpg",
            alt: "Clean house after professional washing",
            objectPosition: "50% 90%",   // muestra la casa limpia del fondo (after)
          },
          {
            src: "/hero2.jpg",
            alt: "Beautiful home exterior cleaning results",
            objectPosition: "50% 60%",   // vista media de la casa limpia
          },
          {
            src: "/hero1.jpg",
            alt: "Professional gutter cleaning results",
            objectPosition: "80% 50%",   // lado derecho = canaleta limpia (after)
          },
        ]}
      />

      {/* WHY US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">{d.whyUs.badge}</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {d.whyUs.title}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">{d.whyUs.titleHighlight}</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{d.whyUs.desc}</p>
              <ul className="space-y-4 mb-10">
                {d.whyUs.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-blue-500 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold hover:from-blue-800 hover:to-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-700/20">
                {d.whyUs.cta} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: d.whyUs.cards[0] },
                { icon: Star, label: d.whyUs.cards[1] },
                { icon: Droplets, label: d.whyUs.cards[2] },
                { icon: CheckCircle, label: d.whyUs.cards[3] },
              ].map((card, i) => (
                <div key={i} className={`${CARD} ${i % 2 !== 0 ? "mt-8" : ""} text-center`}>
                  <div className={`${CARD_ICON} mx-auto`}>
                    <card.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{card.label.title}</h3>
                  <p className="text-blue-200 text-sm group-hover:text-white transition-colors duration-300">{card.label.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">{d.residentialSection.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">{d.residentialSection.title}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{d.residentialSection.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.residential.services.map((s, i) => {
              const Icon = resIcons[i] ?? CheckCircle;
              return (
                <div key={s.id} className={CARD}>
                  <div className={CARD_ICON}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/residential`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition-all">
              {d.residentialSection.viewAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">{d.commercialSection.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">{d.commercialSection.title}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{d.commercialSection.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.commercial.services.slice(0, 4).map((s, i) => {
              const Icon = comIcons[i] ?? Building2;
              return (
                <div key={s.id} className={CARD}>
                  <div className={CARD_ICON}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/commercial`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition-all">
              {d.commercialSection.viewAll} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">{d.testimonials.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">{d.testimonials.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {d.testimonials.items.map((t) => (
              <div key={t.name} className={CARD}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />)}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-blue-300 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">{d.cta.title}</h2>
          <p className="text-blue-200 text-lg mb-10">{d.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-2xl hover:-translate-y-1">
              {d.cta.primary} <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/60 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <Phone size={20} /> {d.cta.secondary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
