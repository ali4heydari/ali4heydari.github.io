import { BASE_URL } from "src/constants";
import type { PathName } from "./LogoTitle";

const fontSize = 40;
export const Name = (props: { path?: PathName }) => {
  if (!props.path) return null;
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        fontSize,
        gap: 12,
      }}
    >
      <img
        src={`${BASE_URL}/static/images/site/ali4heydari/bitmoji.png`}
        alt="Animoji representation of Ali Heydari"
        style={{
          color: "#88a4e6",
          fill: "#88a4e6",
          filter: "saturate(150%)",
          height: fontSize * 2,
          width: fontSize * 2,
        }}
      />
      <p
        style={{
          alignSelf: "flex-start",
          backgroundClip: "text",
          backgroundImage: "linear-gradient(to right, #88a4e6, #81c1e9)",
          color: "rgba(0, 0, 0, 0)",
          filter: "saturate(150%)",
          fontSize,
          fontWeight: 700,
        }}
      >
        Ali Heydari | {new URL(BASE_URL).hostname}
      </p>
    </div>
  );
};
