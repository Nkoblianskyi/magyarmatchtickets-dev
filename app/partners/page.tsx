import { ExternalLink, CheckCircle, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"
import { PARTNERS } from "@/lib/events-data"

const PARTNER_DETAILS: Record<string, { description: string; specialty: string; region: string }> = {
  "Eventim.hu": {
    description: "Az egyik legismertebb jegyforgalmazó Magyarországon és Közép-Európában. Széles rendezvénykínálat, biztonságos vásárlási folyamat.",
    specialty: "Magyar és európai sport- és kulturális rendezvények",
    region: "Magyarország, Közép-Európa",
  },
  "AXS.com": {
    description: "Globális jegyértékesítési platform, különösen erős a sport és koncert szektorban. Megbízható ügyfélszolgálattal.",
    specialty: "Nagyszabású sportesemények, arénák",
    region: "Globális",
  },
  "StubHub": {
    description: "A világ egyik legnagyobb másodlagos jegypiacú platformja. Hatalmas kínálat, FanProtect garancia.",
    specialty: "Másodlagos piaci viszonteladás, ritka jegyek",
    region: "Globális",
  },
  "Viagogo": {
    description: "Vezető viszonteladói platform, amely az egész világon elérhető és széleskörű sportesemény-kínálattal rendelkezik.",
    specialty: "Globális sport- és szórakoztatóipari események",
    region: "Globális",
  },
  "Ticketmaster": {
    description: "A világ legnagyobb jegyforgalmazója. Elsőkézből elérhető jegyek mellett viszonteladói kínálat is.",
    specialty: "Prémium sport, zene, színház",
    region: "Globális",
  },
  "Jegymester.hu": {
    description: "Magyar specialista platform, amely hazai sporteseményekre és rendezvényekre összpontosít.",
    specialty: "Magyar liga, belföldi rendezvények",
    region: "Magyarország",
  },
}

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Disclaimer – top 20% placement */}
        <DisclaimerBanner variant="hero" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">
            Viszonteladói partnerek
          </p>
          <h1 className="font-condensed font-900 text-5xl md:text-6xl uppercase text-balance mb-4">
            Partnerek
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-10">
            Az alábbi partnerek másodlagos piaci viszonteladók. A MagyarMatchTickets{" "}
            <strong>kizárólag összehasonlítja</strong> a partnerek által kínált árakat –{" "}
            nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat. A jegyek megvásárlása a partner weboldalán történik, ahol az árak{" "}
            <strong className="text-accent">meghaladhatják a névértéket</strong>.
          </p>

          <DisclaimerBanner variant="section" className="mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS.map((partner) => {
              const detail = PARTNER_DETAILS[partner.name]
              return (
                <div
                  key={partner.name}
                  className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-condensed font-800 text-2xl uppercase tracking-wide mb-1">
                        {partner.name}
                      </h2>
                      {detail && (
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded text-xs font-condensed font-700 uppercase tracking-widest border border-border text-muted-foreground">
                            {detail.region}
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs font-condensed font-700 uppercase tracking-widest border border-primary/30 bg-primary/5 text-primary">
                            {detail.specialty}
                          </span>
                        </div>
                      )}
                    </div>
                    <Star size={16} className="text-accent shrink-0 mt-1" />
                  </div>

                  {detail && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{detail.description}</p>
                  )}

                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle size={13} className="text-green-500" />
                      Másodlagos piaci viszonteladó
                    </div>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary/40 bg-primary/5 text-primary text-xs font-condensed font-700 uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      Megnyitás
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Reminder note */}
          <div className="mt-12 p-6 rounded-xl bg-accent/10 border border-accent/30">
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong className="font-condensed text-base text-accent uppercase tracking-wide">Fontos emlékeztető: </strong>
              A fenti partnerek másodlagos piaci viszonteladók. Jegyvásárláskor Ön közvetlenül a partner weboldalán vásárol –{" "}
              a MagyarMatchTickets nem vesz részt a tranzakcióban és nem gyűjt fizetési adatokat.
              A viszonteladói árak meghaladhatják az eredeti névértéket.
              Minden vásárlás előtt olvassa el a partner általános szerződési feltételeit.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
