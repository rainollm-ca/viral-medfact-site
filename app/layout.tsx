import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DrMedFact',
  description: 'Medical education content — empowering communities with accurate, evidence-based health information on TikTok and social media.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
