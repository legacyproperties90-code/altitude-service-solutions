import Link from "next/link";
import { ClipboardList, Truck, Sparkles, ArrowRight, Phone } from "lucide-react";

const steps = {
  en: [
    {
      num: "01",
      icon: ClipboardList,
      title: "Request a Free Quote",
      desc: "Fill out our quick form or give us a call. We respond within 24 hours with a detailed, no-obligation estimate tailored to your property.",
      accent: "from-blue-500 to-blue-800",
      glow: "shadow-blue-600/30",
      border: "border-blue-500/20",
      label: "Step One",
    },
    {
      num: "02",
      icon: Truck,
      title: "We Show Up On Time",
      desc: "Our professional team arrives fully equipped and on schedule. No surprises, no delays — just skilled technicians ready to deliver.",
      accent: "from-sky-400 to-blue-500",
      glow: "shadow-sky-400/30",
      border: "border-sky-400/20",
      label: "Step Two",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Your Property Shines",
      desc: "Watch the transformation happen before your eyes. We don't leave until you're 100% satisfied — that's our guarantee, every single time.",
      accent: "from-cyan-400 to-sky-500",
      glow: "shadow-cyan-400/30",
      border: "border-cyan-400/20",
      label: "Step Three",
    },
  ],
  es: [
    {
      num: "01",
      icon: ClipboardList,
      title: "Solicita tu Cotización",
      desc: "Completa nuestro formulario o llámanos. Respondemos en 24 horas con un estimado detallado y sin compromiso, personalizado para tu propiedad.",
      accent: "from-blue-500 to-blue-800",
      glow: "shadow-blue-600/30",
      border: "border-blue-500/20",
      label: "Paso Uno",
    },
    {
      num: "02",
      icon: Truck,
      title: "Llegamos a Tiempo",
      desc: "Nuestro equipo profesional llega completamente equipado y puntual. Sin sorpresas, sin demoras — solo técnicos expertos listos para trabajar.",
      accent: "from-sky-400 to-blue-500",
      glow: "shadow-sky-400/30",
      border: "border-sky-400/20",
      label: "Paso Dos",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Tu Propiedad Brilla",
      desc: "Observa la transformación con tus propios ojos. No nos vamos hasta que estés 100% satisfecho — es nuestra garantía en cada trabajo.",
      accent: "from-cyan-400 to-sky-500",
      glow: "shadow-cyan-400/30",
      border: "border-cyan-400/20",
      label: "Paso Tres",
    },
  ],
};

export default function HowItWorks({ lang }: { lang: string }) {
  const isEs = lang === "es";
  const items = isEs ? steps.es : steps.en;

  return (
    <section className="relative py-24 overflow-hidden bg-[#060d1f]">

      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-800/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 font-semibold text-xs tracking-[0.2em] uppercase">
              {isEs ? "Cómo Funciona" : "How It Works"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            {isEs ? "Tan Simple Como" : "As Simple As"}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              1 · 2 · 3
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {isEs
              ? "Hacemos que todo el proceso sea transparente, rápido y sin estrés."
              : "We make the entire process transparent, fast, and completely stress-free."}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">

          {items.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative group">

                {/* Arrow connector (desktop) */}
                {i < items.length - 1 && (
                  <div className="hidden md:flex absolute top-16 -right-4 lg:-right-5 z-20 items-center">
                    <ArrowRight size={20} className="text-gray-600 group-hover:text-sky-400 transition-colors duration-300" />
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full rounded-2xl border ${step.border} bg-white/4 backdrop-blur-sm p-8 hover:bg-white/7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${step.glow} overflow-hidden`}>

                  {/* Giant background number */}
                  <div className="absolute -top-4 -right-2 text-[110px] font-black text-white/3 leading-none select-none pointer-events-none">
                    {step.num}
                  </div>

                  {/* Step label pill */}
                  <div className="inline-flex items-center gap-1.5 mb-6">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.accent}`} />
                    <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">{step.label}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center mb-6 shadow-lg ${step.glow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <h3 className="text-white font-bold text-xl mb-3 leading-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.desc}</p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-800 text-white font-bold text-lg hover:from-sky-400 hover:to-blue-500 transition-all hover:-translate-y-1 shadow-xl shadow-blue-700/30">
            {isEs ? "Empezar Ahora" : "Get Started Today"} <ArrowRight size={20} />
          </Link>
          <a href="tel:+16787395229"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl border border-white/15 text-white font-semibold text-lg hover:bg-white/8 transition-all">
            <Phone size={18} className="text-sky-400" /> (678) 739-5229
          </a>
        </div>

        {/* Trust note */}
        <p className="text-center text-gray-600 text-sm mt-6">
          {isEs
            ? "✓ Sin compromiso  ·  ✓ Respuesta en 24h  ·  ✓ 100% Garantizado"
            : "✓ No obligation  ·  ✓ Response within 24h  ·  ✓ 100% Guaranteed"}
        </p>
      </div>
    </section>
  );
}
