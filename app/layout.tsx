import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts/fonts";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId={"GTM-5FRPJ89K"} />
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
