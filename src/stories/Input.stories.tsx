import { useRef } from 'react';
import { styled } from '../../stitches.config';
import Input from '../components/Input';
import { Meta, StoryObj } from '@storybook/react';
import { HiOutlineEnvelope } from 'react-icons/hi2';

const meta = {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		type: {
			name: 'Type',
			description: 'Input type (e.g. email, number, password, etc.).',
			table: {
				type: { summary: 'string' },
			},
		},
		name: {
			name: 'Name',
			description: 'Input name attribute.',
			table: {
				type: { summary: 'string' },
			},
		},
		Icon: {
			control: false,
			description: 'Icon left to the input field.',
		},
		error: {
			name: 'Error',
			description: 'Highlights the input in red.',
			table: {
				defaultValue: { summary: false },
			},
		},
		errorMessage: {
			name: 'Error Message',
			description: "Shows and error message if 'error' is set to true.",
			table: {
				type: { summary: 'string' },
			},
			if: { arg: 'error', neq: false },
		},
		// infoContent: {
		// 	name: 'Tooltip Content',
		// 	description: 'Displays informative text to the user.',
		// },
		label: {
			name: 'Label',
			description: 'Shows a label text next to the input.',
			table: {
				type: { summary: 'string' },
			},
		},
		labelSide: {
			name: 'Label Position',
			description: 'Shows a label text next to the input.',
			table: {
				defaultValue: { summary: 'top' },
			},
			if: { arg: 'label', neq: undefined },
		},
		placeholder: {
			name: 'Placeholder',
			description: 'Placeholder Text.',
			table: {
				type: { summary: 'string' },
			},
		},
	},
	args: {
		type: 'email',
		name: 'email',
		placeholder: 'Email Address',
		tooltipProps: {
			content: 'Some information about the input',
		},
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		const ref = useRef<HTMLInputElement>(null);
		return (
			<Wrapper>
				<Input {...args} ref={ref} />
			</Wrapper>
		);
	},
} satisfies Story;

export const WithIcon = {
	...Default,
	args: {
		Icon: HiOutlineEnvelope,
	},
} satisfies Story;

export const LabelTop = {
	...Default,
	args: {
		label: 'Email',
		labelSide: 'top',
	},
} satisfies Story;

export const LabelLeft = {
	...Default,
	args: {
		label: 'Email',
		labelSide: 'left',
	},
} satisfies Story;

export const Warning = {
	...Default,
	args: {
		error: true,
		errorMessage: 'Error message',
	},
} satisfies Story;

export const WarningLabelLeft = {
	...LabelLeft,
	args: {
		error: true,
		errorMessage: 'Error message',
	},
} satisfies Story;

export const WarningLabelTop = {
	...LabelTop,
	args: {
		error: true,
		errorMessage: 'Error message',
	},
} satisfies Story;

const Wrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '3rem',
});
