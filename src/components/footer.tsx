
import { RESUME_DATA } from "@/data/resume-data";

export function Footer() {
    return (
        <footer className="mt-32 border-t border-stone-200 dark:border-stone-800 py-12 flex flex-col sm:flex-row justify-between items-center text-sm text-stone-500 dark:text-stone-400">
            <p>
                &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
                {RESUME_DATA.contact.social.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600 transition-colors"
                    >
                        {social.name}
                    </a>
                ))}
            </div>
        </footer>
    );
}
