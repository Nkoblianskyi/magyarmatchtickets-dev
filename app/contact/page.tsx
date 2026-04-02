"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, Send, Mail, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Kötelező mező"
    if (!form.email.trim()) e.email = "Kötelező mező"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Érvénytelen e-mail cím"
    if (!form.subject.trim()) e.subject = "Kötelező mező"
    if (!form.message.trim()) e.message = "Kötelező mező"
    else if (form.message.trim().length < 20) e.message = "Legalább 20 karakter szükséges"
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1400))
    setSubmitting(false)
    setShowSuccess(true)
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Navbar />

      {/* Hero disclaimer – top 20% of page content, always visible */}
      <main className="pt-16">
        <DisclaimerBanner variant="hero" />

        {/* Page header */}
        <section className="relative grid-lines border-b border-border/40 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-condensed font-600 text-primary uppercase tracking-widest text-sm mb-3">
              Kapcsolat
            </p>
            <h1 className="font-condensed font-900 text-5xl sm:text-6xl uppercase tracking-tight text-balance neon-glow text-primary mb-4">
              Írjon nekünk
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Kérdése van a platformmal, a partnerekkel vagy a jegyárakkal kapcsolatban? Szívesen válaszolunk.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Info column */}
            <aside className="flex flex-col gap-6">
              {/* Platform disclaimer in sidebar – always visible, section variant */}
              <div className="bg-accent/10 border border-accent/40 rounded-lg p-5 flex items-start gap-3">
                <AlertTriangle className="text-accent shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-condensed font-700 text-accent uppercase tracking-wide text-base mb-1">
                    Fontos tájékoztató
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    Ez a platform <strong>másodlagos piac</strong> – nem értékesítünk jegyeket közvetlenül, nem gyűjtünk
                    fizetési adatokat. Az árak <strong>meghaladhatják a névértéket</strong>. Jegyvásárlással kapcsolatos
                    ügyfélszolgálat csak a partnereinknél érhető el.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-5 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-primary/10 neon-box flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-condensed font-700 text-sm uppercase tracking-wide mb-0.5">E-mail</p>
                    <a
                      href="mailto:info@magyarmatchtickets.com"
                      className="text-primary text-sm hover:underline"
                    >
                      info@magyarmatchtickets.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-primary/10 neon-box flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-condensed font-700 text-sm uppercase tracking-wide mb-0.5">Székhely</p>
                    <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                      FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                      Panagioti Kaspi 5A, Nicosia 1095<br />
                      Cyprus
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded bg-primary/10 neon-box flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-condensed font-700 text-sm uppercase tracking-wide mb-0.5">Válaszidő</p>
                    <p className="text-sm text-muted-foreground">2 munkanapon belül</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 border border-border/40 rounded-lg p-5">
                <p className="font-condensed font-700 text-sm uppercase tracking-wide mb-2">Telefonos ügyfélszolgálat</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Platformunknak <strong className="text-foreground">nincs telefonos ügyfélszolgálata</strong>.
                  Jegyvásárlással, visszatérítéssel vagy eseményváltozással kapcsolatban közvetlenül a jegyet értékesítő
                  partnert keresse meg.
                </p>
              </div>
            </aside>

            {/* Form column */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <h2 className="font-condensed font-800 text-2xl uppercase tracking-wide mb-6">
                  Üzenet küldése
                </h2>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-condensed font-600 text-sm uppercase tracking-wide text-muted-foreground">
                        Teljes név <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Pl. Kiss János"
                        className={`w-full bg-input border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? "border-destructive" : "border-border/60"}`}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-condensed font-600 text-sm uppercase tracking-wide text-muted-foreground">
                        E-mail cím <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="pelda@email.com"
                        className={`w-full bg-input border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.email ? "border-destructive" : "border-border/60"}`}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="font-condensed font-600 text-sm uppercase tracking-wide text-muted-foreground">
                      Tárgy <span className="text-accent">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`w-full bg-input border rounded-lg px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.subject ? "border-destructive" : "border-border/60"}`}
                    >
                      <option value="" disabled>Válasszon témát...</option>
                      <option value="platform">Platform kérdés</option>
                      <option value="partner">Partner / adathibajelentés</option>
                      <option value="compliance">Google Ads / megfelelőség</option>
                      <option value="legal">Jogi megkeresés</option>
                      <option value="other">Egyéb</option>
                    </select>
                    {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-condensed font-600 text-sm uppercase tracking-wide text-muted-foreground">
                      Üzenet <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Írja le kérdését vagy megjegyzését..."
                      className={`w-full bg-input border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? "border-destructive" : "border-border/60"}`}
                    />
                    <div className="flex items-center justify-between">
                      {errors.message
                        ? <p className="text-xs text-destructive">{errors.message}</p>
                        : <span />}
                      <p className="text-xs text-muted-foreground ml-auto">{form.message.length} karakter</p>
                    </div>
                  </div>

                  {/* Notice under form */}
                  <div className="flex items-start gap-2.5 bg-accent/8 border border-accent/25 rounded-lg px-4 py-3">
                    <AlertTriangle size={15} className="text-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      <strong className="text-accent">Másodlagos piaci platform</strong> – jegyvásárlással, visszatérítéssel
                      vagy lemondással kapcsolatban kizárólag a jegyet árusító partner tud segíteni.
                      Az árak <strong>meghaladhatják a névértéket</strong>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2.5 w-full sm:w-auto sm:self-end bg-primary text-primary-foreground font-condensed font-700 uppercase tracking-widest px-10 py-3.5 rounded-lg text-base transition-all hover:brightness-110 neon-box disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Küldés...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Üzenet küldése
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success popup */}
      {showSuccess && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          />

          {/* Modal */}
          <div className="relative bg-card border border-primary/40 neon-box rounded-2xl p-8 max-w-md w-full text-center flex flex-col items-center gap-5 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-primary/15 neon-box flex items-center justify-center">
              <CheckCircle2 size={36} className="text-primary neon-glow" />
            </div>
            <div>
              <h2
                id="success-title"
                className="font-condensed font-900 text-3xl uppercase tracking-tight text-primary neon-glow mb-2"
              >
                Üzenet elküldve!
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Köszönjük megkeresését. Csapatunk <strong className="text-foreground">2 munkanapon belül</strong> válaszol az
                Ön által megadott e-mail címre.
              </p>
            </div>

            <div className="w-full bg-accent/10 border border-accent/30 rounded-lg px-4 py-3 flex items-start gap-2 text-left">
              <AlertTriangle size={14} className="text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-foreground/70 leading-relaxed">
                Emlékeztetjük: ez a platform <strong>másodlagos piac</strong>. Jegyvásárlással kapcsolatos kérdésekkel
                forduljon közvetlenül a partnerhez. Az árak <strong>meghaladhatják a névértéket</strong>.
              </p>
            </div>

            <button
              onClick={() => setShowSuccess(false)}
              className="bg-primary text-primary-foreground font-condensed font-700 uppercase tracking-widest px-8 py-3 rounded-lg text-sm neon-box hover:brightness-110 transition-all"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
