import type { MetadataRoute } from "next";
import { allBlogs, allProjects } from "contentlayer/generated";
import { BASE_URL, navigation } from "src/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allBlogs.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt.split("T")[0],
    priority: 0.6,
  }));

  const projects = allProjects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.5,
  }));

  const removeSlash = (it) => it.href.replace("/", "");
  const filterExternalLinks = (it) => it.href && !it.href.startsWith("http");

  const routes = [
    "",
    "about",
    ...navigation.secondary.filter(filterExternalLinks).map(removeSlash),
    ...navigation.tertiary.filter(filterExternalLinks).map(removeSlash),
  ].map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: route ? 0.8 : 1,
  }));

  return [...routes, ...blogs, ...projects].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
