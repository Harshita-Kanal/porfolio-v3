
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content");

export type BlogPost = {
    slug: string;
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        image?: string;
    };
    content: string;
};

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((file) => path.extname(file) === ".md")
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8").trim();
            const { data, content } = matter(fileContents);

            return {
                slug,
                metadata: data as BlogPost["metadata"],
                content,
            };
        });

    return allPostsData.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }
        return 1;
    });
}

export function getBlogPost(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        console.log(`[getBlogPost] Reading post from: ${fullPath} for slug: ${slug}`);

        if (!fs.existsSync(fullPath)) {
            console.error(`[getBlogPost] File not found: ${fullPath}`);
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, "utf8").trim();
        const { data, content } = matter(fileContents);

        console.log(`[getBlogPost] Successfully loaded metadata for ${slug}:`, data);

        return {
            slug,
            metadata: data as BlogPost["metadata"],
            content,
        };
    } catch (e) {
        console.error(`[getBlogPost] Error loading post ${slug}:`, e);
        return null;
    }
}
