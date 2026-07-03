
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects as ProjectsList } from "@/components/projects";

export const metadata = {
    title: "Projects | Harshita Kanal",
    description: "A collection of projects I've worked on.",
};

export default function ProjectsPage() {
    return (
        <div style={{ background: "oklch(97.5% 0.014 75)", color: "oklch(24% 0.02 40)", fontFamily: "var(--font-outfit), sans-serif", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
            <Header />
            <ProjectsList />
            <Footer withBorder />
        </div>
    );
}
