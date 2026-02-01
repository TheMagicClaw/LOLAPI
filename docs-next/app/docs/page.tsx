export default function Docs() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-lg opacity-90">
            Comprehensive guides for using LOLAPI
          </p>
        </div>
      </section>

      {/* Documentation Index */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Data Format */}
            <div className="bg-white rounded-lg p-8 card-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Data Format</h2>
              <p className="text-gray-600 mb-4">
                Learn the YAML schema and structure of LOLAPI entries.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2">
                  <span>•</span> YAML Entry Structure
                </li>
                <li className="flex gap-2">
                  <span>•</span> API Metadata Fields
                </li>
                <li className="flex gap-2">
                  <span>•</span> Abuse Scenario Schema
                </li>
                <li className="flex gap-2">
                  <span>•</span> Detection Signal Format
                </li>
                <li className="flex gap-2">
                  <span>•</span> Risk Scoring Algorithm
                </li>
              </ul>
              <a href="https://github.com/TheMagicClaw/LOLAPI" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">
                View on GitHub →
              </a>
            </div>

            {/* Detection Guide */}
            <div className="bg-white rounded-lg p-8 card-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛡️ Detection Guide</h2>
              <p className="text-gray-600 mb-4">
                Practical strategies for detecting LOTL API abuse.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2">
                  <span>•</span> Behavioral Detection
                </li>
                <li className="flex gap-2">
                  <span>•</span> Forensic Analysis
                </li>
                <li className="flex gap-2">
                  <span>•</span> Log-Based Detection
                </li>
                <li className="flex gap-2">
                  <span>•</span> Sigma Detection Rules
                </li>
                <li className="flex gap-2">
                  <span>•</span> SIEM Integration
                </li>
              </ul>
              <a href="https://github.com/TheMagicClaw/LOLAPI" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">
                View on GitHub →
              </a>
            </div>

            {/* Mitigation Guide */}
            <div className="bg-white rounded-lg p-8 card-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛡️ Mitigation Guide</h2>
              <p className="text-gray-600 mb-4">
                Defense strategies and hardening techniques.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2">
                  <span>•</span> Policy-Based Mitigations
                </li>
                <li className="flex gap-2">
                  <span>•</span> Technical Controls
                </li>
                <li className="flex gap-2">
                  <span>•</span> AppLocker/CodeIntegrity
                </li>
                <li className="flex gap-2">
                  <span>•</span> .NET Hardening
                </li>
                <li className="flex gap-2">
                  <span>•</span> Process Monitoring
                </li>
              </ul>
              <a href="https://github.com/TheMagicClaw/LOLAPI" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">
                View on GitHub →
              </a>
            </div>

            {/* API Catalog */}
            <div className="bg-white rounded-lg p-8 card-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 API Catalog</h2>
              <p className="text-gray-600 mb-4">
                Complete reference of documented APIs.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2">
                  <span>•</span> 10 Windows .NET APIs
                </li>
                <li className="flex gap-2">
                  <span>•</span> 6 Windows COM Objects
                </li>
                <li className="flex gap-2">
                  <span>•</span> 3 Native Windows APIs
                </li>
                <li className="flex gap-2">
                  <span>•</span> 2 Browser Extension APIs
                </li>
                <li className="flex gap-2">
                  <span>•</span> 3 Cloud Metadata Services
                </li>
              </ul>
              <a href="/api-browser" className="text-purple-600 hover:underline font-semibold">
                Browse APIs →
              </a>
            </div>

            {/* Contributing */}
            <div className="bg-white rounded-lg p-8 card-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🤝 Contributing</h2>
              <p className="text-gray-600 mb-4">
                Guidelines for submitting new APIs and improvements.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2">
                  <span>•</span> Submission Requirements
                </li>
                <li className="flex gap-2">
                  <span>•</span> Quality Standards
                </li>
                <li className="flex gap-2">
                  <span>•</span> Peer Review Process
                </li>
                <li className="flex gap-2">
                  <span>•</span> Code of Conduct
                </li>
                <li className="flex gap-2">
                  <span>•</span> Attribution & Credits
                </li>
              </ul>
              <a href="/contributing" className="text-purple-600 hover:underline font-semibold">
                Read Guidelines →
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg p-8 card-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ FAQ</h2>
              <p className="text-gray-600 mb-4">
                Frequently asked questions about LOLAPI.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex gap-2">
                  <span>•</span> Why Living Off The Land?
                </li>
                <li className="flex gap-2">
                  <span>•</span> How is Risk Calculated?
                </li>
                <li className="flex gap-2">
                  <span>•</span> Difference from LOLBAS
                </li>
                <li className="flex gap-2">
                  <span>•</span> Data Update Frequency
                </li>
                <li className="flex gap-2">
                  <span>•</span> License Information
                </li>
              </ul>
              <a href="/docs/faq" className="text-purple-600 hover:underline font-semibold">
                Read FAQ →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Start</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">For Defenders</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Visit the <a href="/api-browser" className="text-purple-600 hover:underline">API Browser</a></li>
                <li>Search for APIs relevant to your environment</li>
                <li>Review detection strategies for each API</li>
                <li>Implement detection rules in your SIEM</li>
                <li>Test and tune for false positives</li>
              </ol>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">For Researchers</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Clone the repository</li>
                <li>Review the YAML schema and existing entries</li>
                <li>Add new APIs or improve existing ones</li>
                <li>Follow the quality standards</li>
                <li>Submit a pull request</li>
              </ol>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">For Red Teamers</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Review abuse scenarios for your target platform</li>
                <li>Understand detection evasion techniques</li>
                <li>Study risk scores and prevalence data</li>
                <li>Map to MITRE ATT&CK techniques</li>
                <li>Integrate into your tools and playbooks</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">GitHub Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://github.com/TheMagicClaw/LOLAPI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="font-bold text-gray-900 mb-2">Main Repository</h3>
              <p className="text-sm text-gray-600">
                Source code and YAML entries
              </p>
            </a>

            <a
              href="https://github.com/TheMagicClaw/LOLAPI/wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="font-bold text-gray-900 mb-2">Wiki</h3>
              <p className="text-sm text-gray-600">
                Additional guides and resources
              </p>
            </a>

            <a
              href="https://github.com/TheMagicClaw/LOLAPI/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="font-bold text-gray-900 mb-2">Discussions</h3>
              <p className="text-sm text-gray-600">
                Community questions and ideas
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
