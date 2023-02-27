import { styled } from '../../stitches.config';
import Badge from '../components/Badge';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	args: {
		children: 'Label',
	},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
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
	},
	args: {
		size: 'sm',
	},
} satisfies Story;

export const Update = {
	...Default,
	args: {
		variant: 'update',
	},
} satisfies Story;

export const ArrowUp = {
	...Default,
	args: {
		variant: 'leftArrowUp',
	},
} satisfies Story;

export const Close = {
	...Default,
	args: {
		variant: 'close',
	},
} satisfies Story;

export const ArrowRight = {
	...Default,
	args: {
		variant: 'rightArrow',
	},
} satisfies Story;

export const Avatar = {
	...Default,
	args: {
		variant: 'avatar',
		avatarUrl: '../../avatar.png',
	},
} satisfies Story;

const Wrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
	margin: '1rem',
});
