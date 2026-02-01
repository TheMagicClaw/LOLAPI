#!/usr/bin/env python3
"""
LOLAPI YAML Validator - Validates entries against JSON schema.

This script validates all YAML files in the LOLAPI database against the
official schema. It checks:
  - Valid YAML syntax
  - Required fields
  - Field types and formats
  - UUID format in filename matches 'id' field
  - Enum values are valid
  - URLs are properly formatted

Usage:
    python validate.py [-y YAML_DIR] [-s SCHEMA_FILE] [-v]

Exit codes:
    0: All files valid
    1: Validation errors found
    2: Missing schema or YAML directory
"""

import argparse
import json
import sys
from pathlib import Path
from typing import List, Tuple, Dict, Any
import yaml
import jsonschema


def load_schema(schema_file: str) -> Dict[str, Any]:
    """Load JSON schema from file.
    
    Args:
        schema_file: Path to the JSON schema file.
        
    Returns:
        Parsed JSON schema as dictionary.
        
    Raises:
        FileNotFoundError: If schema file doesn't exist.
        json.JSONDecodeError: If schema is invalid JSON.
    """
    schema_path = Path(schema_file)
    if not schema_path.exists():
        raise FileNotFoundError(f"Schema file not found: {schema_file}")
    
    with open(schema_path, 'r') as f:
        return json.load(f)


def validate_yaml_file(
    yaml_file: Path,
    schema: Dict[str, Any],
    verbose: bool = False
) -> Tuple[bool, List[str]]:
    """Validate a single YAML file against schema.
    
    Args:
        yaml_file: Path to YAML file.
        schema: JSON schema dictionary.
        verbose: Whether to print verbose output.
        
    Returns:
        Tuple of (is_valid, error_messages).
    """
    errors: List[str] = []
    
    # Load YAML
    try:
        with open(yaml_file, 'r') as f:
            data = yaml.safe_load(f)
    except yaml.YAMLError as e:
        errors.append(f"YAML Syntax Error: {e}")
        return False, errors
    except FileNotFoundError as e:
        errors.append(f"File not found: {e}")
        return False, errors
    
    if not isinstance(data, dict):
        errors.append("YAML must contain a dictionary at root level")
        return False, errors
    
    # Check filename matches UUID
    if 'id' in data:
        filename_uuid = yaml_file.stem
        data_uuid = data['id']
        if filename_uuid != data_uuid:
            errors.append(
                f"Filename UUID ({filename_uuid}) does not match 'id' field ({data_uuid})"
            )
    
    # Validate against schema
    try:
        jsonschema.validate(instance=data, schema=schema)
    except jsonschema.ValidationError as e:
        errors.append(f"Schema Validation Error: {e.message} (at {e.path})")
    except jsonschema.SchemaError as e:
        errors.append(f"Schema Error: {e.message}")
    
    if verbose and not errors:
        print(f"✓ Valid: {yaml_file.name}")
    
    return len(errors) == 0, errors


def validate_directory(
    yaml_dir: str,
    schema_file: str,
    verbose: bool = False
) -> Tuple[bool, List[str]]:
    """Validate all YAML files in a directory.
    
    Args:
        yaml_dir: Path to directory containing YAML files.
        schema_file: Path to JSON schema file.
        verbose: Whether to print verbose output.
        
    Returns:
        Tuple of (all_valid, all_errors).
    """
    try:
        schema = load_schema(schema_file)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error loading schema: {e}", file=sys.stderr)
        return False, [str(e)]
    
    yaml_path = Path(yaml_dir)
    if not yaml_path.exists():
        error_msg = f"YAML directory not found: {yaml_dir}"
        print(f"Error: {error_msg}", file=sys.stderr)
        return False, [error_msg]
    
    yaml_files = sorted(yaml_path.glob('*.yaml')) + sorted(yaml_path.glob('*.yml'))
    
    if not yaml_files:
        error_msg = f"No YAML files found in {yaml_dir}"
        print(f"Warning: {error_msg}", file=sys.stderr)
        return True, []
    
    all_errors: List[str] = []
    valid_count = 0
    
    if verbose:
        print(f"Validating {len(yaml_files)} YAML files...")
    
    for yaml_file in yaml_files:
        is_valid, errors = validate_yaml_file(yaml_file, schema, verbose)
        if is_valid:
            valid_count += 1
        else:
            for error in errors:
                all_errors.append(f"{yaml_file.name}: {error}")
    
    if verbose:
        print(f"\nValidation Summary: {valid_count}/{len(yaml_files)} files valid")
    
    return len(all_errors) == 0, all_errors


def main() -> int:
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description="Validate LOLAPI YAML files against schema"
    )
    parser.add_argument(
        "-y", "--yaml-dir",
        default="yaml",
        help="Directory containing YAML files (default: yaml)"
    )
    parser.add_argument(
        "-s", "--schema-file",
        default="schema/lolapi.schema.json",
        help="Path to JSON schema file (default: schema/lolapi.schema.json)"
    )
    parser.add_argument(
        "-v", "--verbose",
        action="store_true",
        help="Verbose output"
    )
    
    args = parser.parse_args()
    
    is_valid, errors = validate_directory(
        args.yaml_dir,
        args.schema_file,
        args.verbose
    )
    
    if errors:
        print("\n❌ Validation Errors Found:\n", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 1
    
    if args.verbose or not is_valid:
        print("✓ All files valid!", file=sys.stdout)
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
