import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeInitScript } from "@/components/theme-toggle";

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

const SITE_URL = "https://harshitakanal.com";
const SITE_NAME = "Harshita Kanal";
const SITE_TITLE = "Harshita Kanal | Senior Software Engineer & AI Engineer";
const SITE_DESCRIPTION =
  "Portfolio of Harshita Kanal, a Senior Software Engineer at HackerRank based in Bangalore, building AI-powered products with extra attention to detail and design.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Harshita Kanal",
    "Senior Software Engineer",
    "AI Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer Bangalore",
    "Portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@harshita_kanal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#f7f2ea",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: RESUME_DATA.name,
  jobTitle: "Senior Software Engineer",
  description: RESUME_DATA.about,
  url: SITE_URL,
  email: `mailto:${RESUME_DATA.contact.email}`,
  worksFor: {
    "@type": "Organization",
    name: "HackerRank",
    url: "https://hackerrank.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  sameAs: RESUME_DATA.contact.social.map((s) => s.url),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(cormorant.variable, outfit.variable, "antialiased")} suppressHydrationWarning>
      <body>
        <ThemeInitScript />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
