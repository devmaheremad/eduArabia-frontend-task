type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const PagnationLeftIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "6.484"}
			height={height || "10.968"}
			viewBox="0 0 6.484 10.968"
		>
			<path
				id="Path_200"
				data-name="Path 200"
				d="M9.07,13.14,5,9.07,9.07,5"
				transform="translate(-4 -3.586)"
				fill="none"
				stroke={stroke || "#046c77"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default PagnationLeftIcon;
