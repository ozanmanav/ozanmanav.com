"use client";
import { WORK_EXPERIENCE } from "@/app/data";
import { TRANSITION_SECTION, VARIANTS_SECTION } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import WorkExperienceAccordionItem from "./work-experience-accordion-item";

export function WorkExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-7 text-lg font-medium text-blue-700 dark:text-blue-300 border border-blue-700 dark:border-blue-300 px-4 py-2 rounded-lg inline-block">
        Work Experience
      </h3>
      <div className="flex flex-col space-y-2">
        {WORK_EXPERIENCE.map((job) => (
          <WorkExperienceAccordionItem
            key={job.id}
            job={job}
            isOpen={openId === job.id}
            onToggle={() => toggle(job.id)}
          />
        ))}
      </div>
    </motion.section>
  );
}
