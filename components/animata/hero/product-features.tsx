"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const features = [
  { title: "Ruang Keluarga", category: "RESIDENTIAL · INTERIOR", imageClass: "project-one", number: "01", description: "Ruang hangat untuk berkumpul dan beristirahat." },
  { title: "Hunian Modern", category: "RESIDENTIAL · DESIGN", imageClass: "project-two", number: "02", description: "Komposisi modern dengan fungsi yang terjaga." },
  { title: "Detail Ruang", category: "INTERIOR · STYLING", imageClass: "project-three", number: "03", description: "Detail material dan pencahayaan yang menyatu." },
  { title: "Area Hunian", category: "RESIDENTIAL · RENOVATION", imageClass: "project-four", number: "04", description: "Pembaruan ruang dengan karakter yang kuat." },
];

export default function ProductFeatures() {
  return (
    <div className="mt-12">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-8 pt-3 [scrollbar-width:thin] md:justify-center md:overflow-visible md:pb-12">
        {features.map((feature, index) => (
          <motion.article
            key={feature.number}
            initial={{ opacity: 0, y: 42, rotate: index % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -12, rotate: 0, scale: 1.045, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 180, damping: 18, delay: index * 0.08 }}
            className="group relative h-[330px] w-[min(76vw,270px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/15 bg-[#deded3] shadow-[0_18px_45px_rgba(37,41,35,.16)] sm:h-[370px] sm:w-[285px] md:-ml-5 md:first:ml-0"
          >
            <div className={`image-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110 ${feature.imageClass}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171914]/85 via-[#171914]/10 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
              <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] font-semibold tracking-[.13em] text-white backdrop-blur-md">{feature.category}</span>
              <span className="font-display text-sm text-white/75">{feature.number}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="mb-2 text-xs leading-5 text-white/70">{feature.description}</p>
              <div className="flex items-end justify-between gap-3">
                <h3 className="font-display text-3xl leading-tight">{feature.title}</h3>
                <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/10 transition group-hover:bg-white group-hover:text-[#252923]"><ArrowUpRight size={17} /></span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-[var(--line)] pt-4 text-[10px] tracking-[.13em] text-[var(--muted)]">
        <span>GESER UNTUK MELIHAT REFERENSI</span>
        <span>04 VISUAL REFERENCES</span>
      </div>
    </div>
  );
}
