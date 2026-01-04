/** biome-ignore-all lint/suspicious/noConsole: script */
import * as crypto from "node:crypto";
import * as fs from "node:fs";

const typesFilePath = "src/db/types.ts";
let typesFile = fs.readFileSync(typesFilePath, "utf-8");

// Extract the type definition (excluding the hash line itself)
const typeMatch = typesFile.match(
  /export type LeaderboardSnapshot = \{[\s\S]*?\n\};/,
);

if (!typeMatch) {
  console.error("Could not find LeaderboardSnapshot type");
  process.exit(1);
}

const newHash = crypto
  .createHash("sha256")
  .update(typeMatch[0])
  .digest("hex")
  .slice(0, 8);

// Replace the hash in the file
typesFile = typesFile.replace(
  /export const LeaderboardSnapshotHash = "[a-f0-9A-Z]+" as const;/,
  `export const LeaderboardSnapshotHash = "${newHash}" as const;`,
);

fs.writeFileSync(typesFilePath, typesFile);

console.log(`✅ Updated LeaderboardSnapshotHash to: ${newHash}`);
console.log("⚠️  Don't forget to bump LeaderboardSnapshotVersion!");
