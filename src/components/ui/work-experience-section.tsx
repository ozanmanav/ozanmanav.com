"use client";
import { WORK_EXPERIENCE } from "@/app/data";
import { TRANSITION_SECTION, VARIANTS_SECTION } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import WorkExperienceAccordionItem from "./work-experience-accordion-item";
import TitleTypography from "./header-typography";

export function WorkExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <TitleTypography text="Work Experience" />

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
