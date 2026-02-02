#!/usr/bin/env node

/**
 * Generate a TypeScript constants file from YAML files
 * This script reads all YAML files from the yaml/ directory and generates
 * a TypeScript file with all API data for use in the Next.js app.
 */

const fs = require('fs');
const path = require('path');

// Try to require yaml from docs-next node_modules
let yaml;
try {
  yaml = require(path.join(__dirname, '../docs-next/node_modules/yaml'));
} catch (e) {
  console.error('ERROR: yaml module not found. Please run "npm install" in docs-next/');
  process.exit(1);
}

// Paths
const yamlDir = path.join(__dirname, '../yaml');
const outputFile = path.join(__dirname, '../docs-next/lib/api-data.ts');
const publicDir = path.join(__dirname, '../docs-next/public');
const jsonOutputFile = path.join(publicDir, 'api-data.json');

// Category mapping
const categoryMap = {
  'windows-api': 'Windows API',
  'windows-com': 'Windows COM',
  'windows-com-api': 'Windows COM',
  'windows-net': 'Windows .NET',
  'windows-dotnet-api': 'Windows .NET',
  'native-api': 'Native APIs',
  'windows-native-api': 'Native APIs',
  'browser-ext': 'Browser Ext',
  'browser-extension': 'Browser Ext',
  'cloud-services': 'Cloud Services',
  'cloud-metadata': 'Cloud Services',
  'web-api': 'Web APIs',
  'macos-api': 'macOS API',
  'linux-api': 'Linux API',
  'mobile-api': 'Mobile API',
  'powershell': 'PowerShell',
  'scripting': 'Scripting',
  'script-engine': 'Scripting',
  'script-engine-api': 'Scripting',
};

// Risk mapping
const riskMap = {
  'critical': 'Critical',
  'high': 'High',
  'medium': 'Medium',
  'low': 'Low',
};

function mapCategory(yamlCategory) {
  return categoryMap[yamlCategory] || yamlCategory?.replace(/-/g, ' ') || 'Other';
}

function mapRiskSeverity(severity) {
  return riskMap[severity?.toLowerCase()] || 'Medium';
}

// Read all YAML files
const files = fs.readdirSync(yamlDir).filter((file) => file.endsWith('.yaml'));
console.log(`Found ${files.length} YAML files`);

const apis = files
  .map((file) => {
    try {
      const filePath = path.join(yamlDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const data = yaml.parse(fileContent);

      return {
        id: data.id,
        name: data.name,
        category: mapCategory(data.category),
        risk: mapRiskSeverity(data.risk?.severity),
        techniques: (data.references?.techniques || []).filter((t) => t.startsWith('T')),
        description: data.abuse_scenarios?.[0]?.description || 'Weaponized API with abuse scenarios',
      };
    } catch (error) {
      console.error(`Error parsing YAML file ${file}:`, error.message);
      return null;
    }
  })
  .filter((api) => api !== null)
  .sort((a, b) => a.name.localeCompare(b.name));

console.log(`Successfully parsed ${apis.length} APIs`);

// Generate TypeScript file
const tsContent = `// Auto-generated file from YAML data
// Do not edit manually - run 'npm run generate-apis' to regenerate

export interface API {
  id: string
  name: string
  category: string
  risk: string
  techniques: string[]
  description: string
}

export const APIs: API[] = ${JSON.stringify(apis, null, 2)};

export const TOTAL_API_COUNT = ${apis.length};
`;

fs.writeFileSync(outputFile, tsContent, 'utf-8');
console.log(`Generated ${outputFile}`);

// Generate JSON file for static export
// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log(`Created ${publicDir}`);
}

const jsonContent = {
  success: true,
  count: apis.length,
  data: apis,
};

fs.writeFileSync(jsonOutputFile, JSON.stringify(jsonContent, null, 2), 'utf-8');
console.log(`Generated ${jsonOutputFile}`);
