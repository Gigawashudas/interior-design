"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "8801810013848";
  const message = "Hi, I'm interested in your interior design services. Can you help me?";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp" className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)] sm:bottom-6 sm:right-6 sm:h-12 sm:w-auto sm:rounded-full sm:px-5">
      <MessageCircle size={25} strokeWidth={2} className="transition-transform duration-300 group-hover:scale-110" />

      <span className="hidden pl-2.5 text-sm font-semibold tracking-tight sm:inline">Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
