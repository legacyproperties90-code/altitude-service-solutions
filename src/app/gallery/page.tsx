import Link from "next/link";
import { ArrowRight, ImageOff } from "lucide-react";

const categories = ["All", "Pressure Washing", "House Washing", "Roof Cleaning", "Commercial", "Decks & Fences"];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0F1F3D] to-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Our Work</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">Project Gallery</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            See the Altitude difference. Before and after results from our residential and commercial projects across Atlanta.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((c, i) => (
              <button key={c}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-blue-600 text-white" : "bg-blue-900/20 text-gray-400 hover:bg-blue-900/40 hover:text-white border border-blue-900/30"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square bg-[#0F1F3D] border border-blue-900/30 rounded-2xl flex flex-col items-center justify-center group hover:border-blue-600/50 transition-all card-hover">
                <ImageOff size={32} className="text-blue-900/60 mb-3" />
                <p className="text-gray-600 text-xs text-center px-4">Photo coming soon</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#0F1F3D]/60 border border-blue-900/30 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Gallery Coming Soon</h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-6">
              We&apos;re loading up our gallery with before & after photos from our latest projects.
              In the meantime, give us a call or request a quote and we&apos;ll show you our work firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition-all">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:+16787395229"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-blue-700/50 text-white font-semibold hover:bg-blue-900/30 transition-all">
                Call (678) 739-5229
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
