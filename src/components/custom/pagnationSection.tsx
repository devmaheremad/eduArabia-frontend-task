import { useMemo } from "react";
import { useSelector } from "react-redux";
import { PagnationLeftIcon, PagnationRightIcon } from "../icons";
interface TablePaginationProps {
	rowsPerPageOptions: number[];
	count: number;
	rowsPerPage: number;
	page: number;
	onPageChange: (newPage: number) => void;
	onRowsPerPageChange: (newPage: number) => void;
}

const PaginationSection = ({
	count,
	rowsPerPage,
	page,
	onPageChange,
	onRowsPerPageChange,
}: TablePaginationProps) => {
	// on click of previous button
	const handlePrevious = () => {
		if (page > 1 && page <= count) {
			onPageChange(page - 1);
		}
		return;
	};

	const handleNextPage = () => {
		if (page < count / rowsPerPage) {
			onPageChange(page + 1);
		}
	};

	const handleExactNumber = (number: any) => {
		onPageChange(number);
	};

	const paginationNumbers = useMemo(() => {
		let start = Math.max(page - 2, 1);
		const maxPage = Math.ceil(count / rowsPerPage);
		let end = Math.min(start + 4, maxPage);

		if (maxPage > 5 && end === maxPage) {
			start = Math.max(end - 4, 1);
		}

		const result: any = [];

		if (start > 1) {
			result.push(1);
			if (start > 2) {
				result.push("...");
			}
		}

		for (let i = start; i <= end; i++) {
			result.push(i);
		}

		if (end < maxPage) {
			if (end < maxPage - 1) {
				result.push("...");
			}
			result.push(maxPage);
		}

		return result;
	}, [page, count, rowsPerPage]);

	const lang = useSelector((e: any) => e.lang);
	return (
		<div className="d-flex customPagnation flex-stack flex-wrap pt-10 gap-5">
			<ul style={{ display: "flex", gap: "5px" }} className="pagination">
				<p className="page-item previous">
					<button className="page-link" onClick={handlePrevious}>
						<i className="previous"></i>
						{lang === "rtl" ? <PagnationRightIcon /> : <PagnationLeftIcon />}
					</button>
				</p>

				{paginationNumbers.map((number: any) => {
					return (
						<p
							className={`page-item ${
								(page && number === page) || (!page && number === 1)
									? "active"
									: ""
							}`}
							key={number}
							onClick={() => handleExactNumber(number)}
						>
							<button style={{ padding: "5px" }} className="page-link">
								{number}
							</button>
						</p>
					);
				})}

				<p className="page-item next">
					<button className="page-link" onClick={handleNextPage}>
						<i className="next"></i>
						{lang === "rtl" ? <PagnationLeftIcon /> : <PagnationRightIcon />}
					</button>
				</p>
			</ul>
		</div>
	);
};
export default PaginationSection;
