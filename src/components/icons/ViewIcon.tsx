type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const ViewIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "24"}
			height={height || "18"}
			viewBox="0 0 24 18"
		>
			<g id="eye_13_" data-name="eye (13)" transform="translate(0 -3)">
				<path
					id="Path_196"
					data-name="Path 196"
					d="M1,12S5,4,12,4s11,8,11,8-4,8-11,8S1,12,1,12Z"
					fill="none"
					stroke={stroke || "#24b3b9"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<circle
					id="Ellipse_22"
					data-name="Ellipse 22"
					cx="3"
					cy="3"
					r="3"
					transform="translate(9 9)"
					fill="none"
					stroke={stroke || "#24b3b9"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default ViewIcon;
