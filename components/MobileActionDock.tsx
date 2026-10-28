import React from "react";
import { businessConfig } from "@/data/businessConfig";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileActionDock() {
  const { contact } = businessConfig;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-[#060b14]/95 backdrop-blur-lg border-t border-[#1e355b] shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${contact.rawPhone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-slate-950 shadow-md shadow-[#f59e0b]/20 active:scale-[0.98] transition-transform"
          id="mobile-dock-call"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${contact.rawWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-transform"
          id="mobile-dock-whatsapp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
