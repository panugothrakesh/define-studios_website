import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const ebgaramond = EB_Garamond({subsets: ['latin'], variable: '--font-ebgaramond'})
const haboro = localFont({src:[{path: "../font/haborocontrastnormregular.otf"}], variable: '--font-haboro'})
const ponjoung = localFont({src:[{path: "../font/Ponjoung.otf"}], variable: '--font-ponjoung'})

export const metadata: Metadata = {
  title: "DF9 | Define Studios",
  description: "Define Studios",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebgaramond.variable} ${ponjoung.variable} ${haboro.variable}`}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
