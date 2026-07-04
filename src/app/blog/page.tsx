
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, Bloom } from "@/components/ui/reveal";
import { CornerGarland } from "@/components/ui/garland";
import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
    title: "Blog",
    description: "Writing on software engineering, web accessibility, and AI by Harshita Kanal.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Blog | Harshita Kanal",
        description: "Writing on software engineering, web accessibility, and AI by Harshita Kanal.",
        url: "/blog",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Harshita Kanal",
        description: "Writing on software engineering, web accessibility, and AI.",
    },
};

const cardColors = [
    { bg: "var(--tint-a)", border: "var(--tint-a-border)", link: "var(--ink-45-20)", underline: "var(--tint-a-border)" },
    { bg: "var(--tint-b)", border: "var(--tint-b-border)", link: "var(--ink-45-300)", underline: "var(--tint-b-border)" },
];

export default function Blog() {
    const posts = getBlogPosts();

    return (
        <div style={{ background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-outfit), sans-serif", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

            <CornerGarland leafColorA="oklch(84% 0.06 85)" leafColorB="oklch(83% 0.06 300)" flowerColor="oklch(83% 0.06 300)" />

            <Header />

            <Reveal style={{ maxWidth: 820, margin: "0 auto", padding: "60px var(--page-pad) 30px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-60-85)", marginBottom: 18 }}>In Writing</div>
                <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 64, margin: "0 0 20px" }}>Writing</h1>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-40-40)", fontWeight: 300, margin: 0 }}>Thoughts on software engineering, the web, and AI.</p>
            </Reveal>

            <Bloom initialTransform="scale(0.6) rotate(6deg)" duration="0.9s" style={{ display: "flex", justifyContent: "center", margin: "50px 0 70px" }}>
                <svg data-sprig width="184" height="48" viewBox="0 0 160 44" fill="none">
                    <path d="M5 22 Q80 2 155 22" stroke="oklch(65% 0.06 45)" strokeWidth="1.6" />
                    <ellipse cx="55" cy="15" rx="7" ry="3.5" fill="oklch(84% 0.06 85)" transform="rotate(-25 55 15)" />
                    <circle cx="80" cy="9" r="4.5" fill="oklch(83% 0.06 20)" />
                    <ellipse cx="105" cy="15" rx="7" ry="3.5" fill="oklch(84% 0.06 300)" transform="rotate(25 105 15)" />
                </svg>
            </Bloom>

            <section style={{ maxWidth: 780, margin: "0 auto", padding: "0 var(--page-pad) 120px", display: "flex", flexDirection: "column", gap: 40 }}>
                {posts.map((post, index) => {
                    const c = cardColors[index % cardColors.length];
                    return (
                        <Reveal key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="card-link"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    background: c.bg,
                                    border: `1px solid ${c.border}`,
                                    borderRadius: 4,
                                    padding: "40px 44px",
                                    display: "block",
                                }}
                            >
                                <div style={{ fontSize: 13, letterSpacing: "0.05em", color: "var(--ink-55-40)", textTransform: "uppercase", marginBottom: 10 }}>Article</div>
                                <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: 30, margin: "0 0 12px" }}>{post.metadata.title}</h3>
                                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-38-40)", fontWeight: 300, margin: "0 0 18px" }}>{post.metadata.summary}</p>
                                <span style={{ fontSize: 14, color: c.link, borderBottom: `1px solid ${c.underline}` }}>Read article →</span>
                            </Link>
                        </Reveal>
                    );
                })}
            </section>

            <Footer withBorder />
        </div>
    );
}
