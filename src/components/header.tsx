
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        // { href: "/projects", label: "Projects" },
        { href: "/talks", label: "Talks" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header className="mb-12 sm:mb-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between py-4">
            <Link
                href="/"
                className="text-2xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 hover:text-pink-600 dark:hover:text-pink-400 transition-colors w-fit"
            >
                {RESUME_DATA.initials}
            </Link>

            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-xs sm:text-sm font-medium transition-colors hover:text-pink-600 dark:hover:text-pink-400",
                            pathname === link.href ? "text-stone-900 dark:text-stone-50" : "text-stone-500 dark:text-stone-400"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
                <a
                    href={RESUME_DATA.contact.social.find(s => s.name === "Substack")?.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-stone-500 dark:text-stone-400 transition-colors hover:text-pink-600 dark:hover:text-pink-400"
                >
                    Newsletter
                </a>
                <ThemeToggle />
            </nav>
        </header>
    );
}
