import { Meta, StoryObj } from '@storybook/react';
import {
	Select,
	SelectContent,
	SelectContentProps,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectProps,
	SelectSeparator,
} from '../components/Select';

const meta = {
	title: 'Components/Select',
	component: Select,
	argTypes: {
		// Select Content
		asChild: {
			description:
				'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Select Content',
			},
			control: false,
		},
		onCloseAutoFocus: {
			description:
				'Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: Event) => void' },
				category: 'Select Content',
			},
		},
		onEscapeKeyDown: {
			description:
				'Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: KeyboardEvent) => void' },
				category: 'Select Content',
			},
		},
		onPointerDownOutside: {
			description:
				'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: PointerDownOutsideEvent) => void' },
				category: 'Select Content',
			},
		},
		position: {
			description:
				'The positioning mode to use, item-aligned is the default and behaves similarly to a native MacOS menu by positioning content relative to the active item. popper positions content in the same way as our other primitives, for example Popover or DropdownMenu.',
			table: {
				type: { summary: 'item-aligned | popper' },
				defaultValue: { summary: 'item-aligned' },
				category: 'Select Content',
			},
			control: 'inline-radio',
			options: ['item-aligned', 'popper'],
		},
		side: {
			description:
				'The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. Only available when position is set to popper.',
			table: {
				type: { summary: 'left | right | top | bottom' },
				defaultValue: { summary: 'bottom' },
				category: 'Select Content',
			},
			control: 'select',
			options: ['left', 'right', 'top', 'bottom'],
			if: { arg: 'position', eq: 'popper' },
		},
		sideOffset: {
			description: 'The distance in pixels from the anchor. Only available when position is set to popper.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Select Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
			if: { arg: 'position', eq: 'popper' },
		},
		align: {
			description:
				'The preferred alignment against the anchor. May change when collisions occur. Only available when position is set to popper.',
			table: {
				type: { summary: 'start | center | end' },
				defaultValue: { summary: 'start' },
				category: 'Select Content',
			},
			control: 'select',
			options: ['start', 'center', 'end'],
			if: { arg: 'position', eq: 'popper' },
		},
		alignOffset: {
			description:
				'An offset in pixels from the "start" or "end" alignment options. Only available when position is set to popper.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Select Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
			if: { arg: 'position', eq: 'popper' },
		},
		avoidCollisions: {
			description:
				'When true, overrides the side andalign preferences to prevent collisions with boundary edges. Only available when position is set to popper.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
				category: 'Select Content',
			},
			control: 'boolean',
			if: { arg: 'position', eq: 'popper' },
		},
		collisionBoundary: {
			description:
				'The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check. Only available when position is set to popper.',
			table: {
				type: { summary: 'Element | null | Array<Element | null>' },
				defaultValue: { summary: '[]' },
				category: 'Select Content',
			},
			control: false,
			if: { arg: 'position', eq: 'popper' },
		},
		collisionPadding: {
			description:
				'The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }. Only available when position is set to popper.',
			table: {
				type: { summary: 'number | Padding' },
				defaultValue: { summary: '10' },
				category: 'Select Content',
			},
			control: 'object',
			if: { arg: 'position', eq: 'popper' },
		},
		arrowPadding: {
			description:
				'The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners. Only available when position is set to popper.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Select Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
			if: { arg: 'position', eq: 'popper' },
		},
		sticky: {
			description:
				'The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless. Only available when position is set to popper.',
			table: {
				type: { summary: 'partial | always' },
				defaultValue: { summary: 'partial' },
				category: 'Select Content',
			},
			control: 'inline-radio',
			options: ['partial', 'always'],
			if: { arg: 'position', eq: 'popper' },
		},
		hideWhenDetached: {
			description:
				'Whether to hide the content when the trigger becomes fully occluded. Only available when position is set to popper.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Select Content',
			},
			control: 'boolean',
			if: { arg: 'position', eq: 'popper' },
		},
		// Select
		defaultValue: {
			description:
				'The value of the select when initially rendered. Use when you do not need to control the state of the select.',
			table: {
				type: { summary: 'string' },
				category: 'Select Component',
			},
			control: 'text',
		},
		value: {
			description: 'The controlled value of the select. Should be used in conjunction with onValueChange.',
			table: {
				type: { summary: 'string' },
				category: 'Select Component',
			},
			control: 'text',
		},
		onValueChange: {
			description: 'Event handler called when the value changes.',
			table: {
				type: { summary: '(value: string) => void' },
				category: 'Select Component',
			},
		},
		defaultOpen: {
			description:
				'The open state of the select when it is initially rendered. Use when you do not need to control its open state.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Select Component',
			},
			control: { type: 'boolean' },
		},
		open: {
			description: 'The controlled open state of the select. Must be used in conjunction with onOpenChange.',
			table: {
				type: { summary: 'boolean' },
				category: 'Select Component',
			},
			control: { type: 'boolean' },
		},
		onOpenChange: {
			description: 'Event handler called when the open state of the select changes.',
			table: {
				type: { summary: '(open: boolean) => void' },
				category: 'Select Component',
			},
		},
		dir: {
			description:
				'The reading direction of the select when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
			table: {
				type: { summary: 'ltr | rtl' },
				category: 'Select Component',
			},
			control: 'inline-radio',
			options: ['ltr', 'rtl'],
		},
		name: {
			description: 'The name of the select. Submitted with its owning form as part of a name/value pair.',
			table: {
				type: { summary: 'string' },
				category: 'Select Component',
			},
			control: 'text',
		},
		disabled: {
			description: 'When true, prevents the user from interacting with select.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Select Component',
			},
			control: { type: 'boolean' },
		},
		required: {
			description:
				'When true, indicates that the user must select a value before the owning form can be submitted.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Select Component',
			},
			control: { type: 'boolean' },
		},
		label: {
			description: 'Aria-label of the Select Component.',
			table: {
				type: { summary: 'string' },
				category: 'Select Component',
			},
			control: 'text',
		},
		placeholder: {
			description:
				'The content that will be rendered inside the Select.Value when no value or defaultValue is set.',
			table: {
				type: { summary: 'ReactNode' },
				category: 'Select Component',
			},
			control: 'text',
		},
	},
	args: {},
} satisfies Meta<SelectContentProps & SelectProps>;

export default meta;
type Story = StoryObj<SelectContentProps & SelectProps>;

export const Default = {
	render: (args) => {
		const {
			defaultValue,
			value,
			onValueChange,
			defaultOpen,
			open,
			onOpenChange,
			dir,
			name,
			disabled,
			required,
			label,
			placeholder,
			...contentProps
		} = args;
		return (
			<Select
				defaultOpen={defaultOpen}
				label={label}
				placeholder={placeholder}
				defaultValue={defaultValue}
				value={value}
				onValueChange={onValueChange}
				open={open}
				onOpenChange={onOpenChange}
				dir={dir}
				disabled={disabled}
				required={required}
				css={{ width: '400px' }}>
				<SelectContent {...contentProps}>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value='apple'>Apple</SelectItem>
						<SelectItem value='banana'>Banana</SelectItem>
						<SelectItem value='blueberry'>Blueberry</SelectItem>
						<SelectItem value='grapes'>Grapes</SelectItem>
						<SelectItem value='pineapple'>Pineapple</SelectItem>
					</SelectGroup>

					<SelectSeparator />

					<SelectGroup>
						<SelectLabel>Vegetables</SelectLabel>
						<SelectItem value='aubergine'>Aubergine</SelectItem>
						<SelectItem value='broccoli'>Broccoli</SelectItem>
						<SelectItem value='carrot' disabled>
							Carrot
						</SelectItem>
						<SelectItem value='courgette'>Courgette</SelectItem>
						<SelectItem value='leek'>Leek</SelectItem>
					</SelectGroup>

					<SelectSeparator />

					<SelectGroup>
						<SelectLabel>Meat</SelectLabel>
						<SelectItem value='beef'>Beef</SelectItem>
						<SelectItem value='chicken'>Chicken</SelectItem>
						<SelectItem value='lamb'>Lamb</SelectItem>
						<SelectItem value='pork'>Pork</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	},
	args: {
		label: 'fruit',
		placeholder: 'Select a fruit',
		position: 'popper',
		sideOffset: 5,
	},
} satisfies Story;
