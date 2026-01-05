import * as fs from "node:fs";
import { computeTypeHash } from "./resolve-type";

const typesFilePath = "src/db/types.ts";
let typesFile = fs.readFileSync(typesFilePath, "utf-8");

// Resolve the full type structure including all imported nested types
const newHash = computeTypeHash("LeaderboardSnapshot", typesFilePath);

if (!newHash) {
  console.error("Could not resolve LeaderboardSnapshot type");
  process.exit(1);
}

// Extract the stored hash from the file
const storedHashMatch = typesFile.match(
  /export const LeaderboardSnapshotHash = "([a-f0-9A-Z]+)" as const;/,
);

if (!storedHashMatch) {
  console.error("Could not find LeaderboardSnapshotHash in types.ts");
  process.exit(1);
}

const storedHash = storedHashMatch[1];

// Check if hash has changed
if (storedHash === newHash) {
  console.log(`✅ LeaderboardSnapshot unchanged (hash: ${newHash})`);
  process.exit(0);
}

// Extract current version
const versionMatch = typesFile.match(
  /export const LeaderboardSnapshotVersion = (\d+) as const;/,
);

if (!versionMatch) {
  console.error("Could not find LeaderboardSnapshotVersion");
  process.exit(1);
}

const currentVersion = Number.parseInt(versionMatch[1]!, 10);
const newVersion = currentVersion + 1;

// Replace the hash in the file
typesFile = typesFile.replace(
  /export const LeaderboardSnapshotHash = "[a-f0-9A-Z]+" as const;/,
  `export const LeaderboardSnapshotHash = "${newHash}" as const;`,
);

// Replace the version in the file
typesFile = typesFile.replace(
  /export const LeaderboardSnapshotVersion = \d+ as const;/,
  `export const LeaderboardSnapshotVersion = ${newVersion} as const;`,
);

fs.writeFileSync(typesFilePath, typesFile);

console.log(`✅ Updated LeaderboardSnapshotHash: ${storedHash} → ${newHash}`);
console.log(
  `✅ Updated LeaderboardSnapshotVersion: ${currentVersion} → ${newVersion}`,
);
