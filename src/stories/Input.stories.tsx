import { useRef } from 'react';
import { styled } from '../../stitches.config';
import Input from '../components/Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HiOutlineEnvelope } from 'react-icons/hi2';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		type: {
			name: 'Type',
			type: { name: 'string', required: true },
			description: 'Input type (e.g. email, number, password, etc.).',
			control: 'select',
			options: [
				'date',
				'datetime-local',
				'email',
				'file',
				'month',
				'number',
				'password',
				'search',
				'text',
				'time',
				'url',
				'week',
			],
			table: {
				type: { summary: 'string' },
			},
		},
		name: {
			name: 'Name',
			type: { name: 'string', required: true },
			description: 'Input name attribute.',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
		Icon: {
			control: false,
			description: 'Icon left to the input field.',
			table: {
				type: {
					summary: 'IconType',
				},
			},
		},
		error: {
			name: 'Error',
			type: { name: 'boolean', required: false },
			defaultValue: false,
			description: 'Highlights the input in red.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		errorMessage: {
			name: 'Error Message',
			type: { name: 'string', required: false },
			description: "Shows and error message if 'error' is set to true.",
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
			if: { arg: 'error', neq: false },
		},
		infoContent: {
			name: 'Tooltip Content',
			type: { name: 'string', required: false },
			description: 'Displays informative text to the user.',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		label: {
			name: 'Label',
			type: { name: 'string', required: false },
			description: 'Shows a label text next to the input.',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
		labelSide: {
			name: 'Label Position',
			type: { name: 'string', required: false },
			description: 'Shows a label text next to the input.',
			control: 'select',
			options: ['top', 'left'],
			table: {
				defaultValue: { summary: 'top' },
			},
			if: { arg: 'label', neq: undefined },
		},
		placeholder: {
			name: 'Placeholder',
			type: { name: 'string', required: false },
			description: 'Placeholder Text.',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
	},
	args: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<Wrapper>
			<Input {...args} ref={ref} />
		</Wrapper>
	);
};

export const Default = Template.bind({});
Default.args = {
	type: 'email',
	name: 'email',
	placeholder: 'Email Address',
	infoContent: 'Some information about the input.',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	...Default.args,
	Icon: HiOutlineEnvelope,
};

export const LabelTop = Template.bind({});
LabelTop.args = {
	...Default.args,
	label: 'Email',
	labelSide: 'top',
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
	...Default.args,
	label: 'Email',
	labelSide: 'left',
};

export const Warning = Template.bind({});
Warning.args = {
	...Default.args,
	error: true,
	errorMessage: 'Error message',
};

export const WarningLabelLeft = Template.bind({});
WarningLabelLeft.args = {
	...LabelLeft.args,
	error: true,
	errorMessage: 'Error message',
};

export const WarningLabelTop = Template.bind({});
WarningLabelTop.args = {
	...LabelTop.args,
	error: true,
	errorMessage: 'Error message',
};

const Wrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '3rem',
});
