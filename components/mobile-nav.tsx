"use client";

import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#projects" },
  { label: "Testimoni", href: "#reviews" },
  { label: "Kontak", href: "#contact" },
];

export default function MobileNav() {
  return (
    <nav aria-label="Navigasi utama mobile" className="flex w-full items-center gap-1 overflow-x-auto border-t border-white/15 px-4 py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="flex min-h-11 shrink-0 touch-manipulation items-center px-3 text-[11px] font-medium tracking-wide text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white">
          {link.label}
        </a>
      ))}
      <a href="https://wa.me/6285289849344?text=Halo%20Kyna%20Interior%2C%20saya%20ingin%20konsultasi%20proyek." target="_blank" rel="noreferrer" className="ml-auto flex min-h-10 shrink-0 touch-manipulation items-center gap-1.5 rounded-md bg-[#30382e] px-3 text-[10px] font-semibold text-white transition-colors hover:bg-[#46513f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
        Konsultasi <ArrowUpRight size={13} />
      </a>
    </nav>
  );
}
