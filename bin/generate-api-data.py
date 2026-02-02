#!/usr/bin/env python3
"""
Generate complete TypeScript API data from YAML files.
Extracts ALL fields from YAML and formats for React rendering.
"""

import os
import yaml
import json
from pathlib import Path
from typing import Any, Dict, List

YAML_DIR = Path(__file__).parent.parent / "yaml"
OUTPUT_FILE = Path(__file__).parent.parent / "docs-next" / "lib" / "api-complete-data.ts"

def load_yaml_file(file_path: Path) -> Dict[str, Any]:
    """Load and parse a YAML file."""
    with open(file_path, 'r') as f:
        return yaml.safe_load(f)

def extract_api_data(yaml_data: Dict[str, Any]) -> Dict[str, Any]:
    """Extract complete API data from YAML."""
    api_id = yaml_data.get('id', '')
    
    # Basic info
    api_info = {
        'id': api_id,
        'name': yaml_data.get('name', ''),
        'category': yaml_data.get('category', '').replace('-', ' ').title(),
        'subcategory': yaml_data.get('subcategory', ''),
    }
    
    # Risk info
    risk_data = yaml_data.get('risk', {})
    if isinstance(risk_data, dict):
        api_info['risk'] = {
            'severity': risk_data.get('severity', 'Unknown').capitalize(),
            'prevalence': risk_data.get('prevalence', ''),
            'ease_of_abuse': risk_data.get('ease_of_abuse', ''),
            'likelihood_in_real_attacks': risk_data.get('likelihood_in_real_attacks', 0),
        }
    
    # API details
    api_detail = yaml_data.get('api', {})
    if isinstance(api_detail, dict):
        api_info['api'] = {
            'namespace': api_detail.get('namespace', ''),
            'language': api_detail.get('language', ''),
            'documentation': api_detail.get('documentation', ''),
            'class': api_detail.get('class', ''),
            'function': api_detail.get('function', ''),
        }
    
    # Techniques
    techniques = yaml_data.get('references', {}).get('techniques', [])
    if not techniques:
        # Try root level techniques
        techniques = yaml_data.get('techniques', [])
    api_info['techniques'] = techniques
    
    # Abuse scenarios with full details
    abuse_scenarios = yaml_data.get('abuse_scenarios', [])
    api_info['abuse_scenarios'] = []
    if isinstance(abuse_scenarios, list):
        for scenario in abuse_scenarios:
            if isinstance(scenario, dict):
                api_info['abuse_scenarios'].append({
                    'name': scenario.get('name', ''),
                    'technique_id': scenario.get('technique_id', ''),
                    'description': scenario.get('description', ''),
                    'code_snippet': scenario.get('code_snippet', ''),
                    'detection_difficulty': scenario.get('detection_difficulty', ''),
                    'common_in_campaigns': scenario.get('common_in_campaigns', False),
                })
    
    # Detection strategies
    detection = yaml_data.get('detection', [])
    api_info['detection'] = []
    if isinstance(detection, list):
        for det in detection:
            if isinstance(det, dict):
                api_info['detection'].append({
                    'vendor': det.get('vendor', ''),
                    'effectiveness': det.get('effectiveness', ''),
                    'notes': det.get('notes', ''),
                })
    
    # Mitigation strategies
    mitigation = yaml_data.get('mitigation', [])
    api_info['mitigation'] = []
    if isinstance(mitigation, list):
        for mit in mitigation:
            if isinstance(mit, dict):
                api_info['mitigation'].append({
                    'category': mit.get('category', ''),
                    'description': mit.get('description', ''),
                    'feasibility': mit.get('feasibility', ''),
                })
    
    # References and threat intel
    references = yaml_data.get('references', {})
    if isinstance(references, dict):
        api_info['references'] = {
            'threat_actors': references.get('threat_actors', []),
            'malware_families': references.get('malware_families', []),
            'tools': references.get('tools', []),
        }
    else:
        api_info['references'] = {
            'threat_actors': [],
            'malware_families': [],
            'tools': [],
        }
    
    # Tags
    api_info['tags'] = yaml_data.get('tags', [])
    
    # Metadata
    api_info['author'] = yaml_data.get('author', '')
    api_info['created'] = yaml_data.get('created', '')
    api_info['verified'] = yaml_data.get('verified', False)
    
    return api_info

def generate_typescript_file(apis_data: List[Dict[str, Any]]) -> str:
    """Generate TypeScript file content."""
    
    # Convert to safe JSON
    apis_json = json.dumps(apis_data, indent=2, ensure_ascii=False)
    
    ts_content = """// Auto-generated file from YAML data - DO NOT EDIT MANUALLY
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

export const API_DATA: CompleteAPI[] = """ + apis_json + """;

export function getAPIById(id: string): CompleteAPI | undefined {
  return API_DATA.find(api => api.id === id);
}

export function getAllAPIs(): CompleteAPI[] {
  return API_DATA;
}
"""
    
    return ts_content

def main():
    """Main function to generate TypeScript data file."""
    
    if not YAML_DIR.exists():
        print(f"Error: YAML directory not found: {YAML_DIR}")
        return False
    
    # Load all YAML files
    apis_data = []
    yaml_files = sorted(YAML_DIR.glob("*.yaml"))
    
    print(f"Found {len(yaml_files)} YAML files in {YAML_DIR}")
    
    for yaml_file in yaml_files:
        try:
            yaml_data = load_yaml_file(yaml_file)
            api_data = extract_api_data(yaml_data)
            apis_data.append(api_data)
            print(f"✓ Extracted: {api_data['name']} ({api_data['id'][:8]}...)")
        except Exception as e:
            print(f"✗ Error processing {yaml_file.name}: {e}")
    
    # Sort by name for consistency
    apis_data.sort(key=lambda x: x['name'])
    
    # Generate TypeScript content
    ts_content = generate_typescript_file(apis_data)
    
    # Ensure output directory exists
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    # Write TypeScript file
    with open(OUTPUT_FILE, 'w') as f:
        f.write(ts_content)
    
    print(f"\n✓ Generated TypeScript data file: {OUTPUT_FILE}")
    print(f"  Total APIs: {len(apis_data)}")
    
    return True

if __name__ == '__main__':
    success = main()
    exit(0 if success else 1)
