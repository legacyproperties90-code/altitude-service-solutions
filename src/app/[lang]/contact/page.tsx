"use client";
import { useState, use } from "react";
import {
  Phone, Mail, MapPin, Send, CheckCircle, Clock, Shield,
  Droplets, Wind, Home, Leaf, Eye, Building2, Star, ChevronDown,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

/* ── Types ── */
type Lang = "en" | "es";

/* ── Service definitions ── */
const resServices = {
  en: [
    { id: "soft-wash",      icon: Droplets,   label: "Soft Washing" },
    { id: "pressure-wash",  icon: Wind,       label: "Pressure Washing" },
    { id: "house-wash",     icon: Home,       label: "House Washing" },
    { id: "roof-clean",     icon: Leaf,       label: "Roof Cleaning" },
    { id: "fence-deck",     icon: CheckCircle, label: "Fence & Deck" },
    { id: "gutter-clean",   icon: Eye,        label: "Gutter Cleaning" },
    { id: "window-clean",   icon: Eye,        label: "Window Cleaning" },
  ],
  es: [
    { id: "soft-wash",      icon: Droplets,   label: "Soft Washing" },
    { id: "pressure-wash",  icon: Wind,       label: "Lavado a Presión" },
    { id: "house-wash",     icon: Home,       label: "Lavado de Casa" },
    { id: "roof-clean",     icon: Leaf,       label: "Limpieza de Techo" },
    { id: "fence-deck",     icon: CheckCircle, label: "Cercas y Decks" },
    { id: "gutter-clean",   icon: Eye,        label: "Canaletas" },
    { id: "window-clean",   icon: Eye,        label: "Ventanas" },
  ],
};

const comServices = {
  en: [
    { id: "com-pressure",   icon: Building2,  label: "Commercial Pressure Washing" },
    { id: "parking-deck",   icon: Building2,  label: "Parking Deck Cleaning" },
    { id: "highrise",       icon: Eye,        label: "High-Rise Window Cleaning" },
  ],
  es: [
    { id: "com-pressure",   icon: Building2,  label: "Lavado Comercial" },
    { id: "parking-deck",   icon: Building2,  label: "Limpieza de Estacionamiento" },
    { id: "highrise",       icon: Eye,        label: "Ventanas en Altura" },
  ],
};

const copy = {
  en: {
    badge: "Get in Touch",
    title: "Request Your",
    titleHighlight: "Free Quote",
    subtitle: "Fill out the form below and our team will get back to you within 24 hours with a personalized estimate.",
    servicesTitle: "Which services do you need?",
    residentialLabel: "Residential",
    commercialLabel: "Commercial",
    selectHint: "Select all that apply",
    name: "Full Name", namePlaceholder: "Your full name",
    email: "Email Address", emailPlaceholder: "you@example.com",
    phone: "Phone Number", phonePlaceholder: "(678) 000-0000",
    address: "Property Address", addressPlaceholder: "Where is the service needed?",
    message: "Additional Details", messagePlaceholder: "Tell us about your project, property size, specific concerns...",
    submit: "Send My Quote Request",
    sending: "Sending...",
    successTitle: "Quote Request Sent! 🎉",
    successDesc: "We received your request and will reach out within 24 hours. For immediate assistance, call us directly.",
    errorMsg: "Something went wrong. Please call us at (678) 739-5229.",
    callUs: "Call Us Now",
    emailUs: "Email Us",
    location: "Service Area",
    locationVal: "Atlanta, Lawrenceville & Surrounding Areas",
    bullets: ["Same-week scheduling available", "Fully insured & licensed", "100% satisfaction guaranteed", "Free no-obligation estimates"],
    quoteNote: "* We respond to all requests within 24 business hours.",
    required: "required",
  },
  es: {
    badge: "Contáctenos",
    title: "Solicita tu",
    titleHighlight: "Cotización Gratis",
    subtitle: "Completa el formulario y nuestro equipo te responderá dentro de 24 horas con un estimado personalizado.",
    servicesTitle: "¿Qué servicios necesitas?",
    residentialLabel: "Residencial",
    commercialLabel: "Comercial",
    selectHint: "Selecciona todos los que apliquen",
    name: "Nombre Completo", namePlaceholder: "Tu nombre completo",
    email: "Correo Electrónico", emailPlaceholder: "tu@correo.com",
    phone: "Número de Teléfono", phonePlaceholder: "(678) 000-0000",
    address: "Dirección de la Propiedad", addressPlaceholder: "¿Dónde se necesita el servicio?",
    message: "Detalles Adicionales", messagePlaceholder: "Cuéntanos sobre tu proyecto, tamaño de la propiedad, detalles específicos...",
    submit: "Enviar Solicitud de Cotización",
    sending: "Enviando...",
    successTitle: "¡Solicitud Enviada! 🎉",
    successDesc: "Recibimos tu solicitud y te contactaremos dentro de 24 horas. Para asistencia inmediata, llámanos directamente.",
    errorMsg: "Algo salió mal. Por favor llámanos al (678) 739-5229.",
    callUs: "Llamar Ahora",
    emailUs: "Escribirnos",
    location: "Área de Servicio",
    locationVal: "Atlanta, Lawrenceville y Áreas Circundantes",
    bullets: ["Programación disponible esta semana", "Totalmente asegurados y licenciados", "100% de satisfacción garantizada", "Estimados gratuitos sin compromiso"],
    quoteNote: "* Respondemos a todas las solicitudes dentro de 24 horas hábiles.",
    required: "requerido",
  },
};

/* ── Service Toggle Pill ── */
function ServicePill({ icon: Icon, label, selected, onToggle }: {
  icon: React.ElementType; label: string; selected: boolean; onToggle: () => void;
}) {
  return (
    <button type="button" onClick={onToggle}
      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 w-full text-left ${
        selected
          ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/25"
          : "bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
      }`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${selected ? "bg-white/20" : "bg-gray-100"}`}>
        <Icon size={15} className={selected ? "text-white" : "text-blue-600"} />
      </div>
      <span className="flex-1 leading-tight">{label}</span>
      {selected && <CheckCircle size={16} className="text-white shrink-0" />}
    </button>
  );
}

/* ── Main Component ── */
export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const t   = lang === "es" ? copy.es   : copy.en;
  const res = lang === "es" ? resServices.es : resServices.en;
  const com = lang === "es" ? comServices.es : comServices.en;

  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [form, setForm]   = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  const toggleService = (id: string) =>
    setSelectedServices((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.size === 0) { setError(lang === "es" ? "Por favor selecciona al menos un servicio." : "Please select at least one service."); return; }
    setLoading(true); setError("");

    const allServices  = [...res, ...com];
    const serviceNames = Array.from(selectedServices).map((id) => allServices.find((s) => s.id === id)?.label ?? id).join(", ");

    const { error: err } = await supabase.from("quote_requests").insert([{
      name: form.name, email: form.email, phone: form.phone,
      service: serviceNames,
      service_type: "multiple",
      address: form.address, message: form.message,
    }]);

    // Send email notification (non-blocking)
    if (!err) {
      fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, service: serviceNames, address: form.address, message: form.message }),
      }).catch(() => {});
    }

    setLoading(false);
    if (err) setError(t.errorMsg);
    else setSent(true);
  };

  const field = "w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-sm";
  const label = "block text-gray-700 text-sm font-bold mb-2";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero strip ── */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 mb-5">
            <Star size={12} className="fill-yellow-300 text-yellow-300" />
            <span className="text-blue-200 font-semibold text-xs tracking-widest uppercase">{t.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

          {/* ── LEFT: Info panel ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact card */}
            <div className="bg-[#060d1f] rounded-2xl p-7 text-white">
              <h2 className="font-black text-xl mb-6 text-white">
                {lang === "es" ? "Información de Contacto" : "Contact Information"}
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Phone,  label: t.callUs,   val: "(678) 739-5229",                     href: "tel:+16787395229",                            iconColor: "text-green-400",  bg: "bg-green-500/15 border-green-500/20" },
                  { icon: Mail,   label: t.emailUs,  val: "info@altitudeservicesolutions.com",   href: "mailto:info@altitudeservicesolutions.com",    iconColor: "text-blue-400",   bg: "bg-blue-500/15 border-blue-500/20" },
                  { icon: MapPin, label: t.location, val: t.locationVal,                         href: null,                                          iconColor: "text-red-400",    bg: "bg-red-500/15 border-red-500/20" },
                ].map((item) => {
                  const inner = (
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${item.bg}`}>
                        <item.icon size={18} className={item.iconColor} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                        <div className="text-white font-semibold text-sm leading-snug">{item.val}</div>
                      </div>
                    </div>
                  );
                  return item.href
                    ? <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">{inner}</a>
                    : <div key={item.label}>{inner}</div>;
                })}
              </div>
            </div>

            {/* Why us card */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-black text-gray-900 text-lg mb-5">
                {lang === "es" ? "¿Por Qué Elegirnos?" : "Why Choose Us?"}
              </h3>
              <ul className="space-y-3.5">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-green-600" />
                    </div>
                    <span className="text-gray-600 text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={18} className="text-orange-500" />
                <span className="font-bold text-gray-900 text-sm">
                  {lang === "es" ? "Horario de Atención" : "Business Hours"}
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between"><span>{lang === "es" ? "Lunes – Viernes" : "Monday – Friday"}</span><span className="font-semibold text-gray-800">8am – 6pm</span></div>
                <div className="flex justify-between"><span>{lang === "es" ? "Sábado" : "Saturday"}</span><span className="font-semibold text-gray-800">8am – 4pm</span></div>
                <div className="flex justify-between"><span>{lang === "es" ? "Domingo" : "Sunday"}</span><span className="font-semibold text-red-400">{lang === "es" ? "Cerrado" : "Closed"}</span></div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3" id="quote-form">
            {sent ? (
              /* ── Success state ── */
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100 h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-3">{t.successTitle}</h2>
                <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">{t.successDesc}</p>
                <a href="tel:+16787395229"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold text-lg hover:from-blue-600 hover:to-blue-500 transition-all shadow-lg shadow-blue-600/20">
                  <Phone size={20} /> (678) 739-5229
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* ── Fields ── */}
                <div className="px-5 sm:px-7 py-7 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={label}>{t.name} <span className="text-red-400 font-normal text-xs ml-1">*{t.required}</span></label>
                      <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t.namePlaceholder} className={field} />
                    </div>
                    <div>
                      <label className={label}>{t.email} <span className="text-red-400 font-normal text-xs ml-1">*{t.required}</span></label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={t.emailPlaceholder} className={field} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={label}>{t.phone}</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={t.phonePlaceholder} className={field} />
                    </div>
                    <div>
                      <label className={label}>{t.address}</label>
                      <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder={t.addressPlaceholder} className={field} />
                    </div>
                  </div>

                  {/* ── Services dropdown ── */}
                  <div>
                    <label className={label}>
                      {t.servicesTitle} *
                      {selectedServices.size > 0 && (
                        <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {selectedServices.size} {lang === "es" ? "selec." : "selected"}
                        </span>
                      )}
                    </label>
                    <details className="group">
                      <summary className={`${field} cursor-pointer list-none flex items-center justify-between`}>
                        <span className="text-gray-500">
                          {selectedServices.size > 0
                            ? [...res, ...com].filter(s => selectedServices.has(s.id)).map(s => s.label).join(", ")
                            : (lang === "es" ? "Selecciona uno o más servicios" : "Select one or more services")}
                        </span>
                        <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                      </summary>
                      <div className="mt-2 border-2 border-blue-100 rounded-xl bg-blue-50/50 p-4 space-y-4">
                        <div>
                          <p className="text-blue-700 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Home size={12} />{t.residentialLabel}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {res.map((s) => (
                              <ServicePill key={s.id} icon={s.icon} label={s.label}
                                selected={selectedServices.has(s.id)} onToggle={() => toggleService(s.id)} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sky-700 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Building2 size={12} />{t.commercialLabel}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {com.map((s) => (
                              <ServicePill key={s.id} icon={s.icon} label={s.label}
                                selected={selectedServices.has(s.id)} onToggle={() => toggleService(s.id)} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>

                  <div>
                    <label className={label}>{t.message}</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4} placeholder={t.messagePlaceholder} className={`${field} resize-none`} />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <span className="text-red-500 text-sm">{error}</span>
                    </div>
                  )}

                  <button type="submit" disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-black text-lg hover:from-blue-600 hover:to-sky-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/25 disabled:opacity-50 flex items-center justify-center gap-3">
                    {loading ? (
                      <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t.sending}</>
                    ) : (
                      <><Send size={20} />{t.submit}</>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">{t.quoteNote}</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
