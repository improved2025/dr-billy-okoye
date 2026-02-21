"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  focal?: string; // object-position value
};

const slides: Slide[] = [
  { src: "/images/hero1.jpeg", alt: "Dr. Billy Okoye portrait", focal: "50% 12%" },
  { src: "/images/hero2.jpeg", alt: "Dr. Billy Okoye portrait close", focal: "50% 18%" },
  { src: "/images/hero3.jpg", alt: "Dr. Billy Okoye in session", focal: "50% 22%" },
  { src: "/images/hero4.jpg", alt: "Dr. Billy Okoye in session", focal: "50% 22%" },
];

export default function HeroRotator() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((v) => (v + 1) % slides.length);
    }, 9500);
    return () => clearInterval(t);
  }, []);

  const current = slides[index];

  const drift = useMemo(() => {
    if (reduceMotion) return { scale: 1.03, x: 0, y: 0 };
    const choices = [
      { scale: 1.12, x: -18, y: -10 },
      { scale: 1.12, x: 18, y: -10 },
      { scale: 1.12, x: -12, y: 12 },
      { scale: 1.12, x: 12, y: 12 },
    ];
    return choices[index % choices.length];
  }, [index, reduceMotion]);

  return (
    <section className="relative w-full overflow-hidden min-h-[120vh]">
      {/* Rotating background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06, x: 0, y: 0 }}
            animate={drift}
            transition={{ duration: reduceMotion ? 0 : 10.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority={index === 0}
              className="object-cover"
              style={{ objectPosition: current.focal ?? "50% 50%" }}
            />
          </motion.div>

          {/* Luxury overlays */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content pinned to top */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-14 lg:px-20 mt-[25vh]">
          {/* Top strapline */}
          <p className="uppercase tracking-[0.34em] text-white/70 text-[10px] md:text-xs">
            Real Estate · Renewable Energy · Governance
          </p>

          {/* Name + designation, aligned and intentional */}
          <div className="mt-6 flex items-end gap-4 flex-wrap">
            <h1 className="font-serif tracking-wide text-white leading-[0.95] text-4xl md:text-6xl lg:text-7xl">
              DR. BILLY OKOYE
            </h1>

            <span className="mb-[6px] md:mb-[10px] uppercase tracking-[0.22em] text-[#C9A24D] text-sm md:text-base lg:text-lg">
              – GRI
            </span>
          </div>

          <p className="mt-4 text-white/70 italic text-base md:text-lg">
            I build what lasts.
          </p>

          <div className="mt-9">
            <button className="border border-[#C9A24D]/80 px-10 py-4 uppercase tracking-[0.26em] text-xs text-[#C9A24D] hover:bg-[#C9A24D]/10 transition">
              Request Private Consultation
            </button>
          </div>
        </div>

        {/* Scroll cue, stays lower */}
        
      </div>
    </section>
  );
}