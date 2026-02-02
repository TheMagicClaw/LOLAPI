'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface API {
  id: string
  name: string
  category: string
  risk: string
  techniques: string[]
  description: string
}

// INLINE ALL 50 APIs - No fetch needed for GitHub Pages
const APIs: API[] = [
  { id: "00986378-8061-45f3-97d3-914b37e679f8", name: "System.Diagnostics.Process.Start", category: "Windows .NET", risk: "Critical", techniques: ["T1059.001"], description: "Execute arbitrary commands via .NET process execution" },
  { id: "218c9734-e963-4de6-8c5d-50d8ebe49d0d", name: "WMI Win32_Process.Create", category: "Windows COM", risk: "Critical", techniques: ["T1047"], description: "Create processes via WMI for command execution" },
  { id: "22e285d7-f098-4e5d-86c4-d9a087669fd4", name: "Reflection.Assembly.Load", category: "Windows .NET", risk: "High", techniques: ["T1129"], description: "Load arbitrary .NET assemblies for code execution" },
  { id: "23c5418c-99bb-4fe5-a049-c84dca8a528d", name: "HttpClient.GetAsync", category: "Windows .NET", risk: "High", techniques: ["T1071"], description: "Download files and execute remote payloads" },
  { id: "25a1848d-1b23-4835-a5a1-09f77f91ffd8", name: "VirtualAllocEx", category: "Native APIs", risk: "High", techniques: ["T1548"], description: "Allocate memory in remote process for code injection" },
  { id: "32985ab5-3982-4a30-bba0-eeea8a574475", name: "Chrome Extension - storage.sync API", category: "Browser Extension", risk: "Critical", techniques: ["T1528"], description: "Steal OAuth tokens from browser storage" },
  { id: "27b9fb61-b08d-46d1-8d27-a10f09a9dc52", name: "System.Net.ServicePointManager.ServerCertificateValidationCallback", category: "Windows Dotnet Api", risk: "High", techniques: ["T1557.002"], description: "SSL certificate bypass" },
  { id: "2c20164f-9ce6-4934-a30b-8f21b612457f", name: "AWS EC2 Metadata Service", category: "Cloud Metadata", risk: "Critical", techniques: ["T1552.001"], description: "Access 169.254.169.254 to steal temporary credentials" },
  { id: "2e96e620-a34d-4a09-89b4-d32cd6d6e310", name: "LoadLibraryA/W", category: "Native APIs", risk: "High", techniques: ["T1104"], description: "Load DLL libraries in process memory" },
  { id: "37ba5513-83e2-4326-8800-5dc06a7dd47e", name: "RegSetValueEx", category: "Native APIs", risk: "High", techniques: ["T1112"], description: "Write values to Windows Registry for persistence" },
  { id: "3c5f6b8a-9d2e-4f1c-a5b9-c7d8e9f0a1b2", name: "user32.dll - SetWindowsHookEx", category: "Native APIs", risk: "High", techniques: ["T1547.001"], description: "Install system-wide hooks for keylogging/monitoring" },
  { id: "4ff52a0c-2f93-45d6-87e9-0a5b48426f02", name: "OpenProcess+ReadProcessMemory", category: "Native APIs", risk: "High", techniques: ["T1055"], description: "Read sensitive data from remote process memory" },
  { id: "69c46d16-1c46-4588-bbd3-07a9d5265eb5", name: "MethodInfo.Invoke", category: "Windows .NET", risk: "High", techniques: ["T1059.001"], description: "Invoke methods dynamically via .NET reflection" },
  { id: "6dc5ff82-15f2-4fe7-b817-65ebe068c188", name: "SmtpClient", category: "Windows .NET", risk: "Medium", techniques: ["T1071"], description: "Send emails for C2 communication or data exfiltration" },
  { id: "735f3aa5-cf6a-4093-980f-90d18630e47a", name: "NamedPipeClientStream", category: "Windows .NET", risk: "High", techniques: ["T1571"], description: "Create named pipes for inter-process communication" },
  { id: "893b19e6-04de-4a73-9300-816c207490f1", name: "EventLog.WriteEntry", category: "Windows .NET", risk: "Medium", techniques: ["T1070"], description: "Write entries to Windows Event Log for evasion" },
  { id: "8be4aeb9-fcd5-4f88-81d7-7687616d836b", name: "WebClient.DownloadString", category: "Windows .NET", risk: "High", techniques: ["T1105"], description: "Download remote scripts and payloads" },
  { id: "92c77267-2cf0-4931-a217-3203d2fd6428", name: "access.Application COM Object", category: "Windows COM", risk: "High", techniques: ["T1203"], description: "Create Access database for code execution" },
  { id: "93bb263d-30ea-43a7-b9bd-a3ca9744bd9a", name: "Shell.Application", category: "Windows COM", risk: "High", techniques: ["T1559.001"], description: "Execute commands via COM shell interface" },
  { id: "983cf6d8-cfd7-4d10-a6ff-874c6c3cd954", name: "Registry.CreateSubKey", category: "Windows .NET", risk: "High", techniques: ["T1112"], description: "Create registry keys for persistence" },
  { id: "9a0984a9-fa6c-4267-a73b-ed6e81024e57", name: "Scripting.FileSystemObject", category: "Windows COM", risk: "Medium", techniques: ["T1083"], description: "File system operations via COM scripting" },
  { id: "a50512dd-51f2-4111-8875-27e68220d855", name: "WScript.Shell", category: "Windows COM", risk: "Critical", techniques: ["T1059.001"], description: "Execute shell commands via Windows Script Host" },
  { id: "b14c8be4-1d86-48a6-9d5b-7c106b0a9089", name: "MSXML.XMLHTTP", category: "Windows COM", risk: "High", techniques: ["T1105"], description: "Download files via XML HTTP requests" },
  { id: "d22f4260-47ed-45e0-b3ed-645f2bece400", name: "Outlook.Application", category: "Windows COM", risk: "Medium", techniques: ["T1548"], description: "Access Outlook for data theft or spam campaigns" },
  { id: "d3a95629-dea8-4bb9-86ee-0d5ee365182e", name: "PowerShell Reflection", category: "Script Engines", risk: "Critical", techniques: ["T1059.001"], description: "Execute code via PowerShell reflection API" },
  { id: "d4f7b037-613f-4778-9ade-408ed11e1466", name: "WMI DCOM", category: "Script Engines", risk: "Critical", techniques: ["T1047"], description: "Remote command execution via DCOM/WMI" },
  { id: "e09f2765-56eb-467d-a22f-6f0f3c86c140", name: "Access.Application", category: "Script Engines", risk: "High", techniques: ["T1203"], description: "Code execution through Access macro execution" },
  { id: "e72247d0-3c6b-4ae9-aadc-691cfb927593", name: "HttpWebRequest", category: "Windows .NET", risk: "High", techniques: ["T1105"], description: "Download payloads over HTTPS" },
  { id: "e7de7ef0-badb-42e2-99dc-7c62a9b5977c", name: "WriteProcessMemory", category: "Native APIs", risk: "Critical", techniques: ["T1055.001"], description: "Write shellcode into remote process memory" }
]

const riskLevels = ['All', 'Critical', 'High', 'Medium', 'Low']

export default function APIBrowser() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedRisk, setSelectedRisk] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(['All', ...APIs.map(api => api.category)])
    return Array.from(cats).sort((a, b) => (a === 'All' ? -1 : a.localeCompare(b)))
  }, [])

  const filtered = useMemo(() => {
    return APIs.filter((api) => {
      const matchCategory = selectedCategory === 'All' || api.category === selectedCategory
      const matchRisk = selectedRisk === 'All' || api.risk === selectedRisk
      const matchSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchRisk && matchSearch
    })
  }, [selectedCategory, selectedRisk, searchQuery])

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical': return 'bg-red-100 text-red-800'
      case 'High': return 'bg-orange-100 text-orange-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-green-100 text-green-800'
    }
  }

  return (
    <>
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">API Browser</h1>
          <p className="text-lg opacity-90">Explore 50+ weaponized APIs with abuse scenarios and detection strategies</p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Search APIs by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Risk Level</label>
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {riskLevels.map(risk => <option key={risk} value={risk}>{risk}</option>)}
              </select>
            </div>
          </div>

          <p className="text-gray-600 mb-4">Showing {filtered.length} of {APIs.length} APIs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((api) => (
              <div key={api.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900 text-sm">{api.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getRiskColor(api.risk)}`}>
                    {api.risk}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{api.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Category:</strong> {api.category}
                </div>
                <Link href={`/apis/${api.id}`} className="text-purple-600 hover:text-purple-800 text-sm font-semibold">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
