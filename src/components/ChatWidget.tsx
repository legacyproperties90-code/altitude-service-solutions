"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MessageCircle, ChevronRight, Phone, Star } from "lucide-react";

type Lang = "en" | "es";

const copy = {
  en: {
    greeting: "Hi! 👋 Welcome to Altitude Service Solutions!",
    subGreeting: "How can I help you today?",
    options: [
      { id: "quote",    label: "🏠 Get a Free Quote",    reply: "I'd love to help! Fill out our quick form and we'll get back to you within 24 hours.",                                         action: "link",    href: "/en/contact" },
      { id: "services", label: "🧹 See Our Services",    reply: "We offer Pressure Washing, Soft Washing, Roof Cleaning, House Washing, Gutter Cleaning & Window Cleaning.",                   action: "submenu", sub: "services" },
      { id: "call",     label: "📞 Call Us Now",         reply: "Perfect! Give us a call at (678) 739-5229 — available Mon–Fri 8am–6pm, Sat 8am–4pm.",                                        action: "tel" },
      { id: "areas",    label: "📍 Service Areas",       reply: "We serve Atlanta, Lawrenceville, Duluth, Norcross, Buford, Suwanee and all surrounding North Georgia areas.",                 action: "text" },
    ],
    services: [
      { label: "🏠 Residential Services", href: "/en/residential" },
      { label: "🏢 Commercial Services",  href: "/en/commercial" },
      { label: "🖼 View Our Gallery",     href: "/en/gallery" },
    ],
    backLabel:    "← Back",
    badgeLabel:   "Typically replies instantly",
    restartLabel: "Ask something else",
  },
  es: {
    greeting: "¡Hola! 👋 ¡Bienvenido a Altitude Service Solutions!",
    subGreeting: "¿En qué puedo ayudarte hoy?",
    options: [
      { id: "quote",    label: "🏠 Solicitar Cotización Gratis", reply: "¡Con gusto te ayudo! Completa nuestro formulario y te contactamos en menos de 24 horas.",                             action: "link",    href: "/es/contact" },
      { id: "services", label: "🧹 Ver Nuestros Servicios",      reply: "Ofrecemos Lavado a Presión, Soft Washing, Limpieza de Techos, Lavado de Casas, Canaletas y Ventanas.",               action: "submenu", sub: "services" },
      { id: "call",     label: "📞 Llamar Ahora",                reply: "¡Perfecto! Llámanos al (678) 739-5229 — disponibles Lun–Vie 8am–6pm, Sáb 8am–4pm.",                                 action: "tel" },
      { id: "areas",    label: "📍 Áreas de Servicio",           reply: "Servimos a Atlanta, Lawrenceville, Duluth, Norcross, Buford, Suwanee y todas las áreas del norte de Georgia.",      action: "text" },
    ],
    services: [
      { label: "🏠 Servicios Residenciales", href: "/es/residential" },
      { label: "🏢 Servicios Comerciales",   href: "/es/commercial" },
      { label: "🖼 Ver Galería",             href: "/es/gallery" },
    ],
    backLabel:    "← Volver",
    badgeLabel:   "Responde al instante",
    restartLabel: "Hacer otra pregunta",
  },
};

type Message = { from: "bot" | "user"; text: string };

export default function ChatWidget({ lang }: { lang: Lang }) {
  const t = copy[lang] ?? copy.en;
  const [open, setOpen]         = useState(false);
  const [ready, setReady]       = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep]         = useState<"options" | "services" | "done">("options");
  const [typing, setTyping]     = useState(false);
  const bottomRef               = useRef<HTMLDivElement>(null);

  // Mostrar widget después de 1s y abrir automáticamente después de 3s
  useEffect(() => {
    const t1 = setTimeout(() => setReady(true), 1000);
    const t2 = setTimeout(() => setOpen(true),  3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Poner los mensajes de bienvenida la primera vez que se abre
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { from: "bot", text: t.greeting },
        { from: "bot", text: t.subGreeting },
      ]);
    }
  }, [open, messages.length, t.greeting, t.subGreeting]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addBotReply = (text: string, delay = 900) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text }]);
    }, delay);
  };

  const handleOption = (opt: typeof t.options[0]) => {
    setMessages((m) => [...m, { from: "user", text: opt.label }]);
    if (opt.action === "submenu") {
      addBotReply(opt.reply);
      setTimeout(() => setStep("services"), 1100);
    } else if (opt.action === "tel") {
      addBotReply(opt.reply);
      setTimeout(() => { window.location.href = "tel:+16787395229"; }, 1300);
      setStep("done");
    } else {
      addBotReply(opt.reply);
      setStep("done");
    }
  };

  const restart = () => {
    setStep("options");
    setMessages((m) => [...m, { from: "bot", text: t.subGreeting }]);
  };

  if (!ready) return null;

  return (
    <>
      {/* ── Ventana del chat ── */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[370px] bg-white rounded-2xl shadow-2xl shadow-black/25 border border-gray-100 flex flex-col overflow-hidden"
          style={{ animation: "slideUp 0.35s ease-out" }}>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-3 flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-white flex items-center justify-center border-2 border-white/30">
                <Image src="/logo.png" alt="Altitude" width={44} height={44} className="object-contain scale-110" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-700" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm leading-tight">Altitude Assistant</div>
              <div className="text-blue-200 text-xs flex items-center gap-1 mt-0.5">
                <Star size={9} className="fill-yellow-300 text-yellow-300 shrink-0" />
                {t.badgeLabel}
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors p-1 shrink-0">
              <X size={18} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="overflow-y-auto px-4 py-4 space-y-3 max-h-64 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                {msg.from === "bot" && (
                  <div className="w-7 h-7 rounded-full overflow-hidden bg-white border border-gray-200 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    <Image src="/logo.png" alt="" width={28} height={28} className="object-contain" />
                  </div>
                )}
                <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-snug ${
                  msg.from === "bot"
                    ? "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm"
                    : "bg-blue-600 text-white rounded-tr-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-white border border-gray-200 flex items-center justify-center shrink-0">
                  <Image src="/logo.png" alt="" width={28} height={28} className="object-contain" />
                </div>
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1">
                    {[0,1,2].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Opciones */}
          <div className="px-3 py-3 border-t border-gray-100 bg-white space-y-1.5">
            {step === "options" && t.options.map((opt) => (
              <button key={opt.id} onClick={() => handleOption(opt)}
                className="w-full text-left px-3.5 py-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 text-sm font-medium transition-all flex items-center justify-between group">
                {opt.label}
                <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-500 shrink-0" />
              </button>
            ))}

            {step === "services" && (
              <>
                {t.services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 text-sm font-medium transition-all group">
                    {s.label}
                    <ChevronRight size={14} className="text-gray-400 group-hover:text-blue-500 shrink-0" />
                  </Link>
                ))}
                <button onClick={restart} className="w-full text-center text-xs text-blue-500 hover:text-blue-700 py-1.5 transition-colors">
                  {t.backLabel}
                </button>
              </>
            )}

            {step === "done" && (
              <div className="space-y-1.5">
                <a href="tel:+16787395229"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all">
                  <Phone size={15} /> (678) 739-5229
                </a>
                <Link href={`/${lang}/contact`} onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-2.5 rounded-xl border-2 border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-all">
                  {lang === "en" ? "Get a Free Quote" : "Solicitar Cotización"}
                </Link>
                <button onClick={restart} className="w-full text-center text-xs text-gray-400 hover:text-blue-500 py-1 transition-colors">
                  {t.restartLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── FAB button ── */}
      <button onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/40 hover:scale-110 transition-all duration-300 border-2 border-white/20"
        aria-label="Chat with us">
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
        )}
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
