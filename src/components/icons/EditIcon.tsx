type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const EditIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "20"}
			height={height || "19.121"}
			viewBox="0 0 20 19.121"
		>
			<g id="edit-3_2_" data-name="edit-3 (2)" transform="translate(-2 -1.879)">
				<path
					id="Path_194"
					data-name="Path 194"
					d="M12,20h9"
					fill="none"
					stroke={stroke || "#d1d626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
				<path
					id="Path_195"
					data-name="Path 195"
					d="M16.5,3.5a2.121,2.121,0,1,1,3,3L7,19,3,20l1-4Z"
					fill="none"
					stroke={stroke || "#d1d626"}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</g>
		</svg>
	);
};

export default EditIcon;
