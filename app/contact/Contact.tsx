"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Send, Truck, Package } from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    scrapType: "",
    address: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `*Service Inquiry - Sonu Scrap Dealer*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Scrap Type:* ${formData.scrapType}%0A*Address:* ${formData.address}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* <SEO 
        title="Contact Us - Schedule Your Scrap Pickup Today"
        description="Ready to recycle? Contact Sonu Scrap Dealer via Call, WhatsApp, or our online form. Serving Model Town and North Delhi with fast response and instant payments."
      /> */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-brand-600 font-semibold mb-4 uppercase tracking-widest text-sm">Contact Sonu Scrap Dealer Delhi</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Get in Touch for Scrap Pickup</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about rates or want to schedule a bulk pickup? We are available 7 days a week.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div>
              <h3 className="text-3xl font-bold mb-10">Regional Office</h3>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Our Location</h4>
                    <p className="text-slate-600 text-lg">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start underline underline-offset-8 decoration-brand-100">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Click to Call</h4>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-3xl font-display font-bold text-brand-600">{BUSINESS_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Business Hours</h4>
                    <p className="text-slate-600 text-lg">{BUSINESS_INFO.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-brand-600 rounded-3xl text-white">
                 <h4 className="text-xl font-bold mb-4">Fastest Support via WhatsApp</h4>
                 <p className="mb-8 opacity-90">Send us a photo of your scrap and get an instant estimated quote.</p>
                 <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="h-14 px-8 bg-white text-brand-600 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
                    <MessageCircle size={20} />
                    Chat Now
                 </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-bold mb-8">Send a Lead Request</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition-all shadow-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="Your contact number" 
                    className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition-all shadow-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Scrap Category / Type</label>
                  <select 
                    required
                    className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition-all shadow-sm"
                    value={formData.scrapType}
                    onChange={(e) => setFormData({...formData, scrapType: e.target.value})}
                  >
                    <option value="">Select scrap type</option>
                    <option value="Iron Scrap">Iron Scrap</option>
                    <option value="Copper & Brass">Copper & Brass</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Paper & Books">Paper & Books</option>
                    <option value="E-Waste">E-Waste</option>
                    <option value="Complete Office Scrap">Complete Office Scrap</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Pickup Address</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Model Town, House No..." 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-600/20 transition-all shadow-sm resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full h-16 text-lg shadow-lg shadow-brand-600/20">
                  <Send size={20} />
                  Send Request to WhatsApp
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  By clicking submit, you'll be redirected to WhatsApp to send this message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: MessageCircle, label: "Price Inquiry", desc: "Get current rates for items.", color: "bg-green-500", text: "Hi, I want to know current scrap rates." },
                { icon: Truck, label: "Schedule Pickup", desc: "Book a slot for retrieval.", color: "bg-brand-600", text: "Hi, I'd like to book a scrap pickup." },
                { icon: Package, label: "Bulk Quote", desc: "For office/factory clearance.", color: "bg-slate-900", text: "Hi, I have bulk commercial scrap for clearance." }
              ].map((btn, i) => (
                <a 
                  key={i}
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${btn.text}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 ${btn.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/5`}>
                     <btn.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">{btn.label}</h4>
                  <p className="text-slate-500 text-sm mb-6">{btn.desc}</p>
                  <div className="mt-auto text-brand-600 font-bold text-sm flex items-center gap-2">
                     Chat with Support
                     <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Our Presence</h2>
            <h3 className="text-4xl font-bold mb-12">Serving North Delhi & Beyond</h3>
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
               <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                     <h4 className="text-2xl font-bold mb-6">Service Area Map</h4>
                     <p className="text-slate-400 mb-8 leading-relaxed">
                        Our main facility is located in Model Town, from where our fleet covers a 10-15km radius for residential pickups. For bulk commercial requests, we provide services throughout Delhi NCR.
                     </p>
                     <p className="text-brand-400 font-bold italic mb-8">"Providing fastest response in North Delhi (30-60 Mins arrival in Model Town)."</p>
                     <div className="flex flex-wrap gap-2">
                        {["Model Town", "Ashok Vihar", "Rohini", "Civil Lines", "Pitampura", "Shalimar Bagh", "Punjabi Bagh", "Janakpuri", "Dwarka", "Saket", "Hauz Khas"].map(tag => (
                          <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-xs font-semibold">{tag}</span>
                        ))}
                     </div>
                  </div>
                  <div className="aspect-square bg-slate-800 rounded-3xl border border-white/5 flex items-center justify-center p-4">
                     <div className="w-full h-full rounded-2xl bg-white/5 flex flex-col items-center justify-center text-center p-8">
                        <MapPin size={48} className="text-brand-600 mb-4 animate-bounce" />
                        <div className="font-bold text-lg">H-2ndrd, Model Town Phase 1</div>
                        <p className="text-xs text-slate-500 mt-2">New Delhi, Delhi 110009</p>
                        <div className="mt-6 border border-brand-600/50 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand-500">
                          Primary Collection Hub
                        </div>
                     </div>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px]" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
            </div>
        </div>
      </section>
    </div>
  );
}
