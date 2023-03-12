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
	({ size, indeterminate, label, ...rest }, forwardRef) => {
		return (
			<StyledCheckBox size={size}>
				<CheckboxRoot {...rest} ref={forwardRef} aria-label='checkbox'>
					<CheckboxIndicator>{indeterminate ? <RxMinus /> : <RxCheck />}</CheckboxIndicator>
				</CheckboxRoot>
				{label && <label htmlFor={rest.id}>{label}</label>}
			</StyledCheckBox>
		);
	}
);

//============
// STYLES
//============

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

	'&:hover': {
		backgroundColor: '$primary50',
		borderColor: '$primary600',
	},
	'&:focus-visible': {
		boxShadow: '$focus',
	},

	'&[data-state="checked"]': {
		backgroundColor: '$primary50',
		borderColor: '$primary600',
	},
});

const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
	display: 'flex',
	alignItems: 'center',
	color: '$primary600',
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
