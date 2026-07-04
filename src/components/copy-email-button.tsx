"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="pill-button"
            style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: 15,
                letterSpacing: "0.03em",
                color: "oklch(97.5% 0.014 75)",
                background: "oklch(30% 0.02 40)",
                padding: "14px 34px",
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                display: "inline-block",
            }}
        >
            {copied ? "Email Copied!" : "Contact Me"}
        </button>
    );
}
