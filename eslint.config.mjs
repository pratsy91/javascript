import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Allow unescaped entities in JSX for better readability in educational content
      "react/no-unescaped-entities": "off",
      // Allow <a> tags for internal navigation in documentation/educational content
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
