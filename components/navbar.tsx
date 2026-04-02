"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, Suspense } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Főoldal" },
  { href: "/events", label: "Események" },
  { href: "/partners", label: "Partnerek" },
  { href: "/faq", label: "GYIK & Szabályok" },
  { href: "/about", label: "Rólunk" },
  { href: "/contact", label: "Kapcsolat" },
]

function NavInner() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary/20 neon-box flex items-center justify-center">
            <span className="font-condensed font-900 text-primary text-sm neon-glow">M</span>
          </div>
          <span className="font-condensed font-700 text-xl tracking-wider">
            <span className="text-primary neon-glow">MAGYAR</span>
            <span className="text-foreground">MATCH</span>
            <span className="text-accent orange-glow">TICKETS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded text-sm font-condensed font-600 tracking-wide uppercase transition-all duration-200",
                  pathname === link.href
                    ? "text-primary bg-primary/10 neon-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded text-muted-foreground hover:text-foreground"
          aria-label="Menü megnyitása"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col py-2 px-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded text-sm font-condensed font-600 tracking-wide uppercase transition-all",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default function Navbar() {
  return (
    <Suspense
      fallback={
        <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/50 backdrop-blur-md bg-background/80" />
      }
    >
      <NavInner />
    </Suspense>
  )
}
