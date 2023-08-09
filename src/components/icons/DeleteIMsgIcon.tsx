type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const DeleteIMsgIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "114"}
			height={height || "114"}
			viewBox="0 0 124 124"
		>
			<g
				id="alert-octagon_2_"
				data-name="alert-octagon (2)"
				transform="translate(3 3)"
			>
				<path
					id="Path_204"
					data-name="Path 204"
					d="M35.4,2H82.6L116,35.4V82.6L82.6,116H35.4L2,82.6V35.4Z"
					transform="translate(0 0)"
					fill="none"
					stroke={stroke || "#e62626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="10"
				/>
				<line
					id="Line_55"
					data-name="Line 55"
					y2="23"
					transform="translate(59 36)"
					fill="none"
					stroke={stroke || "#e62626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="10"
				/>
				<line
					id="Line_56"
					data-name="Line 56"
					transform="translate(59 82)"
					fill="none"
					stroke={stroke || "#e62626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="10"
				/>
			</g>
		</svg>
	);
};

export default DeleteIMsgIcon;
