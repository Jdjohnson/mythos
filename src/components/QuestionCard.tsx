"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function QuestionCard({
  number,
  question,
  detail,
  stat,
  statLabel,
}: {
  number: number;
  question: string;
  detail: string;
  stat: string;
  statLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className={`
        w-full text-left p-6 md:p-8 rounded-[8px] transition-all duration-300 cursor-pointer
        border
        ${
          isOpen
            ? "bg-white border-brand-orange/20 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            : "bg-white/60 border-light-gray hover:border-brand-orange/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
        }
      `}
      layout
    >
      <div className="flex items-start gap-5">
        <span
          className="font-[family-name:var(--font-display)] text-[36px] leading-none shrink-0"
          style={{ color: isOpen ? "#FF3600" : "#D9D9D9" }}
        >
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-[family-name:var(--font-display)] text-[20px] md:text-[24px] leading-[1.2] text-text-primary">
            {question}
          </h3>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-[16px] leading-[1.6] text-text-secondary mt-4">
                  {detail}
                </p>
                <div className="mt-5 pt-5 border-t border-light-gray flex items-baseline gap-3">
                  <span
                    className="font-[family-name:var(--font-display)] text-[32px] leading-none"
                    style={{ color: "#FF3600" }}
                  >
                    {stat}
                  </span>
                  <span className="text-[14px] text-text-muted">
                    {statLabel}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="shrink-0 mt-2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            d="M5 8L10 13L15 8"
            stroke={isOpen ? "#FF3600" : "#808080"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>
    </motion.button>
  );
}
