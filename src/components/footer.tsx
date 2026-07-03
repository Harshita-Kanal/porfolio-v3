
import { RESUME_DATA } from "@/data/resume-data";

export function Footer({ withBorder = false }: { withBorder?: boolean }) {
    return (
        <footer
            style={{
                padding: "48px var(--page-pad)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
                borderTop: withBorder ? "1px solid oklch(90% 0.02 40)" : undefined,
            }}
        >
            <div style={{ fontSize: 13.5, color: "oklch(55% 0.02 40)" }}>
                © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: 24, fontSize: 13.5, color: "oklch(52% 0.02 40)" }}>
                {RESUME_DATA.contact.social.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        {social.name}
                    </a>
                ))}
            </div>
        </footer>
    );
}
