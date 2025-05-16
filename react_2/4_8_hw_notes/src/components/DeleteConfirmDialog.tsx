import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

interface DeleteConfirmDialogProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

export  function DeleteConfirmDialog({ open, onClose, onConfirm }: DeleteConfirmDialogProps) {
	return (
		<Dialog open={open}
				onClose={onClose}>
			<DialogTitle>Remove this note?</DialogTitle>
			<DialogActions sx={{justifyContent: 'center'}}>
				<Button onClick={onClose}>Cancel</Button>
				<Button color="error"
						onClick={onConfirm}>
					Remove
				</Button>
			</DialogActions>
		</Dialog>
	);
}
