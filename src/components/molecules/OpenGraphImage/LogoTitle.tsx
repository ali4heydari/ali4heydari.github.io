import { BASE_URL } from "src/constants";

const pathEmojiMap = {
  "404": "👻",
  "about": "😀",
  "music-taste": "🎵",
  "movie-taste": "🎬",
  "gallery": "📷",
  "community-wall": "📝",
  "projects": "💼",
  "uses": "💻",
  "blog": "📄",
  "error": "🚨",
};
export type PathName = keyof typeof pathEmojiMap | null;

const pathTitleMap = {
  "404": "Page not found",
  "about": "About",
  "music-taste": "Music taste",
  "gallery": "Gallery",
  "community-wall": "Community wall",
  "projects": "Projects",
  "uses": "Uses",
  "blog": "Blog",
  "error": "Error",
};

const titleFontSize = 50;
export const LogoOrEmoji = (props: { path?: PathName }) => {
  const emoji = props.path ? pathEmojiMap[props.path] : null;
  if (!emoji) {
    return (
      <img
        src={`${BASE_URL}/static/images/site/ali4heydari/bitmoji.png`}
        alt="Animoji representation of Ali Heydari"
        style={{
          width: titleFontSize * 2,
          height: titleFontSize * 2,
          filter: "saturate(150%)",
          color: "#88a4e6",
          fill: "#88a4e6",
        }}
      />
    );
  }
  return <span style={{ fontSize: titleFontSize }}>{emoji}</span>;
};

export const PageTitle = (props: {
  path?: PathName;
  title?: string | null;
}) => {
  const { path, title } = props;
  const pathTitle = path ? pathTitleMap[path] : null;
  return (
    <p
      style={{
        alignSelf: "flex-start",
        fontSize: titleFontSize,
        fontWeight: 700,
        maxWidth: 900,
        color: path ? "white" : "rgba(0, 0, 0, 0)",
        ...(path
          ? {}
          : {
              backgroundImage: "linear-gradient(to right, #88a4e6, #81c1e9)",
              backgroundClip: "text",
              filter: "saturate(150%)",
            }),
      }}
    >
      {title || pathTitle || `Ali Heydari | ${new URL(BASE_URL).hostname}`}
    </p>
  );
};
