import { styled } from '../../stitches.config';
import Button from '../components/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'button',
	component: Button,
	argTypes: {
		children: {
			name: 'Label',
			type: { name: 'string', required: false },
			defaultValue: 'Click me',
			description: 'Button text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Click me' },
			},
			control: {
				type: 'text',
			},
		},
		size: {
			name: 'Size',
			type: { name: 'number', required: false },
			defaultValue: 2,
			description: 'Button size in a scale from 1 to 5',
			control: {
				type: 'number',
				min: 1,
				max: 5,
				step: 1,
			},
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 2 },
			},
			if: { arg: 'as', neq: 'a' },
		},
		variant: {
			name: 'Variant',
			type: { name: 'string', required: false },
			defaultValue: 'primary',
			description: 'Button variant',
			control: 'select',
			options: ['primary', 'secondary', 'error'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'primary' },
			},
			if: { arg: 'as', neq: 'a' },
		},
		as: {
			type: { name: 'string', required: false },
			defaultValue: 'button',
			description: 'Defines a button or anchor element.',
			control: 'select',
			options: ['button', 'a', undefined],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'button' },
			},
		},
		outlined: {
			type: { name: 'boolean', required: false },
			defaultValue: false,
			description: 'Adds a border to the button.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			if: { arg: 'as', neq: 'a' },
		},
		ref: {
			table: {
				disable: true,
			},
		},
		CSS: {
			description: 'Add css rules to the button',
			type: Object,
		},
	},
	args: {
		variant: undefined,
		size: undefined,
		as: undefined,
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<>
			{args.as === 'a' ? (
				<Button {...args} as='a' />
			) : (
				<Wrapper>
					<Button {...args} />
					<Button disabled {...args} />
				</Wrapper>
			)}
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Click me',
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Click me',
	variant: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
	children: 'Click me',
	variant: 'error',
};

export const Outlined = Template.bind({});
Outlined.args = {
	children: 'Click me',
	outlined: true,
};

export const OutlinedError = Template.bind({});
OutlinedError.args = {
	children: 'Click me',
	variant: 'error',
	outlined: true,
};

export const Link = Template.bind({});
Link.args = {
	as: 'a',
	children: 'Click me',
	href: 'http://',
};

const Wrapper = styled('div', {
	display: 'flex',
	gap: '1rem',
	margin: '1rem',
});
