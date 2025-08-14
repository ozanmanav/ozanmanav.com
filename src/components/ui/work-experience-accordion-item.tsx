"use client";

import { WorkExperience } from "@/app/data";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./spotlight";

type AccordionItemProps = {
  job: WorkExperience;
  isOpen: boolean;
  onToggle: () => void;
};

export default function WorkExperienceAccordionItem({
  job,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef, job.description]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-300/30 dark:bg-zinc-600/30">
      <button
        onClick={onToggle}
        className="relative w-full text-left p-[1px] focus:outline-none"
      >
        {isOpen && (
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />
        )}
        <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 flex justify-between items-center">
          <div>
            <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            {job.start} - {job.end}
          </p>
        </div>
      </button>

      <motion.div
        animate={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-zinc-100 dark:bg-zinc-900 px-4"
      >
        <div ref={contentRef} className="py-4 space-y-1">
          {job.description.map((line, idx) => (
            <p key={idx} className="text-zinc-700 dark:text-zinc-300 text-sm">
              {line}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
