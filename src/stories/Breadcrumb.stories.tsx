import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../components/Breadcrumbs';

const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	argTypes: {
		maxItems: {
			description:
				'Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first and last items will be shown, with an ellipsis in between.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '8' },
			},
			control: { type: 'number', min: 2, max: 8, step: 1 },
		},
		separator: {
			description: 'Custom separator node.',
			table: {
				type: { summary: 'ReactNode' },
				defaultValue: { summary: '/' },
			},
			control: 'text',
		},
		children: {
			description: 'The content of the component.',
			table: {
				type: { summary: 'ReactNode' },
			},
			control: false,
		},
	},
	args: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<Breadcrumbs separator={args.separator} maxItems={args.maxItems}>
				<span>Home</span>
				<span>Projects</span>
				<span>React</span>
				<span>Storybook</span>
			</Breadcrumbs>
		);
	},
	args: {
		maxItems: 2,
		separator: '/',
		children: <></>,
	},
} satisfies Story;
