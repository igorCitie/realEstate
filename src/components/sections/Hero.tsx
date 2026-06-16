import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import { IMG } from "../../site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col bg-clay text-cream"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pt-28 pb-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1"
          >
            <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Corretora de imóveis de alto padrão.
            </h1>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
              Conheça nosso portfólio de propriedades abaixo.
            </p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-2"
          >
            <img
              src={IMG.portrait}
              alt="Jocionara Lima, corretora de imóveis"
              className="mx-auto aspect-square w-full max-w-xs rounded-full border-6 object-cover shadow-xl lg:ml-auto lg:mr-0 lg:max-w-md lg:aspect-[4/5] lg:rounded-b-none lg:rounded-t-full"
            />
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
