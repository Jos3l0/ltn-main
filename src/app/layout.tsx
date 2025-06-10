import "@/styles/globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";

import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo LTN",
  description:
    "Somos un grupo empresario dedicados a proveer sistemas de refrigeración eficiente y soluciones constructivas sustentables.",
  icons: [{ rel: "icon", url: "/favicon.jpg" }],
  other: {
    "google-site-verification": "FhNrB5bzatn5HU8mYhnR9fgmprzjOXHW8eKhaBgi5sc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-53R334F');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Metricool Tracker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"c727c2ad591d54d256b6b8d74a8e1596"})});`,
          }}
        />
        {/* End Metricool Tracker */}
        <Script
          src="https://app.bluecaribu.com/conversion/integration"
          strategy="afterInteractive"
        />
        <Script id="bluecaribu-config" strategy="afterInteractive">
          {`
            window.bctag = window.bctag || function() {
              (window.bctag.q = window.bctag.q || []).push(arguments);
            };
            window.bctag({
              config: {
                token: '543e9a38a23c84c345025ce521064e3b',
                redirect: "/gracias"
              },
              forms: {
                ".blueform": {
                  contact_name: "name",
                  contact_email: "email",
                  contact_phone: "phone",
                  lead_msg: "message",
                  custom: {
                    "%_de_Pendiente": "%_DE_PENDIENTE",
                    "Altura_en_Mts._de_la_obra": "ALTURA_EN_MTS._DE_LA_OBRA",
                    "Preferencia_de_contacto": "PREFERENCIA_DE_CONTACTO",
                    "Datos_de_Cubierta": "DATOS_DE_CUBIERTA",
                    "Muros": "MUROS",
                    "Numero_de_Presupuesto": "NUMERO_DE_PRESUPUESTO",
                    "Fuentes": "FUENTES",
                    "web_o_redes": "WEB_O_REDES"
                  }
                }
              }
            });
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '664261196466604');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=664261196466604&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53R334F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
