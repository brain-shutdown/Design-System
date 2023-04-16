import { Meta, StoryObj } from '@storybook/react';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from '../components/Dialog';
import { ComponentProps } from 'react';
import Button from '../components/Button';
import { styled } from '../../stitches.config';
import Input from '../components/Input';

type metaProps = ComponentProps<typeof Dialog> & ComponentProps<typeof DialogContent>;

const meta = {
	title: 'Components/Dialog',
	component: Dialog,
	argTypes: {
		// DIALOG
		defaultOpen: {
			description:
				'The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.',
			table: {
				type: { summary: 'boolean' },
				category: 'Dialog',
			},
			control: 'boolean',
		},
		open: {
			description: 'The controlled open state of the dialog. Must be used in conjunction with onOpenChange.',
			table: {
				type: { summary: 'boolean' },
				category: 'Dialog',
			},
			control: 'boolean',
		},
		modal: {
			description:
				'The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
				category: 'Dialog',
			},
			control: 'boolean',
		},
		onOpenChange: {
			description: 'Event handler called when the open state of the dialog changes.',
			table: {
				type: { summary: '(open: boolean) => void' },
				category: 'Dialog',
			},
		},
		//DIALOG CONTENT
		asChild: {
			description:
				'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Dialog Content',
			},
			control: false,
		},
		forceMount: {
			description:
				'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from Dialog.Portal.',
			table: {
				type: { summary: 'boolean' },
				category: 'Dialog Content',
			},
			control: false,
		},
		onOpenAutoFocus: {
			description:
				'Event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: Event) => void' },
				category: 'Dialog Content',
			},
		},
		onCloseAutoFocus: {
			description:
				'Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: Event) => void' },
				category: 'Dialog Content',
			},
		},
		onEscapeKeyDown: {
			description:
				'Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: KeyboardEvent) => void' },
				category: 'Dialog Content',
			},
		},
		onPointerDownOutside: {
			description:
				'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: PointerDownOutsideEvent) => void' },
				category: 'Dialog Content',
			},
		},
		onInteractOutside: {
			description:
				'Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: React.FocusEvent | MouseEvent | TouchEvent) => void' },
				category: 'Dialog Content',
			},
		},
	},
	args: {},
} satisfies Meta<metaProps>;

export default meta;
type Story = StoryObj<metaProps>;

export const Default = {
	render: (args) => {
		const { defaultOpen, open, onOpenChange, modal, ...dialogContentProps } = args;
		return (
			<Dialog defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
				<DialogTrigger asChild>
					<Button>Edit Profile</Button>
				</DialogTrigger>
				<DialogContent {...dialogContentProps} css={{ width: 500 }}>
					<DialogTitle>Edit Profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
					<Fieldset>
						<Label htmlFor='name'>Name</Label>
						<Input id='name' defaultValue='John Doe' />
					</Fieldset>
					<Fieldset>
						<Label htmlFor='email'>Email</Label>
						<Input name='email' type='email' defaultValue='johndoe@gmail.com' />
					</Fieldset>
					<Flex css={{ marginTop: 50, justifyContent: 'flex-end', gap: 10 }}>
						<DialogClose asChild>
							<Button variant='error'>Cancel</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button>Save changes</Button>
						</DialogClose>
					</Flex>
				</DialogContent>
			</Dialog>
		);
	},
	args: {},
} satisfies Story;

const Flex = styled('div', { display: 'flex' });
const Fieldset = styled('fieldset', {
	all: 'unset',
	display: 'flex',
	gap: 20,
	alignItems: 'center',
	marginBottom: 15,
});
const Label = styled('label', {
	fontSize: '$sm',
	width: 75,
	textAlign: 'right',
});
