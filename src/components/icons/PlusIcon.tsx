type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const PlusIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "16"}
			height={height || "16"}
			viewBox="0 0 16 16"
		>
			<g id="Group_125" data-name="Group 125" transform="translate(-5 -17)">
				<line
					id="Line_31"
					data-name="Line 31"
					y2="14"
					transform="translate(13 18)"
					fill="none"
					stroke={stroke || "#fff"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<line
					id="Line_32"
					data-name="Line 32"
					x2="14"
					transform="translate(6 25)"
					fill="none"
					stroke={stroke || "#fff"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default PlusIcon;
