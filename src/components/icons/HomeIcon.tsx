type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const HomeIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "19"}
			height={height || "21"}
			viewBox="0 0 19 21"
		>
			<g id="home_11_" data-name="home (11)" transform="translate(-2.5 -1.5)">
				<path
					id="Path_1"
					data-name="Path 1"
					d="M3,9l9-7,9,7V20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2Z"
					fill="none"
					stroke={stroke || "#7a7a7a"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
				/>
				<path
					id="Path_2"
					data-name="Path 2"
					d="M9,22V12h6V22"
					fill="none"
					stroke={stroke || "#7a7a7a"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
				/>
			</g>
		</svg>
	);
};

export default HomeIcon;
