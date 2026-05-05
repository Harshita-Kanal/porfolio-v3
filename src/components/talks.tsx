
import { RESUME_DATA } from "@/data/resume-data";
import { ArrowUpRight } from "lucide-react";

export function Talks() {
    return (
        <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground mb-8">Talks</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {RESUME_DATA.talks.map((talk) => (
                    <div
                        key={talk.title}
                        className="group flex flex-col p-6 border border-border rounded-xl hover:border-pink-200 hover:bg-pink-50/30 dark:hover:border-pink-900/50 dark:hover:bg-pink-900/10 transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-foreground">
                                {talk.title}
                            </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                            {talk.conference}
                        </p>
                        <time className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4 block">
                            {talk.date}
                        </time>
                        <div className="mt-auto flex gap-4">
                            {talk.link && (
                                <a
                                    href={talk.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-pink-600 hover:text-pink-700 hover:underline underline-offset-4 flex items-center gap-1"
                                >
                                    Watch <ArrowUpRight className="w-3 h-3" />
                                </a>
                            )}
                            {talk.slides && (
                                <a
                                    href={talk.slides}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4 flex items-center gap-1"
                                >
                                    Slides <ArrowUpRight className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
