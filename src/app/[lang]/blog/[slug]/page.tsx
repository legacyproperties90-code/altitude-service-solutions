import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { getPost, getAllSlugs, type Lang } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map(({ slug, lang }) => ({ lang, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug, lang as Lang);
  if (!post) return {};

  const isEs = lang === "es";
  const title = isEs ? post.titleEs : post.title;
  const description = isEs ? post.descriptionEs : post.description;
  const baseUrl = "https://altitudess.net";
  const canonical = `${baseUrl}/${lang}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/blog/${post.slug}`,
        es: `${baseUrl}/es/blog/${post.slugEs}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: `${baseUrl}${post.img}`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getPost(slug, lang as Lang);
  if (!post) notFound();

  const isEs = lang === "es";
  const title = isEs ? post.titleEs : post.title;
  const description = isEs ? post.descriptionEs : post.description;
  const content = isEs ? post.contentEs : post.content;
  const tag = isEs ? post.tagEs : post.tag;
  const readTime = isEs ? post.readTimeEs : post.readTime;
  const altSlug = isEs ? post.slug : post.slugEs;
  const altLang = isEs ? "en" : "es";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `https://altitudess.net${post.img}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Organization",
      name: "Altitude Service Solutions",
      url: "https://altitudess.net",
    },
    publisher: {
      "@type": "Organization",
      name: "Altitude Service Solutions",
      logo: { "@type": "ImageObject", url: "https://altitudess.net/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://altitudess.net/${lang}/blog/${slug}` },
  };

  // Parse markdown-ish content into sections
  const sections = content.trim().split(/\n## /).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[340px] w-full overflow-hidden">
        <Image src={post.img} alt={title} fill unoptimized priority
          className="object-cover" style={{ objectPosition: post.imgPos }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <div className="inline-flex items-center gap-1.5 bg-blue-600/85 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
              <Tag size={11} className="text-white/70" />
              <span className="text-white text-xs font-semibold">{tag}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}>
              {title}
            </h1>
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <span className="flex items-center gap-1.5"><Clock size={14} />{readTime}</span>
              <span>·</span>
              <span>Altitude Service Solutions</span>
              <span>·</span>
              <Link href={`/${altLang}/blog/${altSlug}`}
                className="text-sky-300 hover:text-sky-200 font-semibold transition-colors">
                {isEs ? "Read in English" : "Leer en Español"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href={`/${lang}`} className="hover:text-blue-700 transition-colors">
              {isEs ? "Inicio" : "Home"}
            </Link>
            <span>/</span>
            <Link href={`/${lang}/blog`} className="hover:text-blue-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-xs">{title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-blue-600 pl-5 italic">
              {description}
            </p>

            <div className="prose-custom space-y-8">
              {sections.map((section, i) => {
                const lines = section.split("\n");
                const heading = i === 0 && !section.startsWith("#")
                  ? null
                  : lines[0];
                const body = heading ? lines.slice(1).join("\n") : section;

                return (
                  <div key={i}>
                    {heading && (
                      <h2 className="text-2xl font-black text-gray-900 mb-4 mt-8 leading-tight">
                        {heading.replace(/^#+\s*/, "")}
                      </h2>
                    )}
                    {body.split("\n### ").map((sub, j) => {
                      const subLines = sub.split("\n");
                      const subHeading = sub.includes("\n") && j > 0 ? subLines[0] : null;
                      const subBody = subHeading ? subLines.slice(1).join("\n") : sub;

                      return (
                        <div key={j} className="mb-6">
                          {subHeading && (
                            <h3 className="text-lg font-bold text-gray-800 mb-3">{subHeading}</h3>
                          )}
                          {subBody.split("\n\n").map((para, k) => {
                            const trimmed = para.trim();
                            if (!trimmed) return null;

                            // Table
                            if (trimmed.includes("|---|")) {
                              const rows = trimmed.split("\n").filter(r => r.trim() && !r.includes("|---|"));
                              return (
                                <div key={k} className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                                  <table className="w-full text-sm">
                                    {rows.map((row, ri) => {
                                      const cells = row.split("|").filter(Boolean).map(c => c.trim());
                                      return ri === 0 ? (
                                        <thead key={ri}><tr className="bg-blue-700 text-white">
                                          {cells.map((c, ci) => <th key={ci} className="px-4 py-3 text-left font-semibold">{c}</th>)}
                                        </tr></thead>
                                      ) : (
                                        <tbody key={ri}><tr className="border-t border-gray-100 hover:bg-gray-50">
                                          {cells.map((c, ci) => <td key={ci} className="px-4 py-3 text-gray-600">{c}</td>)}
                                        </tr></tbody>
                                      );
                                    })}
                                  </table>
                                </div>
                              );
                            }

                            // Bullet list
                            if (trimmed.startsWith("- ") || trimmed.startsWith("**")) {
                              const items = trimmed.split("\n").filter(l => l.trim());
                              return (
                                <ul key={k} className="space-y-2 mb-4">
                                  {items.map((item, ii) => (
                                    <li key={ii} className="flex items-start gap-2 text-gray-600">
                                      <CheckCircle size={16} className="text-blue-500 shrink-0 mt-1" />
                                      <span>{item.replace(/^[-*]\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }

                            // Regular paragraph
                            return (
                              <p key={k} className="text-gray-600 leading-relaxed mb-4"
                                dangerouslySetInnerHTML={{
                                  __html: trimmed
                                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                    .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                                }}
                              />
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Back to blog */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link href={`/${lang}/blog`}
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition-colors">
                <ArrowLeft size={16} />
                {isEs ? "Ver todos los artículos" : "View all articles"}
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-2xl p-7 text-white sticky top-24">
              <h3 className="font-black text-xl mb-3 leading-tight">
                {isEs ? "¿Listo para un Exterior Impecable?" : "Ready for a Clean Exterior?"}
              </h3>
              <p className="text-blue-200 text-sm mb-6">
                {isEs
                  ? "Cotización gratuita sin compromiso. Respondemos en menos de 24 horas."
                  : "Free no-obligation quote. We respond within 24 hours."}
              </p>
              <Link href={`/${lang}/contact#quote-form`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-blue-800 font-bold hover:bg-blue-50 transition-all mb-3">
                {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={16} />
              </Link>
              <a href="tel:+16787395229"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all text-sm">
                <Phone size={15} /> (678) 739-5229
              </a>
              <div className="mt-5 pt-5 border-t border-white/15">
                <div className="flex items-center gap-2 text-blue-200 text-xs">
                  <CheckCircle size={14} className="text-green-400" />
                  {isEs ? "Totalmente asegurados y licenciados" : "Fully insured & licensed"}
                </div>
                <div className="flex items-center gap-2 text-blue-200 text-xs mt-2">
                  <CheckCircle size={14} className="text-green-400" />
                  {isEs ? "100% de satisfacción garantizada" : "100% satisfaction guaranteed"}
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-gray-900 text-sm mb-4">
                {isEs ? "Áreas de Servicio" : "Service Areas"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Atlanta", "Lawrenceville", "Duluth", "Norcross", "Buford", "Suwanee"].map((city) => (
                  <Link key={city} href={`/${lang}/locations/${city.toLowerCase()}`}
                    className="text-xs bg-white border border-gray-200 text-gray-600 hover:text-blue-700 hover:border-blue-300 px-3 py-1.5 rounded-full transition-all">
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {isEs ? "¿Tienes Preguntas? Llámanos" : "Have Questions? Give Us a Call"}
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            {isEs
              ? "Nuestro equipo está disponible Lunes–Viernes 8am–6pm, Sábado 8am–4pm"
              : "Our team is available Monday–Friday 8am–6pm, Saturday 8am–4pm"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact#quote-form`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-all hover:-translate-y-1">
              {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <Phone size={20} /> (678) 739-5229
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
