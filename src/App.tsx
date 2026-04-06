/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Microscope, 
  Leaf, 
  Package, 
  Users, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Star,
  Instagram,
  Twitter,
  Droplets,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Testimonial {
  name: string;
  city: string;
  quote: string;
  avatar: string;
}

interface Product {
  id: string;
  name: string;
  benefit: string;
  price: string;
  image: string;
  category: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface PricingTier {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

// --- Data ---
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anisa Rahma",
    city: "Surabaya",
    quote: "Pertama pakai serum-nya langsung berasa lembabnya. Seminggu kulit saya udah jauh lebih cerah dan nggak kusam. Beneran rekomen!",
    avatar: "https://i.pravatar.cc/80?img=47"
  },
  {
    name: "Mega Putri",
    city: "Jakarta",
    quote: "Saya kulit sensitif dan susah banget cocok produk. Ini nggak bikin breakout sama sekali, langsung lembut dari hari pertama.",
    avatar: "https://i.pravatar.cc/80?img=48"
  },
  {
    name: "Tika Sari",
    city: "Bandung",
    quote: "Bekas jerawat saya yang udah lama mulai pudar setelah 2 minggu. Harga terjangkau, kualitas nggak murahan.",
    avatar: "https://i.pravatar.cc/80?img=49"
  }
];

const PRODUCTS: Product[] = [
  {
    id: "hydra-serum",
    name: "SkinGlow Hydra Serum",
    benefit: "72-hour moisture lock, tekstur gel ringan",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&q=75",
    category: "SERUM"
  },
  {
    id: "vit-c-essence",
    name: "Vitamin C Brightening Essence",
    benefit: "Pencerah alami + perlindungan radikal bebas",
    price: "Rp 155.000",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&auto=format&q=75",
    category: "ESSENCE"
  },
  {
    id: "silk-moisturizer",
    name: "Silk Finish Moisturizer",
    benefit: "Barrier repair, cocok semua jenis kulit",
    price: "Rp 210.000",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&q=75",
    category: "MOISTURIZER"
  }
];

const FAQS: FAQItem[] = [
  {
    question: "Apakah produk ini cocok untuk kulit sensitif?",
    answer: "Semua produk SkinGlow diformulasikan tanpa paraben, SLS, dan pewangi buatan. Cocok untuk kulit sensitif dan sudah melalui uji dermatologis."
  },
  {
    question: "Berapa lama pengiriman ke seluruh Indonesia?",
    answer: "Pengiriman ke Jawa 1–3 hari, luar Jawa 3–7 hari melalui JNE / J&T / SiCepat."
  },
  {
    question: "Apakah sudah terdaftar di BPOM?",
    answer: "Ya, seluruh produk SkinGlow sudah terdaftar resmi di BPOM dengan nomor registrasi yang bisa dicek di cekbpom.go.id."
  },
  {
    question: "Apakah ada garansi jika tidak cocok?",
    answer: "Kami memberikan garansi uang kembali 30 hari jika kulit Anda bereaksi negatif terhadap produk. Hubungi kami via WhatsApp."
  }
];

const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: "Rp 1.500.000",
    features: ["Single Page Design", "Responsive Layout", "WhatsApp Integration", "Basic SEO", "3-Day Delivery"]
  },
  {
    name: "Growth",
    price: "Rp 2.750.000",
    popular: true,
    features: ["Premium Editorial Design", "Interactive Components", "Copywriting Support", "Advanced SEO", "7-Day Delivery", "1 Month Maintenance"]
  },
  {
    name: "Ultimate",
    price: "Rp 3.750.000",
    features: ["Full Brand Experience", "Custom Animations", "Content Strategy", "Speed Optimization", "14-Day Delivery", "3 Months Maintenance"]
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md' : 'bg-white/70'
    } backdrop-blur-md border border-border rounded-2xl px-6 py-3.5`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-semibold tracking-tight text-text">SkinGlow</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#produk" className="hover:text-accent transition-colors">Produk</a>
          <a href="#hasil" className="hover:text-accent transition-colors">Hasil</a>
          <a href="#harga" className="hover:text-accent transition-colors">Harga</a>
          <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/6283167987800?text=Halo%20SkinGlow%2C%20saya%20mau%20konsultasi%20gratis"
            className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            Konsultasi Gratis <ArrowRight size={16} />
          </a>
          <button 
            className="md:hidden text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white/95 rounded-b-2xl mt-4 border-t border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="#produk" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Produk</a>
              <a href="#hasil" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Hasil</a>
              <a href="#harga" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Harga</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">FAQ</a>
              <a 
                href="https://wa.me/6283167987800?text=Halo%20SkinGlow%2C%20saya%20mau%20konsultasi%20gratis"
                className="flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl font-medium"
              >
                Konsultasi Gratis <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-[0.75rem] font-medium tracking-[0.18em] text-accent uppercase mb-4"
          >
            DERMATOLOGIST APPROVED · BPOM CERTIFIED
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-5xl md:text-7xl font-serif font-semibold italic leading-[1.1] mb-6"
          >
            Kulit Sehat,<br />Hidup Percaya Diri
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-lg text-text-muted max-w-md mb-10"
          >
            Formulasi dermatologis untuk kulit Asia. Natural, ringan, dan hasilnya terasa dalam 7 hari.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://wa.me/6283167987800?text=Halo%20SkinGlow%2C%20saya%20mau%20konsultasi%20gratis"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-accent/20 flex items-center gap-2"
            >
              Konsultasi Gratis <ArrowRight size={20} />
            </a>
            <a 
              href="#produk"
              className="border border-border hover:border-accent text-text px-8 py-4 rounded-xl font-medium transition-all flex items-center gap-2"
            >
              Lihat Produk ↓
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&auto=format&fit=crop&q=80" 
            alt="SkinGlow Model" 
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const TrustStrip = () => {
  const signals = [
    { icon: ShieldCheck, text: "BPOM Terdaftar" },
    { icon: Microscope, text: "Formulasi Dermatologis" },
    { icon: Leaf, text: "100% Vegan & Cruelty-Free" },
    { icon: Package, text: "Free Ongkir Pulau Jawa" },
    { icon: Users, text: "50.000+ Pembeli Puas" }
  ];

  return (
    <section className="bg-accent/5 py-8 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-8 items-center no-scrollbar">
          {signals.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <s.icon className="text-gold shrink-0" size={20} />
              <span className="text-sm font-medium text-text-muted">{s.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkinGoalFinder = () => {
  const [activeGoal, setActiveGoal] = useState<string | null>(null);

  const goals = [
    { id: 'hydra', icon: Droplets, title: 'Hidrasi', desc: 'Kulit kering & kusam, perlu moisture boost', product: PRODUCTS[0] },
    { id: 'bright', icon: Sparkles, title: 'Pencerah', desc: 'Flek, tone tidak merata, ingin lebih glowing', product: PRODUCTS[1] },
    { id: 'acne', icon: ShieldAlert, title: 'Anti-Acne', desc: 'Kulit berjerawat, pori tersumbat, mudah breakout', product: PRODUCTS[2] }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Apa yang paling kamu butuhkan sekarang?</h2>
          <p className="text-text-muted">Pilih satu, kami rekomendasikan yang paling cocok.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {goals.map((g) => (
            <motion.div
              key={g.id}
              whileHover={{ y: -4 }}
              onClick={() => setActiveGoal(g.id)}
              className={`p-8 rounded-2xl border transition-all cursor-pointer ${
                activeGoal === g.id 
                ? 'border-accent ring-2 ring-accent bg-accent/5 shadow-md' 
                : 'border-border hover:border-accent/50 bg-surface'
              }`}
            >
              <g.icon className="text-accent mb-6" size={32} />
              <h3 className="text-xl font-semibold mb-2">{g.title}</h3>
              <p className="text-sm text-text-muted">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeGoal && (
            <motion.div
              key={activeGoal}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-surface border border-border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 shadow-lg">
                <img 
                  src={goals.find(g => g.id === activeGoal)?.product.image} 
                  alt="Recommended Product" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[0.7rem] font-bold tracking-widest text-accent uppercase mb-2 block">REKOMENDASI UNTUKMU</span>
                <h4 className="text-2xl font-serif font-semibold mb-2">{goals.find(g => g.id === activeGoal)?.product.name}</h4>
                <p className="text-text-muted mb-6">{goals.find(g => g.id === activeGoal)?.product.benefit}</p>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <span className="text-2xl font-bold text-accent">{goals.find(g => g.id === activeGoal)?.product.price}</span>
                  <a 
                    href={`https://wa.me/6283167987800?text=Halo%20SkinGlow%2C%20saya%20mau%20beli%20${goals.find(g => g.id === activeGoal)?.product.name}`}
                    className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
                  >
                    Beli via WhatsApp <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProductSection = () => {
  return (
    <section id="produk" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Tiga Hasil, Satu Brand</h2>
          <p className="text-text-muted">Koleksi esensial untuk rutinitas harianmu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-bg border border-border"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={PRODUCTS[0].image} 
                alt={PRODUCTS[0].name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:p-10">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[0.7rem] font-bold tracking-widest rounded-full mb-4">{PRODUCTS[0].category}</span>
              <h3 className="text-3xl font-serif font-semibold mb-3">{PRODUCTS[0].name}</h3>
              <p className="text-text-muted mb-6">{PRODUCTS[0].benefit}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">{PRODUCTS[0].price}</span>
                <button className="text-accent font-medium hover:underline flex items-center gap-1">Lihat Detail <ArrowRight size={16} /></button>
              </div>
            </div>
          </motion.div>

          {/* Stacked Cards */}
          <div className="flex flex-col gap-8">
            {PRODUCTS.slice(1).map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-bg border border-border"
              >
                <div className="sm:w-2/5 aspect-[4/5] sm:aspect-auto overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[0.7rem] font-bold tracking-widest rounded-full mb-4 w-fit">{p.category}</span>
                  <h3 className="text-2xl font-serif font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-text-muted mb-6">{p.benefit}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold">{p.price}</span>
                    <button className="text-accent font-medium hover:underline flex items-center gap-1">Lihat Detail <ArrowRight size={16} /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="hasil" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Dalam 7 Hari, Mereka Merasakan Bedanya</h2>
          <p className="text-text-muted">Kisah nyata dari pengguna setia SkinGlow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
              </div>
              <p className="text-lg font-serif italic text-text mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="harga" className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Mulai dari yang Simpel, Tumbuh Sesuai Kebutuhan</h2>
          <p className="text-text-muted">Layanan pembuatan landing page profesional oleh Astmay.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING.map((tier, i) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-3xl bg-surface border transition-all ${
                tier.popular 
                ? 'border-accent border-2 shadow-xl shadow-accent/10 scale-[1.02] z-10' 
                : 'border-border'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-8 bg-accent text-white text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Paling Populer
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-medium">Rp</span>
                  <span className="text-4xl font-bold tracking-tight">{tier.price.split(' ')[1]}</span>
                </div>
              </div>
              <ul className="flex-1 space-y-4 mb-10">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-text-muted">
                    <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/6283167987800?text=Halo%2C%20saya%20tertarik%20paket%20${tier.name}%20Landing%20Page`}
                className={`w-full py-4 rounded-xl font-medium text-center transition-colors ${
                  tier.popular 
                  ? 'bg-accent hover:bg-accent-dark text-white' 
                  : 'bg-bg hover:bg-border text-text'
                }`}
              >
                Pilih Paket {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-16">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-border rounded-2xl overflow-hidden bg-surface">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-medium hover:bg-bg/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <ChevronDown 
                  size={20} 
                  className={`text-accent transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-muted border-t border-border/50 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="bg-dark py-20 md:py-32 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-5 md:px-10 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif italic text-white mb-8"
        >
          Mulai Perjalanan Glowing Kamu
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/70 max-w-xl mx-auto mb-12 text-lg"
        >
          Konsultasi gratis. Tidak ada tekanan. Cukup ceritakan kondisi kulitmu dan kami rekomendasikan yang terbaik.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="https://wa.me/6283167987800?text=Halo%20SkinGlow%2C%20saya%20mau%20mulai%20konsultasi"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-full text-lg font-medium transition-all shadow-xl shadow-accent/20"
          >
            Mulai Konsultasi via WhatsApp <ArrowRight size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="text-3xl font-serif font-semibold mb-4">SkinGlow</div>
            <p className="text-white/50 max-w-xs mb-8">Glowing Skin Starts Here. Formulasi dermatologis untuk kecantikan alami Anda.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Navigasi</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#produk" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#hasil" className="hover:text-white transition-colors">Hasil</a></li>
                <li><a href="#harga" className="hover:text-white transition-colors">Harga</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Bantuan</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-xs text-white/30 flex flex-col md:flex-row justify-between gap-4">
          <div>© 2025 SkinGlow. All rights reserved.</div>
          <div>Website oleh <a href="https://astmay.space" target="_blank" rel="noopener" className="text-white/50 hover:text-white transition-colors underline">Astrina Maysaroh — Jasa Pembuatan Website Profesional</a></div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent-dark">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <SkinGoalFinder />
        <ProductSection />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
