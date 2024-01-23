const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui],

	daisyui: {
		themes: [
			{
				'nes-theme': {
					// Custom theme name
					primary: '#209cee', // Primary color
					// secondary: '#dummy-secondary-color', // Secondary color
					// accent: '#dummy-accent-color', // Accent color
					// neutral: '#dummy-neutral-color', // Neutral color
					'base-100': '#ffffff',
					// info: '#dummy-info-color',
					success: '#92cc41',
					warning: '#f7d51d',
					error: '#e76e55',

					// Font family
					fontFamily: '"Press Start 2P", sans-serif',

					// Borders, card, and component styling
					// cardBordered: 'border', // Card border
					// borderColor: '#dummy-border-color', // General border color
					roundedBox: 'rounded-lg', // Border radius for boxes
					roundedButton: 'rounded-full', // Border radius for buttons
					roundedBadge: 'rounded-lg', // Border radius for badges

					// Input styling
					inputBordered: 'border' // Input border
					// inputBorderColor: '#dummy-input-border-color' // Input border color

					// Additional customizations can be added here
				}
			}
		]
	}
};

module.exports = config;
