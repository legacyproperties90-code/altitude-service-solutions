import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import type { Dictionary, Lang } from "@/lib/getDictionary";

export default function Footer({ lang, d }: { lang: Lang; d: Dictionary }) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center font-black text-white text-lg">A</div>
              <div>
                <div className="font-bold text-white text-sm">ALTITUDE SERVICE</div>
                <div className="font-bold text-blue-400 text-xs tracking-widest">SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{d.footer.desc}</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/altitudeservicesolutions" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.instagram.com/altitudeservicesolutions" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">{d.footer.residential}</h4>
            <ul className="space-y-2.5">
              {d.residential.services.map((s) => (
                <li key={s.id}>
                  <Link href={`/${lang}/residential#${s.id}`} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">{d.footer.commercial}</h4>
            <ul className="space-y-2.5">
              {d.commercial.services.map((s) => (
                <li key={s.id}>
                  <Link href={`/${lang}/commercial#${s.id}`} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">{d.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+16787395229" className="flex items-start gap-3 text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  <Phone size={16} className="mt-0.5 shrink-0 text-blue-400" />(678) 739-5229
                </a>
              </li>
              <li>
                <a href="mailto:info@altitudeservicesolutions.com" className="flex items-start gap-3 text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  <Mail size={16} className="mt-0.5 shrink-0 text-blue-400" />info@altitudeservicesolutions.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-blue-400" />Lawrenceville, Atlanta, GA
                </div>
              </li>
            </ul>
            <Link href={`/${lang}/contact`}
              className="mt-6 inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:from-blue-700 hover:to-blue-600 transition-all">
              {d.nav.getQuote}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Altitude Service Solutions, LLC. {d.footer.rights}</p>
          <p className="text-gray-600 text-xs">{d.footer.serving}</p>
        </div>
      </div>
    </footer>
  );
}
