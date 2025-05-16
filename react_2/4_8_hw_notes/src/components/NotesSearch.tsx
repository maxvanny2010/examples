import { TextField } from '@mui/material';

interface NotesSearchProps {
	search: string;
	onSearchChange: (value: string) => void;
}

export function NotesSearch({ search, onSearchChange }: NotesSearchProps) {
	return (
		<TextField
			fullWidth
			placeholder="Search..."
			variant="outlined"
			value={search}
			onChange={(e) => onSearchChange(e.target.value)}
			sx={{ mb: 2 }}
		/>
	);
}
