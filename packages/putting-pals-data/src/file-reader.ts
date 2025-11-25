import mastersTournament2021 from "./data/2021/masters-tournament";
import pgaChampionship2021 from "./data/2021/pga-championship";
import theOpenChampionship2021 from "./data/2021/the-open-championship";
import usOpen2021 from "./data/2021/us-open";
import mastersTournament2022 from "./data/2022/masters-tournament";
import pgaChampionship2022 from "./data/2022/pga-championship";
import theOpenChampionship2022 from "./data/2022/the-open-championship";
import usOpen2022 from "./data/2022/us-open";
import mastersTournament2023 from "./data/2023/masters-tournament";
import pgaChampionship2023 from "./data/2023/pga-championship";
import theOpenChampionship2023 from "./data/2023/the-open-championship";
import usOpen2023 from "./data/2023/us-open";
import mastersTournament2024 from "./data/2024/masters-tournament";
import pgaChampionship2024 from "./data/2024/pga-championship";
import theOpenChampionship2024 from "./data/2024/the-open-championship";
import usOpen2024 from "./data/2024/us-open";
import mastersTournament2025 from "./data/2025/masters-tournament";
import pgaChampionship2025 from "./data/2025/pga-championship";
import theOpenChampionship2025 from "./data/2025/the-open-championship";
import usOpen2025 from "./data/2025/us-open";

export class FileReader {
  readAllCompetitionFiles() {
    return [
      mastersTournament2021,
      pgaChampionship2021,
      theOpenChampionship2021,
      usOpen2021,
      mastersTournament2022,
      pgaChampionship2022,
      theOpenChampionship2022,
      usOpen2022,
      mastersTournament2023,
      pgaChampionship2023,
      theOpenChampionship2023,
      usOpen2023,
      mastersTournament2024,
      pgaChampionship2024,
      theOpenChampionship2024,
      usOpen2024,
      mastersTournament2025,
      pgaChampionship2025,
      theOpenChampionship2025,
      usOpen2025,
    ];
  }
}

// import fs from "node:fs/promises";
// import path from "node:path";
// import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export class FileReader {
//   async readAllCompetitionFiles() {
//     const dataDir = path.join(__dirname, "data");
//     const filePaths = (await this.walk(dataDir)).filter((f) =>
//       f.endsWith(".ts"),
//     );
//     const modules = await Promise.all(filePaths.map((f) => import(f)));
//     return modules.map((m) => m.default);
//   }

//   private async walk(dir: string): Promise<string[]> {
//     const entries = await fs.readdir(dir, { withFileTypes: true });
//     const filePaths: string[] = [];

//     for (const entry of entries) {
//       const fullPath = path.join(dir, entry.name);
//       if (entry.isDirectory()) {
//         filePaths.push(...(await this.walk(fullPath)));
//       } else {
//         filePaths.push(fullPath);
//       }
//     }

//     return filePaths;
//   }
// }
