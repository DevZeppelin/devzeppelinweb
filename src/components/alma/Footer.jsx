import Networks from "./Networks";

const Footer = () => (
  <footer className="alma-grid-bg relative mt-20 overflow-hidden border-t border-white/10 bg-black px-6 py-10 text-center">
    <div className="mx-auto mb-2 h-px w-24 bg-gradient-to-r from-transparent via-alma2/60 to-transparent" />
    <h3 className="alma-glow-text text-2xl font-bold text-white">¡Contactanos! 🤘</h3>
    <Networks />
    <p className="mt-6 text-xs text-zinc-500">
      Alma Rockera · Powered by{" "}
      <a
        href="https://devzeppelin.ar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-alma1 transition hover:text-white"
      >
        Dev Zeppelin
      </a>
    </p>
  </footer>
);

export default Footer;
