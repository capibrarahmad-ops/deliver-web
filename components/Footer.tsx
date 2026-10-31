import React from "react";
import { businessConfig } from "@/data/businessConfig";
import { Fuel, Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;
  const { businessName, contact, navigation } = businessConfig;

  return (
    <footer className="bg-[#040810] border-t border-[#1e355b]/60 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center text-slate-950 shadow-md">
                <Fuel className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {businessName}
              </span>
            </div>
            
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              HN Fuel Supply is your reliable commercial fuel supplier providing on-site diesel delivery, commercial fuel delivery services, and 24/7 emergency fuel supply.
            </p>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#fbbf24] shrink-0" />
              <span>Coverage: {contact.serviceArea}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#fbbf24] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contact.rawPhone}`}
                  className="flex items-center gap-3 hover:text-[#fbbf24] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0e1b33] flex items-center justify-center text-[#fbbf24] group-hover:bg-[#132442]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{contact.displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.rawWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0e1b33] flex items-center justify-center text-emerald-400 group-hover:bg-[#132442]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span>WhatsApp: {contact.displayWhatsApp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 hover:text-[#fbbf24] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0e1b33] flex items-center justify-center text-[#fbbf24] group-hover:bg-[#132442]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#fbbf24] shrink-0 mt-0.5" />
                <span>{contact.businessHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {businessName}. All rights reserved. Professional Fuel Delivery and Diesel Supply.
          </p>

          <a
            href="#home"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1b33] text-slate-400 hover:text-white hover:bg-[#132442] border border-[#1e355b] transition-colors"
          >
            <span>Back to top ↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
