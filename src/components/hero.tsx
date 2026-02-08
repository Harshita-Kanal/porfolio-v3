
import { RESUME_DATA } from "@/data/resume-data";
import { Github, Linkedin, MoveRight, Rss, Twitter } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    substack: Rss,
};

export function Hero() {
    return (
        <section className="mb-16">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl mb-6">
                {RESUME_DATA.name}
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-8 max-w-lg">
                {RESUME_DATA.summary}
            </p>

            <div className="flex gap-4 items-center">
                <a
                    href="mailto:harshita.kgv@gmail.com"
                    className="inline-flex items-center gap-2 text-sm font-medium border-b border-stone-200 dark:border-stone-800 hover:border-pink-500 hover:text-pink-600 transition-all pb-0.5"
                >
                    Contact Me <MoveRight className="w-4 h-4" />
                </a>
                <span className="text-stone-300">/</span>
                <div className="flex gap-3">
                    {RESUME_DATA.contact.social.map((social) => {
                        const Icon = iconMap[social.icon];
                        if (!Icon) return null;

                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-all"
                                aria-label={`${social.name} profile`}
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
