import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarGroup from '../components/AvatarGroup';
import Avatar from '../components/Avatar';

export default {
	title: 'Components/AvatarGroup',
	component: AvatarGroup,
	parameters: {
		subcomponents: { Avatar },
	},
	argTypes: {
		size: {
			name: 'Size',
			type: { name: 'string', required: false },
			defaultValue: 'md',
			description: 'Avatar size from 32px to 48px.',
			control: 'select',
			options: ['sm', 'md', 'lg'],
			table: {
				type: { summary: 'sm | md | lg' },
				defaultValue: { summary: 'md' },
			},
		},
		users: {
			name: 'Users',
			description: 'Array of users.',
			control: 'object',
			table: {
				type: { summary: '{ id: string; name?: string; avatarUrl?: string; }[]' },
			},
		},
	},
	args: {},
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => {
	return <AvatarGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	size: 'lg',
	users: [
		{ id: '1', userName: 'John Doe', avatarUrl: '../../avatar.png' },
		{ id: '2', userName: 'John Doe', avatarUrl: '../../avatar.png' },
		{ id: '3', userName: 'John Doe', avatarUrl: '../../avatar.png' },
		{ id: '4', userName: 'John Doe', avatarUrl: '../../avatar.png' },
	],
};

export const Empty = Template.bind({});
Empty.args = {
	users: [],
};

export const LongGroup = Template.bind({});
LongGroup.args = {
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
};
