import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import glob from "glob";
import frontmatter from "front-matter";

const supportedFileTypes = ["md", "json"];

export const sbConfig = yaml.load(fs.readFileSync("./stackbit.yaml", "utf8"));
if (!sbConfig.pagesDir || !sbConfig.dataDir)
  throw new Error("Invalid Stackbit config file");

export const siteConfigFile = sbConfig.dataDir + '/config.json'

function allFiles(dir) {
  const globPattern = `${dir}/**/*.{${supportedFileTypes.join(",")}}`;
  return glob.sync(globPattern);
}

function readContent(file) {
  const rawContent = fs.readFileSync(file, "utf8");
  let content = null;
  switch (path.extname(file).substring(1)) {
    case "md":
      const parsedMd = frontmatter(rawContent);
      content = {
        ...parsedMd.attributes,
        body: parsedMd.body,
      };
      break;
    case "json":
      content = JSON.parse(rawContent);
      break;
    default:
      throw Error(`Unhandled file type: ${file}`);
  }

  content.__id = file;
  return content;
}

function urlOf(file) {
  if (!file.startsWith(sbConfig.pagesDir)) return null;

  let url = file.slice(sbConfig.pagesDir.length);
  url = url.split(".")[0];
  if (url.endsWith("/index")) {
    url = url.slice(0, -6) || "/";
  }
  return url;
}

function urlsToFiles() {
  const pageFiles = allFiles(sbConfig.pagesDir);
  const urlsAndFiles = pageFiles.map((file) => [urlOf(file), file]);
  return Object.fromEntries(urlsAndFiles);
}

export function allUrls() {
  return Object.keys(urlsToFiles());
}

export function urlToContent(url) {
  const file = urlsToFiles()[url];
  return readContent(file);
}

export function siteConfig() {
  return readContent(siteConfigFile);
}