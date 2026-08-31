import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
    {
        files: ["**/*.{js,jsx,ts,tsx}"],

        plugins: {
            js,
            "@typescript-eslint": tseslint,
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
            import: importPlugin,
            "simple-import-sort": simpleImportSort,
            "unused-imports": unusedImports,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },

        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },

        rules: {
            "no-console": ["warn", { allow: ["warn", "error"] }],

            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",

            "unused-imports/no-unused-imports": "error",

            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],

            "react/prop-types": "off",

            "react/react-in-jsx-scope": "off",

            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",

            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",

            "no-process-env": "off",

            "no-restricted-syntax": [
                "error",
                "LabeledStatement",
                "WithStatement",
            ],
        },
    },
]);
