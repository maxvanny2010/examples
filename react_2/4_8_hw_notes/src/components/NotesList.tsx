import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { Note } from '../db/NotesDB';

interface NotesListProps {
	notes: Note[];
	selectedNoteId: number | string | null;
	onSelectNote: (note: Note) => void;
}

export function NotesList({ notes, selectedNoteId, onSelectNote }: NotesListProps) {
	return (
		<Box
			sx={{
				width: '100%',
				maxHeight: '100%',
				overflowY: 'auto',
			}}
		>
			<List sx={{ p: 0 }}>
				{notes.map((note) => (
					<ListItem
						key={note.id}
						disablePadding
						sx={{ px: { xs: 1, sm: 2 } }}
					>
						<ListItemButton
							selected={selectedNoteId === note.id}
							onClick={() => onSelectNote(note)}
							sx={{
								borderRadius: 1,
								py: 1,
								px: 2,
								'&.Mui-selected': {
									bgcolor: 'primary.main',
									color: 'white',
									'&:hover': {
										bgcolor: 'primary.dark',
									},
								},
							}}
						>
							<ListItemText
								primary={note.title}
								secondary={new Date(note.createdAt).toLocaleString()}
								sx={{
									'.MuiTypography-root': {
										whiteSpace: 'nowrap',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
									},
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>

			{notes.length === 0 && (
				<Box sx={{ mt: 2, textAlign: 'center' }}>
					<Typography variant="body2"
								color="text.secondary">
						Nothing found...
					</Typography>
				</Box>
			)}
		</Box>
	);
}
