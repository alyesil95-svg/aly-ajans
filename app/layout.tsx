import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALY Ajans',
  description: 'İzmir Dijital Ajans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  )
}