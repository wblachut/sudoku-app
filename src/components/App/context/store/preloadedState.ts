import { getSudoku } from '../../../../utils/sudokuFunctions';
import { Board, NumberBoard } from '../../../Sudoku/types';

export type SudokuState = {
	board: Board;
	solution: NumberBoard;
	validating: boolean;
};

const initialSudoku = getSudoku();

const preloadedState: SudokuState = {
	board: initialSudoku.board,
	solution: initialSudoku.solution,
	validating: false,
};

export default preloadedState;
