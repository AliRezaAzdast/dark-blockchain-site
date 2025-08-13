import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";
import { collections } from "../src/collections.js"; // adjust if using TS

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, "../src/content");
const outputFile = path.join(__dirname, "../src/content.generated.json");

function getFiles(dir) {
  return fs.readdirSync(dir).flatMap(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      return getFiles(fullPath);
    }
    return fullPath.endsWith(".md") ? [fullPath] : [];
  });
}

function parseCollection(name) {
  const schema = collections[name];
  const dir = path.join(contentDir, name);

  return getFiles(dir).map(filePath => {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(raw);
    const parsed = schema.parse(frontmatter);

    return {
      ...parsed,
      slug: path.basename(filePath, ".md"),
      content,
    };
  });
}

const data = {
  blog: parseCollection("blog"),
  careers: parseCollection("careers"),
};

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log("✅ Content built:", outputFile);
