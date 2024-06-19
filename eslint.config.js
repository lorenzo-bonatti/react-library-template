import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

export default [
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ["**/*.{ts,jsx}"],
    plugins: {pluginReact},
    languageOptions: {
      globals: {...globals.browser},
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
];
