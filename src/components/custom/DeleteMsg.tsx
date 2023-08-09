import { Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DeleteIMsgIcon } from "../icons";
import MainBtn from "./MainBtn";

export default function DeleteMsg({
	handelDelete,
	itemToDelete,
	setOpen,
}: any) {
	const { t } = useTranslation();
	const theme = useTheme();
	return (
		<Stack py={"55px"} px={"15px"} alignItems={"center"} borderRadius={"26px !important"}>
			<DeleteIMsgIcon />
			<Typography
				mt={"20px"}
				fontSize={36}
				fontWeight={500}
				sx={{ color: theme.palette.mutedText5.main }}
			>
				{t("deleteTitle")}
			</Typography>
			<Typography fontSize={36} fontWeight={500} color={"error"}>
				{itemToDelete}
			</Typography>
			<Typography fontSize={27} sx={{ color: theme.palette.mutedText5.main }}>
				{t("subTitleDelete")}
			</Typography>
			<Stack
				direction={"row"}
				gap={"12px"}
				mt={"25px"}
				width={"100%"}
				maxWidth={"400px"}
			>
				<MainBtn
					text="noCancel"
					onClick={() => setOpen(false)}
					sx={{
						height: "75px",
						flexGrow: 1,
						backgroundColor: theme.palette.noBtnBg.main,
						color: theme.palette.mutedText5.main,
						"&:hover": {
							backgroundColor: theme.palette.noBtnBg.main,
						},
					}}
				/>
				<MainBtn
					color="error"
					text="yesDelete"
					onClick={handelDelete}
					sx={{
						height: "75px",
						flexGrow: 1,
					}}
				/>
			</Stack>
		</Stack>
	);
}
