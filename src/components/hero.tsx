
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
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                {RESUME_DATA.name}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {RESUME_DATA.summary}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
                <a
                    href="mailto:harshita.kgv@gmail.com"
                    className="inline-flex items-center gap-2 text-sm font-medium border-b border-border hover:border-pink-500 hover:text-pink-600 transition-all pb-0.5 whitespace-nowrap"
                >
                    Contact Me <MoveRight className="w-4 h-4" />
                </a>
                <span className="hidden sm:inline text-muted-foreground">/</span>
                <div className="flex gap-1 sm:gap-3">
                    {RESUME_DATA.contact.social.map((social) => {
                        const Icon = iconMap[social.icon];
                        if (!Icon) return null;

                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
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
