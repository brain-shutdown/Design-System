import { Children, ReactNode, useState } from 'react';
import { styled, darkTheme } from '../../stitches.config';
import { AiOutlineEllipsis } from 'react-icons/ai';

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type BreadCrumbProps = {
	children: ReactNode;
	separator?: ReactNode;
	maxItems?: Range<2, 9>;
};

export const Breadcrumbs = ({ children, separator = '/', maxItems = 8 }: BreadCrumbProps) => {
	const [fullPathOpen, setFullPathOpen] = useState(false);
	let result: JSX.Element[] = [];
	const childrenCount = Children.count(children);

	const showFullPath = () => {
		result = [];
		Children.forEach(children, (child, index) => {
			result.push(<li key={index}>{child}</li>);
			result.push(<li key={index + 'sep'}>{separator}</li>);
		});
		result.pop();
	};

	if (childrenCount >= maxItems && !fullPathOpen) {
		Children.forEach(children, (child, index) => {
			if (index === 0) {
				result.push(<li key={index}>{child}</li>);
				result.push(<li key='first'>{separator}</li>);
			}
			if (index === childrenCount - 1) {
				result.push(
					<li>
						<Ellipsis
							onClick={() => {
								setFullPathOpen(true);
								showFullPath();
							}}>
							<AiOutlineEllipsis />
						</Ellipsis>
					</li>
				);
				result.push(<li key='last'>{separator}</li>);
				result.push(<li key={index}>{child}</li>);
			}
		});
	} else {
		showFullPath();
	}
	return <StyledBreadcrumb>{result.map((element) => element)}</StyledBreadcrumb>;
};

const Ellipsis = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '$1',
	backgroundColor: '$gray50',
	color: 'inherit',
	cursor: 'pointer',

	[`.${darkTheme} &`]: {
		backgroundColor: '$gray700',
		color: '$gray50',
	},
});

const StyledBreadcrumb = styled('ol', {
	color: '$gray500',
	fontSize: '$sm',
	display: 'flex',
	gap: 10,
	listStyle: 'none',

	'&>li:last-child': {
		fontWeight: 'bold',
		color: '$body',
	},

	[`.${darkTheme} &`]: {
		color: '$gray400',
	},
});
