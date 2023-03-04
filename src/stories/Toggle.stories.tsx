import { Meta, StoryObj } from '@storybook/react';
import Toggle from '../components/Toggle';

const meta = {
	title: 'Components/Toggle',
	component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <Toggle {...args} />;
	},
	args: {
		size: 'md',
		defaultChecked: false,
	},
} satisfies Story;

export const WithLabel = {
	...Default,
	args: {
		label: 'Click Me',
		defaultChecked: false,
		size: 'md',
	},
} satisfies Story;

export const Small = {
	...Default,
	args: {
		label: 'Click Me',
		defaultChecked: false,
		size: 'sm',
	},
} satisfies Story;

export const Large = {
	...Default,
	args: {
		label: 'Click Me',
		defaultChecked: false,
		size: 'lg',
	},
} satisfies Story;
