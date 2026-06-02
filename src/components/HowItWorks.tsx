import Link from "next/link";
import { ClipboardList, Truck, Sparkles, ArrowRight } from "lucide-react";

const steps = {
  en: [
    { icon: ClipboardList, num: "01", title: "Request a Free Quote",   desc: "Fill out our quick form or call us. We'll get back to you within 24 hours with a detailed, no-obligation estimate." },
    { icon: Truck,         num: "02", title: "We Show Up On Time",     desc: "Our professional team arrives at your property fully equipped, on schedule, and ready to deliver outstanding results." },
    { icon: Sparkles,      num: "03", title: "Your Property Shines",   desc: "Sit back and watch the transformation. We don't leave until you're 100% satisfied — guaranteed." },
  ],
  es: [
    { icon: ClipboardList, num: "01", title: "Solicita una Cotización", desc: "Completa nuestro formulario o llámanos. Te respondemos dentro de 24 horas con un estimado detallado y sin compromiso." },
    { icon: Truck,         num: "02", title: "Llegamos a Tiempo",       desc: "Nuestro equipo profesional llega a tu propiedad completamente equipado, puntual y listo para dar resultados excepcionales." },
    { icon: Sparkles,      num: "03", title: "Tu Propiedad Brilla",     desc: "Relájate y observa la transformación. No nos vamos hasta que estés 100% satisfecho — garantizado." },
  ],
};

export default function HowItWorks({ lang }: { lang: string }) {
  const isEs = lang === "es";
  const items = isEs ? steps.es : steps.en;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            {isEs ? "¿Cómo Funciona?" : "How It Works"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {isEs ? "Tan Fácil Como" : "As Easy As"}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              1 · 2 · 3
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {isEs
              ? "Hacemos que todo el proceso sea simple y sin estrés para ti."
              : "We make the entire process simple and stress-free for you."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" />

          {items.map((step, i) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
              {/* Number circle */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex flex-col items-center justify-center mb-6 shadow-xl shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <step.icon size={28} className="text-white mb-0.5" />
                <span className="text-white/60 text-[10px] font-bold tracking-widest">{step.num}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              {i < items.length - 1 && (
                <ArrowRight size={20} className="text-blue-300 mt-4 md:hidden" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold text-lg hover:from-blue-800 hover:to-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-700/20">
            {isEs ? "Empezar Ahora" : "Get Started Today"} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
