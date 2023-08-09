import { Input } from "@mui/material";

const BaseInput = ({
	value,
	setValue,
	type,
	name,
	placeHolder,
	disable,
	style,
}: any) => {
	return (
		<Input
			sx={{ ...style }}
			placeholder={placeHolder}
			className="custom-input"
			value={value[`${name}`]}
			onChange={(e) => setValue({ ...value, [`${name}`]: e.target.value })}
			id="nameEnglish"
			type={type}
			// variant="outlined"
			disabled={disable}
		/>
	);
};

export default BaseInput;
