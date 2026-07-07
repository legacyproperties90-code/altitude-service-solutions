import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  const baseUrl = "https://altitudeservicesolutions.com";

  const title = isEs
    ? "Cotización Gratis — Contacto"
    : "Free Quote — Contact Us";
  const description = isEs
    ? "Solicita una cotización gratis para lavado a presión, soft washing, limpieza de techos y más en Atlanta, GA. Respondemos en menos de 24 horas."
    : "Request a free quote for pressure washing, soft washing, roof cleaning and more in Atlanta, GA. We respond within 24 hours.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}/contact`,
      languages: {
        en: `${baseUrl}/en/contact`,
        es: `${baseUrl}/es/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lang}/contact`,
      images: [{ url: `${baseUrl}/altura.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <ContactClient params={Promise.resolve({ lang })} />;
}
