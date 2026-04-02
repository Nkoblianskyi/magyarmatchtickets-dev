"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"
import EventCard from "@/components/event-card"
import { EVENTS } from "@/lib/events-data"

const CATEGORIES = ["Összes", "Labdarúgás", "Motorsport", "Tenisz", "Kerékpár", "Jégkorong", "Boksz", "MMA", "Atlétika", "Futás"]

export default function EventsPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("Összes")
  const [sortBy, setSortBy] = useState<"date" | "price-asc" | "price-desc">("date")

  const filtered = useMemo(() => {
    let result = [...EVENTS]

    if (activeCategory !== "Összes") {
      result = result.filter((e) => e.category === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.city.toLowerCase().includes(q) ||
          e.venue.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
      )
    }

    if (sortBy === "date") result.sort((a, b) => a.date.localeCompare(b.date))
    if (sortBy === "price-asc") result.sort((a, b) => a.minPrice - b.minPrice)
    if (sortBy === "price-desc") result.sort((a, b) => b.minPrice - a.minPrice)

    return result
  }, [search, activeCategory, sortBy])

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero header */}
        <div className="relative border-b border-border/50 overflow-hidden grid-lines">
          {/* Google Ads compliant disclaimer at top */}
          <DisclaimerBanner variant="hero" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">
              Másodlagos piaci összehasonlító
            </p>
            <h1 className="font-condensed font-900 text-5xl md:text-6xl uppercase text-balance mb-3">
              Összes esemény
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {EVENTS.length} sportesemény ár-összehasonlítása partnereinknél. Az árak viszonteladói árak és{" "}
              <strong className="text-accent">meghaladhatják a névértéket</strong>.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-16 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {/* Search + sort */}
            <div className="flex gap-3 flex-col sm:flex-row">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Keresés esemény, helyszín vagy város alapján..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={14} className="text-muted-foreground shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="py-2.5 px-3 rounded-lg border border-border bg-card text-sm text-foreground focus:outline-none focus:border-primary/50 cursor-pointer"
                >
                  <option value="date">Dátum szerint</option>
                  <option value="price-asc">Ár szerint (olcsóbb előbb)</option>
                  <option value="price-desc">Ár szerint (drágább előbb)</option>
                </select>
              </div>
            </div>

            {/* Category pills */}
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-condensed font-700 uppercase tracking-wide transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground neon-box"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-sm text-muted-foreground mb-6 font-condensed uppercase tracking-wide">
            {filtered.length} esemény találat
            {activeCategory !== "Összes" && ` – ${activeCategory}`}
            {search && ` – "${search}"`}
          </p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <Search size={48} className="text-border" />
              <p className="font-condensed font-700 text-2xl uppercase text-muted-foreground">
                Nincs találat
              </p>
              <p className="text-sm text-muted-foreground">
                Próbáljon más keresési feltételt vagy kategóriát.
              </p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("Összes") }}
                className="px-4 py-2 rounded-lg border border-border text-sm font-condensed font-700 uppercase tracking-wide hover:border-primary/40 transition-colors"
              >
                Szűrők törlése
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
