import fs from "fs";
import path from "path";
import matter from "gray-matter";
import toml from "toml";

// Exported functions
function getSortedData(dataType) {
  const fileNames = getAllFilenames(dataType);

  // Get file names under /posts
  const allPostsData = fileNames
    .map((fileName) => getSingleProvider(fileName, dataType))
    .filter((x) =>
      process.env.NODE_ENV === "development" ? true : x.draft ? false : true
    )

  // Sort posts by date
  return allPostsData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getAllProviderIds(dataType) {
  const fileNames = getAllFilenames(dataType);
  return fileNames.map((fileName) => ({
    params: {
      slug: getIdFromFilename(fileName),
    },
  }));
}

function getSingleProviderFromSlug(slug, dataType) {
  const fileNames = getAllFilenames(dataType);
  const fileName = fileNames.find(
    (fileName) => getIdFromFilename(fileName) === slug
  );
  return getSingleProvider(fileName, dataType);
}


// Secondary function
function getSingleProvider(fileName, dataType) {
  const id = getIdFromFilename(fileName);
  // Read markdown file as string
  const fileContents = getFileContent(dataType, fileName);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, {
    delims: ["+++", "+++"],
    lang: "toml",
    engines: {
      toml: toml.parse.bind(toml),
    },
  });
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

function getIdFromFilename(fileName) {
  // Remove ".md" from file name to get id
  const id = fileName
    .replace(/\.md$/, "")
    .replace(/\.json$/, "")
    .replace(/[\s+_]/g, "-")
    .toLowerCase();
  // .replace(/'_'/g, "-");
  return id;
}

export {
  getSortedData,
  getAllProviderIds,
  getSingleProviderFromSlug,
};
