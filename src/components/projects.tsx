
import { RESUME_DATA } from "@/data/resume-data";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    return (
        <section style={{ maxWidth: 820, margin: "0 auto", padding: "60px var(--page-pad) 120px" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 40, margin: "0 0 40px", textAlign: "center" }}>Projects</h2>
            <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                {RESUME_DATA.projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                        style={{ display: "block", padding: 28, border: "1px solid var(--tint-a-border)", borderRadius: 4, background: "var(--tint-a)", textDecoration: "none", color: "inherit" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                            <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 22, margin: 0 }}>{project.title}</h3>
                            <ArrowUpRight size={16} style={{ color: "var(--ink-52-40)" }} />
                        </div>
                        <p style={{ fontSize: 14, color: "var(--ink-45-40)", lineHeight: 1.6, marginBottom: 16, fontWeight: 300 }}>
                            {project.description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {project.techStack.map((tech) => (
                                <span key={tech} style={{ padding: "3px 10px", background: "var(--background)", color: "var(--ink-45-40)", fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100 }}>
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
