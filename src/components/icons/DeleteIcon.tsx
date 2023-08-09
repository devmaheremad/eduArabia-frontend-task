type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const DeleteIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "22"}
			height={height || "22"}
			viewBox="0 0 22 22"
		>
			<g id="x-circle_2_" data-name="x-circle (2)" transform="translate(-1 -1)">
				<circle
					id="Ellipse_23"
					data-name="Ellipse 23"
					cx="10"
					cy="10"
					r="10"
					transform="translate(2 2)"
					fill="none"
					stroke={stroke || "#e62626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<line
					id="Line_35"
					data-name="Line 35"
					x1="6"
					y2="6"
					transform="translate(9 9)"
					fill="none"
					stroke={stroke || "#e62626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<line
					id="Line_36"
					data-name="Line 36"
					x2="6"
					y2="6"
					transform="translate(9 9)"
					fill="none"
					stroke={stroke || "#e62626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default DeleteIcon;
