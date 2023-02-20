import { styled } from '../../stitches.config';
import Button from '../components/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Click Me',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<Wrapper>
				<Button {...args} />
				{args.as !== 'a' && <Button disabled {...args} />}
			</Wrapper>
		);
	},
	args: {
		children: 'Click Me',
	},
} satisfies Story;

export const Secondary = {
	...Default,
	args: {
		variant: 'secondary',
	},
} satisfies Story;

export const Warning = {
	...Default,
	args: {
		variant: 'error',
	},
} satisfies Story;

export const Outlined = {
	...Default,
	args: {
		outlined: true,
	},
} satisfies Story;

export const OutlinedError = {
	...Outlined,
	args: {
		variant: 'error',
		outlined: true,
	},
} satisfies Story;

export const Link = {
	...Default,
	args: {
		as: 'a',
		href: 'http://',
	},
} satisfies Story;

const Wrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
	margin: '1rem',
});
