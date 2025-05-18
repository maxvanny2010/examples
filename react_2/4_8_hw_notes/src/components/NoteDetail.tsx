import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ReactMarkdown from 'react-markdown';

import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';

import type { Note } from '../db/NotesDB';
import { useNotes } from '../contexts/NotesContext';
import { DeleteConfirmDialog } from './DeleteConfirmDialog';
import { CodeBlockMarkdown } from './CodeBlockMarkdown';
import { TITLES } from '../constants';

interface NoteDetailProps {
	note: Note | null;
	onNoteDeleted: () => void;
	onNoteCreated: (note: Note) => void;
	isCreating: boolean;
	onStartCreating: () => void;
}

export function NoteDetail({
							   note,
							   onNoteDeleted,
							   onNoteCreated,
							   isCreating,
							   onStartCreating,
						   }: NoteDetailProps) {
	const { updateNote, deleteNote, addNote } = useNotes();
	const [isEditing, setIsEditing] = useState(false);
	const [text, setText] = useState('');
	const [title, setTitle] = useState('');
	const [openConfirm, setOpenConfirm] = useState(false);
	const [isNew, setIsNew] = useState(false);

	useEffect(() => {
		if (note) {
			setText(note.content || '');
			setTitle(note.title || '');
			setIsEditing(false);
			setIsNew(false);
		}
	}, [note]);
	useEffect(() => {
		if (isCreating) {
			handleCreate();
			onStartCreating();
		}
	}, [isCreating]);

	useEffect(() => {
		if (!note || !isEditing || note.id === undefined || isNew) return;
		const id = note.id;
		const interval = setInterval(() => {
			updateNote(id, { title: title, content: text }).then(r => r);
		}, 1000);
		return () => clearInterval(interval);
	}, [note, text, title, isEditing, isNew]);

	const handleDelete = () => {
		if (note?.id === undefined) return;
		deleteNote(note.id).then(() => {
			setText('');
			setTitle('');
			setIsNew(true);
			onNoteDeleted();
		});
		setOpenConfirm(false);
	};

	const handleCreate = () => {
		onNoteDeleted();
		setText('');
		setTitle('');
		setIsEditing(true);
		setIsNew(true);
	};

	const handleSaveNewNote = async () => {
		if (text.trim() === '' || title.trim() === '') return;
		const newNote = await addNote({ title, content: text });
		setIsEditing(false);
		setIsNew(false);
		onNoteCreated(newNote);
	};

	return (
		<Box>
			<Box
				display="flex"
				flexDirection={{ xs: 'column', sm: 'row' }}
				justifyContent="space-between"
				alignItems={{ xs: 'flex-start', sm: 'center' }}
				gap={2}
				mb={2}
			>
				<Typography variant="h5">
					{title || (note ? note.title : isNew ? TITLES.CREATE_NOTE : TITLES.CHOOSE_NOTE)}
				</Typography>


				<Box display="flex"
					 gap={1}
					 flexWrap="wrap">
					{!isNew && note && (
						<Tooltip title={isEditing ? TITLES.PREVIEW : TITLES.EDIT}>
							<IconButton onClick={() => setIsEditing(!isEditing)}>
								{isEditing ? <PreviewIcon /> : <EditIcon />}
							</IconButton>
						</Tooltip>
					)}
					{note && (
						<Tooltip title={TITLES.REMOVE}>
							<IconButton
								color="error"
								onClick={() => setOpenConfirm(true)}
							>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					)}
				</Box>
			</Box>

			{isEditing ? (
				<Box>
					<TextField
						placeholder={TITLES.TITLE_PLACEHOLDER}
						fullWidth
						size="small"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						sx={{ mb: 2 }}
					/>
					<TextField
						placeholder={TITLES.NOTE_PLACEHOLDER}
						multiline
						fullWidth
						minRows={10}
						value={text}
						onChange={(e) => setText(e.target.value)}
						sx={{
							fontFamily: 'monospace',
							mb: 2,
							fontSize: { xs: '0.9rem', sm: '1rem' },
						}}
					/>
					{isNew && (
						<>
							<Button variant="contained"
									onClick={handleSaveNewNote}>
								{TITLES.SAVE}
							</Button>
							<Button
								variant="outlined"
								onClick={() => {
									setIsEditing(false);
									setIsNew(false);
									onNoteDeleted();
								}}
								sx={{ ml: 1 }}
							>
								{TITLES.CANCEL}
							</Button>
						</>
					)}
				</Box>
			) : (
				<Box sx={{ whiteSpace: 'pre-wrap', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
					<ReactMarkdown components={{ code: CodeBlockMarkdown }}>
						{text}
					</ReactMarkdown>
				</Box>
			)}

			<DeleteConfirmDialog
				open={openConfirm}
				onClose={() => setOpenConfirm(false)}
				onConfirm={handleDelete}
			/>
		</Box>
	);
}
