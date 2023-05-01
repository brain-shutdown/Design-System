import React, { ComponentProps, ElementRef, ReactNode } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { VariantProps, CSS, keyframes, styled, darkTheme } from '../../stitches.config';
import { RxCross2 } from 'react-icons/rx';

//============
// TYPES
//============
type PopoverPrimitiveProps = ComponentProps<typeof PopoverPrimitive.Content>;
type PopoverVariants = VariantProps<typeof StyledPopoverContent>;
export type PopoverProps = {
	css?: CSS;
	children?: ReactNode;
} & PopoverPrimitiveProps &
	PopoverVariants;

//============
// FUNCTIONS
//============
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = React.forwardRef<ElementRef<typeof StyledPopoverContent>, PopoverProps>(
	({ children, ...props }, forwardedRef) => (
		<PopoverPrimitive.Portal>
			<StyledPopoverContent sideOffset={5} {...props} ref={forwardedRef}>
				{children}
				<PopoverClose aria-label='Close'>
					<RxCross2 />
				</PopoverClose>
				<PopoverArrow width={15} asChild>
					<svg viewBox='0 0 30 20' xmlns='http://www.w3.org/2000/svg'>
						<polyline points='0,0 15,20 30,0' />
					</svg>
				</PopoverArrow>
			</StyledPopoverContent>
		</PopoverPrimitive.Portal>
	)
);

//============
// STYLES
//============
const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledPopoverContent = styled(PopoverPrimitive.Content, {
	borderRadius: '$1',
	padding: '$20',
	maxWidth: '21rem',
	backgroundColor: 'white',
	border: '1px solid $border',
	boxShadow: '$md',
	animationDuration: '400ms',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	willChange: 'transform, opacity',

	[`.${darkTheme} &`]: {
		backgroundColor: '$card',
	},

	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
});

const PopoverArrow = styled(PopoverPrimitive.Arrow, {
	zIndex: 1000,
	fill: 'white',
	stroke: '$border',
	strokeWidth: '2px',

	[`.${darkTheme} &`]: {
		fill: '$card',
	},
});

const PopoverClose = styled(PopoverPrimitive.Close, {
	all: 'unset',
	height: 25,
	width: 25,
	color: '$gray500',
	position: 'absolute',
	top: 5,
	right: 5,

	'&:hover': {
		color: '$gray800',
	},

	[`.${darkTheme} &`]: {
		backgroundColor: '$card',
		color: '$gray200',
		'&:hover': {
			color: '$gray400',
		},
	},
});
