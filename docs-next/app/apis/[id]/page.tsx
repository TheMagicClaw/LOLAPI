import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CompleteAPI, API_DATA } from '@/lib/api-complete-data'

// Generate static params for all APIs
export async function generateStaticParams() {
  return API_DATA.map(api => ({ id: api.id }))
}

interface Props {
  params: Promise<{ id: string }>
}

function getRiskColor(severity: string): string {
  const lower = severity.toLowerCase()
  if (lower.includes('critical')) return 'bg-red-600 text-white'
  if (lower.includes('high')) return 'bg-orange-500 text-white'
  if (lower.includes('medium')) return 'bg-yellow-500 text-white'
  return 'bg-green-500 text-white'
}

function getDifficultyColor(difficulty: string): string {
  const lower = difficulty.toLowerCase()
  if (lower.includes('easy')) return 'bg-green-100 text-green-800'
  if (lower.includes('medium')) return 'bg-yellow-100 text-yellow-800'
  if (lower.includes('hard') || lower.includes('difficult')) return 'bg-red-100 text-red-800'
  return 'bg-gray-100 text-gray-800'
}

function CodeBlock({ code, language = 'plaintext' }: { code: string; language?: string }) {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  )
}

export default async function APIDetail({ params }: Props) {
  const { id } = await params
  const api = API_DATA.find(a => a.id === id)

  if (!api) notFound()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-12 border-b-4 border-purple-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/api-browser"
            className="text-purple-200 hover:text-white mb-6 inline-flex items-center transition"
          >
            <span className="mr-2">←</span> Back to API Browser
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{api.name}</h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`px-4 py-2 rounded-lg text-sm font-bold ${getRiskColor(api.risk.severity)}`}>
              ⚠️ {api.risk.severity} Risk
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-semibold">
              📁 {api.category}
            </span>
            {api.subcategory && (
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-semibold">
                🏷️ {api.subcategory.replace('-', ' ')}
              </span>
            )}
            {api.verified && (
              <span className="bg-green-500 bg-opacity-80 px-4 py-2 rounded-lg text-sm font-semibold">
                ✅ Verified
              </span>
            )}
          </div>

          {api.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-400 border-opacity-30">
              {api.tags.map(tag => (
                <span key={tag} className="bg-purple-700 bg-opacity-50 px-3 py-1 rounded text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* API Details */}
        {(api.api.namespace || api.api.language || api.api.documentation) && (
          <section className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-600">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="text-purple-600 mr-3">🔧</span> API Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {api.api.namespace && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Namespace</h3>
                  <p className="text-gray-600 bg-gray-100 p-3 rounded">{api.api.namespace}</p>
                </div>
              )}
              {api.api.language && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Language</h3>
                  <p className="text-gray-600 bg-gray-100 p-3 rounded">{api.api.language}</p>
                </div>
              )}
              {api.api.class && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Class</h3>
                  <p className="text-gray-600 bg-gray-100 p-3 rounded font-mono text-sm">{api.api.class}</p>
                </div>
              )}
              {api.api.function && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Function</h3>
                  <p className="text-gray-600 bg-gray-100 p-3 rounded font-mono text-sm">{api.api.function}</p>
                </div>
              )}
              {api.api.documentation && (
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-700 mb-2">Official Documentation</h3>
                  <a
                    href={api.api.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline break-all"
                  >
                    {api.api.documentation}
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Risk Assessment */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="text-red-600 mr-3">📊</span> Risk Assessment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Severity</h3>
              <p className={`text-2xl font-bold ${getRiskColor(api.risk.severity)} px-3 py-2 rounded inline-block`}>
                {api.risk.severity}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">Prevalence</h3>
              <p className="text-lg font-semibold text-orange-800 capitalize">{api.risk.prevalence}</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">Ease of Abuse</h3>
              <p className="text-lg font-semibold text-yellow-800 capitalize">{api.risk.ease_of_abuse}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Likelihood in Real Attacks</h3>
              <p className="text-lg font-semibold text-purple-800">{api.risk.likelihood_in_real_attacks}%</p>
            </div>
          </div>
        </section>

        {/* MITRE ATT&CK Techniques */}
        {api.techniques.length > 0 && (
          <section className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="text-blue-600 mr-3">🎯</span> MITRE ATT&CK Techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {api.techniques.map(tech => (
                <a
                  key={tech}
                  href={`https://attack.mitre.org/techniques/${tech.split('.')[0]}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:bg-blue-100 transition cursor-pointer group"
                >
                  <span className="font-mono font-bold text-blue-700 group-hover:text-blue-900">{tech}</span>
                  <p className="text-xs text-gray-500 mt-1">Click to view on MITRE ATT&CK</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Abuse Scenarios */}
        {api.abuse_scenarios.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="text-red-600 mr-3">⚡</span> Abuse Scenarios
            </h2>
            <div className="space-y-6">
              {api.abuse_scenarios.map((scenario, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-red-600">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{scenario.name}</h3>
                      {scenario.technique_id && (
                        <p className="text-sm text-gray-600">
                          <strong>Technique:</strong>{' '}
                          <a
                            href={`https://attack.mitre.org/techniques/${scenario.technique_id.split('.')[0]}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-mono"
                          >
                            {scenario.technique_id}
                          </a>
                        </p>
                      )}
                    </div>
                    {scenario.common_in_campaigns && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                        🚨 Common in Campaigns
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{scenario.description}</p>

                  {scenario.code_snippet && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Code Example:</h4>
                      <CodeBlock code={scenario.code_snippet} />
                    </div>
                  )}

                  {scenario.detection_difficulty && (
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Detection Difficulty: </span>
                      <span className={`text-sm font-bold px-2 py-1 rounded ${getDifficultyColor(scenario.detection_difficulty)}`}>
                        {scenario.detection_difficulty.charAt(0).toUpperCase() + scenario.detection_difficulty.slice(1)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detection Strategies */}
        {api.detection.length > 0 && (
          <section className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="text-green-600 mr-3">🔍</span> Detection Strategies
            </h2>
            <div className="space-y-4">
              {api.detection.map((det, idx) => (
                <div key={idx} className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{det.vendor}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded ${
                      det.effectiveness === 'high' ? 'bg-green-200 text-green-800' :
                      det.effectiveness === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {det.effectiveness?.toUpperCase()} Effectiveness
                    </span>
                  </div>
                  <p className="text-gray-700">{det.notes}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mitigation Strategies */}
        {api.mitigation.length > 0 && (
          <section className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-cyan-600">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="text-cyan-600 mr-3">🛡️</span> Mitigation Strategies
            </h2>
            <div className="space-y-4">
              {api.mitigation.map((mit, idx) => (
                <div key={idx} className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800 capitalize">{mit.category}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded ${
                      mit.feasibility === 'high' || mit.feasibility === 'easy' ? 'bg-green-200 text-green-800' :
                      mit.feasibility === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {mit.feasibility?.toUpperCase()} Feasibility
                    </span>
                  </div>
                  <p className="text-gray-700">{mit.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Threat Intelligence */}
        {(api.references.threat_actors.length > 0 ||
          api.references.malware_families.length > 0 ||
          api.references.tools.length > 0) && (
          <section className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-600">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="text-purple-600 mr-3">🕵️</span> Threat Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Threat Actors */}
              {api.references.threat_actors.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2 text-lg">👥</span> APT Groups / Threat Actors
                  </h3>
                  <div className="space-y-2">
                    {api.references.threat_actors.map((actor, idx) => (
                      <div key={idx} className="bg-red-50 border border-red-200 p-3 rounded">
                        <p className="font-semibold text-red-900">{actor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Malware Families */}
              {api.references.malware_families.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2 text-lg">🦠</span> Malware Families
                  </h3>
                  <div className="space-y-2">
                    {api.references.malware_families.map((family, idx) => (
                      <div key={idx} className="bg-orange-50 border border-orange-200 p-3 rounded">
                        <p className="font-semibold text-orange-900">{family}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools */}
              {api.references.tools.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2 text-lg">🔨</span> Tools
                  </h3>
                  <div className="space-y-2">
                    {api.references.tools.map((tool, idx) => (
                      <div key={idx} className="bg-blue-50 border border-blue-200 p-3 rounded">
                        <p className="font-semibold text-blue-900">{tool}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Metadata */}
        <section className="bg-white rounded-lg shadow-md p-8 border-l-4 border-gray-600">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="text-gray-600 mr-3">📋</span> Metadata
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">API ID</p>
              <p className="font-mono text-sm bg-gray-100 p-3 rounded break-all">{api.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Created</p>
              <p className="text-gray-800 font-semibold">{api.created}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Author</p>
              <p className="text-gray-800 font-semibold">{api.author}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
