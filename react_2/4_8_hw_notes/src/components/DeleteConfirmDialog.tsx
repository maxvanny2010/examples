import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { TITLES } from '../constants';

interface DeleteConfirmDialogProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

export function DeleteConfirmDialog({ open, onClose, onConfirm }: DeleteConfirmDialogProps) {
	return (
		<Dialog open={open}
				onClose={onClose}>
			<DialogTitle>{TITLES.REMOVE_NOTE}</DialogTitle>
			<DialogActions sx={{ justifyContent: 'center' }}>
				<Button onClick={onClose}>Cancel</Button>
				<Button color="error"
						onClick={onConfirm}>
					{TITLES.REMOVE}
				</Button>
			</DialogActions>
		</Dialog>
	);
}
