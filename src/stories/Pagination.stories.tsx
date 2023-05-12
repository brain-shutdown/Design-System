import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../components/Pagination';

const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	argTypes: {},
	args: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <Pagination {...args} />;
	},
	args: {
		pageCount: 7,
		siblingCount: 1,
		defaultPage: 3,
		onPageChange: undefined,
	},
} satisfies Story;
