import React from "react";
import { businessConfig } from "@/data/businessConfig";
import {
  UserCheck,
  ShieldCheck,
  BadgeDollarSign,
  MessageSquare,
  HeartHandshake,
  CheckCircle,
  Award,
} from "lucide-react";

export default function WhyChooseUs() {
  const { whyChooseUs } = businessConfig;

  const getIcon = (name: string) => {
    switch (name) {
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-[#fbbf24]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#fbbf24]" />;
      case "BadgeDollarSign":
        return <BadgeDollarSign className="w-6 h-6 text-[#fbbf24]" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-[#fbbf24]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#fbbf24]" />;
      case "Award":
        return <Award className="w-6 h-6 text-[#fbbf24]" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#fbbf24]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#080f1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1b33] border border-[#1e355b] text-[#fbbf24] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Choose Our Fuel Delivery
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Built on transparency, personal accountability, and dependable service you can count on every delivery.
          </p>
        </div>

        {/* 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={item.title}
              className="bg-[#0b1526]/80 border border-[#1e355b] hover:border-[#f59e0b]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#0e1b33] border border-[#1e355b] flex items-center justify-center mb-6 shadow-inner">
                  {getIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Number index indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>COMMITMENT 0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]/60" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
