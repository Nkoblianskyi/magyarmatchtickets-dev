import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Event, formatPrice } from "@/lib/events-data"
import DisclaimerBanner from "./disclaimer-banner"
import { cn } from "@/lib/utils"

interface EventCardProps {
  event: Event
  className?: string
}

export default function EventCard({ event, className }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`} className={cn("group block", className)}>
      <article className="rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:neon-box bg-card h-full flex flex-col">
        {/* Google Ads compliant disclaimer – top of card, always visible */}
        <DisclaimerBanner variant="card" />

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded text-xs font-condensed font-700 uppercase tracking-widest bg-background/80 backdrop-blur-sm border border-primary/30 text-primary">
              {event.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          <h3 className="font-condensed font-800 text-lg leading-tight text-foreground group-hover:text-primary transition-colors text-balance">
            {event.title}
          </h3>

          <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={13} className="text-primary shrink-0" />
              <span>{event.dateDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-primary shrink-0" />
              <span>{event.venue}, {event.city}</span>
            </div>
          </div>

          {/* Price range */}
          <div className="mt-auto pt-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-condensed mb-1">
              Összehasonlított ártartomány
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-condensed font-900 text-2xl text-primary neon-glow">
                {formatPrice(event.minPrice)}
              </span>
              <span className="text-muted-foreground text-sm">–</span>
              <span className="font-condensed font-700 text-lg text-foreground">
                {formatPrice(event.maxPrice)}
              </span>
            </div>
            <p className="text-md font-condensed font-700 text-accent mt-1 uppercase tracking-wide">
              Az árak meghaladhatják a névértéket
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-primary text-sm font-condensed font-700 uppercase tracking-wide group-hover:gap-2.5 transition-all">
            Ár-összehasonlítás
            <ArrowRight size={14} />
          </div>
        </div>
      </article>
    </Link>
  )
}
