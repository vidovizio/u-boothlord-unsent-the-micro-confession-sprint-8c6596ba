import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
const outputPath = join(outputDir, "entry.txt");

const confession = `To: my father
I still wait for you to ask how I am instead of telling me what to fix`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, confession, "utf8");

const written = readFileSync(outputPath, "utf8");
console.error(`entry.txt: ${written.length} chars`);