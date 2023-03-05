import { styled } from '../../stitches.config';
import Avatar from '../components/Avatar';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: {
		size: {
			name: 'Size',
			description: 'Avatar size from 24px to 56px.',
			control: false,
			table: {
				defaultValue: { summary: 'sm' },
			},
		},
		status: {
			name: 'Status',
			description: 'Online status indicator.',
		},
		userType: {
			name: 'User Type',
			description: 'Shows avatar picture, the user name initials or simply a blank user.',
		},
		userName: {
			name: 'User Name',
			description: 'User Name',
			table: {
				type: { summary: 'string' },
			},
			if: { arg: 'userType', eq: 'initials' },
		},
	},
	args: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<Wrapper>
				<Avatar {...args} size='xs' />
				<Avatar {...args} size='sm' />
				<Avatar {...args} size='md' />
				<Avatar {...args} size='lg' />
				<Avatar {...args} size='xl' />
				<Avatar {...args} size='xxl' />
				<Avatar {...args} size='main' />
				<Avatar {...args} size='profile' />
			</Wrapper>
		);
	},
	args: {
		src: '../../avatar.png',
	},
} satisfies Story;

export const Online = {
	...Default,
	args: {
		src: '../../avatar.png',
		status: 'online',
	},
} satisfies Story;

export const Offline = {
	...Default,
	args: {
		src: '../../avatar.png',
		status: 'offline',
	},
} satisfies Story;

export const Away = {
	...Default,
	args: {
		src: '../../avatar.png',
		status: 'away',
	},
} satisfies Story;

export const Busy = {
	...Default,
	args: {
		src: '../../avatar.png',
		status: 'busy',
	},
} satisfies Story;

export const Initials = {
	...Default,
	args: {
		userType: 'initials',
		status: 'online',
		userName: 'John Doe',
	},
} satisfies Story;

export const Blank = {
	...Default,
	args: {
		userType: 'blank',
		status: 'online',
	},
} satisfies Story;

export const IncorrectSource = {
	...Default,
	args: {
		src: 'source',
		alt: 'avatar',
		status: 'online',
	},
} satisfies Story;

const Wrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
	margin: '1rem',
});
