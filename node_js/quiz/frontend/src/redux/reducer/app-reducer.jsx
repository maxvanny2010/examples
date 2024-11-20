import { ACTION_TYPE } from '../../utils/index.jsx';

const initialAppReducer = {
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {
		},
		onCancel: () => {
		},
	},
};
export const appReducer = (state = initialAppReducer, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			};
		case ACTION_TYPE.CLOSE_MODAL:
			return initialAppReducer;
		default:
			return state;
	}
};
