"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import type { Dictionary, Lang } from "@/lib/getDictionary";

interface CinematicIntroProps {
  lang: Lang;
  d: Dictionary;
}

interface SceneContent {
  video: string;
  label?: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  desc?: string;
}

const VH_PER_SCENE = 130;

export default function CinematicIntro({ lang, d }: CinematicIntroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const fillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [shouldLoad, setShouldLoad] = useState<boolean[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [chromeVisible, setChromeVisible] = useState(true);

  const scenes: SceneContent[] = [
    {
      video: "/cinematic/hero.mp4",
      title: d.hero.title,
      titleHighlight: d.hero.titleHighlight,
      subtitle: d.hero.subtitle,
    },
    { video: "/cinematic/pressure.mp4", ...d.cinematic.scenes[0] },
    { video: "/cinematic/soft-washing.mp4", ...d.cinematic.scenes[1] },
    { video: "/cinematic/gutter.mp4", ...d.cinematic.scenes[2] },
    { video: "/cinematic/final.mp4", ...d.cinematic.scenes[3] },
  ];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    setShouldLoad(scenes.map((_, i) => i === 0));
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const rootTop = rect.top + window.scrollY;
    const rootHeight = root.offsetHeight;
    const viewportH = window.innerHeight;
    const range = Math.max(1, rootHeight - viewportH);
    const raw = Math.min(1, Math.max(0, (window.scrollY - rootTop) / range));

    setProgressPct(raw * 100);
    setChromeVisible(rect.bottom > 0 && rect.top < viewportH);

    const scaled = raw * scenes.length;
    const idx = Math.min(scenes.length - 1, Math.floor(scaled));
    const local = scaled - idx;

    setActiveIndex((prev) => (prev === idx ? prev : idx));

    scenes.forEach((_, i) => {
      const el = textRefs.current[i];
      if (!el) return;
      let opacity = 0;
      if (i === idx) {
        opacity = local < 0.12 ? local / 0.12 : local > 0.82 ? Math.max(0, (1 - local) / 0.18) : 1;
      }
      el.style.opacity = String(opacity);
      el.style.transform = `translateY(${(1 - opacity) * 16}px)`;
    });

    fillRefs.current.forEach((el) => {
      if (el) el.style.width = `${raw * 100}%`;
    });

    setShouldLoad((prevState) => {
      const next = [...prevState];
      let changed = false;
      for (let i = idx; i <= Math.min(scenes.length - 1, idx + 1); i++) {
        if (!next[i]) {
          next[i] = true;
          changed = true;
        }
      }
      return changed ? next : prevState;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    handler();
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [onScroll, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === activeIndex) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [activeIndex, reducedMotion]);

  if (reducedMotion) {
    return (
      <section className="relative">
        {scenes.map((scene, i) => (
          <div
            key={i}
            className="relative min-h-[70vh] flex items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${scene.video.replace(".mp4", "-poster.jpg")})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            <SceneText scene={scene} lang={lang} d={d} isHero={i === 0} />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section ref={rootRef} className="relative bg-black" style={{ height: `${scenes.length * VH_PER_SCENE}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Videos, crossfaded */}
        {scenes.map((scene, i) => (
          <video
            key={scene.video}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "none"}
            poster={scene.video.replace(".mp4", "-poster.jpg")}
            src={shouldLoad[i] ? scene.video : undefined}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
            style={{ opacity: activeIndex === i ? 1 : 0, zIndex: activeIndex === i ? 1 : 0 }}
          />
        ))}

        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/50 z-[2]" />

        {/* Text overlays */}
        {scenes.map((scene, i) => (
          <div
            key={`text-${i}`}
            ref={(el) => {
              textRefs.current[i] = el;
            }}
            className="absolute inset-0 z-[3] flex items-end sm:items-center pointer-events-none"
            style={{ opacity: i === 0 ? 1 : 0, transition: "opacity 0.1s linear" }}
          >
            <SceneText scene={scene} lang={lang} d={d} isHero={i === 0} />
          </div>
        ))}

        {/* Chrome: letterbox + nav + progress */}
        <div
          className="pointer-events-none absolute inset-0 z-[4] transition-opacity duration-300"
          style={{ opacity: chromeVisible ? 1 : 0 }}
        >
          <div className="absolute top-0 left-0 right-0 h-3 sm:h-6 bg-black" />
          <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-6 bg-black" />

          <div className="absolute top-6 sm:top-9 left-4 sm:left-8 flex items-center gap-2">
            <span className="font-black tracking-tight text-white text-sm sm:text-base">ALTITUDE</span>
            <span className="hidden sm:inline text-white/50 text-xs tracking-[0.2em] uppercase">Service Solutions</span>
          </div>

          <div className="absolute bottom-6 sm:bottom-9 left-4 sm:left-8 right-4 sm:right-8 flex items-center gap-3">
            <div className="flex-1 h-[2px] bg-white/25 rounded-full overflow-hidden">
              <div
                ref={(el) => {
                  fillRefs.current[0] = el;
                }}
                className="h-full bg-sky-400"
                style={{ width: "0%" }}
              />
            </div>
            <span className="text-white/70 text-[11px] tracking-widest tabular-nums w-10 text-right">
              {Math.round(progressPct)}%
            </span>
          </div>

          <div className="absolute bottom-6 sm:bottom-9 right-4 sm:right-8 hidden sm:block">
            <span className="text-white/50 text-[11px] tracking-[0.3em] uppercase">{d.cinematic.scrollHint}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneText({ scene, lang, d, isHero }: { scene: SceneContent; lang: Lang; d: Dictionary; isHero: boolean }) {
  return (
    <div className="relative z-10 w-full px-5 sm:px-10 pb-16 sm:pb-0 max-w-5xl mx-auto sm:text-center">
      {scene.label && (
        <p className="text-sky-300 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 sm:mb-4">
          {scene.label}
        </p>
      )}
      <h2
        className="text-3xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-3 sm:mb-5"
        style={{ textShadow: "0 2px 30px rgba(0,0,0,0.9)" }}
      >
        {scene.title}
        <br className="hidden sm:block" /> <span className="text-sky-300">{scene.titleHighlight}</span>
      </h2>
      <p
        className="text-base sm:text-2xl text-white/90 italic font-medium max-w-2xl sm:mx-auto mb-2 sm:mb-4"
        style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
      >
        {scene.subtitle}
      </p>
      {scene.desc && (
        <p className="text-sm sm:text-base text-white/70 max-w-xl sm:mx-auto leading-relaxed">{scene.desc}</p>
      )}

      {isHero && (
        <div className="pointer-events-auto flex flex-col sm:flex-row gap-3 justify-center mt-6 sm:mt-8">
          <Link
            href={`/${lang}/contact#quote-form`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 text-white font-bold text-base hover:-translate-y-0.5 transition-all shadow-xl shadow-blue-700/40"
          >
            {d.hero.cta} <ArrowRight size={18} />
          </Link>
          <a
            href="tel:+16787395229"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/60 bg-black/30 backdrop-blur-sm text-white font-bold text-base hover:bg-black/50 transition-all"
          >
            <Phone size={18} className="text-sky-300" /> {d.nav.phone}
          </a>
        </div>
      )}
    </div>
  );
}
