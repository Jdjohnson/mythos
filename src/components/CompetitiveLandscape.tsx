"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const labs = [
  {
    lab: "Google",
    model: "Gemini 3.1 Pro",
    status: "released",
    date: "Feb 2026",
    note: "Reasoning gains, general availability",
  },
  {
    lab: "xAI",
    model: "Grok 4.20",
    status: "released",
    date: "Feb 2026",
    note: "Multi-agent collaboration, public beta",
  },
  {
    lab: "Anthropic",
    model: "Opus 4.6",
    status: "released",
    date: "Feb 2026",
    note: "1M context, agent teams",
  },
  {
    lab: "OpenAI",
    model: "GPT-5.4",
    status: "released",
    date: "Mar 2026",
    note: "Agentic capabilities, general availability",
  },
  {
    lab: "Meta",
    model: "Llama 4 Maverick",
    status: "released",
    date: "Apr 2026",
    note: "Open weights, 128-expert MoE",
  },
  {
    lab: "Anthropic",
    model: "Mythos",
    status: "withheld",
    date: "Apr 2026",
    note: "Partner-only access via Project Glasswing",
  },
];

export default function CompetitiveLandscape() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full max-w-[900px] mx-auto">
      <p className="font-[family-name:var(--font-body)] text-[13px] uppercase tracking-[0.12em] text-text-muted mb-8">
        Frontier models — April 2026
      </p>

      <div className="space-y-[2px]">
        {labs.map((lab, i) => {
          const isWithheld = lab.status === "withheld";
          return (
            <motion.div
              key={`${lab.lab}-${lab.model}`}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className={`
                flex items-center justify-between p-5
                rounded-[4px] transition-colors duration-200
                ${
                  isWithheld
                    ? "bg-brand-orange/[0.07] border border-brand-orange/20"
                    : "bg-light-gray/40"
                }
              `}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`
                    font-[family-name:var(--font-display)] text-[20px]
                    ${isWithheld ? "text-brand-orange" : "text-text-primary"}
                  `}
                  >
                    {lab.lab}
                  </span>
                  <span className="text-[15px] text-text-secondary">
                    {lab.model}
                  </span>
                </div>
                <p className="text-[13px] text-text-muted mt-1">{lab.note}</p>
              </div>

              <div className="flex items-center gap-4 ml-4 shrink-0">
                <span className="text-[13px] text-text-muted">{lab.date}</span>
                <span
                  className={`
                  inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium uppercase tracking-[0.08em]
                  ${
                    isWithheld
                      ? "bg-brand-orange text-white"
                      : "bg-teal/10 text-teal"
                  }
                `}
                >
                  {lab.status}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        className="text-[15px] text-text-secondary mt-6 italic"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Six frontier models in ten weeks. The capability curve isn&apos;t
        slowing down.
      </motion.p>
    </div>
  );
}
