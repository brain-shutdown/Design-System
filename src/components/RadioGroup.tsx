import { ComponentProps, ElementRef, forwardRef } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { styled, VariantProps, CSS } from '../../stitches.config';
import { RxCheck } from 'react-icons/rx';

//============
// TYPES
//============
type RadioGroupPrimitiveProps = ComponentProps<typeof RadioGroup.Root>;
type RadioGroupVariants = VariantProps<typeof RadioGroupRoot>;
type RadioGroupProps = {
	css?: CSS;
	hasCheckMark?: boolean;
	items: {
		value: string;
		id: string;
	}[];
} & RadioGroupPrimitiveProps &
	RadioGroupVariants;

//============
// FUNCTION
//============
const RadioGroupDemo = forwardRef<ElementRef<typeof RadioGroupRoot>, RadioGroupProps>(
	({ items, size, hasCheckMark, ...radioGroupProps }, forwardedRef) => (
		<RadioGroupRoot size={size} {...radioGroupProps} ref={forwardedRef}>
			{items.map(({ value, id }) => {
				return (
					<Flex key={id}>
						<RadioGroupItem
							value={value}
							id={id}
							className={`${hasCheckMark ? 'icon' : ''}`}
							aria-label={value}>
							<RadioGroupIndicator asChild={hasCheckMark}>
								{hasCheckMark && <RxCheck />}
							</RadioGroupIndicator>
						</RadioGroupItem>
						<Label htmlFor={id}>{value}</Label>
					</Flex>
				);
			})}
		</RadioGroupRoot>
	)
);

//============
// STYLES
//============

const Flex = styled('div', {
	display: 'flex',
	alignItems: 'center',
});

const Label = styled('label', {
	paddingLeft: 15,
	textTransform: 'capitalize',
});

const RadioGroupIndicator = styled(RadioGroup.Indicator, {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	position: 'relative',
	color: 'white',

	'&::after': {
		content: '""',
		display: 'block',
		borderRadius: '50%',
		backgroundColor: '$primary600',
	},
});

const RadioGroupItem = styled(RadioGroup.Item, {
	all: 'unset',
	cursor: 'pointer',
	backgroundColor: 'white',
	borderRadius: '$round',
	border: '1px solid $gray300',
	boxShadow: '$md',

	'&:enabled:hover': {
		backgroundColor: '$primary50',
		borderColor: '$primary600',
	},

	'&:focus-visible': {
		boxShadow: '$focus',
	},

	'&:disabled': {
		boxShadow: '$xs',
		backgroundColor: '$gray100',
		cursor: 'default',
	},

	'&[data-state="checked"]': {
		backgroundColor: '$primary50',
		borderColor: '$primary600',

		'&.icon': {
			backgroundColor: '$primary600',
		},

		'&:disabled': {
			backgroundColor: '$gray100',
			borderColor: '$gray400',
			[`& ${RadioGroupIndicator}`]: {
				color: '$gray400',
				'&::after': {
					backgroundColor: '$gray400',
				},
			},
		},
	},
});

const RadioGroupRoot = styled(RadioGroup.Root, {
	display: 'flex',
	flexDirection: 'column',
	gap: 10,

	'&[data-disabled]': {
		[`& ${Label}`]: {
			opacity: 0.7,
		},
	},

	variants: {
		size: {
			'1': {
				[`& ${RadioGroupIndicator}`]: {
					'&::after': {
						width: 8,
						height: 8,
					},
				},
				[`& ${RadioGroupItem}`]: {
					width: 16,
					height: 16,
				},
				[`& ${Label}`]: {
					fontSize: '$sm',
				},
			},
			'2': {
				[`& ${RadioGroupIndicator}`]: {
					'&::after': {
						width: 10,
						height: 10,
					},
				},
				[`& ${RadioGroupItem}`]: {
					width: 20,
					height: 20,
				},
			},
		},
	},
	defaultVariants: {
		size: '1',
	},
});

export default RadioGroupDemo;
