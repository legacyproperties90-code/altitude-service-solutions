import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, type Lang } from "@/lib/getDictionary";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "es" ? "es" : "en") as Lang;
  const d = await getDictionary(lang);
  const baseUrl = "https://altitudess.net";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: d.meta.home.title,
      template: "%s | Altitude Service Solutions",
    },
    description: d.meta.home.description,
    keywords: [
      "pressure washing Atlanta",
      "soft washing Atlanta",
      "roof cleaning Atlanta",
      "house washing Atlanta",
      "exterior cleaning Lawrenceville GA",
      "commercial pressure washing Atlanta",
      "lavado a presión Atlanta",
      "limpieza exterior Atlanta",
    ],
    authors: [{ name: "Altitude Service Solutions" }],
    creator: "Altitude Service Solutions",
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_US" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_US",
      url: baseUrl,
      siteName: "Altitude Service Solutions",
      title: d.meta.home.title,
      description: d.meta.home.description,
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.home.title,
      description: d.meta.home.description,
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "en": `${baseUrl}/en`,
        "es": `${baseUrl}/es`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "es" ? "es" : "en") as Lang;
  const d = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        <Header lang={lang} d={d} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} d={d} />
      </body>
    </html>
  );
}
