import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marina R.",
    role: "Compradora · Calhau",
    body: "A Jocionara entendeu o que eu queria antes mesmo de eu conseguir explicar. Achou um apartamento que parecia feito pra mim.",
  },
  {
    id: 2,
    name: "Rafael M.",
    role: "Vendedor · Olho d'Água",
    body: "Vendi meu imóvel em menos tempo do que esperava e com um atendimento que faz muita diferença. Sem pressão, só estratégia.",
  },
  {
    id: 3,
    name: "Juliana C.",
    role: "Compradora · Renascença",
    body: "Atendimento humano de verdade. Cada visita era pensada, cada conversa fazia sentido. Recomendo sem pensar duas vezes.",
  },
];

export default function Testimonials() {
  return (
    <section id="historias" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-5 text-clay">Histórias reais</p>
            <h2 className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
              Pessoas que encontraram <span className="text-clay">mais que um imóvel.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone lg:pb-2">
            Cada chave entregue é o começo de uma nova rotina, de novas memórias.
            Aqui estão algumas das histórias que tive o privilégio de acompanhar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ id, name, role, body }, i) => (
            <motion.blockquote
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-line bg-paper p-8"
            >
              <span className="font-display text-5xl leading-none text-clay">&ldquo;</span>
              <p className="mt-4 mb-6 text-sm leading-relaxed text-ink/85">
                {body}
              </p>
              <footer>
                <p className="font-display text-base text-ink">{name}</p>
                <p className="eyebrow mt-1 text-stone">{role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
