import { Users, Target, ShieldCheck, Eye } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"
import { EVENTS, PARTNERS } from "@/lib/events-data"

const VALUES = [
  {
    icon: Eye,
    title: "Teljes átláthatóság",
    desc: "Nem rejtegetünk díjakat. Amit látszik az az ár – viszonteladói ár, amely meghaladhatja a névértéket. Ezt mindig egyértelműen jelezzük.",
  },
  {
    icon: ShieldCheck,
    title: "Nincs adatgyűjtés",
    desc: "Nem gyűjtünk és nem tárolunk fizetési adatokat. A vásárlás kizárólag a partner weboldalán történik.",
  },
  {
    icon: Target,
    title: "Független összehasonlítás",
    desc: "Partnereink között nem rangsorolunk fizetett hirdetés alapján. A legolcsóbb ajánlat mindig az első helyen jelenik meg.",
  },
  {
    icon: Users,
    title: "Fogyasztóvédelem",
    desc: "Platformunkon a fogyasztói érdekek az elsők. Egyértelműen tájékoztatjuk látogatóinkat, hogy másodlagos piaci platformon járnak.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Google Ads compliant disclaimer */}
        <DisclaimerBanner variant="hero" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-condensed font-700 text-xs uppercase tracking-widest text-primary mb-2">
            Rólunk
          </p>
          <h1 className="font-condensed font-900 text-5xl md:text-6xl uppercase text-balance mb-6">
            Kik vagyunk?
          </h1>

          {/* Mission statement */}
          <div className="max-w-3xl mb-14">
            <p className="text-xl leading-relaxed text-foreground/90 mb-4">
              A <strong>MagyarMatchTickets</strong> egy független, másodlagos piaci ár-összehasonlító platform,
              amely segít Önnek megtalálni a legjobb árat kedvenc sporteseményének jegyéhez.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Platformunk <strong>nem értékesít jegyeket</strong>. Kizárólag összehasonlítjuk a partnereinknél – viszonteladóknál – elérhető árakat,
              és átirányítjuk Önt a kiválasztott partnerre, ahol a tényleges vásárlás zajlik.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              A megjelenített jegyárak viszonteladói árak, amelyek{" "}
              <strong className="text-accent">meghaladhatják az eredeti névértéket</strong>.
              Ez másodlagos piaci (secondary market) platform természetes jellemzője, amelyet platformunkon mindig
              egyértelműen jelzünk.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { value: `${EVENTS.length}+`, label: "Sportesemény" },
              { value: `${PARTNERS.length}`, label: "Viszonteladói partner" },
              { value: "100%", label: "Adatmentes tranzakció" },
              { value: "0 Ft", label: "Összehasonlítás díja" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl border border-border bg-card text-center">
                <p className="font-condensed font-900 text-4xl text-primary neon-glow mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-condensed uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <h2 className="font-condensed font-900 text-3xl md:text-4xl uppercase mb-6">
            Értékeink
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="p-6 rounded-xl border border-border bg-card flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-condensed font-800 text-xl uppercase tracking-wide mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legal entity */}
          <div className="rounded-xl border border-border bg-card p-8 mb-10">
            <h2 className="font-condensed font-900 text-2xl uppercase tracking-wide mb-5">
              Cégadatok
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-muted-foreground uppercase font-condensed tracking-widest text-xs mb-1">Cégnév</p>
                <p className="font-medium text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
              </div>
              <div>
                <p className="text-muted-foreground uppercase font-condensed tracking-widest text-xs mb-1">Ügyvezető</p>
                <p className="font-medium text-foreground">Myrianthous Anna</p>
              </div>
              <div>
                <p className="text-muted-foreground uppercase font-condensed tracking-widest text-xs mb-1">Székhely</p>
                <p className="font-medium text-foreground">Panagioti Kaspi 5Α., Nicosia 1095, Cyprus</p>
              </div>
              <div>
                <p className="text-muted-foreground uppercase font-condensed tracking-widest text-xs mb-1">E-mail</p>
                <a href="mailto:info@magyarmatchtickets.com" className="text-primary hover:underline font-medium">
                  info@magyarmatchtickets.com
                </a>
              </div>
            </div>
          </div>

          <DisclaimerBanner variant="section" />
        </div>
      </main>
      <Footer />
    </>
  )
}
