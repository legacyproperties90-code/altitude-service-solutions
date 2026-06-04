"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ lang }: { lang: string }) {
  const [pos, setPos]       = useState(50);
  const dragging            = useRef(false);
  const containerRef        = useRef<HTMLDivElement>(null);
  const isEs                = lang === "es";

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.min(95, Math.max(5, ((clientX - left) / width) * 100));
    setPos(pct);
  }, []);

  useEffect(() => {
    const onMove  = (e: MouseEvent)  => { if (dragging.current) updatePos(e.clientX); };
    const onUp    = ()               => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",  onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [updatePos]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {isEs ? "Resultados Reales" : "Real Results"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {isEs ? "La Diferencia " : "The "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              {isEs ? "Altitude" : "Altitude Difference"}
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {isEs
              ? "Arrastra el control para ver la transformación. Resultados reales, garantizados."
              : "Drag the handle to see the transformation. Real results, guaranteed."}
          </p>
        </div>

        {/* ── Slider ── */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/20 select-none"
            style={{ height: "min(400px, 70vw)" }}
            onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
            onTouchStart={(e) => updatePos(e.touches[0].clientX)}
            onTouchMove={(e)  => { e.preventDefault(); updatePos(e.touches[0].clientX); }}
          >
            {/* AFTER — right side (clean gutter): objectPosition 100% shows right half */}
            <div className="absolute inset-0">
              <Image src="/hero1.jpg" alt="After — clean gutter" fill className="object-cover"
                style={{ objectPosition: "100% center" }} sizes="100vw" />
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider">
                ✓ {isEs ? "DESPUÉS" : "AFTER"}
              </div>
            </div>

            {/* BEFORE — left side (dirty gutter): objectPosition 0% shows left half, clipped */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Image src="/hero1.jpg" alt="Before — clogged gutter" fill className="object-cover"
                style={{ objectPosition: "0% center" }} sizes="100vw" />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gray-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider backdrop-blur-sm">
                {isEs ? "ANTES" : "BEFORE"}
              </div>
            </div>

            {/* ── Divider line ── */}
            <div className="absolute top-0 bottom-0 z-10 pointer-events-none"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
              <div className="w-0.5 h-full bg-white shadow-[0_0_16px_rgba(0,0,0,0.6)]" />
            </div>

            {/* ── Drag handle ── */}
            <div
              className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-sky-500 cursor-ew-resize hover:scale-110 transition-transform"
              style={{ left: `${pos}%` }}
              onMouseDown={(e) => { e.stopPropagation(); dragging.current = true; }}
            >
              <MoveHorizontal size={22} className="text-sky-600" />
            </div>

            {/* ── Hint ── */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full font-medium">
                {isEs ? "← Arrastra para comparar →" : "← Drag to compare →"}
              </span>
            </div>
          </div>

          {/* Caption */}
          <div className="flex justify-between mt-4 px-2">
            <span className="text-gray-500 text-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
              {isEs ? "Antes — canaletas tapadas" : "Before — clogged gutters"}
            </span>
            <span className="text-sky-600 font-semibold text-sm flex items-center gap-1.5">
              {isEs ? "Después — limpieza profesional" : "After — professional cleaning"}
              <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
