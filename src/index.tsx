import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import "./i18n";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Exhibitions, Questionnaires, Custom } from "./pages";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./Redux";

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Exhibitions /> },
			{ path: "/questionnaires", element: <Questionnaires /> },
			{ path: "/custom", element: <Custom /> },
		],
		// errorElement: <NotFound />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<React.StrictMode>
				<CssBaseline />
				<RouterProvider router={router} />
			</React.StrictMode>
		</ThemeProvider>
	</Provider>
);
