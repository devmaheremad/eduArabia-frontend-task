import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUp({
	children,
	open,
	setOpen,
	width,
	maxWidth,
}: any) {

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<></>
			<Dialog
				sx={{
					"& .MuiPaper-root": {
						borderRadius: "26px",
						width: { xs: "98%", sm: "100%" },
						maxWidth: maxWidth || "645px !important",
						margin: { xs: "10px", sm: "32px" },
					},
				}}
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				fullWidth
				maxWidth={width || "sm"}
			>
				{children}
			</Dialog>
		</div>
	);
}
