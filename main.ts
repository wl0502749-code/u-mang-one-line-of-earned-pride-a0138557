import { mkdirSync, writeFileSync } from "node:fs";

// One line of quiet, earned pride: a hospital cleaner who worked eleven
// years of night shifts finally finds her own name on the thank-you wall,
// spelled right for the first time.
const LINE =
  "After eleven years of night shifts, the hospital cleaner found her own name on the thank-you wall \u2014 spelled right, for the first time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
