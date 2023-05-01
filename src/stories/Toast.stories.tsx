import { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, ToastRef, useToast } from '../components/Toast';
import React from 'react';
import Button from '../components/Button';
import { styled } from '../../stitches.config';

const meta = {
	title: 'Components/Toast',
	component: ToastProvider,
	argTypes: {
		// PROVIDER
		duration: {
			description: 'The time in milliseconds that should elapse before automatically closing each toast.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '5000' },
				category: 'Toast Provider',
			},
			control: { type: 'number', min: 0, max: 10000, step: 100 },
		},
		label: {
			description:
				'An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Notification' },
				category: 'Toast Provider',
			},
			control: 'text',
		},
		swipeThreshold: {
			description: 'The distance in pixels that the swipe gesture must travel before a close is triggered.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '50' },
				category: 'Toast Provider',
			},
			control: { type: 'number', min: 0, max: 200, step: 10 },
		},
		position: {
			description: 'Controls the position of the toast in the page.',
			table: {
				type: {
					summary: 'bottom-right | top-left | top-right | bottom-left | bottom-center | top-center',
				},
				defaultValue: { summary: 'foreground' },
				category: 'Toast Provider',
			},
			control: 'select',
			options: ['bottom-right', 'top-left', 'top-right', 'bottom-left', 'bottom-center', 'top-center'],
		},
		children: {
			description: 'Toast Action button.',
			table: {
				type: { summary: 'ReactNode' },
				category: 'Toast Provider',
			},
			control: false,
		},
		// VIEWPORT
		hotkey: {
			description:
				'The keys to use as the keyboard shortcut that will move focus to the toast viewport. Use event.code value for each key from keycode.info. For meta keys, use ctrlKey, shiftKey, altKey and/or metaKey.',
			table: {
				type: { summary: 'string[]' },
				defaultValue: { summary: '["F8"]' },
				category: 'Toast Viewport',
			},
			control: 'object',
		},
		// ACTION
		altText: {
			description:
				'An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Notification' },
				category: 'Toast Action',
			},
			control: 'text',
			if: { arg: 'children', truthy: true },
		},
	},
	args: {},
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<Flex>
				<ToastProvider {...args}>
					<Mock />
				</ToastProvider>
			</Flex>
		);
	},
	args: {},
} satisfies Story;

const Mock = () => {
	const toast = useToast();
	return (
		<>
			<Button
				onClick={() => {
					toast.success({
						title: 'Success!',
						description: prettyDate(new Date()),
					});
				}}>
				Success
			</Button>
			<Button
				onClick={() => {
					toast.error({
						title: 'Error!',
						description: prettyDate(new Date()),
					});
				}}>
				Error
			</Button>
			<Button
				onClick={() => {
					toast.warn({
						title: 'Warning!',
						description: prettyDate(new Date()),
					});
				}}>
				Warning
			</Button>
			<Button
				onClick={() => {
					toast.info({
						title: 'Changes Updated!',
						description: prettyDate(new Date()),
					});
				}}>
				Information
			</Button>
		</>
	);
};

function prettyDate(date: Date) {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full',
		timeStyle: 'short',
	}).format(date);
}

const Flex = styled('div', {
	display: 'flex',
	gap: 5,
});
