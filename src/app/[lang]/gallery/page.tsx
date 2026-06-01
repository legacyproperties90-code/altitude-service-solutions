import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ImageOff } from "lucide-react";
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

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-100 font-semibold text-sm tracking-widest uppercase mb-3">{d.gallery.badge}</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">{d.gallery.title}</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">{d.gallery.desc}</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {d.gallery.categories.map((c, i) => (
              <button key={c}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-50 border border-gray-100 rounded-2xl flex flex-col items-center justify-center card-hover hover:border-blue-200 hover:shadow-md transition-all">
                <ImageOff size={32} className="text-gray-300 mb-3" />
                <p className="text-gray-400 text-xs text-center px-4">Photo coming soon</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-10 text-center shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 mb-3">{d.gallery.comingSoon}</h3>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-6">{d.gallery.comingDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg shadow-blue-500/20">
                {d.gallery.getQuote} <ArrowRight size={18} />
              </Link>
              <a href="tel:+16787395229"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all">
                {d.gallery.callUs}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
