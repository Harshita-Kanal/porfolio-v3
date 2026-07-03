import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Harshita Kanal | AI Engineer",
  description: "Portfolio of Harshita Kanal, a AI Engineer based in Bangalore. Focused on building products with extra attention to detail.",
  openGraph: {
    title: "Harshita Kanal | AI Engineer",
    description: "Portfolio of Harshita Kanal, a AI Engineer based in Bangalore.",
    url: "https://harshitakanal.com",
    siteName: "Harshita Kanal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshita Kanal | AI Engineer",
    description: "Portfolio of Harshita Kanal, a AI Engineer based in Bangalore.",
    creator: "@harshita_kanal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(cormorant.variable, outfit.variable, "antialiased")}>
      <body>{children}</body>
    </html>
  );
}
