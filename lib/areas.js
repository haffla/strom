import fs from "fs";
import path from "path";

const areasDirectory = path.join(process.cwd(), "areas");

export function getAllAreaIds() {
  const filenames = fs.readdirSync(areasDirectory);
  return filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.json$/, ""),
      },
    };
  });
}

export function getAreaData(id) {
  const fullPath = path.join(areasDirectory, `${id}.json`);
  const content = JSON.parse(fs.readFileSync(fullPath, "utf8"));

  return {
    id,
    content,
  };
}

export function getAllAreaData() {
  const filenames = fs.readdirSync(areasDirectory);
  return filenames.map((filename) => {
    const id = filename.replace(/\.json$/, "");
    const fullPath = path.join(areasDirectory, filename);
    const content = JSON.parse(fs.readFileSync(fullPath, "utf8"));
    return {
      id,
      content,
    };
  });
}
