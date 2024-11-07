import { ACTION_TYPE } from '../../utils';

const initialAppState = {
	isLogout: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {
		},
		onCancel: () => {
		},
	},
};
export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				isLogout: !state.isLogout,
			};
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
			return initialAppState;
		default:
			return state;
	}
};
