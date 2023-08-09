import { Breadcrumbs, Typography } from "@mui/material";
import { HomeIcon } from "../icons";
import { Link } from "react-router-dom";
import { BreadcrumbsParentProps } from "../../../types";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	event.preventDefault();
}

const BreadcrumbsParent = ({ title, sx }: BreadcrumbsParentProps) => {
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs
				aria-label="breadcrumb"
				sx={{
					...sx,
					"& .MuiBreadcrumbs-separator": {
						mx: "15px",
					},
				}}
			>
				<Link to="/">
					<HomeIcon />
				</Link>
				<Typography color="secondary">{title}</Typography>
			</Breadcrumbs>
		</div>
	);
};

export default BreadcrumbsParent;
