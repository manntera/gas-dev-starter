// eslint.config.js
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";
import gas from "eslint-plugin-googleappsscript";

export default [
    {
        ignores: ["dist/**", "node_modules/**"],
    },
    {
        files: ["**/*.ts", "**/*.js"],
        languageOptions: {
            parser: eslintParser,
            globals: gas.environments.googleappsscript.globals,
        },
        plugins: {
            "@typescript-eslint": eslintPlugin,
            "googleappsscript": gas,
        },
        rules: {
            // ここにルールを追加
            "semi": "error",
            // "no-unused-vars": "off", // 例
            // ...
        },
    },
    {
        files: ["src/index.ts"],
        rules: {
            // GASへエクスポートする未使用に見える関数を許容
            "@typescript-eslint/no-unused-vars": "off",
        },
    },
];
