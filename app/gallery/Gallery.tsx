"use client";

import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "../constants";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryAltTexts = [
    "Scrap collection truck in Model Town Delhi",
    "Digital weighing of metal scrap in Delhi",
    "On-site factory scrap dismantling North Delhi",
    "Sorted recycling materials ready for processing",
    "Copper wire scrap collection and weighing",
    "Aluminum and brass scrap recycling service",
    "Electronic waste collection in Delhi NCR",
    "Household raddi and old newspaper pickup"
  ];

  const openLightbox = (idx: number) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);
  
  const next = () => selectedIdx !== null && setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length);
  const prev = () => selectedIdx !== null && setSelectedIdx((selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <div className="pt-20">
      {/* <SEO 
        title="Gallery - Scrap Collection & Recycling Photos"
        description="View our latest scrap collection projects in North Delhi. See our transparent weighing process, pickup fleet, and recycling warehouse in action."
      /> */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-brand-600 font-semibold mb-4 uppercase tracking-widest text-sm">Our Recycling Gallery</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Scrap Collection Work in Action</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Real photos from our daily scrap collection and recycling activities across Model Town and Delhi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer overflow-hidden rounded-2xl aspect-video bg-slate-100 group"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={img} 
                  alt={galleryAltTexts[i] || `Scrap pickup and recycling action ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-green-300 font-bold uppercase tracking-widest text-sm mb-4">Official Recognition</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Industry Certifications & Compliance</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { t: "ISO 9001:2015", d: "Certified for standardized quality management in scrap and recycling processes." },
               { t: "Environment Licensed", d: "Authorized by local bodies for urban waste management and recycling collection." },
               { t: "Verified Merchant", d: "Recognized as a most-trusted merchant in Model Town for over a decade." }
             ].map((c, i) => (
               <div key={i} className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                     <ShieldCheck className="text-green-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{c.t}</h4>
                  <p className="text-green-50/80 leading-relaxed text-sm">{c.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Community Updates</h2>
              <h3 className="text-4xl font-bold mb-6">Follow Our Journey</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We regularly post updates about new recycling technologies, special market rates, and our community cleanup drives. Join our 10,000+ followers across scrap networks.
              </p>
              <div className="flex gap-4">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm opacity-50">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="w-6 h-6 grayscale" alt="Instagram" />
                 </div>
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm opacity-50">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" className="w-6 h-6 grayscale" alt="Facebook" />
                 </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-xl rotate-3">
                  <img src={GALLERY_IMAGES[0]} alt="social post" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-xl -rotate-3 mt-12">
                  <img src={GALLERY_IMAGES[1]} alt="social post" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white hover:text-brand-500 transition-colors"
          >
            <X size={40} />
          </button>
          
          <button 
            onClick={prev}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-brand-500 hidden md:block"
          >
            <ChevronLeft size={60} />
          </button>

          <img 
            src={GALLERY_IMAGES[selectedIdx]} 
            alt="Full view" 
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />

          <button 
            onClick={next}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-brand-500 hidden md:block"
          >
            <ChevronRight size={60} />
          </button>
          
          <div className="absolute bottom-10 text-white font-medium">
            {selectedIdx + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </div>
  );
}
