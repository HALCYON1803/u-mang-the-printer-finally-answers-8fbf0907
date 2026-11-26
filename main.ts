// The Printer Finally Answers — one line, in the printer's own voice.
// makefun anchor ed051b3613f0a0a777d7333507785c5ec01ec6da round 34286246

import { mkdirSync, writeFileSync } from "node:fs";

// The line: 12,846 perfect sheets, one jam, and the human's answer is a thump.
// The joke is flat machine arithmetic — the printer keeps count, we don't —
// and the payoff lands on the last four words, in a single read.
const LINE =
  "Sheet 12,847 jammed — the first one in 12,846 — and you hit me for it.";

function writeEntry(line: string): void {
  const outDir = "/output";
  // Create /output if missing; never remove the directory itself.
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
}

writeEntry(LINE);
