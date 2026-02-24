"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LuxBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep base (richer than flat black) */}
      <div className="absolute inset-0 bg-[#06070A]" />

      {/* Central cinematic glow (anchors hero) */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { opacity: [0.22, 0.38, 0.22] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        style={{
          background:
            "radial-gradient(900px 520px at 50% 22%, rgba(201,162,77,0.18), transparent 60%)",
        }}
      />

      {/* Upper vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(255,255,255,0.10),transparent_65%)]" />

      {/* Lower cinematic falloff */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_115%,rgba(0,0,0,0.55),rgba(0,0,0,0.95)_70%)]" />

      {/* Diagonal luxury sweep (animated) */}
      <motion.div
        className="absolute -inset-[40%] rotate-[-12deg] blur-3xl opacity-60"
        animate={reduce ? undefined : { x: [-40, 40, -40] }}
        transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
        style={{
          background:
            "linear-gradient(90deg,transparent 0%, rgba(201,162,77,0.12) 35%, rgba(255,255,255,0.07) 50%, rgba(201,162,77,0.10) 65%, transparent 100%)",
        }}
      />

      {/* Aurora gold blob */}
      <motion.div
        className="absolute -left-[18%] top-[6%] h-[760px] w-[760px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,77,0.22), transparent 62%)",
        }}
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Cool white counter-balance */}
      <motion.div
        className="absolute -right-[22%] top-[10%] h-[820px] w-[820px] rounded-full blur-3xl opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10), transparent 62%)",
        }}
        animate={reduce ? undefined : { x: [0, -36, 0], y: [0, 24, 0] }}
        transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Lower gold atmosphere */}
      <motion.div
        className="absolute left-[16%] bottom-[-36%] h-[920px] w-[920px] rounded-full blur-3xl opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,77,0.16), transparent 65%)",
        }}
        animate={reduce ? undefined : { x: [0, 28, 0], y: [0, -20, 0] }}
        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Film grain (cinema texture) */}
      <motion.div
        className="absolute inset-0 opacity-[0.075] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.38'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
        animate={reduce ? undefined : { x: [0, 2, -2, 0], y: [0, -2, 2, 0] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Final polish pass */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,transparent_24%,transparent_78%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}