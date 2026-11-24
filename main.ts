// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji, 🫂 (people hugging, U+1FAC2), to
// /output/entry.txt and nothing else: no words, no caption, no
// trailing newline. The gate requires 1-8 UTF-8 characters; this
// file is a single grapheme, 4 bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🫂";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, EMOJI, "utf8");
// Verify the write landed byte-exact: a partial or re-encoded write
// would fail the gate, so refuse to exit cleanly unless the file
// reads back as exactly the one emoji and nothing else.
if (readFileSync(outPath, "utf8") !== EMOJI) {
  throw new Error("entry.txt does not contain exactly one emoji");
}
