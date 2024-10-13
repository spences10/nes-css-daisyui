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
						'&:hover::after': {
							boxShadow: 'inset -6px -6px #adafbc',
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
					'.input, .select, .checkbox, .radio': {
						border: '4px solid #000000',
						borderImageSlice: '2',
						borderImageWidth: '2',
						borderImageOutset: '2',
						borderImageSource:
							'url(\'data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>\')',
						backgroundColor: '#ffffff',
						borderRadius: '0',
						'&:focus': {
							outline: 'none',
							boxShadow: '0 0 0 6px rgba(0, 107, 179, 0.3)',
						},
						'&-primary': {
							borderColor: '#209cee',
						},
						'&-success': {
							borderColor: '#92cc41',
						},
						'&-warning': {
							borderColor: '#f7d51d',
						},
						'&-error': {
							borderColor: '#e76e55',
						},
						'&:disabled': {
							backgroundColor: '#d3d3d3',
							cursor: 'not-allowed',
							opacity: '0.6',
						},
					},
					'.checkbox, .radio': {
						'&:checked': {
							backgroundColor: '#209cee',
							borderColor: '#209cee',
						},
						'&-primary:checked': {
							backgroundColor: '#209cee',
							borderColor: '#209cee',
						},
						'&-success:checked': {
							backgroundColor: '#92cc41',
							borderColor: '#92cc41',
						},
						'&-warning:checked': {
							backgroundColor: '#f7d51d',
							borderColor: '#f7d51d',
						},
						'&-error:checked': {
							backgroundColor: '#e76e55',
							borderColor: '#e76e55',
						},
					},
					'.container': {
						position: 'relative',
						padding: '1.5rem 2rem',
						border: '4px solid black',
						'& > :last-child': {
							marginBottom: '0',
						},
						'&.is-centered': {
							textAlign: 'center',
						},
						'&.is-right': {
							textAlign: 'right',
						},
						'&.with-title': {
							'& > .title': {
								display: 'table',
								padding: '0 0.5rem',
								margin: '-1.8rem 0 1rem',
								fontSize: '1rem',
								backgroundColor: 'var(--fallback-b1,oklch(var(--b1)/1))',
							},
							'&.is-centered > .title': {
								margin: '-2rem auto 1rem',
							},
							'&.is-right > .title': {
								margin: '-2rem 0 1rem auto',
							},
						},
						'&.is-dark': {
							position: 'relative',
							margin: '4px',
							color: 'var(--fallback-b1,oklch(var(--b1)/1))',
							backgroundColor: 'var(--fallback-b2,oklch(var(--b2)/1))',
							borderColor: 'white',
							'&::after': {
								position: 'absolute',
								top: '-7.2px',
								right: '-7.2px',
								bottom: '-7.2px',
								left: '-7.2px',
								zIndex: '-1',
								content: '""',
								backgroundColor: 'var(--fallback-b2,oklch(var(--b2)/1))',
							},
							'&.with-title > .title': {
								color: 'var(--fallback-b1,oklch(var(--b1)/1))',
								backgroundColor: 'var(--fallback-b2,oklch(var(--b2)/1))',
							},
						},
						'&.is-rounded': {
							borderRadius: '1rem',
							padding: '1rem 1.5rem',
							margin: '4px',
							'&.with-title > .title': {
								marginTop: '-1.5rem',
							},
							'&.with-title.is-centered > .title': {
								margin: '-1.5rem auto 1rem',
							},
							'&.with-title.is-right > .title': {
								margin: '-1.5rem 0 1rem auto',
							},
							'&.is-dark': {
								'&::after': {
									content: 'none',
								},
								'&.with-title > .title': {
									marginTop: '-1.3rem',
								},
								'&.with-title.is-centered > .title': {
									margin: '-1.3rem auto 1rem',
								},
								'&.with-title.is-right > .title': {
									margin: '-1.3rem 0 1rem auto',
								},
							},
						},
					},
				},
			},
			{
				'nes-theme-dark': {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#209cee',
					success: '#92cc41',
					warning: '#f7d51d',
					error: '#e76e55',
					'base-100': '#212529',
					'base-content': '#ffffff',
					// Inherit all other styles from 'nes-theme'
				},
			},
		],
	},
};

module.exports = config;
