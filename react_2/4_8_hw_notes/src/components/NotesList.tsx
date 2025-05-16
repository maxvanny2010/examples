import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import type { Note } from '../db/NotesDB';

interface NotesListProps {
	notes: Note[];
	selectedNoteId: number | string | null;
	onSelectNote: (note: Note) => void;
}

export function NotesList({ notes, selectedNoteId, onSelectNote }: NotesListProps) {
	return (
		<List>
			{notes.map((note) => (
				<ListItem key={note.id} disablePadding>
					<ListItemButton
						selected={selectedNoteId === note.id}
						onClick={() => onSelectNote(note)}
						sx={{ borderRadius: 1 }}
					>
						<ListItemText
							primary={note.title}
							secondary={new Date(note.createdAt).toLocaleString()}
						/>
					</ListItemButton>
				</ListItem>
			))}
			{notes.length === 0 && (
				<Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
					Nothing found...
				</Typography>
			)}
		</List>
	);
}
