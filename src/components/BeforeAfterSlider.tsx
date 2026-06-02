"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ lang }: { lang: string }) {
  const [pos, setPos]       = useState(50);
  const [dragging, setDrag] = useState(false);
  const ref                 = useRef<HTMLDivElement>(null);
  const isEs                = lang === "es";

  const move = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(5, Math.min(clientX - rect.left, rect.width - 5));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseMove  = useCallback((e: React.MouseEvent)  => { if (dragging) move(e.clientX); }, [dragging, move]);
  const onTouchMove  = useCallback((e: React.TouchEvent)  => { move(e.touches[0].clientX); },  [move]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {isEs ? "Nuestros Resultados" : "Our Results"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {isEs ? "La Diferencia Altitude" : "The Altitude Difference"}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {isEs
              ? "Arrastra el divisor para ver la transformación. Resultados reales, clientes reales."
              : "Drag the divider to see the transformation. Real results, real clients."}
          </p>
        </div>

        {/* Slider */}
        <div
          ref={ref}
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/15 cursor-ew-resize select-none aspect-[16/9]"
          onMouseMove={onMouseMove}
          onMouseDown={() => setDrag(true)}
          onMouseUp={() => setDrag(false)}
          onMouseLeave={() => setDrag(false)}
          onTouchMove={onTouchMove}
        >
          {/* AFTER — clean (full image, right side of hero1) */}
          <div className="absolute inset-0">
            <Image src="/hero1.jpg" alt="After cleaning" fill className="object-cover"
              style={{ objectPosition: "100% 50%" }} priority />
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide shadow-lg">
              ✓ {isEs ? "DESPUÉS" : "AFTER"}
            </div>
          </div>

          {/* BEFORE — dirty (left side of hero1), clipped */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image src="/hero1.jpg" alt="Before cleaning" fill className="object-cover"
              style={{ objectPosition: "0% 50%" }} priority />
            <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide shadow-lg">
              {isEs ? "ANTES" : "BEFORE"}
            </div>
          </div>

          {/* Divider line */}
          <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
            style={{ left: `${pos}%` }}>
            {/* Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-blue-600">
              <MoveHorizontal size={20} className="text-blue-600" />
            </div>
          </div>

          {/* Hint text (fades after first interaction) */}
          {pos === 50 && (
            <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none z-20">
              <span className="bg-black/50 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm">
                {isEs ? "← Arrastra para comparar →" : "← Drag to compare →"}
              </span>
            </div>
          )}
        </div>

        <p className="text-center text-gray-400 text-sm mt-5">
          {isEs ? "Limpieza de canaletas — Lawrenceville, GA" : "Gutter Cleaning — Lawrenceville, GA"}
        </p>
      </div>
    </section>
  );
}
