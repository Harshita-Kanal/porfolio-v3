
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects as ProjectsList } from "@/components/projects";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
    title: "Projects | Harshita Kanal",
    description: "A collection of projects I've worked on.",
};

export default function ProjectsPage() {
    return (
        <main>
            <FadeIn>
                <Header />
            </FadeIn>

            <FadeIn delay={0.1}>
                <ProjectsList />
            </FadeIn>

            <FadeIn delay={0.2}>
                <Footer />
            </FadeIn>
        </main>
    );
}
