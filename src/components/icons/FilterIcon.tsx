type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const FilterIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "22"}
			height={height || "20"}
			viewBox="0 0 22 20"
		>
			<path
				id="filter_5_"
				data-name="filter (5)"
				d="M22,3H2l8,9.46V19l4,2V12.46Z"
				transform="translate(-1 -2)"
				fill="none"
				stroke={stroke || "#24b3b9"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default FilterIcon;
