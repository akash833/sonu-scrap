"use client";

import { motion } from "framer-motion";
import { BUSINESS_INFO, GALLERY_IMAGES } from "../constants";
import Image from "next/image"; // ✅ replaces <img>

export default function About() {
  return (
    <div className="pt-20">
      {/* SEO removed — handled by page.tsx */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-brand-600 font-semibold mb-4 uppercase tracking-widest text-sm">About Sonu Scrap Dealer</h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Serving Delhi with Honesty for over 10 Years</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Sonu Scrap Dealer started with a simple belief: recycling should be rewarding, easy, and transparent. Over the last decade, we have grown into one of Model Town's most trusted scrap collection services.
                </p>
                <p>
                  We are not just kabadiwalas; we are partners in urban sustainability. Our team is dedicated to providing high-quality service, fair pricing, and environmentally responsible disposal of all materials we collect.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-brand-600 mb-1">10+</div>
                  <div className="text-sm font-semibold uppercase text-slate-500 tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-600 mb-1">500+</div>
                  <div className="text-sm font-semibold uppercase text-slate-500 tracking-wider">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <Image
                src={GALLERY_IMAGES[1]}
                alt="Business Founder"
                width={600}
                height={750}
                className="rounded-3xl shadow-2xl relative z-10 w-full aspect-4/5 object-cover"
              />
              <div className="absolute inset-0 border-4 border-brand-600 rounded-3xl -translate-x-6 -translate-y-6 z-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-brand-600 font-bold text-2xl mb-4">Fair Price</div>
              <p className="text-slate-600">We believe in volume and long-term relationships, ensuring you always get the best market value.</p>
            </div>
            <div>
              <div className="text-brand-600 font-bold text-2xl mb-4">Transparency</div>
              <p className="text-slate-600">Daily rates are public and our digital scales are calibrated to perfection.</p>
            </div>
            <div>
              <div className="text-brand-600 font-bold text-2xl mb-4">Eco-Friendly</div>
              <p className="text-slate-600">We ensure that every bit of scrap we buy is processed in an eco-conscious manner.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-lg">
                  <Image
                    src={GALLERY_IMAGES[2]}
                    alt="Local impact"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-lg mt-8">
                  <Image
                    src={GALLERY_IMAGES[0]}
                    alt="Urban recycling"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-brand-600 font-semibold mb-3 uppercase tracking-widest text-sm">Community Impact</h2>
              <h3 className="text-4xl font-bold mb-6">Cleaning Delhi, Building Sustainability</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                By choosing Sonu Scrap Dealer, you aren't just selling your waste; you are contributing to a cleaner Delhi. Our efficient recycling chain reduces the burden on local landfills and saves precious natural resources.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800 font-bold">
                  <div className="w-2 h-2 rounded-full bg-brand-600" />
                  10,000+ KG Plastic Kept out of Oceans
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-bold">
                  <div className="w-2 h-2 rounded-full bg-brand-600" />
                  Free Awareness programs for Model Town Residents
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-bold">
                  <div className="w-2 h-2 rounded-full bg-brand-600" />
                  Supporting 10+ local recycling families
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">The Sonu Scrap Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Honest Weight", d: "Digital scales checked daily." },
              { t: "Same Day Pickup", d: "Call before 2PM for same day." },
              { t: "Best Rates", d: "Market-linked competitive pricing." },
              { t: "Safe Handling", d: "Professional and verified staff." },
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 group hover:bg-brand-600 transition-all">
                <h4 className="text-xl font-bold mb-2 group-hover:text-white">{p.t}</h4>
                <p className="text-slate-600 text-sm group-hover:text-brand-100">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}