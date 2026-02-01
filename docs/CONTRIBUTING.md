# Contributing to LOLAPI

Thank you for considering contributing to LOLAPI! This document provides guidelines for submitting new API entries and improvements.

## 🎯 What We Accept

✅ **New API entries** covering:
- Windows .NET APIs (System.*, Microsoft.* namespaces)
- Windows COM objects (WMI, ADSI, Office, etc.)
- Windows native APIs (kernel32, ntdll, advapi32)
- Browser extension APIs (Chrome, Firefox)
- Cloud metadata services (AWS, Azure, GCP)
- Scripting engines (PowerShell, Python, VBScript)

✅ **Improvements** to existing entries:
- Additional abuse scenarios
- New detection methods
- Mitigation strategies
- Real-world campaign references

✅ **Detection signatures:**
- Sigma rules
- Splunk queries
- YARA patterns

❌ **Out of scope:**
- General malware analysis (use LOLRMM)
- Kernel exploits (use LOLDrivers)
- Physical bypass techniques
- Non-legitimate APIs

## 📋 Quality Standards

All submissions must meet these criteria:

### 1. Abuse Scenario

**✅ Must include:**
- Clear description of how the API is abused
- Specific code snippet (working example)
- MITRE ATT&CK technique ID(s)
- Realistic attack scenario
- Detection difficulty assessment

**Example:**
```yaml
abuse_scenarios:
  - name: "In-memory code execution"
    technique_id: "T1027.011"
    description: "Load and execute .NET assembly from memory without disk I/O"
    code_snippet: |
      var asm = Assembly.Load(assemblyBytes);
      asm.GetType("Namespace.Class")
         .GetMethod("Method")
         .Invoke(null, null);
    detection_difficulty: "hard"
    common_in_campaigns: true
```

### 2. Detection Strategy

**✅ Must propose detection methods** via:
- Behavioral indicators (process tree, API calls, network)
- Forensic artifacts (registry, files, memory)
- Log-based detection (Splunk, Sigma, ELK)
- EDR/SIEM rules

**✅ Be specific:**
- Which tool/platform can detect this?
- What signal to look for?
- False positive rate?
- Real-world blind spots?

### 3. YAML Format

**✅ All entries must:**
- Have valid YAML syntax (test with `validate.py`)
- Include all required fields per schema
- Use proper enum values (severity, ease_of_abuse, etc.)
- Have valid UUID format in filename
- Pass schema validation

### 4. Testing

**✅ Before submitting:**
```bash
# Validate your YAML
python3 bin/validate.py -v

# Check schema compliance
jsonschema validate -i yaml/[uuid].yaml schema/lolapi.schema.json
```

## 🚀 Submission Process

### Step 1: Fork & Branch

```bash
git clone https://github.com/magicsword-io/LOLAPI.git
cd LOLAPI
git checkout -b add-api-[api-name]
```

### Step 2: Create YAML Entry

Generate a UUID:
```bash
python3 -c "import uuid; print(uuid.uuid4())"
```

Create your entry file: `yaml/[uuid].yaml`

Use this template:
```yaml
id: [generated-uuid]
name: "[API Full Name]"
category: "[windows-dotnet-api|windows-com|windows-api|browser-extension|cloud-metadata|script-engine]"
subcategory: "[specific-category]"

api:
  namespace: "[System.* or equivalent]"
  class: "[ClassName]"
  method: "[MethodName]"
  language: "[Language/Runtime]"
  documentation: "[Link to official docs]"

abuse_scenarios:
  - name: "[Abuse scenario name]"
    technique_id: "T[MITRE ID]"
    description: "[Detailed description]"
    code_snippet: |
      [Working code example]
    detection_difficulty: "[easy|medium|hard]"
    common_in_campaigns: [true|false]
    references:
      - "https://..."

detection:
  - vendor: "[Vendor/Tool Name]"
    capability: "[Detection method]"
    effectiveness: "[low|medium|high]"
    notes: "[Implementation details]"

mitigation:
  - category: "[policy|hardening|detection|monitoring]"
    description: "[What the mitigation does]"
    feasibility: "[easy|medium|hard]"

risk:
  severity: "[critical|high|medium|low]"
  prevalence: "[novel|emerging|widespread]"
  ease_of_abuse: "[easy|medium|hard]"
  likelihood_in_real_attacks: [0-100]

references:
  techniques: ["T1059.001", ...]
  tools: ["Cobalt Strike", "Mimikatz", ...]
  campaigns:
    - name: "[Campaign Name]"
      year: [Year]
      source: "[Link to report]"

tags: ["tag1", "tag2", ...]
author: "[Your Name/Handle]"
created: "2026-01-31"
verified: true
notes: "[Optional additional context]"
```

### Step 3: Validate

```bash
python3 bin/validate.py -v
```

### Step 4: Create Pull Request

- **Title:** Add [API Name] entry
- **Description:**
  - What API does this cover?
  - Why is it high-impact?
  - Link to any references/campaigns
  - Detection capabilities provided

**Example PR:**
```markdown
## Add System.Reflection.Assembly.Load Entry

### API
- **Name:** System.Reflection.Assembly.Load
- **Category:** Windows .NET API
- **Impact:** Critical (enables in-memory code execution)

### Abuse Scenario
In-memory .NET assembly loading circumvents disk-based detection.
Used extensively in Emotet, Qbot, and TA542 campaigns.

### Detection
Includes detection strategies for:
- AppDomain assembly loading events
- .NET CLR tracing
- Behavioral analysis

### References
- Emotet SSRF technique (2023)
- https://example.com/threat-report

Fixes #XX
```

### Step 5: Review

Our team will review for:
- ✅ Quality of abuse scenarios
- ✅ Detection feasibility
- ✅ Real-world relevance
- ✅ YAML compliance
- ✅ No duplicates

## 📊 Scoring & Rankings

Entries are ranked by **Risk Score**:

```
Risk Score = (Severity × Ease_of_Abuse × Detection_Difficulty × Likelihood) / 100
```

High-scoring entries (80+) get featured in:
- Risk reports
- Detection guides
- Community highlights

## 🙋 Questions?

- Check existing entries for examples
- Review [DETECTION-GUIDE.md](DETECTION-GUIDE.md)
- Check [lolapi.schema.json](../schema/lolapi.schema.json) for field requirements
- Open an issue with questions

## 📝 Code of Conduct

Please follow these guidelines:
- ✅ Respectful and collaborative
- ✅ Focus on defensive value
- ✅ No commercial/promotional content
- ✅ No personal attacks or spam

---

**Thank you for contributing to LOLAPI!**
