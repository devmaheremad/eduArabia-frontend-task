import {
	Chip,
	Stack,
	TableCell,
	TableRow,
	Typography,
	alpha,
	useTheme,
} from "@mui/material";
import React from "react";
import { CellBtnsTable, DeleteMsg, PopUp } from "../../custom";
import {
	DealIcon,
	DeleteIcon,
	EditIcon,
	FirstCEllIcon,
	ViewIcon,
} from "../../icons";

const Row = ({
	row,
	isItemSelected,
	labelId,
	i,
	setRows,
	setIsReBuild,
	rows,
}: any) => {
	const theme = useTheme();

	const [open, setOpen] = React.useState(false);
	const handelDelete = () => {
		setIsReBuild(true);
		const newRows = rows.filter((r: any) => r.id !== row.id);
		setRows(newRows);
		setOpen(false);
		setTimeout(() => {
			setIsReBuild(false);
		}, 11);
	};
	return (
		<>
			<TableRow
				hover
				// onClick={(event) => handleClick(event, row.name)}
				role="checkbox"
				aria-checked={isItemSelected}
				tabIndex={-1}
				key={row.name}
				selected={isItemSelected}
				sx={{ cursor: "pointer" }}
			>
				<TableCell sx={{ textAlign: "center" }}>
					<Typography fontSize={14} color={theme.palette.mutedText7.main}>
						{i + 1}
					</Typography>
				</TableCell>
				<TableCell
					component="th"
					id={labelId}
					scope="row"
					sx={{ textAlign: "start" }}
				>
					<Typography
						fontSize={14}
						fontWeight={700}
						color={theme.palette.mutedText7.main}
					>
						{row.questionnairesTitle}
					</Typography>
				</TableCell>
				<TableCell sx={{ textAlign: "center" }}>
					<Stack
						direction={"row"}
						flexWrap={"wrap"}
						gap={"12px"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Chip
							label={row.forwardTo}
							sx={{
								bgcolor: alpha(theme.palette.secondary.main, 0.4),
								"& .MuiChip-label": {
									color: theme.palette.primary.main,
								},
							}}
						/>
					</Stack>
				</TableCell>
				<TableCell sx={{ textAlign: "center" }}>
					<Typography fontSize={14} color={theme.palette.mutedText7.main}>
						{row.numberOfParticipants}
					</Typography>
				</TableCell>
				<TableCell sx={{ textAlign: "center" }}>
					<Typography fontSize={14} color={theme.palette.mutedText7.main}>
						{row.numberOfQuestions}
					</Typography>
				</TableCell>
				<TableCell sx={{ textAlign: "center" }}>
					<Typography fontSize={14} color={theme.palette.mutedText7.main}>
						{row.startDate}
					</Typography>
				</TableCell>
				<TableCell sx={{ textAlign: "center" }}>
					<Typography fontSize={14} color={theme.palette.mutedText7.main}>
						{row.endDate}
					</Typography>
				</TableCell>
				<TableCell sx={{ textAlign: "center" }}>
					<Stack direction={"row"} flexWrap={"wrap"} gap={"12px"}>
						<CellBtnsTable svgIcon={<FirstCEllIcon />} />
						<CellBtnsTable svgIcon={<DealIcon />} />
						<CellBtnsTable svgIcon={<ViewIcon />} />
						<CellBtnsTable svgIcon={<EditIcon />} />
						<CellBtnsTable
							svgIcon={<DeleteIcon />}
							onClick={() => setOpen(true)}
						/>
					</Stack>
				</TableCell>
			</TableRow>
			<PopUp setOpen={setOpen} open={open} maxWidth={"645px"}>
				<DeleteMsg
					handelDelete={handelDelete}
					itemToDelete={"معرض خاص بعالم الأعشاب"}
					setOpen={setOpen}
				/>
			</PopUp>
		</>
	);
};

export default Row;
