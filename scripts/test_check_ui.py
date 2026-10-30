import tempfile
import unittest
from pathlib import Path

from check_ui import scan


class CheckUiTests(unittest.TestCase):
    def test_reports_supported_hints_with_location(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / "screen.tsx"
            source.write_text('<a href="#">Open</a>\n<div className="transition-all">x</div>\n', encoding="utf-8")
            findings = scan(Path(directory))
            self.assertEqual([(item["rule"], item["line"]) for item in findings],
                             [("dead-link", 1), ("transition-all", 2)])

    def test_ignores_generated_directories_and_unrelated_files(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "node_modules").mkdir()
            (root / "node_modules" / "bad.css").write_text("transition: all", encoding="utf-8")
            (root / "notes.md").write_text("Lorem ipsum", encoding="utf-8")
            (root / "good.css").write_text("transition: opacity 150ms", encoding="utf-8")
            self.assertEqual(scan(root), [])

    def test_zoom_and_focus_are_hints_not_failures(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / "index.html"
            source.write_text('<meta name="viewport" content="maximum-scale=1">\n'
                              '<style>button {outline: none}</style>', encoding="utf-8")
            self.assertEqual([item["rule"] for item in scan(source)],
                             ["zoom-disabled", "focus-hidden"])

    def test_larger_maximum_scale_is_not_reported(self):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / "index.html"
            source.write_text('<meta name="viewport" content="maximum-scale=1.5">', encoding="utf-8")
            self.assertEqual(scan(source), [])


if __name__ == "__main__":
    unittest.main()
