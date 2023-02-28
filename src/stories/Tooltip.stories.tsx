import { BsQuestionCircle } from 'react-icons/bs';
import { darkTheme, styled } from '../../stitches.config';
import Infotip from '../components/Infotip';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Tooltip',
	component: Infotip,
} satisfies Meta<typeof Infotip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
	render: (args) => {
		return (
			<Wrapper>
				<Infotip {...args}>{args.children}</Infotip>
			</Wrapper>
		);
	},
	args: {
		children: <BsQuestionCircle />,
		content: 'Tooltips are normally used to display some additional information',
	},
} satisfies Story;

const Wrapper = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '3rem',
});
