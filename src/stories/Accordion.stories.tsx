import { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/Accordion';

const meta = {
	title: 'Components/Accordion',
	component: Accordion,
	argTypes: {
		collapsible: {
			name: 'Collapsible',
			description: 'When type is "single", allows closing content when clicking trigger for an open item.',
			table: {
				type: { summary: 'boolean' },
			},
			if: { arg: 'type', eq: 'single' },
		},
		isCard: {
			name: 'Card',
			description: 'Determines whether the accordion should be a card.',
			table: {
				type: { summary: 'boolean' },
			},
		},
		type: {
			name: 'Type',
			description: 'Determines whether one or multiple items can be opened at the same time.',
			table: {
				type: { summary: 'single | multiple' },
				defaultValue: { summary: 'single' },
			},
			control: 'radio',
			options: ['single', 'multiple'],
		},
	},
	args: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<Accordion {...args}>
				<AccordionItem value='item-1'>
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger>Is it unstyled?</AccordionTrigger>
					<AccordionContent>
						Yes. It's unstyled by default, giving you freedom over the look and feel.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger>Can it be animated?</AccordionTrigger>
					<AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
				</AccordionItem>
			</Accordion>
		);
	},
	args: {
		type: 'single',
		collapsible: true,
	},
} satisfies Story;

export const Multiple = {
	...Default,
	args: {
		type: 'multiple',
	},
} satisfies Story;

export const Card = {
	...Default,
	args: {
		type: 'single',
		collapsible: true,
		isCard: true,
	},
} satisfies Story;
