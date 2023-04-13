import React, { ComponentProps, ElementRef, ReactNode } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { RxCheck, RxChevronDown, RxChevronUp } from 'react-icons/rx';
import { darkTheme, styled, VariantProps, CSS } from '../../stitches.config';

//============
// TYPES
//============
type SelectPrimitiveProps = ComponentProps<typeof RadixSelect.Root>;
type SelectVariants = VariantProps<typeof SelectRoot>;
export type SelectProps = {
	css?: CSS;
	label: string;
	placeholder?: string;
	children?: ReactNode;
} & SelectPrimitiveProps &
	SelectVariants;

type SelectItemPrimitiveProps = ComponentProps<typeof RadixSelect.Item>;
type SelectItemVariants = VariantProps<typeof StyledItem>;
export type SelectItemProps = { css?: CSS } & SelectItemPrimitiveProps & SelectItemVariants;

type SelectContentPrimitiveProps = ComponentProps<typeof RadixSelect.Content>;
type SelectContentVariants = VariantProps<typeof StyledContent>;
export type SelectContentProps = { css?: CSS } & SelectContentPrimitiveProps & SelectContentVariants;

//============
// FUNCTION
//============
export const Select = ({ label, placeholder, children, ...props }: SelectProps) => (
	<SelectRoot {...props}>
		<SelectTrigger aria-label={label} css={props.css}>
			<RadixSelect.Value placeholder={placeholder} />
			<SelectIcon>
				<RxChevronDown />
			</SelectIcon>
		</SelectTrigger>
		<RadixSelect.Portal>{children}</RadixSelect.Portal>
	</SelectRoot>
);

export const SelectItem = React.forwardRef<ElementRef<typeof StyledItem>, SelectItemProps>(
	({ children, ...props }, forwardedRef) => {
		return (
			<StyledItem {...props} ref={forwardedRef}>
				<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
				<StyledItemIndicator>
					<RxCheck />
				</StyledItemIndicator>
			</StyledItem>
		);
	}
);

export const SelectContent = React.forwardRef<ElementRef<typeof StyledContent>, SelectContentProps>(
	({ children, ...props }, forwardedRef) => {
		return (
			<StyledContent {...props} ref={forwardedRef}>
				<SelectScrollUpButton>
					<RxChevronUp />
				</SelectScrollUpButton>
				<SelectViewport>{children}</SelectViewport>
				<SelectScrollDownButton>
					<RxChevronDown />
				</SelectScrollDownButton>
			</StyledContent>
		);
	}
);

//============
// STYLES
//============
const SelectTrigger = styled(RadixSelect.SelectTrigger, {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderRadius: '$1',
	padding: '0 15px',
	fontSize: '$sm',
	lineHeight: 1,
	height: 35,
	gap: 5,
	backgroundColor: 'white',
	boxShadow: '$md, $outerBorder',
	cursor: 'pointer',

	'&:hover': {
		backgroundColor: '$gray25',
	},
	'&:focus': {
		boxShadow: '$focus',
	},
	'&[data-placeholder]': {
		color: '$gray500',
		[`.${darkTheme} &`]: {
			color: '$gray200',
		},
	},
	[`.${darkTheme} &`]: {
		backgroundColor: '$gray800',
		'&:hover': {
			backgroundColor: '$gray700',
		},
	},
});

const SelectIcon = styled(RadixSelect.SelectIcon, {
	color: '$body',
});

const StyledContent = styled(RadixSelect.Content, {
	overflow: 'hidden',
	backgroundColor: '$card',
	borderRadius: '$2',
	boxShadow: '$xl, $outerBorder',

	width: 'var(--radix-select-trigger-width)',
	maxHeight: 'var(--radix-select-content-available-height)',
});

const SelectViewport = styled(RadixSelect.Viewport, {
	padding: 5,
});

const StyledItemIndicator = styled(RadixSelect.ItemIndicator, {
	position: 'absolute',
	left: 0,
	width: 25,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '$primary700',
	[`.${darkTheme} &`]: {
		color: '$primary500',
	},
});

const StyledItem = styled(RadixSelect.Item, {
	fontSize: '$sm',
	lineHeight: 1,
	borderRadius: 3,
	display: 'flex',
	alignItems: 'center',
	height: 25,
	padding: '0 35px 0 25px',
	position: 'relative',
	userSelect: 'none',

	'&[data-disabled]': {
		color: '$gray300',
		pointerEvents: 'none',
		[`.${darkTheme} &`]: {
			color: '$gray600',
		},
	},

	'&[data-state="checked"]': {
		color: '$primary700',
		[`.${darkTheme} &`]: {
			color: '$primary500',
		},
	},

	'&[data-highlighted]': {
		outline: 'none',
		backgroundColor: '$primary25',
		color: '$primary700',
		[`.${darkTheme} &`]: {
			color: '$primary800',
			backgroundColor: '$primary100',
			[`& ${StyledItemIndicator}`]: {
				color: '$primary800',
			},
		},
	},
});

const scrollButtonStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: 25,
	backgroundColor: '$card',
	cursor: 'default',
};

const SelectScrollUpButton = styled(RadixSelect.ScrollUpButton, scrollButtonStyles);

const SelectScrollDownButton = styled(RadixSelect.ScrollDownButton, scrollButtonStyles);

const SelectRoot = styled(RadixSelect.Root, {});

// EXPORTED STYLES
export const SelectGroup = styled(RadixSelect.Group, {});

export const SelectLabel = styled(RadixSelect.Label, {
	padding: '0 25px',
	fontSize: '$xs',
	lineHeight: '$md',
	color: '$purple50',
	[`.${darkTheme} &`]: {
		color: '$purple30',
	},
});

export const SelectSeparator = styled(RadixSelect.Separator, {
	height: 1,
	backgroundColor: '$separator',
	margin: 5,
});
