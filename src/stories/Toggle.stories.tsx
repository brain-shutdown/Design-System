import { Meta, StoryObj } from '@storybook/react';
import Toggle from '../components/Toggle';
import { RxFontItalic } from 'react-icons/rx';

const meta = {
	title: 'Components/Toggle',
	component: Toggle,
	argTypes: {
		children: {
			description: 'Text or Icon to be passed to the toggle.',
			table: {
				type: { summary: 'ReactNode' },
			},
			control: false,
		},
		size: {
			description: 'Size of the Toggle.',
			table: {
				type: { summary: 'sm | md | lg' },
			},
			control: 'radio',
			options: ['sm', 'md', 'lg'],
		},
		defaultPressed: {
			description:
				'The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state.',
			table: {
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		pressed: {
			description:
				'The controlled pressed state of the toggle. Must be used in conjunction with onPressedChange.',
			table: {
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		onPressedChange: {
			description: 'Event handler called when the pressed state of the toggle changes.',
			table: {
				type: { summary: '(pressed: boolean) => void' },
			},
		},
		disabled: {
			description: 'When true, prevents the user from interacting with the toggle.',
			table: {
				type: 'boolean',
			},
			control: { type: 'boolean' },
		},
		asChild: {
			description:
				'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
			table: {
				type: 'boolean',
			},
			control: false,
		},
	},
	args: {},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <Toggle {...args} />;
	},
	args: {
		children: <RxFontItalic />,
	},
} satisfies Story;

export const Small = {
	render: (args) => {
		return <Toggle {...args} />;
	},
	args: {
		children: <RxFontItalic />,
		size: 'sm',
	},
} satisfies Story;

export const Large = {
	render: (args) => {
		return <Toggle {...args} />;
	},
	args: {
		children: <RxFontItalic />,
		size: 'lg',
	},
} satisfies Story;
