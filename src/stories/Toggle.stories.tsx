import { Meta, StoryObj } from '@storybook/react';
import Switch from '../components/Switch';

const meta = {
	title: 'Components/Switch',
	component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <Switch {...args} />;
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
