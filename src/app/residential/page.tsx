import Link from "next/link";
import { ArrowRight, Droplets, Home, Leaf, Wind, Eye, CheckCircle } from "lucide-react";

const services = [
  {
    id: "soft-washing",
    icon: Droplets,
    title: "Soft Washing",
    desc: "Soft washing uses low-pressure water combined with specialized biodegradable cleaning solutions to safely remove algae, mold, mildew, and bacteria from your home's exterior without causing damage.",
    benefits: ["Safe for all exterior surfaces", "Kills mold and algae at the root", "Results last 4–6x longer than pressure washing", "No risk of surface damage"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    id: "pressure-washing",
    icon: Wind,
    title: "Pressure Washing",
    desc: "High-powered pressure washing is perfect for driveways, sidewalks, patios, and other hard surfaces that can withstand high-pressure water streams. We remove years of grime, oil stains, and buildup.",
    benefits: ["Driveways & sidewalks", "Patios & pool decks", "Concrete & brick surfaces", "Parking areas"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: "house-washing",
    icon: Home,
    title: "House Washing",
    desc: "Complete exterior house washing that removes dirt, algae, oxidation, and environmental buildup from your siding, brick, stucco, or vinyl. Restore your home's original color and beauty.",
    benefits: ["All siding types (vinyl, wood, stucco, brick)", "Removes oxidation & discoloration", "Protects paint & finish", "Boosts curb appeal instantly"],
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
  {
    id: "roof-cleaning",
    icon: Leaf,
    title: "Roof Cleaning",
    desc: "Those black streaks on your roof aren't just ugly — they're a bacteria called Gloeocapsa Magma that eats your shingles. Our soft wash roof cleaning safely eliminates them and extends your roof's life.",
    benefits: ["Removes black streaks (Gloeocapsa Magma)", "Eliminates moss, lichen & algae", "Extends roof lifespan by years", "Maintains warranty compliance"],
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800",
  },
  {
    id: "fence-&-deck",
    icon: CheckCircle,
    title: "Fence & Deck Cleaning",
    desc: "Restore your fence and deck to like-new condition. We remove mold, mildew, weathering, and gray discoloration from wood, composite, and vinyl surfaces, preparing them for staining or sealing.",
    benefits: ["Wood, composite & vinyl decks", "All fence types", "Pre-stain preparation", "UV & weathering removal"],
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
  },
  {
    id: "gutter-cleaning",
    icon: CheckCircle,
    title: "Gutter Cleaning",
    desc: "Clogged gutters lead to water damage, foundation issues, and pest infestations. We thoroughly clean and flush your gutters and downspouts to ensure proper water flow away from your home.",
    benefits: ["Remove leaves & debris", "Flush downspouts", "Prevent water damage", "Inspect for damage"],
    img: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800",
  },
  {
    id: "window-cleaning",
    icon: Eye,
    title: "Window Cleaning",
    desc: "Crystal-clear windows make a huge difference in your home's appearance. We clean interior and exterior windows using streak-free techniques, leaving every pane spotless.",
    benefits: ["Interior & exterior cleaning", "Streak-free results", "Screen cleaning included", "All window types & sizes"],
    img: "https://images.unsplash.com/photo-1527515637462-cff94edd04b0?w=800",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0F1F3D] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Residential Services</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">Home Exterior Cleaning</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Professional exterior cleaning services that restore your home&apos;s beauty and protect your investment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
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
                  className="btn-arrow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:-translate-y-1">
                  Get a Free Quote <ArrowRight size={18} />
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
          <h2 className="text-4xl font-black text-white mb-5">Ready to Book a Service?</h2>
          <p className="text-gray-300 text-lg mb-8">Get a free estimate today — no obligation, no pressure.</p>
          <Link href="/contact"
            className="btn-arrow inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all">
            Get a Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
