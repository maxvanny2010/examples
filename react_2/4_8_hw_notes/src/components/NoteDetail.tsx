import { useEffect, useState } from 'react';
import { Box, Button, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import type { Note } from '../db/NotesDB';
import { useNotes } from '../contexts/NotesContext';
import {DeleteConfirmDialog} from './DeleteConfirmDialog';
import { CodeBlockMarkdown } from './CodeBlockMarkdown';

interface NoteDetailProps {
	note: Note | null;
	onNoteDeleted: () => void;
	onNoteCreated: (note: Note) => void;
}

export function NoteDetail({ note, onNoteDeleted, onNoteCreated }: NoteDetailProps) {
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
		if (!note || !isEditing || note.id === undefined || isNew) return;
		const id = note.id;
		const interval = setInterval(() => {
			updateNote(id, { title: title, content: text }).then(() => {
			});
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
				justifyContent="space-between"
				alignItems="center"
				mb={2}
			>
				<Typography variant="h5">
					{isNew ? 'Create note' : note ? note.title : 'Choose note'}
				</Typography>
				<Box>
					{!isNew && note && (
						<Tooltip title={isEditing ? 'Preview' : 'Edit'}>
							<IconButton onClick={() => setIsEditing(!isEditing)}>
								{isEditing ? <PreviewIcon /> : <EditIcon />}
							</IconButton>
						</Tooltip>
					)}
					{note && (
						<Tooltip title="Remove">
							<IconButton
								color="error"
								onClick={() => setOpenConfirm(true)}
							>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					)}
					<Tooltip title="Create note">
						<IconButton onClick={handleCreate}
									sx={{ ml: 1 }}>
							<AddIcon />
						</IconButton>
					</Tooltip>
				</Box>
			</Box>

			{isEditing ? (
				<Box>
					<TextField
						placeholder="Title..."
						minRows={10}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						sx={{ mb: 2 }}
					/>
					<TextField
						placeholder="Note..."
						multiline
						fullWidth
						minRows={10}
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					{isNew && (
						<Button
							variant="contained"
							onClick={handleSaveNewNote}
							sx={{ mt: 1 }}
						>
							Save
						</Button>
					)}
				</Box>
			) : (
				<Box sx={{ whiteSpace: 'pre-wrap' }}>
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
