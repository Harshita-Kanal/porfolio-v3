
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/ui/reveal";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    const posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) {
        return;
    }

    const { title, publishedAt: publishedTime, summary: description } = post.metadata;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `https://harshitakanal.com/blog/${post.slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const dateStr = formatDate(post.metadata.publishedAt);

    return (
        <div style={{ background: "oklch(97.5% 0.014 75)", color: "oklch(24% 0.02 40)", fontFamily: "var(--font-outfit), sans-serif", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
            <Header />

            <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 64px 120px" }}>
                <Link
                    href="/blog"
                    className="underline-link"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "oklch(52% 0.02 40)", textDecoration: "none", marginBottom: 32 }}
                >
                    <MoveLeft size={16} /> Back to blog
                </Link>

                <Reveal>
                    <article>
                        <header style={{ marginBottom: 48, paddingBottom: 32, borderBottom: "1px solid oklch(90% 0.02 40)" }}>
                            <div style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(60% 0.05 20)", marginBottom: 18 }}>Article</div>
                            <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: 48, lineHeight: 1.1, margin: "0 0 24px" }}>{post.metadata.title}</h1>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "oklch(52% 0.02 40)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                <time>{dateStr}</time>
                                <span>•</span>
                                <span>{Math.ceil(post.content.split(/\s+/).length / 200)} min read</span>
                            </div>
                        </header>

                        <div className="prose prose-lg max-w-none">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>
                    </article>
                </Reveal>
            </div>

            <Footer withBorder />
        </div>
    );
}
