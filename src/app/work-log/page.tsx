
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, Bloom } from "@/components/ui/reveal";
import { CornerGarland } from "@/components/ui/garland";
import { getWorkLogEntries } from "@/lib/workLog";

export const metadata = {
    title: "Work Log",
    description: "Loose notes and learnings, kept as I go — a running chronicle rather than a polished record.",
    alternates: { canonical: "/work-log" },
    openGraph: {
        title: "Work Log | Harshita Kanal",
        description: "Loose notes and learnings, kept as I go — a running chronicle rather than a polished record.",
        url: "/work-log",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Work Log | Harshita Kanal",
        description: "Loose notes and learnings, kept as I go.",
    },
};

const THEMES = [
    { hue: 20, tagColor: "oklch(55% 0.05 20)", tagBg: "oklch(93% 0.03 20)", vineStroke: "oklch(60% 0.05 20)", leafA: "oklch(78% 0.05 20)", leafB: "oklch(83% 0.06 300)" },
    { hue: 300, tagColor: "oklch(55% 0.06 300)", tagBg: "oklch(93% 0.03 300)", vineStroke: "oklch(60% 0.06 300)", leafA: "oklch(83% 0.06 300)", leafB: "oklch(78% 0.05 20)" },
    { hue: 85, tagColor: "oklch(52% 0.06 85)", tagBg: "oklch(93% 0.03 85)", vineStroke: "oklch(60% 0.06 85)", leafA: "oklch(83% 0.05 85)", leafB: "oklch(78% 0.05 20)" },
];

export default function WorkLogPage() {
    const entries = getWorkLogEntries();

    return (
        <div style={{ background: "oklch(97.5% 0.014 75)", color: "oklch(24% 0.02 40)", fontFamily: "var(--font-outfit), sans-serif", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

            <CornerGarland leafColorA="oklch(83% 0.06 20)" leafColorB="oklch(85% 0.05 300)" flowerColor="oklch(85% 0.05 300)" />

            <Header />

            <Reveal style={{ maxWidth: 960, margin: "0 auto", padding: "60px var(--page-pad) 30px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(60% 0.05 300)", marginBottom: 18 }}>Marginalia</div>
                <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 64, margin: "0 0 20px" }}>Work Log</h1>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "oklch(40% 0.02 40)", fontWeight: 300, margin: 0 }}>
                    A running collection of notes, ideas, and lessons learned along the way.                </p>
            </Reveal>

            <Bloom initialTransform="scale(0.6) rotate(-6deg)" duration="0.9s" style={{ display: "flex", justifyContent: "center", margin: "50px 0 80px" }}>
                <svg width="160" height="44" viewBox="0 0 160 44" fill="none">
                    <path d="M5 22 Q80 2 155 22" stroke="oklch(72% 0.04 40)" strokeWidth="1.3" />
                    <ellipse cx="55" cy="15" rx="7" ry="3.5" fill="oklch(83% 0.06 300)" transform="rotate(-25 55 15)" />
                    <circle cx="80" cy="9" r="4.5" fill="oklch(84% 0.06 20)" />
                    <ellipse cx="105" cy="15" rx="7" ry="3.5" fill="oklch(83% 0.05 85)" transform="rotate(25 105 15)" />
                </svg>
            </Bloom>

            <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 var(--page-pad) 130px", display: "flex", flexDirection: "column", gap: 48 }}>
                {entries.map((entry, index) => {
                    const theme = THEMES[index % THEMES.length];
                    return (
                        <div key={entry.slug} style={{ display: "flex", alignItems: "flex-start", gap: 22 }}>
                            <Bloom
                                initialTransform="scale(0.85)"
                                duration="1s"
                                style={{ flex: "0 0 auto", width: "clamp(40px, 10vw, 64px)", aspectRatio: "64 / 220" }}
                            >
                                <svg width="100%" height="100%" viewBox="0 0 64 220" style={{ display: "block" }} fill="none">
                                    <path d="M32 0 Q46 40 30 80 Q16 118 34 160 Q44 188 30 220" stroke={theme.vineStroke} strokeWidth="1.4" strokeLinecap="round" />
                                    <path data-leaf="true" d="M0,0 Q8,-6 16,0 Q8,6 0,0 Z" fill={theme.leafA} transform="translate(38 30) rotate(300)" />
                                    <path data-leaf="true" d="M0,0 Q7,-5 14,0 Q7,5 0,0 Z" fill={theme.leafB} transform="translate(18 70) rotate(30)" />
                                    <path data-leaf="true" d="M0,0 Q7,-5 14,0 Q7,5 0,0 Z" fill={theme.leafA} transform="translate(36 120) rotate(320)" />
                                    <circle cx="32" cy="0" r="3" fill={theme.leafA} />
                                </svg>
                            </Bloom>

                            <Reveal style={{ flex: "1 1 auto", minWidth: 0, paddingTop: 6 }}>
                                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
                                    <div style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(50% 0.02 40)" }}>{entry.date}</div>
                                    <div style={{ fontSize: 11.5, letterSpacing: "0.04em", textTransform: "uppercase", color: theme.tagColor, background: theme.tagBg, padding: "3px 11px", borderRadius: 100 }}>{entry.tag}</div>
                                </div>
                                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 25, margin: "0 0 12px" }}>{entry.title}</h3>
                                <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "oklch(35% 0.02 40)", fontWeight: 300, margin: 0, whiteSpace: "pre-wrap" }}>{entry.body}</p>
                            </Reveal>
                        </div>
                    );
                })}
            </section>

            <Footer withBorder />
        </div>
    );
}
