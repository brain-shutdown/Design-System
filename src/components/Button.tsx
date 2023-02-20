import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { darkTheme, styled, config, VariantProps, CSS } from '../../stitches.config';
import type * as Stitches from '@stitches/react';

//============
// TYPES
//============

type ButtonVariants = VariantProps<typeof ButtonElement>;
type AnchorVariants = VariantProps<typeof AnchorElement>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonVariants & {
		as?: 'button' | undefined;
		css?: CSS;
		children: ReactNode;
	};

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
	AnchorVariants & {
		as: 'a';
		css?: CSS;
		children: ReactNode;
	};

//============
// FUNCTION
//============
function Button(args: AnchorProps | ButtonProps) {
	if (args.as === 'a') {
		return <AnchorElement {...args} />;
	}
	return <ButtonElement {...args} />;
}

//============
// STYLES
//============
const AnchorElement = styled('a', {
	cursor: 'pointer',
	color: '$link',
	position: 'relative',
	textDecoration: 'none',

	'&::after': {
		transition: 'width 0.3s cubic-bezier(.4,0,1,1)',
		content: '',
		position: 'absolute',
		backgroundColor: '$link',
		height: 2,
		width: 0,
		left: 0,
		bottom: 0,
	},

	'&:hover::after': {
		width: '100%',
	},
});

const ButtonElement = styled('button', {
	fontWeight: '$semibold',
	cursor: 'pointer',
	minWidth: '6rem',
	borderRadius: '$3',
	boxShadow: '$md',
	transition: 'box-shadow 0.1s linear, transform 0.1s linear',

	'&.icon': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '$8',
	},
	'& svg': {
		width: 16,
		height: 16,
	},

	'&:enabled:active': {
		transform: 'scale(0.98)',
		boxShadow: '$sm',
	},

	'&:focus': {
		boxShadow: '$focus',
		outlineOffset: '2',
	},

	'&:disabled': {
		boxShadow: '$xs',
		cursor: 'default',
	},

	variants: {
		size: {
			1: {
				fontSize: '$sm',
				px: '0.875rem', //14px
				py: '0.5rem', //8px
			},
			2: {
				fontSize: '$sm',
				px: '1rem', //16px
				py: '0.625rem', //10px
			},
			3: {
				fontSize: '$md',
				px: '1.125rem', //18px
				py: '0.625rem', //10px
			},
			4: {
				fontSize: '$md',
				px: '1.25rem', //20px
				py: '0.75rem', //12px
			},
			5: {
				fontSize: '$lg',
				px: '1.75rem', //28px
				py: '1rem', //16px
			},
		},
		variant: {
			//===================
			// PRIMARY BUTTON
			//===================
			primary: {
				color: 'white',
				backgroundColor: '$primary700',
				'&:enabled:hover': {
					backgroundColor: '$primary800',
				},
				'&:disabled': {
					backgroundColor: '$primary800',
					color: '$primary100',
					opacity: 0.5,
				},
			},

			//===================
			// SECONDARY BUTTON
			//===================
			secondary: {
				color: '$gray700',
				backgroundColor: '$gray100',

				[`.${darkTheme} &`]: {
					color: 'white',
					backgroundColor: '$gray800',
				},

				'&:enabled:hover': {
					color: '$primary700',
					[`.${darkTheme} &`]: {
						color: 'white',
						backgroundColor: '$gray700',
					},
				},

				'&:disabled': {
					opacity: 0.5,
					backgroundColor: '$gray200',
					[`.${darkTheme} &`]: {
						opacity: 0.5,
						backgroundColor: '$gray500',
					},
				},
			},

			//===================
			// ERROR BUTTON
			//===================
			error: {
				color: 'white',
				backgroundColor: '$error600',
				'&:enabled:hover': {
					backgroundColor: '$error700',
				},
				'&:disabled': {
					backgroundColor: '$error800',
					opacity: 0.6,
				},
			},
		},

		//===================
		// OUTLINED BUTTON
		//===================
		outlined: {
			true: {
				backgroundColor: 'white',
				border: '1px solid $gray300',
				color: '$gray700',
				'&:enabled:hover': {
					backgroundColor: '$gray50',
				},
				'&:disabled': {
					color: '$gray300',
					borderColor: '$gray200',
					backgroundColor: 'white',
				},
			},
		},
	},

	compoundVariants: [
		//===================
		// OUTLINED + ERROR
		//===================
		{
			outlined: true,
			variant: 'error',
			css: {
				backgroundColor: 'white',
				border: '1px solid $error300',
				color: '$error700',
				'&:enabled:hover': {
					backgroundColor: '$error50',
				},
				'&:disabled': {
					color: '$error400',
					borderColor: '$error200',
					backgroundColor: 'white',
				},
			},
		},
		//===================
		// OUTLINED + PRIMARY
		//===================
		{
			variant: 'primary',
			outlined: true,
			css: {
				backgroundColor: 'white',
				border: '1px solid $gray300',
				color: '$gray700',
				'&:enabled:hover': {
					color: '$primary700',
					backgroundColor: '$gray50',
				},
				'&:disabled': {
					color: '$gray300',
					borderColor: '$gray200',
					backgroundColor: 'white',
				},
			},
		},
		//=======================================
		// OUTLINED + SECONDARY (SAME AS PRIMARY)
		//=======================================
		{
			variant: 'secondary',
			outlined: true,
			css: {
				backgroundColor: 'white',
				border: '1px solid $gray300',
				color: '$gray700',

				[`.${darkTheme} &`]: {
					color: '$gray700',
					backgroundColor: 'white',
				},

				'&:enabled:hover': {
					color: '$primary700',
					backgroundColor: '$gray50',

					[`.${darkTheme} &`]: {
						color: '$primary700',
						backgroundColor: '$gray50',
					},
				},

				'&:disabled': {
					color: '$gray300',
					borderColor: '$gray200',
					backgroundColor: 'white',

					[`.${darkTheme} &`]: {
						opacity: 0.5,
						backgroundColor: 'white',
					},
				},
			},
		},
	],

	defaultVariants: {
		variant: 'primary',
		size: 2,
	},
});

export default Button;
