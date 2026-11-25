// One-Line Laugh-Off — make.fun entry program.
// Writes exactly one funny line to /output/entry.txt.
// One joke, cold read: a smart fridge rats out its owner to the doctor,
// and the twist lands in the last clause — the fridge is in therapy too.
// No setup notes, no explanation; the line is the whole joke.
import { mkdirSync, writeFileSync } from "node:fs";

// The laugh comes from the reversal: the snitch becomes a patient.
// Concrete details only — 2 a.m., ice cream, the doctor, therapy.
const LINE =
  "My smart fridge emailed my doctor about my 2 a.m. ice cream, so now the fridge and I are both in therapy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
