"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo — horizontal: icono + nombre */}
          <Link href={`/${lang}`} className="flex items-center gap-3 group">
            {/* Ícono del logo (edificios) */}
            <div className="shrink-0 w-12 h-12 overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={120}
                height={120}
                className="w-[120px] h-[120px] object-cover object-top scale-[1.4] -translate-y-3"
                priority
              />
            </div>
            {/* Separador */}
            <div className="w-px h-10 bg-gray-200 shrink-0" />
            {/* Nombre */}
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors">
                ALTITUDE
              </span>
              <span className="font-semibold text-[10px] sm:text-xs tracking-[0.18em] text-blue-600 uppercase mt-0.5">
                Service Solutions, LLC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href={`/${lang}`} className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">{d.nav.home}</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
                {d.nav.residential} <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {resLinks.map((l) => (
                  <Link key={l.href} href={l.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 first:rounded-t-xl last:rounded-b-xl transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">
                {d.nav.commercial} <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {comLinks.map((l) => (
                  <Link key={l.href} href={l.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 first:rounded-t-xl last:rounded-b-xl transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href={`/${lang}/gallery`} className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">{d.nav.gallery}</Link>
            <Link href={`/${lang}/contact`} className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors">{d.nav.contact}</Link>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={switchPath}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 text-sm font-medium transition-all">
              <Globe size={14} /> {otherLang.toUpperCase()}
            </Link>
            <a href="tel:+16787395229" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              <Phone size={16} /> {d.nav.phone}
            </a>
            <Link href={`/${lang}/contact`}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-md shadow-blue-500/20">
              {d.nav.getQuote}
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-gray-700 p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-lg">
          <Link href={`/${lang}`} onClick={() => setOpen(false)} className="block text-gray-900 font-medium py-2">{d.nav.home}</Link>

          <div>
            <button onClick={() => setResOpen(!resOpen)} className="flex items-center justify-between w-full text-gray-900 font-medium py-2">
              {d.nav.residential} <ChevronDown size={16} className={`transition-transform text-gray-400 ${resOpen ? "rotate-180" : ""}`} />
            </button>
            {resOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {resLinks.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-500 py-1.5 text-sm hover:text-blue-600">{l.label}</Link>)}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setComOpen(!comOpen)} className="flex items-center justify-between w-full text-gray-900 font-medium py-2">
              {d.nav.commercial} <ChevronDown size={16} className={`transition-transform text-gray-400 ${comOpen ? "rotate-180" : ""}`} />
            </button>
            {comOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {comLinks.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-500 py-1.5 text-sm hover:text-blue-600">{l.label}</Link>)}
              </div>
            )}
          </div>

          <Link href={`/${lang}/gallery`} onClick={() => setOpen(false)} className="block text-gray-900 font-medium py-2">{d.nav.gallery}</Link>
          <Link href={`/${lang}/contact`} onClick={() => setOpen(false)} className="block text-gray-900 font-medium py-2">{d.nav.contact}</Link>

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <Link href={switchPath} onClick={() => setOpen(false)} className="flex items-center gap-2 text-gray-500 font-medium">
              <Globe size={16} /> {lang === "en" ? "Ver en Español" : "View in English"}
            </Link>
            <a href="tel:+16787395229" className="flex items-center gap-2 text-blue-600 font-medium">
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
