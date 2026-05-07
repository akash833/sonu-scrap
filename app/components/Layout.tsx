// app/components/Layout.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS_INFO } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ replaces useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]); // ✅ was [location]

  return (
    <nav className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex flex-col"> {/* ✅ to= → href= */}
            <span className="text-2xl font-bold text-brand-600 leading-tight">Sonu Scrap</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium font-display">Dealer New Delhi</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path} // ✅ to= → href=
                className={`text-sm font-medium transition-colors ${pathname === link.path ? "text-brand-600" : "text-slate-600 hover:text-brand-600"
                  // ✅ was location.pathname
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="p-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors">
                <Phone size={18} />
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary py-2 px-4 text-sm">
                <MessageCircle size={18} />
                WhatsApp
              </a>


            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path} // ✅ to= → href=
                  className={`block px-3 py-4 text-lg font-medium border-b border-slate-50 ${pathname === link.path ? "text-brand-600" : "text-slate-600"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary h-14">
                  <Phone size={20} />
                  Call
                </a>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="btn-primary h-14">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex flex-col group"> {/* ✅ to= → href= */}
            <span className="text-2xl font-bold text-white group-hover:text-brand-500 transition-colors">Sonu Scrap</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Delhi's Trusted Dealer</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            We are dedicated to providing the most transparent, fair, and environment-friendly scrap recycling services in North Delhi. Trusted by homeowners and businesses for over a decade.
          </p>
          <div className="flex gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all">
              <Phone size={18} />
            </a>
            <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-600 rounded-full" />
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/services" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-600" />Our Services</Link></li>
            <li><Link href="/about" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-600" />Company Story</Link></li>
            <li><Link href="/how-it-works" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-600" />How It Works</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-600" />Job Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-brand-600" />Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs relative inline-block">
            Contact Detail
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-600 rounded-full" />
          </h4>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600/10 flex items-center justify-center text-brand-600 shrink-0">
                <MapPin size={18} />
              </div>
              <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600/10 flex items-center justify-center text-brand-600 shrink-0">
                <Clock size={18} />
              </div>
              <span>{BUSINESS_INFO.workingHours}</span>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600/10 flex items-center justify-center text-brand-600 shrink-0">
                <Phone size={18} />
              </div>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs relative inline-block">
            Our Presence
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-600 rounded-full" />
          </h4>
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
              <div className="text-brand-600 font-bold text-lg mb-1">{BUSINESS_INFO.experience}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Professional Experience</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
              <div className="text-brand-600 font-bold text-lg mb-1">{BUSINESS_INFO.customers}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Satisfied Locals</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest">
        <div className="text-slate-600">
          &copy; {new Date().getFullYear()} Sonu Scrap Dealer. All rights reserved.
        </div>
        <div className="text-slate-600 flex items-center gap-1">
          Design and Development by <a href="https://www.gmbguru.in" target="_blank" rel="noreferrer" className="text-brand-600 hover:text-brand-500 underline decoration-brand-600/30 underline-offset-4">GMB Guru</a>
        </div>
      </div>
    </div>
  </footer>
);

const ContactSidebar = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-1 md:p-2 bg-white/80 backdrop-blur-md rounded-l-2xl border border-slate-200 shadow-2xl">
    <a
      href={`tel:${BUSINESS_INFO.phone}`}
      className="w-12 h-14 bg-brand-600 text-white rounded-l-xl rounded-r-sm flex flex-col items-center justify-center hover:bg-brand-700 transition-all hover:pr-4 group"
      aria-label="Call Now"
    >
      <Phone size={20} fill="currentColor" />
      <span className="text-[8px] font-bold uppercase mt-1">Call</span>
    </a>
    <a
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-14 bg-[#25D366] text-white rounded-l-xl rounded-r-sm flex flex-col items-center justify-center hover:bg-[#20ba59] transition-all hover:pr-4 group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={20} fill="currentColor" />
      <span className="text-[8px] font-bold uppercase mt-1">Chat</span>
    </a>
  </div>
);

// ✅ No more <Outlet /> — Next.js passes children via app/layout.tsx
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}  {/* ✅ replaces <Outlet /> */}
      </main>
      <Footer />
      <ContactSidebar />
    </div>
  );
};