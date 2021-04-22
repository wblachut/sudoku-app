import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import preloadedState, {
	SudokuState,
} from '../App/context/store/preloadedState';
import { RootState } from '../App/context/store/store';
import { Board, SudokuType } from './types';

type SetSudokuPayloadType = {
	board: Board;
	solution: Board;
	validating: false;
};

const sudokuSlice = createSlice({
	name: 'sudoku',
	initialState: preloadedState,
	reducers: {
		setSudoku: (
			state: SudokuState = preloadedState,
			action: PayloadAction<SudokuType>
		): any => {
			return {
				board: action.payload.board,
				solution: action.payload.solution,
				validating: false,
			};
		},
		setSudokuBoard: (
			state: SudokuState = preloadedState,
			action: PayloadAction<Board>
		): any => {
			return {
				...state,
				board: action.payload,
			};
		},
		setValidate: (
			state: SudokuState = preloadedState,
			action: PayloadAction<boolean>
		): any => {
			return {
				...state,
				validating: action.payload,
			};
		},
	},
});

export const { setSudoku, setSudokuBoard, setValidate } = sudokuSlice.actions;

export const getSudokuSelector = (state: RootState) => state.sudoku;

export const sudokuReducer = sudokuSlice.reducer;
