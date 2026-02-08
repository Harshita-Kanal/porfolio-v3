
import { RESUME_DATA } from "@/data/resume-data";
import { FadeIn, FadeInStagger } from "./ui/fade-in";

export function Experience() {
    return (
        <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-8">Experience</h2>
            <div className="relative border-l border-stone-200 dark:border-stone-800 ml-3 space-y-12">
                {RESUME_DATA.work.map((role, index) => (
                    <div key={role.company + role.start} className="relative pl-8 md:pl-10">
                        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-stone-50 dark:ring-[#0c0a09] bg-stone-200 dark:bg-stone-800" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="font-semibold text-stone-900 dark:text-stone-50 text-lg">
                                {role.company}
                            </h3>
                            <span className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider tabular-nums">
                                {role.start} — {role.end}
                            </span>
                        </div>

                        <p className="text-sm font-medium text-stone-600 dark:text-stone-300 mb-3">{role.title}</p>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
                            {role.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
