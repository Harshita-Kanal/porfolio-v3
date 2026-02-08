
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FadeIn } from "@/components/ui/fade-in";
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

    // Safe date formatting
    const dateStr = formatDate(post.metadata.publishedAt);

    return (
        <main>
            <FadeIn>
                <Header />
            </FadeIn>

            <FadeIn delay={0.1}>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 mb-8 transition-colors"
                >
                    <MoveLeft className="w-4 h-4" /> Back to blog
                </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
                <article className="max-w-none">
                    <header className="mb-12 pb-8 border-b border-stone-100 dark:border-stone-900">
                        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-50 mb-6 text-balance leading-[1.1]">
                            {post.metadata.title}
                        </h1>
                        <div className="flex items-center gap-3 text-sm">
                            <time className="text-stone-400 dark:text-stone-500 tabular-nums font-medium uppercase tracking-wider">
                                {dateStr}
                            </time>
                            <span className="text-stone-200 dark:text-stone-800">•</span>
                            <span className="text-stone-400 dark:text-stone-500 font-medium uppercase tracking-wider">
                                {Math.ceil(post.content.split(/\s+/).length / 200)} min read
                            </span>
                        </div>
                    </header>

                    <div className="prose prose-stone prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-pink-600 dark:prose-a:text-pink-400 prose-img:rounded-2xl transition-colors">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </article>
            </FadeIn>

            <FadeIn delay={0.3}>
                <Footer />
            </FadeIn>
        </main>
    );
}
