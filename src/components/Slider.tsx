import React, { ComponentProps, ElementRef, ReactNode } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { styled, CSS, darkTheme, VariantProps, keyframes } from '../../stitches.config';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

//============
// TYPES
//============
type SliderRootPrimitiveProps = ComponentProps<typeof RadixSlider.Root>;
type SliderRootVariants = VariantProps<typeof SliderRoot>;
type SliderRootProps = { css?: CSS } & SliderRootPrimitiveProps & SliderRootVariants;

//============
// FUNCTION
//============
const Slider = React.forwardRef<ElementRef<typeof SliderRoot>, SliderRootProps>(({ ...props }, forwardedRef) => {
	const [currentValue, setCurrentValue] = React.useState(props.defaultValue || props.value || [0]);
	const hasRange = props.defaultValue?.length || props.value?.length;
	const thumbsArray = hasRange && (props.defaultValue || props.value);

	return (
		<SliderRoot {...props} onValueChange={(values) => setCurrentValue(values)} ref={forwardedRef}>
			<SliderTrack>
				<SliderRange />
			</SliderTrack>
			{thumbsArray ? (
				thumbsArray.map((_: any, i: number) => (
					<TooltipThumb value={currentValue[i]}>
						<SliderThumb key={i} />
					</TooltipThumb>
				))
			) : (
				<TooltipThumb value={currentValue[0]}>
					<SliderThumb />
				</TooltipThumb>
			)}
		</SliderRoot>
	);
});

const TooltipThumb = ({ children, value }: { children: ReactNode; value: number }) => (
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipPrimitive.Portal>
				<TooltipContent side='bottom' sideOffset={5}>
					{value}
					<TooltipArrow width={10} asChild>
						<svg viewBox='0 0 30 20' xmlns='http://www.w3.org/2000/svg'>
							<polyline points='0,0 15,20 30,0' />
						</svg>
					</TooltipArrow>
				</TooltipContent>
			</TooltipPrimitive.Portal>
		</Tooltip>
	</TooltipProvider>
);

//============
// STYLES
//============
const SliderRoot = styled(RadixSlider.Root, {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	userSelect: 'none',
	touchAction: 'none',
	width: '100%',

	'&[data-orientation="horizontal"]': {
		height: 20,
	},

	'&[data-orientation="vertical"]': {
		flexDirection: 'column',
		width: 20,
		height: 100,
	},
});

const SliderTrack = styled(RadixSlider.Track, {
	backgroundColor: '$gray100',
	position: 'relative',
	flexGrow: 1,
	borderRadius: '$pill',
	overflow: 'hidden',

	'&[data-orientation="horizontal"]': { height: 6 },
	'&[data-orientation="vertical"]': { width: 6 },
});

const SliderRange = styled(RadixSlider.Range, {
	position: 'absolute',
	backgroundColor: '$primary600',
	borderRadius: '9999px',
	height: '100%',

	'&[data-disabled]': {
		opacity: 0.5,
		backgroundColor: '$gray800',
	},

	'&[data-orientation="vertical"]': {
		width: 6,
	},
});

const SliderThumb = styled(RadixSlider.Thumb, {
	display: 'block',
	width: 16,
	height: 16,
	backgroundColor: 'white',
	boxShadow: '$innerBorder, $md',
	borderRadius: 10,

	'&:hover': {
		backgroundColor: '$gray25',
	},
	'&:focus': {
		outline: 'none',
		boxShadow: '$focus',
	},

	'&[data-disabled]': {
		backgroundColor: '$gray200',
	},
});

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

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = styled(TooltipPrimitive.Content, {
	fontSize: '$sm',
	maxWidth: '21rem',
	borderRadius: '$1',
	padding: '$4 $12',
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

const TooltipArrow = styled(TooltipPrimitive.Arrow, {
	zIndex: 1000,
	fill: '$card',
	stroke: '$border',
	strokeWidth: '2px',
});

export default Slider;
