/** biome-ignore-all lint/suspicious/noConsole: script */
import * as crypto from "node:crypto";
import * as fs from "node:fs";

const typesFile = fs.readFileSync("src/db/types.ts", "utf-8");

// Extract the stored hash from the file
const storedHashMatch = typesFile.match(
  /export const LeaderboardSnapshotHash = "([a-f0-9A-Z]+)" as const;/,
);

if (!storedHashMatch) {
  console.error("Could not find LeaderboardSnapshotHash in types.ts");
  process.exit(1);
}

const storedHash = storedHashMatch[1];

// Extract the type definition and compute its hash
const typeMatch = typesFile.match(
  /export type LeaderboardSnapshot = \{[\s\S]*?\n\};/,
);

if (!typeMatch) {
  console.error("Could not find LeaderboardSnapshot type");
  process.exit(1);
}

const currentHash = crypto
  .createHash("sha256")
  .update(typeMatch[0])
  .digest("hex")
  .slice(0, 8);

if (currentHash !== storedHash) {
  console.error("❌ LeaderboardSnapshot type changed but hash not updated!");
  console.error(`   Stored hash:  ${storedHash}`);
  console.error(`   Current hash: ${currentHash}`);
  console.error("   Run: pnpm update:snapshot");
  process.exit(1);
}

console.log(`✅ LeaderboardSnapshot hash verified: ${currentHash}`);
