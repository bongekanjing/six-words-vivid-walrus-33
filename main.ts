// Six Words, One Story — "His lunchbox came home still full."
//
// The turn sits in the last two words. "Came home" lets an ordinary object
// travel a route that its owner no longer does, and "still full" then closes
// the door: the food was packed, carried out, and never eaten. The story never
// names the man, the job, or what happened, because the reader supplies all
// three from a lunchbox that returned and a man who did not.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** Complete story, exactly six words, no trailing newline. */
const STORY = "His lunchbox came home still full.";

const WORD_COUNT = 6;
const MIN_CHARS = 1;
const MAX_CHARS = 60;

/** Splits on Unicode whitespace, dropping empty tokens, so stray spacing is caught. */
function words(text: string): string[] {
  return text.split(/\s+/u).filter((token) => token.length > 0);
}

/**
 * Writes the story to <outputDir>/entry.txt as UTF-8 with no trailing newline.
 * Throws rather than emit an entry that would fail the gate. Counts are taken
 * from the exact text written: code points for the 1..60 limit, bytes for the
 * on-disk file.
 */
function writeEntry(outputDir: string): void {
  const tokens = words(STORY);
  if (tokens.length !== WORD_COUNT) {
    throw new Error(`expected exactly ${WORD_COUNT} words, got ${tokens.length}`);
  }
  if (STORY.trim().length === 0) {
    throw new Error("story is only white space");
  }

  const codePoints = [...STORY].length;
  if (codePoints < MIN_CHARS || codePoints > MAX_CHARS) {
    throw new Error(`story must be ${MIN_CHARS}..${MAX_CHARS} characters, got ${codePoints}`);
  }

  const bytes = Buffer.from(STORY, "utf8");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), bytes);

  console.log(`words: ${tokens.length}`);
  console.log(`characters: ${codePoints}`);
  console.log(`bytes: ${bytes.length}`);
  console.log(`written: ${join(outputDir, "entry.txt")}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
writeEntry(outputDir);
