import { Resend } from "resend";
import { NextResponse } from "next/server";
import { RESUME_DATA } from "@/data/resume-data";

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.RESEND_TO_EMAIL ?? RESUME_DATA.contact.email,
        replyTo: email,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
        console.error("Resend send failed:", error);
        return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
