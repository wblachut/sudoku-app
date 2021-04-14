import { getSudokuBoard } from './APIs/getBoardAPI';
import { getSudokuSolution } from './APIs/getSolutionAPI';

type Difficulty = 'easy' | 'medium' | 'hard';
type Board = number[][];

export const setSudokuBoard = async (
	difficulty: Difficulty,
	setBoard: React.Dispatch<React.SetStateAction<Board | undefined>>,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setSolution: React.Dispatch<React.SetStateAction<Board | undefined>>
): Promise<Board | undefined> => {
	const boardData = await getSudokuBoard(difficulty);
	if (!boardData) return;
	setBoard(boardData);
	setLoading((isLoading) => !isLoading);
	const solutionData = await getSudokuSolution(boardData);
	setSolution(solutionData);
	return boardData;
};

export const getEmptyBoard = (x: number): Board => {
	const matrix = new Array(9).fill(0).map(() => new Array(9).fill(x));
	return matrix;
};

export const emptySudokuBoard = getEmptyBoard(0);
