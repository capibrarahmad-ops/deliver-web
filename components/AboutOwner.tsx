import React from "react";
import { businessConfig } from "@/data/businessConfig";
import { UserCheck, ShieldCheck, Phone, ArrowUpRight, Truck, Fuel, Award, Zap, Clock } from "lucide-react";

export default function AboutOwner() {
  const { owner, businessName, contact } = businessConfig;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#080f1d] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1b33] border border-[#1e355b] text-[#fbbf24] text-xs font-semibold uppercase tracking-wider mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Our Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            HN Fuel Supply <br className="hidden sm:block" />
            <span className="text-[#fbbf24]">Fuel Delivery &amp; Diesel Supply</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Reliable fuel supplier providing direct diesel delivery and specialized fuel delivery services with personalized attention.
          </p>
        </div>

        {/* Professional Content Card */}
        <div className="bg-[#0b1526]/90 border border-[#1e355b] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Service Highlights Grid */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {/* Service Card 1 */}
                <a href="#services" className="bg-[#0e1b33]/70 border border-[#1e355b] rounded-xl p-5 hover:border-[#f59e0b]/50 transition-colors block group">
                  <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] mb-3 group-hover:scale-105 transition-transform">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">Free Delivery</h4>
                  <p className="text-xs text-slate-400">Direct to your location</p>
                </a>

                {/* Service Card 2 */}
                <a href="#services" className="bg-[#0e1b33]/70 border border-[#1e355b] rounded-xl p-5 hover:border-[#f59e0b]/50 transition-colors block group">
                  <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] mb-3 group-hover:scale-105 transition-transform">
                    <Fuel className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">Quality Diesel</h4>
                  <p className="text-xs text-slate-400">Premium fuel supply</p>
                </a>

                {/* Service Card 3 */}
                <a href="#services" className="bg-[#0e1b33]/70 border border-[#1e355b] rounded-xl p-5 hover:border-[#f59e0b]/50 transition-colors block group">
                  <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] mb-3 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">Professional</h4>
                  <p className="text-xs text-slate-400">Expert service team</p>
                </a>

                {/* Service Card 4 */}
                <a href="#services" className="bg-[#0e1b33]/70 border border-[#1e355b] rounded-xl p-5 hover:border-[#f59e0b]/50 transition-colors block group">
                  <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] mb-3 group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">All Equipment</h4>
                  <p className="text-xs text-slate-400">Cars, trucks, generators</p>
                </a>

                {/* Service Card 5 - 24/7 Emergency Fuel Supply */}
                <a href="#contact" className="bg-[#0e1b33]/70 border border-[#1e355b] rounded-xl p-5 hover:border-[#f59e0b]/50 transition-colors col-span-2 block group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/15 flex items-center justify-center text-[#fbbf24] shrink-0 group-hover:scale-105 transition-transform">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">24/7 Emergency Fuel Supply</h4>
                      <p className="text-xs text-slate-400">Emergency fuel supply services available 24 hours a day, 7 days a week.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Description */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#fbbf24] uppercase">
                  Our Commitment
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                  {businessName}
                </h3>
                <p className="text-sm font-medium text-slate-400 mb-6">
                  Professional Fuel Supplier &amp; Delivery Services
                </p>
              </div>

              {/* Business Introduction */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                {owner.shortBio}
              </p>

              {/* Commitment Pledge Box */}
              <div className="bg-[#0e1b33]/70 border-l-4 border-[#f59e0b] rounded-r-xl p-5 mb-8">
                <div className="flex items-center gap-2 mb-2 text-[#fbbf24]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Service Guarantee</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;{owner.commitmentStatement}&rdquo;
                </p>
              </div>

              {/* Direct Contact Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${contact.rawPhone}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Now</span>
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-[#0e1b33] hover:bg-[#132442] border border-[#1e355b] transition-colors"
                >
                  <span>Our Fuel Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-[#0e1b33] hover:bg-[#132442] border border-[#1e355b] transition-colors"
                >
                  <span>Contact Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
