import xml from "xml";
import { BASE_URL } from "src/constants";
import { blog } from "@/content";

type BlogPost = (typeof blog)[number];

const formatImageUrl = (url?: string) => {
  if (!url) return "";
  if (url.startsWith("/")) return `${BASE_URL}${url}`;
  return url;
};

const buildDescriptionHtml = (post: BlogPost): string => {
  let description = `<p>${post.summary}</p><br/>`;

  if (post.tags) {
    description += `<p>Tags: ${post.tags
      .slice(0, post.tags.length > 5 ? 5 : post.tags.length)
      .join(", ")}</p><br/>`;
  }
  description += `<b><a href="${BASE_URL}/blog/${post.slug}">Read more...</a></b><br/><br/>`;

  if (post.cover) {
    description += `<p><img src="${formatImageUrl(post.cover)}" `;
    description += `alt="${post.title}"></p>`;
  }
  return description;
};

const getAllPostRssData = (post: BlogPost) => {
  const descriptionHtml = buildDescriptionHtml(post);
  return {
    title: post.title,
    url: `${BASE_URL}/${post.slug}`,
    date: post.publishedAt,
    description: post.summary,
    html: descriptionHtml,
    slug: post.slug,
    hero: post.cover,
  };
};

const buildItemForFeed = (
  elem: Record<string, string | Record<string, unknown> | object> | object,
  parentKey?: string,
) => {
  const newArray = [];
  for (const k of Object.keys(elem)) {
    const key = k as keyof typeof elem;
    const value = elem[key];
    if (key === parentKey) {
      newArray.push(value);
      continue;
    }

    const newObject = {};
    if (typeof value === "object" && Object.keys(value).length > 1) {
      newObject[k] = buildItemForFeed(value, k);
    } else {
      newObject[k] = elem[k];
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    newArray.push(newObject);
  }
  return newArray;
};

const buildFeed = (posts: ReturnType<typeof getAllPostRssData>[]) => {
  const sortedPosts = posts.sort(function (first, second) {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });
  const feedItems: any[] = [];

  feedItems.push(
    ...sortedPosts.map(function (post) {
      const description = post.html ? post.html : { _cdata: post.description };
      const actualItem = {
        title: post.title,
        pubDate: new Date(post.date).toUTCString(),
        url: post.url,
        guid: {
          _attr: { isPermaLink: true },
          guid: post.url,
        },
        description: { _attr: { type: "html" }, description },
        featured_image: formatImageUrl(post.hero),
      };

      const feedItem = {
        item: buildItemForFeed(actualItem),
      };

      return feedItem;
    }),
  );

  return feedItems;
};

const defaultChannel = {
  "atom:link": {
    _attr: {
      href: `${BASE_URL}/feed.xml`,
      rel: "self",
      type: "application/rss+xml",
    },
  },
  "lastBuildDate": new Date().toUTCString(),
  "language": "en-US",
  "link": BASE_URL,
  "title": "Ali Heydari",
  "description": "Ali Heydari's blog",
  "image_url": `${BASE_URL}/api/og`,
  "image": {
    title: "Ali Heydari",
    link: BASE_URL,
    url: `${BASE_URL}/api/og`,
  },
  "copyright": `All rights reserved ${new Date().getFullYear()}, Ali Heydari`,
};

export async function GET() {
  const feedItems = await Promise.all(blog.map(getAllPostRssData));

  const feedObject = {
    rss: [
      {
        _attr: {
          "xmlns:dc": "http://purl.org/dc/elements/1.1/",
          "xmlns:content": "http://purl.org/rss/1.0/modules/content/",
          "xmlns:atom": "http://www.w3.org/2005/Atom",
          "version": "2.0",
        },
      },
      {
        channel: [...buildItemForFeed(defaultChannel), ...buildFeed(feedItems)],
      },
    ],
  };

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n${xml(feedObject, {
      indent: "  ",
    })}`,
    {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/rss+xml;charset=utf-8",
      },
    },
  );
}
