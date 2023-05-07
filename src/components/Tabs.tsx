import React, { ComponentProps, ElementRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { styled, CSS, darkTheme, VariantProps } from '../../stitches.config';
import { flushSync } from 'react-dom';

//============
// TYPES
//============
type TabsPrimitiveProps = ComponentProps<typeof TabsPrimitive.Root>;
type TabsVariants = VariantProps<typeof TabsRoot>;
type TabsProps = { css?: CSS } & TabsPrimitiveProps & TabsVariants;

export const Tabs = React.forwardRef<ElementRef<typeof TabsRoot>, TabsProps>(({ children, ...props }, forwardedRef) => (
	<TabsRoot ref={forwardedRef} {...props}>
		{children}
	</TabsRoot>
));

export const TabsContent = styled(TabsPrimitive.Content, {
	flexGrow: 1,
	padding: 20,
	background: '$background',
	outline: 'none',
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
	all: 'unset',
	fontFamily: 'inherit',
	background: '$background',
	cursor: 'pointer',
	padding: '0 20px',
	height: 45,
	flex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	lineHeight: 1,
	color: '$gray500',
	userSelect: 'none',

	'&:hover': {
		color: '$body',
	},
	'&[data-state="active"]': {
		color: '$primary700',
		boxShadow: 'inset 0 -1px 0 0 $colors$primary600, 0 1px 0 0 $colors$primary600',
	},
	'&:focus': {
		position: 'relative',
	},

	'&[data-orientation="vertical"]': {
		justifyContent: 'flex-start',
		'&[data-state="active"]': {
			boxShadow: 'inset -1px 0 0 0 $colors$primary600, 1px 0 0 0 $colors$primary600',
		},
	},

	[`.${darkTheme} &`]: {
		color: '$gray300',
		'&:hover': {
			color: '$gray50',
		},
		'&[data-state="active"]': {
			color: '$primary600',
		},
	},
});

const TabsRoot = styled(TabsPrimitive.Root, {
	display: 'flex',
	flexDirection: 'column',
	minWidth: 300,

	'&[data-orientation="vertical"]': {
		flexDirection: 'row',
	},

	variants: {
		isCard: {
			true: {
				boxShadow: '$outerBorder, $lg',
				borderRadius: '$2',

				[`& ${TabsContent}`]: {
					borderBottomLeftRadius: '$2',
					borderBottomRightRadius: '$2',

					'&[data-orientation="vertical"]': {
						borderBottomLeftRadius: 'unset',
						borderTopRightRadius: '$2',
					},

					[`.${darkTheme} &`]: {
						background: '$card',
					},
				},
				[`& ${TabsTrigger}`]: {
					'&:first-child': {
						borderTopLeftRadius: '$2',
					},
					'&:last-child': {
						borderTopRightRadius: '$2',
					},
					'&[data-orientation="vertical"]': {
						'&:first-child': {
							borderRadius: 'unset',
							borderTopLeftRadius: '$2',
						},
						'&:last-child': {
							borderRadius: 'unset',
							borderBottomLeftRadius: '$2',
						},
					},
					[`.${darkTheme} &`]: {
						background: '$card',
					},
				},
			},
		},
	},
});

export const TabsList = styled(TabsPrimitive.List, {
	flexShrink: 0,
	display: 'flex',
	borderBottom: `1px solid $border`,

	'&[data-orientation="vertical"]': {
		flexDirection: 'column',
		borderBottom: 'unset',
		borderRight: `1px solid $border`,
	},
});
