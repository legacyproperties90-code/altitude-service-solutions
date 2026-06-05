import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060d1f] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-[120px] font-black text-blue-800/30 leading-none mb-4">404</div>
        <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/en"
            className="btn-arrow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold hover:from-blue-800 hover:to-blue-700 transition-all">
            <Home size={18} /> Go Home
          </Link>
          <Link href="/en/contact#quote-form"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-700/50 text-white font-semibold hover:bg-blue-900/30 transition-all">
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
