import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { waUrl } from "../../site";
import ImageCarousel from "../ImageCarousel";
import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/product-2.jpg";
import product3 from "../../assets/product-3.jpg";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import contact1 from "../../assets/contact-1.jpg";

type Product = {
  // First image doubles as the card thumbnail; the rest fill the carousel.
  images: string[];
  location: string;
  title: string;
  description: string;
  details: string;
};

const PRODUCTS: Product[] = [
  {
    images: [product1, about1, contact1],
    location: "Av. Jackson Kepler — Ponta D'Areia",
    title: "Quartier 22",
    description:
      "Área privativa de até 165 m². Com 3 suítes simples e 1 suíte master com 2 banheiros.",
    details:
      "Empreendimento de alto padrão na Ponta D'Areia, com área privativa de até 165 m². São 3 suítes simples e 1 suíte master com 2 banheiros, varanda integrada à sala de estar e acabamentos premium. O condomínio conta com piscina, espaço gourmet, academia e segurança 24h, a poucos passos da orla.",
  },
  {
    images: [product2, about2, about1],
    location: "Rua Grande — Centro",
    title: "Edifício Reviver",
    description:
      "Apartamentos de 78 a 112 m². Varanda gourmet, 2 vagas e lazer completo no rooftop.",
    details:
      "Living urbano no coração do Centro histórico, com apartamentos de 78 a 112 m². Cada unidade tem varanda gourmet e 2 vagas de garagem. O rooftop reúne piscina com borda infinita, lounge e coworking — perfeito para quem quer viver perto de tudo, com conforto e mobilidade.",
  },
  {
    images: [product3, contact1, about2],
    location: "Av. dos Holandeses — Calhau",
    title: "Mares Residence",
    description:
      "Coberturas duplex com vista para o mar. 4 suítes, piscina privativa e 3 vagas.",
    details:
      "Coberturas duplex exclusivas na Av. dos Holandeses, com vista panorâmica para o mar. São 4 suítes, piscina privativa na varanda e 3 vagas de garagem. Acabamento de altíssimo padrão, automação residencial e área de lazer completa para uma vida à beira-mar com privacidade total.",
  },
];

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Signal open modals so the floating WhatsApp widget can hide on mobile.
    document.body.setAttribute("data-modal-open", "true");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      document.body.removeAttribute("data-modal-open");
    };
  }, [selected]);

  return (
    <section id="oportunidades" className="bg-paper px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header — title with copy to the side */}
        <div className="grid items-end gap-8 lg:grid-cols-[7fr_5fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
              Portfólio <span className="text-clay">selecionado</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-stone lg:text-right"
          >
            Uma seleção criteriosa dos endereços mais exclusivos de São Luís —
            cada empreendimento avaliado pessoalmente para garantir localização,
            assinatura e padrão à altura das suas expectativas.
          </motion.p>
        </div>

        {/* Product cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-line/60"
            >
              <div className="overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow mb-3 text-clay">{product.location}</p>
                <h3 className="font-display text-xl text-ink">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {product.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(product)}
                  className="group/btn mt-auto inline-flex cursor-pointer items-center gap-2 self-start pt-6 text-sm font-medium text-ink transition-colors hover:text-clay"
                >
                  Ver detalhes
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl lg:max-w-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-ink backdrop-blur transition-colors hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>

              <ImageCarousel images={selected.images} alt={selected.title} />

              <div className="flex flex-col overflow-y-auto p-7 sm:p-9 sm:pt-8">
                <p className="eyebrow mb-3 text-clay">{selected.location}</p>
                <h3 className="font-display text-2xl text-ink sm:text-3xl">
                  {selected.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  {selected.details}
                </p>

                <a
                  href={waUrl(
                    `Olá, Jocionara! Tenho interesse no imóvel ${selected.title} (${selected.location}). Pode me passar mais informações?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow mt-8 inline-flex items-center justify-center gap-2.5 rounded bg-clay px-7 py-3.5 text-cream transition-colors hover:bg-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span className="-mr-[0.22em]">Falar no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
