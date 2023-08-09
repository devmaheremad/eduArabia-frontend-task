import { IconButton } from "@mui/material";
// import { CellBtnsTableProps } from "../../../types";

const CellBtnsTable = ({
	width,
	height,
	svgIcon,
	onClick,
	ariaLabel,
	sx,
}: any) => {
	return (
		<IconButton disableRipple
			aria-label={ariaLabel}
			onClick={onClick}
			sx={{
				width: width || "25px",
				height: height || "25px",
				minWidth: "auto",
				padding: "0 !important",
				...sx,
			}}
		>
			{svgIcon}
		</IconButton>
	);
};

export default CellBtnsTable;
