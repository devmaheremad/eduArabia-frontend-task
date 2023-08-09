import { AppBar, IconButton, styled } from "@mui/material";

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
	backgroundColor: "#FFFFFF !important",
	paddingTop: "37px",
	paddingBottom: "37px",
	filter: "drop-shadow(0px 3px 56px rgba(0, 0, 0, 0.16))",
	boxShadow: "none",
}));

export const IconButtonMenuStyled = styled(IconButton)(({ theme }) => ({
	width: "40px",
	height: "40px",
	[theme.breakpoints.up("md")]: {
		width: "57px",
		height: "57px",
	},
	padding: "0",
	borderRadius: "50px",
	backgroundColor: theme.palette.secondary.main,
}));
