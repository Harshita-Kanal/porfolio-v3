
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects as ProjectsList } from "@/components/projects";

export const metadata = {
    title: "Projects",
    description: "A collection of projects Harshita Kanal has worked on.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projects | Harshita Kanal",
        description: "A collection of projects Harshita Kanal has worked on.",
        url: "/projects",
        type: "website",
    },
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
