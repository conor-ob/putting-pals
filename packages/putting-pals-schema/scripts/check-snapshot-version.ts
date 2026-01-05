import * as fs from "node:fs";
import { computeTypeHash } from "./resolve-type";

const typesFilePath = "src/db/types.ts";
const typesFile = fs.readFileSync(typesFilePath, "utf-8");

// Extract the stored hash from the file
const storedHashMatch = typesFile.match(
  /export const LeaderboardSnapshotHash = "([a-f0-9A-Z]+)" as const;/,
);

if (!storedHashMatch) {
  console.error("Could not find LeaderboardSnapshotHash in types.ts");
  process.exit(1);
}

const storedHash = storedHashMatch[1];

// Compute hash from the fully resolved type (including imported nested types)
const currentHash = computeTypeHash("LeaderboardSnapshot", typesFilePath);

if (!currentHash) {
  console.error("Could not resolve LeaderboardSnapshot type");
  process.exit(1);
}

if (currentHash !== storedHash) {
  console.error("❌ LeaderboardSnapshot type changed but hash not updated!");
  console.error(`   Stored hash:  ${storedHash}`);
  console.error(`   Current hash: ${currentHash}`);
  console.error("   Run: pnpm update:snapshot");
  process.exit(1);
}

console.log(`✅ LeaderboardSnapshot hash verified: ${currentHash}`);
