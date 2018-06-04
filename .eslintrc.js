module.exports = {
  "extends": ["react-app", "airbnb"],
  "rules": {
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"],
      "aspects": ["invalidHref", "preferButton"],
    }],
  },
};
