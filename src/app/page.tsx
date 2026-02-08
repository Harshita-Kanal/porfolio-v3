
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

import { FadeIn } from "@/components/ui/fade-in";
import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <FadeIn>
        <Header />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Hero />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Experience />
      </FadeIn>





      <FadeIn delay={0.4}>
        <section className="mb-16 p-8 bg-stone-100 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">Subscribe to my newsletter</h2>
              <p className="text-stone-600 dark:text-stone-400 text-sm max-w-sm">
                Get the latest updates on my work, thoughts on engineering, and more delivered straight to your inbox.
              </p>
            </div>
            <a
              href={RESUME_DATA.contact.social.find(s => s.name === "Substack")?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-900 font-medium text-sm hover:bg-pink-600 dark:hover:bg-pink-400 transition-colors shadow-sm"
            >
              Subscribe
            </a>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.5}>
        <Footer />
      </FadeIn>
    </main>
  );
}
