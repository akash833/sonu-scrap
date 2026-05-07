"use client";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Truck, HandCoins } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const STEPS = [
  {
    icon: MessageSquare,
    title: "1. Contact Us",
    description: "Call or WhatsApp us with details of your scrap type and estimated quantity.",
  },
  {
    icon: Calendar,
    title: "2. Schedule Pickup",
    description: "Choose a convenient time window. We offer same-day collection in most areas.",
  },
  {
    icon: Truck,
    title: "3. Doorstep Visit",
    description: "Our professional team arrives with precision digital scales for accurate weighing.",
  },
  {
    icon: HandCoins,
    title: "4. Weigh & Pay",
    description: "Check the weights, agree on the daily rate, and get instant payment via cash or UPI.",
  },
];

export default function HowItWorks() {
  return (
    <div className="pt-20">
      {/* <SEO 
        title="How It Works - Simple 4-Step Scrap Selling"
        description="Learn how to sell your scrap to Sonu Scrap Dealer in 4 easy steps. Contact us, schedule a pickup, get precise digital weighing, and receive instant cash/UPI payment."
      /> */}
      <section className="py-24 bg-brand-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-green-200 font-semibold mb-4 uppercase tracking-widest text-sm">Selling Your Scrap In Delhi</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">4 Simple Steps to Recycle</h2>
            <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
              We've streamlined our service to make selling scrap completely hassle-free for you. No haggling, no delays.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative group">
                  {/* Connector Line */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[1px] bg-slate-100 group-hover:bg-brand-200 transition-colors" />
                  )}
                  
                  <div className="card h-full text-center border-slate-100 flex flex-col items-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-brand-600 border border-slate-100 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={36} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-32 max-w-4xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-8">Ready to get started?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary h-16 px-10 text-lg">
                 Call Now
               </a>
               <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="btn-secondary h-16 px-10 text-lg border-white text-white hover:bg-white hover:text-slate-900">
                 WhatsApp Pickup
               </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Transparency First</h2>
                <h3 className="text-4xl font-bold mb-8">How to Verify Your Weight</h3>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  We want you to feel 100% confident when you sell to us. Here are three simple ways you can verify the weight accuracy during our visit.
                </p>
                
                <div className="space-y-6">
                  {[
                    { t: "The Water Bottle Test", d: "Place a standard 1-litre water bottle on our scale; it should show exactly 1.00 KG." },
                    { t: "Check the Zero", d: "Ensure the digital display shows '0.00' before any material is placed on the platform." },
                    { t: "Compare Scales", d: "Feel free to weigh a known item on your own scale first to compare with our professional unit." }
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-bold shrink-0">{i+1}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{tip.t}</h4>
                        <p className="text-sm text-slate-500">{tip.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
                 <h4 className="text-2xl font-bold mb-6 text-center">Quality Standards</h4>
                 <div className="space-y-8">
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-600">
                       <p className="text-slate-600 italic">"Our scales are ISO-9001 certified and calibrated monthly by authorized weighing experts to ensure zero margin of error."</p>
                    </div>
                    <ul className="space-y-4">
                       <li className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-brand-600" />
                         <span className="font-medium">Heavy-duty industrial load cells</span>
                       </li>
                       <li className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-brand-600" />
                         <span className="font-medium">Weather-proof digital displays</span>
                       </li>
                       <li className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-brand-600" />
                         <span className="font-medium">Tare weight adjustment support</span>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">After Pickup</h2>
            <h3 className="text-4xl font-bold mb-12">The Recycling Chain</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Sorting", d: "Materials are manually sorted by purity at our collection center." },
                { t: "Processing", d: "Metals are shredded or baled to reduce volume for transport." },
                { t: "Melting", d: "Clean scrap is sent to registered smelters to become new raw material." }
              ].map((step, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] relative">
                  <div className="text-slate-200 font-black text-6xl absolute top-6 right-8">{i+1}</div>
                  <h4 className="text-xl font-bold mb-4 relative z-10">{step.t}</h4>
                  <p className="text-slate-600 text-sm">{step.d}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
