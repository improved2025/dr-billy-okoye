"use client";

import Link from "next/link";
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
    const t = setInterval(() => setIndex((v) => (v + 1) % slides.length), 9500);
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
            transition={{
              duration: reduceMotion ? 0 : 10.5,
              ease: [0.22, 1, 0.36, 1],
            }}
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(900px_520px_at_20%_18%,rgba(201,162,77,0.12),transparent_60%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 min-h-[120vh]">
        <div className="px-6 md:px-14 lg:px-20">
          {/* 
            Mobile fix:
            - push content lower on small screens so it doesn't sit on the eyes/face
            - keep your desktop placement basically the same
          */}
          <div className="pt-[56vh] sm:pt-[52vh] md:pt-[44vh] lg:pt-[46vh] max-w-5xl">
            {/* Strapline constrained + slightly tighter for premium alignment */}
            <div className="max-w-[720px]">
              <p className="uppercase tracking-[0.22em] text-white/65 text-[9px] sm:text-[10px] md:text-xs">
                Real Estate · Renewable Energy · Governance · Mentor · Urban Developer
              </p>
            </div>

            <div className="mt-6 flex items-end gap-4 flex-wrap max-w-[900px]">
              <h1 className="font-serif tracking-wide text-white leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                DR. BILLY OKOYE
              </h1>

              <span className="mb-[6px] md:mb-[10px] inline-flex items-center">
                <span className="h-px w-8 md:w-10 bg-[#C9A24D]/70 mr-3" />
                <span className="uppercase tracking-[0.22em] text-[#C9A24D] text-base md:text-lg lg:text-xl">
                  GRI
                </span>
              </span>
            </div>

            <p className="mt-4 text-white/70 italic text-base md:text-lg">
              I build what lasts.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/consultation"
                className="border border-[#C9A24D]/80 px-10 py-4 rounded-full uppercase tracking-[0.26em] text-[11px] text-[#C9A24D] hover:bg-[#C9A24D]/10 transition"
              >
                Request Private Consultation
              </Link>

              <Link
                href="/about"
                className="border border-white/15 px-10 py-4 rounded-full uppercase tracking-[0.26em] text-[11px] text-white/80 hover:border-[#C9A24D]/35 hover:bg-white/[0.03] transition"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}