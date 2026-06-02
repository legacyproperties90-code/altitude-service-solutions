"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Slide {
  src?: string;
  alt?: string;
  label: string;
  objectPosition?: string;
  branded?: boolean;
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

export default function HeroSlider({
  slides, headline, highlight, subtitle, cta, phone, lang, stats,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 800);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, slides.length, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, slides.length, goTo]);

  useEffect(() => {
    const t = setInterval(next, 10000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">

      {/* ── SLIDES ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {slide.branded ? (
            /* Branded slide — gradiente azul oscuro */
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0d2152] to-[#0A1628]">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
            </div>
          ) : (
            /* Photo slide */
            <>
              <Image
                src={slide.src!}
                alt={slide.alt ?? ""}
                fill
                className="object-cover transition-transform duration-[12000ms] ease-in-out"
                style={{
                  objectPosition: slide.objectPosition ?? "center center",
                  transform: i === current ? "scale(1.06)" : "scale(1)",
                }}
                priority={i === 0}
                sizes="100vw"
                quality={90}
              />
              {/* Gradient overlay — más oscuro en bordes, más transparente en el centro */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            </>
          )}
        </div>
      ))}

      {/* ── SERVICE BADGE ── */}
      <div className="absolute top-24 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <div className={`transition-all duration-500 ${animating ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-semibold tracking-widest uppercase border border-blue-400/30 shadow-lg">
            <Star size={12} className="fill-yellow-300 text-yellow-300" />
            {slides[current]?.label}
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center w-full">
        <div className={`transition-all duration-700 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 drop-shadow-2xl">
            {headline}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent drop-shadow-none">
              {highlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg shadow-2xl shadow-blue-600/40 hover:from-blue-500 hover:to-blue-400 hover:-translate-y-1 transition-all duration-300">
              {cta} <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 hover:border-white/80 transition-all duration-300">
              <Phone size={20} className="text-blue-300" /> {phone}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-black text-blue-300 mb-0.5">{s.value}</div>
                <div className="text-gray-300 text-xs sm:text-sm leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ARROWS ── */}
      <button onClick={prev} aria-label="Previous"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-blue-600/80 hover:border-blue-400 transition-all duration-300 shadow-lg">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} aria-label="Next"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-blue-600/80 hover:border-blue-400 transition-all duration-300 shadow-lg">
        <ChevronRight size={24} />
      </button>

      {/* ── DOTS ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-10 h-3 bg-blue-400 shadow-md shadow-blue-400/50"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── SCROLL HINT ── */}
      <div className="absolute bottom-8 right-6 z-30 hidden sm:flex flex-col items-center gap-1.5 opacity-50">
        <div className="w-px h-8 bg-white/50 animate-pulse" />
        <span className="text-white text-[10px] tracking-widest uppercase rotate-90 origin-center translate-y-4">scroll</span>
      </div>
    </section>
  );
}
