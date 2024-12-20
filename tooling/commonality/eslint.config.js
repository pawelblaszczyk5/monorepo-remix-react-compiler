import core from "@monorepo-remix-react-compiler/eslint-config/core";
import node from "@monorepo-remix-react-compiler/eslint-config/node";

export default [
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	...core,
	...node,
	{
		files: ["src/*.ts"],
		rules: {
			"import-x/no-default-export": "off",
		},
	},
];
