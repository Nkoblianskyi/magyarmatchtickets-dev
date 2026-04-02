import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, BarChart2, ShieldCheck, Zap, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"
import EventCard from "@/components/event-card"
import { getFeaturedEvents, EVENTS, PARTNERS } from "@/lib/events-data"

const CATEGORIES = [
  { label: "Labdarúgás", count: EVENTS.filter(e => e.category === "Labdarúgás").length },
  { label: "Motorsport",count: EVENTS.filter(e => e.category === "Motorsport").length },
  { label: "Tenisz", count: EVENTS.filter(e => e.category === "Tenisz").length },
  { label: "Kerékpár", count: EVENTS.filter(e => e.category === "Kerékpár").length },
  { label: "Boksz", count: EVENTS.filter(e => e.category === "Boksz").length },
  { label: "MMA", count: EVENTS.filter(e => e.category === "MMA").length },
]

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Search,
    title: "Keresés",
    desc: "Böngésszen sportesemények között, szűrjön kategória, dátum vagy helyszín szerint.",
  },
  {
    step: "02",
    icon: BarChart2,
    title: "Összehasonlítás",
    desc: "Lássa egyszerre az összes partnernél elérhető jegyárat – átláthatóan, egy helyen.",
  },
  {
    step: "03",
    icon: ArrowRight,
    title: "Átirányítás",
    desc: "A legjobb ár megtalálása után kattintson a partnerlinkre – a vásárlás ott zajlik.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Átláthatóság",
    desc: "Nem gyűjtünk fizetési adatokat. Másodlagos piaci platform vagyunk – az árak meghaladhatják a névértéket.",
  },
]

export default function HomePage() {
  const featured = getFeaturedEvents()
  const recentEvents = EVENTS.slice(0, 6)

  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden grid-lines">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/events/ucl-final.jpg"
              alt="Sportesemény háttér"
              fill
              priority
              loading="eager"
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>

          {/* Google Ads compliant disclaimer – MUST be in top 20% of hero */}
          <DisclaimerBanner variant="hero" className="mt-0" />

          {/* Hero content */}
          <div className="flex-1 flex items-center items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <div className="max-w-3xl">

                <h1 className="text-right font-condensed font-900 text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight text-balance mb-6">
                  <span className="text-foreground">Találja meg a</span>{" "}
                  <span className="text-primary neon-glow">legjobb árat</span>{" "}
                  <span className="text-foreground">kedvenc sporteseményére</span>
                </h1>

                <p className="text-right text-lg text-muted-foreground leading-relaxed mb-3 max-w-2xl">
                  Összehasonlítjuk a viszonteladók kínálatát – F1-től a focidöntőig – hogy Ön megtalálja a
                  legkedvezőbb árat. Nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat.
                </p>
                <p className="text-sm text-accent text-right  font-medium mb-8">
                  Ez egy másodlagos piaci platform. A jegyárak meghaladhatják a névértéket.
                </p>

                <div className="flex flex-col  sm:flex-row gap-4">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-condensed font-700 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors neon-box"
                  >
                    Összes esemény
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-condensed font-700 uppercase tracking-widest text-sm hover:border-primary/50 hover:bg-secondary transition-colors"
                  >
                    Hogyan működik?
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-condensed font-900 text-3xl text-primary neon-glow">{EVENTS.length}+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-condensed">Esemény</p>
              </div>
              <div>
                <p className="font-condensed font-900 text-3xl text-primary neon-glow">{PARTNERS.length}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-condensed">Partner</p>
              </div>
              <div>
                <p className="font-condensed font-900 text-3xl text-primary neon-glow">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-condensed">Átlátható</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className="py-24 border-b border-border/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* heading */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <div>
                <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-3">
                  Átlátható folyamat
                </p>
                <h2 className="font-condensed font-900 text-6xl md:text-8xl uppercase leading-none text-balance">
                  Hogyan<br />
                  <span className="text-primary neon-glow">Működik?</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-base max-w-xs leading-relaxed md:text-right">
                4 lépés, semmi rejtett folyamat. Csak ár-összehasonlítás – Ön dönt, hol vásárol.
              </p>
            </div>

            {/* steps */}
            <div className="flex flex-col gap-0">
              {HOW_IT_WORKS.map((item, idx) => {
                const Icon = item.icon
                const isEven = idx % 2 === 1
                return (
                  <div
                    key={item.step}
                    className={`group relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-stretch border-b border-border/40 last:border-b-0`}
                  >
                    {/* giant step number — background */}
                    <div
                      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isEven ? "left-8" : "right-8"} pointer-events-none select-none z-0`}
                    >
                      <span className="font-condensed font-900 text-[180px] leading-none text-border/10 group-hover:text-primary/8 transition-colors duration-500">
                        {item.step}
                      </span>
                    </div>

                    {/* icon panel */}
                    <div className={`relative z-10 flex items-center justify-center w-full md:w-64 shrink-0 py-10 md:py-16 ${isEven ? "md:pl-0 md:pr-12" : "md:pl-0 md:pr-0"} bg-card/40 border-r border-border/30 group-hover:bg-primary/5 transition-colors duration-300`}>
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center group-hover:border-primary/70 group-hover:bg-primary/20 transition-all duration-300">
                          <Icon size={28} className="text-primary" />
                        </div>
                        <span className="font-condensed font-800 text-4xl text-primary/30 group-hover:text-primary/60 transition-colors duration-300 leading-none">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* content panel */}
                    <div className={`relative z-10 flex flex-col justify-center flex-1 px-8 md:px-16 py-10 md:py-16 gap-3`}>
                      {/* neon accent bar */}
                      <div className="w-10 h-0.5 bg-primary mb-1 group-hover:w-20 transition-all duration-500" />
                      <h3 className="font-condensed font-900 text-4xl md:text-5xl uppercase tracking-tight leading-none text-balance">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>

                    {/* connector arrow — right edge */}
                    {idx < HOW_IT_WORKS.length - 1 && (
                      <div className="hidden md:flex absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-background border border-primary/40 items-center justify-center">
                        <ArrowRight size={14} className="text-primary rotate-90" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* ── FEATURED EVENTS ──────────────────────────────────────── */}
        <section className="py-20 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">
                  Kiemelt események
                </p>
                <h2 className="font-condensed font-900 text-4xl md:text-5xl uppercase text-balance">
                  Szezon csúcseseményei
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-condensed font-700 uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
              >
                Mind <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ───────────────────────────────────────────── */}
        <section className="py-20 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">
                Sportágak
              </p>
              <h2 className="font-condensed font-900 text-4xl md:text-5xl uppercase text-balance">
                Kategóriák szerint
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.label}
                  href={`/events?category=${encodeURIComponent(cat.label)}`}
                  className="group flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all text-center"
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="font-condensed font-700 text-sm uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                    {cat.label}
                  </span>
                  <span className="text-xs text-muted-foreground font-condensed">{cat.count} esemény</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALL EVENTS GRID ──────────────────────────────────────── */}
        {/* <section className="py-20 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">
                  Legközelebbi események
                </p>
                <h2 className="font-condensed font-900 text-4xl md:text-5xl uppercase text-balance">
                  Hamarosan
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-condensed font-700 uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
              >
                Mind <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:border-primary/40 text-foreground font-condensed font-700 uppercase tracking-wide text-sm transition-all"
              >
                Összes {EVENTS.length} esemény megtekintése
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section> */}

        {/* ── PARTNERS STRIP ───────────────────────────────────────── */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-condensed font-700 text-xs uppercase tracking-widest text-muted-foreground text-center mb-8">
              Partnereink – másodlagos piaci viszonteladók
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {PARTNERS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-secondary transition-all font-condensed font-700 text-sm uppercase tracking-wide text-muted-foreground hover:text-primary"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-condensed font-900 text-4xl md:text-6xl uppercase text-balance mb-4">
              Ne fizessen{" "}
              <span className="text-primary neon-glow">többet</span>{" "}
              mint szükséges
            </h2>
            <p className="text-muted-foreground text-lg mb-2 max-w-xl mx-auto leading-relaxed">
              Hasonlítsa össze az összes partnert egyszerre, és találja meg a legjobb ajánlatot sportrendezvényére.
            </p>
            <p className="text-sm text-accent font-medium mb-8">
              Figyelem: Az árak meghaladhatják a névértéket – ez másodlagos piaci platform.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-condensed font-800 uppercase tracking-widest hover:bg-primary/90 transition-colors neon-box text-base"
            >
              Események böngészése
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
