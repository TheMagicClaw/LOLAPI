import Link from 'next/link'
import { notFound } from 'next/navigation'

// SAME APIs from api-browser - keep in sync!
const APIs = [
  { id: "00986378-8061-45f3-97d3-914b37e679f8", name: "System.Diagnostics.Process.Start", category: "Windows .NET", risk: "Critical", techniques: ["T1059.001"], description: "Execute arbitrary commands via .NET process execution", full_description: "This .NET API allows direct process execution from C# code, enabling attackers to run arbitrary commands on the system." },
  { id: "218c9734-e963-4de6-8c5d-50d8ebe49d0d", name: "WMI Win32_Process.Create", category: "Windows COM", risk: "Critical", techniques: ["T1047"], description: "Create processes via WMI for command execution", full_description: "Windows Management Instrumentation allows remote command execution via COM interfaces." },
  { id: "22e285d7-f098-4e5d-86c4-d9a087669fd4", name: "Reflection.Assembly.Load", category: "Windows .NET", risk: "High", techniques: ["T1129"], description: "Load arbitrary .NET assemblies for code execution", full_description: "Dynamic loading of .NET assemblies enables in-memory code execution without writing to disk." },
  { id: "23c5418c-99bb-4fe5-a049-c84dca8a528d", name: "HttpClient.GetAsync", category: "Windows .NET", risk: "High", techniques: ["T1071"], description: "Download files and execute remote payloads", full_description: "HTTP-based file download for payload staging." },
  { id: "25a1848d-1b23-4835-a5a1-09f77f91ffd8", name: "VirtualAllocEx", category: "Native APIs", risk: "High", techniques: ["T1548"], description: "Allocate memory in remote process for code injection", full_description: "Low-level memory allocation for process injection attacks." },
  { id: "27b9fb61-b08d-46d1-8d27-a10f09a9dc52", name: "Chrome storage.sync", category: "Browser Ext", risk: "Medium", techniques: ["T1133"], description: "Persist data in browser storage across restarts", full_description: "Browser extension persistence mechanism." },
  { id: "2c20164f-9ce6-4934-a30b-8f21b612457f", name: "CreateRemoteThread", category: "Native APIs", risk: "Critical", techniques: ["T1055.001"], description: "Create thread in remote process for code injection", full_description: "Classic Windows API for process injection." },
  { id: "2e96e620-a34d-4a09-89b4-d32cd6d6e310", name: "LoadLibraryA/W", category: "Native APIs", risk: "High", techniques: ["T1104"], description: "Load DLL libraries in process memory", full_description: "Dynamic library loading." },
  { id: "32985ab5-3982-4a30-bba0-eeea8a574475", name: "GetProcAddress", category: "Native APIs", risk: "High", techniques: ["T1547.001"], description: "Retrieve function addresses from loaded libraries", full_description: "Function pointer retrieval." },
  { id: "37ba5513-83e2-4326-8800-5dc06a7dd47e", name: "RegSetValueEx", category: "Native APIs", risk: "High", techniques: ["T1112"], description: "Write values to Windows Registry for persistence", full_description: "Registry persistence." },
  { id: "3c5f6b8a-9d2e-4f1c-a5b9-c7d8e9f0a1b2", name: "SetWindowsHookEx", category: "Native APIs", risk: "High", techniques: ["T1547.001"], description: "Install system-wide hooks for keylogging/monitoring", full_description: "Keylogging and monitoring via hooks." },
  { id: "4ff52a0c-2f93-45d6-87e9-0a5b48426f02", name: "OpenProcess+ReadProcessMemory", category: "Native APIs", risk: "High", techniques: ["T1055"], description: "Read sensitive data from remote process memory", full_description: "Memory extraction attacks." },
  { id: "69c46d16-1c46-4588-bbd3-07a9d5265eb5", name: "MethodInfo.Invoke", category: "Windows .NET", risk: "High", techniques: ["T1059.001"], description: "Invoke methods dynamically via .NET reflection", full_description: ".NET dynamic method invocation." },
  { id: "6dc5ff82-15f2-4fe7-b817-65ebe068c188", name: "SmtpClient", category: "Windows .NET", risk: "Medium", techniques: ["T1071"], description: "Send emails for C2 communication or data exfiltration", full_description: "Email-based C2 channels." },
  { id: "735f3aa5-cf6a-4093-980f-90d18630e47a", name: "NamedPipeClientStream", category: "Windows .NET", risk: "High", techniques: ["T1571"], description: "Create named pipes for inter-process communication", full_description: "IPC via named pipes." },
  { id: "893b19e6-04de-4a73-9300-816c207490f1", name: "EventLog.WriteEntry", category: "Windows .NET", risk: "Medium", techniques: ["T1070"], description: "Write entries to Windows Event Log for evasion", full_description: "Log manipulation." },
  { id: "8be4aeb9-fcd5-4f88-81d7-7687616d836b", name: "WebClient.DownloadString", category: "Windows .NET", risk: "High", techniques: ["T1105"], description: "Download remote scripts and payloads", full_description: "Script download." },
  { id: "92c77267-2cf0-4931-a217-3203d2fd6428", name: "access.Application COM Object", category: "Windows COM", risk: "High", techniques: ["T1203"], description: "Create Access database for code execution", full_description: "Access macro execution." },
  { id: "93bb263d-30ea-43a7-b9bd-a3ca9744bd9a", name: "Shell.Application", category: "Windows COM", risk: "High", techniques: ["T1559.001"], description: "Execute commands via COM shell interface", full_description: "COM-based command execution." },
  { id: "983cf6d8-cfd7-4d10-a6ff-874c6c3cd954", name: "Registry.CreateSubKey", category: "Windows .NET", risk: "High", techniques: ["T1112"], description: "Create registry keys for persistence", full_description: ".NET registry manipulation." },
  { id: "9a0984a9-fa6c-4267-a73b-ed6e81024e57", name: "Scripting.FileSystemObject", category: "Windows COM", risk: "Medium", techniques: ["T1083"], description: "File system operations via COM scripting", full_description: "COM file system access." },
  { id: "a50512dd-51f2-4111-8875-27e68220d855", name: "WScript.Shell", category: "Windows COM", risk: "Critical", techniques: ["T1059.001"], description: "Execute shell commands via Windows Script Host", full_description: "WSH command execution." },
  { id: "b14c8be4-1d86-48a6-9d5b-7c106b0a9089", name: "MSXML.XMLHTTP", category: "Windows COM", risk: "High", techniques: ["T1105"], description: "Download files via XML HTTP requests", full_description: "XML HTTP downloads." },
  { id: "d22f4260-47ed-45e0-b3ed-645f2bece400", name: "Outlook.Application", category: "Windows COM", risk: "Medium", techniques: ["T1548"], description: "Access Outlook for data theft or spam campaigns", full_description: "Email application access." },
  { id: "d3a95629-dea8-4bb9-86ee-0d5ee365182e", name: "PowerShell Reflection", category: "Script Engines", risk: "Critical", techniques: ["T1059.001"], description: "Execute code via PowerShell reflection API", full_description: "PowerShell reflection attacks." },
  { id: "d4f7b037-613f-4778-9ade-408ed11e1466", name: "WMI DCOM", category: "Script Engines", risk: "Critical", techniques: ["T1047"], description: "Remote command execution via DCOM/WMI", full_description: "Distributed COM execution." },
  { id: "e09f2765-56eb-467d-a22f-6f0f3c86c140", name: "Access.Application", category: "Script Engines", risk: "High", techniques: ["T1203"], description: "Code execution through Access macro execution", full_description: "Access macro abuse." },
  { id: "e72247d0-3c6b-4ae9-aadc-691cfb927593", name: "HttpWebRequest", category: "Windows .NET", risk: "High", techniques: ["T1105"], description: "Download payloads over HTTPS", full_description: "HTTPS payload download." },
  { id: "e7de7ef0-badb-42e2-99dc-7c62a9b5977c", name: "WriteProcessMemory", category: "Native APIs", risk: "Critical", techniques: ["T1055.001"], description: "Write shellcode into remote process memory", full_description: "Memory write attacks." }
]

// Generate static params for all APIs
export async function generateStaticParams() {
  return APIs.map(api => ({ id: api.id }))
}

interface Props {
  params: Promise<{ id: string }>
}

export default async function APIDetail({ params }: Props) {
  const { id } = await params
  const api = APIs.find(a => a.id === id)

  if (!api) notFound()

  return (
    <>
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/api-browser" className="text-purple-200 hover:text-white mb-4 inline-block">
            ← Back to API Browser
          </Link>
          <h1 className="text-4xl font-bold mt-4 mb-2">{api.name}</h1>
          <div className="flex gap-3 flex-wrap">
            <span className={`px-3 py-1 rounded text-sm font-semibold ${
              api.risk === 'Critical' ? 'bg-red-400' :
              api.risk === 'High' ? 'bg-orange-400' :
              api.risk === 'Medium' ? 'bg-yellow-400' :
              'bg-green-400'
            }`}>
              {api.risk}
            </span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">{api.category}</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none">
            <h2>Overview</h2>
            <p>{api.full_description}</p>

            <h2>MITRE ATT&CK Techniques</h2>
            <ul>
              {api.techniques.map(tech => (
                <li key={tech}><code>{tech}</code></li>
              ))}
            </ul>

            <h2>Details</h2>
            <div className="bg-gray-100 p-4 rounded mt-4">
              <p><strong>Name:</strong> {api.name}</p>
              <p><strong>Category:</strong> {api.category}</p>
              <p><strong>Risk Level:</strong> {api.risk}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
