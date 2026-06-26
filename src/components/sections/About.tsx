import { motion } from "framer-motion";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../../site";

export default function About() {
  return (
    <section id="sobre" className="px-6 py-32 sm:py-44">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
        {/* Stacked photos */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-lg pb-32 sm:pb-44 lg:mx-0 lg:mr-auto lg:pb-52"
        >
          {/* Top photo — offset left */}
          <div className="mr-auto w-[68%] overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5">
            <img
              src={about1}
              alt="Detalhe de um ambiente decorado"
              className="h-[20rem] w-full object-cover sm:h-[24rem]"
            />
          </div>

          {/* Bottom photo — overlaps right and lower */}
          <div className="absolute bottom-0 right-0 w-[56%] overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5">
            <img
              src={about2}
              alt="Empreendimento em São Luís"
              className="h-[18rem] w-full object-cover sm:h-[22rem]"
            />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
             Endereços de alto padrão para investir e <span className="text-clay">viver como você sempre sonhou</span>.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-stone">
            <p>
              Como corretora especializada no mercado de alto padrão de São
              Luís, escolhi atender poucos clientes por vez — porque um
              patrimônio dessa importância merece tempo, discrição e dedicação
              integral.
            </p>
            <p>
              Antes de apresentar qualquer imóvel, faço questão de compreender o
              seu momento, seu estilo de vida e suas aspirações. É essa escuta
              que me permite selecionar apenas o que está verdadeiramente à
              altura de você.
            </p>
            <p>
              Mais do que intermediar negócios, conduzo cada etapa com
              sofisticação, transparência e estratégia — para que uma das
              decisões mais importantes da sua vida seja também uma das mais
              tranquilas.
            </p>
          </div>

          {/* Social icons */}
          <ul className="mt-8 flex items-center gap-5">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-clay transition-colors hover:text-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-clay transition-colors hover:text-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Divider */}
          <div className="mt-8 border-t-2 border-ink/15" />
        </motion.div>
      </div>
    </section>
  );
}
