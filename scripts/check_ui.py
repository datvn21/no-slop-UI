#!/usr/bin/env python3
"""Report source-level UI risks; findings are hints, not a visual audit."""

import argparse
import json
import re
import sys
from pathlib import Path


EXTENSIONS = {".css", ".scss", ".html", ".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte"}
IGNORED_DIRS = {".git", ".next", ".nuxt", "build", "coverage", "dist", "node_modules", "vendor"}
RULES = (
    ("transition-all", re.compile(r"\btransition\s*:\s*all\b|\btransition-all\b", re.I),
     "Animating every property can cause layout jumps; name the properties that actually change."),
    ("focus-hidden", re.compile(r"\boutline\s*:\s*(?:0|none)\b|\boutline-none\b", re.I),
     "Check that this control has an equally visible keyboard focus treatment."),
    ("zoom-disabled", re.compile(r"\buser-scalable\s*=\s*no\b|\bmaximum-scale\s*=\s*1(?:\.0)?(?![\d.])", re.I),
     "Disabling browser zoom can block users who need larger text."),
    ("dead-link", re.compile(r"\bhref\s*=\s*(['\"])#\1", re.I),
     "A # link may be a dead control; check the intended destination or action."),
    ("gradient-text", re.compile(r"\b(?:-webkit-)?background-clip\s*:\s*text\b|\bbg-clip-text\b", re.I),
     "Gradient or image-clipped text may be decorative; check legibility and product reason."),
    ("placeholder-copy", re.compile(r"\blorem ipsum\b", re.I),
     "Placeholder copy should not ship as real product content."),
)


def source_files(path):
    if path.is_file():
        return [path] if path.suffix.lower() in EXTENSIONS else []
    return sorted(p for p in path.rglob("*") if p.is_file()
                  and p.suffix.lower() in EXTENSIONS
                  and not any(part in IGNORED_DIRS for part in p.relative_to(path).parts))


def scan(path):
    findings = []
    for source in source_files(path):
        try:
            lines = source.read_text(encoding="utf-8").splitlines()
        except (UnicodeError, OSError):
            continue
        for number, line in enumerate(lines, 1):
            for rule, pattern, explanation in RULES:
                match = pattern.search(line)
                if match:
                    findings.append({"file": str(source), "line": number,
                                     "column": match.start() + 1, "rule": rule,
                                     "hint": explanation})
    return findings


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("path", type=Path, help="UI source file or directory")
    parser.add_argument("--json", action="store_true", help="machine-readable output")
    args = parser.parse_args()
    if not args.path.exists():
        parser.error(f"path does not exist: {args.path}")
    findings = scan(args.path)
    if args.json:
        print(json.dumps(findings, indent=2))
    else:
        for item in findings:
            print(f"{item['file']}:{item['line']}:{item['column']} [{item['rule']}] {item['hint']}")
        print(f"{len(findings)} source hints. Confirm in context; this is not a visual audit.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
