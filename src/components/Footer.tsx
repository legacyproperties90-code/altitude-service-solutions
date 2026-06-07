import Link from "next/link";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import type { Dictionary, Lang } from "@/lib/getDictionary";

const cities = {
  en: ["Atlanta","Lawrenceville","Duluth","Norcross","Buford","Suwanee","Dacula","Snellville","Peachtree Corners","Sugar Hill","Lilburn","Loganville","Alpharetta","Johns Creek","Cumming","Gainesville"],
  es: ["Atlanta","Lawrenceville","Duluth","Norcross","Buford","Suwanee","Dacula","Snellville","Peachtree Corners","Sugar Hill","Lilburn","Loganville","Alpharetta","Johns Creek","Cumming","Gainesville"],
};

const serviceLinks = {
  en: [
    { label: "Pressure Washing",    slug: "pressure-washing" },
    { label: "Soft Washing",         slug: "soft-washing" },
    { label: "House Washing",        slug: "house-washing" },
    { label: "Roof Cleaning",        slug: "roof-cleaning" },
    { label: "Gutter Cleaning",      slug: "gutter-cleaning" },
    { label: "Fence & Deck Cleaning",slug: "fence-deck-cleaning" },
  ],
  es: [
    { label: "Lavado a Presión",      slug: "pressure-washing" },
    { label: "Lavado Suave",          slug: "soft-washing" },
    { label: "Lavado de Casas",       slug: "house-washing" },
    { label: "Limpieza de Techos",    slug: "roof-cleaning" },
    { label: "Limpieza de Canaletas", slug: "gutter-cleaning" },
    { label: "Cercas y Terrazas",     slug: "fence-deck-cleaning" },
  ],
};

export default function Footer({ lang, d }: { lang: Lang; d: Dictionary }) {
  const isEs = lang === "es";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#040a18]">

      {/* Top bar — stats */}
      <div className="border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+",   label: isEs ? "Clientes Satisfechos" : "Happy Clients" },
              { value: "15+",    label: isEs ? "Años de Experiencia" : "Years Experience" },
              { value: "⭐ 5.0", label: isEs ? "Google Rating" : "Google Rating" },
              { value: "100%",   label: isEs ? "Satisfacción Garantizada" : "Satisfaction Guaranteed" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-sky-400">{s.value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand — 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center font-black text-white text-lg shrink-0">A</div>
              <div>
                <div className="font-bold text-white text-sm">ALTITUDE SERVICE</div>
                <div className="font-bold text-sky-400 text-xs tracking-widest">SOLUTIONS, LLC</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              {isEs
                ? "Servicios profesionales de limpieza exterior en Atlanta, GA. Totalmente asegurados, licenciados y con 100% de satisfacción garantizada."
                : "Professional exterior cleaning services in Atlanta, GA. Fully insured, licensed, and 100% satisfaction guaranteed."}
            </p>

            {/* Google rating — no fake count */}
            <div className="flex items-center gap-2 mb-5 p-3 bg-white/4 rounded-xl border border-white/5 w-fit">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-white text-xs font-bold">5.0</span>
              <span className="text-gray-500 text-xs">Google</span>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5">
              {[
                { href: "https://www.facebook.com/altitudeservicesolutions", label: "Facebook", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, hover: "hover:bg-blue-800" },
                { href: "https://www.instagram.com/altitudeservicesolutions", label: "Instagram", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, hover: "hover:bg-pink-600" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className={`w-9 h-9 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center text-gray-400 ${s.hover} hover:text-white transition-all`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {isEs ? "Servicios" : "Services"}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks[isEs ? "es" : "en"].map((s) => (
                <li key={s.slug}>
                  <Link href={`/${lang}/services/${s.slug}`}
                    className="text-gray-500 hover:text-sky-400 text-sm transition-colors leading-tight block">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Residential / Commercial collapsed */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              {d.footer.residential}
            </h4>
            <ul className="space-y-2.5 mb-6">
              {d.residential.services.map((s) => (
                <li key={s.id}>
                  <Link href={`/${lang}/residential#${s.id}`}
                    className="text-gray-500 hover:text-sky-400 text-sm transition-colors leading-tight block">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {d.footer.commercial}
            </h4>
            <ul className="space-y-2.5">
              {d.commercial.services.map((s) => (
                <li key={s.id}>
                  <Link href={`/${lang}/commercial#${s.id}`}
                    className="text-gray-500 hover:text-sky-400 text-sm transition-colors leading-tight block">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {d.footer.contactUs}
            </h4>
            <ul className="space-y-3.5 mb-6">
              <li>
                <a href="tel:+16787395229" className="flex items-center gap-2.5 text-gray-500 hover:text-sky-400 text-sm transition-colors">
                  <Phone size={14} className="text-sky-500 shrink-0" /> (678) 739-5229
                </a>
              </li>
              <li>
                <a href="mailto:info@altitudess.net" className="flex items-start gap-2.5 text-gray-500 hover:text-sky-400 text-xs transition-colors break-all">
                  <Mail size={14} className="text-sky-500 shrink-0 mt-0.5" /> info@altitudess.net
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-gray-500 text-sm">
                  <MapPin size={14} className="text-sky-500 shrink-0 mt-0.5" /> Lawrenceville, GA
                </div>
              </li>
            </ul>

            {/* Service cities */}
            <div>
              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider mb-2">
                {isEs ? "Áreas de Servicio" : "Service Areas"}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cities[isEs ? "es" : "en"].map((c) => (
                  <span key={c} className="text-gray-600 text-[11px] bg-white/4 px-2 py-0.5 rounded-full border border-white/5">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © {year} Altitude Service Solutions, LLC. {d.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href={`/${lang}/privacy`} className="text-gray-600 hover:text-sky-400 text-xs transition-colors">
              {isEs ? "Privacidad" : "Privacy Policy"}
            </Link>
            <span className="text-gray-700 text-xs">·</span>
            <Link href={`/${lang}/terms`} className="text-gray-600 hover:text-sky-400 text-xs transition-colors">
              {isEs ? "Términos" : "Terms & Conditions"}
            </Link>
            <span className="text-gray-700 text-xs">·</span>
            <span className="text-gray-600 text-xs">{isEs ? "Hecho con ❤️ en Atlanta, GA" : "Made with ❤️ in Atlanta, GA"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
