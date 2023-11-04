const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

module.exports = [
  buildRedirect("/cv", "/static/files/site/ali4heydari-cv.pdf"),
];
