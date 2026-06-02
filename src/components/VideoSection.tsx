import { Play, Video } from "lucide-react";

export default function VideoSection({ lang }: { lang: string }) {
  const isEs = lang === "es";
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">
          {isEs ? "Míranos en Acción" : "Watch Us Work"}
        </p>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
          {isEs ? "Ver el Poder del " : "See the Power of "}
          <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
            {isEs ? "Lavado Profesional" : "Professional Cleaning"}
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          {isEs
            ? "Un video vale más que mil palabras. Pronto verás nuestro trabajo en acción."
            : "A video is worth a thousand words. Coming soon — see our work in action."}
        </p>

        {/* Video placeholder */}
        <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden bg-black/50 border border-white/10 aspect-video flex items-center justify-center group cursor-pointer hover:border-blue-500/50 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/30" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-blue-600/80 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
              <Play size={32} className="text-white ml-1" />
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Video size={14} className="text-blue-400" />
              <span className="text-white text-sm font-medium">
                {isEs ? "Video próximamente — Altitude Service Solutions" : "Video coming soon — Altitude Service Solutions"}
              </span>
            </div>
          </div>
          {/* Fake progress bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-3">
              <span className="text-white text-xs">0:00</span>
              <div className="flex-1 h-1 bg-white/20 rounded-full">
                <div className="w-0 h-1 bg-blue-400 rounded-full" />
              </div>
              <span className="text-white/50 text-xs">2:30</span>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-5">
          {isEs ? "📹 Video de nuestro equipo en acción — próximamente" : "📹 Our team in action — stay tuned"}
        </p>
      </div>
    </section>
  );
}
