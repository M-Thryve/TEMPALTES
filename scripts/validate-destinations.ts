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

const dataFiles = [
  "home.ts",
  "services.ts",
  "facilities.ts",
  "industries.ts",
  "faq.ts",
  "quote.ts",
  "contact.ts",
  "about.ts",
  "careers.ts",
  "privacy.ts",
  "terms.ts",
];

const sitePath = resolve(__dirname, "../content/site.ts");
const siteSource = readFileSync(sitePath, "utf-8");

let passed = 0;
let failed = 0;
const errors: string[] = [];

for (const m of mapping.mappings) {
  const dest = m.destination;
  const page = dest.split(".")[0];

  let found = false;

  if (page === "Global") {
    found = true;
  } else {
    const fileName = page.toLowerCase() + ".ts";
    if (dataFiles.includes(fileName)) {
      const filePath = resolve(__dirname, `../content/data/${fileName}`);
      try {
        const content = readFileSync(filePath, "utf-8");
        if (content.includes("intake.")) {
          found = true;
        }
      } catch {
        found = false;
      }
    }
  }

  if (found) {
    passed++;
  } else {
    failed++;
    errors.push(`UNWIRED: ${m.destination} (component: ${m.component}, prop: ${m.prop})`);
  }
}

console.log(`\nDestination Validation`);
console.log(`======================`);
console.log(`Total mappings: ${passed + failed}`);
console.log(`Wired: ${passed}`);
console.log(`Unwired: ${failed}`);

if (errors.length > 0) {
  console.log(`\nErrors:`);
  errors.forEach((e) => console.log(`  ${e}`));
  process.exit(1);
} else {
  console.log(`\nAll content mapping destinations are wired to pages.`);
}
