import { motion } from "framer-motion";
import { WHATSAPP_URL, IMG } from "../../site";

export default function Contact() {
  return (
    <section id="contato" className="bg-sand px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-5 text-clay">Vamos conversar?</p>
          <h2 className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
            Vamos conversar sobre{" "}
            <span className="text-clay">o que você procura?</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
            Sem compromisso, sem pressa. Só uma conversa franca pra entender como
            posso te ajudar a encontrar — ou vender — o seu lugar em São Luís.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow mt-9 inline-block rounded-full bg-clay px-7 py-3.5 text-cream transition-colors hover:bg-ink"
          >
            Falar no WhatsApp
          </a>

          <p className="eyebrow mt-6 text-stone">
            Resposta em até algumas horas · Atendimento de seg a sáb
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src={IMG.living}
            alt="Sala de estar aconchegante"
            className="h-[24rem] w-full object-cover sm:h-[30rem]"
          />
        </motion.div>
      </div>
    </section>
  );
}
