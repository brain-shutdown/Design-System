import React, { ComponentProps, ElementRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { RxCross2 } from 'react-icons/rx';
import { VariantProps, keyframes, styled, CSS, darkTheme } from '../../stitches.config';

//============
// TYPES
//============
type AlertDialogContentPrimitiveProps = ComponentProps<typeof AlertDialogPrimitive.Content>;
type AlertDialogContentVariants = VariantProps<typeof StyledAlertDialogContent>;
type AlertDialogContentProps = { css?: CSS } & AlertDialogContentPrimitiveProps & AlertDialogContentVariants;

//============
// FUNCTION
//============
export const AlertDialogContent = React.forwardRef<
	ElementRef<typeof StyledAlertDialogContent>,
	AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
	<AlertDialogPrimitive.Portal>
		<DialogOverlay />
		<StyledAlertDialogContent {...props} ref={forwardedRef}>
			{children}
		</StyledAlertDialogContent>
	</AlertDialogPrimitive.Portal>
));

//============
// STYLES
//============
export const AlertDialog = styled(AlertDialogPrimitive.Root, {});
export const AlertDialogTrigger = styled(AlertDialogPrimitive.Trigger, {});
export const AlertDialogCancel = styled(AlertDialogPrimitive.Cancel, {});
export const AlertDialogAction = styled(AlertDialogPrimitive.Action, {});

export const AlertDialogTitle = styled(AlertDialogPrimitive.Title, {
	margin: 0,
	fontWeight: 500,
	fontSize: '$lg',
	color: '$title',
	lineHeight: '$h4',
});

export const AlertDialogDescription = styled(AlertDialogPrimitive.Description, {
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

const DialogOverlay = styled(AlertDialogPrimitive.Overlay, {
	backgroundColor: '$gray100',
	position: 'fixed',
	inset: 0,
	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
	zIndex: 10000,

	[`.${darkTheme} &`]: {
		backgroundColor: '$gray600',
	},
});

const StyledAlertDialogContent = styled(AlertDialogPrimitive.Content, {
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
