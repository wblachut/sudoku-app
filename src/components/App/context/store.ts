import { configureStore } from '@reduxjs/toolkit';
import { sudokuReducer } from '../../Sudoku/sudokuSlice';
// import preloadedState from './preloadedState';

const reducer = {
	sudoku: sudokuReducer,
};

const store = configureStore({
	reducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	// devTools: process.env.NODE_ENV !== 'production',
	// preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
