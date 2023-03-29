import fs from 'fs';
import path from 'path';
import glob from 'glob';
import frontmatter from 'front-matter';

export const dataDir = 'content/data';
export const pagesDir = 'content/pages';
export const siteConfigFile = dataDir + '/config.json';

const supportedFileTypes = ['md', 'json'];

function contentFilesInPath(dir) {
  const globPattern = `${dir}/**/*.{${supportedFileTypes.join(',')}}`;
  return glob.sync(globPattern);
}

function readContent(file) {
  const rawContent = fs.readFileSync(file, 'utf8');
  let content = null;
  switch (path.extname(file).substring(1)) {
    case 'md':
      const parsedMd = frontmatter(rawContent);
      content = {
        ...parsedMd.attributes,
        body: parsedMd.body,
      };
      break;
    case 'json':
      content = JSON.parse(rawContent);
      break;
    default:
      throw Error(`Unhandled file type: ${file}`);
  }

  content.__id = file;
  content.__url = fileToUrl(file);
  return content;
}

function fileToUrl(file) {
  if (!file.startsWith(pagesDir)) return null;

  let url = file.slice(pagesDir.length);
  url = url.split('.')[0];
  if (url.endsWith('/index')) {
    url = url.slice(0, -6) || '/';
  }
  return url;
}

function urlToFilePairs() {
  const pageFiles = contentFilesInPath(pagesDir);
  return pageFiles.map((file) => [fileToUrl(file), file]);
}

export function urlToContent(url) {
  const urlToFile = Object.fromEntries(urlToFilePairs());
  const file = urlToFile[url];
  return readContent(file);
}

export function pagesByType(contentType) {
  let result = {};
  for (const [url, file] of urlToFilePairs()) {
    const content = readContent(file);
    if (content.type === contentType) result[url] = content;
  }
  return result;
}

export function siteConfig() {
  return readContent(siteConfigFile);
}
