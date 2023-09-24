import { baseUrl } from "../constants";

export const buildOgImageUrl = (
  path?: string,
  title?: string,
  cover?: string,
): string => {
  try {
    const url = new URL(`${baseUrl}/api/og`);
    if (path) url.searchParams.set("path", path);
    if (title) url.searchParams.set("title", title);
    if (cover) url.searchParams.set("cover", cover);
    return url.href;
  } catch (e) {
    return `${baseUrl}/api/og`;
  }
};
