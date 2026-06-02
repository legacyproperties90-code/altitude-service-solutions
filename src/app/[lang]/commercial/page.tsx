import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Droplets, Eye, Shield, CheckCircle } from "lucide-react";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return {
    title: d.meta.commercial.title,
    description: d.meta.commercial.description,
    alternates: {
      canonical: `https://altitudess.net/${lang}/commercial`,
      languages: { en: "https://altitudess.net/en/commercial", es: "https://altitudess.net/es/commercial" },
    },
  };
}

const icons  = [Building2, Droplets, Building2, Eye, Shield];
const colors = ["text-slate-600","text-sky-500","text-gray-600","text-violet-500","text-green-600"];
const bgs    = ["bg-slate-50","bg-sky-50","bg-gray-100","bg-violet-50","bg-green-50"];

const photos = [
  { src: "/foto1.jpg",   pos: "50% 100%"  },   // Commercial Pressure Washing (driveway)
  { src: "/nueva3.jpg",  pos: "75% 50%"   },   // Soft Washing
  { src: "/foto2.jpg",   pos: "center 40%" },  // Parking Deck
  { src: "/altura.png",  pos: "center 30%" },  // High-Rise Window Cleaning
  { src: "/foto4.jpg",   pos: "50% 100%"  },   // Waterproofing
];

export default async function CommercialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-100 font-semibold text-sm tracking-widest uppercase mb-3">{d.commercial.badge}</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">{d.commercial.title}</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">{d.commercial.desc}</p>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">{d.commercial.trustedBy}</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-700 font-semibold">
            <span>Atlantic Private Residences</span>
            <span className="text-gray-300">•</span>
            <span>The Aberdeen on Paces Ferry</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {d.commercial.services.map((s, i) => {
            const Icon  = icons[i] ?? Building2;
            const photo = photos[i];
            const isEven = i % 2 === 0;
            return (
              <div key={s.id} id={s.id} className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Text side */}
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 rounded-2xl ${bgs[i] ?? "bg-sky-50"} border border-gray-100 flex items-center justify-center mb-6`}>
                    <Icon size={28} className={colors[i] ?? "text-sky-600"} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{s.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle size={18} className="text-blue-500 shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${lang}/contact`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20">
                    {d.commercial.quoteBtn} <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Photo side */}
                <div className={`${!isEven ? "lg:order-1" : ""} rounded-2xl overflow-hidden aspect-video relative shadow-xl shadow-black/10`}>
                  <Image
                    src={photo.src}
                    alt={s.title}
                    fill
                    unoptimized
                    className="object-cover"
                    style={{ objectPosition: photo.pos }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-700/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {s.title}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">{d.commercial.bookCta}</h2>
          <p className="text-blue-100 text-lg mb-8">{d.commercial.bookDesc}</p>
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all">
            {d.commercial.bookBtn} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
