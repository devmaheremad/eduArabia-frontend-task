import { Link } from "react-router-dom";
import { LinkImgBoxProps } from "../../../types";

const LinkImgBox = ({
	src,
	maxWidth,
	alt,
	href,
	maxHeight,
}: LinkImgBoxProps) => {
	return (
		<Link
			style={{
				maxWidth: `${maxWidth}px`,
				maxHeight: `${maxHeight}px`,
				display: "block",
			}}
			to={href}
		>
			<img style={{ width: "100%", height: "100%" }} src={src} alt={alt} />
		</Link>
	);
};

export default LinkImgBox;
