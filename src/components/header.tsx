
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
    { href: "/", label: "Home" },
    { href: "/talks", label: "Talks" },
    { href: "/blog", label: "Blog" },
    { href: "/work-log", label: "Work Log" },
];

export function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const linkStyle = (href: string): React.CSSProperties =>
        pathname === href
            ? { color: "var(--ink-24-40)", textDecoration: "none", borderBottom: "1px solid var(--border-subtle-strong)" }
            : { color: "inherit", textDecoration: "none" };

    const newsletterUrl = RESUME_DATA.contact.social.find((s) => s.name === "Substack")?.url || "#";

    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "34px var(--page-pad)",
                position: "relative",
                zIndex: 20,
            }}
        >
            <Link
                href="/"
                style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 26,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "inherit",
                    textDecoration: "none",
                }}
            >
                {RESUME_DATA.initials}
            </Link>

            <div
                className="nav-links"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 40,
                    fontSize: 15,
                    letterSpacing: "0.02em",
                    color: "var(--ink-35-40)",
                    flexWrap: "wrap",
                }}
            >
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className="nav-link" style={linkStyle(link.href)}>
                        {link.label}
                    </Link>
                ))}
                <a
                    href={newsletterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    Newsletter
                </a>
                <ThemeToggle />
            </div>

            <button
                type="button"
                className="nav-hamburger"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                style={{
                    background: "none",
                    border: "none",
                    padding: 6,
                    color: "inherit",
                    cursor: "pointer",
                }}
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {open && (
                <div
                    className="nav-mobile-panel"
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "var(--background)",
                        borderTop: "1px solid var(--border-subtle)",
                        borderBottom: "1px solid var(--border-subtle)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 18,
                        padding: "22px var(--page-pad) 28px",
                        fontSize: 16,
                    }}
                >
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="nav-link" style={linkStyle(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={newsletterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        Newsletter
                    </a>
                    <ThemeToggle />
                </div>
            )}
        </nav>
    );
}
