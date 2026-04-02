import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card mt-20">
      {/* Footer Disclaimer */}
      <div className="bg-accent/10 border-b border-accent/30 px-4 py-5">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertTriangle className="text-accent shrink-0 mt-0.5" size={20} />
          <p className="text-sm leading-relaxed text-foreground/90">
            <span className="font-condensed font-700 text-accent uppercase tracking-wide text-base">Fontos tájékoztató: </span>
            Ez a weboldal egy <strong>másodlagos piaci platform</strong>. Nem értékesítünk jegyeket közvetlenül, nem gyűjtünk és nem tárolunk fizetési adatokat.
            Csak partnereink aktuális árait hasonlítjuk össze. A jegyeket <strong>viszonteladók kínálják</strong> – az árak{" "}
            <strong>meghaladhatják a névértéket</strong>. A vásárlás előtt ellenőrizze az árakat a partner oldalán.
            Nincs telefonos ügyfélszolgálatunk.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-condensed font-800 text-2xl tracking-wider">
                <span className="text-primary neon-glow">MAGYAR</span>
                <span className="text-foreground">MATCH</span>
                <span className="text-accent">TICKETS</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sportjegy ár-összehasonlító platform Magyarország és Európa legjobb eseményeihez.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-condensed font-700 text-sm uppercase tracking-widest text-muted-foreground mb-4">Oldalak</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Főoldal" },
                { href: "/events", label: "Összes esemény" },
                { href: "/partners", label: "Partnerek" },
                { href: "/about", label: "Rólunk" },
                { href: "/contact", label: "Kapcsolat" },
                { href: "/faq", label: "GYIK & Szabályok" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-condensed font-700 text-sm uppercase tracking-widest text-muted-foreground mb-4">Jogi</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/privacy-policy", label: "Adatvédelmi irányelvek" },
                { href: "/cookie-policy", label: "Cookie-szabályzat" },
                { href: "/faq", label: "Általános szabályzat" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-condensed font-700 text-sm uppercase tracking-widest text-muted-foreground mb-4">Cégadatok</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-1 leading-relaxed">
              <p className="text-foreground font-medium">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
              <p>Myrianthous Anna</p>
              <p>Panagioti Kaspi 5Α.</p>
              <p>Nicosia 1095, Cyprus</p>
              <a href="mailto:info@magyarmatchtickets.com" className="text-primary hover:underline block mt-2">
                info@magyarmatchtickets.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 MagyarMatchTickets – FISCUS NOSTRUM FUND SERVICES LIMITED. Minden jog fenntartva.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Másodlagos piaci platform. Nem értékesítünk jegyeket. Az árak meghaladhatják a névértéket.
          </p>
        </div>
      </div>
    </footer>
  )
}
