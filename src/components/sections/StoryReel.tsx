"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Slide =
  | {
      type: "image";
      src: string;
      alt: string;
      label?: string;
      objectPosition?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      label?: string;
      objectPosition?: string;
    };

const slides: Slide[] = [
  {
    type: "image",
    src: "/images/story1.jpg",
    alt: "Story portrait",
    label: "Governance",
    objectPosition: "50% 12%",
  },
  {
    type: "video",
    src: "/videos/story1.mp4",
    poster: "/images/story2.jpg",
    label: "Commissioner's Swearing in",
    objectPosition: "50% 18%",
  },
  {
    type: "image",
    src: "/images/story2.jpg",
    alt: "Role Modelling and Mentorship",
    label: "Role Modelling and Mentorship",
    objectPosition: "50% 18%",
  },
  {
    type: "video",
    src: "/videos/story2.mp4",
    poster: "/images/story3.jpg",
    label: "Community Investment",
    objectPosition: "50% 20%",
  },
  {
    type: "image",
    src: "/images/story3.jpg",
    alt: "Institutional Leadership",
    label: "Institutional Leadership",
    objectPosition: "50% 18%",
  },
  {
    type: "image",
    src: "/images/story4.jpg",
    alt: "Public Service",
    label: "Public Service",
    objectPosition: "50% 22%",
  },
];

function durationMs(s: Slide) {
  return s.type === "video" ? 12000 : 9000;
}

export default function StoryReel() {
  const reduceMotion = useReducedMotion();
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);

  const slide = slides[i];
  const dur = durationMs(slide);

  useEffect(() => {
    const t = setTimeout(() => {
      setI((v) => (v + 1) % slides.length);
      setTick((v) => v + 1);
    }, dur);

    return () => clearTimeout(t);
  }, [i, tick, dur]);

  const pan = useMemo(() => {
    if (reduceMotion) return { scale: 1.02, x: 0, y: 0 };
    return { scale: [1.06, 1.14], x: [-10, 10], y: [-5, 5] };
  }, [reduceMotion]);

  const stageObjectPos = slide.objectPosition ?? "50% 20%";

  return (
    <section className="px-6 md:px-14 lg:px-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 md:mb-14 max-w-4xl">
          <div className="text-[11px] tracking-[0.34em] uppercase text-white/55">
            The Story
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-[1.05]">
            Leadership with Consequence
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
            A curated sequence of governance, execution, and public trust across
            institutions, markets, and community.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          {/* fixed stage height, no jump */}
          <div
            className={[
              "relative",
              "h-[62vh] min-h-[520px] max-h-[720px]",
              "md:h-[620px] md:min-h-0 md:max-h-none",
              "lg:h-[720px]",
            ].join(" ")}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${i}-${tick}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* media layer */}
                <motion.div
                  className="absolute inset-0"
                  animate={pan as any}
                  transition={{
                    duration: reduceMotion ? 0 : 22,
                    ease: "linear",
                    repeat: reduceMotion ? 0 : Infinity,
                    repeatType: "mirror",
                  }}
                >
                  {slide.type === "image" ? (
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                      style={{ objectPosition: stageObjectPos }}
                      priority={i === 0}
                    />
                  ) : (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={slide.poster}
                      style={{ objectPosition: stageObjectPos }}
                    >
                      <source src={slide.src} type="video/mp4" />
                    </video>
                  )}
                </motion.div>

                {/* ✅ UNIFORM, FULL-FRAME OVERLAYS (match HeroRotator) */}
                <div className="absolute inset-0 bg-black/28" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/18 to-transparent" />
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(900px_520px_at_20%_18%,rgba(201,162,77,0.12),transparent_60%)]" />

                {/* label: fixed premium dock, always same position */}
                {slide.label ? (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md px-6 py-5">
                      <div className="text-[11px] tracking-[0.34em] uppercase text-white/75">
                        {slide.label}
                      </div>
                      <div className="mt-3 h-px w-14 bg-[#C9A24D]/85" />
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>

            {/* progress */}
            <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-white/10">
              <motion.div
                key={`p-${i}-${tick}`}
                className="h-full bg-[#C9A24D]/80"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: dur / 1000, ease: "linear" }}
              />
            </div>
          </div>

          {/* controls */}
          <div className="flex items-center justify-between px-7 py-5">
            <div className="text-[11px] uppercase tracking-[0.30em] text-white/45">
              Selected moments
            </div>

            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setI(idx);
                    setTick((v) => v + 1);
                  }}
                  className={[
                    "h-1.5 rounded-full transition",
                    idx === i
                      ? "w-8 bg-[#C9A24D]/90"
                      : "w-3 bg-white/20 hover:bg-white/30",
                  ].join(" ")}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}