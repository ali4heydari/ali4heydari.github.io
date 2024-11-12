import { BASE_URL } from "src/constants";
import type { PathName } from "./LogoTitle";
import { LogoOrEmoji, PageTitle } from "./LogoTitle";
import { Name } from "./Name";

interface OgImageProps {
  cover?: string | null;
  path?: PathName;
  title?: string | null;
}

export const OpenGraphImage = (props: OgImageProps) => {
  const { cover, path, title } = props;

  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%",
        justifyContent: "flex-end",
        padding: "48px 72px",
        width: "100%",
        // fontFamily: "Manrope",
        backgroundColor: "rgb(8, 15, 30)",
        color: "white",
        textShadow: "0px 2px 4px rgba(8 15 30 / 0.5)",
      }}
    >
      <img
        src={`${BASE_URL}/${cover}`}
        alt={title ?? "Cover image"}
        width={1280}
        height={720}
        style={{
          bottom: 0,
          height: "auto",
          left: 0,
          margin: 0,
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
          right: 0,
          top: 0,
          width: "auto",
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(8, 15, 30, 0.36)",
          bottom: 0,
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          backgroundImage:
            "linear-gradient(65deg, rgba(8, 15, 30, 1) 0%, rgba(8, 15, 30, 0.5) 60%, rgba(8, 15, 30, 0) 100%)",
          bottom: 0,
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />

      <LogoOrEmoji path={path} />
      <PageTitle path={path} title={title} />
      <Name path={path} />
    </div>
  );
};
