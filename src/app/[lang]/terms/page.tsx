import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "es"
      ? "Términos y Condiciones | Altitude Service Solutions"
      : "Terms & Conditions | Altitude Service Solutions",
    description: lang === "es"
      ? "Términos y condiciones de servicio de Altitude Service Solutions."
      : "Terms and conditions of service for Altitude Service Solutions.",
    robots: { index: true, follow: true },
  };
}

const content = {
  en: {
    title: "Terms & Conditions",
    updated: "Last updated: June 1, 2026",
    intro: "Please read these Terms and Conditions carefully before using the services offered by Altitude Service Solutions, LLC. By accessing our website or engaging our services, you agree to be bound by these terms.",
    sections: [
      {
        title: "1. Services",
        body: "Altitude Service Solutions, LLC provides professional exterior cleaning services including pressure washing, soft washing, roof cleaning, house washing, gutter cleaning, window cleaning, and commercial cleaning services in the Atlanta, Georgia metropolitan area.",
      },
      {
        title: "2. Quotes and Estimates",
        body: `All quotes and estimates are provided free of charge and are valid for 30 days from the date of issuance. Final pricing may vary if:
• The scope of work differs significantly from what was described
• Additional services are requested on-site
• Site conditions present unforeseen challenges

We reserve the right to adjust pricing with prior notification to the client.`,
      },
      {
        title: "3. Scheduling and Cancellations",
        body: `• We require a minimum of 24 hours notice for cancellations or rescheduling
• Failure to provide adequate notice may result in a cancellation fee
• We reserve the right to reschedule services due to weather conditions that could affect service quality or safety
• We will notify you as soon as possible in the event of a weather-related postponement`,
      },
      {
        title: "4. Payment Terms",
        body: `• Payment is due upon completion of services unless otherwise agreed in writing
• We accept cash, check, and major credit cards
• A service charge may apply to returned checks
• For larger commercial projects, we may require a deposit prior to commencement of work`,
      },
      {
        title: "5. Liability and Property",
        body: `Altitude Service Solutions, LLC is fully insured. However:
• Clients must inform us of any fragile, loose, or damaged items in the work area prior to service
• We are not responsible for pre-existing damage or conditions not disclosed before work begins
• Any property damage caused directly by our negligence will be addressed promptly
• Our liability is limited to the cost of the services provided`,
      },
      {
        title: "6. Satisfaction Guarantee",
        body: "We stand behind our work with a 100% satisfaction guarantee. If you are not satisfied with our service, notify us within 48 hours of service completion and we will return to address any issues at no additional charge.",
      },
      {
        title: "7. Intellectual Property",
        body: "All content on our website, including text, graphics, logos, and images, is the property of Altitude Service Solutions, LLC and protected by applicable copyright and trademark laws. You may not reproduce or distribute any content without our express written permission.",
      },
      {
        title: "8. Limitation of Liability",
        body: "To the fullest extent permitted by law, Altitude Service Solutions, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.",
      },
      {
        title: "9. Governing Law",
        body: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Gwinnett County, Georgia.",
      },
      {
        title: "10. Changes to Terms",
        body: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new terms.",
      },
      {
        title: "11. Contact Us",
        body: `For questions about these Terms and Conditions:

Altitude Service Solutions, LLC
Email: info@altitudeservicesolutions.com
Phone: (678) 739-5229
Location: Lawrenceville, Atlanta, GA`,
      },
    ],
  },
  es: {
    title: "Términos y Condiciones",
    updated: "Última actualización: 1 de junio de 2026",
    intro: "Por favor lea estos Términos y Condiciones cuidadosamente antes de utilizar los servicios ofrecidos por Altitude Service Solutions, LLC. Al acceder a nuestro sitio web o contratar nuestros servicios, usted acepta estar sujeto a estos términos.",
    sections: [
      {
        title: "1. Servicios",
        body: "Altitude Service Solutions, LLC proporciona servicios profesionales de limpieza exterior incluyendo lavado a presión, soft washing, limpieza de techos, lavado de casas, limpieza de canaletas, limpieza de ventanas y servicios de limpieza comercial en el área metropolitana de Atlanta, Georgia.",
      },
      {
        title: "2. Cotizaciones y Estimados",
        body: `Todas las cotizaciones y estimados se proporcionan sin costo y son válidos por 30 días desde la fecha de emisión. El precio final puede variar si:
• El alcance del trabajo difiere significativamente de lo descrito
• Se solicitan servicios adicionales en el lugar
• Las condiciones del sitio presentan desafíos imprevistos

Nos reservamos el derecho de ajustar los precios con notificación previa al cliente.`,
      },
      {
        title: "3. Programación y Cancelaciones",
        body: `• Requerimos un mínimo de 24 horas de aviso para cancelaciones o reprogramaciones
• No proporcionar aviso adecuado puede resultar en un cargo por cancelación
• Nos reservamos el derecho de reprogramar servicios debido a condiciones climáticas
• Le notificaremos lo antes posible en caso de un aplazamiento por clima`,
      },
      {
        title: "4. Condiciones de Pago",
        body: `• El pago se debe realizar al completar los servicios, a menos que se acuerde por escrito
• Aceptamos efectivo, cheque y tarjetas de crédito principales
• Para proyectos comerciales más grandes, podemos requerir un depósito antes del inicio`,
      },
      {
        title: "5. Responsabilidad y Propiedad",
        body: `Altitude Service Solutions, LLC está completamente asegurado. Sin embargo:
• Los clientes deben informarnos sobre artículos frágiles, sueltos o dañados antes del servicio
• No somos responsables de daños preexistentes no divulgados antes del trabajo
• Cualquier daño causado directamente por nuestra negligencia será atendido de inmediato
• Nuestra responsabilidad se limita al costo de los servicios prestados`,
      },
      {
        title: "6. Garantía de Satisfacción",
        body: "Respaldamos nuestro trabajo con una garantía de satisfacción del 100%. Si no está satisfecho con nuestro servicio, notifíquenos dentro de las 48 horas posteriores a la finalización del servicio y regresaremos a solucionar cualquier problema sin costo adicional.",
      },
      {
        title: "7. Propiedad Intelectual",
        body: "Todo el contenido de nuestro sitio web, incluyendo texto, gráficos, logotipos e imágenes, es propiedad de Altitude Service Solutions, LLC y está protegido por las leyes de derechos de autor y marcas registradas aplicables.",
      },
      {
        title: "8. Limitación de Responsabilidad",
        body: "En la medida máxima permitida por la ley, Altitude Service Solutions, LLC no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos.",
      },
      {
        title: "9. Ley Aplicable",
        body: "Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes del Estado de Georgia. Cualquier disputa se resolverá en los tribunales del Condado de Gwinnett, Georgia.",
      },
      {
        title: "10. Cambios a los Términos",
        body: "Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos al publicarse en nuestro sitio web.",
      },
      {
        title: "11. Contáctenos",
        body: `Para preguntas sobre estos Términos y Condiciones:

Altitude Service Solutions, LLC
Correo: info@altitudeservicesolutions.com
Teléfono: (678) 739-5229
Ubicación: Lawrenceville, Atlanta, GA`,
      },
    ],
  },
};

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = await getDictionary(lang);
  const c = lang === "es" ? content.es : content.en;

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-blue-700 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{c.title}</h1>
          <p className="text-blue-100">{c.updated}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-lg leading-relaxed mb-10 pb-8 border-b border-gray-100">{c.intro}</p>

          <div className="space-y-10">
            {c.sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            <Link href={`/${lang}/privacy`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
              {lang === "es" ? "Ver Política de Privacidad →" : "View Privacy Policy →"}
            </Link>
            <Link href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              {d.nav.getQuote}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
