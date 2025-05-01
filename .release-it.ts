import { Config } from "release-it";

const config: Config = {
  git: {
    commitMessage: "chore(release): bump version to v${version}",
    push: false,
    tagAnnotation: "Release v${version}",
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      preset: {
        name: "conventionalcommits",
      },
    },
  },
};

export default config;
