"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const residential = [
  "Soft Washing", "Pressure Washing", "House Washing",
  "Roof Cleaning", "Fence & Deck", "Gutter Cleaning", "Window Cleaning",
];
const commercial = [
  "Pressure Washing", "Soft Washing", "Parking Deck Cleaning",
  "High-Rise Window Cleaning", "Waterproofing",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [comOpen, setComOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center font-black text-white text-lg">
              A
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-white text-sm leading-tight">ALTITUDE SERVICE</div>
              <div className="font-bold text-blue-400 text-xs tracking-widest">SOLUTIONS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Home</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors">
                Residential <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#0F1F3D] border border-blue-900/40 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {residential.map((s) => (
                  <Link key={s} href={`/residential#${s.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-blue-900/30 first:rounded-t-xl last:rounded-b-xl transition-colors">
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors">
                Commercial <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#0F1F3D] border border-blue-900/40 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {commercial.map((s) => (
                  <Link key={s} href={`/commercial#${s.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-blue-900/30 first:rounded-t-xl last:rounded-b-xl transition-colors">
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Gallery</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+16787395229" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              <Phone size={16} /> (678) 739-5229
            </a>
            <Link href="/contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/25">
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0F1F3D] border-t border-blue-900/30 px-4 py-6 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block text-white font-medium py-2">Home</Link>

          <div>
            <button onClick={() => setResOpen(!resOpen)} className="flex items-center justify-between w-full text-white font-medium py-2">
              Residential <ChevronDown size={16} className={`transition-transform ${resOpen ? "rotate-180" : ""}`} />
            </button>
            {resOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {residential.map((s) => (
                  <Link key={s} href={`/residential#${s.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setOpen(false)}
                    className="block text-gray-300 py-1.5 text-sm hover:text-white">{s}</Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setComOpen(!comOpen)} className="flex items-center justify-between w-full text-white font-medium py-2">
              Commercial <ChevronDown size={16} className={`transition-transform ${comOpen ? "rotate-180" : ""}`} />
            </button>
            {comOpen && (
              <div className="pl-4 space-y-1 mt-1">
                {commercial.map((s) => (
                  <Link key={s} href={`/commercial#${s.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setOpen(false)}
                    className="block text-gray-300 py-1.5 text-sm hover:text-white">{s}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/gallery" onClick={() => setOpen(false)} className="block text-white font-medium py-2">Gallery</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-white font-medium py-2">Contact</Link>

          <div className="pt-4 border-t border-blue-900/30 space-y-3">
            <a href="tel:+16787395229" className="flex items-center gap-2 text-blue-400 font-medium">
              <Phone size={16} /> (678) 739-5229
            </a>
            <Link href="/contact" onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
