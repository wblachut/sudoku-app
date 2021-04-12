import { getSudokuBoard } from './APIs/getBoardAPI';

type Board = number[][];

export const getEmptyBoard = (x: number): Board => {
	const matrix = new Array(9).fill(0).map(() => new Array(9).fill(x));
	return matrix;
};

export const emptySudokuBoard = getEmptyBoard(0);
export const readySudokuBoard = getSudokuBoard('easy');
