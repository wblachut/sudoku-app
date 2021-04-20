import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import preloadedState, {
	SudokuState,
} from '../App/context/store/preloadedState';
import { Board } from './types';

type SetSudokuPayloadType = {
	board: Board;
	solution: Board;
	validating: false;
};

const sudokuSlice = createSlice({
	name: 'sudoku',
	initialState: preloadedState,
	reducers: {
		setSudokuBoard: (
			state: SudokuState = preloadedState,
			action: PayloadAction<SudokuState>
		): any => {
			return {
				board: action.payload.board,
				solution: action.payload.solution,
				validating: false,
			};
		},
		assignSudokuValue: (
			state: SudokuState = preloadedState,
			action: PayloadAction<SetSudokuPayloadType>
		): any => {
			return {};
		},
		setValidating: (
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

export default sudokuSlice;
