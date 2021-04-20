import { getSudoku } from '../../../../utils/sudokuFunctions';
import { Board } from '../../../Sudoku/types';

export type SudokuState = {
	board: Board;
	solution: Board;
	validating: boolean;
};

const initialSudoku = getSudoku();

const preloadedState: SudokuState = {
	board: initialSudoku.board,
	solution: initialSudoku.solution,
	validating: false,
};

export default preloadedState;
