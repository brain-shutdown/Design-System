import React, { ComponentProps, ElementRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { RxCross2 } from 'react-icons/rx';
import { VariantProps, keyframes, styled, CSS, darkTheme } from '../../stitches.config';

//============
// TYPES
//============
type DialogContentPrimitiveProps = ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentVariants = VariantProps<typeof StyledDialogContent>;
type DialogContentProps = { css?: CSS } & DialogContentPrimitiveProps & DialogContentVariants;

//============
// FUNCTION
//============
export const DialogContent = React.forwardRef<ElementRef<typeof StyledDialogContent>, DialogContentProps>(
	({ children, ...props }, forwardedRef) => (
		<DialogPrimitive.Portal>
			<DialogOverlay />
			<StyledDialogContent {...props} ref={forwardedRef}>
				{children}
				<DialogPrimitive.Close asChild>
					<IconButton aria-label='Close'>
						<RxCross2 />
					</IconButton>
				</DialogPrimitive.Close>
			</StyledDialogContent>
		</DialogPrimitive.Portal>
	)
);

//============
// STYLES
//============
export const Dialog = styled(DialogPrimitive.Root, {});
export const DialogTrigger = styled(DialogPrimitive.Trigger, {});
export const DialogClose = styled(DialogPrimitive.Close, {});

export const DialogTitle = styled(DialogPrimitive.Title, {
	margin: 0,
	fontWeight: 500,
	fontSize: '$lg',
	color: '$title',
	lineHeight: '$h4',
});

export const DialogDescription = styled(DialogPrimitive.Description, {
	marginBottom: '$32',
	fontSize: '$sm',
	lineHeight: 1.5,
});

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay = styled(DialogPrimitive.Overlay, {
	backgroundColor: '$gray100',
	position: 'fixed',
	inset: 0,
	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	zIndex: 10000,

	[`.${darkTheme} &`]: {
		backgroundColor: '$gray600',
	},
});

const StyledDialogContent = styled(DialogPrimitive.Content, {
	backgroundColor: 'white',
	borderRadius: 6,
	boxShadow: '$lg',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90vw',
	maxWidth: '980px',
	maxHeight: '85vh',
	padding: 25,
	animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	'&:focus': { outline: 'none' },
	zIndex: 10001,

	[`.${darkTheme} &`]: {
		backgroundColor: '$gray800',
	},
});

const IconButton = styled('button', {
	all: 'unset',
	fontFamily: 'inherit',
	borderRadius: '100%',
	height: 25,
	width: 25,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: '$gray500',
	position: 'absolute',
	top: 10,
	right: 10,
	cursor: 'pointer',

	'&:hover': { backgroundColor: '$gray50' },
	'&:focus': { boxShadow: '$focus' },
});
