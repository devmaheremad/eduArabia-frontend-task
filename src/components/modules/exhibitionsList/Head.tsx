import {
	Box,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { visuallyHidden } from "@mui/utils";
import { SortIcon } from "../../icons";

interface EnhancedTableProps {
	numSelected?: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
	onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: any;
	orderBy: string;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { t } = useTranslation();

	const theme = useTheme();

	const headCells: any = [
		{
			id: "name",
			numeric: true,
			disablePadding: true,
			label: t("exhibitionsName"),
			width: "260px",
		},
		{
			id: "calories",
			numeric: true,
			disablePadding: false,
			label: t("rating"),
			width: "150px",
		},
		{
			id: "fat",
			numeric: true,
			disablePadding: false,
			label: t("numberOfSubscribers"),
			width: "180px",
		},
		{
			id: "carbs",
			numeric: true,
			disablePadding: false,
			label: t("numberOfBases"),
			width: "140px",
		},
		{
			id: "protein",
			numeric: true,
			disablePadding: false,
			label: t("startDate"),
			width: "140px",
		},
		{
			id: "protein2",
			numeric: true,
			disablePadding: false,
			label: t("endDate"),
			width: "160px",
		},
		{
			id: "protein222",
			numeric: false,
			disablePadding: false,
			label: t("actions"),
			width: "210px",
		},
		{
			id: "protein11",
			numeric: false,
			disablePadding: false,
			label: t("status"),
			width: "100px",
		},
	];
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler =
		(property: any) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<TableHead
			sx={{
				background: theme.palette.primary.main,
				height: "75px",
				borderRadius: "6px",
			}}
		>
			<TableRow>
				<TableCell
					padding="checkbox"
					sx={{
						color: "white",
						textAlign: "center",
						minWidth: "80px",
						maxWidth: "80px",
						fontWeight: 700,
						fontSize: 16,
					}}
				>
					#
				</TableCell>
				{headCells.map((headCell: any, index: number) => (
					<TableCell
						key={headCell.id}
						sx={{
							fontWeight: 700,
							fontSize: 16,
							"& .MuiButtonBase-root": {
								textAlign: "center",
								cursor: headCell.numeric
									? "pointer !important"
									: "default !important",
								color: "white !important",
								justifyContent: index !== 0 ? "center" : "flex-start",
								"&:hover": {
									color: "white",
								},
							},
							minWidth: headCell.width ? headCell.width : "auto",
							maxWidth: headCell.width ? headCell.width : "auto",
						}}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "16px",
								"& .MuiSvgIcon-root": {
									display: "none",
								},
								"& svg": {
									flexShrink: 0,
								},
							}}
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.numeric && <SortIcon />}
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}
export default EnhancedTableHead;
