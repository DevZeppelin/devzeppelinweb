import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <span>© {new Date().getFullYear()} Gino Pietrobon</span>
        <SocialLinks className="text-lg" />
        <Link href="/" className="hover:text-white transition-colors">
          Powered by Dev Zeppelin 🐵
        </Link>
      </div>
    </footer>
  );
}
