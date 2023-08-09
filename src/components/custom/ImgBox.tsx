import { Stack } from "@mui/material";
import { ImgBoxProps } from "../../../types";

const ImgBox = ({ src, maxWidth, alt, maxHeight }: ImgBoxProps) => {
	return (
		<Stack
			sx={{
				maxWidth: `${maxWidth}px`,
				maxHeight: `${maxHeight}px`,
			}}
		>
			<img style={{ width: "100%", height: "100%" }} src={src} alt={alt} />
		</Stack>
	);
};

export default ImgBox;
