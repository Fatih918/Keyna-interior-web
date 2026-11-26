import SiblingFocusNav from "@/components/animata/container/sibling-focus-nav";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";

const phone = "6285289849344";
const whatsapp = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const services = [
  { number: "01", title: "Desain Interior", description: "Perencanaan ruang yang selaras dengan karakter, kebutuhan, dan cara kamu beraktivitas.", detail: "Rumah · Kantor · Toko" },
  { number: "02", title: "Bangun Rumah", description: "Dari perencanaan hingga pembangunan, dengan proses yang terukur dan komunikasi terbuka.", detail: "Bangun baru · Rumah tinggal" },
  { number: "03", title: "Renovasi", description: "Perbarui fungsi dan suasana ruang tanpa kehilangan hal-hal yang sudah kamu sukai.", detail: "Renovasi · Upgrade ruang" },
];

const projects = [
  { name: "Ruang Keluarga", type: "Residential · Interior", className: "project-one", size: "large" },
  { name: "Hunian Modern", type: "Residential · Design", className: "project-two", size: "small" },
  { name: "Detail Ruang", type: "Interior · Styling", className: "project-three", size: "small" },
  { name: "Area Hunian", type: "Residential · Renovation", className: "project-four", size: "large" },
];

const testimonials = [
  { quote: "Konsultasi renovasi dengan budget yang transparan. RAB dijelaskan dengan terbuka, pengerjaan sesuai deadline, dan timnya komunikatif.", author: "Berda", context: "Ulasan pelanggan · 6 bulan lalu" },
  { quote: "Profesional dan komunikatif, mendengarkan kebutuhan kami. Desain modern tetapi tetap fungsional, material berkualitas, dan pengerjaan tepat waktu.", author: "Sennia Hoerunnisa", context: "Ulasan pelanggan · 1 tahun lalu" },
  { quote: "Transformasi desainnya memuaskan, hasil terlihat mewah. Admin cepat merespons dan pekerjanya ramah.", author: "Widia Nurmalasari", context: "Ulasan pelanggan · 1 tahun lalu" },
];

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-5">{label}</p>
      <h2 className="font-display text-4xl leading-[1.12] tracking-[-.035em] sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="bg-[#272d25] px-5 py-2.5 text-center text-[10px] tracking-[.12em] text-white/80 sm:text-xs">
        WUJUDKAN RUANG IMPIANMU — <span className="font-semibold text-[#d9d8c8]">GRATIS SURVEY & KONSULTASI AWAL</span>
      </div>

      <header className="absolute z-20 w-full text-white">
        <div className="container-wide py-4">
          <div className="flex h-[72px] items-center justify-between rounded-2xl border border-white/10 bg-[#171914]/90 px-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:px-7">
            <a href="#home" aria-label="Kyna Interior home" className="leading-none">
              <span className="font-display text-[27px] tracking-[-.06em]">kyna<span className="text-[#c8cdbd]">.</span></span>
              <span className="mt-1 block text-[8px] tracking-[.24em] text-white/70">INTERIOR & KONSTRUKSI</span>
            </a>
            <SiblingFocusNav mode="opacity" aria-label="Navigasi utama" className="hidden text-xs text-white/85 md:flex">
              <SiblingFocusNav.Link className="transition-colors hover:text-white" href="#about">Tentang</SiblingFocusNav.Link>
              <SiblingFocusNav.Link className="transition-colors hover:text-white" href="#services">Layanan</SiblingFocusNav.Link>
              <SiblingFocusNav.Link className="transition-colors hover:text-white" href="#projects">Portofolio</SiblingFocusNav.Link>
              <SiblingFocusNav.Link className="transition-colors hover:text-white" href="#reviews">Testimoni</SiblingFocusNav.Link>
            </SiblingFocusNav>
            <a href={whatsapp("Halo Kyna Interior, saya ingin konsultasi proyek.")} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-[11px] tracking-wide transition hover:border-white hover:bg-white hover:text-[#252923] md:flex">
              Konsultasi gratis <ArrowUpRight size={14} />
            </a>
            <a href="#contact" className="rounded-lg p-2 transition hover:bg-white/10 md:hidden" aria-label="Ke kontak"><Menu size={22} /></a>
          </div>
        </div>
      </header>

      <section id="home" className="hero-image image-cover relative flex min-h-[690px] items-end text-white sm:min-h-[780px]">
        <div className="container-wide relative z-10 pb-20 pt-40 sm:pb-28">
          <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[.25em] text-white/80"><span className="h-px w-9 bg-[#c8cdbd]" /> INTERIOR DESIGN · BUILD · RENOVATION</p>
          <h1 className="font-display max-w-[850px] text-[clamp(3.5rem,8vw,7.5rem)] leading-[.96] tracking-[-.055em]">Ruang yang<br /><span className="italic text-[#d6d8c9]">bercerita.</span></h1>
          <div className="mt-9 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[390px] text-sm leading-7 text-white/75">Kami merancang, membangun, dan memperbarui ruang agar terasa lebih nyaman, fungsional, dan dekat dengan cara hidupmu.</p>
            <a href="#contact" className="group flex w-fit items-center gap-5 border-b border-white/60 pb-3 text-xs tracking-wide">Mulai konsultasi <span className="transition group-hover:translate-x-1"><ArrowUpRight size={16} /></span></a>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[9px] tracking-[.2em] text-white/70 lg:flex"><span className="h-px w-12 bg-white/50" /> LAMPUNG, INDONESIA</div>
      </section>

      <section className="border-b border-[var(--line)] bg-[#efeee8]">
        <div className="container-wide grid grid-cols-2 gap-8 py-9 sm:grid-cols-4 sm:gap-4">
          <div><p className="font-display text-3xl">5.0<span className="ml-1 text-base text-[var(--olive)]">★</span></p><p className="mt-1 text-[10px] tracking-wide text-[var(--muted)]">RATING GOOGLE</p></div>
          <div><p className="font-display text-3xl">13<span className="text-[var(--olive)]">+</span></p><p className="mt-1 text-[10px] tracking-wide text-[var(--muted)]">ULASAN PELANGGAN</p></div>
          <div><p className="font-display text-3xl">Gratis</p><p className="mt-1 text-[10px] tracking-wide text-[var(--muted)]">SURVEY AWAL</p></div>
          <div><p className="font-display text-3xl">Lampung</p><p className="mt-1 text-[10px] tracking-wide text-[var(--muted)]">AREA LAYANAN</p></div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="container-wide grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div className="relative min-h-[430px] overflow-hidden bg-[#deded3]">
            <div className="service-image image-cover absolute inset-0" />
            <div className="absolute bottom-5 left-5 bg-[var(--paper)] px-5 py-4">
              <p className="font-display text-2xl">Thoughtful spaces.</p>
              <p className="mt-1 text-[9px] tracking-[.16em] text-[var(--muted)]">DESIGNED AROUND YOU</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeading label="Tentang Kyna" title="Bukan sekadar ruang yang indah." />
            <p className="mt-7 text-sm leading-8 text-[var(--muted)]">Setiap ruang punya cerita dan kebutuhan yang berbeda. Kyna Interior & Konstruksi hadir untuk membantu menerjemahkan ide menjadi ruang nyata — melalui desain yang dipikirkan dengan matang dan pengerjaan yang memperhatikan detail.</p>
            <div className="mt-8 grid gap-4 border-t border-[var(--line)] pt-7 sm:grid-cols-2">
              <div className="flex gap-3"><CheckCircle2 className="mt-0.5 text-[var(--olive)]" size={18} /><div><p className="text-sm font-semibold">Komunikasi terbuka</p><p className="mt-1 text-xs leading-6 text-[var(--muted)]">Kebutuhan dan anggaran dibahas sejak awal.</p></div></div>
              <div className="flex gap-3"><CheckCircle2 className="mt-0.5 text-[var(--olive)]" size={18} /><div><p className="text-sm font-semibold">Fokus pada fungsi</p><p className="mt-1 text-xs leading-6 text-[var(--muted)]">Estetika yang tetap nyaman digunakan.</p></div></div>
            </div>
            <a href="#services" className="mt-9 flex w-fit items-center gap-4 border-b border-[var(--ink)] pb-2 text-xs font-semibold">Kenali layanan kami <ArrowDownRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-[#eae9e1]">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading label="Apa yang kami kerjakan" title="Dari ide hingga menjadi nyata." description="Satu partner untuk kebutuhan desain dan konstruksi, dengan proses yang disesuaikan pada kebutuhan proyekmu." />
            <a href={whatsapp("Halo Kyna, saya ingin bertanya tentang layanan.")} target="_blank" rel="noreferrer" className="flex w-fit items-center gap-3 pb-2 text-xs font-semibold">Diskusikan proyek <ArrowUpRight size={15} /></a>
          </div>
          <div className="mt-16 grid border-t border-[var(--line)] md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="group border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="flex items-center justify-between"><span className="text-[10px] tracking-[.2em] text-[var(--olive)]">{service.number} / 03</span><ArrowUpRight className="text-[var(--muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={18} /></div>
                <h3 className="font-display mt-12 text-3xl">{service.title}</h3>
                <p className="mt-4 min-h-[72px] text-sm leading-7 text-[var(--muted)]">{service.description}</p>
                <p className="mt-8 text-[10px] font-semibold tracking-[.12em] text-[var(--olive)]">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading label="Pilihan karya" title="Inspirasi untuk ruangmu." description="Setiap detail punya tujuan. Lihat beberapa referensi suasana ruang yang bisa menjadi titik awal idemu." />
            <span className="text-[10px] tracking-[.15em] text-[var(--muted)]">SELECTED SPACES · 2026</span>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.name} className={index % 2 === 0 ? "group" : "group md:mt-20"}>
                <div className={`image-cover relative aspect-[1.28] overflow-hidden bg-[#deded3] ${project.className}`}>
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--paper)] opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={17} /></span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div><h3 className="font-display text-2xl">{project.name}</h3><p className="mt-1 text-[10px] tracking-[.13em] text-[var(--muted)]">{project.type}</p></div>
                  <span className="pt-2 text-[10px] text-[var(--muted)]">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 border-t border-[var(--line)] pt-5 text-xs leading-6 text-[var(--muted)]">Foto di atas merupakan gambar referensi visual. Portofolio proyek aktual Kyna akan ditampilkan setelah dokumentasi proyek ditambahkan.</p>
        </div>
      </section>

      <section className="bg-[#30382e] py-20 text-white sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="eyebrow !text-[#c8cdbd]">Cara kami bekerja</p><h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">Jelas prosesnya.<br /><span className="italic text-[#c8cdbd]">Tenang hasilnya.</span></h2></div>
          <div className="grid gap-7 sm:grid-cols-2">
            {[["01","Dengarkan kebutuhan","Kami mulai dengan memahami ide, aktivitas, dan anggaran."],["02","Rencanakan bersama","Diskusi konsep, desain, ruang lingkup, dan estimasi biaya."],["03","Kerjakan dengan teliti","Pengerjaan dan komunikasi berjalan sesuai kesepakatan."],["04","Serah terima","Ruang siap digunakan dengan hasil yang diperiksa bersama."]].map(([number,title,description]) => (
              <div key={number} className="border-t border-white/20 pt-5"><span className="text-[10px] tracking-[.2em] text-[#c8cdbd]">{number}</span><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-2 text-xs leading-6 text-white/60">{description}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section-pad bg-[#efeee8]">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading label="Cerita pelanggan" title="Kepercayaan dibangun dari pengalaman." />
            <div className="flex items-center gap-3"><div className="flex gap-0.5 text-[#9a895d]">{Array.from({length:5}).map((_,i)=><Star key={i} size={15} fill="currentColor" />)}</div><span className="text-xs text-[var(--muted)]">5.0 / 5 · 13 ulasan Google</span></div>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.author} className="flex min-h-[270px] flex-col justify-between border border-[var(--line)] bg-[var(--paper)] p-7 sm:p-8">
                <div><span className="font-display text-5xl leading-none text-[var(--olive)]">“</span><p className="mt-3 text-sm leading-7 text-[#55594f]">{item.quote}</p></div>
                <div className="mt-8 border-t border-[var(--line)] pt-5"><p className="text-sm font-semibold">{item.author}</p><p className="mt-1 text-[10px] text-[var(--muted)]">{item.context}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-[10px] text-[var(--muted)]">Ringkasan ulasan pelanggan yang tersedia pada profil Google Kyna Interior & Konstruksi.</p>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="container-wide grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Mari mulai</p>
            <h2 className="font-display mt-5 max-w-xl text-5xl leading-[1.08] tracking-[-.04em] sm:text-6xl">Punya ruang yang ingin diwujudkan?</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--muted)]">Ceritakan rencanamu kepada kami. Mulai dari konsultasi awal dan survey lokasi tanpa biaya.</p>
            <a href={whatsapp("Halo Kyna Interior, saya ingin konsultasi dan mengajukan survey gratis. Boleh dibantu?")} target="_blank" rel="noreferrer" className="mt-9 flex w-fit items-center gap-4 bg-[#30382e] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#46513f]"> <MessageCircle size={16} /> Hubungi via WhatsApp <ArrowUpRight size={15} /></a>
          </div>
          <div className="bg-[#eae9e1] p-8 sm:p-10">
            <p className="eyebrow">Informasi kontak</p>
            <div className="mt-8 space-y-7">
              <div className="flex gap-4"><Phone className="mt-1 text-[var(--olive)]" size={18} /><div><p className="text-xs text-[var(--muted)]">Telepon / WhatsApp</p><a href="tel:+6285289849344" className="mt-1 block text-sm font-semibold">0852-8984-9344</a></div></div>
              <div className="flex gap-4"><MapPin className="mt-1 text-[var(--olive)]" size={18} /><div><p className="text-xs text-[var(--muted)]">Lokasi</p><p className="mt-1 text-sm font-semibold leading-6">Gg. Sejahtera 5, Pemanggilan, Kec. Natar, Kabupaten Lampung Selatan, Lampung 35362</p><a className="mt-2 inline-block text-xs underline underline-offset-4" href="https://www.google.com/maps/search/?api=1&query=Kyna+Interior+Konstruksi+Lampung" target="_blank" rel="noreferrer">Lihat di Google Maps <ArrowUpRight className="inline" size={12} /></a></div></div>
              <div className="flex gap-4"><Clock3 className="mt-1 text-[var(--olive)]" size={18} /><div><p className="text-xs text-[var(--muted)]">Jam operasional</p><p className="mt-1 text-sm font-semibold">Hubungi kami untuk jadwal konsultasi</p></div></div>
            </div>
            <div className="mt-9 border-t border-[var(--line)] pt-6"><a href="https://kynainterior.com" target="_blank" rel="noreferrer" className="flex items-center justify-between text-xs font-semibold">kynainterior.com <ArrowUpRight size={15} /></a></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#252923] py-9 text-white">
        <div className="container-wide flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div><span className="font-display text-3xl tracking-[-.06em]">kyna.</span><p className="mt-2 text-[9px] tracking-[.2em] text-white/50">INTERIOR & KONSTRUKSI · LAMPUNG</p></div>
          <div className="flex flex-col gap-3 text-xs text-white/65 sm:items-end"><a href={whatsapp("Halo Kyna Interior, saya ingin konsultasi.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">WhatsApp <ArrowUpRight size={13} /></a><p>© {new Date().getFullYear()} Kyna Interior & Konstruksi. All rights reserved.</p></div>
        </div>
      </footer>
    </main>
  );
}
