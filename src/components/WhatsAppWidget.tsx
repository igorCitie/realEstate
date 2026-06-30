import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { WHATSAPP_URL } from "../site";
import profile from "../assets/jo-profile.jpg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(false);
  const [opened, setOpened] = useState(false);

  // Surface the unread badge a few seconds in — but only if the visitor
  // hasn't already opened the widget.
  useEffect(() => {
    if (opened) return;
    const t = setTimeout(() => setUnread(true), 4000);
    return () => clearTimeout(t);
  }, [opened]);

  // Clear the badge for good once the visitor opens the widget.
  useEffect(() => {
    if (open) {
      setUnread(false);
      setOpened(true);
    }
  }, [open]);

  // Close the card on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[19rem] origin-bottom-right overflow-hidden rounded-2xl border border-line bg-paper shadow-2xl"
          >
            <div className="flex items-center gap-3 bg-ink px-5 py-4">
              <span className="relative shrink-0">
                <img
                  src={profile}
                  alt="Jocionara Lima"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-ink bg-green-500" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm text-cream">Jocionara Lima</p>
                <p className="eyebrow text-[0.6rem] text-cream/60">Online</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="cursor-pointer rounded-full p-1 text-cream/70 transition-colors hover:bg-white/10 hover:text-cream"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-5 py-5">
              <div className="rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm">
                <p className="text-sm leading-relaxed text-ink/85">
                  Olá! 👋 Que bom ter você por aqui. Me conte o que procura e vou
                  ajudar a encontrar o endereço dos seus sonhos.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-4 flex items-center justify-center gap-2.5 rounded-xl bg-clay px-5 py-3 text-cream transition-colors hover:bg-ink"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Iniciar conversa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar atendimento" : "Falar no WhatsApp"}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-cream text-clay shadow-lg shadow-black/15 ring-1 ring-line"
      >
        <AnimatePresence>
          {!open && unread && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-[0.7rem] font-semibold leading-none text-cream ring-2 ring-cream"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-7 w-7" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <WhatsAppIcon className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
