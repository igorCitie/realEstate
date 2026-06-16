import { motion } from "framer-motion";

const STEPS = [
  {
    n: "I",
    label: "Etapa 01",
    title: "Conversa inicial",
    description:
      "Um café (presencial ou virtual) para entender seu momento, seu ritmo e o que faz sentido pra você.",
  },
  {
    n: "II",
    label: "Etapa 02",
    title: "Seleção personalizada",
    description:
      "Com base na sua história, eu pesquiso e seleciono apenas imóveis que conversam com seu estilo de vida.",
  },
  {
    n: "III",
    label: "Etapa 03",
    title: "Visitas estratégicas",
    description:
      "Visitamos juntos os imóveis selecionados, com olhar atento à luz, ao bairro e ao seu bem-estar.",
  },
  {
    n: "IV",
    label: "Etapa 04",
    title: "Negociação e fechamento",
    description:
      "Cuido da negociação, da papelada e do pós-venda — você só precisa pensar na mudança.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-olive px-6 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-5 text-clay-soft">Como funciona</p>
          <h2 className="font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            Um caminho leve, do primeiro café à entrega das chaves.
          </h2>
        </div>

        <div className="divide-y divide-cream/15">
          {STEPS.map(({ n, label, title, description }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-8 sm:grid-cols-[5rem_1fr_auto] sm:gap-10"
            >
              <span className="font-display text-3xl text-clay-soft sm:text-4xl">
                {n}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/70">
                  {description}
                </p>
              </div>
              <span className="eyebrow col-span-2 text-cream/40 sm:col-span-1 sm:justify-self-end">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
