import { Meta, StoryObj } from '@storybook/react';
import Separator from '../components/Separator';
import { styled } from '../../stitches.config';

const meta = {
	title: 'Components/Separator',
	component: Separator,
	argTypes: {
		orientation: {
			name: 'Orientation',
			description: 'The orientation of the separator.',
			table: {
				type: { summary: 'horizontal | vertical' },
				defaultValue: { summary: 'horizontal' },
			},
			control: false,
		},
		decorative: {
			name: 'Decorative',
			description:
				'When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.',
			table: {
				type: { summary: 'boolean' },
			},
			control: false,
		},
	},
	args: {},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
	render: () => {
		return (
			<Box css={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
				<Text css={{ fontWeight: 500 }}>Lorem Ipsum</Text>
				<Text>Lorem ipsum dolor sit amet consectetur.</Text>
				<Separator css={{ margin: '15px 0' }} />
				<Flex css={{ height: 20, alignItems: 'center' }}>
					<Text>Blog</Text>
					<Separator decorative orientation='vertical' css={{ margin: '0 15px' }} />
					<Text>Docs</Text>
					<Separator decorative orientation='vertical' css={{ margin: '0 15px' }} />
					<Text>Source</Text>
				</Flex>
			</Box>
		);
	},
	args: {},
} satisfies Story;

const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });
const Text = styled('div', {
	fontSize: 15,
	lineHeight: '20px',
});
