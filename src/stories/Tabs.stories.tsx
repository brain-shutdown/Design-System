import { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../components/Tabs';
import { styled } from '../../stitches.config';
import Button from '../components/Button';

const meta = {
	title: 'Components/Tabs',
	component: Tabs,
	argTypes: {
		isCard: {
			description: 'Show Tabs in a card format.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: 'boolean',
		},
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
			description:
				'The controlled value of the tab to activate. Should be used in conjunction with onValueChange.',
			table: {
				type: { summary: 'string' },
			},
			control: 'text',
		},
		defaultValue: {
			description:
				'The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.',
			table: {
				type: { summary: 'string' },
			},
			control: 'text',
		},
		onValueChange: {
			description: 'Event handler called when the value changes.',
			table: {
				type: { summary: '(value: string) => void' },
			},
		},
		orientation: {
			description: 'The orientation of the component.',
			table: {
				type: { summary: 'horizontal | vertical | undefined' },
				defaultValue: { summary: 'horizontal' },
			},
			control: 'radio',
			options: ['horizontal', 'vertical', 'undefined'],
		},
		dir: {
			description:
				'The reading direction of the tabs. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
			table: {
				type: { summary: 'ltr | rtl' },
			},
			control: 'inline-radio',
			options: ['ltr', 'rtl'],
		},
		activationMode: {
			description:
				'When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.',
			table: {
				type: { summary: 'automatic | manual' },
				defaultValue: { summary: 'automatic' },
			},
			control: 'inline-radio',
			options: ['automatic', 'manual'],
		},
	},
	args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<Tabs {...args} css={{ width: 400 }}>
				<TabsList aria-label='Manage your account'>
					<TabsTrigger value='tab1'>Account</TabsTrigger>
					<TabsTrigger value='tab2'>Password</TabsTrigger>
				</TabsList>
				<TabsContent value='tab1'>
					<Text>Make changes to your account here. Click save when you're done.</Text>
					<Fieldset>
						<Label htmlFor='name'>Name</Label>
						<Input id='name' defaultValue='John Doe' />
					</Fieldset>
					<Fieldset>
						<Label htmlFor='username'>Username</Label>
						<Input id='username' defaultValue='@johnDoe' />
					</Fieldset>
					<Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
						<Button>Save changes</Button>
					</Flex>
				</TabsContent>
				<TabsContent value='tab2'>
					<Text>Change your password here. After saving, you'll be logged out.</Text>
					<Fieldset>
						<Label htmlFor='currentPassword'>Current password</Label>
						<Input id='currentPassword' type='password' />
					</Fieldset>
					<Fieldset>
						<Label htmlFor='newPassword'>New password</Label>
						<Input id='newPassword' type='password' />
					</Fieldset>
					<Fieldset>
						<Label htmlFor='confirmPassword'>Confirm password</Label>
						<Input id='confirmPassword' type='password' />
					</Fieldset>
					<Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
						<Button>Change password</Button>
					</Flex>
				</TabsContent>
			</Tabs>
		);
	},
	args: {
		defaultValue: 'tab1',
		isCard: true,
	},
} satisfies Story;

const Flex = styled('div', { display: 'flex' });

const Text = styled('p', {
	marginTop: 0,
	marginBottom: 20,
	fontSize: '$sm',
	lineHeight: 1.5,
});

const Fieldset = styled('fieldset', {
	all: 'unset',
	marginBottom: 15,
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
});

const Label = styled('label', {
	fontSize: '$xs',
	lineHeight: 1,
	marginBottom: 10,
	display: 'block',
});

const Input = styled('input', {
	all: 'unset',
	flex: '1 0 auto',
	borderRadius: 4,
	fontSize: '$sm',
	padding: '0 10px',
	boxShadow: '$outerBorder',
	height: 35,
	'&:focus': { boxShadow: '$inputFocus' },
});
