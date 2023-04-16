import { Meta, StoryObj } from '@storybook/react';
import { HoverCardContent, HoverCard, HoverCardTrigger } from '../components/HoverCard';
import { ComponentProps } from 'react';
import { styled } from '../../stitches.config';

type metaProps = ComponentProps<typeof HoverCard> & ComponentProps<typeof HoverCardContent>;

const meta = {
	title: 'Components/HoverCard',
	component: HoverCard,
	argTypes: {
		// HOVER CARD
		defaultOpen: {
			description:
				'The open state of the hover card when it is initially rendered. Use when you do not need to control its open state.',
			table: {
				type: { summary: 'boolean' },
				category: 'Hover Card',
			},
			control: 'boolean',
		},
		open: {
			description: 'The controlled open state of the hover card. Must be used in conjunction with onOpenChange.',
			table: {
				type: { summary: 'boolean' },
				category: 'Hover Card',
			},
			control: 'boolean',
		},
		onOpenChange: {
			description: 'Event handler called when the open state of the hover card changes.',
			table: {
				type: { summary: '(open: boolean) => void' },
				category: 'Hover Card',
			},
		},
		openDelay: {
			description: 'The duration from when the mouse enters the trigger until the hover card opens.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '700' },
				category: 'Hover Card',
			},
			control: { type: 'number', min: 0, max: 10000, step: 100 },
		},
		closeDelay: {
			description: 'The duration from when the mouse leaves the trigger or content until the hover card closes.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '700' },
				category: 'Hover Card',
			},
			control: { type: 'number', min: 0, max: 10000, step: 100 },
		},
		// HOVER CARD CONTENT
		asChild: {
			description:
				'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Hover Card Content',
			},
			control: false,
		},
		forceMount: {
			description:
				'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from HoverCard.Portal.',
			table: {
				type: { summary: 'boolean' },
				category: 'Hover Card Content',
			},
			control: false,
		},
		side: {
			description:
				'The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.',
			table: {
				type: { summary: 'left | right | top | bottom' },
				defaultValue: { summary: 'bottom' },
				category: 'Hover Card Content',
			},
			control: 'select',
			options: ['left', 'right', 'top', 'bottom'],
		},
		sideOffset: {
			description: 'The distance in pixels from the anchor. Only available when position is set to popper.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Hover Card Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
			if: { arg: 'position', eq: 'popper' },
		},
		align: {
			description: 'The preferred alignment against the trigger. May change when collisions occur.',
			table: {
				type: { summary: 'start | center | end' },
				defaultValue: { summary: 'start' },
				category: 'Hover Card Content',
			},
			control: 'select',
			options: ['start', 'center', 'end'],
		},
		alignOffset: {
			description: 'An offset in pixels from the "start" or "end" alignment options.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Hover Card Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
		},
		avoidCollisions: {
			description:
				'When true, overrides the side andalign preferences to prevent collisions with boundary edges.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
				category: 'Hover Card Content',
			},
			control: 'boolean',
		},
		collisionBoundary: {
			description:
				'The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.',
			table: {
				type: { summary: 'Element | null | Array<Element | null>' },
				defaultValue: { summary: '[]' },
				category: 'Hover Card Content',
			},
			control: false,
		},
		collisionPadding: {
			description:
				'The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.',
			table: {
				type: { summary: 'number | Padding' },
				defaultValue: { summary: '10' },
				category: 'Hover Card Content',
			},
			control: 'object',
		},
		arrowPadding: {
			description:
				'The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '0' },
				category: 'Hover Card Content',
			},
			control: { type: 'number', min: 0, max: 30, step: 1 },
		},
		sticky: {
			description:
				'The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.',
			table: {
				type: { summary: 'partial | always' },
				defaultValue: { summary: 'partial' },
				category: 'Hover Card Content',
			},
			control: 'inline-radio',
			options: ['partial', 'always'],
		},
		hideWhenDetached: {
			description: 'Whether to hide the content when the trigger becomes fully occluded.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Hover Card Content',
			},
			control: 'boolean',
		},
	},
	args: {},
} satisfies Meta<metaProps>;

export default meta;
type Story = StoryObj<metaProps>;

export const Default = {
	render: (args) => {
		const { defaultOpen, open, onOpenChange, openDelay, closeDelay, ...HoverCardContentProps } = args;
		return (
			<HoverCard
				defaultOpen={defaultOpen}
				open={open}
				onOpenChange={onOpenChange}
				openDelay={openDelay}
				closeDelay={closeDelay}>
				<HoverCardTrigger asChild>
					<ImageTrigger href='https://twitter.com/radix_ui' target='_blank' rel='noreferrer noopener'>
						<Img
							src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
							alt='Radix UI'
						/>
					</ImageTrigger>
				</HoverCardTrigger>
				<HoverCardContent {...HoverCardContentProps}>
					<Flex css={{ flexDirection: 'column', gap: 7 }}>
						<Img
							size='large'
							src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
							alt='Radix UI'
						/>
						<Flex css={{ flexDirection: 'column', gap: 15 }}>
							<div>
								<Text bold>Radix</Text>
								<Text faded>@radix_ui</Text>
							</div>
							<Text>
								Components, icons, colors, and templates for building high-quality, accessible UI. Free
								and open-source.
							</Text>
							<Flex css={{ gap: 15 }}>
								<Flex css={{ gap: 5 }}>
									<Text bold>0</Text> <Text faded>Following</Text>
								</Flex>
								<Flex css={{ gap: 5 }}>
									<Text bold>2,900</Text> <Text faded>Followers</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</HoverCardContent>
			</HoverCard>
		);
	},
	args: {
		sideOffset: 5,
	},
} satisfies Story;

const ImageTrigger = styled('a', {
	all: 'unset',
	cursor: 'pointer',
	borderRadius: '$round',
	display: 'inline-block',
	'&:focus': { boxShadow: '$focus' },
});

const Img = styled('img', {
	display: 'block',
	borderRadius: '100%',
	variants: {
		size: {
			normal: { width: 45, height: 45 },
			large: { width: 60, height: 60 },
		},
	},
	defaultVariants: {
		size: 'normal',
	},
});

const Text = styled('div', {
	margin: 0,
	fontSize: 15,
	lineHeight: 1.5,
	variants: {
		faded: {
			true: { color: '$gray400' },
		},
		bold: {
			true: { fontWeight: 500 },
		},
	},
});

const Flex = styled('div', { display: 'flex' });
