'use client'

import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    question: 'What does LOLAPI stand for?',
    answer: 'LOLAPI stands for "Living Off The Land APIs". It refers to the practice of using legitimate, built-in system APIs rather than introducing new tools or binaries to avoid detection.',
  },
  {
    question: 'How is LOLAPI different from LOLBAS?',
    answer: 'LOLBAS (Living Off The Land Binaries and Scripts) focuses on legitimate executables and scripts that can be abused. LOLAPI focuses specifically on APIs - the programmatic interfaces that can be weaponized. While LOLBAS catalogs tools like certutil.exe or PowerShell scripts, LOLAPI catalogs the underlying APIs like System.Diagnostics.Process.Start or Win32_Process.Create that enable these attacks.',
  },
  {
    question: 'Why should I care about LOLAPI?',
    answer: 'Many organizations have deployed WDAC (Windows Defender Application Control) to block LOLBASBin. However, attackers simply shift tactics to abuse legitimate system APIs instead. LOLAPI helps defenders understand, detect, and mitigate these API-based attacks before they become prevalent.',
  },
  {
    question: 'How is the risk score calculated?',
    answer: 'Risk scores are calculated using three factors: (1) Severity - the impact if successfully exploited, (2) Prevalence - how common the API is across Windows systems, and (3) Ease of Abuse - how easily an attacker can weaponize it. The formula is: Risk = Severity × Prevalence × Ease of Abuse. Critical APIs typically score 8-10, High scores 6-7, Medium scores 4-5, and Low scores 1-3.',
  },
  {
    question: 'How often is LOLAPI updated?',
    answer: 'LOLAPI is updated on a rolling basis as new APIs are discovered and documented by the security research community. Community contributions are welcome via GitHub pull requests. Major updates are announced on our social channels.',
  },
  {
    question: 'Can I contribute new APIs?',
    answer: 'Absolutely! We welcome contributions from the community. Please review our Contributing Guide for submission requirements, quality standards, and the peer review process. All submissions must include proper documentation, examples, and detection strategies.',
  },
  {
    question: 'Is LOLAPI data available in machine-readable format?',
    answer: 'Yes! All LOLAPI data is stored in YAML format in our GitHub repository. You can download, parse, and integrate this data into your own tools and platforms. See the GitHub repository for schema documentation.',
  },
  {
    question: 'How do I use LOLAPI for threat detection?',
    answer: 'Use the API Browser to search for relevant APIs in your environment. Review the detection strategies for each API, then implement the recommended Sysmon rules, ETW monitoring, or SIEM queries. Test and tune for false positives in your specific environment.',
  },
  {
    question: 'What about other operating systems?',
    answer: 'Currently, LOLAPI focuses on Windows and Windows-based platforms (.NET, COM, Windows APIs, etc.). We are exploring coverage for macOS, Linux, and cloud platforms in future releases.',
  },
  {
    question: 'Is LOLAPI free?',
    answer: 'Yes, LOLAPI is 100% open source and free to use. It is licensed under a permissive license to encourage adoption and contributions.',
  },
  {
    question: 'How do I report a security vulnerability?',
    answer: 'Please see our Security Policy for responsible disclosure guidelines. Do not disclose vulnerabilities publicly. Contact us through the security policy channels.',
  },
  {
    question: 'Can I use LOLAPI for offensive security research?',
    answer: 'Yes, LOLAPI is designed for security research. We encourage defensive and offensive security researchers to use this data responsibly to improve detection, mitigation, and defense mechanisms. Always obtain proper authorization before testing on systems you do not own.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90">
            Common questions about LOLAPI, how it works, and how to use it.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-purple-600 font-bold transition ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-6">Didn't find your answer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/community">
                <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition cursor-pointer">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="text-lg font-bold mb-2">Join Community</h3>
                  <p className="text-gray-600 text-sm">
                    Ask questions in our community forum or discussions.
                  </p>
                </div>
              </Link>

              <a
                href="https://github.com/TheMagicClaw/LOLAPI/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition cursor-pointer">
                  <div className="text-3xl mb-3">🐛</div>
                  <h3 className="text-lg font-bold mb-2">Report Issue</h3>
                  <p className="text-gray-600 text-sm">
                    Found a bug or have a feature request? Open an issue on GitHub.
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/TheMagicClaw/LOLAPI/discussions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition cursor-pointer">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="text-lg font-bold mb-2">GitHub Discussions</h3>
                  <p className="text-gray-600 text-sm">
                    Participate in GitHub Discussions for in-depth conversations.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
