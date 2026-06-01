import Link from "next/link";
import { Phone, Shield, Star, CheckCircle, ArrowRight, Droplets, Home, Building2, Leaf, Wind, Eye } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "Fully", label: "Insured & Licensed" },
];

const residentialServices = [
  { icon: Droplets, title: "Soft Washing", desc: "Gentle low-pressure cleaning that eliminates algae, mold, and mildew without damaging surfaces." },
  { icon: Wind, title: "Pressure Washing", desc: "High-powered cleaning for driveways, sidewalks, and hard surfaces." },
  { icon: Home, title: "House Washing", desc: "Complete exterior cleaning that restores your home's curb appeal." },
  { icon: Leaf, title: "Roof Cleaning", desc: "Safe removal of black streaks, moss, and algae to extend roof life." },
  { icon: Eye, title: "Window Cleaning", desc: "Crystal-clear results for every window, inside and out." },
  { icon: CheckCircle, title: "Gutter Cleaning", desc: "Keep your gutters flowing freely and protect your home's foundation." },
];

const commercialServices = [
  { icon: Building2, title: "Commercial Pressure Washing", desc: "Keep your business looking its best with regular exterior maintenance." },
  { icon: Droplets, title: "Parking Deck Cleaning", desc: "Remove oil stains, grime, and buildup from parking structures." },
  { icon: Eye, title: "High-Rise Window Cleaning", desc: "Professional window cleaning for multi-story commercial buildings." },
  { icon: Shield, title: "Waterproofing", desc: "Protect your commercial property from water damage and deterioration." },
];

const testimonials = [
  { name: "Michael R.", location: "Lawrenceville, GA", stars: 5, text: "Altitude did an amazing job on my driveway and house. It looks brand new! Very professional, on time, and great price." },
  { name: "Sarah T.", location: "Atlanta, GA", stars: 5, text: "I hired them for roof cleaning and soft washing. The results were incredible. My house looks like it was just built." },
  { name: "The Aberdeen", location: "Paces Ferry, Atlanta", stars: 5, text: "Excellent commercial service. Their team was efficient, professional, and delivered outstanding results for our property." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1F3D] to-[#0A1628]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-700/40 text-blue-300 text-sm font-medium mb-8">
            <Star size={14} className="fill-blue-400 text-blue-400" />
            Atlanta&apos;s #1 Exterior Cleaning Service
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            We Make Your Property{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Shine.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional pressure washing, soft washing & exterior cleaning for residential and commercial properties in Atlanta, GA.
            Fully insured. 100% satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-blue-700/50 text-white font-semibold text-lg hover:bg-blue-900/30 transition-all">
              <Phone size={20} className="text-blue-400" /> (678) 739-5229
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <div className="text-3xl font-black text-blue-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-[#0F1F3D]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Trusted by Hundreds of{" "}
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
                  Atlanta Homeowners
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                At Altitude Service Solutions, we combine cutting-edge equipment with expert techniques to deliver results that exceed expectations every time.
              </p>
              <ul className="space-y-4">
                {[
                  "Fully insured and licensed professionals",
                  "Eco-friendly, biodegradable cleaning solutions",
                  "Same-week scheduling available",
                  "100% satisfaction money-back guarantee",
                  "Serving Atlanta & all surrounding areas",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:-translate-y-1">
                Book a Service <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, color: "text-blue-400", bg: "bg-blue-900/40", title: "Fully Insured", desc: "Complete liability coverage for your peace of mind" },
                { icon: Star, color: "text-yellow-400", bg: "bg-yellow-900/20", title: "5-Star Rated", desc: "Consistently top-rated by our customers" },
                { icon: Droplets, color: "text-sky-400", bg: "bg-sky-900/20", title: "Eco-Friendly", desc: "Safe for your family, pets, and the environment" },
                { icon: CheckCircle, color: "text-green-400", bg: "bg-green-900/20", title: "Guaranteed", desc: "100% satisfaction or we make it right" },
              ].map((card, i) => (
                <div key={card.title} className={`bg-[#0A1628] border border-blue-900/30 rounded-2xl p-6 text-center card-hover ${i % 2 !== 0 ? "mt-8" : ""}`}>
                  <div className={`w-14 h-14 ${card.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <card.icon size={28} className={card.color} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Residential</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Home Exterior Cleaning</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From roof to driveway, we restore your home&apos;s beauty with professional exterior cleaning services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((s) => (
              <div key={s.title} className="group bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-7 card-hover hover:border-blue-600/50">
                <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <s.icon size={24} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/residential"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-600/50 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all">
              View All Residential Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SERVICES */}
      <section className="py-20 bg-[#060E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Commercial</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Business Exterior Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Keep your commercial property clean, safe, and professional-looking year-round.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((s) => (
              <div key={s.title} className="group bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-7 card-hover hover:border-blue-600/50">
                <div className="w-12 h-12 rounded-xl bg-blue-900/40 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <s.icon size={24} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/commercial"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-600/50 text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-all">
              View All Commercial Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-7 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/40 to-[#0F1F3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to Transform Your Property?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Get a free, no-obligation quote today. We serve Atlanta, Lawrenceville, and all surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
            <a href="tel:+16787395229"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
