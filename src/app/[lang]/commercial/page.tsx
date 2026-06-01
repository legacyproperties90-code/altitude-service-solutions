import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Droplets, Eye, Shield, CheckCircle } from "lucide-react";
import { getDictionary, type Lang } from "@/lib/getDictionary";

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

const icons = [Building2, Droplets, Building2, Eye, Shield];

export default async function CommercialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0F1F3D] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">{d.commercial.badge}</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">{d.commercial.title}</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">{d.commercial.desc}</p>
        </div>
      </section>

      <section className="py-10 bg-[#0F1F3D]/50 border-y border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">{d.commercial.trustedBy}</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-300 font-semibold">
            <span>Atlantic Private Residences</span>
            <span className="text-blue-900">•</span>
            <span>The Aberdeen on Paces Ferry</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {d.commercial.services.map((s, i) => {
            const Icon = icons[i] ?? Building2;
            return (
              <div key={s.id} id={s.id} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/40 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{s.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle size={18} className="text-blue-400 shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${lang}/contact`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:-translate-y-1">
                    {d.commercial.quoteBtn} <ArrowRight size={18} />
                  </Link>
                </div>
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""} rounded-2xl border border-blue-900/30 aspect-video bg-[#0F1F3D] flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <Icon size={64} className="text-blue-900/60 mx-auto mb-4" />
                    <p className="text-gray-600 text-sm">Photo coming soon</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900/40 to-[#0F1F3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">{d.commercial.bookCta}</h2>
          <p className="text-gray-300 text-lg mb-8">{d.commercial.bookDesc}</p>
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all">
            {d.commercial.bookBtn} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
