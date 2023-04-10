import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react';
import * as RadixToggle from '@radix-ui/react-toggle';
import { darkTheme, styled, VariantProps, CSS } from '../../stitches.config';

//============
// TYPES
//============

type TogglePrimitiveProps = ComponentProps<typeof RadixToggle.Root>;
type ToggleVariants = VariantProps<typeof ToggleRoot>;
type ToggleProps = {
	css?: CSS;
	children?: ReactNode;
} & TogglePrimitiveProps &
	ToggleVariants;

//============
// FUNCTION
//============
const Toggle = forwardRef<ElementRef<typeof ToggleRoot>, ToggleProps>(({ children, size, ...props }, forwardedRef) => (
	<ToggleRoot aria-label='Toggle italic' ref={forwardedRef} size={size} {...props}>
		{children}
	</ToggleRoot>
));

//============
// STYLES
//============
const ToggleRoot = styled(RadixToggle.Root, {
	all: 'unset',
	backgroundColor: '$card',
	borderRadius: 4,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	boxShadow: '$md',

	'&:hover': {
		backgroundColor: '$syntax',
	},
	'&[data-state=on]': {
		backgroundColor: '$primary50',
		[`.${darkTheme} &`]: {
			backgroundColor: '$primary700',
		},
	},
	'&:focus': {
		boxShadow: '$focus',
	},

	variants: {
		size: {
			sm: {
				height: 30,
				width: 30,
				'& svg': {
					width: 16,
					height: 16,
				},
			},
			md: {
				height: 35,
				width: 35,
				'& svg': {
					width: 20,
					height: 20,
				},
			},
			lg: {
				height: 40,
				width: 40,
				'& svg': {
					width: 22,
					height: 22,
				},
			},
		},
	},

	defaultVariants: {
		size: 'md',
	},
});

export default Toggle;
