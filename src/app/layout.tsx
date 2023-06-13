import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fuck Spez',
  description: `
  Join the Fuck Spez Tracker express your hate for Steve Huffman, the co-founder of Reddit. Stay updated with the leaderboard to discover which countries are showing the most hate for Spez.
  `,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
