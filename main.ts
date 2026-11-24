import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "midnight cursor blinks",
  "the stack trace dissolves in fog",
  "my fix was the bug",
];

function selfCheck(lines) {
  if (lines.length !== 3) {
    throw new Error(`expected 3 lines, got ${lines.length}`);
  }
  for (const line of lines) {
    if (line.length < 1 || line.length > 200) {
      throw new Error(`line length out of range (1-200): ${line.length}`);
    }
    if (line.trim() === "") {
      throw new Error("blank line in haiku");
    }
    if (line !== line.trimEnd()) {
      throw new Error("trailing whitespace in haiku");
    }
  }
  const total = lines.join("\n").length + 1;
  if (total < 1 || total > 200) {
    throw new Error(`total entry length out of range (1-200): ${total}`);
  }
}

selfCheck(HAIKU);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, HAIKU.join("\n") + "\n", {
  encoding: "utf8",
  mode: 0o644,
});
chmodSync(entryPath, 0o644);
