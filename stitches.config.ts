import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export type { VariantProps } from '@stitches/react';
export type CSS = Stitches.CSS<typeof config>;
export const { styled, globalCss, css, keyframes, theme, createTheme, config } = createStitches({
	theme: {
		colors: {
			// Primary Gray
			gray25: '#F6F7F9',
			gray50: '#F1F2F5',
			gray100: '#EBECF0',
			gray200: '#D4D7DF',
			gray300: '#BCC1CD',
			gray400: '#99A1B3',
			gray500: '#78839B',
			gray600: '#4E5769',
			gray700: '#404756',
			gray800: '#343A46',
			gray900: '#23272F',
			gray950: '#16181D',

			// Main colors
			title: '$gray900',
			body: '$gray700',
			link: '$primary700',
			syntax: '$gray100',
			background: '#FFFFFF',
			card: '$gray25',
			highlight: '$primary25',
			separator: '$gray200',
			border: '$gray200',

			// Primary Color
			primary25: '#E6F6FA',
			primary50: '#D8F1F7',
			primary100: '#C2EAF2',
			primary200: '#ABE2ED',
			primary300: '#82D3E5',
			primary400: '#58C4DC',
			primary500: '#36B1D3',
			primary600: '#149ECA',
			primary700: '#087EA4',
			primary800: '#066C8D',
			primary900: '#045975',

			// Error Color
			error25: '#FFFBFA',
			error50: '#FEF3F2',
			error100: '#FEE4E2',
			error200: '#FECDCA',
			error300: '#FDA29B',
			error400: '#F97066',
			error500: '#F04438',
			error600: '#D92D20',
			error700: '#B42318',
			error800: '#912018',
			error900: '#7A2E0E',

			// Warning Color
			warning25: '#FFFCF5',
			warning50: '#FFFAEB',
			warning100: '#FEF0C7',
			warning200: '#FEDF89',
			warning300: '#FEC84B',
			warning400: '#FDB022',
			warning500: '#F79009',
			warning600: '#DC6803',
			warning700: '#B54708',
			warning800: '#93370D',
			warning900: '#7A2E0E',

			// Success Color
			success25: '#F6FEF9',
			success50: '#ECFDF3',
			success100: '#D1FADF',
			success200: '#A6F4C5',
			success300: '#6CE9A6',
			success400: '#32D583',
			success500: '#12B76A',
			success600: '#039855',
			success700: '#027A48',
			success800: '#05603A',
			success900: '#054F31',

			//+++++++++++++++++++++
			//OTHER COLORS
			//+++++++++++++++++++++
			// Yellow
			yellow60: '#B65700',
			yellow50: '#C76A15',
			yellow40: '#DB7D27',
			yellow30: '#FABD62',
			yellow20: '#FCDEB0',
			yellow10: '#FDE7C7',
			yellow5: '#FEF5E7',

			// Purple
			purple60: '#2B3491',
			purple50: '#575FB7',
			purple40: '#6B75DB',
			purple30: '#8891EC',
			purple20: '#C3C8F5',
			purple10: '#E7E9FB',
			purple5: '#F3F4FD',

			// Green
			green60: '#2B6E62',
			green50: '#388F7F',
			green40: '#44AC99',
			green30: '#7FCCBF',
			green20: '#ABDED5',
			green10: '#E5F5F2',
			green5: '#F4FBF9',

			// RED
			red60: '#712D28',
			red50: '#A6423A',
			red40: '#C1554D',
			red30: '#D07D77',
			red20: '#E5B7B3',
			red10: '#F2DBD9',
			red5: '#FAF1F0',
		},
		space: {
			4: '0.25rem',
			8: '0.5rem',
			12: '0.75rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			32: '2rem',
			40: '2.5rem',
			48: '3rem',
			64: '4rem',
			80: '5rem',
			96: '6rem',
			128: '8rem',
			160: '10rem',
			192: '12rem',
			224: '14rem',
			256: '16rem',
		},
		fontSizes: {
			h1: '4.5rem',
			h2: '3.75rem',
			h3: '3rem',
			h4: '2.25rem',
			h5: '1.875rem',
			h6: '1.5rem',
			xl: '1.25rem',
			lg: '1.125rem',
			md: '1rem',
			sm: '0.875rem',
			xs: '0.75rem',
		},
		fonts: {
			inter: 'Inter, apple-system, sans-serif',
		},
		fontWeights: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},
		lineHeights: {
			h1: '5.625rem',
			h2: '4.5rem',
			h3: '3.75rem',
			h4: '2.75rem',
			h5: '2.375rem',
			h6: '2rem',
			xl: '1.875rem',
			lg: '1.75rem',
			md: '1.5rem',
			sm: '1.25rem',
			xs: '1.125rem',
		},
		radii: {
			1: '4px',
			2: '6px',
			3: '8px',
			4: '12px',
			round: '50%',
			pill: '9999px',
		},
		shadows: {
			xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			xxxl: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			inner: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.05)',
			innerBorder: 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)',
			outerBorder: '0 0 0 1px rgba(0, 0, 0, 0.1)',
			inputFocus:
				'0 0 0 0 rgb(255, 255, 255), 0 0 0 2px rgba(59, 130, 246, 0.5), inset 0 1px 4px 0 rgba(0, 0, 0, 0.05)',
			focus: 'white 0 0 0 1.25px, $colors$primary600 0 0 0 2.25px',
		},
	},
	media: {
		xs: '(min-width: 374px)',
		sm: '(min-width: 640px)',
		md: '(min-width: 834px)',
		lg: '(min-width: 1280px)',
	},
	utils: {
		mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
			marginLeft: value,
			marginRight: value,
		}),
		my: (value: Stitches.PropertyValue<'marginTop'>) => ({
			marginTop: value,
			marginBottom: value,
		}),
		px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
	},
});

export const darkTheme = createTheme({
	colors: {
		// Text colors
		title: '$gray25',
		body: '$gray100',
		link: '$primary600',
		syntax: '$gray100',
		background: '$gray900',
		card: '$gray800',
		highlight: 'rgba(88,175,223,.1)',
		separator: '$gray500',
		border: '$gray600',
	},
	shadows: {
		lg: '0 0 0 1px rgba(255,255,255,.15), 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)',
		innerBorder: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
		outerBorder: '0 0 0 1px rgba(255, 255, 255, 0.1)',
	},
});

export const globalStyles = globalCss({
	'*, *:before, *:after': {
		boxSizing: 'border-box',
		'-webkit-text-size-adjust': '100%',
	},
	html: {
		lineHeight: 1.15,
	},
	body: {
		backgroundColor: '$background',
		color: '$body',
		fontSize: '$md',
		fontFamily: '$inter',
		margin: 0,
	},
	main: {
		display: 'block',
	},
	'h1, h2, h3, h4, h5, h6': {
		color: '$title',
		margin: '0 $8',
	},
	h1: {
		fontSize: '$h1',
		lineHeight: '$h1',
	},
	h2: {
		fontSize: '$h2',
		lineHeight: '$h2',
	},
	h3: {
		fontSize: '$h3',
		lineHeight: '$h3',
	},
	h4: {
		fontSize: '$h4',
		lineHeight: '$h4',
	},
	h5: {
		fontSize: '$h5',
		lineHeight: '$h5',
	},
	h6: {
		fontSize: '$h6',
		lineHeight: '$h6',
	},
	hr: {
		boxSizing: 'content-box',
		height: 0,
		overflow: 'visible',
	},
	pre: {
		fontFamily: 'monospace, monospace',
		fontSize: '1em',
	},
	a: {
		backgroundColor: 'transparent',
	},
	'abbr[title]': {
		borderBottom: 'none',
		textDecoration: 'underline',
	},
	'b, strong': {
		fontWeight: 'bolder',
	},
	'code, kbd, samp': {
		fontFamily: 'monospace, monospace',
		fontSize: '1em',
	},
	small: {
		fontSize: '80%',
	},
	'sub, sup': {
		fontSize: '75%',
		lineHeight: 0,
		position: 'relative',
		verticalAlign: 'baseline',
	},
	sub: {
		bottom: '-0.25em',
	},
	sup: {
		top: '-0.5em',
	},
	img: {
		borderStyle: 'none',
	},
	'button, input, optgroup, select, textarea': {
		appearance: 'none',
		border: 'none',
		fontFamily: 'inherit',
		fontSize: '100%',
		lineHeight: 1.15,
		margin: 0,
	},
	'button, input': {
		overflow: 'visible',
	},
	'button, select': {
		textTransform: 'none',
	},
	fieldset: {
		padding: '0.35em 0.75em 0.625em',
	},
	legend: {
		boxSizing: 'border-box',
		color: 'inherit',
		display: 'table',
		maxWidth: '100%',
		padding: 0,
		whiteSpace: 'normal',
	},
	progress: {
		verticalAlign: 'baseline',
	},
	textarea: {
		overflow: 'auto',
	},
	'[type="checkbox"], [type="radio"]': {
		boxSizing: 'border-box',
		padding: 0,
	},
	'[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
		height: 'auto',
	},

	details: {
		display: 'block',
	},
	summary: {
		display: 'list-item',
	},
	template: {
		display: 'none',
	},
	':focus-visible': {
		outline: 'none',
	},
});
