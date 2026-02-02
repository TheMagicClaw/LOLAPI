export default function License() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">License</h1>
          <p className="text-lg opacity-90">
            LOLAPI is open source and freely available
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">MIT License</h2>

          <p className="text-gray-600 mb-6">
            LOLAPI is released under the MIT License. This is a permissive open source license that allows free use, modification, and distribution with minimal restrictions.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 code-block mb-6 text-sm">
{`MIT License

Copyright (c) 2026 Claw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What This Means</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-3">You Can</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>✓ Use LOLAPI for commercial purposes</li>
                <li>✓ Modify the code and data</li>
                <li>✓ Distribute copies</li>
                <li>✓ Use private copies</li>
                <li>✓ Include in your projects</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">You Must</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>✓ Include the license</li>
                <li>✓ Include the copyright notice</li>
                <li>✓ Document changes made</li>
                <li>✓ Not remove license/copyright</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Attribution</h2>

          <p className="text-gray-600 mb-4">
            While attribution is not legally required by the MIT license, we appreciate when you acknowledge:
          </p>
          <ul className="space-y-2 text-gray-600 mb-8">
            <li>• The LOLAPI project and contributors</li>
            <li>• The original authors and researchers</li>
            <li>• Any modifications you've made</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party Dependencies</h2>

          <p className="text-gray-600 mb-4">
            LOLAPI may use third-party libraries and tools. These have their own licenses:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow">
              <h3 className="font-bold text-gray-900 mb-2">YAML Library</h3>
              <p className="text-gray-600 text-sm">
                Licensed under the MIT License
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow">
              <h3 className="font-bold text-gray-900 mb-2">jsonschema</h3>
              <p className="text-gray-600 text-sm">
                Licensed under the MIT License
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600 card-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Python Standard Library</h3>
              <p className="text-gray-600 text-sm">
                Licensed under the Python Software Foundation License
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Commercial Use</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-blue-900">
              LOLAPI can be freely used in commercial products and services. The MIT license does not restrict commercial use.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Data Attribution</h2>

          <p className="text-gray-600 mb-4">
            Each API entry in LOLAPI includes:
          </p>
          <ul className="space-y-2 text-gray-600 mb-8">
            <li>• Author attribution</li>
            <li>• Creation date</li>
            <li>• References and sources</li>
            <li>• Related CVEs and advisories</li>
          </ul>

          <p className="text-gray-600 mb-8">
            When using specific entries, please credit the original authors and contributors.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Questions About Licensing?</h2>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <p className="text-purple-900 mb-4">
              If you have questions about LOLAPI licensing or need clarification:
            </p>
            <a
              href="https://github.com/TheMagicClaw/LOLAPI/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-purple-600 hover:underline font-semibold"
            >
              Open a GitHub Issue →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">References</h2>

          <ul className="space-y-2 text-gray-600 mb-8">
            <li>
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Official MIT License Text
              </a>
            </li>
            <li>
              <a
                href="https://choosealicense.com/licenses/mit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Choose a License - MIT Explanation
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TheMagicClaw/LOLAPI/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Full License on GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
