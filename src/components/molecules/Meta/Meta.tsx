import { colorMetaTags, viewportMetaTags } from "src/utils/metadata";

const Meta = () => {
  return (
    <>
      <meta charSet={"UTF-8"} />
      <meta name={"viewport"} content={viewportMetaTags.join(", ")} />
      <meta httpEquiv={"x-ua-compatible"} content={"ie=edge"} />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/images/site/logo/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/images/site/logo/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/images/site/logo/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/images/site/logo/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/images/site/logo/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/images/site/logo/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/images/site/logo/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/images/site/logo/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/images/site/logo/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/images/site/logo/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/images/site/logo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/images/site/logo/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/images/site/logo/favicon-16x16.png"
      />

      {colorMetaTags.map((tag) => (
        <meta key={tag} name={tag} content={"transparent"} />
      ))}
    </>
  );
};

export default Meta;
