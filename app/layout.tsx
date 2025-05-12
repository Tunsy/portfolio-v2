import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jonathan Nguyen - Software Engineer',
  description: 'I\'m Jonathan Nguyen, a software engineer who loves building things and solving problems across the entire stack.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
