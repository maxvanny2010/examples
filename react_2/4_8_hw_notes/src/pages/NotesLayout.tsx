import { lazy, Suspense, useDeferredValue, useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import type { Note } from '../db/NotesDB';
import { useNotes } from '../contexts/NotesContext';

import UserInfoBar from '../components/UserInfoBar.tsx';

const NotesSearch = lazy(() => import('../components/NotesSearch.tsx'));
const NotesList = lazy(() => import('../components/NotesList.tsx'));
const NoteDetail = lazy(() => import('../components/NoteDetail.tsx'));
export default function NotesLayout() {
	const { notes } = useNotes();
	const [rawSearch, setRawSearch] = useState('');
	const search = useDeferredValue(rawSearch);

	const [isCreating, setIsCreating] = useState(false);
	const [selectedNote, setSelectedNote] = useState<Note | null>(null);

	const filteredNotes = useMemo(() => {
		const query = search.toLowerCase();
		return notes.filter(
			(note) =>
				note.title.toLowerCase().includes(query) ||
				note.content.toLowerCase().includes(query),
		);
	}, [notes, search]);

	const handleCreateNote = () => {
		setSelectedNote(null);
		setIsCreating(true);
	};

	const handleSearchChange = (value: string) => {
		setRawSearch(value);
	};

	return (
		<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ px: 2, py: 1, borderBottom: '1px solid #ccc' }}>
				<UserInfoBar onCreateNote={handleCreateNote} />
			</Box>

			<Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
				<Grid container
					  sx={{ height: '100%' }}>
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
						<Suspense fallback={<Skeleton height={32}
													  width="100%" />}>
							<NotesSearch
								search={rawSearch}
								onSearchChange={handleSearchChange}
							/>
						</Suspense>
						<Suspense fallback={null}>
							<NotesList
								notes={filteredNotes}
								selectedNoteId={selectedNote?.id ?? null}
								onSelectNote={(note) => {
									setSelectedNote(note);
									setIsCreating(false);
								}}
							/>
						</Suspense>
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
						<Suspense fallback={<Skeleton variant="rectangular"
													  height="100%" />}>
							<NoteDetail
								note={selectedNote}
								onNoteDeleted={() => setSelectedNote(null)}
								onNoteCreated={(note) => {
									setSelectedNote(note);
									setIsCreating(false);
								}}
								isCreating={isCreating}
								onStartCreating={() => setIsCreating(false)}
							/>
						</Suspense>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
