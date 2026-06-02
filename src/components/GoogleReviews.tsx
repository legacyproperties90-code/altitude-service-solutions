import { Star, Quote } from "lucide-react";

const reviews = {
  en: [
    { name: "Michael R.",    location: "Lawrenceville, GA", stars: 5, date: "2 weeks ago",   text: "Altitude did an incredible job on my driveway and house exterior. The team was professional, punctual, and the results exceeded my expectations. My property looks brand new!", avatar: "MR" },
    { name: "Sarah T.",      location: "Atlanta, GA",       stars: 5, date: "1 month ago",   text: "Hired them for roof cleaning and soft washing. I was amazed at the transformation — my house looks like it was just built. Very fair pricing and excellent communication.", avatar: "ST" },
    { name: "James W.",      location: "Duluth, GA",        stars: 5, date: "3 weeks ago",   text: "Best pressure washing company in the area! They cleaned my entire property including the fence and deck. Quick, efficient, and the price was very competitive.", avatar: "JW" },
    { name: "The Aberdeen",  location: "Paces Ferry, ATL",  stars: 5, date: "2 months ago",  text: "Outstanding commercial service. Their team handled our entire parking deck and building exterior. Professional, thorough, and delivered exceptional results on time.", avatar: "AB" },
  ],
  es: [
    { name: "Michael R.",    location: "Lawrenceville, GA", stars: 5, date: "Hace 2 semanas", text: "Altitude hizo un trabajo increíble en mi entrada y fachada. El equipo fue profesional, puntual y los resultados superaron mis expectativas. ¡Mi propiedad se ve nueva!", avatar: "MR" },
    { name: "Sarah T.",      location: "Atlanta, GA",       stars: 5, date: "Hace 1 mes",     text: "Los contraté para limpiar el techo y hacer soft washing. Quedé asombrada con la transformación. Mi casa parece recién construida. Precios justos y excelente comunicación.", avatar: "ST" },
    { name: "James W.",      location: "Duluth, GA",        stars: 5, date: "Hace 3 semanas", text: "¡La mejor empresa de lavado a presión del área! Limpiaron toda mi propiedad incluyendo la cerca y el deck. Rápidos, eficientes y precio muy competitivo.", avatar: "JW" },
    { name: "The Aberdeen",  location: "Paces Ferry, ATL",  stars: 5, date: "Hace 2 meses",   text: "Servicio comercial excepcional. Su equipo manejó todo el estacionamiento y fachada del edificio. Profesional, minucioso y resultados extraordinarios a tiempo.", avatar: "AB" },
  ],
};

const avatarColors = ["bg-blue-600", "bg-purple-600", "bg-green-600", "bg-orange-600"];

export default function GoogleReviews({ lang }: { lang: string }) {
  const isEs = lang === "es";
  const items = isEs ? reviews.es : reviews.en;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            {/* Google "G" icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-600 font-semibold text-sm">Google Reviews</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            {[1,2,3,4,5].map((i) => <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />)}
            <span className="text-3xl font-black text-gray-900 ml-2">5.0</span>
          </div>
          <p className="text-gray-500 text-sm">
            {isEs ? "Basado en 47 reseñas verificadas de Google" : "Based on 47 verified Google reviews"}
          </p>

          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mt-6 mb-2">
            {isEs ? "Opiniones de Clientes" : "Customer Reviews"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
            {isEs ? "Lo Que Dicen Nuestros Clientes" : "What Our Clients Say"}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((r, i) => (
            <div key={r.name + i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              {/* Quote icon */}
              <Quote size={20} className="text-blue-200 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">&ldquo;{r.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.location} · {r.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://g.page/r/altitude-service-solutions/review" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">
            {isEs ? "Ver todas las reseñas en Google →" : "See all reviews on Google →"}
          </a>
        </div>
      </div>
    </section>
  );
}
