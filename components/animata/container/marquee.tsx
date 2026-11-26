import type { CSSProperties, ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  duration?: string;
};

export default function Marquee({ children, className = "", duration = "36s" }: MarqueeProps) {
  return (
    <div
      className={`kyna-marquee group/marquee relative flex w-full overflow-hidden ${className}`}
      style={{ "--marquee-duration": duration } as CSSProperties}
      aria-label="Ulasan pelanggan berjalan"
    >
      <div className="kyna-marquee-track flex w-max shrink-0 items-stretch gap-5 pr-5">
        {children}
      </div>
      <div className="kyna-marquee-track flex w-max shrink-0 items-stretch gap-5 pr-5" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
