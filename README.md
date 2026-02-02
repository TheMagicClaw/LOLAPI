# LOLAPI: Living Off The Land APIs

**The structured catalog of legitimate system APIs weaponized for attack.**

LOLAPI catalogs real-world abused APIs across Windows, Cloud, and Browser platforms—with detection strategies, mitigation guidance, and red team POCs.

## 🎯 Why LOLAPI?

After organizations deploy WDAC to block LOLBASline binaries, attackers shift to:
- ✅ Reflection-based code execution (.NET System.* namespace)
- ✅ COM/WMI automation (legitimate admin tools)
- ✅ Windows API abuse (kernel32, ntdll, advapi32)
- ✅ Browser extension APIs (storage, messaging, network)
- ✅ Cloud metadata services (Azure, AWS, GCP)

**LOLAPI fills the gap:** Structured catalog of APIs + abuse scenarios + defenses.

## 📊 Coverage

Currently tracking **50+ high-impact APIs** across:

| Category | APIs | Examples |
|----------|------|----------|
| **Windows .NET** | 12 | Process.Start, HttpClient, Reflection APIs, MethodInfo.Invoke |
| **Windows COM** | 11 | WMI, ADSI, Office COM (Outlook, Access, Excel), MSXML, Shell.Application |
| **Windows Native API** | 9 | VirtualAllocEx, CreateRemoteThread, RegOpenKeyEx, SetWindowsHookEx |
| **Script Engines** | 4 | PowerShell, VBScript, WScript.Shell |
| **Browser Extensions** | 2 | Chrome storage.sync, webRequest API |
| **Cloud Metadata** | 3 | AWS EC2, Azure Managed Identity, GCP Metadata |
| **Other APIs** | 9 | TypeConverter, Marshal APIs, NamedPipes, EventLog, etc. |

## 🚀 Quick Start

### Validate All Entries

```bash
python3 bin/validate.py -v
```

### Generate Comparison Report

```bash
python3 bin/compare.py --risk-heatmap
python3 bin/compare.py --by-category
python3 bin/compare.py --technique-distribution
```

### Search APIs by Risk

```bash
python3 bin/compare.py --all | grep -i "critical"
```

## 📁 Structure

```
LOLAPI/
├── yaml/                          # API entries (YAML format)
│   ├── [uuid].yaml               # One API per file
│   └── ...
├── schema/
│   └── lolapi.schema.json        # JSON schema for validation
├── bin/
│   ├── validate.py               # YAML validator
│   ├── compare.py                # Comparison & reporting
│   └── ...
├── detections/
│   ├── sigma/                    # Sigma detection rules
│   ├── splunk/                   # Splunk detection queries
│   └── yara/                     # YARA rules
├── docs/
│   ├── CONTRIBUTING.md
│   ├── DETECTION-GUIDE.md
│   └── MITIGATION-GUIDE.md
└── web/                          # GitHub Pages site
```

## 📝 YAML Entry Format

Each API entry follows this structure:

```yaml
id: 550e8400-e29b-41d4-a716-446655440000
name: "System.Diagnostics.Process.Start"
category: "windows-dotnet-api"
subcategory: "process-execution"

api:
  namespace: "System.Diagnostics"
  class: "Process"
  method: "Start"
  language: ".NET 2.0+"
  documentation: "https://..."

abuse_scenarios:
  - name: "Inline command execution"
    technique_id: "T1059.001"
    description: "Execute arbitrary commands..."
    code_snippet: "Process.Start(\"cmd.exe\", \"/c ...\");"
    detection_difficulty: "easy"
    common_in_campaigns: true

detection:
  - vendor: "Microsoft Defender"
    capability: "Behavior-based detection"
    effectiveness: "medium"
    notes: "Detects suspicious process tree"

mitigation:
  - category: "policy"
    description: "Disable .NET System.Diagnostics via AppLocker"
    feasibility: "medium"

risk:
  severity: "high"
  prevalence: "widespread"
  ease_of_abuse: "easy"
  likelihood_in_real_attacks: 95

references:
  techniques: ["T1059.001"]
  tools: ["Cobalt Strike", "Empire"]
  campaigns:
    - name: "Emotet"
      year: 2023
      source: "https://..."

tags: ["process-execution", "command-line", "widely-abused"]
author: "magicsword-io"
created: "2026-01-31"
verified: true
```

## 🔍 Risk Scoring

Risk Score = (Severity × Ease_of_Abuse × Detection_Difficulty × Likelihood) / 100

Where:
- **Severity**: critical (100), high (75), medium (50), low (25)
- **Ease**: easy (100), medium (50), hard (25)
- **Detection**: hard to detect = higher score (inverted)
- **Likelihood**: 0-100% prevalence in real attacks

## 🛡️ Detection Strategies

By Category:

**Windows .NET APIs:**
- Monitor .NET assembly loading (AppDomain events)
- Track Reflection.Emit and dynamic method creation
- Monitor Process.Start with suspicious arguments

**Windows COM Objects:**
- WMI command-line creation (auditing)
- ADSI bind attempts from non-admin contexts
- Office COM object creation outside Office

**Browser Extension APIs:**
- Monitor extension storage access patterns
- Track inter-extension communication
- Alert on new extension permissions

**Cloud Metadata Services:**
- Block 169.254.169.254 on non-cloud workloads
- Monitor token request patterns
- Alert on metadata service access from non-system processes

## 🤝 Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md)

Quality standards for submissions:
- ✅ All entries have abuse scenario + detection strategy
- ✅ Code snippets are tested and functional
- ✅ YAML validates against schema
- ✅ Real-world campaign references or threat intelligence
- ✅ Clear mitigation guidance

## 📚 Resources

- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [LoLBAS Project](https://lolbas-project.github.io/)
- [HackTricks](https://book.hacktricks.xyz/)
- [Windows API Documentation](https://learn.microsoft.com/en-us/windows/win32/apiindex/)
- [OWASP - Code Injection](https://owasp.org/www-community/attacks/Code_Injection)

## 📄 License

**To be determined** — Will align with magicsword-io conventions

## 🙋 Questions?

- Open an issue on GitHub
- Check [DETECTION-GUIDE.md](docs/DETECTION-GUIDE.md)
- Review example entries in `yaml/`

---

**Status:** v0.5 (50 APIs) | **Target v1.0:** 100+ APIs | **Community:** Actively accepting submissions

### Recent Updates (v0.5)
- ✅ Added 21 new high-impact APIs with real threat actor references
- ✅ Created comprehensive "About" page establishing credibility
- ✅ Enhanced threat intelligence linking (APT groups, malware families, CVEs)
- ✅ Expanded detection strategies across all major platforms (Sysmon, EDR, SIEM)
- ✅ Professional branding and community focus
