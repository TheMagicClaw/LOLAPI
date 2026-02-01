#!/usr/bin/env python3
"""
LOLAPI Comparison Tool - Compare APIs by risk, category, and abuse patterns.

This tool generates comparative analysis across the LOLAPI database.

Usage:
    python compare.py --by-severity
    python compare.py --by-category
    python compare.py --risk-heatmap
    python compare.py --most-abused

"""

import argparse
import sys
from pathlib import Path
from typing import List, Dict, Any
from collections import defaultdict
import yaml


def load_yaml_files(yaml_dir: str) -> List[Dict[str, Any]]:
    """Load all YAML files from directory."""
    entries = []
    yaml_path = Path(yaml_dir)
    
    for yaml_file in sorted(yaml_path.glob('*.yaml')):
        try:
            with open(yaml_file, 'r') as f:
                entry = yaml.safe_load(f)
                entries.append(entry)
        except Exception as e:
            print(f"Warning: Failed to load {yaml_file}: {e}", file=sys.stderr)
    
    return entries


def compare_by_severity(entries: List[Dict[str, Any]]) -> None:
    """Group APIs by severity level."""
    by_severity = defaultdict(list)
    
    for entry in entries:
        severity = entry.get("risk", {}).get("severity", "unknown")
        by_severity[severity].append(entry["name"])
    
    severity_order = ["critical", "high", "medium", "low"]
    
    print("\n📊 APIs Grouped by Severity\n")
    for severity in severity_order:
        if severity in by_severity:
            apis = by_severity[severity]
            print(f"{'🔴' if severity == 'critical' else '🟠' if severity == 'high' else '🟡' if severity == 'medium' else '🟢'} {severity.upper()} ({len(apis)} APIs)")
            for api in sorted(apis):
                print(f"   - {api}")
            print()


def compare_by_category(entries: List[Dict[str, Any]]) -> None:
    """Group APIs by category."""
    by_category = defaultdict(list)
    
    for entry in entries:
        category = entry.get("category", "unknown")
        by_category[category].append(entry["name"])
    
    print("\n📁 APIs Grouped by Category\n")
    for category in sorted(by_category.keys()):
        apis = by_category[category]
        print(f"📦 {category.upper()} ({len(apis)} APIs)")
        for api in sorted(apis):
            print(f"   - {api}")
        print()


def compare_by_subcategory(entries: List[Dict[str, Any]]) -> None:
    """Group APIs by subcategory."""
    by_subcat = defaultdict(list)
    
    for entry in entries:
        subcat = entry.get("subcategory", "unknown")
        by_subcat[subcat].append(entry["name"])
    
    print("\n🏷️  APIs Grouped by Subcategory\n")
    for subcat in sorted(by_subcat.keys()):
        apis = by_subcat[subcat]
        print(f"  {subcat.replace('-', ' ').title()} ({len(apis)} APIs)")
        for api in sorted(apis)[:5]:  # Show first 5
            print(f"    - {api}")
        if len(apis) > 5:
            print(f"    ... and {len(apis) - 5} more")
        print()


def risk_heatmap(entries: List[Dict[str, Any]]) -> None:
    """Generate risk heatmap based on severity + prevalence + ease."""
    print("\n⚡ Risk Heatmap (Score = Severity × Ease × Prevalence)\n")
    
    severity_scores = {"critical": 100, "high": 75, "medium": 50, "low": 25}
    ease_scores = {"easy": 100, "medium": 50, "hard": 25}
    prevalence_scores = {"widespread": 100, "emerging": 50, "novel": 10}
    
    scored_apis = []
    
    for entry in entries:
        risk = entry.get("risk", {})
        severity = severity_scores.get(risk.get("severity"), 50)
        ease = ease_scores.get(risk.get("ease_of_abuse"), 50)
        prevalence = prevalence_scores.get(risk.get("prevalence"), 50)
        
        score = (severity * ease * prevalence) / 10000
        scored_apis.append({
            "name": entry["name"],
            "score": score,
            "severity": risk.get("severity", "unknown")
        })
    
    # Sort by score descending
    scored_apis.sort(key=lambda x: x["score"], reverse=True)
    
    print("Top 15 Highest Risk APIs:\n")
    for i, api in enumerate(scored_apis[:15], 1):
        bar = "█" * int(api["score"] / 5)
        print(f"{i:2d}. {api['score']:5.1f} {bar} {api['name']}")
    print()


def most_abused(entries: List[Dict[str, Any]]) -> None:
    """Show most commonly abused APIs."""
    print("\n🎯 Most Commonly Abused APIs (by campaign prevalence)\n")
    
    campaign_count = defaultdict(int)
    
    for entry in entries:
        for scenario in entry.get("abuse_scenarios", []):
            if scenario.get("common_in_campaigns"):
                campaign_count[entry["name"]] += 1
    
    sorted_apis = sorted(campaign_count.items(), key=lambda x: x[1], reverse=True)
    
    for i, (api, count) in enumerate(sorted_apis[:10], 1):
        print(f"{i:2d}. {api:50s} | Seen in {count} scenario(s)")
    print()


def detection_coverage(entries: List[Dict[str, Any]]) -> None:
    """Show detection coverage statistics."""
    print("\n🛡️  Detection Coverage Statistics\n")
    
    detection_methods = defaultdict(int)
    detection_effectiveness = {"low": 0, "medium": 0, "high": 0}
    
    for entry in entries:
        for detection in entry.get("detection", []):
            vendor = detection.get("vendor", "unknown")
            detection_methods[vendor] += 1
            effectiveness = detection.get("effectiveness", "medium")
            detection_effectiveness[effectiveness] += 1
    
    print("Detection Methods by Vendor:")
    for vendor, count in sorted(detection_methods.items(), key=lambda x: x[1], reverse=True):
        print(f"  - {vendor}: {count}")
    
    print("\nDetection Effectiveness:")
    for eff in ["high", "medium", "low"]:
        count = detection_effectiveness[eff]
        pct = (count / len(entries)) * 100 if entries else 0
        print(f"  - {eff.title()}: {count} APIs ({pct:.1f}%)")
    print()


def technique_distribution(entries: List[Dict[str, Any]]) -> None:
    """Show MITRE ATT&CK technique distribution."""
    print("\n🎓 MITRE ATT&CK Technique Coverage\n")
    
    techniques = defaultdict(int)
    
    for entry in entries:
        for abuse in entry.get("abuse_scenarios", []):
            tech_id = abuse.get("technique_id")
            if tech_id:
                techniques[tech_id] += 1
    
    sorted_techniques = sorted(techniques.items(), key=lambda x: x[1], reverse=True)
    
    print("Top 10 Techniques:")
    for i, (tech, count) in enumerate(sorted_techniques[:10], 1):
        print(f"{i:2d}. {tech:10s} | {count} API(s)")
    print(f"\nTotal Unique Techniques: {len(techniques)}")
    print()


def main() -> int:
    """Main entry point."""
    parser = argparse.ArgumentParser(description="Compare LOLAPI entries")
    parser.add_argument(
        "-y", "--yaml-dir",
        default="yaml",
        help="Directory containing YAML files"
    )
    parser.add_argument(
        "--by-severity",
        action="store_true",
        help="Group by severity level"
    )
    parser.add_argument(
        "--by-category",
        action="store_true",
        help="Group by category"
    )
    parser.add_argument(
        "--by-subcategory",
        action="store_true",
        help="Group by subcategory"
    )
    parser.add_argument(
        "--risk-heatmap",
        action="store_true",
        help="Generate risk heatmap"
    )
    parser.add_argument(
        "--most-abused",
        action="store_true",
        help="Show most abused APIs"
    )
    parser.add_argument(
        "--detection-coverage",
        action="store_true",
        help="Show detection coverage"
    )
    parser.add_argument(
        "--technique-distribution",
        action="store_true",
        help="Show MITRE ATT&CK technique distribution"
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Run all reports"
    )
    
    args = parser.parse_args()
    
    entries = load_yaml_files(args.yaml_dir)
    
    if not entries:
        print("No YAML entries found", file=sys.stderr)
        return 1
    
    # Default to showing all if no specific option chosen
    show_all = args.all or not any([
        args.by_severity,
        args.by_category,
        args.by_subcategory,
        args.risk_heatmap,
        args.most_abused,
        args.detection_coverage,
        args.technique_distribution
    ])
    
    if args.by_severity or show_all:
        compare_by_severity(entries)
    
    if args.by_category or show_all:
        compare_by_category(entries)
    
    if args.by_subcategory or show_all:
        compare_by_subcategory(entries)
    
    if args.risk_heatmap or show_all:
        risk_heatmap(entries)
    
    if args.most_abused or show_all:
        most_abused(entries)
    
    if args.detection_coverage or show_all:
        detection_coverage(entries)
    
    if args.technique_distribution or show_all:
        technique_distribution(entries)
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
