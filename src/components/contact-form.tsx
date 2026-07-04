"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-outfit), sans-serif",
    fontSize: 15,
    padding: "12px 16px",
    borderRadius: 10,
    background: "var(--background)",
    color: "var(--foreground)",
    width: "100%",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setStatus("submitting");
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name: data.get("name"),
                    email: data.get("email"),
                    message: data.get("message"),
                }),
                headers: { "Content-Type": "application/json" },
            });
            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <p style={{ fontSize: 16, color: "var(--ink-38-40)", textAlign: "center" }}>
                Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 460, margin: "0 auto", width: "100%" }}>
            <input type="text" name="name" placeholder="Your name" required autoComplete="off" className="contact-input" style={inputStyle} />
            <input type="email" name="email" placeholder="Your email" required autoComplete="off" className="contact-input" style={inputStyle} />
            <textarea name="message" placeholder="Your message" required rows={5} autoComplete="off" className="contact-input" style={{ ...inputStyle, resize: "vertical" }} />

            <button
                type="submit"
                disabled={status === "submitting"}
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
                    cursor: status === "submitting" ? "wait" : "pointer",
                    opacity: status === "submitting" ? 0.7 : 1,
                    alignSelf: "center",
                }}
            >
                {status === "submitting" ? "Sending…" : "Send Message"}
            </button>

            {status === "error" && (
                <p style={{ fontSize: 14, color: "oklch(60% 0.15 30)", textAlign: "center" }}>
                    Something went wrong — please try again, or use the email above.
                </p>
            )}
        </form>
    );
}
