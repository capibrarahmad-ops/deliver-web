import React from "react";
import Image from "next/image";
import { businessConfig } from "@/data/businessConfig";
import { Phone, MessageCircle, ShieldCheck, Truck, Headphones } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with dark navy overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-tanker.jpg"
          alt="Commercial Diesel Fuel Tanker Truck at Distribution Facility"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        {/* Navy gradient overlay for optimal text contrast and industrial atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b14]/95 via-[#0b1526]/85 to-[#060b14]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-black/40" />
        <div className="absolute inset-0 hero-radial-accent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Dispatch Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1b33]/90 border border-[#f59e0b]/40 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              Direct Fuel Dispatch • Serving {businessConfig.contact.serviceArea.split(",")[0]}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Reliable Diesel Delivery <br />
            <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fef08a] bg-clip-text text-transparent">
              at Your Doorstep
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Your trusted partner for dependable diesel fuel supply and delivery for businesses, generators, farms, and industrial operations.
          </p>

          {/* Prominent CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={`tel:${businessConfig.contact.rawPhone}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-slate-950 shadow-xl shadow-[#f59e0b]/25 hover:shadow-[#f59e0b]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              id="hero-call-now-button"
            >
              <Phone className="w-5 h-5 fill-slate-950 stroke-[2.5]" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${businessConfig.contact.rawWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-[#0e1b33]/90 hover:bg-[#132442] text-white border border-[#25D366]/50 hover:border-[#25D366] shadow-lg shadow-black/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              id="hero-whatsapp-button"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* 3 Small Trust Highlights */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-[#0a1322]/60 backdrop-blur-sm border border-slate-800 px-3.5 py-2.5 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-white">Reliable Delivery</span>
                <span className="block text-[11px] text-slate-400">Scheduled to your site</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#0a1322]/60 backdrop-blur-sm border border-slate-800 px-3.5 py-2.5 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-white">Professional Service</span>
                <span className="block text-[11px] text-slate-400">Safe handling standards</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#0a1322]/60 backdrop-blur-sm border border-slate-800 px-3.5 py-2.5 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-white">Customer-Focused Support</span>
                <span className="block text-[11px] text-slate-400">Direct owner liaison</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
