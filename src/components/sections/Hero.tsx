import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import joProfile from "../../assets/jo-profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col bg-clay text-cream"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pt-28 pb-12">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:gap-x-16">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl md:col-start-1 md:row-start-1 md:self-end md:text-5xl lg:text-7xl"
          >
            Imóveis de alto padrão em São&nbsp;Luís.
          </motion.h1>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-2 md:col-start-2 md:row-start-1 md:row-span-2"
          >
            <div className="relative mx-auto w-full max-w-[15rem] md:ml-auto md:mr-0 md:max-w-sm lg:max-w-md">
              <img
                src={joProfile}
                alt="Jocionara Lima, corretora de imóveis"
                className="aspect-square w-full rounded-full border-6 object-cover shadow-xl md:aspect-[4/5] md:rounded-b-none md:rounded-t-full"
              />
              {/* Fine inset line just inside the white border */}
              <div className="pointer-events-none absolute inset-[11px] rounded-full border border-cream/40 md:rounded-b-none md:rounded-t-full" />
              {/* Second, tighter inset line */}
              <div className="pointer-events-none absolute inset-[16px] rounded-full border border-cream/25 md:rounded-b-none md:rounded-t-full" />
            </div>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-3 md:col-start-1 md:row-start-2 md:self-start"
          >
            <p className="max-w-sm text-sm leading-relaxed text-cream/90">
              Assessoria exclusiva e curadoria de endereços únicos para quem
              busca viver — e investir — com sofisticação. Conheça o portfólio
              selecionado a seguir.
            </p>
            <Link
              to="oportunidades"
              smooth
              duration={500}
              offset={-72}
              className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded bg-cream px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-clay transition-colors hover:bg-white"
            >
              Ver portfólio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center pb-10">
        <Link
          to="sobre"
          smooth
          duration={500}
          offset={-72}
          aria-label="Rolar para baixo"
          className="cursor-pointer text-cream/80 transition-colors hover:text-cream"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
