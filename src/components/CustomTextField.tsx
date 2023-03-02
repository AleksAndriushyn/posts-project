import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

const CustomTextField = ({
	label,
	onChange,
	helperText,
	error,
}: {
	label: string;
	onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
	helperText: string;
	error: boolean;
}) => {
	return (
		<TextField
			error={error}
			label={label}
			onChange={onChange}
			helperText={helperText}
		/>
	);
};

export default CustomTextField;
