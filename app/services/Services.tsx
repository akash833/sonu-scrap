"use client";

import { motion } from "framer-motion";
import { MessageCircle, Construction, Zap, Package, BookOpen, Monitor, Armchair, Building2 } from "lucide-react";
import { SCRAP_CATEGORIES, BUSINESS_INFO } from "../constants";

const ICON_MAP: Record<string, any> = {
  Construction,
  Zap,
  Package,
  BookOpen,
  Monitor,
  Armchair,
  Building2,
};

export default function Services() {
  return (
    <div className="pt-20">
      {/* <SEO 
        title="Our Services - Metal, Paper, Plastic & E-Waste Pickup"
        description="Explore recycling services by Sonu Scrap Dealer. We buy Iron, Copper, Aluminum, Brass, Old Newspapers, Office E-waste, and more with instant payment and honest weighing."
      /> */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-brand-600 font-semibold mb-4 uppercase tracking-widest text-sm">Scrap Recycling Services in Delhi</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">What We Buy & Recycle</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in multiple scrap categories, providing professional collection and best-in-market pricing for residential and commercial needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCRAP_CATEGORIES.map((category) => {
              const Icon = ICON_MAP[category.icon] || Package;
              return (
                <div key={category.id} className="card group border-slate-200 overflow-hidden flex flex-col h-full">
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-brand-600 shadow-lg">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed italic border-l-2 border-brand-200 pl-4 flex-grow">
                      {category.description}
                    </p>
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hello, I want to sell ${category.title}. Please provide current rate.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full"
                    >
                      <MessageCircle size={20} />
                      Get Rate on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-red-600">Materials We Don't Buy</h3>
                <p className="text-slate-600 mb-10 leading-relaxed">
                  As responsible recyclers, for safety and legal reasons, we generally do not accept the following items. Please check before scheduling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {[
                    "Medical Waste / Syringes",
                    "Chemical Hazard Drums",
                    "Loose Plastic Wrappers",
                    "Explosive Materials",
                    "Wet Household Garbage",
                    "Stolen Property / Parts"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 p-10 rounded-3xl border border-red-100 italic text-red-900">
                <p>"Safety first: We strictly adhere to Delhi NCR environmental safety norms. We do not deal in hazardous waste that requires specialized industrial disposal units."</p>
                <div className="mt-6 font-bold uppercase tracking-widest text-[10px]">— Safety Compliance Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Service Area</h2>
            <h3 className="text-4xl font-bold">Where We Operate</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               "Model Town (I, II, III)", "GTB Nagar", "Civil Lines", "Derawal Nagar",
               "Ashok Vihar", "Shalimar Bagh", "Pitampura", "Rohini",
               "Hudson Lane", "Kamla Nagar", "Vijay Nagar", "Azadpur",
               "Adarsh Nagar", "Jahangirpuri", "Burari", "Mukherji Nagar",
               "Kingsway Camp", "Gujranwala Town", "Rana Pratap Bagh", "Shakti Nagar",
               "Punjabi Bagh", "Paschim Vihar", "Janakpuri", "Dwarka",
               "Saket", "Vasant Kunj", "Hauz Khas", "Connaught Place",
               "Karol Bagh", "Rajendra Nagar", "Patel Nagar", "Old Delhi Areas"
             ].map((area, i) => (
               <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center font-bold text-slate-800 hover:bg-brand-50 hover:text-brand-700 transition-all cursor-default">
                 {area}
               </div>
             ))}
          </div>
          <p className="text-center text-slate-500 mt-10">We also serve other parts of delhi for bulk commercial scrap quantities (100kg+).</p>
        </div>
      </section>
      
      <section className="py-24 bg-brand-50">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need bulk clearance for your office or factory?</h2>
            <p className="text-slate-600 mb-10 text-lg">We provide expert dismantling and site clearance for large commercial properties.</p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary inline-flex">Call for Business Inquiry</a>
         </div>
      </section>
    </div>
  );
}
