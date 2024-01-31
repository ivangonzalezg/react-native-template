module.exports = {
  env: {
    es6: true,
  },
  root: true,
  extends: ["@react-native"],
  plugins: ["react", "typescript", "no-comments"],
  rules: {
    "react/prop-types": "error",
    quotes: ["error", "double"],
    "react-hooks/exhaustive-deps": "warn",
    "no-console": ["error", { allow: ["error"] }],
    "no-comments/disallowComments": [
      "error",
      { allow: ["TODO", "FIXME", "NOTE", "DEBUG", "eslint-disable"] },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
