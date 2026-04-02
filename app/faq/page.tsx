import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

const FAQ_ITEMS = [
  {
    q: "Mi az a MagyarMatchTickets?",
    a: "A MagyarMatchTickets egy független, másodlagos piaci jegyár-összehasonlító platform. Nem értékesítünk jegyeket – kizárólag összehasonlítjuk a viszonteladói partnereinknél elérhető árakat, és átirányítjuk Önt a kiválasztott partnerre.",
  },
  {
    q: "Mi az a másodlagos piac?",
    a: "A másodlagos (secondary) piac olyan platform, ahol a jegyeket nem az eredeti kiadó, hanem viszonteladók kínálják. Az árak ezért eltérhetnek az eredeti névértéktől – jellemzően meghaladhatják azt. Ez törvényes és elfogadott kereskedelmi gyakorlat.",
  },
  {
    q: "Miért lehetnek az árak magasabbak a névértéknél?",
    a: "A viszonteladói piacokon a kereslet és kínálat határozza meg az árakat. Népszerű eseményeknél – pl. BL-döntő, F1 Magyar Nagydíj – az árak jelentősen meghaladhatják az eredeti névértéket. Mindig ellenőrizze a partner oldalán az aktuális árat vásárlás előtt.",
  },
  {
    q: "Vásárolhatok közvetlenül a MagyarMatchTicketsen?",
    a: "Nem. A MagyarMatchTickets egy összehasonlító platform. A tényleges jegyvásárlás a kiválasztott partner weboldalán történik. Mi nem gyűjtünk fizetési adatokat és nem veszünk részt a tranzakcióban.",
  },
  {
    q: "Biztonságos a partner weboldala?",
    a: "Partnereink (StubHub, Viagogo, Ticketmaster, Eventim.hu, stb.) ismert, tapasztalt piaci szereplők. Ennek ellenére javasoljuk, hogy vásárlás előtt mindig olvassa el a partner általános szerződési feltételeit és adatvédelmi tájékoztatóját.",
  },
  {
    q: "Miért szerepelnek az árak forintban (Ft)?",
    a: "Az árak tájékoztató jelleggel forintban kerülnek megjelenítésre az átváltási arányok alapján. A tényleges, érvényes ár a partner weboldalán megtekinthető, amely aktuális árfolyamot alkalmaz.",
  },
  {
    q: "Mi a visszatérítési politikája a partnereknek?",
    a: "A visszatérítési és csere feltételek partnertől függően eltérők. Javasoljuk, hogy vásárlás előtt tájékozódjon az adott partner visszatérítési szabályzatáról. A MagyarMatchTickets semmilyen felelősséget nem vállal a partnerekkel kötött tranzakciókért.",
  },
  {
    q: "Hogyan vehetek fel kapcsolatot Önökkel?",
    a: "Kérdéseivel forduljon hozzánk az info@magyarmatchtickets.com e-mail-címen. Felhívjuk figyelmét, hogy telefonos ügyfélszolgálatunk nincs.",
  },
  {
    q: "Gyűjtenek-e személyes adatokat?",
    a: "A platformunkon való böngészés minimális technikai adatok (pl. süti/cookie) naplózásával jár, amelyekről részletes tájékoztatást Cookie-szabályzatunkban és Adatvédelmi irányelvünkben talál. Fizetési adatokat nem gyűjtünk és nem tárolunk.",
  },
]

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <DisclaimerBanner variant="hero" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">
            Felhasználói tájékoztató
          </p>
          <h1 className="font-condensed font-900 text-5xl md:text-6xl uppercase text-balance mb-4">
            GYIK &amp; Szabályok
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-10">
            Válaszok a leggyakoribb kérdésekre a platformunk működéséről, a másodlagos piacról és a jegyvásárlásról.
          </p>

          <DisclaimerBanner variant="section" className="mb-10" />

          {/* FAQ accordion */}
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-secondary/50 transition-colors">
                  <span className="font-condensed font-700 text-lg uppercase tracking-wide text-foreground group-open:text-primary transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          {/* Rules section */}
          <div className="mt-14">
            <h2 className="font-condensed font-900 text-3xl md:text-4xl uppercase mb-6">
              Platform szabályok
            </h2>
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">1. Másodlagos piac.</strong> A MagyarMatchTickets kizárólag másodlagos piaci viszonteladók árait hasonlítja össze. Az oldal nem rendelkezik közvetlen szerződéssel eseményszervezőkkel vagy elsődleges jegykiadókkal.
              </p>
              <p>
                <strong className="text-foreground">2. Áreltérések.</strong> A megjelenített árak tájékoztató jellegűek. A tényleges ár a partner oldalán található, és eltérhet az összehasonlítón megjelenített értéktől. A MagyarMatchTickets nem vállal felelősséget az árak pontosságáért.
              </p>
              <p>
                <strong className="text-foreground">3. Felelősség kizárása.</strong> A vásárlási tranzakció a partner és a vásárló között jön létre. A MagyarMatchTickets semmiféle felelősséget nem vállal a partnerekkel kötött szerződésekért, visszatérítésekért vagy eseménytörlésekért.
              </p>
              <p>
                <strong className="text-foreground">4. Névérték feletti árak.</strong> Másodlagos piaci jegyárak meghaladhatják az eredeti névértéket. Ez a platform természetéből fakad, és minden megjelenítési ponton egyértelműen jelezve van.
              </p>
              <p>
                <strong className="text-foreground">5. Cookie-k.</strong> Platformunk sütiket használ a böngészési élmény javítása és az analitikai célok érdekében. Részletek a Cookie-szabályzatunkban találhatók.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
