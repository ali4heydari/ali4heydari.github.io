module.exports = {
  "*.{js,jsx}": ["eslint --cache --fix", "prettier --write"],
  "*.{ts,tsx}": [
    "eslint --cache --fix",
    () => "tsc --project tsconfig.json --pretty --skipLibCheck --noEmit",
    "prettier --write",
  ],
  "**/*.{css,json}": ["prettier --write"],
};
