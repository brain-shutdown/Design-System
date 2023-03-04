import { useId } from 'react';
import { styled } from '../../stitches.config';

//============
// TYPES
//============
type ToggleProps = {
	size: 'sm' | 'md' | 'lg';
	defaultChecked: boolean;
	label?: string;
};

//============
// FUNCTION
//============
function Toggle({ size, defaultChecked, label }: ToggleProps) {
	const uuid = useId();

	const ToggleButton = () => (
		<Wrapper size={size}>
			<input type='checkbox' id={uuid} defaultChecked={defaultChecked} />
			<label htmlFor={uuid}>Toggle</label>
		</Wrapper>
	);

	if (label) {
		return (
			<LabelWrapper size={size}>
				<ToggleButton />
				<span className='label'>{label}</span>
			</LabelWrapper>
		);
	}
	return <ToggleButton />;
}

//============
// STYLES
//============
const LabelWrapper = styled('label', {
	display: 'inline-flex',
	alignItems: 'center',
	gap: '$12',

	variants: {
		size: {
			sm: {
				'& .label': {
					fontSize: '$sm',
				},
			},
			md: {
				'& .label': {
					fontSize: '$md',
				},
			},
			lg: {
				'& .label': {
					fontSize: '$lg',
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

const Wrapper = styled('span', {
	display: 'inline-flex',
	alignItems: 'center',
	'& input[type=checkbox]': {
		height: 0,
		width: 0,
		visibility: 'hidden',
	},

	'& label': {
		cursor: 'pointer',
		textIndent: '-9999px',
		background: '$gray300',
		display: 'inline-block',
		borderRadius: '$pill',
		position: 'relative',
	},

	'& label:after': {
		content: '',
		position: 'absolute',
		background: 'white',
		borderRadius: '$round',
		transition: '0.3s',
	},

	'& input:checked + label': {
		background: '$primary600',
	},

	'& input:checked + label:after': {
		transform: 'translateX(-100%)',
	},

	variants: {
		size: {
			sm: {
				'& label': {
					width: '25px',
					height: '14px',
				},
				'& label:after': {
					top: '2px',
					left: '2px',
					width: '10px',
					height: '10px',
				},
				'& input:checked + label:after': {
					left: 'calc(100% - 2px)',
				},
				'& label:active:after': {
					width: '20px',
				},
			},
			md: {
				'& label': {
					width: '36px',
					height: '20px',
				},
				'& label:after': {
					top: '2px',
					left: '2px',
					width: '16px',
					height: '16px',
				},
				'& input:checked + label:after': {
					left: 'calc(100% - 2px)',
				},
				'& label:active:after': {
					width: '25px',
				},
			},
			lg: {
				'& label': {
					width: '50px',
					height: '28px',
				},
				'& label:after': {
					top: '3px',
					left: '3px',
					width: '22px',
					height: '22px',
				},
				'& input:checked + label:after': {
					left: 'calc(100% - 3px)',
				},
				'& label:active:after': {
					width: '30px',
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

export default Toggle;
