import React from "react";
import { businessConfig } from "@/data/businessConfig";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  User,
  Navigation,
  FileCheck2,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const { contact, owner, businessName } = businessConfig;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#060b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1b33] border border-[#1e355b] text-[#fbbf24] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact the Owner Directly
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have questions about diesel delivery, pricing quotes, or scheduling? Connect directly with {owner.name} through your preferred channel.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Action Channels */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Phone Card with Functional Call Now Button */}
            <div className="bg-[#0b1526] border border-[#1e355b] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-[#f59e0b]/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0e1b33] text-[#fbbf24] flex items-center justify-center shrink-0 border border-[#1e355b]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block mt-0.5">
                      {contact.displayPhone}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">
                      Direct line to {owner.name} ({businessName})
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:${contact.rawPhone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0"
                  id="contact-call-now-button"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Card with Functional wa.me Button */}
            <div className="bg-[#0b1526] border border-[#1e355b] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-emerald-500/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0e1b33] text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      WhatsApp Messaging
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block mt-0.5">
                      {contact.displayWhatsApp}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">
                      Instant chat for quick inquiries and location drops
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${contact.rawWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0"
                  id="contact-whatsapp-button"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Address & Directions Card with Google Maps Button */}
            <div className="bg-[#0b1526] border border-[#1e355b] rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0e1b33] text-[#fbbf24] flex items-center justify-center shrink-0 border border-[#1e355b]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Depot Address / Location
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-white block mt-0.5">
                      {contact.physicalAddress}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">
                      Service Area: {contact.serviceArea}
                    </span>
                  </div>
                </div>

                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#0e1b33] hover:bg-[#132442] text-slate-200 border border-[#1e355b] hover:border-slate-500 shadow-sm transition-all shrink-0"
                  id="contact-get-directions-button"
                >
                  <Navigation className="w-4 h-4 text-[#fbbf24]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#0b1526] border border-[#1e355b] rounded-2xl p-6 shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0e1b33] text-[#fbbf24] flex items-center justify-center shrink-0 border border-[#1e355b]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Business Hours
                </span>
                <span className="text-base font-semibold text-white block mt-0.5">
                  {contact.businessHours}
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Flexible dispatch arrangements available by prior phone coordination
                </span>
              </div>
            </div>

          </div>

          {/* Quick Guidance Card / What to Prepare */}
          <div className="lg:col-span-5 bg-[#0b1526]/90 border border-[#1e355b] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 text-[#fbbf24] flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Before You Call</h3>
                <p className="text-xs text-slate-400">Quick details that help us quote & schedule</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              To provide you with an immediate, accurate quote and delivery timeline, having the following details ready is helpful:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-[#0e1b33] text-[#fbbf24] flex items-center justify-center font-bold text-xs shrink-0 border border-[#1e355b]">1</span>
                <div>
                  <strong className="text-white block">Delivery Location & Site Access</strong>
                  <span className="text-xs text-slate-400">Your site address and whether a heavy tanker truck can easily maneuver.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-[#0e1b33] text-[#fbbf24] flex items-center justify-center font-bold text-xs shrink-0 border border-[#1e355b]">2</span>
                <div>
                  <strong className="text-white block">Estimated Fuel Volume Needed</strong>
                  <span className="text-xs text-slate-400">Approximate liters or gallons required for your tank, generator, or fleet.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-[#0e1b33] text-[#fbbf24] flex items-center justify-center font-bold text-xs shrink-0 border border-[#1e355b]">3</span>
                <div>
                  <strong className="text-white block">Equipment or Tank Type</strong>
                  <span className="text-xs text-slate-400">Standby generator, bulk skid tank, farm tractor, or construction equipment.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-6 h-6 rounded-full bg-[#0e1b33] text-[#fbbf24] flex items-center justify-center font-bold text-xs shrink-0 border border-[#1e355b]">4</span>
                <div>
                  <strong className="text-white block">Desired Delivery Window</strong>
                  <span className="text-xs text-slate-400">Same-day urgent requirement or scheduled routine delivery.</span>
                </div>
              </li>
            </ul>

            {/* Direct owner badge */}
            <div className="bg-[#0e1b33] p-4 rounded-xl border border-[#1e355b] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#132442] flex items-center justify-center text-slate-300 shrink-0">
                <User className="w-5 h-5 text-[#fbbf24]" />
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block">Direct Line to {owner.name}</span>
                <span>No call queues — straightforward owner-to-operator support.</span>
              </div>
            </div>

          </div>

        </div>

        {/* Configuration Notice Placeholder Reminder */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <span>* Note for site administrator: All phone numbers, addresses, hours, and map links are easily updated in </span>
          <code className="text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">data/businessConfig.ts</code>
        </div>

      </div>
    </section>
  );
}
