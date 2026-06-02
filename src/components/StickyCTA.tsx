"use client";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function StickyCTA({ lang }: { lang: string }) {
  const isEs = lang === "es";
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-gray-200 shadow-2xl shadow-black/20 flex">
      <a href="tel:+16787395229"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-gray-900 text-white font-bold text-sm active:bg-gray-700 transition-colors">
        <Phone size={18} className="text-blue-400" />
        {isEs ? "Llamar" : "Call Now"}
      </a>
      <Link href={`/${lang}/contact`}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-800 text-white font-bold text-sm active:bg-blue-800 transition-colors">
        <MessageSquare size={18} />
        {isEs ? "Cotización Gratis" : "Free Quote"}
      </Link>
    </div>
  );
}
