
import { RESUME_DATA } from "@/data/resume-data";
import { FadeIn, FadeInStagger } from "./ui/fade-in";

export function Experience() {
    return (
        <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground mb-8">Experience</h2>
            <div className="relative border-l border-border ml-3 space-y-12">
                {RESUME_DATA.work.map((role, index) => (
                    <div key={role.company + role.start} className="relative pl-8 md:pl-10 group">
                        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-background bg-muted group-hover:bg-pink-500 group-hover:ring-pink-100 dark:group-hover:ring-pink-900/30 transition-all duration-300 group-hover:animate-pulse-pink" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="font-semibold text-foreground text-lg">
                                {role.company}
                            </h3>
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider tabular-nums">
                                {role.start} — {role.end}
                            </span>
                        </div>

                        <p className="text-sm font-medium text-muted-foreground mb-3">{role.title}</p>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {role.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
