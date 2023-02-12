import { ReactNode } from 'react';
import { darkTheme, styled } from '../../stitches.config';
//============
// TYPES
//============
type AvatarLabelProps = {
	name: string;
	email: string;
	children: ReactNode;
};

//============
// FUNCTION
//============
function AvatarLabel({ name, email, children }: AvatarLabelProps) {
	return (
		<Wrapper>
			{children}
			<div className='media'>
				<p className='name'>{name}</p>
				<p className='email'>{email}</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled('div', {
	display: 'flex',
	gap: '$12',
	alignItems: 'center',

	'& .media': {
		display: 'flex',
		flexDirection: 'column',
		gap: '$4',
	},

	'& .name': {
		fontSize: '$sm',
		fontWeight: 'bold',
		margin: 0,
	},
	'& .email': {
		fontSize: '$xs',
		color: '$gray500',
		margin: 0,

		[`.${darkTheme} &`]: {
			color: '$gray300',
		},
	},
});

export default AvatarLabel;
