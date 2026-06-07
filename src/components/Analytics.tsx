"use client";
import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { track, GA_ID } from "@/lib/gtag";

export default function Analytics() {
  const pathname = usePathname();

  // Track page views on route change (SPA navigation)
  useEffect(() => {
    if (!GA_ID) return;
    window.gtag?.("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  // Global click tracking — runs once on mount
  useEffect(() => {
    if (!GA_ID) return;

    function handleClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("a, button");
      if (!el) return;

      const href = el.getAttribute("href") ?? "";
      const text = el.textContent?.trim().slice(0, 60) ?? "";

      // Phone call clicks
      if (href.startsWith("tel:")) {
        track.phoneCall(text || href);
        return;
      }

      // WhatsApp clicks
      if (href.includes("wa.me")) {
        track.whatsapp("whatsapp_fab");
        return;
      }

      // Quote / CTA button clicks
      const lower = text.toLowerCase();
      if (
        lower.includes("quote") || lower.includes("cotización") ||
        lower.includes("cotizacion") || lower.includes("free") ||
        lower.includes("gratis") || lower.includes("get started")
      ) {
        track.ctaClick(text);
      }
    }

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Scroll depth tracking — 25 / 50 / 75 / 90 %
  useEffect(() => {
    if (!GA_ID) return;

    const milestones = [25, 50, 75, 90];
    const fired = new Set<number>();

    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.round((scrolled / total) * 100);

      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track.scrollDepth(m);
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          page_path: window.location.pathname,
          send_page_view: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      `}</Script>
    </>
  );
}
