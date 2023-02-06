import { styled } from '../../stitches.config';
import Avatar from '../components/Avatar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: {
		size: {
			name: 'Size',
			type: { name: 'string', required: false },
			defaultValue: 'sm',
			description: 'Avatar size from 24px to 56px.',
			control: false,
			table: {
				type: { summary: 'xs | sm | md | lg | xl' },
				defaultValue: { summary: 'sm' },
			},
		},
		status: {
			name: 'Status',
			type: { name: 'string', required: false },
			description: 'Online status indicator.',
			control: 'select',
			options: ['online', 'away', 'offline', 'busy', undefined],
			table: {
				type: { summary: 'online | away | offline | busy | undefined' },
			},
		},
		userType: {
			name: 'User Type',
			type: { name: 'string', required: false },
			defaultValue: 'avatar',
			description: 'Shows avatar picture, the user name initials or simply a blank user.',
			control: 'select',
			options: ['initials', 'blank', 'avatar'],
			table: {
				type: { summary: 'initials | blank | avatar' },
				defaultValue: { summary: 'avatar' },
			},
		},
		userName: {
			name: 'User Name',
			type: { name: 'string', required: false },
			description: 'User Name',
			defaultValue: 'User Name',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
			if: { arg: 'userType', eq: 'initials' },
		},
	},
	args: {
		status: undefined,
	},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
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
};

export const Default = Template.bind({});
Default.args = {
	src: '../../avatar.png',
	alt: 'avatar',
};

export const Online = Template.bind({});
Online.args = {
	src: '../../avatar.png',
	alt: 'avatar',
	status: 'online',
};
export const Offline = Template.bind({});
Offline.args = {
	src: '../../avatar.png',
	alt: 'avatar',
	status: 'offline',
};
export const Away = Template.bind({});
Away.args = {
	src: '../../avatar.png',
	alt: 'avatar',
	status: 'away',
};
export const Busy = Template.bind({});
Busy.args = {
	src: '../../avatar.png',
	alt: 'avatar',
	status: 'busy',
};

export const Initials = Template.bind({});
Initials.args = {
	userType: 'initials',
	alt: 'avatar',
	status: 'online',
	userName: 'A B',
};

export const Blank = Template.bind({});
Blank.args = {
	userType: 'blank',
	alt: 'avatar',
	status: 'online',
};
export const IncorrectSource = Template.bind({});
IncorrectSource.args = {
	src: 'source',
	alt: 'avatar',
	status: 'online',
};

const Wrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
	margin: '1rem',
});
