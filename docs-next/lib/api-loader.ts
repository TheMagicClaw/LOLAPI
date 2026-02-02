import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

export interface API {
  id: string
  name: string
  category: string
  risk: string
  techniques: string[]
  description: string
  subcategory?: string
  api?: {
    namespace?: string
    language?: string
    documentation?: string
    class?: string
  }
  abuse_scenarios?: Array<{
    name: string
    technique_id: string
    description: string
    code_snippet?: string
    detection_difficulty?: string
    common_in_campaigns?: boolean
  }>
  detection?: Array<{
    vendor: string
    effectiveness: string
    notes: string
  }>
  mitigation?: Array<{
    category: string
    description: string
    feasibility: string
  }>
  risk_details?: {
    severity: string
    prevalence: string
    ease_of_abuse: string
    likelihood_in_real_attacks: number
  }
  references?: {
    techniques: string[]
    tools: string[]
  }
  tags?: string[]
  author?: string
  created?: string
  verified?: boolean
}

/**
 * Load all YAML files from the yaml directory and parse them into API objects
 */
export async function loadAPIs(): Promise<API[]> {
  try {
    // Get the YAML directory path (parent directory of docs-next)
    const yamlDir = path.join(process.cwd(), '..', 'yaml')
    
    // Read all files from the yaml directory
    const files = fs.readdirSync(yamlDir).filter((file) => file.endsWith('.yaml'))
    
    // Parse each YAML file
    const apis: API[] = files
      .map((file) => {
        try {
          const filePath = path.join(yamlDir, file)
          const fileContent = fs.readFileSync(filePath, 'utf-8')
          const data = yaml.parse(fileContent) as any
          
          // Map YAML structure to API interface
          const api: API = {
            id: data.id,
            name: data.name,
            category: mapCategory(data.category),
            risk: mapRiskSeverity(data.risk?.severity),
            techniques: (data.references?.techniques || []).filter((t: string) => t.startsWith('T')),
            description: data.abuse_scenarios?.[0]?.description || 'Weaponized API with abuse scenarios',
            subcategory: data.subcategory,
            api: data.api,
            abuse_scenarios: data.abuse_scenarios,
            detection: data.detection,
            mitigation: data.mitigation,
            risk_details: data.risk,
            references: data.references,
            tags: data.tags,
            author: data.author,
            created: data.created,
            verified: data.verified,
          }
          
          return api
        } catch (error) {
          console.error(`Error parsing YAML file ${file}:`, error)
          return null
        }
      })
      .filter((api): api is API => api !== null)
    
    // Sort by name for consistency
    return apis.sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.error('Error loading APIs:', error)
    return []
  }
}

/**
 * Map category from YAML to display category
 */
function mapCategory(yamlCategory: string): string {
  const categoryMap: Record<string, string> = {
    'windows-api': 'Windows API',
    'windows-com': 'Windows COM',
    'windows-net': 'Windows .NET',
    'native-api': 'Native APIs',
    'browser-ext': 'Browser Ext',
    'cloud-services': 'Cloud Services',
    'web-api': 'Web APIs',
    'macos-api': 'macOS API',
    'linux-api': 'Linux API',
    'mobile-api': 'Mobile API',
    'powershell': 'PowerShell',
    'scripting': 'Scripting',
  }
  
  return categoryMap[yamlCategory] || yamlCategory?.replace(/-/g, ' ') || 'Other'
}

/**
 * Map risk severity from YAML to display risk level
 */
function mapRiskSeverity(severity: string | undefined): string {
  const riskMap: Record<string, string> = {
    'critical': 'Critical',
    'high': 'High',
    'medium': 'Medium',
    'low': 'Low',
  }
  
  return riskMap[severity?.toLowerCase() || ''] || 'Medium'
}
