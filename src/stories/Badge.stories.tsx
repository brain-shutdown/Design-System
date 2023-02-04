import { styled } from '../../stitches.config';
import Badge from '../components/Badge';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Badge',
	component: Badge,
	argTypes: {
		children: {
			name: 'Text',
			type: { name: 'string', required: true },
			defaultValue: 'Label',
			description: 'Badge text',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		color: {
			name: 'Color',
			type: { name: 'number', required: true },
			defaultValue: 1,
			description: 'Button size in a scale from 1 to 6',
			control: false,
			table: {
				type: { summary: 'number' },
			},
		},
		size: {
			name: 'Size',
			type: { name: 'string', required: true },
			defaultValue: 2,
			description: 'Button size.',
			control: 'select',
			options: ['sm', 'md', 'lg'],
			table: {
				type: { summary: 'sm | md | lg' },
				defaultValue: { summary: 'md' },
			},
		},
		variant: {
			name: 'Variant',
			type: { name: 'string', required: false },
			description: 'Button size.',
			control: 'select',
			options: ['leftArrowUp', 'rightArrow', 'close', 'update', 'avatar', undefined],
			table: {
				type: { summary: 'leftArrowUp | rightArrow | close | update | avatar' },
			},
		},
		avatarUrl: {
			name: 'Avatar URL',
			type: { name: 'string', required: false },
			description: 'Avatar Image URL',
			defaultValue: '../../avatar.jpg',
			control: false,
			if: { arg: 'variant', eq: 'avatar' },
		},
	},
	args: {
		variant: undefined,
	},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
	return (
		<Wrapper>
			<Badge {...args} color={1} />
			<Badge {...args} color={2} />
			<Badge {...args} color={3} />
			<Badge {...args} color={4} />
			<Badge {...args} color={5} />
			<Badge {...args} color={6} />
		</Wrapper>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: 'Label',
	size: 'md',
};

export const Update = Template.bind({});
Update.args = {
	children: 'Label',
	size: 'md',
	variant: 'update',
};

export const ArrowUp = Template.bind({});
ArrowUp.args = {
	children: 'Label',
	size: 'md',
	variant: 'leftArrowUp',
};

export const Close = Template.bind({});
Close.args = {
	children: 'Label',
	size: 'md',
	variant: 'close',
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
	children: 'Label',
	size: 'md',
	variant: 'rightArrow',
};
export const Avatar = Template.bind({});
Avatar.args = {
	children: 'Label',
	size: 'md',
	variant: 'avatar',
	avatarUrl: '../../avatar.jpg',
};

const Wrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
	margin: '1rem',
});
