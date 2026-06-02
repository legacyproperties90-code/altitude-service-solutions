import type { Metadata } from "next";
import Link from "next/link";
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

export default async function ResidentialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-100 font-semibold text-sm tracking-widest uppercase mb-3">{d.residential.badge}</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">{d.residential.title}</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">{d.residential.desc}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {d.residential.services.map((s, i) => {
            const Icon = icons[i] ?? CheckCircle;
            const isEven = i % 2 === 0;
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
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20">
                    {d.residential.getQuote} <ArrowRight size={18} />
                  </Link>
                </div>
                {/* Blue card placeholder */}
                <div className={`${!isEven ? "lg:order-1" : ""} rounded-2xl aspect-video bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center shadow-md shadow-sky-100/50 border border-sky-100`}>
                  <div className="text-center p-8">
                    <Icon size={72} className="text-sky-200 mx-auto mb-4" />
                    <p className="text-sky-300 text-sm font-medium">{s.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">{d.residential.bookCta}</h2>
          <p className="text-blue-100 text-lg mb-8">{d.residential.bookDesc}</p>
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all">
            {d.residential.getQuote} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
