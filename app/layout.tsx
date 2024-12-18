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
import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts/fonts";
import GoogleTagManager from "./GoogleTagManager.tsx"; // Ajuste o caminho conforme necessário

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
      <body className={`${montserrat.className} antialiased`}>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}
