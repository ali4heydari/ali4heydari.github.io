import { BASE_URL } from "src/constants";

const pathEmojiMap = {
  "404": "👻",
  "about": "😀",
  "blog": "📄",
  "community-wall": "📝",
  "error": "🚨",
  "gallery": "📷",
  "movie-taste": "🎬",
  "music-taste": "🎵",
  "projects": "💼",
  "uses": "💻",
};
export type PathName = keyof typeof pathEmojiMap | null;

const pathTitleMap = {
  "404": "Page not found",
  "about": "About",
  "blog": "Blog",
  "community-wall": "Community wall",
  "error": "Error",
  "gallery": "Gallery",
  "music-taste": "Music taste",
  "projects": "Projects",
  "uses": "Uses",
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
          color: "#88a4e6",
          fill: "#88a4e6",
          filter: "saturate(150%)",
          height: titleFontSize * 2,
          width: titleFontSize * 2,
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
        color: path ? "white" : "rgba(0, 0, 0, 0)",
        fontSize: titleFontSize,
        fontWeight: 700,
        maxWidth: 900,
        ...(path
          ? {}
          : {
              backgroundClip: "text",
              backgroundImage: "linear-gradient(to right, #88a4e6, #81c1e9)",
              filter: "saturate(150%)",
            }),
      }}
    >
      {(title ?? pathTitle) || `Ali Heydari | ${new URL(BASE_URL).hostname}`}
    </p>
  );
};
