import fs from "fs";
import path from "path";
import matter from "gray-matter";
import toml from "toml";
import { urlize } from "./utilities";

// Exported functions
function getSortedData(dataType) {
  const fileNames = getAllFilenames(dataType);

  // Get file names under /posts
  const allPostsData = fileNames
    .map((fileName) => getSingleProvider(fileName, dataType))
    .filter((x) =>
      process.env.NODE_ENV === "development" ? true : x.draft ? false : true
    );

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getAllContentIds(dataType) {
  const fileNames = getAllFilenames(dataType);
  return fileNames.map((fileName) => ({
    params: {
      slug: urlize(fileName),
    },
  }));
}

function getAllTags(dataType) {
  const sortedData = getSortedData(dataType);
  const allTags = sortedData.reduce(
    (accumulator, fileName) => accumulator.concat(fileName.tags),
    []
  );
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((tag) => ({
    params: {
      slug: urlize(tag),
    },
  }));
}

function getPostsForTag(tag, dataType) {
  return getSortedData(dataType).filter((x) =>
    x.tags.map((tag) => urlize(tag)).includes(tag)
  );
}

function getSingleContentFromSlug(slug, dataType) {
  const fileNames = getAllFilenames(dataType);
  const fileName = fileNames.find((fileName) => urlize(fileName) === slug);
  return getSingleProvider(fileName, dataType);
}

function getContentForPage(page, format = "yaml") {
  return getSingleProvider("_index.md", page, format);
}

// Secondary function
function getSingleProvider(fileName, dataType, format = "toml") {
  const id = urlize(fileName);
  // Read markdown file as string
  const fileContents = getFileContent(dataType, fileName);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(
    fileContents,
    getFormatConfiguration(format.trim().toLowerCase())
  );
  const content = matterResult.content;

  // Combine the data with the id
  return {
    id,
    content,
    ...matterResult.data,
  };
}

function getFileContent(folder, fileName, encoding = "utf8") {
  const postsDirectory = getContentDir(folder);

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, encoding);
  return fileContents;
}

// Helper functions
function getAllFilenames(dataType) {
  const postsDirectory = getContentDir(dataType);
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((filter) => !filter.startsWith("."));

  return fileNames;
}

function getContentDir(dataType) {
  const contentDir = `content/${dataType}`;
  const postsDirectory = path.join(process.cwd(), contentDir);
  return postsDirectory;
}

export function getFormatConfiguration(format) {
  const formatConfiguration = {
    toml: {
      delims: ["+++", "+++"],
      lang: "toml",
      engines: {
        toml: toml.parse.bind(toml),
      },
    },
  };

  if (formatConfiguration[format]) {
    return formatConfiguration[format];
  } else {
    return {};
  }
}

export {
  getSortedData,
  getAllContentIds,
  getSingleContentFromSlug,
  getContentForPage,
  getAllTags,
  getPostsForTag,
};
