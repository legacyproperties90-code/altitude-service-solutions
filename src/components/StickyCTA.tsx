"use client";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function StickyCTA({ lang }: { lang: string }) {
  const isEs = lang === "es";
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden flex shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <a href="tel:+16787395229"
        className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-gray-900 text-white font-bold text-sm active:bg-gray-700 transition-colors">
        <Phone size={18} className="text-green-400 shrink-0" />
        {isEs ? "Llamar Ahora" : "Call Now"}
      </a>
      <div className="w-px bg-white/10" />
      <Link href={`/${lang}/contact#quote-form`}
        className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-blue-700 text-white font-bold text-sm active:bg-blue-800 transition-colors">
        <MessageSquare size={18} className="shrink-0" />
        {isEs ? "Cotización" : "Free Quote"}
      </Link>
    </div>
  );
}
