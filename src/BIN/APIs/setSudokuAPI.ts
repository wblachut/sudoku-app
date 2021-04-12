import { getSudokuBoard } from './getBoardAPI';
import { getSudokuSolution } from './getSolutionAPI';

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
