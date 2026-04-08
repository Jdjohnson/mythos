"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Apple",
  "Microsoft",
  "Google",
  "Amazon",
  "Nvidia",
  "Meta",
  "Cisco",
  "CrowdStrike",
  "Palo Alto",
  "Cloudflare",
  "Elastic",
  "Mandiant",
];

export default function GlasswingNetwork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full max-w-[900px] mx-auto">
      {/* Central stat */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-teal/70 mb-3">
            Project Glasswing
          </p>
          <p className="font-[family-name:var(--font-display)] text-[56px] md:text-[72px] leading-none text-teal">
            $104M
          </p>
          <p className="text-[16px] text-white/60 mt-3">
            committed to collective AI defense
          </p>
        </motion.div>
      </div>

      {/* Two stat columns */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-[family-name:var(--font-display)] text-[40px] leading-none text-white">
            12
          </p>
          <p className="text-[14px] text-white/50 mt-2">launch partners</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-[family-name:var(--font-display)] text-[40px] leading-none text-white">
            ~40
          </p>
          <p className="text-[14px] text-white/50 mt-2">
            infrastructure organizations
          </p>
        </motion.div>
      </div>

      {/* Partner tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {partners.map((partner, i) => (
          <motion.span
            key={partner}
            className="px-4 py-2 rounded-full border border-white/10 text-[13px] text-white/60 bg-white/[0.03]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
              delay: 0.5 + i * 0.04,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            {partner}
          </motion.span>
        ))}
        <motion.span
          className="px-4 py-2 rounded-full border border-white/10 text-[13px] text-white/40 bg-white/[0.03]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 1 }}
        >
          +40 more
        </motion.span>
      </motion.div>

      {/* Requirement callout */}
      <motion.div
        className="mt-10 pt-8 border-t border-white/10 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-[15px] text-white/50 italic">
          Requirement for access: share vulnerability findings with the broader
          industry.
        </p>
      </motion.div>
    </div>
  );
}
