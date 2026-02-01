export default function Contributing() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contributing to LOLAPI</h1>
          <p className="text-lg opacity-90">
            Help us expand the catalog and improve detection strategies
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Contribute</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-blue-900">
              All contributions must follow our quality standards and go through peer review. Thank you for helping improve LOLAPI!
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Add a New API</h3>
          <p className="text-gray-600 mb-4">
            To add a new API to LOLAPI:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Fork the repository</li>
            <li>Create a new YAML file in the <code className="text-purple-600">yaml/</code> directory</li>
            <li>Follow the schema in <code className="text-purple-600">schema/lolapi.schema.json</code></li>
            <li>Validate your entry: <code className="text-purple-600">python3 bin/validate.py -v</code></li>
            <li>Submit a pull request with a clear description</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Quality Standards</h3>
          <p className="text-gray-600 mb-4">
            All submissions must meet these standards:
          </p>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li className="flex gap-3">
              <span>✓</span> <span>API details are accurate and verified</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span> <span>At least one abuse scenario with code example</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span> <span>Detection strategies for each abuse scenario</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span> <span>MITRE ATT&CK technique mapping</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span> <span>Risk assessment with justification</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span> <span>Real-world campaign or threat intelligence references</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span> <span>YAML validates against schema</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Code Examples</h3>
          <p className="text-gray-600 mb-4">
            Code snippets in abuse scenarios must be:
          </p>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Tested and functional</li>
            <li>• Realistic representations of real attacks</li>
            <li>• Properly commented</li>
            <li>• Include context (what it does, how it's detected)</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Detection Strategies</h3>
          <p className="text-gray-600 mb-4">
            Detection strategies should include:
          </p>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Vendor/platform (e.g., Microsoft Defender, Splunk)</li>
            <li>• Specific capability or query</li>
            <li>• Effectiveness assessment (high/medium/low)</li>
            <li>• Notes on false positives or blind spots</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Peer Review Process</h3>
          <p className="text-gray-600 mb-4">
            After you submit a PR:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Automated validation checks run</li>
            <li>Community members review your submission</li>
            <li>Feedback and discussion in the PR</li>
            <li>Revisions may be requested</li>
            <li>Merge once approved</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Other Contribution Types</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📚 Documentation</h3>
              <p className="text-gray-600">
                Improve guides, add examples, or clarify documentation. Submit changes via pull request.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 Detection Rules</h3>
              <p className="text-gray-600">
                Add Sigma rules, Splunk SPL queries, or YARA rules to the detections/ directory.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛠️ Tools & Scripts</h3>
              <p className="text-gray-600">
                Contribute Python tools for analysis, validation, or reporting against LOLAPI data.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🐛 Bug Reports</h3>
              <p className="text-gray-600">
                Found an error? Open a GitHub issue with detailed information about the problem.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Ideas & Discussions</h3>
              <p className="text-gray-600">
                Have an idea? Start a discussion in GitHub Discussions to get feedback from the community.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Code of Conduct</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-900 mb-4">
              We are committed to providing a welcoming and inspiring community for all. Please read and respect our Code of Conduct.
            </p>
            <p className="text-yellow-900">
              Be respectful, inclusive, and professional. Harassment, discrimination, or abusive behavior will not be tolerated.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 card-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Questions?</h3>
              <p className="text-gray-600 mb-4">
                Post in GitHub Discussions or open an issue with your question.
              </p>
              <a
                href="https://github.com/TheMagicClaw/LOLAPI/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-semibold"
              >
                View Discussions →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 card-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Need Help with YAML?</h3>
              <p className="text-gray-600 mb-4">
                Check existing entries in the yaml/ directory for examples and formatting.
              </p>
              <a
                href="https://github.com/TheMagicClaw/LOLAPI/tree/main/yaml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-semibold"
              >
                View Examples →
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Attribution</h2>

          <p className="text-gray-600 mb-4">
            All contributors are credited in the repository. When your contribution is merged:
          </p>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Your GitHub username is added to the entry</li>
            <li>• You're listed in the project contributors</li>
            <li>• Your contribution history is public on GitHub</li>
          </ul>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-12">
            <h3 className="text-lg font-bold text-purple-900 mb-3">Ready to Contribute?</h3>
            <p className="text-purple-900 mb-4">
              Great! Start by forking the repository and reading the README for setup instructions.
            </p>
            <a
              href="https://github.com/TheMagicClaw/LOLAPI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Fork Repository →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
