"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LuxBackground() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep base (not pure black) */}
      <div className="absolute inset-0 bg-[#07080B]" />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_0%,rgba(255,255,255,0.10),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_110%,rgba(0,0,0,0.55),rgba(0,0,0,0.95)_70%)]" />

      {/* Soft diagonal “light” */}
      <div className="absolute -inset-[40%] rotate-[-12deg] opacity-60 blur-3xl
        bg-[linear-gradient(90deg,transparent_0%,rgba(201,162,77,0.10)_35%,rgba(255,255,255,0.06)_50%,rgba(201,162,77,0.08)_65%,transparent_100%)]" />

      {/* Aurora blobs (slow, premium motion) */}
      <motion.div
        className="absolute -left-[18%] top-[8%] h-[720px] w-[720px] rounded-full blur-3xl opacity-70
          bg-[radial-gradient(circle,rgba(201,162,77,0.18),transparent_62%)]"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 18, 0] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        className="absolute -right-[22%] top-[12%] h-[780px] w-[780px] rounded-full blur-3xl opacity-55
          bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_62%)]"
        animate={reduce ? undefined : { x: [0, -36, 0], y: [0, 22, 0] }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        className="absolute left-[18%] bottom-[-32%] h-[900px] w-[900px] rounded-full blur-3xl opacity-55
          bg-[radial-gradient(circle,rgba(201,162,77,0.12),transparent_65%)]"
        animate={reduce ? undefined : { x: [0, 26, 0], y: [0, -18, 0] }}
        transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Fine grain texture (subtle but visible) */}
      <div
        className="absolute inset-0 opacity-[0.085] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.38'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Very subtle top-to-bottom polish */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,transparent_22%,transparent_78%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}