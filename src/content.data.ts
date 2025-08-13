import matter from "gray-matter";
import { collections } from "./collections.js";

// Import all Markdown files at build time
const files = import.meta.glob("./content/**/*.md", { eager: true, as: "raw" });

type CollectionName = keyof typeof collections;

function parseCollection(name: CollectionName) {
  const schema = collections[name];

  return Object.entries(files)
    // Normalize Windows paths
    .filter(([path]) => path.replace(/\\/g, "/").includes(`/${name}/`))
    .map(([path, raw]) => {
      const { data: frontmatter, content } = matter(raw as string);

      const parsed = schema.parse(frontmatter);

      return {
        ...parsed,
        slug: path.split("/").pop()?.replace(".md", ""),
        content,
      };
    });
}

// ✅ Static parsed data
export const data = {
  blog: parseCollection("blog"),
  careers: parseCollection("careers"),
};
