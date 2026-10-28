import React from "react";
import Image from "next/image";
import { businessConfig } from "@/data/businessConfig";
import { Truck, Zap, Tractor, Factory, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const { services, contact } = businessConfig;

  const getIcon = (name: string) => {
    switch (name) {
      case "Truck":
        return <Truck className="w-5 h-5" />;
      case "Zap":
        return <Zap className="w-5 h-5" />;
      case "Tractor":
        return <Tractor className="w-5 h-5" />;
      case "Factory":
        return <Factory className="w-5 h-5" />;
      default:
        return <Truck className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#060b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1b33] border border-[#1e355b] text-[#fbbf24] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Specialized Fuel Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Fuel Delivery Services
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Dedicated on-site diesel solutions tailored to commercial facilities, standby generators, farm equipment, and heavy industrial machinery.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#0b1526] border border-[#1e355b] hover:border-[#f59e0b]/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#f59e0b]/10 transition-all duration-300 flex flex-col group"
            >
              {/* Service Card Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1526] via-[#0b1526]/30 to-transparent" />
                
                {/* Floating Service Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#060b14]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700/60 shadow-lg text-slate-200">
                  <span className="text-[#fbbf24]">{getIcon(service.iconName)}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider">Service 0{index + 1}</span>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#fbbf24] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-[#fbbf24] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${contact.rawWhatsApp}?text=${encodeURIComponent(`Hello, I would like to inquire about your ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#fbbf24] hover:text-white transition-colors group/link"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={`tel:${contact.rawPhone}`}
                    className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    Or call directly
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Compliance Notice */}
        <div className="mt-12 bg-[#0e1b33]/60 border border-[#1e355b]/60 rounded-xl p-4 sm:p-5 text-center max-w-4xl mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed">
          <span className="font-semibold text-slate-300">Fuel Supply Notice:</span> Deliveries are scheduled directly based on site access, required fuel volume, and local safety regulations. Please contact the owner directly for current market-rate quotations and delivery scheduling.
        </div>

      </div>
    </section>
  );
}
