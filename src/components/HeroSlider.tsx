"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  alt: string;
  label: string;
}

interface HeroSliderProps {
  slides: Slide[];
  headline: string;
  highlight: string;
  subtitle: string;
  cta: string;
  callNow: string;
  phone: string;
  lang: string;
  stats: { value: string; label: string }[];
}

export default function HeroSlider({
  slides, headline, highlight, subtitle, cta, callNow, phone, lang, stats,
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, slides.length, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, slides.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Overlay oscuro para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Slide label badge */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20">
        <span className="px-4 py-1.5 rounded-full bg-blue-600/80 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase border border-blue-400/30">
          {slides[current]?.label}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-20 text-center w-full">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
          {headline}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1"
          >
            {cta} <ArrowRight size={20} />
          </Link>
          <a
            href="tel:+16787395229"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/20 transition-all"
          >
            <Phone size={20} className="text-blue-300" /> {phone}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <div className="text-3xl font-black text-blue-300 mb-1">{s.value}</div>
              <div className="text-gray-300 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white flex items-center justify-center hover:bg-white/30 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-8 h-2.5 bg-blue-400" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
