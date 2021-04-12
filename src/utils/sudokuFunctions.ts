import { makepuzzle, solvepuzzle } from 'sudoku';

const getFormattedBoard = (raw: any) => {
	const board = raw.map((e: number | null) => (e === null ? 0 : e + 1));
	return formatBoard(board);
};

const getFormattedSolution = (rawSolution: any) => {
	const solutionBoard = rawSolution.map((e: number) => e + 1);
	return formatBoard(solutionBoard);
};

const formatBoard = (unformatted: any) => {
	const board: number[][] = [];
	for (let i = 0; i < 9; i++) {
		const row: number[] = [];
		for (let j = 0; j < 9; j++) {
			const value = unformatted[i * 9 + j];
			const col: number = value;
			row.push(col);
		}
		board.push(row);
	}
	return board;
};

export const getSudoku = () => {
	const raw = makepuzzle();
	const rawSolution = solvepuzzle(raw);

	const result = {
		board: getFormattedBoard(raw),
		solution: getFormattedSolution(rawSolution),
	};
	return result;
};

export const alertSudokuValidation = (candidate: any, solution: any): void => {
	if (
		candidate.every((value: number, index: number) => value === solution[index])
	) {
		alert('Congratulations, sudoku solved correctly !');
	} else {
		alert('Sorry, sudoku solved wrong !');
	}
};
