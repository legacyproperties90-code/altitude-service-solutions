import Link from "next/link";
import { Shield, Star, Clock, Award, ArrowRight, ThumbsUp } from "lucide-react";

export default function OurPromise({ lang }: { lang: string }) {
  const isEs = lang === "es";

  const promises = isEs ? [
    { icon: Shield,    color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20",  title: "100% Asegurados",         desc: "Cobertura completa de responsabilidad en cada trabajo. Tu propiedad siempre protegida." },
    { icon: Star,      color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", title: "Calificación 5 Estrellas", desc: "47 reseñas verificadas en Google. La satisfacción de nuestros clientes lo dice todo." },
    { icon: Clock,     color: "text-sky-400",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    title: "Respuesta en 24 Horas",    desc: "Te respondemos el mismo día. Programación flexible incluyendo fines de semana." },
    { icon: ThumbsUp,  color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   title: "Garantía de Satisfacción", desc: "Si no quedas satisfecho, regresamos sin costo adicional. Sin excusas, sin letra pequeña." },
    { icon: Award,     color: "text-amber-400",  bg: "bg-amber-500/10",  border: "border-amber-500/20",  title: "15+ Años de Experiencia",  desc: "Más de 500 propiedades transformadas en Atlanta, Lawrenceville y toda el área norte de Georgia." },
    { icon: Shield,    color: "text-emerald-400",bg: "bg-emerald-500/10",border: "border-emerald-500/20",title: "Productos Ecológicos",      desc: "Soluciones biodegradables que son seguras para tu familia, mascotas y el medio ambiente." },
  ] : [
    { icon: Shield,    color: "text-green-400",  bg: "bg-green-500/10",  border: "border-green-500/20",  title: "Fully Insured",            desc: "Complete liability coverage on every job. Your property is always protected." },
    { icon: Star,      color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20", title: "5-Star Rated",             desc: "47 verified Google reviews. Our clients' satisfaction speaks for itself." },
    { icon: Clock,     color: "text-sky-400",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    title: "24-Hour Response",         desc: "We respond the same day. Flexible scheduling including weekends." },
    { icon: ThumbsUp,  color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   title: "Satisfaction Guarantee",   desc: "Not satisfied? We come back at no charge. No excuses, no fine print." },
    { icon: Award,     color: "text-amber-400",  bg: "bg-amber-500/10",  border: "border-amber-500/20",  title: "15+ Years Experience",     desc: "500+ properties transformed across Atlanta, Lawrenceville & North Georgia." },
    { icon: Shield,    color: "text-emerald-400",bg: "bg-emerald-500/10",border: "border-emerald-500/20",title: "Eco-Friendly Products",    desc: "Biodegradable solutions safe for your family, pets and the environment." },
  ];

  return (
    <section className="py-20 bg-[#060d1f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 font-semibold text-xs tracking-[0.2em] uppercase">
              {isEs ? "Nuestra Promesa" : "Our Promise"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {isEs ? "Por Qué Confiar en " : "Why Trust "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Altitude
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {isEs
              ? "No solo limpiamos — nos comprometemos con resultados que transforman tu propiedad."
              : "We don't just clean — we commit to results that transform your property."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {promises.map((p, i) => (
            <div key={i} className={`group border ${p.border} ${p.bg} rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <p.icon size={24} className={p.color} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href={`/${lang}/contact#quote-form`}
            className="btn-arrow btn-glow inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white font-bold text-lg hover:from-sky-400 hover:to-blue-600 transition-all hover:-translate-y-1 shadow-xl shadow-blue-700/30">
            {isEs ? "Solicitar Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
