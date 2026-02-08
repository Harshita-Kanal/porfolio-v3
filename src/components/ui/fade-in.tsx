
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeIn({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({
    children,
    faster = false,
}: {
    children: React.ReactNode;
    faster?: boolean;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        >
            {children}
        </motion.div>
    );
}
