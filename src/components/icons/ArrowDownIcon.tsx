type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const ArrowDownIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "8.883"}
			height={height || "5.441"}
			viewBox="0 0 8.883 5.441"
		>
			<g
				id="arrow-down_6_"
				data-name="arrow-down (6)"
				transform="translate(-3.586 -10.586)"
			>
				<path
					id="Path_3"
					data-name="Path 3"
					d="M11.054,12,8.027,15.027,5,12"
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

export default ArrowDownIcon;
