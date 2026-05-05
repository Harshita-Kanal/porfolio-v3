
"use client";

import { Snowflake, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "winter" ? "summer" : "winter")}
            className="flex items-center gap-2 transition-colors hover:text-[var(--accent)] hover:scale-105 active:scale-95 duration-200"
            aria-label="Toggle theme"
            title={`Switch to ${resolvedTheme === "winter" ? "Summer" : "Winter"} Theme`}
        >
            {resolvedTheme === "winter" ? (
                <>
                    <Snowflake className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-[11px] italic font-serif text-muted-foreground mt-0.5">sweater weather</span>
                </>
            ) : (
                <>
                    <Sun className="h-5 w-5 text-[var(--accent)]" />
                    <span className="text-[11px] italic font-serif text-muted-foreground mt-0.5">touch grass</span>
                </>
            )}
        </button>
    );
}
