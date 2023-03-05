import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from '../components/AvatarGroup';
import Avatar from '../components/Avatar';

const meta = {
	title: 'Components/AvatarGroup',
	component: AvatarGroup,
	parameters: {
		subcomponents: { Avatar },
	},
	argTypes: {
		size: {
			name: 'Size',
			description: 'Avatar size from 32px to 48px.',
			table: {
				defaultValue: { summary: 'md' },
			},
		},
		users: {
			name: 'Users',
			description: 'Array of users.',
		},
	},
	args: {},
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <AvatarGroup {...args} />;
	},
	args: {
		size: 'lg',
		users: [
			{ id: '1', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '2', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '3', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '4', userName: 'John Doe', avatarUrl: '../../avatar.png' },
		],
	},
} satisfies Story;

export const Empty = {
	...Default,
	args: {
		users: [],
	},
} satisfies Story;

export const LongGroup = {
	...Default,
	args: {
		users: [
			{ id: '1', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '2', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '3', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '4', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '5', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '6', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '7', userName: 'John Doe', avatarUrl: '../../avatar.png' },
			{ id: '8', userName: 'John Doe', avatarUrl: '../../avatar.png' },
		],
	},
} satisfies Story;
