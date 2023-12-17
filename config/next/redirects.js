const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

module.exports = [
  buildRedirect("/cv", "/static/files/site/ali4heydari-cv.pdf"),
  buildRedirect("/git-masters", "https://ali4heydari.github.io/git-masters/"),
];
