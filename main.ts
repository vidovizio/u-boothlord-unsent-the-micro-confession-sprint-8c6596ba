import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
const outputPath = `${outputDir}/entry.txt`;

const confession = `To: my father
I still wait for you to ask how I am instead of telling me what to fix`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, confession, "utf8");