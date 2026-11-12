import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://datathon.hacettepeaiclub.com"),
  title: "Hacettepe AI Club - Datathon '26 | Veriyi Geleceğe Dönüştür",
  description:
    "Hacettepe Üniversitesi Yapay Zeka Topluluğu tarafından düzenlenen Datathon '26 Resmi Web Sitesi. Türkiye geneli üniversite öğrencileri için 1-15 Aralık 2026 veri bilimi ve yapay zeka maratonu.",
  keywords: [
    "Datathon",
    "Datathon 2026",
    "Hacettepe AI Club",
    "Hacettepe Üniversitesi",
    "Yapay Zeka Topluluğu",
    "Veri Bilimi",
    "Makine Öğrenmesi",
    "Kaggle",
    "Ankara Yarışma",
  ],
  authors: [{ name: "Hacettepe Üniversitesi Yapay Zeka Topluluğu" }],
  openGraph: {
    title: "Hacettepe AI Club - Datathon '26",
    description:
      "Veriyi Geleceğe Dönüştür! 1 - 15 Aralık 2026 tarihlerinde Türkiye geneli veri bilimi maratonu ve Beytepe Kampüsü Mehmet Akif Ersoy K Salonu büyük finali.",
    url: "https://datathon.hacettepeaiclub.com",
    siteName: "Datathon '26 - Hacettepe AI Club",
    images: [
      {
        url: "/images/event-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hacettepe AI Club Datathon '26",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacettepe AI Club - Datathon '26",
    description:
      "Veriyi Geleceğe Dönüştür! 1 - 15 Aralık 2026 tarihlerinde Türkiye geneli veri bilimi maratonu.",
    images: ["/images/event-logo.jpg"],
  },
  icons: {
    icon: "/images/community-logo.png",
    apple: "/images/community-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#030712] text-white selection:bg-sky-500/30 selection:text-sky-300 font-[family-name:var(--font-inter)] relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
