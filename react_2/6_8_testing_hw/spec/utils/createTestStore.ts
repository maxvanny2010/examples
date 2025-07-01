import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from 'src/store/taskSlice';


export const createTestStore = () => configureStore({
	reducer: {
		taskList: taskListReducer,
	},
});
