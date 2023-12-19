import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../../styles/globals.css'

const inter = Inter({ subsets: ['cyrillic-ext'] })

export const metadata: Metadata = {
  title: 'Swagger Docs',
  description: 'Swagger Documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
