import { motion } from "framer-motion";
import { Search, Building2, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Search,
    title: "Lançamentos exclusivos:",
    description:
      "Acesso antecipado aos lançamentos de alto padrão mais desejados de São Luís, com condições e plantas privilegiadas.",
  },
  {
    icon: Building2,
    title: "Prontos para morar:",
    description:
      "Um portfólio curado de residências de luxo, prontas para receber você e sua família com requinte e conforto.",
  },
  {
    icon: Briefcase,
    title: "Venda do seu imóvel:",
    description:
      "Assessoria completa e discreta para valorizar e negociar o seu imóvel de alto padrão com a estratégia certa.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-clay px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3 lg:gap-16">
        {SERVICES.map(({ icon: Icon, title, description }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex min-h-[26rem] flex-col bg-black/10 p-8 pb-14 transition-colors hover:bg-black/15 sm:p-10 sm:pb-16"
          >
            <Icon
              className="mx-auto mt-4 h-28 w-28 text-cream"
              strokeWidth={1}
              aria-hidden="true"
            />
            <h3 className="mt-auto font-display text-xl text-cream">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              {description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
