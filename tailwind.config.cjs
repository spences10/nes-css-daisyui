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
          ...require('daisyui/src/theming/themes')['light'],
					// Custom theme name
					primary: '#209cee', // Primary color
          // secondary: '#dummy-secondary-color', // Secondary color
					// accent: '#dummy-accent-color', // Accent color
					// neutral: '#dummy-neutral-color', // Neutral color
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
					inputBordered: 'border', // Input border
					// inputBorderColor: '#dummy-input-border-color' // Input border color

					// Additional customizations can be added here
					'.btn': {
						'--rounded-btn': '0',
						borderImageSlice: '2',
						borderImageWidth: '2',
						borderImageOutset: '2',
						borderWidth: '4px',
						// color: '#fff',
						// backgroundColor: '#209cee',
						position: 'relative',
						borderImageSource:
							'url(\'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>\')',
						cursor:
							'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer'
					},
					'.btn:after': {
						position: 'absolute',
						top: '-4px',
						right: '-4px',
						bottom: '-4px',
						left: '-4px',
						content: '""',
						boxShadow: 'inset -4px -4px #006bb3'
					},
					'.btn:hover': {
						color: '#fff',
						textDecoration: 'none',
						backgroundColor: '#108de0'
					}
				}
			}
		]
	}
};

module.exports = config;
