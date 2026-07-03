import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f7f2ea",
                    color: "#3a2f27",
                    fontFamily: "serif",
                    padding: 80,
                    textAlign: "center",
                }}
            >
                <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#a8664a", marginBottom: 24, display: "flex" }}>
                    A Prologue
                </div>
                <div style={{ fontSize: 96, fontWeight: 600, marginBottom: 28, display: "flex" }}>{RESUME_DATA.name}</div>
                <div style={{ fontSize: 32, color: "#5c4c40", maxWidth: 860, lineHeight: 1.4, display: "flex" }}>
                    {RESUME_DATA.about}
                </div>
            </div>
        ),
        { ...size }
    );
}
