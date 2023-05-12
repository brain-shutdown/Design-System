import { RxArrowLeft, RxArrowRight } from 'react-icons/rx';
import { darkTheme, styled } from '../../stitches.config';
import { usePagination, DOTS } from '../hooks/usePagination';
import { useState } from 'react';

type PaginationProps = {
	pageCount: number;
	siblingCount: number;
	page?: number;
	defaultPage?: number;
	onPageChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
};

export const Pagination = ({
	onPageChange = undefined,
	pageCount,
	siblingCount = 1,
	page,
	defaultPage = 1,
}: PaginationProps) => {
	const [currentPage, setCurrentPage] = useState(page || defaultPage);

	// If the component is uncontrolled, update the current page
	if (page !== currentPage && page !== undefined) {
		setCurrentPage(page);
	}

	const paginationRange = usePagination({ currentPage, pageCount, siblingCount });

	if (currentPage === 0 || (paginationRange && paginationRange.length < 2) || !paginationRange) {
		return null;
	}

	const onNext = (event: React.ChangeEvent<unknown>) => {
		if (onPageChange === undefined) {
			setCurrentPage((prevPage) => prevPage + 1);
			console.log(currentPage);

			return;
		}
		onPageChange(event, currentPage + 1);
	};

	const onPrevious = (event: React.ChangeEvent<unknown>) => {
		if (onPageChange === undefined) {
			setCurrentPage((prevPage) => prevPage - 1);
			return;
		}
		onPageChange(event, currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<PaginationBar>
			<ArrowButton disabled={currentPage === 1} onClick={onPrevious}>
				<RxArrowLeft />
			</ArrowButton>
			{paginationRange?.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return <Ellipsis key={index}>&#8230;</Ellipsis>;
				}
				return (
					<PaginationItem
						selected={pageNumber === currentPage}
						onClick={(event) => {
							if (onPageChange === undefined) {
								setCurrentPage(pageNumber as number);
								return;
							}
							onPageChange(event, pageNumber as number);
						}}
						key={index}>
						{pageNumber}
					</PaginationItem>
				);
			})}
			<ArrowButton disabled={currentPage === lastPage} onClick={onNext}>
				<RxArrowRight />
			</ArrowButton>
		</PaginationBar>
	);
};

const PaginationBar = styled('ul', {
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	listStyleType: 'none',
});

const PaginationItem = styled('li', {
	width: '32px',
	height: '32px',
	margin: 'auto 4px',
	color: '$gray600',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '$round',
	lineHeight: '1.5',
	fontSize: '$xs',

	'&:hover': {
		backgroundColor: '$gray25',
		cursor: 'pointer',
	},

	[`.${darkTheme} &`]: {
		color: '$gray400',
		'&:hover': {
			backgroundColor: '$gray700',
			color: '$gray100',
		},
	},

	variants: {
		selected: {
			true: {
				backgroundColor: '$primary50',
				color: '$primary600',
				'&:hover': {
					backgroundColor: '$primary50',
					color: '$primary600',
					cursor: 'default',
				},
				[`.${darkTheme} &`]: {
					color: '$primary25',
					backgroundColor: '$primary700',
					'&:hover': {
						color: '$primary25',
						backgroundColor: '$primary700',
					},
				},
			},
		},
		disabled: {
			true: {
				pointerEvents: 'none',
				'&:hover': {
					backgroundColor: 'transparent',
					cursor: 'default',
				},
			},
		},
	},
});

const Ellipsis = styled('li', {
	width: '32px',
	height: '32px',
	margin: 'auto 4px',
	color: '$gray600',
	display: 'flex',
	alignItems: 'end',
	justifyContent: 'center',
	paddingBottom: 8,
	fontSize: '$xs',
	'&:hover': {
		backgroundColor: 'transparent',
		cursor: 'default',
	},
});

const ArrowButton = styled('button', {
	backgroundColor: '$background',
	margin: 'auto 4px',
	color: '$gray600',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',
	transition: 'color 0.3s ease-out',

	'& svg': {
		width: '14px',
		height: '14px',
	},

	'&:hover': {
		'& svg': {
			color: '$gray900',
			[`.${darkTheme} &`]: {
				color: '$gray100',
			},
		},
	},

	[`.${darkTheme} &`]: {
		color: '$gray400',
	},
	variants: {
		disabled: {
			true: {
				pointerEvents: 'none',
				color: '$gray300',
			},
		},
	},
});
