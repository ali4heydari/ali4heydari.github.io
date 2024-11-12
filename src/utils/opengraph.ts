import { BASE_URL } from "src/constants";

export const buildOgImageUrl = (
  path?: string,
  title?: string,
  cover?: string,
): string => {
  try {
    const url = new URL(`${BASE_URL}/api/og`);
    if (path) url.searchParams.set("path", path);
    if (title) url.searchParams.set("title", title);
    if (cover) url.searchParams.set("cover", cover);
    return url.href;
  } catch (error) {
    console.log(`Error building og image url: ${error}\n returning default`);
    return `${BASE_URL}/api/og`;
  }
};
