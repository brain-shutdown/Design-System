import { Meta, StoryObj } from '@storybook/react';
import RadioGroup from '../components/RadioGroup';

const meta = {
	title: 'Components/RadioGroup',
	component: RadioGroup,
	argTypes: {},
	args: {
		items: [
			{
				value: 'primary',
				id: '1',
			},
			{
				value: 'secondary',
				id: '2',
			},
			{
				value: 'terciary',
				id: '3',
			},
		],
		hasCheckMark: false,
	},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <RadioGroup defaultValue={args.items[0].value} {...args} />;
	},
} satisfies Story;

export const Large = {
	...Default,
	args: {
		size: 2,
	},
} satisfies Story;

export const CheckMark = {
	...Default,
	args: {
		hasCheckMark: true,
	},
} satisfies Story;

export const CheckMarkLarge = {
	...Default,
	args: {
		hasCheckMark: true,
		size: 2,
	},
} satisfies Story;

export const Disabled = {
	...Default,
	args: {
		disabled: true,
	},
} satisfies Story;

export const DisabledPlusCheckMark = {
	...Default,
	args: {
		disabled: true,
		hasCheckMark: true,
	},
} satisfies Story;
