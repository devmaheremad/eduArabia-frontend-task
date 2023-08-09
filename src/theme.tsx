import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		mutedText: Palette["primary"];
		mutedText5: Palette["primary"];
		footerBg: Palette["primary"];
		rightsBg: Palette["primary"];
		noBtnBg: Palette["primary"];
		mutedText7: Palette["primary"];
	}

	// allow configuration using `createTheme`
	interface PaletteOptions {
		mutedText?: PaletteOptions["primary"];
		mutedText5?: PaletteOptions["primary"];
		footerBg?: PaletteOptions["primary"];
		rightsBg?: PaletteOptions["primary"];
		noBtnBg?: PaletteOptions["primary"];
		mutedText7?: PaletteOptions["primary"];
	}
}

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: "#046C77",
		},
		secondary: {
			main: "#1DB2BB",
		},
		error: {
			main: "#E62626",
		},
		success: {
			main: "#138D5F",
		},
		mutedText: {
			main: "#7A7A7A",
		},
		mutedText5: {
			main: "#555555",
		},
		mutedText7: {
			main: "#777777",
		},
		footerBg: {
			main: "#2E3E5F",
		},
		rightsBg: {
			main: "#243351",
		},
		noBtnBg: {
			main: "#CFCFCF",
		},
	},
});

export default theme;
