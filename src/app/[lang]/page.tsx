import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Star, CheckCircle, ArrowRight, Droplets, Home, Building2, Leaf, Wind, Eye } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/getDictionary";
import HeroSlider from "@/components/HeroSlider";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import VideoSection from "@/components/VideoSection";
import GoogleReviews from "@/components/GoogleReviews";
import BlogSection from "@/components/BlogSection";

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

const resIcons   = [Droplets, Wind, Home, Leaf, CheckCircle, CheckCircle, Eye];
const resColors  = ["text-sky-500","text-blue-600","text-indigo-500","text-emerald-500","text-orange-500","text-teal-500","text-violet-500"];
const resHovers  = ["group-hover:bg-sky-500","group-hover:bg-blue-600","group-hover:bg-indigo-500","group-hover:bg-emerald-500","group-hover:bg-orange-500","group-hover:bg-teal-500","group-hover:bg-violet-500"];
const resBgs     = ["bg-sky-50","bg-blue-50","bg-indigo-50","bg-emerald-50","bg-orange-50","bg-teal-50","bg-violet-50"];

const comIcons   = [Building2, Droplets, Building2, Eye, Shield];
const comColors  = ["text-slate-600","text-sky-500","text-gray-600","text-violet-500","text-green-600"];
const comHovers  = ["group-hover:bg-slate-600","group-hover:bg-sky-500","group-hover:bg-gray-600","group-hover:bg-violet-500","group-hover:bg-green-600"];
const comBgs     = ["bg-slate-50","bg-sky-50","bg-gray-100","bg-violet-50","bg-green-50"];

/* Cards premium MAX glow */
const CARD = "card-glow group relative bg-gradient-to-br from-white via-blue-50/20 to-sky-50/30 border border-blue-100/50 rounded-2xl p-7 cursor-default";
const CARD_ICON = "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-115 group-hover:shadow-2xl transition-all duration-300";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "es" ? "es" : "en") as Lang;
  const d = await getDictionary(lang);

  const isEs = lang === "es";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://altitudess.net",
    name: "Altitude Service Solutions",
    description: d.meta.home.description,
    url: "https://altitudess.net",
    telephone: "+16787395229",
    email: "info@altitudeservicesolutions.com",
    image: "https://altitudess.net/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lawrenceville",
      addressLocality: "Lawrenceville",
      addressRegion: "GA",
      postalCode: "30046",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.9526, longitude: -83.9877 },
    areaServed: [
      { "@type": "City", name: "Atlanta" },
      { "@type": "City", name: "Lawrenceville" },
      { "@type": "City", name: "Duluth" },
      { "@type": "City", name: "Norcross" },
      { "@type": "City", name: "Buford" },
      { "@type": "City", name: "Suwanee" },
    ],
    priceRange: "$$",
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Cleaning Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soft Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Washing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Cleaning" } },
      ],
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isEs ? [
      { "@type": "Question", name: "¿Cuánto cuesta el lavado a presión en Atlanta?", acceptedAnswer: { "@type": "Answer", text: "El costo varía según el tamaño y tipo de propiedad. Ofrecemos cotizaciones gratuitas sin compromiso. Llame al (678) 739-5229 o complete el formulario en línea." } },
      { "@type": "Question", name: "¿Están asegurados?", acceptedAnswer: { "@type": "Answer", text: "Sí, Altitude Service Solutions está completamente asegurado y licenciado en Georgia." } },
      { "@type": "Question", name: "¿Qué áreas sirven?", acceptedAnswer: { "@type": "Answer", text: "Servimos Atlanta, Lawrenceville, Duluth, Norcross, Buford, Suwanee y todas las áreas circundantes en el norte de Georgia." } },
      { "@type": "Question", name: "¿Cuál es la diferencia entre soft washing y lavado a presión?", acceptedAnswer: { "@type": "Answer", text: "El soft washing usa baja presión con soluciones especiales para techos y superficies delicadas. El lavado a presión usa alta presión para concreto, entradas y superficies duras." } },
    ] : [
      { "@type": "Question", name: "How much does pressure washing cost in Atlanta?", acceptedAnswer: { "@type": "Answer", text: "Costs vary based on property size and type. We offer free, no-obligation quotes. Call (678) 739-5229 or complete our online form." } },
      { "@type": "Question", name: "Are you insured?", acceptedAnswer: { "@type": "Answer", text: "Yes, Altitude Service Solutions is fully insured and licensed in Georgia." } },
      { "@type": "Question", name: "What areas do you serve?", acceptedAnswer: { "@type": "Answer", text: "We serve Atlanta, Lawrenceville, Duluth, Norcross, Buford, Suwanee, and all surrounding areas in North Georgia." } },
      { "@type": "Question", name: "What is the difference between soft washing and pressure washing?", acceptedAnswer: { "@type": "Answer", text: "Soft washing uses low pressure with specialized solutions for roofs and delicate surfaces. Pressure washing uses high pressure for concrete, driveways, and hard surfaces." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

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
            src: "/altura.png",
            alt: "High-rise building cleaning — Altitude Service Solutions Atlanta GA",
            objectPosition: "center 25%",
          },
          {
            src: "/nueva3.jpg",
            alt: "House soft washing results — Altitude Service Solutions",
            objectPosition: "75% 50%",
          },
          {
            src: "/nueva1.jpg",
            alt: "Gutter cleaning results — Altitude Service Solutions",
            objectPosition: "75% 40%",
          },
          {
            src: "/nueva2.jpg",
            alt: "Roof and gutter cleaning — Altitude Service Solutions",
            objectPosition: "75% 40%",
          },
          {
            src: "/foto1.jpg",
            alt: "Driveway pressure washing — Atlanta GA",
            objectPosition: "50% 100%",
          },
          {
            src: "/foto2.jpg",
            alt: "Commercial parking deck cleaning — Atlanta GA",
            objectPosition: "center 40%",
          },
        ]}
      />

      {/* TRUST BADGES */}
      <TrustBadges lang={lang} />

      {/* HOW IT WORKS */}
      <HowItWorks lang={lang} />

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
                    <CheckCircle size={20} className="text-green-500 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href={`/${lang}/contact#quote-form`}
                className="btn-arrow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold hover:from-blue-800 hover:to-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-700/20">
                {d.whyUs.cta} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield,      label: d.whyUs.cards[0], color: "text-green-500",   bg: "bg-green-50",  hoverBg: "group-hover:bg-green-500"  },
                { icon: Star,        label: d.whyUs.cards[1], color: "text-yellow-500 fill-yellow-400", bg: "bg-yellow-50", hoverBg: "group-hover:bg-yellow-500" },
                { icon: Droplets,    label: d.whyUs.cards[2], color: "text-emerald-500", bg: "bg-emerald-50", hoverBg: "group-hover:bg-emerald-500" },
                { icon: CheckCircle, label: d.whyUs.cards[3], color: "text-blue-700",    bg: "bg-blue-50",   hoverBg: "group-hover:bg-blue-700"   },
              ].map((card, i) => (
                <div key={i} className={`${CARD} ${i % 2 !== 0 ? "mt-8" : ""} text-center`}>
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5 ${card.hoverBg} transition-all duration-300 mx-auto`}>
                    <card.icon size={28} className={`${card.color} group-hover:text-white group-hover:fill-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-black font-bold mb-2">{card.label.title}</h3>
                  <p className="text-gray-700 text-sm">{card.label.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <BeforeAfterSlider lang={lang} />

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
                  <div className={`${CARD_ICON} ${resBgs[i]} ${resHovers[i]} group-hover:shadow-[0_8px_24px_-4px]`}>
                    <Icon size={26} className={`${resColors[i]} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
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

      {/* VIDEO */}
      <VideoSection lang={lang} />

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
                  <div className={`${CARD_ICON} ${comBgs[i]} ${comHovers[i]}`}>
                    <Icon size={26} className={`${comColors[i]} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
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

      {/* GOOGLE REVIEWS */}
      <GoogleReviews lang={lang} />

      {/* BLOG */}
      <BlogSection lang={lang} />

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
                  {[1,2,3,4,5].map((i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-sky-50">
                  <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
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
            <Link href={`/${lang}/contact#quote-form`}
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
