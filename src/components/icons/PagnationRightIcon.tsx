type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const PagnationRightIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "6.484"}
			height={height || "10.968"}
			viewBox="0 0 6.484 10.968"
		>
			<g
				id="arrow-left_5_"
				data-name="arrow-left (5)"
				transform="translate(10.484 14.554) rotate(180)"
			>
				<path
					id="Path_200"
					data-name="Path 200"
					d="M9.07,13.14,5,9.07,9.07,5"
					fill="none"
					stroke={stroke || "#046c77"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default PagnationRightIcon;
