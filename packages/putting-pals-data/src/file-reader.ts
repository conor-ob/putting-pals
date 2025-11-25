import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FileReader {
  async readAllCompetitionFiles() {
    const dataDir = path.join(__dirname, "data");
    const filePaths = (await this.walk(dataDir)).filter((f) =>
      f.endsWith(".ts"),
    );
    const modules = await Promise.all(filePaths.map((f) => import(f)));
    return modules.map((m) => m.default);
  }

  private async walk(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const filePaths: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        filePaths.push(...(await this.walk(fullPath)));
      } else {
        filePaths.push(fullPath);
      }
    }

    return filePaths;
  }
}
