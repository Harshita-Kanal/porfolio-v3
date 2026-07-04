
import { RESUME_DATA } from "@/data/resume-data";
import { Reveal, Bloom } from "@/components/ui/reveal";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const chapterColors = ["oklch(84% 0.06 20)", "oklch(84% 0.06 300)", "oklch(84% 0.06 85)"];

export function Talks() {
    return (
        <section style={{ maxWidth: 820, margin: "0 auto", padding: "0 var(--page-pad) 120px" }}>
            {RESUME_DATA.talks.map((talk, index) => (
                <div key={talk.title}>
                    <Reveal style={{ display: "grid", gridTemplateColumns: "clamp(44px, 12vw, 90px) 1fr", gap: "8px 28px", marginBottom: 8 }}>
                        <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(28px, 7vw, 46px)", color: chapterColors[index % chapterColors.length], textAlign: "right", lineHeight: 1 }}>
                            {ROMAN[index] ?? index + 1}
                        </div>
                        <div>
                            <div style={{ fontSize: 13, letterSpacing: "0.05em", color: "var(--ink-55-40)", textTransform: "uppercase", marginBottom: 6 }}>
                                {talk.conference} — {talk.date}
                            </div>
                            <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 28, margin: "0 0 16px" }}>
                                {talk.title}
                            </h3>
                            <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
                                {talk.link && (
                                    <a
                                        href={talk.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline-link"
                                        style={{ color: "var(--ink-45-20)", textDecoration: "none", borderBottom: "1px solid oklch(80% 0.05 20)" }}
                                    >
                                        Watch →
                                    </a>
                                )}
                                {talk.slides && (
                                    <a
                                        href={talk.slides}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline-link"
                                        style={{ color: "var(--ink-45-300)", textDecoration: "none", borderBottom: "1px solid oklch(80% 0.05 300)" }}
                                    >
                                        Slides →
                                    </a>
                                )}
                            </div>
                        </div>
                    </Reveal>

                    {index < RESUME_DATA.talks.length - 1 && (
                        <Bloom initialTransform="scale(0.5) rotate(8deg)" duration="0.7s" style={{ display: "flex", justifyContent: "center", margin: "44px 0" }}>
                            <svg data-sprig width="104" height="33" viewBox="0 0 90 30" fill="none">
                                <path d="M4 15 Q45 26 86 15" stroke="oklch(65% 0.06 45)" strokeWidth="1.5" />
                                <circle cx="45" cy="21" r="3.5" fill="oklch(84% 0.06 300)" />
                            </svg>
                        </Bloom>
                    )}
                </div>
            ))}
        </section>
    );
}
