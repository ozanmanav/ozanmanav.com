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
      <h3
        className="mb-7 text-lg font-medium px-4 py-2 rounded-lg inline-block border transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-blue-900"
        style={{
          color: "#27468F",
          borderColor: "#27468F",
        }}
      >
        <span className="dark:text-[#8AA4FF] dark:border-[#8AA4FF]">
          Work Experience
        </span>
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
