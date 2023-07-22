module.exports = {
  env: {
    es6: true,
  },
  root: true,
  extends: "@react-native",
  plugins: ["react", "typescript"],
  rules: {
    "react/prop-types": "error",
    quotes: ["error", "double"],
    "react-hooks/exhaustive-deps": "warn",
    "no-console": ["error", { allow: ["error"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
