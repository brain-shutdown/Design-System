import React, { ComponentProps, ElementRef } from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import { styled, CSS, darkTheme, VariantProps } from '../../stitches.config';

//============
// TYPES
//============
type ToggleGroupRootPrimitiveProps = ComponentProps<typeof RadixToggleGroup.Root>;
type ToggleGroupRootVariants = VariantProps<typeof ToggleGroupRoot>;
type ToggleGroupRootProps = { css?: CSS } & ToggleGroupRootPrimitiveProps & ToggleGroupRootVariants;

type ToggleGroupItemPrimitiveProps = ComponentProps<typeof RadixToggleGroup.Item>;
type ToggleGroupItemProps = { css?: CSS } & ToggleGroupItemPrimitiveProps;

//============
// FUNCTION
//============
export const ToggleGroup = React.forwardRef<ElementRef<typeof ToggleGroupRoot>, ToggleGroupRootProps>(
	({ children, ...props }, forwardedRef) => (
		<ToggleGroupRoot {...props} ref={forwardedRef}>
			{children}
		</ToggleGroupRoot>
	)
);

export const ToggleGroupItem = React.forwardRef<ElementRef<typeof StyledToggleGroupItem>, ToggleGroupItemProps>(
	({ children, ...props }, forwardedRef) => (
		<StyledToggleGroupItem {...props} ref={forwardedRef}>
			{children}
		</StyledToggleGroupItem>
	)
);

//============
// STYLES
//============
const StyledToggleGroupItem = styled(RadixToggleGroup.Item, {
	all: 'unset',
	backgroundColor: '$card',
	height: 35,
	width: 35,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginLeft: 1,

	'&:first-child': {
		marginLeft: 0,
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4,
	},
	'&:last-child': {
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
	},
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
		position: 'relative',
		boxShadow: '$focus',
	},
});

const ToggleGroupRoot = styled(RadixToggleGroup.Root, {
	display: 'inline-flex',
	backgroundColor: '$border',
	borderRadius: 4,
	boxShadow: `$md`,
	variants: {
		size: {
			sm: {
				[`& ${StyledToggleGroupItem}`]: {
					height: 30,
					width: 30,
					'& svg': {
						width: 16,
						height: 16,
					},
				},
			},
			md: {
				[`& ${StyledToggleGroupItem}`]: {
					height: 35,
					width: 35,
					'& svg': {
						width: 20,
						height: 20,
					},
				},
			},
			lg: {
				[`& ${StyledToggleGroupItem}`]: {
					height: 40,
					width: 40,
					'& svg': {
						width: 22,
						height: 22,
					},
				},
			},
		},
	},

	defaultVariants: {
		size: 'md',
	},
});
