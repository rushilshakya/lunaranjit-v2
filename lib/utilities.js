export function urlize(value) {
  const urlized = value
    .replace(/\.md$/, "")
    .replace(/\.json$/, "")
    .replace(/[\s+_]/g, "-")
    .toLowerCase();
  return urlized;
}

export function getSummary(text, wordLimit = 40) {
  // Split the text into an array of words and new lines
  const words = text.split(/(\s+|\n)/);

  // Initialize the summary array and a counter for the words
  let summaryWords = [];
  let count = 0;

  // Regular expression to check for punctuation
  const endOfSentence = /[.!?।/]$/;
  const newLine = /\n/;
  // Iterate over the words and build the summary
  for (let i = 0; i < words.length; i++) {
    // Only count actual words, not spaces or new lines
    if (words[i].trim() !== "") {
      summaryWords.push(words[i]);
      count++;
    } else {
      // Preserve spaces and new lines
      summaryWords.push(words[i]);
    }

    // Check if we've reached the word limit and the current word ends with punctuation or is a new line
    if (
      count >= wordLimit &&
      (endOfSentence.test(words[i]) || newLine.test(words[i]))
    ) {
      break;
    }
  }

  // Join the words back into a string
  const summary = summaryWords.join("");

  // Return the summary
  return summary;
}

export function getPostsPerPage() {
  return 10;
}

export function getDefaultContentType() {
  return "post";
}

export function getMenuPages() {
  const menuItems = [
    { label: "Home", url: "/", dataType: "home", order: "1" },
    { label: "About", url: "about", dataType: "menu", order: "2" },
    { label: "Writing", url: "write", dataType: "menu", order: "3" },
    { label: "Speaking", url: "speak", dataType: "menu", order: "4" },
    { label: "Organizing", url: "organize", dataType: "menu", order: "5" },
    { label: "Contact", url: "contact", dataType: "menu", order: "6" },
    {
      label: "Twitter",
      url: "https://twitter.com/LunaRanjit",
      dataType: "link",
      order: "7",
    },
    {
      label: "Medium",
      url: "https://lunaranjit.medium.com",
      dataType: "link",
      order: "8",
    },
  ];

  return menuItems;
}
