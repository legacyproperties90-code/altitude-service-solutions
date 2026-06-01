import Link from "next/link";
import { ArrowRight, Building2, Droplets, Eye, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    id: "pressure-washing",
    icon: Building2,
    title: "Commercial Pressure Washing",
    desc: "Your business exterior is the first thing clients see. Our commercial pressure washing services keep storefronts, warehouses, and commercial buildings looking professional and well-maintained.",
    benefits: ["Storefronts & retail buildings", "Warehouses & industrial facilities", "Restaurant exteriors", "Office complexes"],
  },
  {
    id: "soft-washing",
    icon: Droplets,
    title: "Commercial Soft Washing",
    desc: "For delicate commercial surfaces, our soft washing service provides deep cleaning without the risk of damage. Perfect for stucco, EIFS, and painted surfaces on commercial properties.",
    benefits: ["EIFS & stucco-safe", "Removes bio-growth & algae", "No surface damage", "Long-lasting results"],
  },
  {
    id: "parking-deck-cleaning",
    icon: Building2,
    title: "Parking Deck Pressure Washing",
    desc: "Parking decks accumulate oil, tire marks, and grime that create hazardous conditions and an unprofessional appearance. Our team restores them to a clean, safe state.",
    benefits: ["Oil & grease removal", "Tire mark elimination", "Safety improvement", "Multi-level structures"],
  },
  {
    id: "high-rise-window-cleaning",
    icon: Eye,
    title: "High-Rise Window Cleaning",
    desc: "Professional, safe window cleaning for multi-story commercial buildings. Our trained technicians use industry-leading equipment to deliver spotless results at any height.",
    benefits: ["All building heights", "OSHA-compliant techniques", "Streak-free finish", "Flexible scheduling"],
  },
  {
    id: "waterproofing",
    icon: Shield,
    title: "Commercial Waterproofing",
    desc: "Protect your commercial investment from water infiltration and damage. We apply professional-grade waterproofing treatments to walls, decks, roofs, and foundations.",
    benefits: ["Exterior walls & facades", "Roof decks & terraces", "Foundation protection", "Long-term warranty"],
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0F1F3D] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Commercial Services</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">Business Exterior Cleaning</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Professional commercial cleaning services that keep your business looking its best and making the right first impression.
          </p>
        </div>
      </section>

      {/* Commercial clients bar */}
      <section className="py-10 bg-[#0F1F3D]/50 border-y border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Trusted by Commercial Properties Including</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-300 font-semibold">
            <span>Atlantic Private Residences</span>
            <span className="text-blue-900">•</span>
            <span>The Aberdeen on Paces Ferry</span>
            <span className="text-blue-900">•</span>
            <span>Atlanta Metro Properties</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-blue-900/40 flex items-center justify-center mb-6">
                  <s.icon size={28} className="text-blue-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{s.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle size={18} className="text-blue-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:-translate-y-1">
                  Request Commercial Quote <ArrowRight size={18} />
                </Link>
              </div>
              <div className={`${i % 2 !== 0 ? "lg:order-1" : ""} rounded-2xl overflow-hidden border border-blue-900/30 aspect-video bg-[#0F1F3D] flex items-center justify-center`}>
                <div className="text-center p-8">
                  <s.icon size={64} className="text-blue-900/60 mx-auto mb-4" />
                  <p className="text-gray-600 text-sm">Service photo coming soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900/40 to-[#0F1F3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready for a Commercial Quote?</h2>
          <p className="text-gray-300 text-lg mb-8">We offer flexible scheduling and competitive rates for commercial properties of all sizes.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all">
            Get Commercial Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
