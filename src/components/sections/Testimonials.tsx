import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marina R.",
    role: "Cobertura · Ponta D'Areia",
    body: "A Jocionara compreendeu exatamente o padrão que eu buscava e me apresentou apenas opções impecáveis. Uma curadoria precisa, do primeiro contato à assinatura.",
  },
  {
    id: 2,
    name: "Rafael M.",
    role: "Venda · Olho d'Água",
    body: "Conduziu a venda do meu imóvel com total discrição e estratégia. Valorizou o ativo e fechou um negócio acima do que eu esperava, sem qualquer pressão.",
  },
  {
    id: 3,
    name: "Juliana C.",
    role: "Apartamento · Renascença",
    body: "Atendimento à altura de um imóvel de alto padrão. Cada visita foi planejada nos mínimos detalhes e cada conversa transmitia confiança. Recomendo sem hesitar.",
  },
];

export default function Testimonials() {
  return (
    <section id="historias" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-6 lg:grid-cols-[7fr_5fr] lg:items-end">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
              Quem confiou e encontrou <span className="text-clay">muito mais que um endereço.</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-stone lg:pb-2 lg:text-right"
          >
            Cada negociação é conduzida com discrição e cuidado absolutos. Estes
            são alguns dos clientes que tive o privilégio de assessorar em
            conquistas memoráveis.
          </motion.p>
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
