import { Button, useTheme } from "@mui/material";
import { HeadBtnsTableProps } from "../../../types";

const HeadBtnsTable = ({
	svgIcon,
	onClick,
	sx,
	variant,
	color
}: HeadBtnsTableProps) => {
	const theme = useTheme();

	return (
		<Button
			color={color || "primary"}
			variant={variant || "contained"}
			onClick={onClick}
			sx={{
				width: "50px",
				height: "50px",
				minWidth: "auto",
				padding: "0 !important",
				border:
					variant === "outlined"
						? `3px solid ${theme.palette.secondary.main} !important`
						: "auto",
				borderRadius: "8px !important",
				...sx,
			}}
		>
			{svgIcon}
		</Button>
	);
};

export default HeadBtnsTable;
