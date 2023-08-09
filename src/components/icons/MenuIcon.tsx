type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const MenuIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "20"}
			height={height || "14"}
			viewBox="0 0 20 14"
		>
			<g id="menu_7_" data-name="menu (7)" transform="translate(-2 -5)">
				<g id="Group_125" data-name="Group 125">
					<line
						id="Line_26"
						data-name="Line 26"
						x2="18"
						transform="translate(3 12)"
						fill="none"
						stroke={stroke || "#fff"}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
					<line
						id="Line_27"
						data-name="Line 27"
						x2="18"
						transform="translate(3 6)"
						fill="none"
						stroke={stroke || "#fff"}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
					<line
						id="Line_28"
						data-name="Line 28"
						x2="18"
						transform="translate(3 18)"
						fill="none"
						stroke={stroke || "#fff"}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</g>
			</g>
		</svg>
	);
};

export default MenuIcon;
