import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default [
  {
    files: ["**/*.js"],
    env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
    },
  },
];
