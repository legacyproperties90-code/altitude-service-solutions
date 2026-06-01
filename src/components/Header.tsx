"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, Globe } from "lucide-react";
import type { Dictionary, Lang } from "@/lib/getDictionary";

export default function Header({ lang, d }: { lang: Lang; d: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [comOpen, setComOpen] = useState(false);
  const pathname = usePathname();

  const otherLang: Lang = lang === "en" ? "es" : "en";
  const switchPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const resLinks = d.residential.services.map((s) => ({ label: s.title, href: `/${lang}/residential#${s.id}` }));
  const comLinks = d.commercial.services.map((s) => ({ label: s.title, href: `/${lang}/commercial#${s.id}` }));

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center font-black text-white text-lg">A</div>
            <div className="hidden sm:block">
              <div className="font-bold text-white text-sm leading-tight">ALTITUDE SERVICE</div>
              <div className="font-bold text-blue-400 text-xs tracking-widest">SOLUTIONS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href={`/${lang}`} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">{d.nav.home}</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors">
                {d.nav.residential} <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#0F1F3D] border border-blue-900/40 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {resLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-blue-900/30 first:rounded-t-xl last:rounded-b-xl transition-colors">{l.label}</Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors">
                {d.nav.commercial} <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-60 bg-[#0F1F3D] border border-blue-900/40 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {comLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-blue-900/30 first:rounded-t-xl last:rounded-b-xl transition-colors">{l.label}</Link>
                ))}
              </div>
            </div>

            <Link href={`/${lang}/gallery`} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">{d.nav.gallery}</Link>
            <Link href={`/${lang}/contact`} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">{d.nav.contact}</Link>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <Link href={switchPath}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-800/50 text-gray-400 hover:text-white hover:border-blue-600 text-sm font-medium transition-all">
              <Globe size={14} />
              {otherLang.toUpperCase()}
            </Link>
            <a href="tel:+16787395229" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              <Phone size={16} /> {d.nav.phone}
            </a>
            <Link href={`/${lang}/contact`}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25">
              {d.nav.getQuote}
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0F1F3D] border-t border-blue-900/30 px-4 py-6 space-y-4">
          <Link href={`/${lang}`} onClick={() => setOpen(false)} className="block text-white font-medium py-2">{d.nav.home}</Link>

          <div>
            <button onClick={() => setResOpen(!resOpen)} className="flex items-center justify-between w-full text-white font-medium py-2">
              {d.nav.residential} <ChevronDown size={16} className={`transition-transform ${resOpen ? "rotate-180" : ""}`} />
            </button>
            {resOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {resLinks.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-300 py-1.5 text-sm hover:text-white">{l.label}</Link>)}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setComOpen(!comOpen)} className="flex items-center justify-between w-full text-white font-medium py-2">
              {d.nav.commercial} <ChevronDown size={16} className={`transition-transform ${comOpen ? "rotate-180" : ""}`} />
            </button>
            {comOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {comLinks.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-300 py-1.5 text-sm hover:text-white">{l.label}</Link>)}
              </div>
            )}
          </div>

          <Link href={`/${lang}/gallery`} onClick={() => setOpen(false)} className="block text-white font-medium py-2">{d.nav.gallery}</Link>
          <Link href={`/${lang}/contact`} onClick={() => setOpen(false)} className="block text-white font-medium py-2">{d.nav.contact}</Link>

          <div className="pt-4 border-t border-blue-900/30 space-y-3">
            <Link href={switchPath} onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-gray-400 font-medium">
              <Globe size={16} /> {lang === "en" ? "Ver en Español" : "View in English"}
            </Link>
            <a href="tel:+16787395229" className="flex items-center gap-2 text-blue-400 font-medium">
              <Phone size={16} /> {d.nav.phone}
            </a>
            <Link href={`/${lang}/contact`} onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold">
              {d.nav.getQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
