import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

export default function Selected({
	label,
	data,
	selectedData,
	setSelectedData,
	displayEmpty,
	sx,
}: any) {
	const handleChange = (event: any) => {
		setSelectedData(event.target.value);
	};
	return (
		<Box sx={{ minWidth: 120, ...sx }}>
			<FormControl fullWidth>
				{displayEmpty ? (
					<Select
						displayEmpty
						className="custom-select"
						id="demo-simple-select"
						value={selectedData}
						onChange={handleChange}
					>
						{data.map((e: any, i: any) => (
							<option key={i} value={e._id}>
								{e.name}
							</option>
						))}
					</Select>
				) : (
					<>
						<label className="col-form-label" htmlFor="nameEnglish">
							{label}
						</label>
						<Select
							className="custom-select"
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={selectedData}
							onChange={handleChange}
						>
							{data.map((e: any, i: any) => (
								<option key={i} value={e._id}>
									{e.name}
								</option>
							))}
						</Select>
					</>
				)}
			</FormControl>
		</Box>
	);
}
