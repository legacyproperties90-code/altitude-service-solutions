import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { posts } from "@/lib/blog";

export default function BlogSection({ lang }: { lang: string }) {
  const isEs = lang === "es";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
              {isEs ? "Blog & Consejos" : "Blog & Tips"}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              {isEs ? "Aprende Sobre " : "Learn About "}
              <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                {isEs ? "Limpieza Exterior" : "Exterior Cleaning"}
              </span>
            </h2>
          </div>
          <Link href={`/${lang}/blog`}
            className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-semibold text-sm transition-colors shrink-0">
            {isEs ? "Ver todos los artículos" : "View all articles"} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => {
            const slug = isEs ? post.slugEs : post.slug;
            const title = isEs ? post.titleEs : post.title;
            const tag = isEs ? post.tagEs : post.tag;
            const readTime = isEs ? post.readTimeEs : post.readTime;
            const excerpt = (isEs ? post.descriptionEs : post.description).slice(0, 120) + "...";

            return (
              <Link key={i} href={`/${lang}/blog/${slug}`}
                className="card-glow group bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.img} alt={title} fill unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: post.imgPos }}
                    sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-blue-700/85 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Tag size={11} className="text-white/70" />
                    <span className="text-white text-xs font-semibold">{tag}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock size={13} />{readTime}
                    </div>
                    <span className="text-blue-700 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {isEs ? "Leer más" : "Read more"} <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
