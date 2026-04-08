"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PatchRateGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full max-w-[900px] mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-text-muted mb-1">
            Mythos-discovered vulnerabilities
          </p>
          <p className="font-[family-name:var(--font-display)] text-[20px] text-text-primary">
            Patching status
          </p>
        </div>
        <div className="text-right">
          <motion.span
            className="font-[family-name:var(--font-display)] text-[48px] leading-none"
            style={{ color: "#FF3600" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {"<"}1%
          </motion.span>
          <p className="text-[14px] text-text-muted mt-1">fully patched</p>
        </div>
      </div>

      {/* The gauge */}
      <div className="relative h-[40px] bg-light-gray rounded-[4px] overflow-hidden">
        {/* Unpatched - fills almost everything */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-[4px]"
          style={{ backgroundColor: "#FF3600" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: "99.2%" } : {}}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />
        {/* Patched - tiny green sliver */}
        <motion.div
          className="absolute inset-y-0 right-0 rounded-r-[4px]"
          style={{ backgroundColor: "#0A7E6D" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: "0.8%" } : {}}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />
      </div>

      <div className="flex justify-between mt-3 text-[13px]">
        <span className="text-text-secondary flex items-center gap-2">
          <span
            className="inline-block w-[10px] h-[10px] rounded-[2px]"
            style={{ backgroundColor: "#FF3600" }}
          />
          Unpatched
        </span>
        <span className="text-text-secondary flex items-center gap-2">
          <span
            className="inline-block w-[10px] h-[10px] rounded-[2px]"
            style={{ backgroundColor: "#0A7E6D" }}
          />
          Patched
        </span>
      </div>
    </div>
  );
}
