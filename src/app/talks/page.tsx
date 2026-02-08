
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Talks as TalksList } from "@/components/talks";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
    title: "Talks | Harshita Kanal",
    description: "Recent talks and presentations.",
};

export default function TalksPage() {
    return (
        <main>
            <FadeIn>
                <Header />
            </FadeIn>

            <FadeIn delay={0.1}>
                <TalksList />
            </FadeIn>

            <FadeIn delay={0.2}>
                <Footer />
            </FadeIn>
        </main>
    );
}
