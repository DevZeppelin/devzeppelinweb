import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaHeadphones, FaMusic, FaQuoteRight } from "react-icons/fa";
import { BANDS } from "@/data/almaBands";
import { ANECDOTAS } from "@/data/almaAnecdotas";
import { site } from "@/lib/site";
import Button from "./Button";

const NAV_LINKS = [
  { href: "#radio", label: "Radio" },
  { href: "#rockomendadas", label: "Bandas" },
  { href: "#anecdotas", label: "Anécdotas" },
  { href: "#renzo", label: "Frases" },
];

const QUICK_LINKS = [
  { href: "#radio", label: "Radio en vivo", Icon: FaHeadphones },
  { href: "#rockomendadas", label: "Rockomendaciones", Icon: FaMusic },
  { href: "#anecdotas", label: "Anécdotas de recitales", Icon: FaBookOpen },
  { href: "#renzo", label: "Renzo Frases", Icon: FaQuoteRight },
];

const STATS = [
  { value: `${BANDS.length}`, label: "bandas recomendadas" },
  { value: `${ANECDOTAS.length}`, label: "anécdotas compartidas" },
  { value: "24/7", label: "rock en vivo" },
];

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="shrink-0">
            <span className="hidden font-extrabold tracking-wide text-white md:block">
              El Rock, vos y yo.
            </span>
          </Link>
          <div className="flex w-full items-center justify-between gap-3 overflow-x-auto whitespace-nowrap text-xs font-bold uppercase text-alma1 md:w-auto md:justify-end md:gap-6 md:text-sm">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link px-1 py-1 transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <a
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="nav-link shrink-0 px-1 py-1 text-zinc-500 transition hover:text-white"
            >
              Dev Zeppelin ↗
            </a>
          </div>
        </div>
      </nav>

      <header className="alma-hero-gradient relative overflow-hidden">
        <div className="alma-grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <div className="alma-scan-sweep" />
        <div
          className="cyber-orb cyber-orb-a -top-10 left-1/4 h-72 w-72"
          style={{ background: "rgba(255, 67, 1, 0.14)" }}
        />
        <div
          className="cyber-orb cyber-orb-b bottom-0 right-0 h-80 w-80"
          style={{ background: "rgba(228, 88, 38, 0.12)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-16 text-center md:pt-24">
          <Image
            src="/alma/logo.png"
            width={220}
            height={220}
            className="alma-logo-float mx-auto"
            alt="Logo Alma Rockera"
            priority
          />
          <h1 className="alma-glow-text mt-6 text-4xl font-extrabold text-white md:text-6xl">
            Alma Rockera
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            Radio online, bandas under recomendadas por la comunidad, y un blog de
            <span className="text-alma1"> anécdotas reales de recitales</span> — divertidas,
            sorprendentes o trágicas. Un rincón de rock, sin vueltas.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#radio" className="w-full sm:w-auto">
              <Button text="🎧 Escuchar ahora" className="w-full" />
            </Link>
            <Link href="#anecdotas" className="w-full sm:w-auto">
              <Button text="📖 Leer anécdotas" variant="outline" className="w-full" />
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3 md:max-w-lg">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-black/30 px-2 py-3">
                <p className="text-xl font-extrabold text-alma1 md:text-2xl">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-wide text-zinc-400 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {QUICK_LINKS.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3 py-5 text-xs font-bold uppercase tracking-wide text-zinc-300 transition-all hover:-translate-y-1 hover:border-alma2/60 hover:text-white"
              >
                <Icon className="text-2xl text-alma2 transition-transform group-hover:scale-110" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
