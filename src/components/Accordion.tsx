import React, { ComponentProps, ElementRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { styled, CSS, keyframes, darkTheme, VariantProps } from '../../stitches.config';
import { RxChevronDown } from 'react-icons/rx';

//============
// TYPES
//============
type AccordionRootPrimitiveProps = ComponentProps<typeof RadixAccordion.Root>;
type AccordionRootVariants = VariantProps<typeof StyledRoot>;
type AccordionRootProps = {
	css?: CSS;
} & AccordionRootPrimitiveProps &
	AccordionRootVariants;

type AccordionTriggerPrimitiveProps = ComponentProps<typeof RadixAccordion.Trigger>;
type AccordionTriggerProps = { css?: CSS } & AccordionTriggerPrimitiveProps;

type AccordionContentPrimitiveProps = ComponentProps<typeof RadixAccordion.Content>;
type AccordionContentProps = { css?: CSS } & AccordionContentPrimitiveProps;

//============
// FUNCTION
//============
export const Accordion = React.forwardRef<ElementRef<typeof StyledRoot>, AccordionRootProps>(
	({ children, ...props }, forwardedRef) => (
		<StyledRoot ref={forwardedRef} {...props}>
			{children}
		</StyledRoot>
	)
);

export const AccordionTrigger = React.forwardRef<ElementRef<typeof StyledTrigger>, AccordionTriggerProps>(
	({ children, ...props }, forwardedRef) => (
		<StyledHeader>
			<StyledTrigger {...props} ref={forwardedRef}>
				{children}
				<StyledChevron aria-hidden />
			</StyledTrigger>
		</StyledHeader>
	)
);

export const AccordionContent = React.forwardRef<ElementRef<typeof StyledContent>, AccordionContentProps>(
	({ children, ...props }, forwardedRef) => (
		<StyledContent {...props} ref={forwardedRef}>
			<StyledContentText>{children}</StyledContentText>
		</StyledContent>
	)
);

//============
// STYLES
//============

export const AccordionItem = styled(RadixAccordion.Item, {
	overflow: 'hidden',
	borderTop: '1px solid $border',

	'&:last-of-type': {
		borderBottom: '1px solid $border',
	},

	'&:first-child': {
		marginTop: 0,
	},

	'&:focus-within': {
		position: 'relative',
		zIndex: 1,
		boxShadow: `0 0 0 2px $border`,
	},
});

const StyledHeader = styled(RadixAccordion.Header, {
	all: 'unset',
	display: 'flex',
});

const StyledTrigger = styled(RadixAccordion.Trigger, {
	all: 'unset',
	padding: '12px 16px',
	flex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	lineHeight: 1,
	cursor: 'pointer',

	'&:hover': {
		backgroundColor: '$colors$gray25',
	},

	[`.${darkTheme} &`]: {
		'&:hover': {
			backgroundColor: '$colors$gray800',
		},
	},
});

const StyledChevron = styled(RxChevronDown, {
	color: '$body',
	transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
	'[data-state=open] &': {
		transform: 'rotate(180deg)',
	},
});

const slideDown = keyframes({
	from: { height: 0 },
	to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
	from: { height: 'var(--radix-accordion-content-height)' },
	to: { height: 0 },
});

const StyledContent = styled(RadixAccordion.Content, {
	overflow: 'hidden',

	'&[data-state="open"]': {
		animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
	},
	'&[data-state="closed"]': {
		animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
	},
});

const StyledContentText = styled('div', {
	padding: '12px 16px',
});

const StyledRoot = styled(RadixAccordion.Root, {
	overflow: 'hidden',
	variants: {
		isCard: {
			true: {
				borderRadius: '$2',
				boxShadow: '$lg',
				background: '$colors$card',

				[`& ${AccordionItem}`]: {
					'&:first-child': {
						borderTop: 'none',
					},

					'&:last-child': {
						borderBottom: 'none',
					},
				},
				[`& ${StyledTrigger}`]: {
					'&:hover': {
						backgroundColor: '$colors$gray50',
					},

					[`.${darkTheme} &`]: {
						'&:hover': {
							backgroundColor: '$colors$gray700',
						},
					},
				},
			},
		},
	},
});
