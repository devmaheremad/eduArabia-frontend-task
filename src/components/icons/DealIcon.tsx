type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const DealIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "24.001"}
			height={height || "21.004"}
			viewBox="0 0 24.001 21.004"
		>
			<path
				id="handshake_1_"
				data-name="handshake (1)"
				d="M23,15h-.667a4.889,4.889,0,0,0-.745.057L14.542,9.773,16.23,8.157a1,1,0,0,0-1.383-1.445l-4.173,4a1,1,0,0,1-1.527-.135,1.074,1.074,0,0,1,.168-1.334l4.7-4.429a3.034,3.034,0,0,1,3.374-.495l2.316,1.158A5.026,5.026,0,0,0,21.943,6H23a1,1,0,1,0,0-2H21.943A3.018,3.018,0,0,1,20.6,3.683L18.287,2.525a5.071,5.071,0,0,0-5.641.828l-.618.582-.7-.638a5.042,5.042,0,0,0-5.617-.773L3.4,3.682A3.026,3.026,0,0,1,2.054,4H1A1,1,0,1,0,1,6H2.056a5.047,5.047,0,0,0,2.236-.527L6.608,4.313a3.11,3.11,0,0,1,3.374.462l.587.535L7.923,7.8a3.08,3.08,0,0,0-.4,3.938A3.253,3.253,0,0,0,9.969,13a2.976,2.976,0,0,0,2.1-.863l1.006-.963,6.346,4.759c-.031.022-6.2,4.646-6.2,4.646a2,2,0,0,1-2.47-.011L4.666,16a5.028,5.028,0,0,0-3-1H1a1,1,0,0,0,0,2h.667a3.018,3.018,0,0,1,1.8.6l6.077,4.558A4,4,0,0,0,12,23a3.961,3.961,0,0,0,2.437-.835L20.534,17.6a3.013,3.013,0,0,1,1.8-.6H23a1,1,0,0,0,0-2Z"
				transform="translate(0.001 -1.999)"
				fill={stroke || "#046c77"}
			/>
		</svg>
	);
};

export default DealIcon;
