module.exports = {
	stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chakra-ui/storybook-addon",
	],
	framework: "@storybook/react",
}
