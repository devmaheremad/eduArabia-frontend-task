import { Button, useTheme } from "@mui/material";
import { MainBtnProps } from "../../../types";
import { useTranslation } from "react-i18next";

const MainBtn = ({
	onClick,
	sx,
	variant,
	color,
	text,
	borderRadius,
	height,
	width,
}: MainBtnProps) => {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Button
			color={color || "primary"}
			variant={variant || "contained"}
			onClick={onClick}
			sx={{
				width: width || "50px",
				height: height || "50px",
				minWidth: "auto",
				padding: "0 !important",
				border:
					variant === "outlined"
						? `3px solid ${theme.palette.secondary.main} !important`
						: "auto",
				borderRadius: borderRadius || "8px !important",
				fontSize: "20px",
				fontWeight: 500,
				...sx,
			}}
		>
			{t(`${text}`)}
		</Button>
	);
};

export default MainBtn;
