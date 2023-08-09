import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EnhancedTableHead from "./Head";
import Row from "./Row";
import { PaginationSection } from "../../custom";
import { ExhibitionsListDataTable } from "../../../utils/data";

interface Data {
	calories: number;
	carbs: number;
	fat: number;
	name: string;
	protein: number;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => number {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
	array: readonly T[],
	comparator: (a: T, b: T) => number
) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable() {
	const [order, setOrder] = React.useState<Order>("asc");
	const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [rows, setRows] = useState(ExhibitionsListDataTable);
	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: any
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const [isReBuild, setIsReBuild] = useState(false);
	const visibleRows = React.useMemo(
		() =>
			stableSort(rows, getComparator(order, orderBy)).slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[order, orderBy, page, rowsPerPage, isReBuild]
	);
	const handleChangePage = (newPage: number) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (newPrePage: number) => {
		setRowsPerPage(newPrePage);
		setPage(1);
	};
	return (
		<Box sx={{ width: "100%" }}>
			<Paper
				sx={{
					width: "100%",
					mb: "40px",
					boxShadow: "none !important",
					borderRadius: "6px",
				}}
			>
				<TableContainer>
					<Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						{!isReBuild && (
							<TableBody
								sx={{
									"& .MuiTableCell-root": {
										borderLeft: "1px solid #ebebeb",
										borderRight: "1px solid #ebebeb",
									},
								}}
							>
								{visibleRows.map((row, index) => {
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<Row
											key={index}
											setRows={setRows}
											rows={rows}
											i={index}
											row={row}
											labelId={labelId}
											setIsReBuild={setIsReBuild}
										/>
									);
								})}
								{emptyRows > 0 && (
									<TableRow>
										<TableCell colSpan={9} />
									</TableRow>
								)}
							</TableBody>
						)}
					</Table>
				</TableContainer>
				<PaginationSection
					rowsPerPageOptions={[5, 20, 30, 40, 50, 60]}
					count={rows.length / 2}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
}
