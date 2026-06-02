"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  objectPosition: string;
}

interface HeroSliderProps {
  slides: Slide[];
  headline: string;
  highlight: string;
  subtitle: string;
  cta: string;
  phone: string;
  lang: string;
  stats: { value: string; label: string }[];
}

export default function HeroSlider({ slides, headline, highlight, subtitle, cta, phone, lang, stats }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const t = setInterval(next, 10000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* FOTOS — una activa a la vez */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={100}
            unoptimized={slide.src.endsWith(".png")}
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />
          {/* Overlay suave — permite ver bien la foto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/55" />
        </div>
      ))}

      {/* CONTENIDO centrado */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-24 pb-20 text-center">

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5">
          {headline}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base hover:from-blue-500 hover:to-blue-400 hover:-translate-y-0.5 transition-all shadow-xl shadow-blue-600/30">
            {cta} <ArrowRight size={18} />
          </Link>
          <a href="tel:+16787395229"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white font-bold text-base hover:bg-white/20 transition-all">
            <Phone size={18} className="text-blue-300" /> {phone}
          </a>
        </div>

        {/* Stats compactos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-3">
              <div className="text-2xl font-black text-blue-300">{s.value}</div>
              <div className="text-gray-300 text-xs leading-tight mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FLECHAS */}
      <button onClick={prev} aria-label="Previous"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center hover:bg-blue-600 transition-all">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} aria-label="Next"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center hover:bg-blue-600 transition-all">
        <ChevronRight size={20} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-blue-400" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
