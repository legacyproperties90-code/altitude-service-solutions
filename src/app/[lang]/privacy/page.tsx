import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "es"
      ? "Política de Privacidad | Altitude Service Solutions"
      : "Privacy Policy | Altitude Service Solutions",
    description: lang === "es"
      ? "Política de privacidad de Altitude Service Solutions. Cómo recopilamos y protegemos su información personal."
      : "Privacy Policy of Altitude Service Solutions. How we collect and protect your personal information.",
    robots: { index: true, follow: true },
  };
}

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 1, 2026",
    intro: "Altitude Service Solutions, LLC ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
    sections: [
      {
        title: "1. Information We Collect",
        body: `We may collect information about you in a variety of ways, including:

**Personal Data:** Name, email address, phone number, and property address that you voluntarily provide when requesting a quote or contacting us.

**Usage Data:** Information about how you use our website, including your IP address, browser type, pages visited, and time spent on pages.

**Cookies:** We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.`,
      },
      {
        title: "2. How We Use Your Information",
        body: `We use the information we collect to:
• Provide, operate, and maintain our services
• Send you quotes, estimates, and service confirmations
• Respond to your comments, questions, and requests
• Send promotional communications (you may opt out at any time)
• Analyze usage to improve our website and services
• Comply with legal obligations`,
      },
      {
        title: "3. Sharing Your Information",
        body: `We do not sell, trade, or otherwise transfer your personally identifiable information to third parties, except:
• To trusted service providers who assist us in operating our website and business, subject to confidentiality agreements
• When required by law or to protect our rights
• In connection with a business transfer or acquisition`,
      },
      {
        title: "4. Data Security",
        body: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
      },
      {
        title: "5. Third-Party Services",
        body: "Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of those sites and encourage you to review their privacy policies.",
      },
      {
        title: "6. Your Rights",
        body: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your personal data
• Opt out of marketing communications at any time
• Lodge a complaint with a supervisory authority

To exercise these rights, contact us at info@altitudeservicesolutions.com.`,
      },
      {
        title: "7. Children's Privacy",
        body: "Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.",
      },
      {
        title: "8. Changes to This Policy",
        body: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.",
      },
      {
        title: "9. Contact Us",
        body: `If you have questions about this Privacy Policy, please contact us:

Altitude Service Solutions, LLC
Email: info@altitudeservicesolutions.com
Phone: (678) 739-5229
Location: Lawrenceville, Atlanta, GA`,
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 1 de junio de 2026",
    intro: "Altitude Service Solutions, LLC ('nosotros,' 'nuestro,' o 'nos') se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.",
    sections: [
      {
        title: "1. Información que Recopilamos",
        body: `Podemos recopilar información sobre usted de varias maneras, incluyendo:

**Datos Personales:** Nombre, correo electrónico, número de teléfono y dirección de la propiedad que proporciona voluntariamente al solicitar una cotización o contactarnos.

**Datos de Uso:** Información sobre cómo utiliza nuestro sitio web, incluyendo su dirección IP, tipo de navegador, páginas visitadas y tiempo en páginas.

**Cookies:** Utilizamos cookies y tecnologías de seguimiento similares para mejorar su experiencia en nuestro sitio web.`,
      },
      {
        title: "2. Cómo Usamos su Información",
        body: `Usamos la información recopilada para:
• Proveer, operar y mantener nuestros servicios
• Enviarle cotizaciones y confirmaciones de servicio
• Responder a sus comentarios, preguntas y solicitudes
• Enviar comunicaciones promocionales (puede cancelar en cualquier momento)
• Analizar el uso para mejorar nuestro sitio web y servicios
• Cumplir con obligaciones legales`,
      },
      {
        title: "3. Compartir su Información",
        body: `No vendemos, negociamos ni transferimos su información de identificación personal a terceros, excepto:
• A proveedores de servicios de confianza que nos ayudan a operar nuestro negocio, sujetos a acuerdos de confidencialidad
• Cuando lo requiera la ley o para proteger nuestros derechos
• En relación con una transferencia o adquisición comercial`,
      },
      {
        title: "4. Seguridad de Datos",
        body: "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso, alteración, divulgación o destrucción no autorizados. Sin embargo, ningún método de transmisión por Internet es 100% seguro.",
      },
      {
        title: "5. Servicios de Terceros",
        body: "Nuestro sitio web puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido, las políticas de privacidad o las prácticas de esos sitios.",
      },
      {
        title: "6. Sus Derechos",
        body: `Usted tiene derecho a:
• Acceder a la información personal que tenemos sobre usted
• Solicitar la corrección de datos inexactos
• Solicitar la eliminación de sus datos personales
• Optar por no recibir comunicaciones de marketing en cualquier momento

Para ejercer estos derechos, contáctenos en info@altitudeservicesolutions.com.`,
      },
      {
        title: "7. Privacidad de Menores",
        body: "Nuestros servicios no están dirigidos a personas menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años.",
      },
      {
        title: "8. Cambios a esta Política",
        body: "Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva política en esta página con una fecha actualizada.",
      },
      {
        title: "9. Contáctenos",
        body: `Si tiene preguntas sobre esta Política de Privacidad, comuníquese con nosotros:

Altitude Service Solutions, LLC
Correo: info@altitudeservicesolutions.com
Teléfono: (678) 739-5229
Ubicación: Lawrenceville, Atlanta, GA`,
      },
    ],
  },
};

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
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
            <Link href={`/${lang}/terms`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
              {lang === "es" ? "Ver Términos y Condiciones →" : "View Terms & Conditions →"}
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
