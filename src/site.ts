// Centralized site content / contact details.
// Swap WHATSAPP_NUMBER and the image URLs below for the real assets.
export const WHATSAPP_NUMBER = "5598981790018"; // DDI 55 + DDD 98 + 9 8179-0018
export const WHATSAPP_MESSAGE =
  "Olá, Jocionara! Vim pelo site e gostaria de conhecer seu portfólio de imóveis de alto padrão em São Luís.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Build a WhatsApp link with a custom message (e.g. about a specific property).
export const waUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/jocionara/";
export const EMAIL = "contato@jocionaralima.com.br";

// Placeholder imagery (Unsplash) — replace with Jocionara Lima's real photos.
export const IMG = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  portrait:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  living:
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
};
