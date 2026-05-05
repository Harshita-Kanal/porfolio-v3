import { Montserrat, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { MouseBackground } from "@/components/mouse-background";

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville"
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={cn(libre_baskerville.variable, montserrat.variable, "antialiased")} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-accent/30 selection:text-[var(--foreground)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="summer"
          themes={["summer", "winter"]}
          enableSystem={false}
          disableTransitionOnChange
        >
          <MouseBackground />
          <main className="min-h-screen max-w-2xl mx-auto px-5 py-12 sm:px-6 sm:py-24 relative z-10 transition-colors duration-500">
            {children}
          </main>
          {/* Extremely dispersed bottom-left glow */}
          <div className="fixed -bottom-32 -left-32 w-[1000px] h-[300px] blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-700" style={{ backgroundColor: 'var(--accent-glow)' }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
