import { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from '../components/Popover';
import { RxMixerHorizontal } from 'react-icons/rx';
import { darkTheme, styled } from '../../stitches.config';
import { ComponentProps } from 'react';

type metaProps = ComponentProps<typeof Popover> & ComponentProps<typeof PopoverContent>;

const meta = {
	title: 'Components/Popover',
	component: Popover,
	argTypes: {
		// DIALOG
		defaultOpen: {
			description:
				'The open state of the popover when it is initially rendered. Use when you do not need to control its open state.',
			table: {
				type: { summary: 'boolean' },
				category: 'Popover',
			},
			control: 'boolean',
		},
		open: {
			description: 'The controlled open state of the popover. Must be used in conjunction with onOpenChange.',
			table: {
				type: { summary: 'boolean' },
				category: 'Popover',
			},
			control: 'boolean',
		},
		onOpenChange: {
			description: 'Event handler called when the open state of the popover changes.',
			table: {
				type: { summary: '(open: boolean) => void' },
				category: 'Popover',
			},
		},
		modal: {
			description:
				'The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
				category: 'Popover',
			},
			control: 'boolean',
		},
		// POPOVER CONTENT
		side: {
			description:
				'The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.',
			table: {
				type: { summary: 'left | right | top | bottom' },
				defaultValue: { summary: 'bottom' },
				category: 'Popover Content',
			},
			control: 'select',
			options: ['left', 'right', 'top', 'bottom'],
		},
		sideOffset: {
			description: 'The distance in pixels from the anchor.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Popover Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
		},
		align: {
			description: 'The preferred alignment against the anchor. May change when collisions occur.',
			table: {
				type: { summary: 'start | center | end' },
				defaultValue: { summary: 'center' },
				category: 'Popover Content',
			},
			control: 'select',
			options: ['start', 'center', 'end'],
		},
		alignOffset: {
			description: 'An offset in pixels from the "start" or "end" alignment options.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Popover Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
		},
		avoidCollisions: {
			description:
				'When true, overrides the side andalign preferences to prevent collisions with boundary edges.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
				category: 'Popover Content',
			},
			control: 'boolean',
		},
		collisionBoundary: {
			description:
				'The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.',
			table: {
				type: { summary: 'Element | null | Array<Element | null>' },
				defaultValue: { summary: '[]' },
				category: 'Popover Content',
			},
			control: false,
		},
		collisionPadding: {
			description:
				'The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.',
			table: {
				type: { summary: 'number | Padding' },
				defaultValue: { summary: '0' },
				category: 'Popover Content',
			},
			control: 'object',
		},
		arrowPadding: {
			description:
				'The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Popover Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
		},
		sticky: {
			description:
				'The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.',
			table: {
				type: { summary: 'partial | always' },
				defaultValue: { summary: 'partial' },
				category: 'Popover Content',
			},
			control: 'inline-radio',
			options: ['partial', 'always'],
		},
		hideWhenDetached: {
			description: 'Whether to hide the content when the trigger becomes fully occluded.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Popover Content',
			},
			control: 'boolean',
		},
		asChild: {
			description:
				'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Popover Content',
			},
			control: false,
		},
		onOpenAutoFocus: {
			description:
				'Event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: Event) => void' },
				category: 'Popover Content',
			},
		},
		onCloseAutoFocus: {
			description:
				'Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: Event) => void' },
				category: 'Popover Content',
			},
		},
		onEscapeKeyDown: {
			description:
				'Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: KeyboardEvent) => void' },
				category: 'Popover Content',
			},
		},
		onPointerDownOutside: {
			description:
				'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: PointerDownOutsideEvent) => void' },
				category: 'Popover Content',
			},
		},
		onFocusOutside: {
			description:
				'Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: FocusOutsideEvent) => void' },
				category: 'Popover Content',
			},
		},
		onInteractOutside: {
			description:
				'Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: PointerDownOutsideEvent | FocusOutsideEvent) => void' },
				category: 'Popover Content',
			},
		},
		forceMount: {
			description:
				'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from Popover.Portal.',
			table: {
				type: { summary: 'boolean' },
				category: 'Popover Content',
			},
			control: false,
		},
	},
	args: {},
} satisfies Meta<metaProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		const { defaultOpen, open, modal, ...contentProps } = args;
		return (
			<Wrapper>
				<Popover open={open} defaultOpen={defaultOpen} modal={modal}>
					<PopoverTrigger asChild>
						<IconButton aria-label='Update dimensions'>
							<RxMixerHorizontal />
						</IconButton>
					</PopoverTrigger>
					<PopoverContent {...contentProps}>
						<Flex css={{ flexDirection: 'column', gap: 10 }}>
							<Text css={{ marginBottom: 10 }}>Dimensions</Text>
							<Fieldset>
								<Label htmlFor='width'>Width</Label>
								<Input id='width' defaultValue='100%' />
							</Fieldset>
							<Fieldset>
								<Label htmlFor='maxWidth'>Max. width</Label>
								<Input id='maxWidth' defaultValue='300px' />
							</Fieldset>
							<Fieldset>
								<Label htmlFor='height'>Height</Label>
								<Input id='height' defaultValue='25px' />
							</Fieldset>
							<Fieldset>
								<Label htmlFor='maxHeight'>Max. height</Label>
								<Input id='maxHeight' defaultValue='none' />
							</Fieldset>
						</Flex>
					</PopoverContent>
				</Popover>
			</Wrapper>
		);
	},
	args: {},
} satisfies Story;

const IconButton = styled('button', {
	all: 'unset',
	fontFamily: 'inherit',
	borderRadius: '100%',
	height: 35,
	width: 35,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '$gray500',
	backgroundColor: 'white',
	boxShadow: '$innerBorder, $lg',

	'&:hover': {
		color: '$gray800',
	},

	[`.${darkTheme} &`]: {
		backgroundColor: '$card',
		color: '$gray200',
		'&:hover': {
			color: '$gray400',
		},
	},
});

const Flex = styled('div', { display: 'flex' });
const Fieldset = styled('fieldset', {
	all: 'unset',
	display: 'flex',
	gap: 20,
	alignItems: 'center',
});

const Label = styled('label', {
	fontSize: '$xs',
	width: 75,
});

const Input = styled('input', {
	all: 'unset',
	width: '100%',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	flex: '1',
	borderRadius: 4,
	padding: '0 10px',
	fontSize: '$xs',
	lineHeight: 1,
	boxShadow: '$outerBorder',
	height: 25,

	'&:focus': { boxShadow: '$inputFocus' },
});

const Text = styled('p', {
	margin: 0,
	fontSize: 15,
	lineHeight: '19px',
	fontWeight: 500,
});

const Wrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '3rem',
});
