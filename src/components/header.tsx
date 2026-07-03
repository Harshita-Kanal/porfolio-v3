
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESUME_DATA } from "@/data/resume-data";

export function Header() {
    const pathname = usePathname();

    const linkStyle = (href: string): React.CSSProperties =>
        pathname === href
            ? { color: "oklch(24% 0.02 40)", textDecoration: "none", borderBottom: "1px solid oklch(80% 0.03 40)" }
            : { color: "inherit", textDecoration: "none" };

    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "34px 64px",
                position: "relative",
                zIndex: 2,
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
                style={{
                    display: "flex",
                    gap: 40,
                    fontSize: 15,
                    letterSpacing: "0.02em",
                    color: "oklch(35% 0.02 40)",
                }}
            >
                <Link href="/" className="nav-link" style={linkStyle("/")}>Home</Link>
                <Link href="/talks" className="nav-link" style={linkStyle("/talks")}>Talks</Link>
                <Link href="/blog" className="nav-link" style={linkStyle("/blog")}>Blog</Link>
                <Link href="/work-log" className="nav-link" style={linkStyle("/work-log")}>Work Log</Link>
                <a
                    href={RESUME_DATA.contact.social.find((s) => s.name === "Substack")?.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    Newsletter
                </a>
            </div>
        </nav>
    );
}
