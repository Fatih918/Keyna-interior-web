"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Pilihan desain", href: "#projects" },
  { label: "Testimoni", href: "#reviews" },
  { label: "Kontak", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="relative z-[60] flex h-11 w-11 touch-manipulation items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Tutup menu navigasi"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/65 backdrop-blur-sm"
          />
          <nav
            id="mobile-navigation"
            aria-label="Navigasi mobile"
            className="absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col border-l border-white/10 bg-[#20241e] px-7 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] text-white shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-white/15 pb-8">
              <div>
                <p className="font-display text-3xl tracking-[-.06em]">kyna<span className="text-[#c8cdbd]">.</span></p>
                <p className="mt-1 text-[9px] tracking-[.22em] text-white/55">INTERIOR & KONSTRUKSI</p>
              </div>
              <button
                type="button"
                aria-label="Tutup navigasi"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1 py-8">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 touch-manipulation items-center justify-between border-b border-white/10 py-3 text-lg font-medium text-white/85 transition hover:text-[#d6d8c9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                >
                  <span><span className="mr-4 text-[10px] tracking-widest text-[#aeb69f]">0{index + 1}</span>{link.label}</span>
                  <ArrowUpRight size={17} className="text-white/45" />
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/6285289849344?text=Halo%20Kyna%20Interior%2C%20saya%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-14 touch-manipulation items-center justify-center gap-3 rounded-xl bg-[#c8cdbd] px-5 text-sm font-semibold text-[#252923] transition hover:bg-white"
            >
              Konsultasi gratis <ArrowUpRight size={16} />
            </a>
            <p className="mt-5 text-center text-[10px] tracking-[.14em] text-white/35">LAMPUNG, INDONESIA</p>
          </nav>
        </div>
      )}
    </div>
  );
}
