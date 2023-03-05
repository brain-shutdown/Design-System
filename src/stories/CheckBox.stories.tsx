import { Meta, StoryObj } from '@storybook/react';
import CheckBox from '../components/CheckBox';

const meta = {
	title: 'Components/CheckBox',
	component: CheckBox,
	argTypes: {
		size: {
			name: 'Size',
			description: 'Avatar size from 24px to 56px.',
			table: {
				type: { summary: 'sm | lg' },
				defaultValue: { summary: 'sm' },
			},
			control: 'radio',
			options: ['sm', 'lg'],
		},
		defaultChecked: {
			name: 'Checked',
			description: 'Defines if checkbox is checked by default.',
			table: {
				type: { summary: 'boolean' },
			},
		},
		indeterminate: {
			name: 'Indeterminate',
			description: 'Check Box state.',
			table: {
				type: { summary: 'boolean' },
			},
		},
		id: {
			name: 'ID',
			description: 'Check Box ID.',
			control: false,
			table: {
				type: { summary: 'string' },
			},
		},
		label: {
			name: 'Label text',
			description: 'Label text to display next to the checkbox.',
			table: {
				type: { summary: 'string' },
			},
		},
	},
	args: {
		defaultChecked: false,
		label: 'Accept Terms and Conditions',
	},
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <CheckBox {...args} />;
	},
	args: {
		id: '1',
		size: 'sm',
		indeterminate: false,
	},
} satisfies Story;

export const Indeterminate = {
	...Default,
	args: {
		id: '2',
		size: 'sm',
		label: 'Accept Terms and Conditions',
		indeterminate: true,
	},
} satisfies Story;

export const Large = {
	...Default,
	args: {
		id: '3',
		size: 'lg',
		label: 'Accept Terms and Conditions',
		indeterminate: false,
	},
} satisfies Story;
