
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";
import { getBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata = {
    title: "Blog | Harshita Kanal",
    description: "Writing on software engineering, web accessibility, and AI.",
};

export default function Blog() {
    const posts = getBlogPosts();

    return (
        <main>
            <FadeIn>
                <Header />
            </FadeIn>

            <FadeIn delay={0.1}>
                <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground mb-8">
                    Writing
                </h1>
                <p className="mb-12 max-w-lg text-muted-foreground">
                    Thoughts on software engineering, the web, and AI.
                </p>
            </FadeIn>

            <FadeInStagger faster>
                <div className="space-y-10">
                    {posts.map((post) => {
                        const dateStr = formatDate(post.metadata.publishedAt);

                        return (
                            <FadeIn key={post.slug}>
                                <Link href={`/blog/${post.slug}`} className="block group">
                                    <article className="flex flex-col space-y-3 p-6 rounded-2xl border border-border hover:border-pink-200 dark:hover:border-pink-900/50 hover:bg-pink-50/30 dark:hover:bg-pink-900/10 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                                            <h2 className="text-xl font-bold text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                                {post.metadata.title}
                                            </h2>
                                            {/* <time className="text-sm text-muted-foreground tabular-nums shrink-0 uppercase tracking-wider font-medium">
                                                {dateStr}
                                            </time> */}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
                                            {post.metadata.summary}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-pink-600 dark:text-pink-400 group-hover:gap-2 transition-all">
                                            <span>Read article</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-all">&rarr;</span>
                                        </div>
                                    </article>
                                </Link>
                            </FadeIn>
                        )
                    })}
                </div>
            </FadeInStagger>

            <FadeIn delay={0.2}>
                <Footer />
            </FadeIn>
        </main>
    );
}
