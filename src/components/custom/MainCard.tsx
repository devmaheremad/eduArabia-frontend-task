import { Stack } from "@mui/material";
import { MainCardProps } from "../../../types";

const MainCard = ({ children, sx }: MainCardProps) => {
	return (
		<Stack
			spacing={"45px"}
			bgcolor={"#fff"}
			borderRadius={"6px"}
			py={{ xs: "30px", md: "67px" }}
			px={{ xs: "22px", md: "54px" }}
			sx={{ ...sx, filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16))" }}
		>
			{children}
		</Stack>
	);
};

export default MainCard;
