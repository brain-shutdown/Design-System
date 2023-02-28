import { ComponentProps, ReactNode } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { styled, keyframes, darkTheme } from '../../stitches.config';

type TooltipPrimitiveProps = ComponentProps<typeof Tooltip.Root>;
type TooltipProps = TooltipPrimitiveProps &
	ComponentProps<typeof Tooltip.Content> & {
		children: ReactNode;
		content: ReactNode;
		size?: 'sm' | 'md' | 'lg';
	};

const Infotip = ({
	children,
	content,
	size,
	open,
	defaultOpen,
	onOpenChange,
	delayDuration,
	disableHoverableContent,
	...props
}: TooltipProps) => {
	const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
	return (
		<Tooltip.Provider>
			<Tooltip.Root {...rootProps}>
				<Tooltip.Trigger asChild>
					<IconButton aria-label='tooltipIcon' size={size}>
						{children}
					</IconButton>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<TooltipContent sideOffset={5} {...props}>
						{content}
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
	color: '$body',
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
	color: '$gray400',
	'&:hover': {
		color: '$gray600',
		[`.${darkTheme} &`]: {
			color: '$gray300',
		},
	},
	variants: {
		size: {
			sm: {
				'& svg': {
					height: 15,
					width: 15,
				},
			},
			md: {
				'& svg': {
					height: 30,
					width: 35,
				},
			},
			lg: {
				'& svg': {
					height: 45,
					width: 45,
				},
			},
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

export default Infotip;
