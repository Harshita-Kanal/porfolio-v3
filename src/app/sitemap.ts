import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

const SITE_URL = "https://harshitakanal.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/talks`, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
        { url: `${SITE_URL}/work-log`, changeFrequency: "weekly", priority: 0.6 },
        { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.6 },
    ];

    const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
        changeFrequency: "yearly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}
