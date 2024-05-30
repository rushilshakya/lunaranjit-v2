export function urlize(value) {
  const urlized = value
    .replace(/\.md$/, "")
    .replace(/\.json$/, "")
    .replace(/[\s+_]/g, "-")
    .toLowerCase();
  return urlized;
}
