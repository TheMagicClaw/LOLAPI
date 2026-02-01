import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'LOLAPI - Living Off The Land APIs',
  description: 'Catalog of legitimate system APIs weaponized for attack. Detection strategies, abuse scenarios, and mitigation guidance.',
  keywords: ['LOLAPI', 'Living Off The Land', 'APIs', 'Security', 'Detection', 'MITRE ATT&CK'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
