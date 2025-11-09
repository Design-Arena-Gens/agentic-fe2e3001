import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venya Quantum – Futuristische IT Architekturen",
  description:
    "Venya Quantum entwirft hypermoderne IT-Ökosysteme mit KI, Cloud und immersiven Experiences für skalierende Unternehmen.",
  metadataBase: new URL("https://agentic-fe2e3001.vercel.app"),
  openGraph: {
    title: "Venya Quantum – Futuristische IT Architekturen",
    description:
      "Strategische IT-Innovationen mit KI-Automation, Zero-Trust-Security und immersiven Experiences.",
    url: "https://agentic-fe2e3001.vercel.app",
    siteName: "Venya Quantum",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venya Quantum – IT Innovation Architects",
    description:
      "Wir orchestrieren Cloud, KI und Spatial UX für High-Impact-Ökosysteme.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
