// import type { Metadata } from "next";
// import "./globals.css";
// import { montserrat } from "./fonts/fonts";

// export const metadata: Metadata = {
//   title: "Sorrifácil Taquara",
//   description: "Sorrir é uma conquista",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="pt-br">
//       <body className={`${montserrat.className} antialiased`}>
//         <!-- Google Tag Manager (noscript) -->
//             <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FRPJ89K"
//             height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
//         <!-- End Google Tag Manager (noscript) -->
//         {children}</body>
//     </html>
//   );
// }
import Head from "next/head";
import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Sorrifácil Taquara",
  description: "Sorrir é uma conquista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FRPJ89K');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body className={`${montserrat.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FRPJ89K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
