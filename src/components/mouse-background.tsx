
"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function MouseBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouse = { x: -1000, y: -1000 };
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            density: number;
            angle: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = 1.2;
                this.density = (Math.random() * 40) + 5;
                this.angle = Math.random() * 360;
            }

            draw() {
                if (!ctx || !canvas) return;

                // Fade out particles based on distance from top-right corner
                const dx = canvas.width - this.x;
                const dy = this.y;
                const distFromCorner = Math.sqrt(dx * dx + dy * dy);
                const maxDist = Math.max(canvas.width, canvas.height) * 1.2;
                const cornerOpacity = Math.pow(Math.max(0, 1 - (distFromCorner / maxDist)), 1.5);

                const baseAlpha = resolvedTheme === "dark" ? 0.35 : 0.25;
                const alpha = baseAlpha * cornerOpacity;

                if (alpha < 0.01) return;

                ctx.fillStyle = resolvedTheme === "dark"
                    ? `rgba(255, 255, 255, ${alpha})`
                    : `rgba(0, 0, 0, ${alpha})`;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Subtle floating 'spatial' drift
                this.angle += 0.01;
                const driftX = Math.sin(this.angle) * 0.2;
                const driftY = Math.cos(this.angle) * 0.2;

                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                let maxDistance = 50; // Increased dispersion radius

                if (distance < maxDistance) {
                    let force = (maxDistance - distance) / maxDistance;
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let directionX = forceDirectionX * force * this.density * 0.6;
                    let directionY = forceDirectionY * force * this.density * 0.6;

                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Smooth easing back to original position
                    const returnSpeed = 0.05;
                    if (this.x !== this.baseX + driftX) {
                        this.x -= (this.x - (this.baseX + driftX)) * returnSpeed;
                    }
                    if (this.y !== this.baseY + driftY) {
                        this.y -= (this.y - (this.baseY + driftY)) * returnSpeed;
                    }
                }
            }
        }

        const initParticles = () => {
            particles = [];
            const gap = 24; // Denser grid
            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    particles.push(new Particle(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme, mounted]);

    // Simple placeholder for SSR to avoid hydration error
    if (!mounted) {
        return <div className="fixed inset-0 -z-10 bg-[#ffffff] dark:bg-[#0c0a09]" />;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-500"
            style={{
                background: resolvedTheme === "dark" ? "#0c0a09" : "#ffffff",
                opacity: 1
            }}
        />
    );
}
