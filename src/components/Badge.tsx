import { styled } from '../../stitches.config';
import { ReactNode } from 'react';
import { RxCross2, RxArrowUp, RxArrowRight } from 'react-icons/rx';

//============
// TYPES
//============
type Variant =
	| { variant?: 'leftArrowUp' | 'rightArrow' | 'close' | 'update' | undefined; avatarUrl?: undefined }
	| { variant?: 'avatar'; avatarUrl: string };

type BadgeProps = {
	size?: 'sm' | 'md' | 'lg';
	color?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
	children: ReactNode;
} & Variant;

//============
// FUNCTION
//============
function Badge({ size, color, variant, avatarUrl, children }: BadgeProps) {
	if (variant === 'update') {
		return (
			<StyledBadge size={size} color={color}>
				<span className='dot'></span>
				{children}
			</StyledBadge>
		);
	} else if (variant === 'close') {
		return (
			<StyledBadge size={size} color={color}>
				<span>{children}</span>
				<RxCross2 />
			</StyledBadge>
		);
	} else if (variant === 'leftArrowUp') {
		return (
			<StyledBadge size={size} color={color}>
				<RxArrowUp />
				<span>{children}</span>
			</StyledBadge>
		);
	} else if (variant === 'rightArrow') {
		return (
			<StyledBadge size={size} color={color}>
				<span>{children}</span>
				<RxArrowRight />
			</StyledBadge>
		);
	} else if (variant === 'avatar') {
		return (
			<StyledBadge size={size} color={color}>
				<div className='avatar'>
					<img src={avatarUrl} alt='avatar' />
				</div>
				<span>{children}</span>
			</StyledBadge>
		);
	}
	return (
		<StyledBadge size={size} color={color}>
			<span>{children}</span>
		</StyledBadge>
	);
}

//============
// STYLES
//============
const StyledBadge = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '6px',
	borderRadius: '$pill',
	lineHeight: '$xs',

	'& .dot': {
		width: '6px',
		height: '6px',
		borderRadius: '$round',
		background: '$gray500',
	},
	'& .avatar': {
		width: '16px',
		height: '16px',
		'& img': {
			width: '100%',
			height: '100%',
			borderRadius: '$round',
		},
	},

	variants: {
		size: {
			sm: {
				fontSize: '$xs',
				px: '10px',
				py: '$4',
			},
			md: {
				fontSize: '$sm',
				px: '$12',
				py: '6px',
			},
			lg: {
				fontSize: '$sm',
				px: '$16',
				py: '$8',
			},
		},
		color: {
			1: {
				background: '$primary50',
				color: '$primary800',
				'& .dot': {
					background: '$primary500',
				},
			},
			2: {
				background: '$gray100',
				color: '$gray700',
				'& .dot': {
					background: '$gray500',
				},
			},
			3: {
				background: '$error100',
				color: '$error700',
				'& .dot': {
					background: '$error500',
				},
			},
			4: {
				background: '$warning100',
				color: '$warning700',
				'& .dot': {
					background: '$warning500',
				},
			},
			5: {
				background: '$success100',
				color: '$success700',
				'& .dot': {
					background: '$success500',
				},
			},
			6: {
				background: '$purple10',
				color: '$purple50',
				'& .dot': {
					background: '$purple40',
				},
			},
		},
	},
	defaultVariants: {
		color: 1,
		size: 'lg',
	},
});

export default Badge;
