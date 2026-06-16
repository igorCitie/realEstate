import { motion } from "framer-motion";
import { IMG } from "../../site";

export default function About() {
  return (
    <section id="sobre" className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[5fr_7fr]">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src={IMG.portrait}
            alt="Jocionara Lima, corretora de imóveis"
            className="h-[26rem] w-full object-cover sm:h-[32rem]"
          />
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow mb-5 text-clay">Quem te atende</p>
          <h2 className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
            Sou Jocionara Lima. Eu acredito que casa é um lugar de
            pertencimento.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-stone">
            <p>
              Como corretora independente em São Luís, escolhi atender poucas
              pessoas por vez — porque cada história merece tempo, escuta e
              presença.
            </p>
            <p>
              Antes de mostrar um único imóvel, eu quero te conhecer: o seu
              momento, sua rotina, o que faz seus olhos brilharem. Só assim
              consigo recomendar o que realmente combina com você.
            </p>
            <p>
              Mais que vender espaços, meu trabalho é facilitar uma das decisões
              mais bonitas da sua vida — com leveza, transparência e estratégia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
