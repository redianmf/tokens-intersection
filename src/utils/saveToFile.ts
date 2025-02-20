import { existsSync, mkdirSync, writeFileSync } from "fs";

export async function saveToFile(dir: string, fileName: string, data: string) {
  try {
    // Create dir if not exist
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    const path = `${dir}/${fileName}`;
    writeFileSync(path, data);
    console.log("Saved to file: " + fileName);
  } catch (error) {
    console.log(error);
  }
}
