export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">LOLAPI</h3>
            <p className="text-gray-400 text-sm">
              Catalog of legitimate system APIs weaponized for attack.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs" className="text-gray-400 hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/getting-started" className="text-gray-400 hover:text-white transition">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="/api-browser" className="text-gray-400 hover:text-white transition">
                  API Browser
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/TheMagicClaw/LOLAPI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TheMagicClaw/LOLAPI/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TheMagicClaw/LOLAPI/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          {/* Related Projects */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">Related</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/TheMagicClaw/LOLDrivers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  LOLDrivers
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TheMagicClaw/LOLRMM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  LOLRMM
                </a>
              </li>
              <li>
                <a
                  href="https://lolbas-project.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  LOLBAS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} magicsword-io. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="/security" className="text-gray-400 hover:text-white transition">
                Security
              </a>
              <a href="/contributing" className="text-gray-400 hover:text-white transition">
                Contributing
              </a>
              <a href="/license" className="text-gray-400 hover:text-white transition">
                License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
