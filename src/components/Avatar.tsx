import { styled } from '../../stitches.config';
import { ImgHTMLAttributes, ReactNode, useState } from 'react';
import { FiUser } from 'react-icons/fi';

//============
// TYPES
//============
type GenericAvatarProps = {
	status?: 'online' | 'offline' | 'away' | 'busy';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'main' | 'profile';
	className?: string;
	children: ReactNode;
};

type UserType =
	| {
			userType?: 'blank' | 'avatar';
			userName?: string;
	  }
	| {
			userType?: 'initials';
			userName: string;
	  };

export type AvatarProps = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'main' | 'profile';
	status?: 'online' | 'offline' | 'away' | 'busy';
} & UserType &
	ImgHTMLAttributes<HTMLImageElement>;

//============
// FUNCTION
//============
function Avatar({ size, status, userName, userType = 'avatar', ...args }: AvatarProps) {
	const [fallback, setFallback] = useState(!args.src);

	if (userType === 'initials' && userName) {
		// \S -> Match all non-whitespace characters
		// \p{L}{1} -> Match 1 unicode character (e.g. accented characters)
		// Capture the first unicode character of each word in the string
		const rgx = new RegExp(/(\p{L}{1})\S*/, 'gu');
		const result = [...userName.matchAll(rgx)] || [];
		const initials = ((result.shift()?.[1] || '') + (result.pop()?.[1] || '')).toUpperCase();

		return (
			<GenericAvatar size={size} className='initials' status={status}>
				<p>{initials}</p>
			</GenericAvatar>
		);
	}

	if (userType === 'avatar' && !fallback) {
		return (
			<GenericAvatar size={size} status={status}>
				<img {...args} alt='avatar' onError={() => setFallback(true)} />
			</GenericAvatar>
		);
	}

	return (
		<GenericAvatar size={size} className='dummy' status={status}>
			<FiUser />
		</GenericAvatar>
	);
}

function GenericAvatar({ status, size, className, children }: GenericAvatarProps) {
	return (
		<AvatarStyle size={size} className={className}>
			{children}
			{status && <div className={`status status--${status}`}></div>}
		</AvatarStyle>
	);
}

//============
// STYLES
//============
const AvatarStyle = styled('div', {
	position: 'relative',

	'&.initials': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$primary100',
		borderRadius: '$round',
		border: '$$borderWidth solid white',

		'& p': {
			color: '$primary600',
			margin: 0,
			lineHeight: '$xs',
		},
	},
	'&.dummy': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '$primary600',
		backgroundColor: '$primary100',
		borderRadius: '$round',
		border: '$$borderWidth solid white',
	},

	'& img': {
		width: '100%',
		height: 'auto',
		display: 'block',
		borderRadius: '$round',
		border: '$$borderWidth solid white',
		boxShadow: 'inset 0 0 8px 8px white',
	},

	'& .status': {
		width: '10px',
		height: '10px',
		borderRadius: '$round',
		zIndex: '10',
		position: 'absolute',
		right: '2%',
		bottom: '2%',
		border: '1px solid white',

		'&.status--online': {
			background: '$success500',
		},
		'&.status--busy': {
			background: '$error500',
		},
		'&.status--away': {
			background: '$warning200',
		},
		'&.status--offline': {
			background: '$gray200',
		},
	},

	variants: {
		size: {
			xs: {
				width: '24px',
				height: '24px',
				$$borderWidth: '2px',
				'& .status': {
					width: '8px',
					height: '8px',
					right: '-1px',
					bottom: '-1px',
				},
				'&.initials': {
					fontSize: '10px',
				},
				'&.dummy': {
					'& svg': {
						width: '12px',
						height: '12px',
					},
				},
			},
			sm: {
				width: '32px',
				height: '32px',
				$$borderWidth: '2px',
				'& .status': {
					width: '9px',
					height: '9px',
					right: '0',
					bottom: '0',
				},
				'&.initials': {
					fontSize: '$xs',
				},
				'&.dummy': {
					'& svg': {
						width: '16px',
						height: '16px',
					},
				},
			},
			md: {
				width: '40px',
				height: '40px',
				$$borderWidth: '2.5px',
				'& .status': {
					width: '10px',
					height: '10px',
				},
				'&.initials': {
					fontSize: '$sm',
				},
				'&.dummy': {
					'& svg': {
						width: '20px',
						height: '20px',
					},
				},
			},
			lg: {
				width: '48px',
				height: '48px',
				$$borderWidth: '3px',
				'& .status': {
					width: '12px',
					height: '12px',
				},
				'&.dummy': {
					'& svg': {
						width: '24px',
						height: '24px',
					},
				},
			},
			xl: {
				width: '56px',
				height: '56px',
				$$borderWidth: '3px',
				'& .status': {
					width: '14px',
					height: '14px',
				},
				'&.initials': {
					fontSize: '$lg',
				},
				'&.dummy': {
					'& svg': {
						width: '28px',
						height: '28px',
					},
				},
			},
			xxl: {
				width: '64px',
				height: '64px',
				$$borderWidth: '4px',
				'& .status': {
					width: '16px',
					height: '16px',
				},
				'&.initials': {
					fontSize: '$h6',
				},
				'&.dummy': {
					'& svg': {
						width: '32px',
						height: '32px',
					},
				},
			},
			main: {
				width: '96px',
				height: '96px',
				$$borderWidth: '4px',
				'& .status': {
					width: '24px',
					height: '24px',
				},
				'&.initials': {
					fontSize: '$h4',
				},
				'&.dummy': {
					'& svg': {
						width: '48px',
						height: '48px',
					},
				},
			},
			profile: {
				width: '160px',
				height: '160px',
				$$borderWidth: '4px',
				'& .status': {
					width: '40px',
					height: '40px',
				},
				'&.initials': {
					fontSize: '$h1',
				},
				'&.dummy': {
					'& svg': {
						width: '80px',
						height: '80px',
					},
				},
			},
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

export default Avatar;
