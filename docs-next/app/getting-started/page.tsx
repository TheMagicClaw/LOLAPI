export default function GettingStarted() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
          <p className="text-lg opacity-90">
            Learn how to explore LOLAPI and use it in your security work
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation & Setup</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-blue-900">
              <strong>Requirements:</strong> Python 3.8+, Git
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Clone the Repository</h3>
          <div className="code-block mb-6">
            git clone https://github.com/TheMagicClaw/LOLAPI.git
            <br />
            cd LOLAPI
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Validate Entries</h3>
          <p className="text-gray-600 mb-4">
            All API entries are stored in YAML format and validated against a JSON schema.
          </p>
          <div className="code-block mb-6">
            python3 bin/validate.py -v
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Search & Analyze</h3>
          <p className="text-gray-600 mb-4">
            Use the compare tool to generate reports and analyze APIs by category or risk.
          </p>
          <div className="code-block mb-6">
            # Generate risk heatmap
            <br />
            python3 bin/compare.py --risk-heatmap
            <br />
            <br />
            # Analyze by category
            <br />
            python3 bin/compare.py --by-category
            <br />
            <br />
            # Find critical APIs
            <br />
            python3 bin/compare.py --all | grep -i "critical"
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding YAML Entries</h2>

          <p className="text-gray-600 mb-4">
            Each API is documented in a structured YAML file. Here's what you'll find:
          </p>

          <div className="code-block mb-6">
{`id: 550e8400-e29b-41d4-a716-446655440000
name: "System.Diagnostics.Process.Start"
category: "windows-dotnet-api"

api:
  namespace: "System.Diagnostics"
  class: "Process"
  method: "Start"
  language: ".NET 2.0+"

abuse_scenarios:
  - name: "Inline command execution"
    technique_id: "T1059.001"
    description: "Execute arbitrary commands..."
    code_snippet: "Process.Start(\\"cmd.exe\\", \\"/c ...\\");"

detection:
  - vendor: "Microsoft Defender"
    capability: "Behavior-based detection"
    effectiveness: "medium"

risk:
  severity: "high"
  prevalence: "widespread"
  ease_of_abuse: "easy"`}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Concepts</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Scoring</h3>
              <p className="text-gray-600 mb-3">
                Risk scores are calculated as:
              </p>
              <div className="code-block text-sm mb-3">
                Risk = (Severity × Ease × Detection_Difficulty × Likelihood) / 100
              </div>
              <p className="text-gray-600 text-sm">
                Higher scores indicate higher threat. Use this to prioritize detection and mitigation efforts.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">MITRE ATT&CK Mapping</h3>
              <p className="text-gray-600">
                All abuse scenarios are mapped to MITRE ATT&CK tactics and techniques. Use these mappings to integrate LOLAPI into your threat modeling and detection frameworks.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Abuse Scenarios</h3>
              <p className="text-gray-600">
                Real-world code examples showing how each API can be weaponized. These include detection difficulty assessments and notes on prevalence in actual attacks.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Detection Strategies</h3>
              <p className="text-gray-600">
                Practical strategies for detecting abuse, including behavioral signals, forensic indicators, and log-based detections specific to each API and platform.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Use Cases</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold text-gray-900">Threat Hunting</h3>
              <p className="text-gray-600">
                Use LOLAPI abuse scenarios and detection strategies to hunt for attacks in your environment.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold text-gray-900">Detection Engineering</h3>
              <p className="text-gray-600">
                Build detections based on documented abuse scenarios and behavioral signals.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold text-gray-900">Security Awareness</h3>
              <p className="text-gray-600">
                Educate teams about weaponized APIs and the attack techniques they enable.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold text-gray-900">Red Teaming</h3>
              <p className="text-gray-600">
                Reference real abuse scenarios and understand detection evasion techniques.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-bold text-gray-900">Risk Assessment</h3>
              <p className="text-gray-600">
                Use risk scores to prioritize which APIs and techniques to focus detection/mitigation efforts on.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Next Steps</h2>

          <ol className="space-y-3 text-gray-600 list-decimal list-inside">
            <li>Explore the <a href="/api-browser" className="text-purple-600 hover:underline">API Browser</a> to find relevant APIs for your platform</li>
            <li>Review <a href="/docs" className="text-purple-600 hover:underline">detailed documentation</a> for specific APIs</li>
            <li>Check out the <a href="https://github.com/TheMagicClaw/LOLAPI/tree/main/detections" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">detection rules</a> (Sigma, Splunk, YARA)</li>
            <li>Join the <a href="/community" className="text-purple-600 hover:underline">community</a> to discuss and contribute</li>
            <li>Read the <a href="/docs" className="text-purple-600 hover:underline">detection and mitigation guides</a></li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-12">
            <p className="text-yellow-900">
              <strong>Tip:</strong> Keep LOLAPI updated as new APIs are discovered and documented. Subscribe to GitHub releases for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a
              href="https://attack.mitre.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="font-bold text-gray-900 mb-2">MITRE ATT&CK</h3>
              <p className="text-sm text-gray-600">
                Framework for tactics and techniques
              </p>
            </a>

            <a
              href="https://lolbas-project.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="font-bold text-gray-900 mb-2">LOLBAS Project</h3>
              <p className="text-sm text-gray-600">
                Living Off The Binaries and Scripts
              </p>
            </a>

            <a
              href="https://github.com/TheMagicClaw/LOLRMM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="font-bold text-gray-900 mb-2">LOLRMM</h3>
              <p className="text-sm text-gray-600">
                Living Off Living Remote Management
              </p>
            </a>

            <a
              href="https://github.com/TheMagicClaw/LOLDrivers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="font-bold text-gray-900 mb-2">LOLDrivers</h3>
              <p className="text-sm text-gray-600">
                Vulnerable drivers exploited in attacks
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
