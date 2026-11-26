"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Tile = {
  id: number;
  width: number;
  order: number;
};

export default function VerticalTilesPreloader() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return;
    }

    const calculateTiles = () => {
      const width = window.innerWidth;
      const count = Math.max(3, Math.ceil(width / 48));
      const tileWidth = width / count + 1;

      setTiles(
        Array.from({ length: count }, (_, index) => ({
          id: index,
          width: tileWidth,
          order: Math.abs(index - Math.floor((count - 1) / 2)),
        })),
      );
    };

    calculateTiles();
    window.addEventListener("resize", calculateTiles, { passive: true });

    const timeout = window.setTimeout(() => setVisible(false), 1900);

    return () => {
      window.removeEventListener("resize", calculateTiles);
      window.clearTimeout(timeout);
    };
  }, [reduceMotion]);

  if (!visible) return null;

  return (
    <div
      aria-label="Memuat Kyna Interior"
      role="status"
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-[#30382e]"
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
        <span className="font-display text-6xl tracking-[-.07em]">
          kyna<span className="text-[#c8cdbd]">.</span>
        </span>
        <span className="mt-3 text-[9px] tracking-[.28em] text-white/65">
          INTERIOR & KONSTRUKSI
        </span>
      </div>

      <div className="absolute inset-0 flex">
        {tiles.map((tile) => (
          <motion.div
            key={tile.id}
            className="absolute top-0 h-full bg-[#252b23]"
            style={{
              width: tile.width,
              left: `${(tile.id * 100) / tiles.length}%`,
            }}
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 0.58,
              delay: 0.38 + tile.order * 0.035,
              ease: [0.45, 0, 0.55, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
}
