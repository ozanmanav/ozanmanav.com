"use client";
import { TextEffect } from "@/components/ui/text-effect";

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="font-medium text-black dark:text-white">Ozan Manav</p>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Lead Frontend Architect
        </TextEffect>
      </div>
    </header>
  );
}
