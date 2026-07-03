
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const workLogDirectory = path.join(process.cwd(), "src/content/work-log");

export type WorkLogEntry = {
    slug: string;
    date: string;
    tag: string;
    title: string;
    body: string;
};

export function getWorkLogEntries(): WorkLogEntry[] {
    if (!fs.existsSync(workLogDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(workLogDirectory);
    const entries = fileNames
        .filter((file) => path.extname(file) === ".md")
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(workLogDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8").trim();
            const { data, content } = matter(fileContents);

            return {
                slug,
                date: data.date as string,
                tag: data.tag as string,
                title: data.title as string,
                body: content.trim(),
            };
        });

    return entries.sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) {
            return -1;
        }
        return 1;
    });
}
