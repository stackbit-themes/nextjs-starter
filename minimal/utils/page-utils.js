import glob from "fast-glob";
import path from "path";
import dynamic from "next/dynamic";

const pagesDir = path.join(process.cwd(), "content", "pages");
const pagesPattern = path.join(pagesDir, "**/*.json");

export function allPages() {
  const pageFiles = glob.sync(pagesPattern);
  const pages = pageFiles.map((file) => dynamic(() => import(file)));
  return [];
}
