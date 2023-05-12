import { useMemo } from 'react';

type HookProps = {
	pageCount: number;
	siblingCount: number;
	currentPage: number;
};

export const DOTS = '...';

const range = (start: number, end: number) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ pageCount, siblingCount = 1, currentPage }: HookProps) => {
	const paginationRange = useMemo(() => {
		// Pages count is determined as 2*siblingCount + firstPage + lastPage + currentPage + 2*DOTS
		const totalPageNumbers = 2 * siblingCount + 5;

		// If the number of pages is less than the page numbers we want to show in our paginationComponent, we return the range [1..pageCount]
		if (totalPageNumbers >= pageCount) {
			return range(1, pageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, pageCount);

		// We do not want to show dots if there is only one position left after/before the left/right page count as that would lead to a change if our Pagination component size which we do not want
		const showLeftDots = leftSiblingIndex > 2;
		const showRightDots = rightSiblingIndex < pageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = pageCount;

		if (!showLeftDots && showRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);
			return [...leftRange, DOTS, pageCount];
		}

		if (showLeftDots && !showRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(pageCount - rightItemCount + 1, pageCount);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		if (showLeftDots && showRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [pageCount, siblingCount, currentPage]);

	return paginationRange;
};
