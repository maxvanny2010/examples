import React, { createContext, useContext, useEffect, useState } from 'react';
import { db, type Note } from '../db/NotesDB';

type NewNoteData = Omit<Note, 'id' | 'createdAt' | 'user'> & { user?: string };

interface NotesContextType {
	notes: Note[];
	addNote: (note: NewNoteData) => Promise<Note>;
	updateNote: (id: number, updatedNote: Partial<Note>) => Promise<void>;
	deleteNote: (id: number) => Promise<void>;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
	const [notes, setNotes] = useState<Note[]>([]);
	const user = localStorage.getItem('user') || '';

	useEffect(() => {
		if (user) {
			db.notes.where('user').equals(user).toArray().then(setNotes);
		}
	}, [user]);

	const addNote = async (note: NewNoteData): Promise<Note> => {
		const newNote: Note = {
			...note,
			user: user,
			createdAt: new Date(),
		};
		await db.notes.add(newNote);
		setNotes(await db.notes.where('user').equals(user).toArray());
		return newNote;
	};

	const updateNote = async (id: number, updatedNote: Partial<Note>) => {
		if (!updatedNote.user) {
			updatedNote.user = user;
		}
		await db.notes.update(id, updatedNote);
		setNotes(await db.notes.where('user').equals(user).toArray());
	};

	const deleteNote = async (id: number) => {
		await db.notes.delete(id);
		setNotes(await db.notes.where('user').equals(user).toArray());
	};

	return (
		<NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
			{children}
		</NotesContext.Provider>
	);
};

export const useNotes = () => {
	const context = useContext(NotesContext);
	if (!context) {
		throw new Error('useNotes must be used within a NotesProvider');
	}
	return context;
};
