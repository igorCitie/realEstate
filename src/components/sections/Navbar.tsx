import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import monogram from "../../assets/simbolo (1).png";

const NAV_LINKS = [
  { label: "Sobre", to: "sobre" },
  { label: "Serviços", to: "servicos" },
  { label: "Imóveis", to: "oportunidades" },
  { label: "Histórias", to: "historias" },
  { label: "Contato", to: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Overflowing monogram only while we're at the very top of the page.
      setAtTop(y <= 8);
      // Hide when scrolling down past the bar; reveal when scrolling up.
      if (y > lastY.current && y > 80) {
        setHidden(true);
        setOpen(false);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-line bg-white transition-transform duration-300 md:border-0 md:bg-clay ${
        hidden ? "-translate-y-32" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Monogram — plain on mobile, cream box overflowing the bar on desktop */}
        <Link
          to="hero"
          smooth
          duration={500}
          aria-label="Início"
          className={`flex h-12 w-12 cursor-pointer items-center justify-center transition-opacity duration-300 md:h-32 md:w-28 md:self-start md:bg-cream md:shadow-md ${
            atTop ? "md:opacity-100" : "md:pointer-events-none md:opacity-0"
          }`}
        >
          <img
            src={monogram}
            alt="Jocionara Lima"
            className="h-10 w-auto object-contain md:h-24"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-72}
                className="eyebrow cursor-pointer text-cream/80 transition-colors hover:text-cream"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-white px-6 pb-4 md:hidden">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-72}
                onClick={() => setOpen(false)}
                className="eyebrow block cursor-pointer py-2 text-stone hover:text-ink"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
