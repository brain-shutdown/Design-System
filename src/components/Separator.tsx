import * as RadixSeparator from '@radix-ui/react-separator';
import { styled } from '../../stitches.config';

const Separator = styled(RadixSeparator.Root, {
	backgroundColor: '$separator',
	'&[data-orientation=horizontal]': {
		height: 1,
		width: '100%',
	},
	'&[data-orientation=vertical]': {
		height: '100%',
		width: 1,
	},
});

export default Separator;
