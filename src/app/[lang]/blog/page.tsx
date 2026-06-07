import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { posts } from "@/lib/blog";
import { getDictionary, type Lang } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const baseUrl = "https://altitudess.net";
  return {
    title: isEs ? "Blog — Consejos de Limpieza Exterior" : "Blog — Exterior Cleaning Tips",
    description: isEs
      ? "Consejos, guías y recursos sobre lavado a presión, limpieza de techos y mantenimiento exterior en Atlanta, GA."
      : "Tips, guides, and resources for pressure washing, roof cleaning, and exterior maintenance in Atlanta, GA.",
    alternates: {
      canonical: `${baseUrl}/${lang}/blog`,
      languages: { en: `${baseUrl}/en/blog`, es: `${baseUrl}/es/blog` },
    },
  };
}

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "es" ? "es" : "en") as Lang;
  const isEs = lang === "es";

  const langPosts = posts.filter((p) => p.lang === lang);

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-28 pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sky-300 font-semibold text-sm tracking-widest uppercase mb-4">
            {isEs ? "Recursos y Consejos" : "Tips & Resources"}
          </p>
          <h1 className="text-5xl font-black text-white mb-4">Blog</h1>
          <p className="text-blue-200 text-lg">
            {isEs
              ? "Guías de limpieza exterior, mantenimiento del hogar y consejos para Atlanta, GA."
              : "Exterior cleaning guides, home maintenance, and tips for Atlanta, GA."}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {langPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              {isEs ? "Próximamente..." : "Coming soon..."}
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {langPosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all p-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.publishDate).toLocaleDateString(lang === "es" ? "es-US" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                  {post.readTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime} {isEs ? "min de lectura" : "min read"}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
                  {isEs ? "Leer más" : "Read more"} <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
