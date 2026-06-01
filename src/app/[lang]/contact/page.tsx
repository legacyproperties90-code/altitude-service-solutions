"use client";
import { useState, use } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Shield } from "lucide-react";
import { supabase } from "@/lib/supabase";

const serviceKeys = {
  en: {
    residential: ["Soft Washing", "Pressure Washing", "House Washing", "Roof Cleaning", "Fence & Deck", "Gutter Cleaning", "Window Cleaning"],
    commercial: ["Commercial Pressure Washing", "Parking Deck Cleaning", "High-Rise Window Cleaning", "Waterproofing"],
  },
  es: {
    residential: ["Soft Washing", "Lavado a Presión", "Lavado de Casa", "Limpieza de Techo", "Cercas y Decks", "Limpieza de Canaletas", "Limpieza de Ventanas"],
    commercial: ["Lavado a Presión Comercial", "Limpieza de Estacionamientos", "Limpieza de Ventanas en Altura", "Impermeabilización"],
  },
};

const t = {
  en: {
    badge: "Contact Us", title: "Get a Free Quote",
    desc: "Fill out the form below and we'll get back to you within 24 hours with a free, no-obligation estimate.",
    callUs: "Call Us", emailUs: "Email Us", serviceArea: "Service Area",
    serviceAreaVal: "Lawrenceville, Atlanta & Surrounding Areas",
    whyChoose: "Why Choose Us",
    bullets: ["Same-week scheduling available", "Fully insured & licensed", "100% satisfaction guarantee"],
    name: "Full Name", namePlaceholder: "Your full name",
    email: "Email", emailPlaceholder: "your@email.com",
    phone: "Phone", phonePlaceholder: "(678) 000-0000",
    service: "Service Needed", servicePlaceholder: "Select a service",
    address: "Property Address", addressPlaceholder: "Address where service is needed",
    message: "Additional Details", messagePlaceholder: "Tell us about your project...",
    submit: "Request Free Quote", sending: "Sending...",
    successTitle: "Quote Request Sent!",
    successDesc: "Thank you! We'll get back to you within 24 hours. For urgent requests, call us at",
    errorMsg: "Something went wrong. Please call us directly at (678) 739-5229.",
    residential: "Residential", commercialLabel: "Commercial",
  },
  es: {
    badge: "Contáctenos", title: "Cotización Gratis",
    desc: "Complete el formulario y nos comunicaremos con usted dentro de 24 horas con un estimado gratuito sin compromiso.",
    callUs: "Llámenos", emailUs: "Escríbanos", serviceArea: "Área de Servicio",
    serviceAreaVal: "Lawrenceville, Atlanta y Áreas Circundantes",
    whyChoose: "¿Por Qué Elegirnos?",
    bullets: ["Programación disponible en la misma semana", "Totalmente asegurados y licenciados", "100% de satisfacción garantizada"],
    name: "Nombre Completo", namePlaceholder: "Su nombre completo",
    email: "Correo Electrónico", emailPlaceholder: "su@correo.com",
    phone: "Teléfono", phonePlaceholder: "(678) 000-0000",
    service: "Servicio Requerido", servicePlaceholder: "Seleccione un servicio",
    address: "Dirección de la Propiedad", addressPlaceholder: "Dirección donde se necesita el servicio",
    message: "Detalles Adicionales", messagePlaceholder: "Cuéntenos sobre su proyecto...",
    submit: "Solicitar Cotización Gratis", sending: "Enviando...",
    successTitle: "¡Solicitud Enviada!",
    successDesc: "¡Gracias! Nos comunicaremos con usted dentro de 24 horas. Para solicitudes urgentes, llámenos al",
    errorMsg: "Algo salió mal. Por favor llámenos directamente al (678) 739-5229.",
    residential: "Residencial", commercialLabel: "Comercial",
  },
};

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const copy = lang === "es" ? t.es : t.en;
  const svcs = lang === "es" ? serviceKeys.es : serviceKeys.en;

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", address: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error: err } = await supabase.from("quote_requests").insert([{
      name: form.name, email: form.email, phone: form.phone,
      service: form.service,
      service_type: svcs.residential.includes(form.service) ? "residential" : "commercial",
      address: form.address, message: form.message,
    }]);
    setLoading(false);
    if (err) setError(copy.errorMsg);
    else setSent(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-100 font-semibold text-sm tracking-widest uppercase mb-3">{copy.badge}</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">{copy.title}</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">{copy.desc}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="space-y-5">
                {[
                  { icon: Phone, label: copy.callUs, val: "(678) 739-5229", href: "tel:+16787395229" },
                  { icon: Mail, label: copy.emailUs, val: "info@altitudeservicesolutions.com", href: "mailto:info@altitudeservicesolutions.com" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <item.icon size={20} className="text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm mb-1">{item.label}</div>
                      <div className="text-gray-900 font-semibold text-sm">{item.val}</div>
                    </div>
                  </a>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">{copy.serviceArea}</div>
                    <div className="text-gray-900 font-semibold text-sm">{copy.serviceAreaVal}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
                <h3 className="text-gray-900 font-bold">{copy.whyChoose}</h3>
                {[Clock, Shield, CheckCircle].map((Icon, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon size={18} className="text-blue-500 shrink-0" />
                    <span className="text-gray-600 text-sm">{copy.bullets[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{copy.successTitle}</h3>
                  <p className="text-gray-600 text-lg">{copy.successDesc}{" "}
                    <a href="tel:+16787395229" className="text-blue-600 font-semibold">(678) 739-5229</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { label: copy.name, key: "name", placeholder: copy.namePlaceholder, type: "text", required: true },
                      { label: copy.email, key: "email", placeholder: copy.emailPlaceholder, type: "email", required: true },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-gray-700 text-sm font-medium mb-2">{f.label}{f.required && " *"}</label>
                        <input required={f.required} type={f.type} value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                          placeholder={f.placeholder} />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">{copy.phone}</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                        placeholder={copy.phonePlaceholder} />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">{copy.service} *</label>
                      <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors">
                        <option value="">{copy.servicePlaceholder}</option>
                        <optgroup label={copy.residential}>{svcs.residential.map((s) => <option key={s} value={s}>{s}</option>)}</optgroup>
                        <optgroup label={copy.commercialLabel}>{svcs.commercial.map((s) => <option key={s} value={s}>{s}</option>)}</optgroup>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">{copy.address}</label>
                    <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      placeholder={copy.addressPlaceholder} />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">{copy.message}</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                      placeholder={copy.messagePlaceholder} />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button type="submit" disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-60 flex items-center justify-center gap-2">
                    {loading ? copy.sending : <><Send size={20} /> {copy.submit}</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
