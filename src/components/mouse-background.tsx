
"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export function MouseBackground() {
    const { theme } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    // Determine dot color based on theme
    // We can use CSS variables or raw hex. 
    // Light mode dots: #e5e7eb (stone-200)
    // Dark mode dots: #333 (approx stone-800/900)

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 h-full w-full pointer-events-none transition-colors duration-300"
            style={{
                background: theme === "dark" ? "#0c0a09" : "#fafaf9" // Matches --background
            }}
        >
            {/* Static Dot Pattern */}
            <div
                className="absolute inset-0 h-full w-full"
                style={{
                    backgroundImage: `radial-gradient(${theme === "dark" ? "#292524" : "#e7e5e4"} 1px, transparent 1px)`,
                    backgroundSize: "16px 16px"
                }}
            />

            {/* Mouse Spotlight Mask */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0), ${theme === "dark" ? "rgba(12,10,9, 0.8)" : "rgba(250,250,249, 0.8)"})`
                }}
            />
        </div>
    );
}
