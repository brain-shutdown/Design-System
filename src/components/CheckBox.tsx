import { ComponentProps, ElementRef, forwardRef } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { styled, VariantProps, CSS } from '../../stitches.config';
import { RxMinus, RxCheck } from 'react-icons/rx';

//============
// TYPES
//============
type CheckboxPrimitiveProps = ComponentProps<typeof RadixCheckbox.Root>;
type CheckboxVariants = VariantProps<typeof StyledCheckBox>;
type CheckboxProps = {
	css?: CSS;
	label?: string;
	indeterminate?: boolean;
} & CheckboxPrimitiveProps &
	CheckboxVariants;

//============
// FUNCTION
//============
const Checkbox = forwardRef<ElementRef<typeof CheckboxRoot>, CheckboxProps>(
	({ size, indeterminate, label, ...checkboxProps }, forwardRef) => {
		return (
			<StyledCheckBox size={size}>
				<CheckboxRoot {...checkboxProps} ref={forwardRef} aria-label='checkbox'>
					<CheckboxIndicator>{indeterminate ? <RxMinus /> : <RxCheck />}</CheckboxIndicator>
				</CheckboxRoot>
				{label && (
					<Label htmlFor={checkboxProps.id} disabled={checkboxProps.disabled}>
						{label}
					</Label>
				)}
			</StyledCheckBox>
		);
	}
);

//============
// STYLES
//============
const Label = styled('label', {
	lineHeight: 1,
	variants: {
		disabled: {
			true: {
				opacity: 0.7,
			},
		},
	},
});

const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
	display: 'flex',
	alignItems: 'center',
	color: '$primary600',
});

const CheckboxRoot = styled(RadixCheckbox.Root, {
	all: 'unset',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'white',
	borderRadius: '$1',
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

		'&:disabled': {
			backgroundColor: '$gray100',
			borderColor: '$gray400',

			[`& ${CheckboxIndicator}`]: {
				color: '$gray400',
			},
		},
	},
});

const StyledCheckBox = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '0.75rem',

	variants: {
		size: {
			sm: {
				[`& ${CheckboxRoot}`]: {
					width: 16,
					height: 16,
				},

				'& svg': {
					width: 16,
					height: 16,
				},

				'& label': {
					fontSize: '$sm',
				},
			},
			lg: {
				[`& ${CheckboxRoot}`]: {
					width: 20,
					height: 20,
				},

				'& svg': {
					width: 20,
					height: 20,
				},
			},
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

export default Checkbox;
