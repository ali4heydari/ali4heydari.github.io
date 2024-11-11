import type { MetadataRoute } from "next";
import { BASE_URL, navigation } from "src/constants";
import { blog, projects as allProjects } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = blog.map((post) => ({
    lastModified: post.publishedAt.split("T")[0],
    priority: 0.6,
    url: `${BASE_URL}/blog/${post.slug}`,
  }));

  const projects = allProjects.map((project) => ({
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.5,
    url: `${BASE_URL}/projects/${project.slug}`,
  }));

  const removeSlash = (it) => it.href.replace("/", "");
  const filterExternalLinks = (it) => it.href && !it.href.startsWith("http");

  const routes = [
    "",
    "about",
    ...navigation.secondary.filter(filterExternalLinks).map(removeSlash),
    ...navigation.tertiary.filter(filterExternalLinks).map(removeSlash),
  ].map((route) => ({
    lastModified: new Date().toISOString().split("T")[0],
    priority: route ? 0.8 : 1,
    url: `${BASE_URL}/${route}`,
  }));

  return [...routes, ...blogs, ...projects].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
