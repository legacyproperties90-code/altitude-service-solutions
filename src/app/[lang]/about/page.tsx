import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Star, Users, Award, MapPin, Phone, CheckCircle, Heart } from "lucide-react";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  return {
    title: isEs ? "Sobre Nosotros | Altitude Service Solutions Atlanta" : "About Us | Altitude Service Solutions Atlanta",
    description: isEs
      ? "Conoce a Altitude Service Solutions — empresa familiar de limpieza exterior en Atlanta, GA. Comprometidos con la excelencia, totalmente asegurados y con más de 15 años de experiencia."
      : "Meet Altitude Service Solutions — a family-owned exterior cleaning company in Atlanta, GA. Committed to excellence, fully insured, with 15+ years of experience.",
    alternates: {
      canonical: `https://altitudess.net/${lang}/about`,
      languages: { en: "https://altitudess.net/en/about", es: "https://altitudess.net/es/about" },
    },
  };
}

const values = {
  en: [
    { icon: Shield,  color: "text-green-500",  bg: "bg-green-50",  title: "Integrity",      desc: "We treat every property as if it were our own. No shortcuts, no surprises — just honest, quality work." },
    { icon: Star,    color: "text-yellow-500", bg: "bg-yellow-50", title: "Excellence",     desc: "We don't stop until the job is done right. 100% satisfaction on every project, every time." },
    { icon: Heart,   color: "text-red-500",    bg: "bg-red-50",    title: "Community",      desc: "We're proud to serve Atlanta and the surrounding communities we call home." },
    { icon: Users,   color: "text-blue-600",   bg: "bg-blue-50",   title: "Professionalism",desc: "Trained, licensed, and insured team members who respect your time and property." },
  ],
  es: [
    { icon: Shield,  color: "text-green-500",  bg: "bg-green-50",  title: "Integridad",     desc: "Tratamos cada propiedad como si fuera la nuestra. Sin atajos, sin sorpresas — solo trabajo honesto y de calidad." },
    { icon: Star,    color: "text-yellow-500", bg: "bg-yellow-50", title: "Excelencia",     desc: "No paramos hasta que el trabajo esté bien hecho. 100% de satisfacción en cada proyecto." },
    { icon: Heart,   color: "text-red-500",    bg: "bg-red-50",    title: "Comunidad",      desc: "Estamos orgullosos de servir a Atlanta y las comunidades circundantes que llamamos hogar." },
    { icon: Users,   color: "text-blue-600",   bg: "bg-blue-50",   title: "Profesionalismo", desc: "Equipo capacitado, licenciado y asegurado que respeta su tiempo y propiedad." },
  ],
};

const stats = {
  en: [
    { value: "15+",  label: "Years in Business" },
    { value: "500+", label: "Properties Cleaned" },
    { value: "5.0",  label: "Google Rating" },
    { value: "100%", label: "Satisfaction Rate" },
  ],
  es: [
    { value: "15+",  label: "Años de Experiencia" },
    { value: "500+", label: "Propiedades Limpiadas" },
    { value: "5.0",  label: "Calificación Google" },
    { value: "100%", label: "Tasa de Satisfacción" },
  ],
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);
  const isEs = lang === "es";
  const vals = isEs ? values.es : values.en;
  const sts  = isEs ? stats.es  : stats.en;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/altura.png')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-200 font-semibold text-sm tracking-widest uppercase mb-3">
            {isEs ? "Nuestra Historia" : "Our Story"}
          </p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">
            {isEs ? "Conoce a Altitude" : "Meet Altitude"}
            <span className="block text-sky-300">{isEs ? "Service Solutions" : "Service Solutions"}</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            {isEs
              ? "Una empresa familiar comprometida con transformar propiedades en Atlanta, GA."
              : "A family-owned company committed to transforming properties across Atlanta, GA."}
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
                {isEs ? "Quiénes Somos" : "Who We Are"}
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {isEs ? "Construido sobre " : "Built on "}
                <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                  {isEs ? "Confianza y Resultados" : "Trust & Results"}
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  {isEs
                    ? "Altitude Service Solutions nació con una misión clara: ofrecer servicios de limpieza exterior de la más alta calidad a propietarios y negocios en el área de Atlanta, Georgia."
                    : "Altitude Service Solutions was founded with a clear mission: to deliver the highest quality exterior cleaning services to homeowners and businesses across the Atlanta, Georgia area."}
                </p>
                <p>
                  {isEs
                    ? "Con más de 15 años de experiencia en la industria, hemos perfeccionado nuestras técnicas y construido una reputación basada en resultados excepcionales, precios justos y un servicio al cliente insuperable."
                    : "With over 15 years of experience in the industry, we have perfected our techniques and built a reputation based on exceptional results, fair pricing, and unmatched customer service."}
                </p>
                <p>
                  {isEs
                    ? "Somos una empresa totalmente asegurada y licenciada, comprometida con el 100% de satisfacción en cada trabajo que realizamos."
                    : "We are a fully insured and licensed company, committed to 100% satisfaction on every job we perform."}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="font-semibold text-sm">{isEs ? "Totalmente Asegurados" : "Fully Insured"}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="font-semibold text-sm">{isEs ? "Licenciados en Georgia" : "Georgia Licensed"}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="font-semibold text-sm">{isEs ? "Empresa Familiar" : "Family-Owned"}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-2xl shadow-blue-900/15">
                <Image src="/altura.png" alt="Altitude Service Solutions team at work" fill
                  unoptimized className="object-cover" style={{ objectPosition: "center 25%" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 inline-flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <span className="font-bold text-gray-900 text-sm">5.0</span>
                    <span className="text-gray-500 text-xs">{isEs ? "47 reseñas Google" : "47 Google reviews"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {sts.map((s) => (
              <div key={s.label} className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="text-4xl sm:text-5xl font-black text-blue-700 mb-2">{s.value}</div>
                <div className="text-gray-500 font-medium text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm tracking-widest uppercase mb-3">
              {isEs ? "Nuestros Valores" : "Our Values"}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              {isEs ? "Lo Que Nos Define" : "What Defines Us"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vals.map((v) => (
              <div key={v.title} className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-5`}>
                  <v.icon size={24} className={v.color} />
                </div>
                <h3 className="text-black font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <MapPin size={36} className="text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            {isEs ? "Área de Servicio" : "Service Area"}
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            {isEs
              ? "Orgullosamente servimos a toda el área metropolitana de Atlanta, Georgia."
              : "Proudly serving the entire Atlanta, Georgia metropolitan area."}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Atlanta","Lawrenceville","Duluth","Norcross","Buford","Suwanee","Dacula","Snellville","Gwinnett County","Dekalb County"].map((city) => (
              <span key={city} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium text-sm shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">
            {isEs ? "¿Listo para Trabajar con Nosotros?" : "Ready to Work With Us?"}
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            {isEs
              ? "Contáctanos hoy para una cotización gratis sin compromiso. Respondemos en menos de 24 horas."
              : "Contact us today for a free no-obligation quote. We respond within 24 hours."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact#quote-form`}
              className="btn-arrow inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-800 font-bold text-lg hover:bg-blue-50 transition-all hover:-translate-y-1">
              {isEs ? "Cotización Gratis" : "Get a Free Quote"} <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/50 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <Phone size={20} /> (678) 739-5229
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
