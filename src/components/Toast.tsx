import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { ComponentProps, ReactNode } from 'react';
import { VariantProps, CSS, keyframes, styled, darkTheme } from '../../stitches.config';
import { RxCross2 } from 'react-icons/rx';
import { BsFillInfoCircleFill, BsFillExclamationTriangleFill } from 'react-icons/bs';

//============
// TYPES
//============
type ToastProviderPrimitiveProps = Omit<ComponentProps<typeof ToastPrimitive.Provider>, 'swipeDirection'>;
type ToastViewportPrimitiveProps = Omit<ComponentProps<typeof ToastPrimitive.Viewport>, 'label'>;
type ToastViewportVariantProps = VariantProps<typeof ToastViewport>;
type ToastProviderProps = {
	css?: CSS;
	children?: ReactNode;
	actionButton?: ReactNode;
	altText?: string;
	position?: 'bottom-right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-center' | 'top-center';
} & ToastProviderPrimitiveProps &
	ToastViewportPrimitiveProps &
	ToastViewportVariantProps;

type SingleToastPrimitiveProps = Omit<ComponentProps<typeof ToastPrimitive.Root>, 'duration'>;
type SingleToastProps = {
	css?: CSS;
	toast: Toast;
	altText?: string;
	sortToasts: () => void;
	toastElements: Map<string | undefined, any>;
	children?: ReactNode;
} & SingleToastPrimitiveProps;

type Toast = {
	title?: string;
	description: string;
	status: 'information' | 'success' | 'error' | 'warning';
};
export type ToastRef = {
	success: (payload: Omit<Toast, 'status'>) => void;
	error: (payload: Omit<Toast, 'status'>) => void;
	info: (payload: Omit<Toast, 'status'>) => void;
	warn: (payload: Omit<Toast, 'status'>) => void;
};

//============
// FUNCTION
//============
const ANIMATION_OUT_DURATION = 350;
const swipeDirection = new Map([
	['top-left', 'left'],
	['bottom-left', 'left'],
	['top-right', 'right'],
	['bottom-right', 'right'],
	['top-center', 'up'],
	['bottom-center', 'down'],
]);

const ToastContext = React.createContext<ToastRef | null>(null);

export const ToastProvider = (props: ToastProviderProps) => {
	const { actionButton, position = 'bottom-right', children, altText, ...providerProps } = props;
	const [toasts, setToasts] = React.useState(new Map());
	const toastElementsMapRef = React.useRef(new Map());
	const viewportRef = React.useRef<HTMLOListElement>(null);

	const sortToasts = React.useCallback(() => {
		const toastElements = Array.from(toastElementsMapRef.current).reverse();
		const heights: number[] = [];

		toastElements.forEach(([, toast], index) => {
			if (!toast) return;
			const height = toast.clientHeight;
			heights.push(height);
			const frontToastHeight = heights[0];
			toast.setAttribute('data-front', index === 0);
			toast.setAttribute('data-hidden', index > 2);
			toast.style.setProperty('---index', index);
			toast.style.setProperty('---height', `${height}px`);
			toast.style.setProperty('---front-height', `${frontToastHeight}px`);
			const hoverOffsetY = heights.slice(0, index).reduce((res, next) => (res += next), 0);
			toast.style.setProperty('---hover-offset-y', `-${hoverOffsetY}px`);
		});
	}, []);

	const handleAddToast = React.useCallback((toast: Toast) => {
		setToasts((currentToasts) => {
			const newMap = new Map(currentToasts);
			newMap.set(String(Date.now()), { ...toast, open: true });
			return newMap;
		});
	}, []);

	const handleRemoveToast = React.useCallback((key: string) => {
		setToasts((currentToasts) => {
			const newMap = new Map(currentToasts);
			newMap.delete(key);
			return newMap;
		});
	}, []);

	const success = React.useCallback(
		(payload: Omit<Toast, 'status'>) => handleAddToast({ status: 'success', ...payload }),
		[handleAddToast]
	);
	const error = React.useCallback(
		(payload: Omit<Toast, 'status'>) => handleAddToast({ status: 'error', ...payload }),
		[handleAddToast]
	);
	const warn = React.useCallback(
		(payload: Omit<Toast, 'status'>) => handleAddToast({ status: 'warning', ...payload }),
		[handleAddToast]
	);
	const info = React.useCallback(
		(payload: Omit<Toast, 'status'>) => handleAddToast({ status: 'information', ...payload }),
		[handleAddToast]
	);

	React.useEffect(() => {
		const viewport = viewportRef.current;

		if (viewport) {
			const handleFocus = () => {
				toastElementsMapRef.current.forEach((toast) => {
					toast.setAttribute('data-hovering', 'true');
				});
			};
			const handleBlur = (event: PointerEvent | FocusEvent) => {
				if (!viewport.contains(event.target as Node) || viewport === event.target) {
					toastElementsMapRef.current.forEach((toast) => {
						toast.setAttribute('data-hovering', 'false');
					});
				}
			};

			viewport.addEventListener('pointermove', handleFocus);
			viewport.addEventListener('pointerleave', handleBlur);
			viewport.addEventListener('focusin', handleFocus);
			viewport.addEventListener('focusout', handleBlur);
			return () => {
				viewport.removeEventListener('pointermove', handleFocus);
				viewport.removeEventListener('pointerleave', handleBlur);
				viewport.removeEventListener('focusin', handleFocus);
				viewport.removeEventListener('focusout', handleBlur);
			};
		}
	}, []);

	return (
		<ToastContext.Provider
			value={{
				success,
				error,
				warn,
				info,
			}}>
			<ToastPrimitive.Provider
				swipeDirection={swipeDirection.get(position) as ToastPrimitive.SwipeDirection}
				{...providerProps}>
				{children}
				{Array.from(toasts).map(([key, toast]) => (
					<Toast
						key={key}
						id={key}
						toast={toast}
						onOpenChange={(open) => {
							if (!open) {
								toastElementsMapRef.current.delete(key);
								sortToasts();
								if (!open) {
									setTimeout(() => {
										handleRemoveToast(key);
									}, ANIMATION_OUT_DURATION);
								}
							}
						}}
						sortToasts={sortToasts}
						toastElements={toastElementsMapRef.current}>
						{actionButton}
					</Toast>
				))}
				<ToastViewport ref={viewportRef} position={position} />
			</ToastPrimitive.Provider>
		</ToastContext.Provider>
	);
};

const Toast = (props: SingleToastProps) => {
	const { toast, id, sortToasts, toastElements, children, altText = 'Undo', ...toastProps } = props;
	const ref = React.useRef<HTMLLIElement>(null);

	React.useLayoutEffect(() => {
		if (ref.current) {
			toastElements.set(id, ref.current);
			sortToasts();
		}
	}, [id, sortToasts, toastElements]);

	return (
		<ToastRoot {...toastProps} ref={ref}>
			<ToastInner data-status={toast.status}>
				<ToastStatusIcon status={toast.status} />
				<Flex>
					{toast.title && <ToastTitle>{toast.title}</ToastTitle>}
					<ToastDescription>{toast.description}</ToastDescription>
					{children && (
						<ToastAction asChild={React.isValidElement(children)} altText={altText}>
							{children}
						</ToastAction>
					)}
				</Flex>
				<ToastClose aria-label='close'>
					<RxCross2 />
				</ToastClose>
			</ToastInner>
		</ToastRoot>
	);
};

const ToastStatusIcon = ({ status }: Pick<Toast, 'status'>) => {
	return (
		<ToastIcon>
			{status === 'success' && <CheckMark />}
			{status === 'error' && <ErrorMark />}
			{status === 'warning' && <WarnMark />}
			{status === 'information' && <InfoMark />}
		</ToastIcon>
	);
};

export const useToast = () => {
	const context = React.useContext(ToastContext);
	if (context) return context;
	throw new Error('useToast must be used within Toasts');
};

//============
// STYLES
//============
const hide = keyframes({
	'0%': { opacity: 1 },
	'100%': { opacity: 0 },
});

const circleAnimation = keyframes({
	from: {
		transform: 'scale(0) rotate(45deg)',
		opacity: 0,
	},
	to: {
		transform: 'scale(1) rotate(45deg)',
		opacity: 1,
	},
});

const checkmarkAnimation = keyframes({
	'0%': {
		height: 0,
		width: 0,
		opacity: 0,
	},
	'40%': {
		height: 0,
		width: 6,
		opacity: 1,
	},
	'100%': {
		opacity: 1,
		height: 10,
	},
});

const firstLineAnimation = keyframes({
	from: {
		transform: 'scale(0)',
		opacity: 0,
	},
	to: {
		transform: 'scale(1)',
		opacity: 1,
	},
});

const secondLineAnimation = keyframes({
	from: {
		transform: 'scale(0) rotate(90deg)',
		opacity: 0,
	},
	to: {
		transform: 'scale(1) rotate(90deg)',
		opacity: 1,
	},
});

const slideRight = keyframes({
	from: {
		transform: 'translate3d(var(--radix-toast-swipe-end-x), $$y, 0)',
	},
	to: {
		transform: 'translate3d(100%, $$y, 0)',
	},
});

const slideLeft = keyframes({
	from: {
		transform: 'translate3d(var(--radix-toast-swipe-end-x), $$y, 0)',
	},
	to: {
		transform: 'translate3d(-100%, $$y, 0)',
	},
});
const slideUp = keyframes({
	from: {
		transform: 'translate3d($$x, var(--radix-toast-swipe-end-y), 0)',
	},
	to: {
		transform: 'translate3d($$x, -100%, 0)',
	},
});
const slideDown = keyframes({
	from: {
		transform: 'translate3d($$x, var(--radix-toast-swipe-end-y), 0)',
	},
	to: {
		transform: 'translate3d($$x, 100%, 0)',
	},
});

const ToastInner = styled('div', {
	backgroundColor: 'white',
	borderRadius: '$2',
	boxShadow: '$md, $innerBorder',
	padding: '$16',
	display: 'flex',
	flex: '1 auto 0',
	columnGap: 15,
	alignItems: 'center',
	width: '100%',
	height: '$$height',
	position: 'relative',

	[`.${darkTheme} &`]: {
		backgroundColor: '$card',
	},

	'&:not([data-front="true"])': {
		height: '$$front-height',
	},
});

const ToastRoot = styled(ToastPrimitive.Root, {
	$$opacity: 0,
	$$x: 'var(--radix-toast-swipe-move-x, 0)',
	$$scale: 'calc(1 - 0.05 * $$index)',

	position: 'absolute',
	right: 15,
	left: 15,
	minHeight: '70px',
	transitionProperty: 'transform, opacity',
	transitionDuration: '400ms',
	transitionTimingFunction: 'ease-in-out',
	opacity: '$$opacity',
	transform: 'translate3d($$x, 85px, 0)',
	outline: 'none',
	borderRadius: 5,

	'&:focus-visible': {
		boxShadow: '$outerBorder',
	},

	'&:after': {
		content: '',
		position: 'absolute',
		left: 0,
		right: 0,
		width: '100%',
		height: 1000,
		background: 'transparent',
	},

	'&[data-front="true"]': {
		transform: 'translate3d($$x, var(---y, 0), 0)',
	},
	'&[data-front="false"]': {
		transform: 'translate3d($$x, var(---y, 0), 0) scale($$scale)',
	},

	'&[data-hovering="true"]': {
		$$scale: 1,
		transitionDuration: '350ms',
		[`& ${ToastInner}`]: {
			height: '$$height',
		},
	},

	'&[data-state="closed"]': {
		animation: `${hide} 300ms ease-in`,
	},
	'&[data-hidden="false"]': {
		$$opacity: 1,
	},
	'&[data-hidden="true"]': {
		$$opacity: 0,
	},

	'&[data-swipe="move"]': {
		transitionDuration: '0ms',
	},
	'&[data-swipe="cancel"]': {
		$$x: 0,
	},

	'&[data-swipe-direction="right"][data-swipe="end"]': {
		animation: `${slideRight} 150ms ease-out`,
	},
	'&[data-swipe-direction="left"][data-swipe="end"]': {
		animation: `${slideLeft} 150ms ease-out`,
	},
	'&[data-swipe-direction="up"][data-swipe="end"]': {
		animation: `${slideUp} 150ms ease-out`,
	},
	'&[data-swipe-direction="up"][data-swipe="move"]': {
		transform: 'translateY(calc($$y + var(--radix-toast-swipe-move-y, 0)))',
	},
	'&[data-swipe-direction="down"][data-swipe="end"]': {
		animation: `${slideDown} 150ms ease-out`,
	},
	'&[data-swipe-direction="down"][data-swipe="move"]': {
		transform: 'translateY(calc($$y + var(--radix-toast-swipe-move-y, 0)))',
	},
});

const ToastViewport = styled(ToastPrimitive.Viewport, {
	$$stackGap: '15px',
	position: 'fixed',
	width: 390,
	margin: 0,
	listStyle: 'none',
	maxWidth: '100vw',
	zIndex: 2147483647,
	outline: 'none',
	transition: 'transform 400ms ease-in-out',

	variants: {
		position: {
			'top-left': {
				top: 0,
				left: 0,
				[`& ${ToastRoot}`]: {
					$$y: 'calc(1px + ($$stackGap * $$index))',
					top: 15,

					'&:after': {
						bottom: '100%',
					},
					'&[data-hovering="true"]': {
						$$y: 'calc($$stackGap * $$index - $$hover-offset-y)',
					},
				},
			},
			'top-right': {
				top: 0,
				right: 0,
				[`& ${ToastRoot}`]: {
					$$y: 'calc(1px + ($$stackGap * $$index))',
					top: 15,

					'&:after': {
						bottom: '100%',
					},

					'&[data-hovering="true"]': {
						$$y: 'calc($$stackGap * $$index - $$hover-offset-y)',
					},
				},
			},
			'top-center': {
				top: 0,
				right: '50%',
				transform: 'translate(50%, 0)',
				[`& ${ToastRoot}`]: {
					$$y: 'calc(1px + ($$stackGap * $$index))',
					top: 15,

					'&:after': {
						bottom: '100%',
					},

					'&[data-hovering="true"]': {
						$$y: 'calc($$stackGap * $$index - $$hover-offset-y)',
					},
				},
			},
			'bottom-left': {
				bottom: 0,
				left: 0,
				[`& ${ToastRoot}`]: {
					$$y: 'calc(1px - ($$stackGap * $$index))',
					bottom: 15,

					'&:after': {
						top: '100%',
					},
					'&[data-hovering="true"]': {
						$$y: 'calc($$hover-offset-y - $$stackGap * $$index)',
					},
				},
			},
			'bottom-right': {
				bottom: 0,
				right: 0,
				[`& ${ToastRoot}`]: {
					$$y: 'calc(1px - ($$stackGap * $$index))',
					bottom: 15,

					'&:after': {
						top: '100%',
					},

					'&[data-hovering="true"]': {
						$$y: 'calc($$hover-offset-y - $$stackGap * $$index)',
					},
				},
			},
			'bottom-center': {
				bottom: 0,
				right: '50%',
				transform: 'translate(50%, 0)',
				[`& ${ToastRoot}`]: {
					$$y: 'calc(1px - ($$stackGap * $$index))',
					bottom: 15,

					'&:after': {
						top: '100%',
					},

					'&[data-hovering="true"]': {
						$$y: 'calc($$hover-offset-y - $$stackGap * $$index)',
					},
				},
			},
		},
	},

	defaultVariants: {
		position: 'bottom-right',
	},
});

const ToastClose = styled(ToastPrimitive.Close, {
	padding: 0,
	alignSelf: 'flex-start',
	justifySelf: 'center',
	cursor: 'pointer',
	backgroundColor: 'white',
	color: '$gray500',
	transition: 'color 200ms ease 0s, opacity 200ms ease 0s',

	'&:hover': {
		color: '$gray800',
	},

	[`.${darkTheme} &`]: {
		backgroundColor: 'inherit',
		color: '$gray200',
		'&:hover': {
			color: '$gray400',
		},
	},
});

const ToastIcon = styled('div', {
	alignSelf: 'center',
});

const ToastTitle = styled(ToastPrimitive.Title, {
	marginBottom: 5,
	fontWeight: 500,
	color: '$title',
	fontSize: '$sm',
});

const ToastDescription = styled(ToastPrimitive.Description, {
	margin: 0,
	fontSize: '$xs',
	lineHeight: 1.3,
});

const ToastAction = styled(ToastPrimitive.Action, {
	alignSelf: 'flex-start',
	marginTop: 2,
});

const CheckMark = styled('div', {
	opacity: 0,
	width: 20,
	height: 20,
	borderRadius: 10,
	backgroundColor: '$success600',
	position: 'relative',
	transform: 'rotate(45deg)',
	animation: `${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
	animationDelay: '100ms',

	'&::after': {
		content: '',
		boxSizing: 'border-box',
		animation: `${checkmarkAnimation} 0.2s ease-out forwards`,
		opacity: 0,
		animationDelay: '200ms',
		position: 'absolute',
		borderRight: '2px solid',
		borderBottom: '2px solid',
		borderColor: 'white',
		bottom: 6,
		left: 6,
		height: 10,
		width: 6,
	},
});

const ErrorMark = styled('div', {
	opacity: 0,
	width: 20,
	height: 20,
	borderRadius: 10,
	backgroundColor: '$error500',
	position: 'relative',
	transform: 'rotate(45deg)',
	animation: `${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`,
	animationDelay: '100ms',

	'&::after, &::before': {
		content: '',
		animation: `${firstLineAnimation} 0.15s ease-out forwards`,
		animationDelay: '150ms',
		position: 'absolute',
		borderRadius: 3,
		opacity: 0,
		backgroundColor: 'white',
		bottom: 9,
		left: 4,
		height: 2,
		width: 12,
	},

	'&::before': {
		animation: `${secondLineAnimation} 0.15s ease-out forwards`,
		animationDelay: '180ms',
		transform: 'rotate(90deg)',
	},
});

const InfoMark = styled(BsFillInfoCircleFill, {
	width: 20,
	height: 20,
	color: '$purple50',
});

const WarnMark = styled(BsFillExclamationTriangleFill, {
	width: 20,
	height: 20,
	color: '$warning500',
	position: 'relative',
});

const Flex = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
	alignSelf: 'flex-start',
});

export default Toast;
