export default function Community() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-lg opacity-90">
            Join the LOLAPI community, contribute, and connect with fellow security researchers
          </p>
        </div>
      </section>

      {/* Main Community Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Get Involved */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">💬 Discussions</h3>
                  <p className="text-gray-600 mb-4">
                    Ask questions, share ideas, and discuss attack techniques with the community.
                  </p>
                  <a
                    href="https://github.com/TheMagicClaw/LOLAPI/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline font-semibold"
                  >
                    Join Discussions →
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🐛 Report Issues</h3>
                  <p className="text-gray-600 mb-4">
                    Found an error or want to suggest an improvement? Open an issue on GitHub.
                  </p>
                  <a
                    href="https://github.com/TheMagicClaw/LOLAPI/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline font-semibold"
                  >
                    Open Issue →
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📝 Contribute</h3>
                  <p className="text-gray-600 mb-4">
                    Have new APIs or detection strategies? We'd love your contributions!
                  </p>
                  <a
                    href="/contributing"
                    className="text-purple-600 hover:underline font-semibold"
                  >
                    Contributing Guide →
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Star on GitHub</h3>
                  <p className="text-gray-600 mb-4">
                    Show your support and help others discover LOLAPI.
                  </p>
                  <a
                    href="https://github.com/TheMagicClaw/LOLAPI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline font-semibold"
                  >
                    Star Repository →
                  </a>
                </div>
              </div>
            </div>

            {/* Community Guidelines */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Guidelines</h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Be Respectful</h3>
                <p className="text-blue-800 text-sm">
                  We're all here to improve security. Treat fellow researchers with respect and assume good intentions.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="text-lg font-bold text-green-900 mb-3">Share Knowledge</h3>
                <p className="text-green-800 text-sm">
                  Help others learn. Share what you know about LOLAPI, security, and threat hunting.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">Responsible Disclosure</h3>
                <p className="text-yellow-800 text-sm">
                  If you discover a critical vulnerability or attack, follow responsible disclosure practices.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                <h3 className="text-lg font-bold text-purple-900 mb-3">Stay On Topic</h3>
                <p className="text-purple-800 text-sm">
                  Keep discussions focused on LOLAPI, Living Off The Land techniques, and detection strategies.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-3">No Spam</h3>
                <p className="text-red-800 text-sm">
                  Don't spam, advertise, or promote unrelated products. Low-quality contributions will be removed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contributors</h2>
          <p className="text-gray-600 text-lg mb-8">
            LOLAPI is built by security researchers and threat hunters from around the world. Thank you to everyone who contributes!
          </p>

          <div className="bg-white rounded-lg p-8 card-shadow">
            <p className="text-gray-600 mb-4">
              Contributors include researchers from major security organizations, threat intelligence firms, and independent security professionals.
            </p>
            <p className="text-gray-600 mb-4">
              Each contribution goes through a peer review process to ensure accuracy and quality.
            </p>
            <a
              href="https://github.com/TheMagicClaw/LOLAPI/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline font-semibold"
            >
              View Contributors on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Projects</h2>
          <p className="text-gray-600 text-lg mb-8">
            LOLAPI is part of a larger ecosystem of security research projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://lolbas-project.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">LOLBAS Project</h3>
              <p className="text-gray-600 mb-4">
                Living Off The Binaries and Scripts - catalog of legitimate binaries that can be weaponized
              </p>
              <p className="text-purple-600 font-semibold">Visit Project →</p>
            </a>

            <a
              href="https://github.com/TheMagicClaw/LOLRMM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">LOLRMM</h3>
              <p className="text-gray-600 mb-4">
                Living Off Living Remote Management - catalog of legitimate remote management tools
              </p>
              <p className="text-purple-600 font-semibold">View Repository →</p>
            </a>

            <a
              href="https://github.com/TheMagicClaw/LOLDrivers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 card-shadow hover:border-purple-500 border-2 border-transparent transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">LOLDrivers</h3>
              <p className="text-gray-600 mb-4">
                Catalog of vulnerable drivers abused for kernel access and privilege escalation
              </p>
              <p className="text-purple-600 font-semibold">View Repository →</p>
            </a>
          </div>
        </div>
      </section>

      {/* Support LOLAPI */}
      <section className="py-16 bg-gradient-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Support LOLAPI</h2>
          <p className="text-lg opacity-90 mb-8">
            LOLAPI is maintained by volunteers in the security community. Here are ways you can support the project:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-bold mb-2">Star on GitHub</h3>
              <p className="opacity-90">
                Show your support and help others find the project
              </p>
            </div>

            <div>
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold mb-2">Contribute</h3>
              <p className="opacity-90">
                Add new APIs, detection strategies, or improve documentation
              </p>
            </div>

            <div>
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold mb-2">Share & Discuss</h3>
              <p className="opacity-90">
                Share LOLAPI with your network and engage in discussions
              </p>
            </div>
          </div>

          <a
            href="https://github.com/TheMagicClaw/LOLAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Visit GitHub Repository →
          </a>
        </div>
      </section>
    </>
  )
}
