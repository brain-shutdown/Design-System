import { BsQuestionCircle } from 'react-icons/bs';
import { styled } from '../../stitches.config';
import Infotip from '../components/Infotip';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Components/Tooltip',
	component: Infotip,
	argTypes: {
		Icon: {
			control: false,
			description: 'Icon to hover over',
			table: {
				type: {
					summary: 'IconType',
				},
			},
		},
		side: {
			name: 'Side',
			type: { name: 'string', required: false },
			defaultValue: 'top',
			description: 'The preferred side of the trigger to render against when open.',
			control: 'select',
			options: ['top', 'bottom', 'left', 'right'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'top' },
			},
		},
		children: {
			name: 'Content',
			type: { name: 'string', required: false },
			description: 'Displays informative text to the user.',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'ReactNode' },
			},
		},
	},
	args: {
		side: undefined,
	},
} as ComponentMeta<typeof Infotip>;

const Template: ComponentStory<typeof Infotip> = (args) => {
	return (
		<Wrapper>
			<Infotip {...args}>{args.children}</Infotip>
		</Wrapper>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: 'Tooltips are normally used to display some additional information',
	Icon: BsQuestionCircle,
};

const Wrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '3rem',
});
