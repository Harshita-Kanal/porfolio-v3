
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Talks as TalksList } from "@/components/talks";
import { Reveal, Bloom } from "@/components/ui/reveal";
import { CornerGarland } from "@/components/ui/garland";

export const metadata = {
    title: "Talks",
    description: "Recent talks and presentations by Harshita Kanal — conversations and stages, on engineering and building well.",
    alternates: { canonical: "/talks" },
    openGraph: {
        title: "Talks | Harshita Kanal",
        description: "Recent talks and presentations by Harshita Kanal — conversations and stages, on engineering and building well.",
        url: "/talks",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Talks | Harshita Kanal",
        description: "Recent talks and presentations by Harshita Kanal.",
    },
};

export default function TalksPage() {
    return (
        <div style={{ background: "oklch(97.5% 0.014 75)", color: "oklch(24% 0.02 40)", fontFamily: "var(--font-outfit), sans-serif", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

            <CornerGarland leafColorA="oklch(83% 0.06 20)" leafColorB="oklch(85% 0.05 300)" flowerColor="oklch(85% 0.05 300)" />

            <Header />

            <Reveal style={{ maxWidth: 760, margin: "0 auto", padding: "60px var(--page-pad) 30px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(60% 0.05 20)", marginBottom: 18 }}>On Stage</div>
                <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 64, margin: "0 0 20px" }}>Talks</h1>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "oklch(40% 0.02 40)", fontWeight: 300, margin: 0 }}>A few conversations, on stage and off.</p>
            </Reveal>

            <Bloom initialTransform="scale(0.6) rotate(-6deg)" duration="0.9s" style={{ display: "flex", justifyContent: "center", margin: "50px 0 70px" }}>
                <svg width="160" height="44" viewBox="0 0 160 44" fill="none">
                    <path d="M5 22 Q80 2 155 22" stroke="oklch(72% 0.04 40)" strokeWidth="1.3" />
                    <ellipse cx="55" cy="15" rx="7" ry="3.5" fill="oklch(84% 0.06 20)" transform="rotate(-25 55 15)" />
                    <circle cx="80" cy="9" r="4.5" fill="oklch(83% 0.06 300)" />
                    <ellipse cx="105" cy="15" rx="7" ry="3.5" fill="oklch(84% 0.06 85)" transform="rotate(25 105 15)" />
                </svg>
            </Bloom>

            <TalksList />

            <Footer withBorder />
        </div>
    );
}
