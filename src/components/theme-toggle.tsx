
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeInitScript() {
    const code = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;
    return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggle}
            style={{
                background: "none",
                border: "none",
                padding: 6,
                color: "inherit",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
            }}
        >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
