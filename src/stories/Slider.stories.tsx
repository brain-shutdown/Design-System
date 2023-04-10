import { Meta, StoryObj } from '@storybook/react';
import Slider from '../components/Slider';

const meta = {
	title: 'Components/Slider',
	component: Slider,
	argTypes: {
		asChild: {
			description:
				'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: false,
		},
		value: {
			description: 'The controlled value of the slider. Must be used in conjunction with onValueChange.',
			table: {
				type: { summary: 'number[]' },
			},
			control: false,
		},
		defaultValue: {
			description:
				'The value of the slider when initially rendered. Use when you do not need to control the state of the slider.',
			table: {
				type: { summary: 'number[]' },
			},
			control: 'object',
		},
		onValueChange: {
			description: 'Event handler called when the value changes.',
			table: {
				type: { summary: '(value: number[]) => void' },
			},
		},
		onValueCommit: {
			description:
				'Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.',
			table: {
				type: { summary: '(value: number[]) => void' },
			},
		},
		disabled: {
			description: 'When true, prevents the user from interacting with the slider.',
			table: {
				type: 'boolean',
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		name: {
			description: 'The name of the slider. Submitted with its owning form as part of a name/value pair.',
			table: {
				type: 'string',
			},
			control: { type: 'text' },
		},
		orientation: {
			description: 'The orientation of the slider.',
			table: {
				type: { summary: 'horizontal | vertical' },
				defaultValue: { summary: 'horizontal' },
			},
			control: 'inline-radio',
			options: ['horizontal', 'vertical'],
		},
		dir: {
			description:
				'The reading direction of the slider. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
			table: {
				type: { summary: 'ltr | rtl' },
			},
			control: 'inline-radio',
			options: ['ltr', 'rtl'],
		},
		inverted: {
			description: 'Whether the slider is visually inverted.',
			table: {
				type: 'boolean',
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		min: {
			description: 'The minimum value for the range.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 0 },
			},
			control: false,
		},
		max: {
			description: 'The maximum value for the range.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 100 },
			},
			control: false,
		},
		step: {
			description: 'The stepping interval.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 1 },
			},
			control: false,
		},
		minStepsBetweenThumbs: {
			description: 'The minimum permitted steps between multiple thumbs.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 0 },
			},
			control: false,
		},
	},
	args: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return <Slider {...args} />;
	},
	args: {
		defaultValue: [10],
	},
} satisfies Story;

export const Vertical = {
	...Default,
	args: {
		orientation: 'vertical',
		defaultValue: [10],
	},
} satisfies Story;

export const TwoThumbs = {
	...Default,
	args: {
		defaultValue: [10, 50],
	},
} satisfies Story;

export const Disabled = {
	...Default,
	args: {
		defaultValue: [50],
		disabled: true,
	},
} satisfies Story;
