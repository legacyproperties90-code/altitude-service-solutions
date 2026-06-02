import { Shield, Star, Leaf, Clock, Award, Users } from "lucide-react";

const badges = [
  { icon: Shield,  en: "Fully Insured & Licensed",    es: "Totalmente Asegurados" },
  { icon: Star,    en: "5-Star Rated on Google",       es: "Calificación 5 Estrellas" },
  { icon: Leaf,    en: "Eco-Friendly Solutions",        es: "Soluciones Ecológicas" },
  { icon: Clock,   en: "Same-Week Scheduling",         es: "Programación Inmediata" },
  { icon: Award,   en: "100% Satisfaction Guarantee",  es: "100% Garantizado" },
  { icon: Users,   en: "500+ Happy Clients",           es: "500+ Clientes Felices" },
];

export default function TrustBadges({ lang }: { lang: string }) {
  return (
    <section className="bg-blue-700 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map((b) => (
            <div key={b.en} className="flex items-center gap-2.5 justify-center sm:justify-start">
              <b.icon size={18} className="text-blue-200 shrink-0" />
              <span className="text-white text-xs font-medium leading-tight">
                {lang === "es" ? b.es : b.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
