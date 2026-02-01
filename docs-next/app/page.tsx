import Link from 'next/link'

const stats = [
  { number: '29', label: 'High-Impact APIs' },
  { number: '6', label: 'Categories' },
  { number: '45+', label: 'Abuse Scenarios' },
  { number: '100%', label: 'Open Source' },
]

const categories = [
  { count: 10, name: 'Windows .NET', icon: '🔷' },
  { count: 6, name: 'Windows COM', icon: '🔶' },
  { count: 3, name: 'Native APIs', icon: '⚙️' },
  { count: 2, name: 'Browser Ext', icon: '🌐' },
  { count: 3, name: 'Cloud Services', icon: '☁️' },
  { count: 3, name: 'Script Engines', icon: '🐍' },
  { count: 2, name: 'Miscellaneous', icon: '📦' },
]

const features = [
  {
    icon: '🎯',
    title: 'Structured Catalog',
    description: 'YAML-based entries with schema validation for consistency',
  },
  {
    icon: '🔍',
    title: 'Abuse Scenarios',
    description: 'Real code examples with full attack context and execution flow',
  },
  {
    icon: '🛡️',
    title: 'Detection Strategies',
    description: 'Behavioral, forensic, and log-based detection signals',
  },
  {
    icon: '📊',
    title: 'Risk Scoring',
    description: 'Quantified severity × prevalence × ease of abuse',
  },
  {
    icon: '🎓',
    title: 'MITRE ATT&CK',
    description: 'Mapped to tactics, techniques, and real-world campaigns',
  },
  {
    icon: '🤝',
    title: 'Community-Driven',
    description: 'Open for contributions and improvements from the community',
  },
]

const cta_cards = [
  {
    title: 'API Browser',
    description: 'Explore the complete catalog of weaponized APIs',
    link: '/api-browser',
    icon: '🔎',
  },
  {
    title: 'Getting Started',
    description: 'Learn how to use LOLAPI and understand the data',
    link: '/getting-started',
    icon: '🚀',
  },
  {
    title: 'Documentation',
    description: 'Dive deep into technical docs and guides',
    link: '/docs',
    icon: '📚',
  },
  {
    title: 'Community',
    description: 'Join discussions, report issues, and contribute',
    link: '/discussions',
    icon: '🤝',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">LOLAPI</h1>
          <p className="text-2xl md:text-3xl font-light mb-4">
            Living Off The Land APIs
          </p>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Structured catalog of legitimate system APIs weaponized for attack. Detection strategies, abuse scenarios, and mitigation guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/api-browser" className="cta-primary">
              Browse APIs →
            </Link>
            <a
              href="https://github.com/TheMagicClaw/LOLAPI"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button border-2 border-white text-white hover:bg-white hover:text-purple-600 transition"
            >
              View on GitHub →
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
              📦 29 APIs Cataloged
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
              🛡️ Detection Strategies Included
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
              🎓 MITRE ATT&CK Mapped
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-purple bg-clip-text">
                  {stat.number}
                </div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Coverage by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {cat.count}
                </div>
                <p className="text-sm text-gray-600">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Why LOLAPI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-lg p-8 card-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">The Problem</h2>
              <p className="text-gray-600 text-lg mb-4">
                After organizations deploy WDAC (Windows Defender Application Control) to block LOLBASline binaries, attackers simply shift tactics to abuse legitimate system APIs:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span>✓</span> .NET Reflection-based code execution
                </li>
                <li className="flex gap-3">
                  <span>✓</span> COM/WMI automation (legitimate admin tools)
                </li>
                <li className="flex gap-3">
                  <span>✓</span> Windows API direct abuse (kernel32, ntdll)
                </li>
                <li className="flex gap-3">
                  <span>✓</span> Browser extension APIs for persistence
                </li>
                <li className="flex gap-3">
                  <span>✓</span> Cloud metadata services for privilege escalation
                </li>
              </ul>
            </div>
            <div>
              <h2 className="section-title mb-6">The Solution</h2>
              <p className="text-gray-600 text-lg mb-4">
                LOLAPI fills the gap with a structured, comprehensive catalog:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span>✓</span> Catalog of 29+ high-impact weaponized APIs
                </li>
                <li className="flex gap-3">
                  <span>✓</span> Real abuse scenarios with code examples
                </li>
                <li className="flex gap-3">
                  <span>✓</span> Detection strategies (behavioral, forensic, logs)
                </li>
                <li className="flex gap-3">
                  <span>✓</span> Risk scoring and prevalence data
                </li>
                <li className="flex gap-3">
                  <span>✓</span> MITRE ATT&CK mapping and campaign attribution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cta_cards.map((card, i) => (
              <Link key={i} href={card.link}>
                <div className="bg-white rounded-lg p-8 card-shadow hover:border-purple-500 border-2 border-transparent transition cursor-pointer h-full">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                  <div className="mt-4 text-purple-600 font-semibold">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Trust & Transparency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p className="text-gray-600 mb-4">
                Responsible disclosure policy and security guidelines in place.
              </p>
              <a href="/security" className="text-purple-600 font-semibold hover:underline">
                View Security Policy →
              </a>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-2">Open & Transparent</h3>
              <p className="text-gray-600 mb-4">
                All data in YAML format, fully documented, and peer-reviewed.
              </p>
              <a href="/contributing" className="text-purple-600 font-semibold hover:underline">
                Contributing Guide →
              </a>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-gray-600 mb-4">
                Built for the security community, with contributions from researchers.
              </p>
              <a href="/community" className="text-purple-600 font-semibold hover:underline">
                Join Community →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
