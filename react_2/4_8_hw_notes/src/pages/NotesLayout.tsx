import { useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { debounce } from 'lodash';
import type { Note } from '../db/NotesDB';
import { useNotes } from '../contexts/NotesContext';
import { NoteDetail, NotesList, NotesSearch } from '../components';

export default function NotesLayout() {
	const { notes } = useNotes();
	const [search, setSearch] = useState('');
	const [selectedNote, setSelectedNote] = useState<Note | null>(null);

	const debouncedSetSearch = useMemo(
		() => debounce((value: string) => setSearch(value), 300),
		[]);

	const filteredNotes = useMemo(() => {
		const query = search.toLowerCase();
		return notes.filter(
			(note) =>
				note.title.toLowerCase().includes(query) ||
				note.content.toLowerCase().includes(query),
		);
	}, [notes, search]);

	return (
		<Grid container
			  sx={{ height: '100vh' }}>
			<Grid item
				  xs={4}
				  sx={{ borderRight: '1px solid #ccc', p: 2 }}>
				<NotesSearch
					search={search}
					onSearchChange={(value) => debouncedSetSearch(value)}
				/>
				<NotesList
					notes={filteredNotes}
					selectedNoteId={selectedNote?.id ?? null}
					onSelectNote={setSelectedNote}
				/>
			</Grid>
			<Grid item
				  xs={8}
				  sx={{ p: 2 }}>
				<NoteDetail
					note={selectedNote}
					onNoteDeleted={() => setSelectedNote(null)}
					onNoteCreated={(note) => setSelectedNote(note)}
				/>
			</Grid>
		</Grid>
	);
}
