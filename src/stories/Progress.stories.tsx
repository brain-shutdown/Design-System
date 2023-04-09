import { Meta, StoryObj } from '@storybook/react';
import Progress from '../components/Progress';
import React from 'react';

const meta = {
	title: 'Components/Progress',
	component: Progress,
	argTypes: {
		value: {
			name: 'Value',
			description: 'The progress value.',
			table: {
				type: { summary: 'number' },
			},
			control: { type: 'range', min: 0, max: 100, step: 1 },
		},
		width: {
			name: 'Width',
			description: 'Progress width.',
		},
		height: {
			name: 'Height',
			description: 'Progress height.',
			if: { arg: 'type', neq: 'circle' },
		},
		showPercentage: {
			name: 'Show Percentage',
			description: 'Progress percentage.',
		},
		strokeWidth: {
			name: 'Stroke Width',
			description: 'Width of the progress bar.',
			control: { type: 'number', min: 1, max: 10, step: 1 },
		},
		indeterminate: {
			name: 'Indeterminate',
			description: 'When true, the progress becomes indeterminate and a loading animation appears.',
			table: {
				type: { summary: 'boolean' },
			},
			control: { type: 'boolean' },
		},
		type: {
			name: 'Type',
			description: 'Choose the progress bar type.',
			table: {
				type: { summary: 'linear | circle | half-circle' },
			},
			control: 'radio',
			options: ['linear', 'circle', 'half-circle'],
		},
		asChild: {
			control: false,
		},
	},
	args: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar = {
	render: (args) => {
		return <Progress {...args} />;
	},
	args: {
		value: 0,
		width: 300,
		height: 10,
		showPercentage: true,
	},
} satisfies Story;

export const BarIndeterminate = {
	render: (args) => {
		return <Progress {...args} />;
	},
	args: {
		value: 0,
		width: 300,
		height: 10,
		showPercentage: true,
		indeterminate: true,
	},
} satisfies Story;

export const Circular = {
	render: (args) => {
		return <Progress {...args} />;
	},
	args: {
		value: 50,
		type: 'circle',
		width: 100,
		showPercentage: true,
	},
} satisfies Story;

export const CircularIndeterminate = {
	render: (args) => {
		return <Progress {...args} />;
	},
	args: {
		value: 50,
		type: 'circle',
		width: 100,
		showPercentage: false,
		indeterminate: true,
	},
} satisfies Story;

export const HalfCircle = {
	render: (args) => {
		return <Progress {...args} />;
	},
	args: {
		value: 50,
		type: 'half-circle',
		width: 150,
		showPercentage: true,
	},
} satisfies Story;

export const HalfCircleIndeterminate = {
	render: (args) => {
		return <Progress {...args} />;
	},
	args: {
		value: 50,
		type: 'half-circle',
		width: 150,
		showPercentage: true,
		indeterminate: true,
	},
} satisfies Story;
