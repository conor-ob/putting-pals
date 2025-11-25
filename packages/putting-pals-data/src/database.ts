import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Database {
  async getAllCompetitions() {
    const base = path.join(__dirname, "data");
    const files = (await this.walk(base)).filter((f) => f.endsWith(".ts"));
    const modules = await Promise.all(files.map((f) => import(f)));
    return modules.map((m) => m.default);
  }

  private async walk(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const out: string[] = [];

    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...(await this.walk(full)));
      else out.push(full);
    }

    return out;
  }
}
