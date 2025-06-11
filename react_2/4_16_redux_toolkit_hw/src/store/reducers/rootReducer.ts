import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './сontactsReducer';
import { groupsReducer } from './groupsReducer';
import { favoritesReducer } from './favoritesReducer';

export const rootReducer = combineReducers({
	contacts: contactsReducer,
	groups: groupsReducer,
	favorites: favoritesReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['contacts', 'groups'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
