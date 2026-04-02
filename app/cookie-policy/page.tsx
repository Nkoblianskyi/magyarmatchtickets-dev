import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

export const metadata = {
  title: "Cookie-szabályzat | MagyarMatchTickets",
  description: "Tájékoztató a MagyarMatchTickets oldalon használt cookie-król (sütikről).",
}

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <DisclaimerBanner variant="hero" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">Jogi</p>
          <h1 className="font-condensed font-900 text-5xl uppercase text-balance mb-3">
            Cookie-szabályzat
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Utolsó frissítés: 2026</p>

          <div className="flex flex-col gap-8 text-muted-foreground leading-relaxed text-sm">
            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">Mi az a cookie (süti)?</h2>
              <p>
                A cookie (süti) egy kis adatfájl, amelyet a weboldal az Ön böngészőjébe helyez el, amikor a Platformot látogatja. A sütik segítenek javítani a felhasználói élményt és analitikai adatokat gyűjteni az oldal működéséről.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">Milyen sütiket használunk?</h2>

              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <h3 className="font-condensed font-700 text-base uppercase tracking-wide text-foreground mb-1">
                    Szükséges sütik
                  </h3>
                  <p>
                    Ezek a sütik az oldal működéséhez elengedhetetlenek. Nem gyűjtenek személyazonosításra alkalmas adatokat. Ide tartoznak a munkamenet-kezelő és biztonsági sütik.
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground">Letiltható: Nem</p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-card">
                  <h3 className="font-condensed font-700 text-base uppercase tracking-wide text-foreground mb-1">
                    Analitikai sütik
                  </h3>
                  <p>
                    Segítenek megérteni, hogyan használják a látogatók az oldalt. Az összegyűjtött adatok anonimizáltak, és nem kapcsolhatók egyénekhez. Ilyen sütiket pl. a Google Analytics helyez el.
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground">Letiltható: Igen</p>
                </div>

                <div className="p-4 rounded-lg border border-border bg-card">
                  <h3 className="font-condensed font-700 text-base uppercase tracking-wide text-foreground mb-1">
                    Marketing sütik
                  </h3>
                  <p>
                    Marketing sütiket jelenleg nem használunk. Amennyiben ez a jövőben megváltozik, az irányelvet frissíteni fogjuk és erről értesítjük a látogatókat.
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground">Jelenleg: Nem aktív</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">Hogyan kezelheti a sütiket?</h2>
              <p>
                A sütik kezelésére az alábbi lehetőségek állnak rendelkezésére:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Böngészője beállításaiban tilthatja le az összes vagy egyes sütit.</li>
                <li>A Google Analytics adatgyűjtést letilthatja a <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out böngészőbővítményével</a>.</li>
                <li>Kérésére töröljük az Önhöz köthető analitikai adatokat az <a href="mailto:info@magyarmatchtickets.com" className="text-primary hover:underline">info@magyarmatchtickets.com</a> e-mail-cím megkeresésével.</li>
              </ul>
              <p className="mt-3">
                Felhívjuk figyelmét, hogy a szükséges sütik letiltása az oldal egyes funkcióinak hibás működéséhez vezethet.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">Harmadik felek sütijei</h2>
              <p>
                Partneroldalainkra mutató linkekre kattintva az adott partner saját sütiket helyezhet el az Ön böngészőjébe. Ezekért a sütikért nem vállalunk felelősséget – javasoljuk, hogy tekintse meg az adott partner cookie-szabályzatát.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">Kapcsolat</h2>
              <p>
                Cookie-kkal kapcsolatos kérdéseivel forduljon hozzánk:
              </p>
              <address className="not-italic mt-2">
                <p className="font-medium text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
                <a href="mailto:info@magyarmatchtickets.com" className="text-primary hover:underline">
                  info@magyarmatchtickets.com
                </a>
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
