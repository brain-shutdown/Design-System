import { ReactNode } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { styled, keyframes, darkTheme } from '../../stitches.config';
import { IconType } from 'react-icons';

type props = {
	Icon: IconType;
	children: ReactNode;
	side?: 'top' | 'right' | 'bottom' | 'left';
};

const Infotip = ({ children, Icon, side }: props) => {
	return (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<IconButton>
						<Icon />
					</IconButton>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<TooltipContent sideOffset={5} side={side}>
						{children}
						<TooltipArrow width={15} asChild>
							<svg viewBox='0 0 30 20' xmlns='http://www.w3.org/2000/svg'>
								<polyline points='0,0 15,20 30,0' />
							</svg>
						</TooltipArrow>
					</TooltipContent>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

const slideUpAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(-2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateY(-2px)' },
	'100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
	'0%': { opacity: 0, transform: 'translateX(2px)' },
	'100%': { opacity: 1, transform: 'translateX(0)' },
});

const TooltipContent = styled(Tooltip.Content, {
	fontSize: '$sm',
	maxWidth: '21rem',
	borderRadius: '$1',
	padding: '$12 $16',
	color: '$gray600',
	backgroundColor: '$card',
	border: '1px solid $border',
	boxShadow: '$lg',
	userSelect: 'none',
	animationDuration: '400ms',
	animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
	willChange: 'transform, opacity',
	zIndex: 100,
	'&[data-state="delayed-open"]': {
		'&[data-side="top"]': { animationName: slideDownAndFade },
		'&[data-side="right"]': { animationName: slideLeftAndFade },
		'&[data-side="bottom"]': { animationName: slideUpAndFade },
		'&[data-side="left"]': { animationName: slideRightAndFade },
	},
	[`.${darkTheme} &`]: {
		color: 'white',
		boxShadow: 'none',
	},
});

const TooltipArrow = styled(Tooltip.Arrow, {
	zIndex: 1000,
	fill: '$card',
	stroke: '$border',
	strokeWidth: '2px',
});

const IconButton = styled('button', {
	all: 'unset',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '$gray500',
	'&:hover': {
		color: '$gray600',
		[`.${darkTheme} &`]: {
			color: '$gray400',
		},
	},

	'& svg': {
		height: 14,
		width: 14,
	},
});

export default Infotip;
