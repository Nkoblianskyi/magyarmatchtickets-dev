import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

export const metadata = {
  title: "Adatvédelmi Irányelvek | MagyarMatchTickets",
  description: "A MagyarMatchTickets adatvédelmi irányelvei – hogyan gyűjtjük és használjuk személyes adatait.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <DisclaimerBanner variant="hero" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">Jogi</p>
          <h1 className="font-condensed font-900 text-5xl uppercase text-balance mb-3">
            Adatvédelmi Irányelvek
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Utolsó frissítés: 2026. január 1.</p>

          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed flex flex-col gap-8">
            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">1. Bevezetés</h2>
              <p>
                A FISCUS NOSTRUM FUND SERVICES LIMITED (továbbiakban: „Társaság", „mi") üzemelteti a MagyarMatchTickets weboldalt (a továbbiakban: „Platform"). Elkötelezettségünk a személyes adatok védelme iránt. Jelen Adatvédelmi Irányelv tájékoztatja Önt arról, hogy milyen adatokat gyűjtünk, hogyan kezeljük azokat, és milyen jogai vannak.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">2. Milyen adatokat gyűjtünk?</h2>
              <p>
                A Platform böngészése során automatikusan gyűjtjük az alábbi technikai adatokat:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>IP-cím (anonimizált formában)</li>
                <li>Böngésző típusa és verziója</li>
                <li>Operációs rendszer</li>
                <li>Hivatkozó URL</li>
                <li>Meglátogatott oldalak és időbélyegek</li>
              </ul>
              <p className="mt-3">
                <strong className="text-foreground">Fizetési adatokat nem gyűjtünk és nem tárolunk.</strong> A jegyvásárlás közvetlenül a partner weboldalán zajlik, ahol az adott partner adatvédelmi irányelve érvényes.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">3. Adatfelhasználás célja</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>A Platform működőképességének biztosítása</li>
                <li>Felhasználói élmény javítása</li>
                <li>Statisztikai elemzések (anonimizált formában)</li>
                <li>Jogszabályi kötelezettségek teljesítése</li>
              </ul>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">4. Adatmegosztás</h2>
              <p>
                Személyes adatait harmadik félnek nem adjuk el. Analitikai adatokat megoszthatunk megbízható technikai partnereinkkel (pl. Google Analytics) anonimizált formában. A partner weboldalakra mutató linkekre kattintva az adott partner saját adatvédelmi irányelve érvényes.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">5. Az Ön jogai</h2>
              <p>Az EU GDPR alapján Önnek jogában áll:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Tájékoztatást kérni a kezelt adatokról</li>
                <li>Kérni az adatok törlését</li>
                <li>Tiltakozni az adatkezelés ellen</li>
                <li>Panaszt tenni a felügyeleti hatóságnál</li>
              </ul>
              <p className="mt-3">
                Jogait az <a href="mailto:info@magyarmatchtickets.com" className="text-primary hover:underline">info@magyarmatchtickets.com</a> e-mail-címen gyakorolhatja.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">6. Adatmegőrzés</h2>
              <p>
                A technikai napló adatokat legfeljebb 90 napig őrizzük meg, majd anonimizáljuk vagy töröljük azokat.
              </p>
            </section>

            <section>
              <h2 className="font-condensed font-800 text-2xl uppercase text-foreground mb-3">7. Kapcsolat</h2>
              <address className="not-italic">
                <p className="font-medium text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
                <p>Panagioti Kaspi 5Α., Nicosia 1095, Cyprus</p>
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
