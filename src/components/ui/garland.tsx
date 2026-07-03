
import { Bloom, Parallax } from "./reveal";

/**
 * The elaborate leafy vine/flower-cluster garland used as the ambient
 * corner decoration. Same twig/branch pattern everywhere; only the leaf
 * and flower colors vary per page.
 */
export function CornerGarland({
    leafColorA,
    leafColorB,
    flowerColor,
    style,
}: {
    leafColorA: string;
    leafColorB: string;
    flowerColor: string;
    style?: React.CSSProperties;
}) {
    return (
        <Bloom
            initialTransform="scale(0.8) rotate(4deg)"
            transformOrigin="top right"
            duration="1s"
            style={{ position: "absolute", top: 0, right: 0, width: 300, pointerEvents: "none", ...style }}
        >
            <Parallax factor={0.08} mouseFactor={0.5}>
                <svg style={{ width: "100%", opacity: 0.55 }} viewBox="0 0 240 240" fill="none">
                    <path d="M236 4 Q150 34 128 100 Q112 148 60 168 Q28 180 16 220" stroke="oklch(78% 0.03 40)" strokeWidth="1.4" />
                    <path d="M128 100 Q150 118 178 128" stroke="oklch(78% 0.03 40)" strokeWidth="1.2" />
                    <path d="M60 168 Q40 158 18 160" stroke="oklch(78% 0.03 40)" strokeWidth="1.1" />

                    <circle cx="236" cy="4" r="6.5" fill={flowerColor} />
                    <circle cx="236" cy="4" r="2.3" fill="oklch(97% 0.02 20)" />

                    <path data-leaf="true" d="M0,0 Q9,-6 18,0 Q9,6 0,0 Z" fill={leafColorB} transform="translate(199 19) rotate(206)" />
                    <path data-leaf="true" d="M0,0 Q9,-6 18,0 Q9,6 0,0 Z" fill={leafColorA} transform="translate(164 45) rotate(83)" />
                    <path data-leaf="true" d="M0,0 Q8,-5 16,0 Q8,5 0,0 Z" fill={leafColorB} transform="translate(141 71) rotate(195)" />

                    <path data-leaf="true" d="M0,0 Q7,-5 14,0 Q7,5 0,0 Z" fill={leafColorA} transform="translate(154 114) rotate(334)" />
                    <circle cx="178" cy="128" r="5.5" fill={leafColorB} />
                    <circle cx="178" cy="128" r="1.8" fill="oklch(97% 0.02 85)" />

                    <path data-leaf="true" d="M0,0 Q9,-6 18,0 Q9,6 0,0 Z" fill={leafColorB} transform="translate(120 120) rotate(176)" />
                    <path data-leaf="true" d="M0,0 Q9,-6 18,0 Q9,6 0,0 Z" fill={leafColorA} transform="translate(102 142) rotate(80)" />
                    <path data-leaf="true" d="M0,0 Q8,-5 16,0 Q8,5 0,0 Z" fill={leafColorB} transform="translate(83 157) rotate(203)" />

                    <path data-leaf="true" d="M0,0 Q7,-5 14,0 Q7,5 0,0 Z" fill={leafColorA} transform="translate(38 162) rotate(136)" />
                    <circle cx="18" cy="160" r="5" fill={leafColorB} />

                    <path data-leaf="true" d="M0,0 Q7,-5 14,0 Q7,5 0,0 Z" fill={leafColorA} transform="translate(32 186) rotate(310)" />
                    <circle cx="16" cy="220" r="4.2" fill={leafColorB} />
                </svg>
            </Parallax>
        </Bloom>
    );
}
