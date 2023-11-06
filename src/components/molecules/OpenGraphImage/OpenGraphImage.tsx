import "server-only";
import { BASE_URL } from "src/constants";

/* eslint-disable @next/next/no-img-element */
import type { PathName } from "./LogoTitle";
import { LogoOrEmoji, PageTitle } from "./LogoTitle";
import { Name } from "./Name";

interface OgImageProps {
  cover?: string | null;
  path?: PathName;
  title?: string | null;
}

export const OpenGraphImage = (props: OgImageProps) => {
  const { path, title, cover } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: "48px 72px",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        gap: 12,
        // fontFamily: "Manrope",
        color: "white",
        textShadow: "0px 2px 4px rgba(8 15 30 / 0.5)",
        backgroundColor: "rgb(8, 15, 30)",
      }}
    >
      <img
        src={`${BASE_URL}/${cover}`}
        alt={title ?? "Cover image"}
        width={1280}
        height={720}
        style={{
          position: "absolute",
          width: "auto",
          height: "auto",
          margin: 0,
          objectFit: "cover",
          objectPosition: "center",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(8, 15, 30, 0.36)",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />
      <div
        style={{
          backgroundImage:
            // eslint-disable-next-line max-len
            "linear-gradient(65deg, rgba(8, 15, 30, 1) 0%, rgba(8, 15, 30, 0.5) 60%, rgba(8, 15, 30, 0) 100%)",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />

      <LogoOrEmoji path={path} />
      <PageTitle path={path} title={title} />
      <Name path={path} />
    </div>
  );
};
