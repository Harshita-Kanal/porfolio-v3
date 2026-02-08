
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { MouseBackground } from "@/components/mouse-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Harshita Kanal | Senior Software Engineer",
  description: "Portfolio of Harshita Kanal, a Senior Software Engineer based in Bangalore. Focused on building products with extra attention to detail.",
  openGraph: {
    title: "Harshita Kanal | Senior Software Engineer",
    description: "Portfolio of Harshita Kanal, a Senior Software Engineer based in Bangalore.",
    url: "https://harshitakanal.com",
    siteName: "Harshita Kanal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshita Kanal | Senior Software Engineer",
    description: "Portfolio of Harshita Kanal, a Senior Software Engineer based in Bangalore.",
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
    <html lang="en" className={cn(inter.variable, montserrat.variable, "antialiased")} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-pink-200 selection:text-stone-900 dark:selection:bg-pink-500 dark:selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen max-w-2xl mx-auto px-6 py-12 sm:py-24 relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
