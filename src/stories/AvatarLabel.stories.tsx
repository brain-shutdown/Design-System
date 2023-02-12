import { styled } from '../../stitches.config';
import Avatar from '../components/Avatar';
// import Avatar from '../components/Avatar';
import AvatarLabel from '../components/AvatarLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/AvatarLabel',
	component: AvatarLabel,
	argTypes: {
		children: {
			name: 'Avatar',
			type: { name: 'string', required: true },
			description: 'User Avatar to display',
			table: {
				type: { summary: 'Avatar' },
			},
			control: false,
		},
		name: {
			name: 'Name',
			type: { name: 'string', required: true },
			description: 'User Name',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		email: {
			name: 'Email',
			type: { name: 'string', required: true },
			description: 'User Email',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
	},
	args: {},
} as ComponentMeta<typeof AvatarLabel>;

const Template: ComponentStory<typeof AvatarLabel> = (args) => {
	return (
		<AvatarLabel {...args}>
			<Avatar size='md' src='../../avatar.png' alt='avatar' userType='avatar' />
		</AvatarLabel>
	);
};

export const Default = Template.bind({});
Default.args = {
	name: 'John Doe',
	email: 'johndoe@gmail.com',
};
