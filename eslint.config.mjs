import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import jest from "eslint-plugin-jest";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.js"],
		languageOptions: {
			sourceType: "module",
		},
	},
	{
		ignores: ["dist", "node_modules"],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	pluginJs.configs.recommended,
	eslintConfigPrettier,
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},
	{
		files: ["**/*.test.js", "**/setup.js"],
		plugins: { jest: jest },
		languageOptions: {
			globals: jest.environments.globals.globals,
		},
		rules: {
			"jest/no-disabled-tests": "warn",
			"jest/no-focused-tests": "error",
			"jest/no-identical-title": "error",
			"jest/prefer-to-have-length": "warn",
			"jest/valid-expect": "error",
		},
	},
];
