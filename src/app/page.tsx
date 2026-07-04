
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, Bloom, Parallax } from "@/components/ui/reveal";
import { CornerGarland } from "@/components/ui/garland";
import { CopyEmailButton } from "@/components/copy-email-button";
import { ContactForm } from "@/components/contact-form";
import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const chapterColors = ["oklch(84% 0.06 20)", "oklch(84% 0.06 300)", "oklch(84% 0.06 85)"];
const dividerFills = [
    { fill: "oklch(85% 0.05 20)", down: true },
    { fill: "oklch(84% 0.06 85)", down: false },
    { fill: "oklch(85% 0.05 20)", down: true },
    { fill: "oklch(83% 0.06 300)", down: false },
    { fill: "oklch(84% 0.06 85)", down: true },
];

export default function Home() {
    return (
        <div style={{ background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-outfit), sans-serif", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

            {/* ambient corner garland: pointed leaves sprouting outward from the vine at alternating angles */}
            <CornerGarland leafColorA="oklch(84% 0.06 20)" leafColorB="oklch(83% 0.05 85)" flowerColor="oklch(84% 0.06 20)" />

            <Header />

            {/* HERO */}
            <Reveal style={{ position: "relative", zIndex: 1, padding: "70px var(--page-pad) 110px", maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-60-20)", marginBottom: 22 }}>A Prologue</div>
                <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 92, lineHeight: 1.02, margin: "0 0 28px", letterSpacing: "-0.01em" }}>{RESUME_DATA.name}</h1>
                <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--ink-38-40)", maxWidth: 660, margin: "0 auto 40px", fontWeight: 300 }}>
                    {RESUME_DATA.summary}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, marginBottom: 46, flexWrap: "wrap" }}>
                    <CopyEmailButton email={RESUME_DATA.contact.email} />
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 26, fontSize: 13.5, letterSpacing: "0.03em", color: "var(--ink-52-40)" }}>
                    {RESUME_DATA.contact.social.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="underline-link" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--border-subtle-strong)" }}>
                            {social.name}
                        </a>
                    ))}
                </div>
            </Reveal>

            {/* divider sprig */}
            <Bloom initialTransform="scale(0.6) rotate(-6deg)" duration="0.9s" style={{ display: "flex", justifyContent: "center", marginBottom: 90 }}>
                <svg data-sprig width="184" height="48" viewBox="0 0 160 44" fill="none">
                    <path d="M5 22 Q80 2 155 22" stroke="oklch(65% 0.06 45)" strokeWidth="1.6" />
                    <g transform="rotate(-25 55 15)"><ellipse cx="55" cy="15" rx="7" ry="3.5" fill="oklch(84% 0.06 20)" /></g>
                    <circle cx="80" cy="9" r="4.5" fill="oklch(83% 0.06 300)" />
                    <g transform="rotate(25 105 15)"><ellipse cx="105" cy="15" rx="7" ry="3.5" fill="oklch(84% 0.06 85)" /></g>
                </svg>
            </Bloom>

            {/* STORY */}
            <Reveal style={{ position: "relative", maxWidth: 780, margin: "0 auto", padding: "0 var(--page-pad) 110px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-60-300)", marginBottom: 22 }}>The Story So Far</div>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 30, fontWeight: 400, lineHeight: 1.55, color: "var(--ink-28-40)" }}>
                    Six years. One pursuit: interfaces that feel inevitable, and engineering that holds quietly in the background.
                </p>
            </Reveal>

            {/* EXPERIENCE */}
            <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 var(--page-pad) 60px" }}>
                <div style={{ textAlign: "center", marginBottom: 70 }}>
                    <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-60-85)", marginBottom: 14 }}>The Chapters</div>
                    <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 44, margin: 0 }}>Experience</h2>
                </div>

                {RESUME_DATA.work.map((role, index) => (
                    <div key={role.company + role.start + role.title}>
                        <Reveal style={{ display: "grid", gridTemplateColumns: "clamp(44px, 12vw, 90px) 1fr", gap: "8px 28px", marginBottom: 8 }}>
                            <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(28px, 7vw, 46px)", color: chapterColors[index % chapterColors.length], textAlign: "right", lineHeight: 1 }}>
                                {ROMAN[index] ?? index + 1}
                            </div>
                            <div className="chapter-content">
                                <div style={{ fontSize: 13, letterSpacing: "0.05em", color: "var(--ink-55-40)", textTransform: "uppercase", marginBottom: 6 }}>{role.start} — {role.end}</div>
                                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 26, margin: "0 0 4px" }}>{role.title}</h3>
                                <div style={{ fontSize: 14.5, color: "var(--ink-50-40)", marginBottom: 10 }}>{role.company}</div>
                                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-35-40)", fontWeight: 300, margin: 0 }}>{role.description}</p>
                            </div>
                        </Reveal>

                        {index < RESUME_DATA.work.length - 1 && (
                            <Bloom
                                initialTransform={`scale(0.5) rotate(${dividerFills[index % dividerFills.length].down ? -8 : 8}deg)`}
                                duration="0.7s"
                                style={{ display: "flex", justifyContent: "center", margin: "26px 0" }}
                            >
                                <svg data-sprig width="104" height="33" viewBox="0 0 90 30" fill="none">
                                    <path d={dividerFills[index % dividerFills.length].down ? "M4 15 Q45 2 86 15" : "M4 15 Q45 26 86 15"} stroke="oklch(65% 0.06 45)" strokeWidth="1.5" />
                                    <circle cx="45" cy={dividerFills[index % dividerFills.length].down ? 8 : 21} r="3.5" fill={dividerFills[index % dividerFills.length].fill} />
                                </svg>
                            </Bloom>
                        )}
                    </div>
                ))}
            </section>

            {/* divider sprig */}
            <Bloom initialTransform="scale(0.6) rotate(6deg)" duration="0.9s" style={{ display: "flex", justifyContent: "center", margin: "90px 0" }}>
                <svg data-sprig width="184" height="48" viewBox="0 0 160 44" fill="none">
                    <path d="M5 22 Q80 42 155 22" stroke="oklch(65% 0.06 45)" strokeWidth="1.6" />
                    <g transform="rotate(25 55 29)"><ellipse cx="55" cy="29" rx="7" ry="3.5" fill="oklch(84% 0.06 300)" /></g>
                    <circle cx="80" cy="35" r="4.5" fill="oklch(83% 0.06 20)" />
                    <g transform="rotate(-25 105 29)"><ellipse cx="105" cy="29" rx="7" ry="3.5" fill="oklch(84% 0.06 85)" /></g>
                </svg>
            </Bloom>

            {/* TALKS & BLOG */}
            <Reveal style={{ position: "relative", maxWidth: 960, margin: "0 auto", padding: "0 var(--page-pad) 100px" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-60-20)", marginBottom: 14 }}>Elsewhere</div>
                    <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 44, margin: 0 }}>Words &amp; Talks</h2>
                </div>
                <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
                    <Link href="/talks" className="card-link" style={{ flex: 1, minWidth: 280, maxWidth: 380, textDecoration: "none", color: "inherit", background: "var(--tint-a)", border: "1px solid var(--tint-a-border)", borderRadius: 4, padding: "44px 36px", textAlign: "center", display: "block" }}>
                        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 26, margin: "0 0 10px" }}>Talks</h3>
                        <p style={{ fontSize: 15, color: "var(--ink-45-40)", margin: 0, fontWeight: 300 }}>Conversations and stages, on engineering and building well.</p>
                    </Link>
                    <Link href="/blog" className="card-link" style={{ flex: 1, minWidth: 280, maxWidth: 380, textDecoration: "none", color: "inherit", background: "var(--tint-b)", border: "1px solid var(--tint-b-border)", borderRadius: 4, padding: "44px 36px", textAlign: "center", display: "block" }}>
                        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 26, margin: "0 0 10px" }}>Blog</h3>
                        <p style={{ fontSize: 15, color: "var(--ink-45-40)", margin: 0, fontWeight: 300 }}>Notes on craft, AI-first products, and the details in between.</p>
                    </Link>
                </div>
            </Reveal>

            {/* NEWSLETTER */}
            <section style={{ position: "relative", background: "var(--section-tint)", padding: "100px var(--page-pad)", textAlign: "center", overflow: "hidden" }}> 

                <Reveal style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
                    <svg data-sprig style={{ width: 120, height: 56, display: "block", margin: "0 auto 22px", opacity: 0.75 }} viewBox="0 0 120 56" fill="none">
                        <path d="M6 40 Q28 10 60 20" stroke="oklch(60% 0.05 20)" strokeWidth="1.3" strokeLinecap="round" />
                        <path data-leaf="true" d="M0,0 Q7,-5 14,0 Q7,5 0,0 Z" fill="oklch(78% 0.05 20)" transform="translate(20 27) rotate(320)" />
                        <path data-leaf="true" d="M0,0 Q6,-4 12,0 Q6,4 0,0 Z" fill="oklch(83% 0.06 300)" transform="translate(38 17) rotate(350)" />

                        <path d="M60 20 Q78 26 84 10" stroke="oklch(60% 0.05 20)" strokeWidth="1.2" strokeLinecap="round" />
                        <path data-leaf="true" d="M0,0 Q6,-4 12,0 Q6,4 0,0 Z" fill="oklch(83% 0.06 300)" transform="translate(70 24) rotate(60)" />
                        <path data-leaf="true" d="M0,0 Q5,-4 10,0 Q5,4 0,0 Z" fill="oklch(78% 0.05 20)" transform="translate(80 15) rotate(300)" />

                        <path d="M60 20 Q86 32 114 24" stroke="oklch(60% 0.05 20)" strokeWidth="1.3" strokeLinecap="round" />
                        <path data-leaf="true" d="M0,0 Q7,-5 14,0 Q7,5 0,0 Z" fill="oklch(78% 0.05 20)" transform="translate(92 29) rotate(15)" />
                        <path data-leaf="true" d="M0,0 Q6,-4 12,0 Q6,4 0,0 Z" fill="oklch(83% 0.06 300)" transform="translate(105 25) rotate(340)" />
                        <circle cx="60" cy="20" r="2.4" fill="oklch(78% 0.05 20)" />
                    </svg>
                    <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-55-20)", marginBottom: 18 }}>An Epilogue, of Sorts</div>
                    <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 38, margin: "0 0 18px" }}>Subscribe to my newsletter</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-38-40)", fontWeight: 300, margin: "0 0 34px" }}>
                        Get the latest updates on my work, thoughts on engineering, and more — delivered straight to your inbox.
                    </p>
                    <a
                        href={RESUME_DATA.contact.social.find((s) => s.name === "Substack")?.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-button"
                        style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 15, letterSpacing: "0.03em", color: "oklch(97.5% 0.014 75)", background: "oklch(30% 0.02 40)", padding: "14px 40px", borderRadius: 100, textDecoration: "none", display: "inline-block" }}
                    >
                        Subscribe
                    </a>
                </Reveal>
            </section>

            {/* CONTACT */}
            <section style={{ maxWidth: 640, margin: "0 auto", padding: "100px var(--page-pad) 110px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-60-20)", marginBottom: 22 }}>Write to Me</div>
                <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 44, margin: "0 0 34px" }}>Get in Touch</h2>
                <ContactForm />
            </section>

            {/* closing twig */}
            <Bloom initialTransform="scale(0.6) rotate(-4deg)" duration="0.9s" style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}>
                <svg data-sprig width="140" height="40" viewBox="0 0 120 36" fill="none">
                    <path className="twig-branch" d="M4 18 Q60 2 116 18" stroke="oklch(65% 0.06 45)" strokeWidth="1.5" />
                    <circle cx="40" cy="10" r="4" fill="oklch(84% 0.06 20)" />
                    <circle cx="60" cy="5" r="3" fill="oklch(83% 0.06 300)" />
                    <circle cx="80" cy="10" r="4" fill="oklch(84% 0.06 85)" />
                </svg>
            </Bloom>

            <Footer />
        </div>
    );
}
