import { Children } from 'react';
import { styled } from '../../stitches.config';
import Avatar from './Avatar';

//============
// TYPES
//============
type AvatarGroupProps = {
	size?: 'sm' | 'md' | 'lg';
	users: {
		id: string | number;
		userName: string;
		avatarUrl: string;
	}[];
};

//============
// FUNCTION
//============
function AvatarGroup({ users, size = 'md' }: AvatarGroupProps) {
	if (users && users.length !== 0) {
		const usersLength = users.length;
		let avatars = users;
		if (usersLength > 5) {
			avatars = users.slice(0, 5);
		}
		return (
			<Wrapper>
				{avatars?.map((avatar) => {
					const { id, userName, avatarUrl } = avatar;
					return <Avatar key={id} size={size} src={avatarUrl} userName={userName} userType='avatar' />;
				})}
				{usersLength > 5 && <div className='surplus'>{`+${usersLength - 5}`}</div>}
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<p>No Subscribers</p>
		</Wrapper>
	);
}

const Wrapper = styled('div', {
	display: 'flex',
	'& div': {
		marginRight: '-0.75rem',
	},
	'& .surplus': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$primary100',
		borderRadius: '$round',
		width: '40px',
		height: '40px',
		$$borderWidth: '2.5px',
		border: '$$borderWidth solid white',
		fontSize: '$sm',
		color: '$primary600',
		margin: 0,
		lineHeight: '$xs',
		zIndex: 10,
	},
});

export default AvatarGroup;
