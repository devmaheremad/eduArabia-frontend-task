type IProps = {
	width?: string;
	height?: string;
	stroke?: string;
};

const XLSIcon = ({ width, height, stroke }: IProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "17.785"}
			height={height || "21.341"}
			viewBox="0 0 17.785 21.341"
		>
			<g id="file-XLS" transform="translate(0)">
				<path
					id="Path_205"
					data-name="Path 205"
					d="M58.793,4.793,55.688,1.688A5.737,5.737,0,0,0,51.6,0H46.7a4.008,4.008,0,0,0-4,4V17.339a4.008,4.008,0,0,0,4,4h9.783a4.008,4.008,0,0,0,4-4V8.882A5.793,5.793,0,0,0,58.793,4.793Zm-.629.629a4.917,4.917,0,0,1,1.1,1.688H54.7A1.332,1.332,0,0,1,53.37,5.777V1.217a4.782,4.782,0,0,1,1.688,1.1l3.105,3.1Zm1.43,11.917a3.117,3.117,0,0,1-3.114,3.114H46.7a3.117,3.117,0,0,1-3.114-3.114V4A3.117,3.117,0,0,1,46.7.888h4.9a4.826,4.826,0,0,1,.879.079v4.81A2.224,2.224,0,0,0,54.7,8h4.81a4.7,4.7,0,0,1,.079.879l0,8.461Z"
					transform="translate(-42.7 0)"
					fill={stroke || "#fff"}
				/>
				<g
					id="Group_112"
					data-name="Group 112"
					transform="translate(2.932 11.754)"
				>
					<path
						id="Path_206"
						data-name="Path 206"
						d="M116.847,286.317a.51.51,0,0,1,.088.408.52.52,0,0,1-.225.354.491.491,0,0,1-.4.092.569.569,0,0,1-.358-.229l-.95-1.375-.963,1.375a.541.541,0,0,1-.35.229.487.487,0,0,1-.4-.092.508.508,0,0,1-.154-.158.6.6,0,0,1-.075-.2.5.5,0,0,1,0-.208.61.61,0,0,1,.088-.2l1.18-1.7-1.18-1.713a.491.491,0,0,1-.092-.4.569.569,0,0,1,.229-.358.5.5,0,0,1,.4-.088.521.521,0,0,1,.35.225l.963,1.375.95-1.375a.554.554,0,0,1,.763-.138.559.559,0,0,1,.229.358.487.487,0,0,1-.092.4l-1.18,1.713Z"
						transform="translate(-113.039 -282.036)"
						fill={stroke || "#fff"}
					/>
					<path
						id="Path_207"
						data-name="Path 207"
						d="M223.03,286.143a.514.514,0,0,1,.375.158.525.525,0,0,1,.158.383.544.544,0,0,1-.158.392.514.514,0,0,1-.375.158h-2.476a.528.528,0,0,1-.388-.158.592.592,0,0,1-.167-.392v-4.043a.514.514,0,0,1,.163-.383.543.543,0,0,1,.767,0,.517.517,0,0,1,.167.383v3.505h1.934Z"
						transform="translate(-215.542 -282.096)"
						fill={stroke || "#fff"}
					/>
					<path
						id="Path_208"
						data-name="Path 208"
						d="M313.151,283.092a.421.421,0,0,0-.325.142.533.533,0,0,0-.142.35.456.456,0,0,0,.142.317.443.443,0,0,0,.325.133h.546a1.438,1.438,0,0,1,.575.121,1.649,1.649,0,0,1,.5.333,1.627,1.627,0,0,1,.346.5,1.438,1.438,0,0,1,.129.609,1.523,1.523,0,0,1-.121.6,1.591,1.591,0,0,1-.329.492,1.627,1.627,0,0,1-.492.333,1.542,1.542,0,0,1-.6.133h-1.43a.518.518,0,0,1-.392-.158.544.544,0,0,1-.154-.392.53.53,0,0,1,.158-.379.519.519,0,0,1,.392-.163h1.43a.461.461,0,0,0,.329-.138.44.44,0,0,0,.146-.329.432.432,0,0,0-.142-.333.523.523,0,0,0-.325-.142h-.554a1.651,1.651,0,0,1-1.084-.454,1.631,1.631,0,0,1-.342-.488,1.429,1.429,0,0,1-.129-.613,1.473,1.473,0,0,1,.121-.579,1.617,1.617,0,0,1,.333-.5,1.672,1.672,0,0,1,.5-.35,1.409,1.409,0,0,1,.6-.133h1.43a.5.5,0,0,1,.371.158.592.592,0,0,1,.167.392.527.527,0,0,1-.542.542Z"
						transform="translate(-303.324 -282)"
						fill={stroke || "#fff"}
					/>
				</g>
			</g>
		</svg>
	);
};

export default XLSIcon;
