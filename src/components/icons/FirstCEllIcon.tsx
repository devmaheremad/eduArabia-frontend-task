type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const FirstCEllIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "22"}
			height={height || "23.999"}
			viewBox="0 0 22 23.999"
		>
			<path
				id="police-box_1_"
				data-name="police-box (1)"
				d="M7,10V9A1,1,0,0,1,9,9v1a1,1,0,0,1-2,0Zm3,3H8a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13Zm2-5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8ZM23,23a1,1,0,0,1-1,1H2a1,1,0,0,1,0-2H3V7.09A4.507,4.507,0,0,1,6.941,2.625L11,2.118V1a1,1,0,1,1,2,0V2.118l4.059.507A4.507,4.507,0,0,1,21,7.09V22h1A1,1,0,0,1,23,23ZM19,7.09A2.486,2.486,0,0,0,18.749,6H5.251A2.486,2.486,0,0,0,5,7.09V22H19ZM16,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V9A1,1,0,0,0,16,8Z"
				transform="translate(-1 -0.001)"
				fill={stroke || "#12c689"}
			/>
		</svg>
	);
};

export default FirstCEllIcon;
