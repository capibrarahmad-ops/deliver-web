import React from "react";
import Image from "next/image";
import { businessConfig } from "@/data/businessConfig";
import { UserCheck, Clock, ShieldCheck, Phone, ArrowUpRight } from "lucide-react";

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
            <span>Owner-Operated Business</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet the Person Behind <br className="hidden sm:block" />
            <span className="text-[#fbbf24]">{businessName}</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Direct accountability, personal service, and professional fuel delivery with no middlemen.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-[#0b1526]/90 border border-[#1e355b] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Owner Photo & Quick Highlights */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#1e355b] shadow-2xl group">
                <Image
                  src={owner.photo}
                  alt={`${owner.name} - ${owner.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/90 via-transparent to-transparent" />
                
                {/* Photo Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#060b14]/90 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700/60 text-center">
                  <p className="text-xs font-semibold text-white">{owner.name}</p>
                  <p className="text-[11px] text-[#fbbf24]">{owner.title}</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="mt-5 w-full max-w-xs flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-[#0e1b33] border border-[#1e355b]">
                <Clock className="w-5 h-5 text-[#fbbf24]" />
                <div>
                  <span className="text-xs text-slate-400 block">Demonstrated Experience</span>
                  <span className="text-base font-bold text-white">{owner.experienceYears}</span>
                </div>
              </div>
            </div>

            {/* Owner Bio & Commitment */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#fbbf24] uppercase">
                  Personal Commitment to Every Client
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                  {owner.name}
                </h3>
                <p className="text-sm font-medium text-slate-400 mb-6">
                  {owner.title} at <span className="text-slate-200">{businessName}</span>
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
                  <span className="text-xs font-bold uppercase tracking-wider">Service Guarantee & Work Ethic</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;{owner.commitmentStatement}&rdquo;
                </p>
              </div>

              {/* Direct Call to Owner */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${contact.rawPhone}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call {owner.name} Directly</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-[#0e1b33] hover:bg-[#132442] border border-[#1e355b] transition-colors"
                >
                  <span>View Contact Details</span>
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
