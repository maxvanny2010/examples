import { useMemo, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { debounce } from 'lodash';
import type { Note } from '../db/NotesDB';
import { useNotes } from '../contexts/NotesContext';
import { NoteDetail, NotesList, NotesSearch, UserInfoBar } from '../components';

export default function NotesLayout() {
	const { notes } = useNotes();
	const [search, setSearch] = useState('');
	const [selectedNote, setSelectedNote] = useState<Note | null>(null);

	const debouncedSetSearch = useMemo(
		() => debounce((value: string) => setSearch(value), 300),
		[],
	);

	useEffect(() => {
		return () => {
			debouncedSetSearch.cancel();
		};
	}, [debouncedSetSearch]);

	const filteredNotes = useMemo(() => {
		const query = search.toLowerCase();
		return notes.filter(
			(note) =>
				note.title.toLowerCase().includes(query) ||
				note.content.toLowerCase().includes(query),
		);
	}, [notes, search]);

	return (
		<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ px: 2, py: 1, borderBottom: '1px solid #ccc' }}>
				<UserInfoBar />
			</Box>

			<Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
				<Grid container sx={{ height: '100%' }}>
					<Grid
						item
						xs={12}
						md={4}
						sx={{
							borderRight: { xs: 'none', md: '1px solid #ccc' },
							borderBottom: { xs: '1px solid #ccc', md: 'none' },
							p: 2,
							height: { xs: '40vh', md: '100%' },
							overflowY: 'auto',
						}}
					>
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
					<Grid
						item
						xs={12}
						md={8}
						sx={{
							p: 2,
							height: { xs: '60vh', md: '100%' },
							overflowY: 'auto',
						}}
					>
						<NoteDetail
							note={selectedNote}
							onNoteDeleted={() => setSelectedNote(null)}
							onNoteCreated={(note) => setSelectedNote(note)}
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
