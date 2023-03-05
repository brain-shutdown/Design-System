import { darkTheme, styled } from '../../stitches.config';
import { BsQuestionCircle, BsExclamationCircle } from 'react-icons/bs';
import Infotip from './Infotip';
import { ChangeEvent, forwardRef, useState, InputHTMLAttributes, HTMLInputTypeAttribute, ComponentProps } from 'react';
import { IconType } from 'react-icons';

//============
// TYPES
//============
type ErrorProps = { error: true; errorMessage: string } | { error?: false; errorMessage?: string | boolean };
type LabelProps = { label: string; labelSide: 'left' | 'top' } | { label?: undefined; labelSide?: undefined };

type Props = {
	Icon?: IconType;
	tooltipProps?: Omit<ComponentProps<typeof Infotip>, 'children'>;
	type: Extract<HTMLInputTypeAttribute, 'email' | 'number' | 'password' | 'range'>;
} & ErrorProps &
	LabelProps &
	InputHTMLAttributes<HTMLInputElement>;

//============
// FUNCTIONS
//============
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const [value, setValue] = useState('');
	const { label, Icon, error, errorMessage, labelSide, tooltipProps, ...inputArgs } = props;

	function onChange(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const res = event.target.value;
		setValue(res);
	}
	return (
		<Wrapper error={error} labelSide={labelSide}>
			{label && <label htmlFor={inputArgs.name}>{label}</label>}
			<div className='input--warning'>
				<div className='input--element'>
					{Icon && <Icon />}
					<input id={inputArgs.name} ref={ref} value={value} onChange={onChange} {...inputArgs} />
					{tooltipProps && !error && <Infotip {...tooltipProps}>{<BsQuestionCircle />}</Infotip>}
					{error && <BsExclamationCircle className='errorIcon' />}
				</div>
				{error && errorMessage && <span>{errorMessage}</span>}
			</div>
		</Wrapper>
	);
});

//============
// STYLES
//============
const Wrapper = styled('div', {
	'& .input--warning': {
		display: 'flex',
		flexDirection: 'column',
		gap: '$4',
	},

	'& .input--element': {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '25rem',
		px: '$16',
		py: '0.625rem',
		gap: '$8',
		border: '1px solid $border',
		boxShadow: '$sm',
		borderRadius: '$3',

		[`.${darkTheme} &`]: {
			backgroundColor: '#303741',
		},

		'&:focus-within': {
			boxShadow: '$inputFocus',
			outlineOffset: '2',
		},

		'& input': {
			flexGrow: 1,
			outline: 'none',
			backgroundColor: 'transparent',
			color: 'inherit',

			'&::placeholder': {
				color: '$gray500',
			},

			'&:-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus': {
				boxShadow: 'inset 0 0 0 1000px #ffff',
			},

			[`.${darkTheme} &`]: {
				color: 'inherit',
				'&:-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus': {
					boxShadow: 'inset 0 0 0 1000px #303741',
					'-webkit-text-fill-color': '$colors$body',
				},
			},
		},
	},

	variants: {
		error: {
			true: {
				'& .input--element': {
					border: '1px solid $error600',
				},

				'& span, .errorIcon': {
					color: '$error600',
				},

				[`.${darkTheme} &`]: {
					'& .input--element': {
						border: '1px solid $error400',
					},

					'& span, .errorIcon': {
						color: '$error400',
					},
				},
			},
		},
		labelSide: {
			left: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'baseline',
				gap: '$12',
			},
			top: {
				display: 'flex',
				flexDirection: 'column',
				gap: '$4',
			},
		},
	},
	defaultVariants: {
		labelSide: 'top',
	},
});

export default Input;
