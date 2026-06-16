import { motion } from "framer-motion";

const DIFFERENTIALS = [
  {
    n: "01",
    title: "Atendimento próximo",
    description:
      "Conversas reais, escuta ativa e poucos clientes por vez para garantir presença e cuidado.",
  },
  {
    n: "02",
    title: "Curadoria de imóveis",
    description:
      "Qualidade acima de quantidade. Você visita só o que realmente faz sentido pra sua vida.",
  },
  {
    n: "03",
    title: "Transparência total",
    description:
      "Cada etapa é explicada com clareza — sem letras miúdas, sem promessas vazias.",
  },
  {
    n: "04",
    title: "Acompanhamento integral",
    description:
      "Do primeiro café à entrega das chaves, você nunca caminha sozinho no processo.",
  },
];

export default function Features() {
  return (
    <section id="diferenciais" className="bg-sand px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-5 text-clay">Por que comigo</p>
          <h2 className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
            Um jeito mais humano de encontrar o seu lugar.
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map(({ n, title, description }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-display text-3xl text-clay">{n}</span>
              <div className="mt-4 mb-3 h-px w-10 bg-ink/20" />
              <h3 className="mb-3 font-display text-xl text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-stone">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
