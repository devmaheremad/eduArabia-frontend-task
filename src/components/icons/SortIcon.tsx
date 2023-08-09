type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const SortIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "7.739"}
			height={height || "13.333"}
			viewBox="0 0 7.739 13.333"
		>
			<g
				id="Group_110"
				data-name="Group 110"
				transform="translate(-1317.13 -767.833)"
			>
				<g
					id="arrow-down_6_"
					data-name="arrow-down (6)"
					transform="translate(1318.544 777.711)"
				>
					<path
						id="Path_3"
						data-name="Path 3"
						d="M9.911,12,7.455,14.456,5,12"
						transform="translate(-5 -12)"
						fill="none"
						stroke={stroke || "#24b3b9"}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</g>
				<g
					id="arrow-down_6_2"
					data-name="arrow-down (6)"
					transform="translate(1323.455 771.289) rotate(180)"
				>
					<path
						id="Path_3-2"
						data-name="Path 3"
						d="M4.911,0,2.455,2.456,0,0"
						transform="translate(0 0)"
						fill="none"
						stroke="#24b3b9"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</g>
			</g>
		</svg>
	);
};

export default SortIcon;
