'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-purple bg-clip-text text-transparent">
              LOLAPI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-purple-600 transition">
              Documentation
            </Link>
            <Link href="/api-browser" className="text-gray-700 hover:text-purple-600 transition">
              API Browser
            </Link>
            <Link href="/getting-started" className="text-gray-700 hover:text-purple-600 transition">
              Getting Started
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-purple-600 transition">
              Community
            </Link>
          </nav>

          {/* GitHub Link */}
          <a
            href="https://github.com/TheMagicClaw/LOLAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </Link>
            <Link href="/docs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Documentation
            </Link>
            <Link href="/api-browser" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              API Browser
            </Link>
            <Link href="/getting-started" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Getting Started
            </Link>
            <Link href="/community" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Community
            </Link>
            <a
              href="https://github.com/TheMagicClaw/LOLAPI"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              GitHub
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
