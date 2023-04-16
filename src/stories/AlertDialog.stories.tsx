import { Meta, StoryObj } from '@storybook/react';
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
	AlertDialogAction,
} from '../components/AlertDialog';
import { ComponentProps } from 'react';
import Button from '../components/Button';
import { styled } from '../../stitches.config';

type metaProps = ComponentProps<typeof AlertDialog> & ComponentProps<typeof AlertDialogContent>;

const meta = {
	title: 'Components/AlertDialog',
	component: AlertDialog,
	argTypes: {
		// DIALOG
		defaultOpen: {
			description:
				'The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.',
			table: {
				type: { summary: 'boolean' },
				category: 'Alert Dialog',
			},
			control: 'boolean',
		},
		open: {
			description: 'The controlled open state of the dialog. Must be used in conjunction with onOpenChange.',
			table: {
				type: { summary: 'boolean' },
				category: 'Alert Dialog',
			},
			control: 'boolean',
		},
		onOpenChange: {
			description: 'Event handler called when the open state of the dialog changes.',
			table: {
				type: { summary: '(open: boolean) => void' },
				category: 'Alert Dialog',
			},
		},
		//DIALOG CONTENT
		asChild: {
			description:
				'Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
				category: 'Alert Dialog Content',
			},
			control: false,
		},
		forceMount: {
			description:
				'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from Dialog.Portal.',
			table: {
				type: { summary: 'boolean' },
				category: 'Alert Dialog Content',
			},
			control: false,
		},
		onOpenAutoFocus: {
			description:
				'Event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: Event) => void' },
				category: 'Alert Dialog Content',
			},
		},
		onCloseAutoFocus: {
			description:
				'Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: Event) => void' },
				category: 'Alert Dialog Content',
			},
		},
		onEscapeKeyDown: {
			description:
				'Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.',
			table: {
				type: { summary: '(event: KeyboardEvent) => void' },
				category: 'Alert Dialog Content',
			},
		},
	},
	args: {},
} satisfies Meta<metaProps>;

export default meta;
type Story = StoryObj<metaProps>;

export const Default = {
	render: (args) => {
		const { defaultOpen, open, onOpenChange, ...dialogContentProps } = args;
		return (
			<AlertDialog defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
				<AlertDialogTrigger asChild>
					<Button>Delete Account</Button>
				</AlertDialogTrigger>
				<AlertDialogContent {...dialogContentProps} css={{ width: 500 }}>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your account and remove your data
						from our servers.
					</AlertDialogDescription>
					<Flex css={{ justifyContent: 'flex-end', gap: 10 }}>
						<AlertDialogCancel asChild>
							<Button variant='secondary'>Cancel</Button>
						</AlertDialogCancel>
						<AlertDialogAction asChild>
							<Button variant='error'>Yes, delete account</Button>
						</AlertDialogAction>
					</Flex>
				</AlertDialogContent>
			</AlertDialog>
		);
	},
	args: {},
} satisfies Story;

const Flex = styled('div', { display: 'flex' });
