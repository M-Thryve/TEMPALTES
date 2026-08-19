import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type MappingEntry = {
  content_key: string;
  source: string | string[];
  component: string;
  prop: string;
  destination: string;
};

const mappingPath = resolve(__dirname, "../template/template.content.mapping.json");
const mapping = JSON.parse(readFileSync(mappingPath, "utf-8")) as {
  mappings: MappingEntry[];
};

const intakePath = resolve(__dirname, "../content/intake.ts");
const intakeSource = readFileSync(intakePath, "utf-8");

const intakeFields = new Set<string>();
const fieldRegex = /^\s+(\w+):\s/gm;
let match: RegExpExecArray | null;
while ((match = fieldRegex.exec(intakeSource)) !== null) {
  intakeFields.add(match[1]);
}

let passed = 0;
let failed = 0;
const errors: string[] = [];

for (const m of mapping.mappings) {
  const sources = Array.isArray(m.source) ? m.source : [m.source];
  for (const src of sources) {
    const fieldId = src.replace("intake.", "");
    if (intakeFields.has(fieldId)) {
      passed++;
    } else {
      failed++;
      errors.push(
        `MISSING: mapping "${m.content_key}" → source "${src}" not found in intake.ts`
      );
    }
  }
}

console.log(`\nContent Mapping Validation`);
console.log(`==========================`);
console.log(`Total source references: ${passed + failed}`);
console.log(`Resolved: ${passed}`);
console.log(`Missing:  ${failed}`);

if (errors.length > 0) {
  console.log(`\nErrors:`);
  errors.forEach((e) => console.log(`  ${e}`));
  process.exit(1);
} else {
  console.log(`\nAll intake fields have runtime destinations.`);
}
