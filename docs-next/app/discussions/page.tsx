'use client'

import Link from 'next/link'

const discussionTopics = [
  {
    icon: '🤝',
    title: 'Getting Help',
    description: 'Ask questions about LOLAPI, how to use it, and get help from the community.',
    link: 'https://github.com/TheMagicClaw/LOLAPI/discussions/categories/q-a',
  },
  {
    icon: '💡',
    title: 'Ideas & Suggestions',
    description: 'Propose new APIs, features, or improvements to LOLAPI.',
    link: 'https://github.com/TheMagicClaw/LOLAPI/discussions/categories/ideas',
  },
  {
    icon: '📣',
    title: 'Announcements',
    description: 'Stay updated on new releases, major updates, and important news.',
    link: 'https://github.com/TheMagicClaw/LOLAPI/discussions/categories/announcements',
  },
  {
    icon: '🔬',
    title: 'Research & Analysis',
    description: 'Discuss security research, detection methods, and threat analysis.',
    link: 'https://github.com/TheMagicClaw/LOLAPI/discussions/categories/research',
  },
  {
    icon: '🐛',
    title: 'Bug Reports',
    description: 'Report bugs, errors, or issues with LOLAPI data or tooling.',
    link: 'https://github.com/TheMagicClaw/LOLAPI/issues',
  },
  {
    icon: '🔐',
    title: 'Security Concerns',
    description: 'Report security vulnerabilities responsibly. See our Security Policy.',
    link: '/security',
  },
]

const communityGuidelines = [
  {
    title: 'Be Respectful',
    description: 'Treat all community members with respect and professionalism, regardless of their background or experience level.',
  },
  {
    title: 'Stay On Topic',
    description: 'Keep discussions relevant to LOLAPI, security research, and defense. Off-topic posts may be removed.',
  },
  {
    title: 'No Spam or Self-Promotion',
    description: 'Avoid spam, unsolicited promotions, or commercial advertising. Relevant sharing is welcome.',
  },
  {
    title: 'Responsible Disclosure',
    description: 'Report security issues privately. Do not publicly disclose vulnerabilities without a responsible disclosure agreement.',
  },
  {
    title: 'Use For Good',
    description: 'This data should be used for defensive and authorized security research only. Unauthorized access is illegal.',
  },
  {
    title: 'Search Before Posting',
    description: 'Check if your question has already been answered to keep the community organized and efficient.',
  },
  {
    title: 'Provide Context',
    description: 'When asking questions, provide relevant context, error messages, and steps to reproduce the issue.',
    },
  {
    title: 'No Illegal Content',
    description: 'Do not share code, tools, or instructions designed to cause harm or break the law.',
  },
]

const resources = [
  {
    title: 'Documentation',
    description: 'Learn how LOLAPI works and how to use it effectively.',
    link: '/docs',
  },
  {
    title: 'API Browser',
    description: 'Explore the complete catalog of documented APIs.',
    link: '/api-browser',
  },
  {
    title: 'Code Examples',
    description: 'Real-world examples of API abuse and detection.',
    link: '/examples',
  },
  {
    title: 'GitHub Repository',
    description: 'Access source code, YAML data, and contribute improvements.',
    link: 'https://github.com/TheMagicClaw/LOLAPI',
  },
  {
    title: 'Security Policy',
    description: 'Responsible disclosure and security guidelines.',
    link: '/security',
  },
  {
    title: 'Contributing Guide',
    description: 'How to contribute to LOLAPI and submit new APIs.',
    link: '/contributing',
  },
]

export default function Discussions() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Community & Discussions</h1>
          <p className="text-lg opacity-90">
            Join the LOLAPI community to discuss, contribute, and collaborate on making security research better.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Discussion Topics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Discussion Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {discussionTopics.map((topic, idx) => (
                <a
                  key={idx}
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-3">{topic.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <span className="text-purple-600 font-semibold">
                    Join discussion →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="mb-16 bg-blue-50 rounded-lg p-8 border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold mb-8">Community Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityGuidelines.map((guideline, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
                    ✓ {guideline.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {guideline.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Quick Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, idx) => {
                const isExternal = resource.link.startsWith('http')
                const LinkComponent = isExternal ? 'a' : Link

                return (
                  <LinkComponent
                    key={idx}
                    href={resource.link}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={isExternal ? '' : ''}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-purple-500 transition cursor-pointer h-full">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {resource.description}
                      </p>
                    </div>
                  </LinkComponent>
                )
              })}
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 border border-purple-200">
            <h2 className="text-3xl font-bold mb-6">Getting Started in the Community</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-purple-600">1</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Browse Existing Discussions</h3>
                  <p className="text-gray-600 mt-1">
                    Check if your question has already been answered by searching existing discussions on GitHub.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-purple-600">2</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Start a Discussion</h3>
                  <p className="text-gray-600 mt-1">
                    Choose the appropriate category and start a new discussion with your question or idea.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-purple-600">3</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Engage Respectfully</h3>
                  <p className="text-gray-600 mt-1">
                    Follow community guidelines, be respectful, and provide helpful feedback to other members.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-purple-600">4</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Contribute Back</h3>
                  <p className="text-gray-600 mt-1">
                    Share your knowledge, help answer questions, and contribute improvements to LOLAPI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Code of Conduct</h2>
            <p className="text-gray-600 mb-4">
              LOLAPI is committed to providing a safe, inclusive, and respectful community for all participants. We do not tolerate harassment, discrimination, or abusive behavior.
            </p>
            <p className="text-gray-600 mb-6">
              All participants are expected to follow these community guidelines. Violations may result in:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex gap-2">
                <span>•</span> Warning and discussion with the person involved
              </li>
              <li className="flex gap-2">
                <span>•</span> Temporary suspension from discussions
              </li>
              <li className="flex gap-2">
                <span>•</span> Permanent ban from the community
              </li>
            </ul>
            <p className="text-gray-600">
              For concerns about violations, please contact the moderation team through GitHub or the{' '}
              <Link href="/security" className="text-purple-600 hover:underline">
                security policy
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
