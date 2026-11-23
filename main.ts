// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji, 🫂 (people hugging, U+1FAC2), to
// /output/entry.txt and nothing else: no words, no caption, no
// trailing newline. The gate requires 1-8 UTF-8 characters; this
// file is a single grapheme, 4 bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🫂";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
