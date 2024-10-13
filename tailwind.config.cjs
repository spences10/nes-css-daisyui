const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
	},

	plugins: [typography, daisyui],

	daisyui: {
		themes: [
			{
				'nes-theme': {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#209cee',
					success: '#92cc41',
					warning: '#f7d51d',
					error: '#e76e55',
					'base-100': '#ffffff',
					'base-content': '#000000',

					fontFamily: '"Press Start 2P", cursive',

					'.btn': {
						border: '4px solid #000000',
						borderImageSlice: '2',
						borderImageWidth: '2',
						borderImageOutset: '2',
						borderImageSource:
							'url(\'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>\')',
						cursor:
							'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC) 14 0,pointer',
						position: 'relative',
						borderRadius: '0',
						'&::after': {
							content: '""',
							position: 'absolute',
							top: '-4px',
							right: '-4px',
							bottom: '-4px',
							left: '-4px',
							boxShadow: 'inset -4px -4px #adafbc',
						},
						'&:hover': {
							'&::after': {
								boxShadow: 'inset -6px -6px #adafbc',
							},
						},
						'&:focus': {
							outline: 'none',
							boxShadow: '0 0 0 6px rgba(173, 175, 188, 0.3)',
						},
						'&:active:not(:disabled)::after': {
							boxShadow: 'inset 4px 4px #adafbc',
						},
						'&-primary': {
							color: '#ffffff',
							'&::after': {
								boxShadow: 'inset -4px -4px #006bb3',
							},
							'&:hover::after': {
								boxShadow: 'inset -6px -6px #006bb3',
							},
							'&:focus': {
								boxShadow: '0 0 0 6px rgba(0, 107, 179, 0.3)',
							},
							'&:active:not(:disabled)::after': {
								boxShadow: 'inset 4px 4px #006bb3',
							},
						},
						'&-success': {
							color: '#ffffff',
							'&::after': {
								boxShadow: 'inset -4px -4px #4aa52e',
							},
							'&:hover::after': {
								boxShadow: 'inset -6px -6px #4aa52e',
							},
							'&:focus': {
								boxShadow: '0 0 0 6px rgba(74, 165, 46, 0.3)',
							},
							'&:active:not(:disabled)::after': {
								boxShadow: 'inset 4px 4px #4aa52e',
							},
						},
						'&-warning': {
							color: '#000000',
							'&::after': {
								boxShadow: 'inset -4px -4px #e59400',
							},
							'&:hover::after': {
								boxShadow: 'inset -6px -6px #e59400',
							},
							'&:focus': {
								boxShadow: '0 0 0 6px rgba(229, 148, 0, 0.3)',
							},
							'&:active:not(:disabled)::after': {
								boxShadow: 'inset 4px 4px #e59400',
							},
						},
						'&-error': {
							color: '#ffffff',
							'&::after': {
								boxShadow: 'inset -4px -4px #8c2022',
							},
							'&:hover::after': {
								boxShadow: 'inset -6px -6px #8c2022',
							},
							'&:focus': {
								boxShadow: '0 0 0 6px rgba(140, 32, 34, 0.3)',
							},
							'&:active:not(:disabled)::after': {
								boxShadow: 'inset 4px 4px #8c2022',
							},
						},
						'&:disabled': {
							color: '#000000',
							backgroundColor: '#d3d3d3',
							cursor: 'not-allowed',
							opacity: '0.6',
							'&::after': {
								boxShadow: 'inset -4px -4px #adafbc',
							},
						},
					},
					input: {
						border: '4px solid #000000',
						borderImageSlice: '2',
						borderImageWidth: '2',
						borderImageOutset: '2',
						borderImageSource:
							'url(\'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>\')',
						backgroundColor: '#ffffff',
						padding: '0.5rem',
						borderRadius: '0', // Add this line to remove border radius
						'&:focus': {
							outline: 'none',
							boxShadow: '0 0 0 6px rgba(0, 107, 179, 0.3)',
						},
					},
				},
			},
		],
	},
};

module.exports = config;
