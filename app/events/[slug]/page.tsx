import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, MapPin, ExternalLink, ArrowLeft, TrendingUp, CheckCircle, XCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"
import { getEventBySlug, EVENTS, formatPrice } from "@/lib/events-data"

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return {}
  return {
    title: `${event.title} – Jegyár-összehasonlítás | MagyarMatchTickets`,
    description: `Hasonlítsa össze a(z) ${event.title} jegyárait ${event.partners.length} viszonteladónál. Másodlagos piac – az árak meghaladhatják a névértéket.`,
  }
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  const sortedPartners = [...event.partners].sort((a, b) => a.minPrice - b.minPrice)
  const cheapestAvailable = sortedPartners.find((p) => p.available)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Full-width Google Ads disclaimer – MUST be top 20% */}
        <DisclaimerBanner variant="hero" />

        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-condensed font-700 uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft size={13} />
                Vissza az eseményekhez
              </Link>
              <div className="flex items-start gap-3 flex-wrap">
                <span className="px-3 py-1 rounded text-xs font-condensed font-700 uppercase tracking-widest bg-primary/20 border border-primary/40 text-primary">
                  {event.category}
                </span>
              </div>
              <h1 className="font-condensed font-900 text-4xl md:text-6xl uppercase leading-none text-balance mt-2">
                {event.title}
              </h1>
              <p className="text-muted-foreground text-lg mt-2">{event.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left – main content */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Event info */}
              <div className="flex flex-wrap gap-5 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span className="font-medium text-foreground">{event.dateDisplay}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span className="font-medium text-foreground">{event.venue}, {event.city}, {event.country}</span>
                </div>
              </div>

              <p className="text-foreground/85 leading-relaxed text-base">{event.description}</p>

              {/* Section disclaimer */}
              <DisclaimerBanner variant="section" />

              {/* Price comparison table */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp size={18} className="text-primary" />
                  <h2 className="font-condensed font-800 text-2xl uppercase tracking-wide">
                    Ár-összehasonlítás
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  {sortedPartners.map((partner, i) => {
                    const isCheapest = cheapestAvailable?.name === partner.name && partner.available
                    return (
                      <div
                        key={partner.name}
                        className={`rounded-xl border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                          isCheapest
                            ? "border-primary/50 bg-primary/5 neon-box"
                            : "border-border bg-card hover:border-border/80"
                        } ${!partner.available ? "opacity-50" : ""}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-condensed font-900 text-2xl text-border/50 w-6 shrink-0">
                            {i + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <h3 className="font-condensed font-800 text-lg">{partner.name}</h3>
                              {isCheapest && (
                                <span className="px-2 py-0.5 rounded text-xs font-condensed font-700 uppercase tracking-widest bg-primary/20 text-primary border border-primary/30">
                                  Legjobb ár
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Viszonteladói ár – meghaladhatja a névértéket
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-5">
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground uppercase font-condensed tracking-wide mb-0.5">
                              Ártartomány
                            </p>
                            <p className="font-condensed font-900 text-xl text-primary neon-glow">
                              {formatPrice(partner.minPrice)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              – {formatPrice(partner.maxPrice)}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            {partner.available ? (
                              <>
                                <CheckCircle size={14} className="text-green-500 shrink-0" />
                                <a
                                  href={partner.url}
                                  target="_blank"
                                  rel="noopener noreferrer sponsored"
                                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-condensed font-700 uppercase tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap"
                                >
                                  Megnézem
                                  <ExternalLink size={12} />
                                </a>
                              </>
                            ) : (
                              <>
                                <XCircle size={14} className="text-muted-foreground shrink-0" />
                                <span className="text-xs text-muted-foreground font-condensed uppercase tracking-wide">
                                  Jelenleg nem elérhető
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Az árak tájékoztató jellegűek. A tényleges árak a partner weboldalán térhetnek el. Ez egy másodlagos piaci összehasonlító platform – nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat.
                </p>
              </div>
            </div>

            {/* Right – sticky sidebar */}
            <div className="flex flex-col gap-5">
              <div className="rounded-xl border border-border bg-card p-6 sticky top-24">
                {/* Sidebar disclaimer - must be visible */}
                <div className="mb-5 p-3 rounded-lg bg-accent/10 border border-accent/30">
                  <p className="text-lg font-medium text-accent leading-snug">
                    <strong>Másodlagos piaci platform.</strong> Nem értékesítünk jegyeket. Az árak viszonteladói árak és meghaladhatják a névértéket.
                  </p>
                </div>

                <h3 className="font-condensed font-800 text-xl uppercase tracking-wide mb-4">
                  Összefoglaló
                </h3>

                <div className="flex flex-col gap-3 text-sm mb-5">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Esemény</span>
                    <span className="font-medium text-right max-w-[60%] text-balance">{event.title}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Dátum</span>
                    <span className="font-medium">{event.dateDisplay}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Helyszín</span>
                    <span className="font-medium text-right">{event.venue}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Város</span>
                    <span className="font-medium">{event.city}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Partnerek száma</span>
                    <span className="font-medium">{event.partners.filter(p => p.available).length} elérhető</span>
                  </div>
                </div>

                {/* Price range */}
                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mb-5">
                  <p className="text-xs font-condensed font-700 uppercase tracking-widest text-muted-foreground mb-1">
                    Összehasonlított ártartomány
                  </p>
                  <p className="font-condensed font-900 text-3xl text-primary neon-glow">
                    {formatPrice(event.minPrice)}
                  </p>
                  <p className="text-sm text-muted-foreground">– {formatPrice(event.maxPrice)}</p>
                </div>

                {cheapestAvailable && (
                  <a
                    href={cheapestAvailable.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-condensed font-700 uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors neon-box"
                  >
                    Legjobb ajánlat megtekintése
                    <ExternalLink size={14} />
                  </a>
                )}

                <p className="text-xs text-muted-foreground text-center mt-3 leading-relaxed">
                  A vásárlás a partner weboldalán zajlik. Az árak meghaladhatják a névértéket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
