
"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
    const ref = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const reveal = () => setRevealed(true);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        reveal();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
        );
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < vh - 40 && rect.bottom > 0) reveal();
        return () => observer.disconnect();
    }, []);

    return { ref, revealed };
}

export function Reveal({
    children,
    style,
    className,
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}) {
    const { ref, revealed } = useInView();

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.9s ease, transform 0.9s ease",
                ...style,
            }}
        >
            {children}
        </div>
    );
}

/**
 * Reveals a garland/sprig SVG: the container fades+settles in, while leaf
 * shapes (marked data-leaf) fade in staggered and vine paths draw via
 * stroke-dashoffset — handled purely by the [data-reveal-bloom] CSS rules
 * in globals.css, keyed off the data-revealed attribute set here.
 */
export function Bloom({
    children,
    style,
    className,
    initialTransform,
    transformOrigin = "center",
    duration = "1s",
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    initialTransform: string;
    transformOrigin?: string;
    duration?: string;
}) {
    const { ref, revealed } = useInView();

    return (
        <div
            ref={ref}
            data-reveal-bloom
            data-revealed={revealed ? "true" : "false"}
            className={className}
            style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "scale(1) rotate(0deg)" : initialTransform,
                transformOrigin,
                transition: `opacity ${duration} ease, transform ${duration} cubic-bezier(0.34,1.56,0.64,1)`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

export function Parallax({
    children,
    factor = 0.08,
    mouseFactor = 0.5,
    style,
    className,
}: {
    children: React.ReactNode;
    factor?: number;
    mouseFactor?: number;
    style?: React.CSSProperties;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let mx = 0;
        let my = 0;
        let ticking = false;

        const apply = () => {
            const scrollY = window.scrollY || 0;
            const ty = scrollY * -factor + my * mouseFactor;
            const tx = mx * mouseFactor;
            el.style.transform = `translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0)`;
            ticking = false;
        };
        const schedule = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(apply);
            }
        };
        const onMouseMove = (e: MouseEvent) => {
            mx = (e.clientX / window.innerWidth - 0.5) * 20;
            my = (e.clientY / window.innerHeight - 0.5) * 20;
            schedule();
        };

        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        apply();

        return () => {
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [factor, mouseFactor]);

    return (
        <div ref={ref} className={className} style={{ willChange: "transform", ...style }}>
            {children}
        </div>
    );
}
