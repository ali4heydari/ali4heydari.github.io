const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

module.exports = [
  buildRedirect(
    "/resume",
    "https://github.com/ali4heydari/CV/releases/latest/download/CV.pdf",
  ),
];
