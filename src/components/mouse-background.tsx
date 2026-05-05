"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    isExplosion: boolean;
    life: number;
    angle: number;
    spin: number;

    constructor(canvas: HTMLCanvasElement, isWinter: boolean, x?: number, y?: number, isExplosion = false) {
        this.x = x !== undefined ? x : Math.random() * canvas.width;
        this.y = y !== undefined ? y : Math.random() * canvas.height;
        this.isExplosion = isExplosion;
        this.life = 1;
        this.angle = Math.random() * 360;
        this.spin = (Math.random() - 0.5) * 0.1;

        if (isWinter) {
            // Snow
            this.size = Math.random() * 3 + 1;
            if (this.isExplosion) {
                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 15 + 5;
                this.speedX = Math.cos(angle) * velocity;
                this.speedY = Math.sin(angle) * velocity;
            } else {
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1.5 + 0.5; // Falling down, reduced speed
            }
            this.color = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.4})`;
        } else {
            // Summer (Flowers/Petals)
            this.size = Math.random() * 6 + 3;
            if (this.isExplosion) {
                const angle = Math.random() * Math.PI * 2;
                const velocity = Math.random() * 15 + 5;
                this.speedX = Math.cos(angle) * velocity;
                this.speedY = Math.sin(angle) * velocity;
            } else {
                this.speedX = Math.random() * 1.5 - 0.75;
                this.speedY = Math.random() * -1 - 0.5; // Floating up
            }
            const colors = [
                'rgba(244,114,182,0.8)', 'rgba(251,113,133,0.8)', 'rgba(253,164,175,0.8)', // Pinks
                'rgba(250,204,21,0.8)', 'rgba(253,224,71,0.8)', // Yellows
                'rgba(249,115,22,0.8)', 'rgba(251,146,60,0.8)'  // Oranges
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
    }

    draw(ctx: CanvasRenderingContext2D, isWinter: boolean) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        const alpha = this.isExplosion ? this.life : 1;
        ctx.globalAlpha = alpha;

        if (isWinter) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Draw small petal
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    update(canvas: HTMLCanvasElement, mouse: {x: number, y: number}, isWinter: boolean) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.spin;

        if (this.isExplosion) {
            this.life -= 0.02;
            this.speedX *= 0.92;
            this.speedY *= 0.92;
            return;
        }

        // Cursor interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;

            // Push away from cursor
            this.x -= forceDirectionX * force * 5;
            this.y -= forceDirectionY * force * 5;
        }

        // Screen wrapping
        if (isWinter) {
            if (this.y > canvas.height) this.y = 0;
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
        } else {
            // Summer petal wrapping
            if (this.y < 0) this.y = canvas.height;
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
        }
    }
}

class Flower {
    x: number;
    baseY: number;
    stemLength: number;
    type: "tulip" | "sunflower";
    swayPhase: number;
    swaySpeed: number;
    color1: string;
    color2: string;

    constructor(x: number, canvasHeight: number) {
        this.x = x;
        this.baseY = canvasHeight;
        this.stemLength = Math.random() * 40 + 60;
        this.type = Math.random() > 0.5 ? "tulip" : "sunflower";
        this.swayPhase = Math.random() * Math.PI * 2;
        this.swaySpeed = Math.random() * 0.015 + 0.01;
        
        if (this.type === "tulip") {
            const tulipColors = ["#ef4444", "#f97316", "#ec4899", "#d946ef"];
            this.color1 = tulipColors[Math.floor(Math.random() * tulipColors.length)];
            this.color2 = "#bef264"; 
        } else {
            const sunColors = ["#facc15", "#eab308"];
            this.color1 = sunColors[Math.floor(Math.random() * sunColors.length)];
            this.color2 = "#713f12"; 
        }
    }
    
    update(isWinter: boolean) {
        this.swayPhase += isWinter ? this.swaySpeed * 0.3 : this.swaySpeed;
    }

    draw(ctx: CanvasRenderingContext2D, isWinter: boolean) {
        const sway = Math.sin(this.swayPhase) * 20;
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.baseY);
        ctx.quadraticCurveTo(this.x, this.baseY - this.stemLength / 2, this.x + sway, this.baseY - this.stemLength);
        
        const stemColor = isWinter ? "rgba(226, 232, 240, 0.8)" : "#22c55e"; 
        ctx.strokeStyle = stemColor;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        const headX = this.x + sway;
        const headY = this.baseY - this.stemLength;
        
        ctx.save();
        ctx.translate(headX, headY);
        ctx.rotate((sway / 20) * 0.2);

        const mainColor = isWinter ? "rgba(241, 245, 249, 0.9)" : this.color1;
        const secColor = isWinter ? "rgba(226, 232, 240, 0.9)" : this.color2;

        if (this.type === "tulip") {
            ctx.fillStyle = mainColor;
            ctx.beginPath();
            ctx.arc(0, 0, 10, 0, Math.PI);
            ctx.lineTo(-10, -12);
            ctx.lineTo(-5, -4);
            ctx.lineTo(0, -15);
            ctx.lineTo(5, -4);
            ctx.lineTo(10, -12);
            ctx.closePath();
            ctx.fill();
        } else {
            ctx.fillStyle = mainColor;
            for(let i=0; i<12; i++) {
                ctx.rotate((Math.PI * 2) / 12);
                ctx.beginPath();
                ctx.ellipse(12, 0, 6, 3, 0, 0, Math.PI*2);
                ctx.fill();
            }
            ctx.fillStyle = secColor;
            ctx.beginPath();
            ctx.arc(0, 0, 8, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
}

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
        const mouse = { x: -1000, y: -1000 };
        let particles: Particle[] = [];
        let bottomFlowers: Flower[] = [];

        const isWinter = resolvedTheme === "winter";

        const initParticles = () => {
            particles = [];
            const count = isWinter ? 150 : 60; // More snow than petals
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(canvas, isWinter));
            }

            bottomFlowers = [];
            const numFlowers = Math.floor(window.innerWidth / 40); // slightly denser
            for(let i=0; i<numFlowers; i++) {
                bottomFlowers.push(new Flower((i * 40) + 20 + Math.random() * 20 - 10, canvas.height));
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const f of bottomFlowers) {
                f.update(isWinter);
                f.draw(ctx, isWinter);
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].draw(ctx, isWinter);
                particles[i].update(canvas, mouse, isWinter);

                if (particles[i].isExplosion && particles[i].life <= 0) {
                    particles.splice(i, 1);
                }
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

        const handleClick = (e: MouseEvent) => {
            // Easter egg explosion
            for (let i = 0; i < 40; i++) {
                particles.push(new Particle(canvas, isWinter, e.clientX, e.clientY, true));
            }
        };

        const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
        let konamiIndex = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    konamiIndex = 0;
                    // Huge explosion
                    for (let i = 0; i < 200; i++) {
                        particles.push(new Particle(canvas, isWinter, window.innerWidth / 2, window.innerHeight / 2, true));
                    }
                }
            } else {
                konamiIndex = 0;
            }
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("click", handleClick);
        window.addEventListener("keydown", handleKeyDown);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("keydown", handleKeyDown);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme, mounted]);

    if (!mounted) {
        return <div className="fixed inset-0 -z-10 bg-[var(--background)] transition-colors duration-700" />;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-700 opacity-60"
        />
    );
}
