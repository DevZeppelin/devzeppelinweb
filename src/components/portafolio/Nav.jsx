import Link from "next/link";
import { contact } from "@/lib/site";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-primary/80 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-extrabold tracking-tight text-lg">
          Gino<span className="text-yellow">.</span>
        </span>
        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/"
            className="hidden sm:inline text-white/60 hover:text-white transition-colors"
          >
            DevZeppelin.com.ar
          </Link>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-yellow text-primary font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Contratame
          </a>
        </div>
      </div>
    </nav>
  );
}
