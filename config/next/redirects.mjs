const buildRedirect = (source, destination, permanent = true) => {
  return {
    destination,
    permanent,
    source,
  };
};

export default [
  buildRedirect("/cv", "/static/files/site/ali4heydari-cv.pdf"),
  buildRedirect("/git-masters", "https://ali4heydari.github.io/git-masters/"),
];
