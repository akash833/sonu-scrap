"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronRight, CheckCircle2, Star, Users, Briefcase, Construction, Zap, Package, Camera, ArrowRight, ShieldCheck, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO, SCRAP_CATEGORIES, GALLERY_IMAGES } from "../constants";
import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const ICON_MAP: Record<string, any> = {
  Construction,
  Zap,
  Package,
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What items do you buy as scrap?",
      a: "We buy all types of metal scrap (Iron, Copper, Aluminum, Brass, Steel), Old Newspapers (Raddi), Cardboard, Office E-waste (CPUs, Monitors, UPS), Batteries, and specific plastic items. Basically, if it's recyclable, we likely buy it!"
    },
    {
      q: "Do you provide free doorstep pickup?",
      a: "Yes! We provide free doorstep pickup for household and commercial scrap across Model Town and North Delhi. For very small quantities (less than 10kg), we suggest combining items for a single visit."
    },
    {
      q: "How do you ensure honest weighing?",
      a: "We use ISO-certified digital weighing scales that we carry to your location. You can verify the weight yourself. We have built our 10-year reputation on 100% transparent and honest weighing."
    },
    {
      q: "How and when do I get paid?",
      a: "Payment is made instantly on the spot after weighing is completed. You can choose to receive payment via Cash, UPI (GPay/PhonePe/Paytm), or Bank Transfer."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">FAQ</h2>
          <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-900">{faq.q}</span>
                <ChevronRight className={`text-brand-600 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-slate-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PickupProcess = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500">
            <img
              src={GALLERY_IMAGES[3] || GALLERY_IMAGES[0]}
              alt="Pickup Truck and Team"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/30 to-transparent" />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-50 rounded-full -z-10" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-100/50 rounded-full -z-10" />

          <div className="absolute -bottom-8 left-8 right-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 z-20">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Verified Pickup Fleet</div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Reliable & Timely Service</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">How it Works</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">4 Simple Steps to Sell Your Scrap</h3>

          <div className="space-y-10">
            {[
              { t: "Schedule Notification", d: `Call us at ${BUSINESS_INFO.phone} or WhatsApp photos to get a quick estimate and pick a time slot.` },
              { t: "Verified Team Arrival", d: "Our professional pickup team arrives at your doorstep in Model Town or anywhere in Delhi." },
              { t: "Transparent Weighing", d: "We weigh your items right in front of you using calibrated digital scales for 100% accuracy." },
              { t: "Instant Spot Payment", d: "Get paid immediately via Cash, UPI, or Bank Transfer. No waiting, no hassle!" }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-black text-xl group-hover:bg-brand-600 group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-slate-100" />}
                </div>
                <div className="pt-1">
                  <h4 className="text-xl font-bold mb-2 text-slate-900">{step.t}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ImpactStats = () => (
  <section className="py-20 bg-brand-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full opacity-20" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-green-200 font-semibold mb-3 uppercase tracking-widest text-sm">Our Environmental Impact</h2>
      <h3 className="text-3xl md:text-5xl font-bold mb-16">Making Delhi Greener, One Pickup at a Time</h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {[
          { label: "Scrap Recycled", value: "500+", unit: "Tons", desc: "Iron, Plastic & Paper" },
          { label: "Carbon Saved", value: "1.2K", unit: "KGS", desc: "CO2 Reduction" },
          { label: "Pickups Done", value: "10K+", unit: "Visits", desc: "Across Delhi NCR" },
          { label: "Water Saved", value: "2M+", unit: "Litres", desc: "Through Recycling" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
          >
            <div className="text-4xl md:text-5xl font-black mb-2 flex items-baseline justify-center gap-1">
              {stat.value}
              <span className="text-lg font-bold text-green-300">{stat.unit}</span>
            </div>
            <div className="font-bold text-lg mb-2">{stat.label}</div>
            <p className="text-xs text-green-100/70 uppercase tracking-tighter font-semibold">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const LiveRates = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/2">
          <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Transparency</h2>
          <h3 className="text-4xl font-bold mb-6">Today's Market Rates</h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            We provide the most competitive and honest prices in Model Town. Rates are subject to market fluctuations. Contact us for bulk quantities.
          </p>

          <div className="card shadow-xl border-brand-100 bg-brand-50/30 p-8 rounded-[2rem]">
            <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
              <ShieldCheck className="text-brand-600" />
              Price Guarantee
            </h4>
            <p className="text-slate-600 text-sm">
              If you have more than 100kg of scrap, we offer **Special Bulk Rates**. Send us a photo on WhatsApp to unlock the best price in Delhi.
            </p>
            <div className="mt-8">
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I have bulk scrap. Please tell me current rates.`} target="_blank" rel="noreferrer" className="btn-primary w-full shadow-lg h-14">
                Get Today's Rates
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-2 overflow-hidden shadow-sm">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold rounded-tl-2xl">Material</th>
                  <th className="px-6 py-4 font-bold text-right rounded-tr-2xl">Est. Rate / KG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "Heavy Iron Scrap", rate: "₹30 - 32" },
                  { name: "Copper Wire (Pure)", rate: "₹800 - 1000" },
                  { name: "Brass Utensils", rate: "₹400 - 500" },
                  { name: "Aluminum Scrap", rate: "₹140 - 165" },
                  { name: "Newspapers (Raddi)", rate: "₹14 - 18" },
                  { name: "Plastic (Mixed)", rate: "₹8 - 12" },
                  { name: "E-Waste / CPUs", rate: "₹400 - 1200 / pc" },
                ].map((item, i) => (
                  <tr key={i} className="group hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-800">{item.name}</td>
                    <td className="px-6 py-4 text-right font-black text-brand-600">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-slate-400 mt-4 text-center italic">*Rates are approximate and vary based on purity and quantity.</p>
        </div>
      </div>
    </div>
  </section>
);

const PhotoQuote = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-950 rounded-[3rem] overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-12 md:p-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-600/20 text-brand-500 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Camera size={14} />
              Instant Estimation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Get an Estimate in <span className="text-brand-600">5 Minutes</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Not sure about the scrap type or weight? Just click some photos of your junk and send them to us on WhatsApp. Our experts will evaluate and give you a rough quote immediately.
            </p>
            <div className="space-y-4">
              {[
                "Capture 2-3 clear photos",
                "Mention your location (Model Town/Delhi)",
                "Get instant best market rate"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="w-6 h-6 bg-brand-600/30 text-brand-500 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I want a quote for my scrap. Sending photos now.`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary h-16 px-10 text-lg shadow-2xl shadow-brand-600/20 w-full sm:w-auto"
              >
                <MessageCircle size={22} />
                Send Photos via WhatsApp
              </a>
            </div>
          </div>
          <div className="h-full min-h-[400px] relative">
            <img
              src={GALLERY_IMAGES[1]}
              alt="Photo Quote Process"
              className="absolute inset-0 w-full h-full object-cover opacity-60 lg:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuickInquiry = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", scrap: "Iron Scrap" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sonuguptascrapdealerinfo@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Scrap_Type: formData.scrap,
          _subject: `New Lead from Sonu Scrap Website: ${formData.name}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback to WhatsApp if email fails
        const message = `*Lead Inquiry*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Scrap:* ${formData.scrap}`;
        window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true); // Show success anyway for UX, redirect fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-brand-100 text-center"
          >
            <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
            <p className="text-slate-600 mb-10 text-lg">
              We have received your request. Our team will contact you shortly with the best rates.
            </p>Contact
            <div className="flex flex-col gap-4">
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I just submitted a quote request. Please check.`} target="_blank" rel="noreferrer" className="btn-primary h-14">
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary h-14">
                <Phone size={20} />
                Call Now
              </a>
              <button onClick={() => setIsSubmitted(false)} className="text-sm text-slate-400 hover:text-brand-600 transition-colors mt-2">
                Submit another inquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Quick Price Check</h2>
        <h3 className="text-4xl font-bold">Get Today's Best Rates</h3>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative z-10 mt-[-20px]">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Your Name</label>
              <input
                required
                type="text"
                placeholder="Ex. Rahul"
                className="w-full h-14 px-5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Phone Number</label>
              <input
                required
                type="tel"
                placeholder="98xxxx"
                className="w-full h-14 px-5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Scrap Type</label>
              <select
                className="w-full h-14 px-5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                onChange={(e) => setFormData({ ...formData, scrap: e.target.value })}
              >
                {SCRAP_CATEGORIES.map(cat => <option key={cat.id} value={cat.title}>{cat.title}</option>)}
              </select>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn-primary h-14 text-base font-bold shadow-lg shadow-brand-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Check Price"}
              {!isSubmitting && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-slate-50">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={16} className="text-brand-600" />
              100% Privacy Guaranteed
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={16} className="text-brand-600" />
              No Hidden Charges
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={16} className="text-brand-600" />
              Accurate Digital Scales
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-2 pb-12 sm:pt-8 lg:pt-10 lg:pb-32">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/40 -skew-x-12 translate-x-24 hidden lg:block" />
    <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-brand-50 rounded-full blur-[100px] opacity-40 lg:hidden" />

    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Content Side */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 mx-auto lg:mx-0 shadow-sm border border-brand-200/30">
              <ShieldCheck size={14} className="text-brand-600" />
              Delhi's Most Trusted Scrap Buyer
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-[1.15] lg:leading-[1.1] tracking-tight">
              Turn Your Scrap into <span className="text-brand-600 relative inline-block">Instant Cash
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-200 -z-10" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none"><path d="M0 15C50 5 150 5 200 15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-90 px-2 sm:px-0">
              Get the best market rates with professional doorstep pickup across Model Town and Delhi. Transparent digital weighing for 100% honesty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 px-2 sm:px-0">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary w-full sm:w-auto h-15 sm:h-16 px-10 text-lg shadow-xl shadow-brand-600/30">
                <Phone size={22} />
                Call Now
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto h-15 sm:h-16 px-10 text-lg bg-white">
                <MessageCircle size={22} />
                WhatsApp Rate
              </a>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6 border-t border-slate-100 pt-8 md:pt-10 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm font-semibold">
                <CheckCircle2 size={18} className="text-brand-600 shrink-0" />
                <span>Free Home Pickup</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm font-semibold">
                <CheckCircle2 size={18} className="text-brand-600 shrink-0" />
                <span>On-Spot Payment</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm font-semibold">
                <CheckCircle2 size={18} className="text-brand-600 shrink-0" />
                <span>Fair Market Price</span>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Image Side */}
        <div className="w-full lg:w-5/12 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto max-w-md lg:max-w-none"
          >
            {/* Image Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1 lg:skew-y-0 hover:skew-y-0 transition-transform duration-500">
              <img
                src={GALLERY_IMAGES[0]}
                alt="Scrap Dealer Team"
                className="w-full h-full object-cover aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white hidden sm:block">
                <p className="text-sm font-semibold italic">"Best rates in Model Town, transparent weighing!"</p>
                <div className="text-[10px] uppercase tracking-widest mt-1 opacity-70">Verified Customer Review</div>
              </div>
            </div>

            {/* Floating Reputation Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 z-20"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                  <Star fill="currentColor" size={14} />
                </div>
                <span className="font-bold text-slate-900 text-sm">4.9/5</span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Trusted Locally for 15+ Years</p>
            </motion.div>

            {/* Experience Pulse */}
            <div className="absolute -top-6 -left-6 bg-brand-600 text-white w-20 h-20 rounded-full shadow-xl z-20 flex flex-col items-center justify-center text-center border-4 border-white">
              <span className="text-xl font-bold leading-none">15+</span>
              <span className="text-[8px] uppercase font-bold">Years</span>
            </div>

            {/* Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-600/10 rounded-full blur-[100px] opacity-40" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const TrustBadges = () => (
  <section className="bg-slate-50 py-12 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 grayscale opacity-60">
        <div className="flex items-center gap-2">
          <Star className="text-slate-900 fill-slate-900" size={18} />
          <span className="font-bold text-lg">ISO 9001 Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-slate-900" size={18} />
          <span className="font-bold text-lg">{BUSINESS_INFO.customers} Customers</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="text-slate-900" size={18} />
          <span className="font-bold text-lg">{BUSINESS_INFO.experience} Experience</span>
        </div>
        <div className="flex items-center gap-2 text-xl font-black italic tracking-tighter">
          #GO GREEN DELHI
        </div>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Our Expertise</h2>
          <h3 className="text-4xl font-bold mb-4">What We Buy</h3>
          <p className="text-slate-600">From household junk to industrial waste, we buy everything at premium market prices. High-precision weighing guaranteed.</p>
        </div>
        <Link href="/services" className="text-brand-600 font-semibold flex items-center gap-1 hover:underline">
          View All Services <ChevronRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SCRAP_CATEGORIES.slice(0, 3).map((item) => {
          const Icon = ICON_MAP[item.icon] || Package;
          return (
            <div key={item.id} className="card group">
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                <Icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-600 mb-6 line-clamp-2">{item.description}</p>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to sell ${item.title}`} className="text-brand-600 font-medium text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                Get Quote <ChevronRight size={16} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Transparency First</h2>
          <h3 className="text-4xl font-bold mb-8">Why Thousands Trust<br />Sonu Scrap Dealer?</h3>
          <div className="space-y-8">
            {[
              { title: "Fair Pricing", desc: "We offer the most competitive rates in Delhi, updated daily as per market trends." },
              { title: "Digital Scales", desc: "Precise weighing using calibrated electronic machines. No cheating, ever." },
              { title: "Same Day Pickup", desc: "Our reliable fleet is always ready for quick doorstep visits in Model Town and surroundings." },
              { title: "Professional Team", desc: "Well-trained staff handling heavy lifting and quick clearance." },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-600/20 text-brand-600 flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={GALLERY_IMAGES[2]}
            alt="Professional Pickup"
            className="rounded-3xl shadow-2xl relative z-10"
          />
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-600 rounded-full blur-[100px] opacity-20" />
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Customer Stories</h2>
        <h3 className="text-4xl font-bold">What People Say</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Rahul S.", role: "Resident, Model Town", text: "Very professional service. They came on time and paid the exact amount promised on phone." },
          { name: "Suman K.", role: "Office Manager", text: "Clean office dismantling service. Highly recommended for business scrap clearance." },
          { name: "Pankaj G.", role: "Shop Owner", text: "Daily rates are honest. Digital weighing gives full transparency. Best in Delhi." },
        ].map((t, i) => (
          <div key={i} className="card italic text-slate-700 bg-slate-50 border-none">
            <div className="flex gap-1 text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="mb-6 leading-relaxed">"{t.text}"</p>
            <div className="not-italic">
              <div className="font-bold text-slate-900">{t.name}</div>
              <div className="text-xs text-slate-500">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Map */}
        <div className="w-full h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13996.596067146644!2d77.19234012784727!3d28.715092300158616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0100685064bd%3A0x5b10502d2e577eee!2sSonu%20Scrap%20Dealer!5e0!3m2!1sen!2sin!4v1777639759564!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-brand-100 flex items-center gap-2 z-10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Live Location</span>
          </div>
        </div>

        {/* Right Column: Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Our Hub</h2>
            <h3 className="text-4xl font-bold mb-6">Visit Our Primary Collection Center</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Serving the heart of North Delhi. Our main facility in Model Town is equipped with high-capacity digital scales and handles over 5 tons of recycling daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-600/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Office Address</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase tracking-tight">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-600/20">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium uppercase tracking-tight">{BUSINESS_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-brand-600 rounded-[2.5rem] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="text-xl font-bold mb-1">Near Model Town?</div>
              <p className="text-xs text-brand-100 font-bold uppercase tracking-widest">We can reach you in 30 minutes</p>
            </div>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="h-14 px-8 bg-white text-brand-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors w-full sm:w-auto">
              <Phone size={18} />
              Call Pickup
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to clear your clutter?</h2>
        <p className="text-xl text-green-50 opacity-90 mb-10">Get today's best scrap rates in 2 minutes. Schedule a doorstep pickup now.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="h-16 px-10 bg-white text-brand-600 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
            <Phone size={20} />
            Call Now
          </a>
          <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="h-16 px-10 border-2 border-white text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            <MessageCircle size={20} />
            WhatsApp Quote
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    </div>
  </section>
);

const ServiceAreas = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Our Reach</h2>
        <h3 className="text-4xl font-bold mb-4">Areas We Serve Across Delhi</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">We provide same-day doorstep scrap collection in North Delhi and express services for bulk commercial inquiries throughout the NCR region.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "Model Town", "GTB Nagar", "Civil Lines", "Derawal Nagar", "Ashok Vihar",
          "Shalimar Bagh", "Pitampura", "Rohini", "Kamla Nagar", "Vijay Nagar",
          "Azadpur", "Mukherji Nagar", "Burari", "Punjabi Bagh", "Paschim Vihar",
          "Janakpuri", "Dwarka", "Saket", "Hauz Khas", "Karol Bagh", "Old Delhi"
        ].map((area, i) => (
          <div key={i} className="px-5 py-3 bg-white rounded-2xl border border-slate-100 shadow-sm text-sm font-bold text-slate-700 hover:text-brand-600 hover:border-brand-100 transition-all cursor-default flex items-center gap-2">
            <MapPin size={14} className="text-brand-600" />
            {area}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      {/* <SEO 
        title="Best Scrap Buyer in Model Town Delhi"
        description="Top-rated scrap dealer in Delhi serving Model Town, Ashok Vihar, and North Delhi. Sell your metal, iron, raddi, and e-waste scrap at high prices with free pickup."
      /> */}
      <Hero />
      <TrustBadges />
      <QuickInquiry />
      <ServicesPreview />
      <LiveRates />
      <ImpactStats />
      <PhotoQuote />
      <PickupProcess />
      <ServiceAreas />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <MapSection />
      <CTABanner />
    </>
  );
}
