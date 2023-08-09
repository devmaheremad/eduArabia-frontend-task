type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const NotificationsIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "20"}
			height={height || "22"}
			viewBox="0 0 20 21.996"
		>
			<g id="Group_125" data-name="Group 125" transform="translate(-390 -64)">
				<path
					id="Path_5"
					data-name="Path 5"
					d="M18,8A6,6,0,0,0,6,8c0,7-3,9-3,9H21s-3-2-3-9"
					transform="translate(388 63)"
					fill="none"
					stroke={stroke || "#333"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<path
					id="Path_6"
					data-name="Path 6"
					d="M13.73,21a2,2,0,0,1-3.46,0"
					transform="translate(388 63)"
					fill="none"
					stroke={stroke || "#333"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default NotificationsIcon;
