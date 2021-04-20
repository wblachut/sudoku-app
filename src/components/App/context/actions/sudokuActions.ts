import { Board } from '../../../Sudoku/types';

export type setSudokuBoard = {
	type: 'sudoku/setSudokuBoard';
	payload: Board;
};

export const setSudokuBoard = (board: Board, solution: Board): any => ({
	type: 'sudoku/setSudokuBoard',
	payload: { board, solution },
});
export const assignSudokuValue = () => ({
	type: 'sudoku/assignValueToCell',
});

export const setValidating = () => ({
	type: 'sudoku/setValidating',
});
