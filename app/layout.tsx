import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";\nimport VerticalTilesPreloader from "@/components/animata/preloader/vertical-tiles";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyna Interior & Konstruksi | Desain, Bangun & Renovasi Lampung",
  description:
    "Wujudkan ruang yang nyaman dan berkarakter bersama Kyna Interior & Konstruksi Lampung. Konsultasi desain, pembangunan, dan renovasi. Gratis survey.",
  metadataBase: new URL("https://kynainterior.com"),
  openGraph: {
    title: "Kyna Interior & Konstruksi",
    description: "Ruang yang dirancang untuk hidup lebih baik.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${dmSans.variable} ${playfair.variable}`}><VerticalTilesPreloader />{children}</body>
    </html>
  );
}
