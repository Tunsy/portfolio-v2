import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jonathan Nguyen - Software Engineer',
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/images/favicon.ico" }],
  },
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
