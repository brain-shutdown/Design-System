import { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '../components/ToggleGroup';
import { RxTextAlignLeft, RxTextAlignRight, RxTextAlignCenter } from 'react-icons/rx';

const meta = {
	title: 'Components/ToggleGroup',
	component: ToggleGroup,
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
		type: {
			description: 'Determines whether a single or multiple items can be pressed at a time.',
			table: {
				type: { summary: 'single | multiple' },
			},
			control: 'inline-radio',
			options: ['single', 'multiple'],
		},
		value: {
			description:
				'The controlled value of the pressed item(s) when type is "single" or "multiple". Must be used in conjunction with onValueChange.',
			table: {
				type: { summary: 'string | string[]' },
			},
			control: false,
		},
		defaultValue: {
			description:
				'The value of the item(s) to show as pressed when initially rendered and type is "single" or "multiple". Use when you do not need to control the state of the items.',
			table: {
				type: { summary: 'string | string[]' },
			},
			control: false,
		},
		onValueChange: {
			description: 'Event handler called when the pressed state of an item changes and type is "single".',
			table: {
				type: { summary: '(value: string) => void' },
			},
		},
		disabled: {
			description: 'When true, prevents the user from interacting with the toggle group and all its items.',
			table: {
				type: 'boolean',
				defaultValue: { summary: 'false' },
			},
			control: { type: 'boolean' },
		},
		rovingFocus: {
			description: 'When false, navigating through the items using arrow keys will be disabled.',
			table: {
				type: 'boolean',
				defaultValue: { summary: 'true' },
			},
			control: { type: 'boolean' },
		},
		orientation: {
			description:
				'The orientation of the component, which determines how focus moves: horizontal for left/right arrows and vertical for up/down arrows.',
			table: {
				type: { summary: 'horizontal | vertical | undefined' },
			},
			control: 'radio',
			options: ['horizontal', 'vertical', 'undefined'],
		},
		dir: {
			description:
				'The reading direction of the toggle group. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
			table: {
				type: { summary: 'ltr | rtl' },
			},
			control: 'inline-radio',
			options: ['ltr', 'rtl'],
		},
		loop: {
			description:
				'When true and rovingFocus is true, keyboard navigation will loop from last item to first, and vice versa.',
			table: {
				type: 'boolean',
				defaultValue: { summary: 'true' },
			},
			control: { type: 'boolean' },
		},
		size: {
			description: 'Size of the Toggle Group.',
			table: {
				type: { summary: 'sm | md | lg' },
				defaultValue: { summary: 'md' },
			},
			control: 'radio',
			options: ['sm', 'md', 'lg'],
		},
	},
	args: {},
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<ToggleGroup {...args} aria-label='text alignment'>
				<ToggleGroupItem value='left' aria-label='left aligned'>
					<RxTextAlignLeft />
				</ToggleGroupItem>
				<ToggleGroupItem value='center' aria-label='center aligned'>
					<RxTextAlignCenter />
				</ToggleGroupItem>
				<ToggleGroupItem value='right' aria-label='right aligned'>
					<RxTextAlignRight />
				</ToggleGroupItem>
			</ToggleGroup>
		);
	},
	args: {
		type: 'single',
		defaultValue: 'center',
		size: 'md',
	},
} satisfies Story;
