import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import explorerReducer from '../features/fileExplorer/explorerSlice';

export const store = configureStore({
	reducer: {
		fileSystemEntry: explorerReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;