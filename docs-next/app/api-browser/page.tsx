'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface API {
  id: string
  name: string
  category: string
  risk: string
  techniques: string[]
  description: string
}

const defaultCategories = ['All', 'Windows API', 'Windows COM', 'Windows .NET', 'Native APIs', 'Browser Ext', 'Cloud Services']
const riskLevels = ['All', 'Critical', 'High', 'Medium', 'Low']

export default function APIBrowser() {
  const [apis, setApis] = useState<API[]>([])
  const [categories, setCategories] = useState<string[]>(defaultCategories)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedRisk, setSelectedRisk] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load APIs from static JSON file (for GitHub Pages) or API route (for server)
  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        setLoading(true)
        let data = null
        let response = null

        // Construct the base URL - use window.location for proper path handling
        const getUrl = (path: string): string => {
          if (typeof window === 'undefined') return path
          const basePath = (window as any).__NEXT_DATA__?.basePath || ''
          return `${basePath}${path}`
        }

        // First, try to fetch the static JSON file (works on GitHub Pages)
        try {
          response = await fetch(getUrl('/api-data.json'))
          if (response.ok) {
            data = await response.json()
            console.log('Loaded APIs from static JSON file')
          }
        } catch (err) {
          console.log('Static JSON file not available, trying API route...')
        }

        // Fallback to API route if static file not available
        if (!data) {
          response = await fetch(getUrl('/api/apis'))
          if (response.ok) {
            data = await response.json()
            console.log('Loaded APIs from API route')
          }
        }

        if (!data || !response?.ok) {
          throw new Error('Failed to fetch APIs from both sources')
        }

        setApis(data.data || [])

        // Extract unique categories from loaded APIs
        const categorySet = new Set<string>(data.data.map((api: API) => api.category))
        const uniqueCategories = ['All', ...(Array.from(categorySet) as string[])]
        setCategories(uniqueCategories.sort((a, b) => (a === 'All' ? -1 : a.localeCompare(b))))
      } catch (err) {
        console.error('Error loading APIs:', err)
        setError('Failed to load APIs. Please refresh the page.')
      } finally {
        setLoading(false)
      }
    }

    fetchAPIs()
  }, [])

  const filtered = apis.filter((api) => {
    const matchCategory = selectedCategory === 'All' || api.category === selectedCategory
    const matchRisk = selectedRisk === 'All' || api.risk === selectedRisk
    const matchSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       api.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchRisk && matchSearch
  })

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical':
        return 'bg-red-100 text-red-800'
      case 'High':
        return 'bg-orange-100 text-orange-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-green-100 text-green-800'
    }
  }

  if (loading) {
    return (
      <>
        <section className="bg-gradient-purple text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">API Browser</h1>
            <p className="text-lg opacity-90">Loading weaponized APIs...</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600">Loading APIs...</p>
          </div>
        </section>
      </>
    )
  }

  if (error) {
    return (
      <>
        <section className="bg-gradient-purple text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">API Browser</h1>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">API Browser</h1>
          <p className="text-lg opacity-90">
            Explore {apis.length}+ weaponized APIs with abuse scenarios and detection strategies
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search APIs by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Risk Filter */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Risk Level</p>
            <div className="flex flex-wrap gap-2">
              {riskLevels.map((risk) => (
                <button
                  key={risk}
                  onClick={() => setSelectedRisk(risk)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedRisk === risk
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {risk}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-6">
            Showing {filtered.length} of {apis.length} APIs
          </p>

          <div className="space-y-4">
            {filtered.length > 0 ? (
              filtered.map((api) => (
                <div key={api.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {api.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getRiskColor(api.risk)}`}>
                          {api.risk}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{api.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                          {api.category}
                        </span>
                        {api.techniques.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/apis/${api.id}`} className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition whitespace-nowrap inline-block">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No APIs found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">How to Use This Browser</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-bold mb-2">Search</h3>
              <p className="text-gray-600">
                Use the search bar to find APIs by name or description.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Filter</h3>
              <p className="text-gray-600">
                Filter by category or risk level to focus on relevant APIs.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold mb-2">Learn</h3>
              <p className="text-gray-600">
                Click "View Details" to see abuse scenarios and detection strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
