import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/Skeleton';

const meta = {
	title: 'Components/Skeleton',
	component: Skeleton,
	argTypes: {
		variant: {
			description: 'Skeleton Variants.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'text' },
			},
			control: 'text',
		},
	},
	args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <Skeleton {...args} />;
	},
	args: {
		variant: 'text',
	},
} satisfies Story;
