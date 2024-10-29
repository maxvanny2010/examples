import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import {
	DrawReducer,
	FieldsReducer,
	GameEndReducer,
	PlayerReducer,
	ScoreReducer,
} from './reducers/index-reducers.jsx';

const reducers = combineReducers({
	stateScore: ScoreReducer,
	stateFields: FieldsReducer,
	statePlayer: PlayerReducer,
	stateGameEnd: GameEndReducer,
	stateDraw: DrawReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
