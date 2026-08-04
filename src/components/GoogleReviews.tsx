import { Star, ExternalLink } from "lucide-react";
import { reviews, RATING, REVIEW_COUNT, GOOGLE_BUSINESS_URL } from "@/lib/reviews";

function formatDate(date: string, isEs: boolean) {
  const [y, m] = date.split("-");
  if (!m) return y;
  const months = isEs
    ? ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
    : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[Number(m) - 1]} ${y}`;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

const AVATAR_COLORS = [
  "bg-sky-600", "bg-emerald-600", "bg-violet-600", "bg-orange-600",
  "bg-rose-600", "bg-teal-600", "bg-indigo-600", "bg-amber-600",
];

export default function GoogleReviews({ lang }: { lang: string }) {
  const isEs = lang === "es";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-600 font-semibold text-sm">Google Reviews</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-3xl font-black text-gray-900 ml-2">{RATING.toFixed(1)}</span>
            <span className="text-gray-600 font-semibold text-lg ml-1">
              ({REVIEW_COUNT} {isEs ? "reseñas" : "reviews"})
            </span>
          </div>

          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mt-6 mb-2">
            {isEs ? "Opiniones de Clientes" : "Customer Reviews"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
            {isEs ? "Lo Que Dicen Nuestros Clientes" : "What Our Clients Say"}
          </h2>
        </div>

        {/* Real reviews from the Google Business Profile */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12 list-none p-0">
          {reviews.map((r, i) => (
            <li
              key={`${r.author}-${r.date}`}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`${AVATAR_COLORS[i % AVATAR_COLORS.length]} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                  aria-hidden="true">
                  {initials(r.author)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">{r.author}</p>
                  <p className="text-gray-600 text-xs">{formatDate(r.date, isEs)}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                <span className="sr-only">
                  {r.rating} {isEs ? "de 5 estrellas" : "out of 5 stars"}
                </span>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-400 hover:text-blue-700 transition-all shadow-sm">
            {isEs ? "Ver todas en Google" : "See all on Google"}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-sm">
            {isEs ? "Dejar Reseña" : "Leave a Review"}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
