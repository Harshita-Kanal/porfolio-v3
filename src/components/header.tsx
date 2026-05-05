
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
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

    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const dateStr = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "Asia/Kolkata" });
            setDateTime(`${dateStr} / Bangalore, Ind`);
        };
        updateTime();
        // Update only occasionally if needed, but date changes rarely.
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="mb-12 sm:mb-16 py-4 relative z-50">
            <div className="absolute -top-6 right-0 text-[11px] sm:text-xs font-mono text-muted-foreground">
                {dateTime}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
                href="/"
                aria-label="Home"
                className="text-2xl font-serif font-bold tracking-tight text-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors w-fit"
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
                            pathname === link.href ? "text-foreground" : "text-muted-foreground"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
                <a
                    href={RESUME_DATA.contact.social.find(s => s.name === "Substack")?.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-pink-600 dark:hover:text-pink-400"
                >
                    Newsletter
                </a>
                <ThemeToggle />
            </nav>
            </div>
        </header>
    );
}
