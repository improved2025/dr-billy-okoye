"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const pillars = [
  "Institutional Leadership",
  "Private Real Estate Portfolio",
  "Renewable Infrastructure",
  "Public Service Mandate",
  "Philanthropic Capital",
  "Urban Development",
] as const;

const contactPrefs = ["Text", "Email"] as const;

export default function ConsultationPage() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const subject = "Private Consultation Request – Dr. Billy Okoye";
  const mailTo = useMemo(() => {
    // this keeps it “surgical”: no backend required, no breaking builds.
    // user clicks "Prepare request", then can send via email with populated fields.
    return `mailto:Billy@Sold100.com?subject=${encodeURIComponent(subject)}`;
  }, []);

  return (
    <main className="text-white">
      <section className="px-6 md:px-14 lg:px-20 pt-24 md:pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.34em] text-white/55 text-[11px]">
            Private Consultation
          </p>

          <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            Request a conversation
          </h1>

          <p className="mt-6 text-white/65 text-lg max-w-2xl">
            Submit your details with a clear purpose. This is handled with discretion and professional standards.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 backdrop-blur-sm shadow-[0_50px_140px_rgba(0,0,0,0.60)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full Name" placeholder="Your name" />
              <Field label="Organization" placeholder="Company or institution" />
              <Field label="Email" placeholder="name@domain.com" />
              <Field label="Phone (for text)" placeholder="+1 (___) ___-____" />

              <SelectField label="Reason for consultation" options={pillars as unknown as string[]} />
              <SelectField label="Best way to communicate" options={contactPrefs as unknown as string[]} />
            </div>

            <div className="mt-5">
              <label className="block text-[11px] uppercase tracking-[0.34em] text-white/55">
                Brief message
              </label>
              <textarea
                className="mt-3 w-full min-h-[140px] rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white/85
                           outline-none focus:border-[#C9A24D]/45 focus:bg-black/30 transition"
                placeholder="Context, timeline, and what you want accomplished."
              />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setStatus("ready")}
                className="rounded-full border border-[#C9A24D]/75 px-10 py-4 uppercase tracking-[0.30em] text-[11px] text-[#C9A24D]
                           hover:bg-[#C9A24D]/10 transition"
              >
                Prepare request
              </button>

              <a
                href={mailTo}
                className={[
                  "rounded-full border px-10 py-4 uppercase tracking-[0.30em] text-[11px] transition",
                  status === "ready"
                    ? "border-white/15 text-white/80 hover:border-[#C9A24D]/35 hover:bg-white/[0.03]"
                    : "border-white/10 text-white/35 cursor-not-allowed pointer-events-none",
                ].join(" ")}
              >
                Email to Billy@Sold100.com
              </a>

              <Link
                href="/"
                className="rounded-full border border-white/10 px-10 py-4 uppercase tracking-[0.30em] text-[11px] text-white/55
                           hover:border-[#C9A24D]/35 hover:bg-white/[0.03] transition"
              >
                Return home
              </Link>
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mt-6 text-white/55 text-sm leading-relaxed">
              Prefer WhatsApp? Use{" "}
              <a
                className="text-[#C9A24D] hover:text-[#C9A24D]/80 transition"
                href="https://wa.me/12404625679"
                target="_blank"
                rel="noopener noreferrer"
              >
                +1 (240) 462-5679
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.34em] text-white/55">
        {label}
      </label>
      <input
        className="mt-3 w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white/85
                   outline-none focus:border-[#C9A24D]/45 focus:bg-black/30 transition"
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.34em] text-white/55">
        {label}
      </label>
      <select
        className="mt-3 w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-white/85
                   outline-none focus:border-[#C9A24D]/45 focus:bg-black/30 transition"
        defaultValue=""
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}