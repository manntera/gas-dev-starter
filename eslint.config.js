// eslint.config.js
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.ts", "**/*.js"],
        languageOptions: {
            parser: eslintParser,
        },
        plugins: {
            "@typescript-eslint": eslintPlugin,
        },
        rules: {
            // ここにルールを追加
            "semi": "error",
            // "no-unused-vars": "off", // 例
            // ...
        },
    },
];
