import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import rehypeHighlight from 'rehype-highlight';
import { useNotes } from '../contexts/NotesContext';
import type { Note } from '../db/NotesDB';
import { TITLES } from '../constants';
import remarkBreaks from 'remark-breaks';

import DeleteConfirmDialog from './DeleteConfirmDialog';
import CodeBlockMarkdown from './CodeBlockMarkdown';
import ReactMarkdown from 'react-markdown';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import 'highlight.js/styles/github-dark.css';

interface NoteDetailProps {
	note: Note | null;
	onNoteDeleted: () => void;
	onNoteCreated: (note: Note) => void;
	isCreating: boolean;
	onStartCreating: () => void;
}

export default function NoteDetail({
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
		if (!note || !isEditing || isNew || note.id === undefined) return;
		const interval = setInterval(() => {
			updateNote(note.id!, { title, content: text });
		}, 1000);
		return () => clearInterval(interval);
	}, [note, text, title, isEditing, isNew]);

	const handleDelete = () => {
		if (!note?.id) return;
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
		if (!title.trim() || !text.trim()) return;
		const newNote = await addNote({ title, content: text });
		setIsEditing(false);
		setIsNew(false);
		onNoteCreated(newNote);
	};

	return (
		<Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
			<Box
				display="flex"
				flexDirection={{ xs: 'column', sm: 'row' }}
				justifyContent="space-between"
				alignItems={{ xs: 'flex-start', sm: 'center' }}
				gap={2}
				mb={2}
				flexShrink={0}
			>
				{(title || note || isNew) && (
					<Typography variant="h5"
								sx={{ wordBreak: 'break-word' }}>
						{title || (note ? note.title : isNew ? TITLES.CREATE_NOTE : '')}
					</Typography>
				)}

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
							<IconButton color="error"
										onClick={() => setOpenConfirm(true)}>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					)}
				</Box>
			</Box>

			<Box
				sx={{
					flexGrow: 1,
					overflowY: 'auto',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{isEditing ? (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							flexGrow: 1,
							minHeight: 0,
							overflow: 'hidden',
						}}
					>
						<Box sx={{ pr: 0.5 }}>
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
									mb: 2,
									'& .MuiInputBase-root': {
										padding: 1,
										overflow: 'auto',
										alignItems: 'flex-start',
									},
									'& .MuiInputBase-inputMultiline': {
										whiteSpace: 'pre-wrap',
										wordBreak: 'break-word',
										resize: 'vertical',
									},
								}}
							/>
						</Box>
						{isNew && (
							<Box
								sx={{
									display: 'flex',
									flexDirection: { xs: 'column', sm: 'row' },
									justifyContent: 'flex-end',
									gap: 1,
									pt: 2,
								}}
							>
								<Button
									variant="contained"
									onClick={handleSaveNewNote}
									sx={{ width: { xs: '100%', sm: 'auto' } }}
								>
									{TITLES.SAVE}
								</Button>
								<Button
									variant="outlined"
									onClick={() => {
										setIsEditing(false);
										setIsNew(false);
										onNoteDeleted();
									}}
									sx={{ width: { xs: '100%', sm: 'auto' } }}
								>
									{TITLES.CANCEL}
								</Button>
							</Box>
						)}
					</Box>
				) : (
					<Box
						sx={{
							whiteSpace: 'pre-wrap',
							fontSize: { xs: '0.9rem', sm: '1rem' },
							flexGrow: 1,
							overflowY: 'auto',
							wordBreak: 'break-word',
							'& pre': {
								overflowX: 'auto',
								whiteSpace: 'pre-wrap',
								wordBreak: 'break-word',
								maxWidth: '100%',
								backgroundColor: '#282c34',
								borderRadius: 1,
								padding: 1,
							},
							'& code': {
								wordBreak: 'break-word',
								whiteSpace: 'pre-wrap',
							},
						}}
					>
						<ReactMarkdown
							remarkPlugins={[remarkBreaks]}
							rehypePlugins={[rehypeHighlight]}
							components={{ code: CodeBlockMarkdown }}
						>
							{text}
						</ReactMarkdown>
					</Box>
				)}
			</Box>

			<DeleteConfirmDialog
				open={openConfirm}
				onClose={() => setOpenConfirm(false)}
				onConfirm={handleDelete}
			/>
		</Box>
	);
}
