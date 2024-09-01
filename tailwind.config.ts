import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Radio Canada Big", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				// flowbite-svelte
				primary: {
					"50": "#ecfeff",
					"100": "#cffafe",
					"200": "#a5f3fc",
					"300": "#67e8f9",
					"400": "#22d3ee",
					"500": "#06b6d4",
					"600": "#0891b2",
					"700": "#0e7490",
					"800": "#155e75",
					"900": "#164e63",
				},
			},
		},
	},

	plugins: [flowbitePlugin],
} as Config;
