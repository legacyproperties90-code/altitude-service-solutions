import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplets, Home, Leaf, Wind, Eye, CheckCircle } from "lucide-react";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return {
    title: d.meta.residential.title,
    description: d.meta.residential.description,
    alternates: {
      canonical: `https://altitudess.net/${lang}/residential`,
      languages: { en: "https://altitudess.net/en/residential", es: "https://altitudess.net/es/residential" },
    },
  };
}

const icons = [Droplets, Wind, Home, Leaf, CheckCircle, CheckCircle, Eye];

/*
  src       = named photo from Drive
  pos       = objectPosition
  type      = "stacked" (show bottom=after) | "sidebyside" (show both halves)
  aspect    = container aspect ratio class
*/
const photos = [
  { src: "/svc_soft_washing.jpg",    pos: "center 50%",  type: "sidebyside" },  // side-by-side portrait → shows both
  { src: "/svc_pressure_washing.jpg",pos: "50% 100%",    type: "stacked"    },  // stacked → show bottom (after=clean driveway)
  { src: "/svc_house_washing.jpg",   pos: "50% 100%",    type: "stacked"    },  // stacked → show bottom (after=clean siding)
  { src: "/nueva2.jpg",              pos: "75% 40%",     type: "sidebyside" },  // roof/gutter side-by-side
  { src: "/svc_fence_deck.jpg",      pos: "50% 100%",    type: "stacked"    },  // stacked → show bottom (after=restored fence)
  { src: "/svc_gutter_cleaning.jpg", pos: "center 50%",  type: "sidebyside" },  // side-by-side portrait → shows both
  { src: "/nueva3.jpg",              pos: "75% 50%",     type: "sidebyside" },  // window / exterior
];

export default async function ResidentialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-100 font-semibold text-sm tracking-widest uppercase mb-3">{d.residential.badge}</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">{d.residential.title}</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">{d.residential.desc}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {d.residential.services.map((s, i) => {
            const Icon  = icons[i] ?? CheckCircle;
            const photo = photos[i];
            const isEven = i % 2 === 0;
            /* side-by-side photos look better in a more square container */
            const aspectClass = photo.type === "sidebyside" ? "aspect-[4/3]" : "aspect-video";
            return (
              <div key={s.id} id={s.id} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-sky-600" />
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
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold hover:from-blue-800 hover:to-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-700/20">
                    {d.residential.getQuote} <ArrowRight size={18} />
                  </Link>
                </div>
                <div className={`${!isEven ? "lg:order-1" : ""} rounded-2xl overflow-hidden ${aspectClass} relative shadow-xl shadow-black/10`}>
                  <Image src={photo.src} alt={s.title} fill unoptimized
                    className="object-cover" style={{ objectPosition: photo.pos }}
                    sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-800/85 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {s.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">{d.residential.bookCta}</h2>
          <p className="text-blue-100 text-lg mb-8">{d.residential.bookDesc}</p>
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-all">
            {d.residential.getQuote} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
