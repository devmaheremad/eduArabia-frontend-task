import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components/layouts";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

function App() {
	const lang = useSelector((state: any) => state.lang);

	return (
		<Stack dir={lang}>
			<Navbar />
			<Outlet />
			<Footer />
		</Stack>
	);
}

export default App;
