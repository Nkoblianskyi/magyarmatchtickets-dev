import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MagyarMatchTickets – Sportjegy Ár-összehasonlító | Másodlagos Piac',
  description: 'Hasonlítsa össze a sportjegyek árait Magyarországon és Európában. Másodlagos piaci platform – csak ár-összehasonlítást végzünk, nem adunk el jegyeket. Az árak meghaladhatják a névértéket.',
  keywords: 'jegy összehasonlítás, sportjegy, Hungary, Budapest, labdarúgás, F1, tenisz, másodlagos piac',
  metadataBase: new URL('https://magyarmatchtickets.com'),
  openGraph: {
    title: 'MagyarMatchTickets – Sportjegy Ár-összehasonlító',
    description: 'Másodlagos piaci platform – csak ár-összehasonlítást végzünk, nem adunk el jegyeket.',
    url: 'https://magyarmatchtickets.com',
    siteName: 'MagyarMatchTickets',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
