import { INSTAGRAM_URL, EMAIL } from "../../site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-clay text-cream">
              <span className="font-script text-2xl leading-none">jl</span>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              Jocionara Lima
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone">
            Corretora de imóveis de alto padrão em São Luís — Maranhão.
            Atendimento próximo e curadoria para quem busca o seu lugar.
          </p>
        </div>

        <ul className="flex flex-wrap items-start gap-6 sm:justify-end">
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-stone transition-colors hover:text-ink"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="eyebrow text-stone transition-colors hover:text-ink"
            >
              E-mail
            </a>
          </li>
          <li>
            <a
              href="#"
              className="eyebrow text-stone transition-colors hover:text-ink"
            >
              Privacidade
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-6">
        <p className="eyebrow text-stone">
          © {new Date().getFullYear()} Jocionara Lima Imóveis · CRECI 8472-F ·
          São Luís · Maranhão
        </p>
      </div>
    </footer>
  );
}
