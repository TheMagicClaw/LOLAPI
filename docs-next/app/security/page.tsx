export default function Security() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Security Policy</h1>
          <p className="text-lg opacity-90">
            Responsible disclosure and security guidelines for LOLAPI
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reporting Security Issues</h2>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-lg font-bold text-red-900 mb-2">Do Not Open Public Issues</h3>
            <p className="text-red-800">
              If you discover a security vulnerability, <strong>do not</strong> open a public GitHub issue. Follow responsible disclosure guidelines instead.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Report</h3>

          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow mb-6">
            <p className="text-gray-600 mb-4">
              Please report security vulnerabilities to the LOLAPI security team:
            </p>
            <p className="font-mono text-purple-600 mb-2">
              security@magicsword-io
            </p>
            <p className="text-gray-600 text-sm">
              Include detailed information about the vulnerability and any proof-of-concept code.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Response Timeline</h3>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="text-2xl">📅</div>
              <div>
                <h4 className="font-bold text-gray-900">Initial Response</h4>
                <p className="text-gray-600">Within 48 hours of report submission</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">🔍</div>
              <div>
                <h4 className="font-bold text-gray-900">Investigation</h4>
                <p className="text-gray-600">We will investigate and verify the vulnerability</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">🔧</div>
              <div>
                <h4 className="font-bold text-gray-900">Fix & Release</h4>
                <p className="text-gray-600">We aim to fix critical issues within 7 days</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">📢</div>
              <div>
                <h4 className="font-bold text-gray-900">Disclosure</h4>
                <p className="text-gray-600">Public disclosure after fix is released</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Considerations</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Integrity</h3>
              <p className="text-gray-600">
                LOLAPI entries are versioned and tracked in Git. All changes are auditable and reversible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Code Examples</h3>
              <p className="text-gray-600">
                Abuse scenarios contain real code examples for educational and research purposes. These are not exploits, but demonstrations of attack techniques.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Responsible Use</h3>
              <p className="text-gray-600">
                LOLAPI is intended for defenders, researchers, and authorized red teamers. Unauthorized access or use of systems is illegal.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detection Purpose</h3>
              <p className="text-gray-600">
                Detection strategies in LOLAPI are designed to help organizations defend against abuse of legitimate APIs.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Scope of Responsible Disclosure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">In Scope</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• YAML schema or validation issues</li>
                <li>• Website/documentation vulnerabilities</li>
                <li>• Authentication/access control issues</li>
                <li>• Information disclosure</li>
                <li>• Data integrity issues</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Out of Scope</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Issues in third-party dependencies</li>
                <li>• Reports without evidence</li>
                <li>• Social engineering</li>
                <li>• Spam or low-quality reports</li>
                <li>• Issues already known/public</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Legal Safe Harbor</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-blue-900 mb-4">
              We will not pursue legal action against researchers who:
            </p>
            <ul className="space-y-2 text-blue-800">
              <li>• Report vulnerabilities in good faith</li>
              <li>• Avoid violating any laws</li>
              <li>• Do not access unauthorized data</li>
              <li>• Do not disrupt services</li>
              <li>• Follow responsible disclosure practices</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Acknowledgment</h2>

          <p className="text-gray-600 mb-4">
            Researchers who responsibly disclose vulnerabilities may be acknowledged in the SECURITY_ADVISORIES file and on the website if desired.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">PGP Key</h2>

          <p className="text-gray-600 mb-4">
            For sensitive communications, you can encrypt your message with our PGP key:
          </p>

          <div className="code-block text-sm mb-6">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----
[PGP Key Here]
-----END PGP PUBLIC KEY BLOCK-----`}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-12">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">Questions?</h3>
            <p className="text-yellow-800 mb-4">
              If you have questions about this security policy, please contact:
            </p>
            <p className="font-mono text-yellow-800">
              security@magicsword-io
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
