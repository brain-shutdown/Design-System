import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toggle from '../components/Toggle';

export default {
	title: 'Components/Toggle',
	component: Toggle,
	argTypes: {
		size: {
			name: 'Size',
			type: { name: 'string', required: true },
			defaultValue: 2,
			description: 'Toggle size.',
			control: 'select',
			options: ['sm', 'md', 'lg'],
			table: {
				type: { summary: 'sm | md | lg' },
				defaultValue: { summary: 'md' },
			},
		},
		label: {
			name: 'Label',
			type: { name: 'string', required: false },
			defaultValue: 'Click me',
			description: 'Toggle label text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Click me' },
			},
			control: {
				type: 'text',
			},
		},
	},
	args: {},
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
	return <Toggle {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	size: 'md',
};
export const WithLabel = Template.bind({});
WithLabel.args = {
	size: 'md',
	label: 'Click Me',
};
export const Small = Template.bind({});
Small.args = {
	size: 'sm',
	label: 'Click Me',
};
export const Large = Template.bind({});
Large.args = {
	size: 'lg',
	label: 'Click Me',
};
