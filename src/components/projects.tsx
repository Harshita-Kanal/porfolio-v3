
import { RESUME_DATA } from "@/data/resume-data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    return (
        <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-8">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {RESUME_DATA.projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-6 border border-stone-200 dark:border-stone-800 rounded-xl hover:border-pink-200 hover:bg-pink-50/30 dark:hover:border-pink-900/50 dark:hover:bg-pink-900/10 transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-stone-900 dark:text-stone-50 group-hover:text-pink-700 dark:group-hover:text-pink-400 transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="w-4 h-4 text-stone-300 dark:text-stone-600 group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4 min-h-[60px]">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-[10px] uppercase tracking-wider font-medium rounded-full group-hover:bg-white dark:group-hover:bg-stone-900 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
