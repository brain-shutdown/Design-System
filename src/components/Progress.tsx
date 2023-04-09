import { ComponentProps, ElementRef, forwardRef } from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import { darkTheme, styled, VariantProps, CSS, keyframes } from '../../stitches.config';
import { BsAspectRatio } from 'react-icons/bs';

//============
// TYPES
//============

type ProgressPrimitiveProps = Omit<ComponentProps<typeof RadixProgress.Root>, 'max'>;
type ProgressVariants = VariantProps<typeof Box>;
type ProgressProps = {
	css?: CSS;
	width?: number;
	height?: number;
	strokeWidth?: number;
	showPercentage?: boolean;
} & ProgressPrimitiveProps &
	ProgressVariants;

//============
// FUNCTION
//============
const Progress = forwardRef<ElementRef<typeof ProgressRoot>, ProgressProps>(
	(
		{
			value = 0,
			width = 100,
			height = 100,
			strokeWidth = 5,
			type = 'linear',
			showPercentage,
			indeterminate,
			...props
		},
		forwardedRef
	) => {
		// SVG properties for circular progress
		const radius = width / 2;
		const percentage = value != null ? Math.round((value / 100) * 100) : 0;
		const strokeDasharray = 2 * Math.PI * (radius - strokeWidth / 2);
		const strokeDashoffset = strokeDasharray * ((100 - percentage) / 100);

		return (
			<Box
				type={type}
				indeterminate={indeterminate}
				css={{
					width: `${type === 'linear' ? '100%' : width + 'px'}`,
					$$strokeDasharray: strokeDasharray,
					$$strokeDashoffset: `${indeterminate ? strokeDasharray : strokeDashoffset}`,
					$$strokeWidth: strokeWidth,
					$$percentage: percentage,
					$$indeterminateStroke: (strokeDashoffset * 4) / 3,
				}}>
				<ProgressRoot
					value={indeterminate ? 0 : percentage}
					ref={forwardedRef}
					css={{ height: `${type === 'linear' ? height + 'px' : type === 'circle' ? width + 'px' : '100%'}` }}
					aria-label='Progress Bar'
					{...props}>
					{type === 'circle' && (
						<ProgressIndicator asChild={true}>
							<svg xmlns='http://www.w3.org/2000/svg'>
								<Circle cx={radius} cy={radius} r={radius - 2.5} />
								<Circle cx={radius} cy={radius} r={radius - 2.5} />
							</svg>
						</ProgressIndicator>
					)}
					{type === 'half-circle' && (
						<ProgressIndicator asChild={true}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 60'>
								<Path d='M 5 5 A 50 50 0 0 0 105 5' />
								<Path d='M 5 5 A 50 50 0 0 0 105 5' />
							</svg>
						</ProgressIndicator>
					)}
					{type === 'linear' && (
						<ProgressIndicator css={{ transform: `translateX(-${100 - percentage}%)` }} />
					)}
				</ProgressRoot>
				{showPercentage && !indeterminate && <Percentage>{percentage}%</Percentage>}
			</Box>
		);
	}
);

//============
// STYLES
//============
const spinnerRotate = keyframes({
	'0%': {
		transform: 'rotate(0deg)',
	},
	'100%': {
		transform: 'rotate(270deg)',
	},
});
const spinnerCircle = keyframes({
	'0%': {
		strokeDashoffset: '$$strokeDasharray',
	},
	'50%': {
		strokeDashoffset: '$$indeterminateStroke',
		transform: 'rotate(135deg)',
	},
	'100%': {
		strokeDashoffset: '$$strokeDasharray',
		transform: 'rotate(450deg)',
	},
});

const spinnerArc = keyframes({
	'0%': {
		strokeDashoffset: '-157',
	},
	'50%': {
		strokeDashoffset: '300',
		transform: 'rotate3d(0, 0, -135deg)',
	},
	'100%': {
		strokeDashoffset: '314',
	},
});

const indeterminateBar = keyframes({
	'0%': {
		transform: 'translateX(0) scaleX(0)',
	},
	'65%': {
		transform: 'translateX(0) scaleX(0.4)',
	},
	'100%': {
		transform: 'translateX(100%) scaleX(0.5)',
	},
});

const ProgressIndicator = styled(RadixProgress.Indicator, {
	transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',

	[`.${darkTheme} &`]: {
		backgroundColor: '$gray600',
	},
});

const ProgressRoot = styled(RadixProgress.Root, {
	position: 'relative',
	overflow: 'hidden',
	width: '100%',
	background: '$primary600',
	transform: 'translateZ(0)',

	[`.${darkTheme} &`]: {
		backgroundColor: '$gray100',
	},
});

const Circle = styled('circle', {
	fill: 'none',
	stroke: '$gray100',
	strokeLinecap: 'round',
	strokeWidth: '$$strokeWidth',
	transformOrigin: 'center',
	transition: 'stroke-dashoffset 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

const Path = styled('path', {
	fill: 'none',
	stroke: '$gray100',
	strokeLinecap: 'round',
	strokeWidth: '$$strokeWidth',
	transformOrigin: 'center',
	transform: 'rotate(180deg)',
	transition: 'stroke-dashoffset 660ms cubic-bezier(0.65, 0, 0.35, 1)',
	strokeDasharray: '314',
	strokeDashoffset: '628',
});

const Percentage = styled('p', {
	margin: 0,
});

const Box = styled('div', {
	position: 'relative',

	variants: {
		type: {
			circle: {
				[`& ${ProgressRoot}`]: {
					borderRadius: '$round',
				},

				'& svg': {
					position: 'relative',
					zIndex: 1000,
					width: '100%',
					height: '100%',
				},

				[`& ${Circle}:nth-child(2)`]: {
					stroke: '$primary600',
					transform: 'rotate(-180deg)',
					strokeDasharray: '$$strokeDasharray',
					strokeWidth: '$$strokeWidth',
					strokeDashoffset: '$$strokeDashoffset',
				},

				[`& ${Percentage}`]: {
					position: 'absolute',
					right: '50%',
					top: '50%',
					transform: 'translate(50%, -50%)',
					fontSize: '$h6',
				},

				[`& ${ProgressIndicator}`]: {
					backgroundColor: '$background',
					width: '100%',
					height: '100%',
				},
			},
			'half-circle': {
				[`& ${ProgressRoot}`]: {
					backgroundColor: '$background',
				},
				'& svg': {
					position: 'relative',
					zIndex: 1000,
					width: '100%',
					height: '100%',
				},
				[`& ${Percentage}`]: {
					position: 'absolute',
					right: '50%',
					top: '95%',
					transform: 'translate(50%, -100%)',
					fontSize: '$h6',
				},
				[`& ${ProgressIndicator}`]: {
					backgroundColor: '$background',
					width: '100%',
					height: '100%',
				},
				[`& ${Path}:nth-child(2)`]: {
					stroke: '$primary600',
					strokeDashoffset: 'calc(471 + 157 * ($$percentage / 100))',
				},
			},
			linear: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-end',
				gap: '$4',

				[`& ${ProgressRoot}`]: {
					borderRadius: '$pill',
					backgroundColor: '$gray100',
				},

				[`& ${ProgressIndicator}`]: {
					borderRadius: '$pill',
					backgroundColor: '$primary600',
					width: '100%',
					height: '100%',
					transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
				},
				[`& ${Percentage}`]: {
					marginTop: 2,
				},
			},
		},
		indeterminate: {
			true: {},
		},
	},

	compoundVariants: [
		{
			type: 'circle',
			indeterminate: true,
			css: {
				'& svg': {
					animation: `${spinnerRotate} 2s linear infinite`,
				},
				[`& ${Circle}:nth-child(2)`]: {
					strokeDasharray: '$$strokeDasharray',
					strokeDashoffset: 0,
					transform: 'rotate(0deg)',
					animation: `${spinnerCircle} 2s ease-in-out infinite`,
				},
			},
		},
		{
			type: 'linear',
			indeterminate: true,
			css: {
				[`& ${ProgressIndicator}`]: {
					animation: `${indeterminateBar} 2s infinite linear`,
					transformOrigin: '0% 50%',
				},
			},
		},
		{
			type: 'half-circle',
			indeterminate: true,
			css: {
				[`& ${Path}:nth-child(2)`]: {
					animation: `${spinnerArc} 2s ease-in-out infinite`,
				},
			},
		},
	],

	defaultVariants: {
		type: 'linear',
	},
});

export default Progress;
