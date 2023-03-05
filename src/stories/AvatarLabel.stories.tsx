import { styled } from '../../stitches.config';
import Avatar from '../components/Avatar';
// import Avatar from '../components/Avatar';
import AvatarLabel from '../components/AvatarLabel';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/AvatarLabel',
	component: AvatarLabel,
	argTypes: {
		children: {
			name: 'Avatar',
			description: 'User Avatar to display',
			table: {
				type: { summary: 'Avatar' },
			},
			control: false,
		},
		name: {
			name: 'Name',
			description: 'User Name',
			table: {
				type: { summary: 'string' },
			},
		},
		email: {
			name: 'Email',
			description: 'User Email',
			table: {
				type: { summary: 'string' },
			},
		},
	},
	args: {},
} satisfies Meta<typeof AvatarLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <AvatarLabel {...args} />;
	},
	args: {
		name: 'John Doe',
		email: 'johndoe@gmail.com',
		children: <Avatar size='md' src='../../avatar.png' alt='avatar' userType='avatar' />,
	},
} satisfies Story;
