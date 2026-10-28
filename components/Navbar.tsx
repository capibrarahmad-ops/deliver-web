"use client";

import React, { useState, useEffect } from "react";
import { businessConfig } from "@/data/businessConfig";
import { Phone, Menu, X, Fuel, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060b14]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#1e355b]/60 py-3"
          : "bg-[#060b14]/80 backdrop-blur-sm border-b border-[#1e355b]/30 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] rounded-lg p-1"
            aria-label="Titan Diesel Logistics Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center text-slate-950 shadow-md shadow-[#f59e0b]/20 group-hover:scale-105 transition-transform duration-200">
              <Fuel className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#fbbf24] transition-colors">
                {businessConfig.businessName}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-slate-400 tracking-wider uppercase">
                Direct Fuel Distribution
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {businessConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#0e1b33] rounded-lg transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call Now CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${businessConfig.contact.rawWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-[#25D366] hover:bg-[#0e1b33] rounded-lg transition-colors"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`tel:${businessConfig.contact.rawPhone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/25 hover:shadow-[#f59e0b]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              id="desktop-call-btn"
            >
              <Phone className="w-4 h-4 fill-slate-950 stroke-[2.5]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${businessConfig.contact.rawPhone}`}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#f59e0b] text-slate-950"
              aria-label="Call Directly"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#0e1b33] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#060b14]/98 border-b border-[#1e355b] px-4 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {businessConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-[#fbbf24] hover:bg-[#0e1b33] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1e355b]/60 flex flex-col gap-2.5">
            <a
              href={`tel:${businessConfig.contact.rawPhone}`}
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-slate-950 shadow-md shadow-[#f59e0b]/25"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call Now: {businessConfig.contact.displayPhone}</span>
            </a>
            <a
              href={`https://wa.me/${businessConfig.contact.rawWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm bg-[#0e1b33] text-emerald-400 hover:bg-[#132442] border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us: {businessConfig.contact.displayWhatsApp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
