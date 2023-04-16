import React, { ComponentProps, ElementRef } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { VariantProps, keyframes, styled, CSS } from '../../stitches.config';

//============
// TYPES
//============
type HoverCardContentPrimitiveProps = ComponentProps<typeof HoverCardPrimitive.Content>;
type HoverCardContentVariants = VariantProps<typeof StyledHoverCardContent>;
type HoverCardContentProps = { css?: CSS } & HoverCardContentPrimitiveProps & HoverCardContentVariants;

//============
// FUNCTION
//============
export const HoverCardContent = React.forwardRef<ElementRef<typeof StyledHoverCardContent>, HoverCardContentProps>(
	({ children, ...props }, forwardedRef) => (
		<HoverCardPrimitive.Portal>
			<StyledHoverCardContent {...props} ref={forwardedRef}>
				{children}
				<HoverCardArrow asChild>
					<svg viewBox='0 0 30 20' xmlns='http://www.w3.org/2000/svg'>
						<polyline points='0,0 15,20 30,0' />
					</svg>
				</HoverCardArrow>
			</StyledHoverCardContent>
		</HoverCardPrimitive.Portal>
	)
);

//============
// STYLES
//============
export const HoverCard = styled(HoverCardPrimitive.Root, {});
export const HoverCardTrigger = styled(HoverCardPrimitive.Trigger, {});

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

const StyledHoverCardContent = styled(HoverCardPrimitive.Content, {
	borderRadius: 6,
	padding: 20,
	width: 300,
	backgroundColor: '$card',
	boxShadow: '$lg, $outerBorder',
	animationDuration: '400ms',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	willChange: 'transform, opacity',
	'&[data-state="open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
});

const HoverCardArrow = styled(HoverCardPrimitive.Arrow, {
	zIndex: 1000,
	fill: '$card',
	stroke: '$border',
	strokeWidth: '2px',
});
