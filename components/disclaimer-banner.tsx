import { AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface DisclaimerBannerProps {
  className?: string
  variant?: "hero" | "section" | "card"
}

/**
 * Google Ads compliant disclaimer banner.
 * Must occupy top 20% of hero sections.
 * Font must be LARGER than hero content text.
 * Always visible - never closeable.
 */
export default function DisclaimerBanner({ className, variant = "hero" }: DisclaimerBannerProps) {
  if (variant === "card") {
    return (
      <div
        className={cn(
          "w-full px-3 py-2 rounded-t-lg disclaimer-stripe border border-accent/40 border-b-0",
          className
        )}
      >
        <p className="text-sm font-600 text-accent/90 leading-tight flex items-center gap-1.5">
          <AlertTriangle size={12} className="shrink-0" />
          <span>
            <strong>Másodlagos piac</strong> – viszonteladói árak, meghaladhatják a névértéket. Nem értékesítünk jegyeket.
          </span>
        </p>
      </div>
    )
  }

  if (variant === "section") {
    return (
      <div
        className={cn(
          "w-full px-4 py-4 bg-accent/10 border border-accent/30 rounded-lg",
          className
        )}
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-accent shrink-0 mt-0.5" size={18} />
          <p className="text-sm leading-relaxed text-foreground/90">
            <strong className="text-accent font-condensed text-base uppercase tracking-wide">Fontos: </strong>
            Ez a weboldal egy <strong>másodlagos piaci platform</strong>, amely nem értékesít jegyeket közvetlenül.
            A megjelenített árak <strong>viszonteladói árak</strong>, amelyek{" "}
            <strong>meghaladhatják a névértéket</strong>. Nem gyűjtünk fizetési adatokat.
          </p>
        </div>
      </div>
    )
  }

  // Hero variant – occupies top ~20% of hero, font larger than body content
  return (
    <div
      className={cn(
        "w-full disclaimer-stripe border-b-2 border-accent/60 bg-accent/15",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-start gap-3">
        <AlertTriangle className="text-accent shrink-0 mt-1" size={24} />
        <div>
          <p className="font-condensed font-700 text-accent uppercase tracking-widest text-lg leading-tight mb-1">
            Fontos tájékoztató – Másodlagos piaci platform
          </p>
          <p className="text-base leading-relaxed text-foreground/90">
            Ez a weboldal egy <strong>másodlagos (viszonteladói) piaci platform</strong>. Kizárólag partnereink jegyárait
            hasonlítjuk össze –{" "}
            <strong>nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat</strong>.
            A jegyek viszonteladói áron kerülnek forgalomba, és az árak{" "}
            <strong>meghaladhatják a névértéket</strong>. Vásárlás előtt ellenőrizze az aktuális árakat a partner weboldalán.
          </p>
        </div>
      </div>
    </div>
  )
}
