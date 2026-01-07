'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Star, Check, Dumbbell, Clock } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const gymData = {
  name: "Speedy's Fitness Master Gym",
  rating: 4.7,
  reviewCount: 7,
  location: "33 Southern Main Rd, Chase Village",
  phone: "(868) 323-1239",
  phoneRaw: "+18683231239",
  hours: "Open • Closes 9 pm",
  services: ["Cardio", "Strength Training", "Personal Training", "Group Classes"],
};

const pricingTiers = [
  {
    name: "Basic Membership",
    price: "$300",
    period: "/month",
    features: ["Access to both floors", "Cardio & Strength", "Locker Room Access"],
    recommended: false,
  },
  {
    name: "Student / Service",
    price: "$250",
    period: "/month",
    features: ["60+ Seniors", "Service Members", "18 & Under", "Groups of 3+"],
    recommended: true,
  },
  {
    name: "Session",
    price: "$40",
    period: "/sesh",
    features: ["Valid for 1 training session", "Full Gym Access", "No Commitment"],
    recommended: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-speedy-black text-gray-100 overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gym-bg.jpg"
            alt="Speedy's Gym Floor"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-speedy-black via-speedy-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white mb-6 uppercase drop-shadow-[0_0_15px_rgba(0,174,239,0.5)]">
              Unleash Your <span className="text-electric-blue">Master</span> Self
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 font-light italic max-w-2xl mx-auto"
          >
            The #1 High-Performance Training Facility in Chase Village.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#membership"
              className="px-8 py-4 bg-crimson hover:bg-red-700 text-white font-bold text-lg uppercase tracking-wider skew-x-[-10deg] transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,20,60,0.6)]"
            >
              <span className="block skew-x-[10deg]">Join Now</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white font-bold text-lg uppercase tracking-wider skew-x-[-10deg] transition-all"
            >
              <span className="block skew-x-[10deg]">Book Tour</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill={i < 4 ? "currentColor" : i === 4 && 0.7 > 0.5 ? "currentColor" : "none"} className={i === 4 ? "opacity-90" : ""} />
              ))}
            </div>
            <span className="text-xl font-bold text-white">{gymData.rating} Stars <span className="text-gray-400 text-base font-normal">({gymData.reviewCount} Reviews)</span></span>
          </div>
          <div className="hidden md:block h-8 w-px bg-zinc-700" />
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="text-electric-blue" />
            <span>Chase Village's Premier Gym</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-zinc-700" />
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="text-crimson" />
            <span>{gymData.hours}</span>
          </div>
        </div>
      </section>

      {/* Services Grid (Quick Look) */}
      <section className="py-20 px-4 bg-speedy-black relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gymData.services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="group relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-8 hover:border-electric-blue transition-colors duration-300"
              >
                <Dumbbell className="w-10 h-10 text-electric-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white uppercase italic">{service}</h3>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-electric-blue group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership" className="py-24 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase mb-4">
              Choose Your <span className="text-crimson">Power</span>
            </h2>
            <p className="text-gray-400">Flexible plans for every level of athlete.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col bg-zinc-900 border ${tier.recommended ? 'border-electric-blue scale-105 z-10 shadow-[0_0_30px_rgba(0,174,239,0.15)]' : 'border-zinc-800'
                  } p-8 rounded-none`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 right-0 bg-electric-blue text-black text-xs font-bold px-3 py-1 uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white uppercase italic mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-gray-400 ml-1">{tier.period}</span>
                </div>
                <ul className="flex-1 space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 font-bold uppercase tracking-wider transition-all ${tier.recommended
                    ? 'bg-electric-blue text-black hover:bg-white'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                >
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 px-4 bg-speedy-black relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-8">
              Start Your <br /> <span className="text-electric-blue">Journey</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-none">
                  <MapPin className="w-8 h-8 text-crimson" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase mb-1">Visit Us</h4>
                  <p className="text-gray-400">{gymData.location}</p>
                  <a href="https://maps.app.goo.gl/oeBk4r4P7YWdyAoU7" target="_blank" rel="noopener noreferrer" className="text-electric-blue text-sm uppercase mt-2 inline-block hover:underline">
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-none">
                  <Phone className="w-8 h-8 text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase mb-1">Call Us</h4>
                  <p className="text-gray-400 block mb-2">{gymData.phone}</p>
                  <a
                    href={`tel:${gymData.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full bg-zinc-900 border border-zinc-800 p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.453476039269!2d-61.4137486!3d10.471994299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c35f9be7c73c61f%3A0x5927d269671e4674!2sSpeedy&#39;s%20Fitness%20Master%20Gym!5e0!3m2!1sen!2stt!4v1767824112090!5m2!1sen!2stt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-zinc-900 text-center">
        <p className="text-zinc-600 uppercase text-sm tracking-widest">
          © {new Date().getFullYear()} Speedy's Fitness Master Gym. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
