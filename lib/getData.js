import fs from "fs";
import path from "path";
import matter from "gray-matter";
import toml from "toml";
import {
  getPostsPerPage,
  urlize,
  getDefaultContentType,
  getID,
} from "./utilities";

// Exported functions
function getSortedData(dataType = getDefaultContentType()) {
  const fileNames = getAllFilenames(dataType);

  // Get file names under /posts
  const allPostsData = fileNames
    .map((fileName) => getSingleProvider(fileName, dataType))
    .filter((x) =>
      process.env.NODE_ENV === "development" ? true : x.draft ? false : true
    );

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    a = new Date(a);
    b = new Date(b);
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getAllContentIds(dataType = getDefaultContentType()) {
  const fileNames = getAllFilenames(dataType);
  return fileNames.map((fileName) => ({
    params: {
      slug: getID(fileName),
    },
  }));
}

function getAllTags(dataType = getDefaultContentType()) {
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

function getAllAuthorIDs(dataType = getDefaultContentType()) {
  const sortedData = getSortedData(dataType);
  const allAuthors = sortedData.map((content) => content.author);
  const uniqueAuthors = [...new Set(allAuthors)];
  return uniqueAuthors.map((author) => ({
    params: {
      slug: urlize(author),
    },
  }));
}

function getAllPageNbrs(
  dataType = getDefaultContentType(),
  postsPerPage = getPostsPerPage()
) {
  const totalPages = getTotalPages(dataType, postsPerPage);
  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: {
        slug: `${i}`,
      },
    });
  }

  return paths;
}

function getTotalPages(
  dataType = getDefaultContentType(),
  postsPerPage = getPostsPerPage()
) {
  const fileNames = getAllFilenames(dataType);
  return Math.ceil(fileNames.length / postsPerPage);
}

function getPostsForTag(tag, dataType = getDefaultContentType()) {
  return getSortedData(dataType).filter((x) =>
    x.tags.map((tag) => urlize(tag)).includes(tag)
  );
}

function getAuthorPostsFromAuthorID(
  authorID,
  dataType = getDefaultContentType()
) {
  const posts = getSortedData(dataType).filter(
    (x) => urlize(x.author) === authorID
  );
  const author = getSingleContentFromSlug(authorID, "author", "yaml");
  return { author, posts };
}

function getSingleContentFromSlug(
  slug,
  dataType = getDefaultContentType(),
  format = "toml"
) {
  const fileNames = getAllFilenames(dataType);
  const fileName = fileNames.find((fileName) => urlize(fileName) === slug);
  return getSingleProvider(fileName, dataType, format);
}

function getContentForPage(page, format = "yaml") {
  return getSingleProvider("_index.md", page, format);
}

function getDataForStaticPropsForPage(
  pageNbr,
  postsPerPage = getPostsPerPage(),
  contentType = getDefaultContentType()
) {
  const allPosts = getSortedData(contentType);
  const realPinnedPost = allPosts.find((x) => x.pinned === true);
  const pinnedPost = realPinnedPost ? realPinnedPost : allPosts[0];
  const remainingPosts = allPosts.filter((x) => x.id !== pinnedPost.id);
  const startIdx = pageNbr == 1 ? 0 : postsPerPage * (pageNbr - 1) - 1;
  const endIdx = postsPerPage * pageNbr - 1;
  const postsToShowOnPage = remainingPosts.slice(startIdx, endIdx);
  const totalPages = getTotalPages(contentType, postsPerPage);
  return {
    totalPages,
    posts: postsToShowOnPage,
    pinnedPost: pageNbr == 1 && pinnedPost,
  };
}

// Secondary function
function getSingleProvider(
  fileName,
  dataType = getDefaultContentType(),
  format = "toml"
) {
  const id = getID(fileName);
  // Read markdown file as string
  const fileContents = getFileContent(dataType, fileName);

  // Use gray-matter to parse the post metadata section
  let matterResult = matter(
    fileContents,
    getFormatConfiguration(format.trim().toLowerCase())
  );
  if (typeof matterResult.data.date === "object") {
    matterResult.data.date = String(matterResult.data.date);
  }

  if (matterResult.data.title === undefined) {
    matterResult = matter(fileContents, {});
    matterResult = JSON.parse(JSON.stringify(matterResult));
  }
  const content = matterResult.content;
  if (matterResult.data.image)
    matterResult.data.image =
      matterResult.data.image[0] === "/"
        ? matterResult.data.image
        : "/" + matterResult.data.image;

  if (
    matterResult.data.author &&
    matterResult.data.author.startsWith("content/")
  ) {
    matterResult.data.author = getAuthorNameFromFile(matterResult.data.author);
  }

  // If no tags, then create an empty array
  if (!matterResult.data.tags) {
    matterResult.data.tags = [];
  }
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
function getAllFilenames(dataType = getDefaultContentType()) {
  const postsDirectory = getContentDir(dataType);
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((filter) => !filter.startsWith("."));

  return fileNames;
}

function getContentDir(dataType = getDefaultContentType()) {
  const contentDir = `content/${dataType}`;
  const postsDirectory = path.join(process.cwd(), contentDir);
  return postsDirectory;
}

function getFormatConfiguration(format) {
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

function getAuthorNameFromFile(fullPath) {
  const [_, dataType, fileName] = fullPath.split("/");
  const fileContents = getSingleProvider(fileName, dataType);
  return fileContents.title;
}

export {
  getSortedData,
  getAllContentIds,
  getSingleContentFromSlug,
  getContentForPage,
  getAllTags,
  getPostsForTag,
  getAllAuthorIDs,
  getAuthorPostsFromAuthorID,
  getAllPageNbrs,
  getTotalPages,
  getDataForStaticPropsForPage,
};
